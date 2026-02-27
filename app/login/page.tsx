'use client';

import { useState } from 'react';
// Mudamos a importação para evitar o erro de membro ausente
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { LogIn, Loader2, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Inicializa o cliente usando as variáveis de ambiente NEXT_PUBLIC_
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error("Acesso negado: verifique e-mail e senha.");
      } else {
        toast.success("Bem-vindo de volta!");
        // O router.refresh() é vital para que o Middleware perceba o novo cookie
        router.refresh();
        router.push('/admin');
      }
    } catch (err) {
      toast.error("Erro inesperado ao tentar conectar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0E24] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#FF0000]" />
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 text-[#FF0000] mb-4">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-black uppercase italic text-slate-900 tracking-tighter">
            MeloLink <span className="text-[#FF0000]">Admin</span>
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2">
            Área de Acesso Restrito
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-slate-500 ml-1">E-mail</label>
            <input 
              type="email" 
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#FF0000] transition-all font-bold cursor-text"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#FF0000] transition-all font-bold cursor-text"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#FF0000] transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 mt-4 cursor-pointer"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <LogIn size={18} />}
            {loading ? "Verificando..." : "Entrar no Sistema"}
          </button>
        </form>
      </div>
    </main>
  );
}