'use client'

import { sendEmail } from '../../utils/sendEmail';
import { useState, ChangeEvent } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle2, AlertCircle, Phone, CheckCircle, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<{ success?: boolean, error?: string } | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [message, setMessage] = useState('');

  const LIMITS = { NAME: 100, EMAIL: 100, MESSAGE: 1000 };

  // Função auxiliar para limpar tudo
  const clearForm = () => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (form) form.reset();
    setPhone(''); 
    setCep('');
    setMessage('');
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 10) value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    else if (value.length > 6) value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    else if (value.length > 2) value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    else if (value.length > 0) value = value.replace(/^(\d*)/, '($1');
    setPhone(value);
  };

  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    value = value.replace(/^(\d{5})(\d{3}).*/, '$1-$2');
    setCep(value);
  };

  async function handleSubmit(formData: FormData) {
    if (formData.get('b_website_url')) return;
    
    const phoneDigits = phone.replace(/\D/g, '');
    const cepDigits = cep.replace(/\D/g, '');

    // Validação de Front-end: Se falhar, limpa tudo
    if (phoneDigits.length < 10 || cepDigits.length < 8) {
      setStatus({ error: "Dados incompletos. O formulário foi resetado por segurança." });
      clearForm();
      return;
    }

    setIsPending(true);
    setStatus(null);

    try {
      const result = await sendEmail(formData);
      
      if (result.error) {
        // Se o BACK-END retornar erro de validação (e-mail falso, etc)
        setStatus(result);
        clearForm(); // Limpa tudo em caso de erro retornado
      } else {
        // Sucesso
        setStatus(result);
        clearForm();
        setTimeout(() => setStatus(null), 8000);
      }
    } catch (error) {
      // Se houver erro de rede/conexão
      setStatus({ error: "Falha na conexão. O formulário foi resetado." });
      clearForm();
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="w-full max-w-2xl mx-auto bg-white border border-gray-100 p-8 md:p-10 rounded-[32px] shadow-lg relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full -mr-12 -mt-12 blur-2xl opacity-40"></div>

        <div className="mb-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full mb-4 border border-red-100">
            <Send size={12} />
            <span className="text-[10px] font-bold tracking-widest uppercase">E-MAIL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0a14] tracking-tight">
            Deixe sua mensagem  
          </h2>
        </div>

        <form id="contact-form" action={handleSubmit} className="flex flex-col gap-4 relative z-10">
          <input type="text" name="b_website_url" className="hidden" tabIndex={-1} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1 flex items-center gap-2">
                <User size={12} className="text-red-600" /> Nome Completo <span className="text-red-600">*</span>
              </label>
              <input name="senderName" placeholder="Ex: Thiago Militão" maxLength={LIMITS.NAME} required className="w-full bg-gray-50 border border-gray-100 p-3.5 rounded-xl text-sm focus:ring-2 focus:ring-red-600/10 focus:border-red-600 transition-all outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1 flex items-center gap-2">
                <Mail size={12} className="text-red-600" /> E-mail <span className="text-red-600">*</span>
              </label>
              <input name="senderEmail" type="email" placeholder="seu@email.com" maxLength={LIMITS.EMAIL} required className="w-full bg-gray-50 border border-gray-100 p-3.5 rounded-xl text-sm focus:ring-2 focus:ring-red-600/10 focus:border-red-600 transition-all outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1 flex items-center gap-2">
                <Phone size={12} className="text-red-600" /> Telefone <span className="text-red-600">*</span>
              </label>
              <input name="senderPhone" type="tel" value={phone} onChange={handlePhoneChange} placeholder="(13) 99999-9999" required className="w-full bg-gray-50 border border-gray-100 p-3.5 rounded-xl text-sm focus:ring-2 focus:ring-red-600/10 focus:border-red-600 transition-all outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1 flex items-center gap-2">
                <MapPin size={12} className="text-red-600" /> CEP <span className="text-red-600">*</span>
              </label>
              <input name="senderCep" type="text" value={cep} onChange={handleCepChange} placeholder="00000-000" required className="w-full bg-gray-50 border border-gray-100 p-3.5 rounded-xl text-sm focus:ring-2 focus:ring-red-600/10 focus:border-red-600 transition-all outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1 flex items-center gap-2">
                <CheckCircle size={12} className="text-red-600" /> Já é cliente? <span className="text-red-600">*</span>
              </label>
              <select name="isClient" required className="w-full bg-gray-50 border border-gray-100 p-3.5 rounded-xl text-sm focus:ring-2 focus:ring-red-600/10 focus:border-red-600 outline-none appearance-none cursor-pointer">
                <option value=" " disabled selected>Escolha</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5 relative">
            <div className="flex justify-between items-center px-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <MessageSquare size={12} className="text-red-600" /> Mensagem <span className="text-red-600">*</span>
              </label>
              <span className={`text-[10px] font-black ${message.length >= LIMITS.MESSAGE ? 'text-red-600' : 'text-gray-300'}`}>
                {message.length} / {LIMITS.MESSAGE}
              </span>
            </div>
            <textarea 
              name="message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Como podemos ajudar?" 
              maxLength={LIMITS.MESSAGE}
              rows={3} 
              required 
              className={`w-full bg-gray-50 border p-3.5 rounded-xl text-sm transition-all resize-none outline-none ${message.length >= LIMITS.MESSAGE ? 'border-red-600 ring-2 ring-red-600/5' : 'border-gray-100 focus:ring-2 focus:ring-red-600/10 focus:border-red-600'}`} 
            />
          </div>
          
          <button type="submit" disabled={isPending} className="group mt-4 bg-[#0a0a14] text-white font-bold py-4 rounded-xl transition-all hover:bg-red-600 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer">
            {isPending ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Enviar Solicitação <Send size={16} /></>}
          </button>

          {status && (
            <div className={`flex items-start gap-3 p-4 rounded-2xl text-xs font-bold animate-in fade-in slide-in-from-top-2 border ${status.success ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
              {status.success ? <CheckCircle2 size={18} className="shrink-0" /> : <AlertCircle size={18} className="shrink-0" />}
              <div className="flex flex-col gap-0.5">
                <span className="uppercase text-[9px] opacity-60 tracking-widest">{status.success ? 'Sucesso' : 'Erro detectado'}</span>
                <p>{status.success ? "Sua mensagem foi enviada!" : status.error}</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}