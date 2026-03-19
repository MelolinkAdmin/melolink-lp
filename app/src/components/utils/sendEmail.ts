// app/actions/sendEmail.ts
'use server'

import { Resend } from 'resend';
import { cookies } from 'next/headers'; 
import { ContactEmail } from '../constants/ContactEmail';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const COOLDOWN_TIME = 2 * 60 * 1000; 

const DISPOSABLE_DOMAINS = [
  '10minutemail.com', 'temp-mail.org', 'guerrillamail.com', 
  'sharklasers.com', 'mailinator.com', 'yopmail.com', 
  'dispostable.com', 'getnada.com', 'boun.cr', 'tempmail.net'
];

// Função de Sanitização para evitar XSS
function sanitize(str: string) {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return str.replace(reg, (match) => map[match]);
}

export async function sendEmail(formData: FormData) {
  const cookieStore = await cookies(); 
  const lastSend = cookieStore.get('last_email_sent')?.value;
  const now = Date.now();

  if (lastSend && now - parseInt(lastSend) < COOLDOWN_TIME) {
    const remainingSeconds = Math.ceil((COOLDOWN_TIME - (now - parseInt(lastSend))) / 1000);
    return { error: `Aguarde ${remainingSeconds} segundos antes de enviar outra solicitação.` };
  }

  if (formData.get('b_website_url')) return { error: "Solicitação inválida por suspeita de spam." };

  // Extração e Sanitização imediata
  const rawName = (formData.get('senderName') as string)?.trim() || '';
  const rawMessage = (formData.get('message') as string)?.trim() || '';
  
  const name = sanitize(rawName);
  const message = sanitize(rawMessage);
  
  const email = (formData.get('senderEmail') as string)?.trim();
  const phone = formData.get('senderPhone') as string;
  const cep = formData.get('senderCep') as string;
  const isClient = formData.get('isClient') as string;

  if (!name || !email || !message || !phone || !cep || !isClient) {
    return { error: "Por favor, preencha todos os campos obrigatórios." };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { error: "O e-mail informado parece estar incorreto." };
  }

  const domain = email.split('@')[1].toLowerCase();
  if (DISPOSABLE_DOMAINS.includes(domain)) {
    return { error: "E-mails temporários não são permitidos. Use um e-mail válido." };
  }
  
  if (name.length > 100) return { error: "O nome inserido é muito longo." };
  if (message.length > 1000) return { error: "Sua mensagem excedeu o limite de 1000 caracteres." };
  if (phone.length > 25) return { error: "O número de telefone informado é inválido." };

  try {
    const { data, error } = await resend.emails.send({
      from: 'MeloLink Site <onboarding@resend.dev>',
      to: 'melolinkinternet@gmail.com',
      subject: `🚀 Novo contato do site: ${name}`,
      replyTo: email,
      react: React.createElement(ContactEmail, { name, email, phone, cep, isClient, message }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { error: "O serviço de e-mail está instável. Tente novamente em instantes." };
    }

    cookieStore.set('last_email_sent', now.toString(), { 
      maxAge: 120, 
      httpOnly: true, 
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production' 
    });

    return { success: true };

  } catch (err) {
    console.error("Critical Connection Error:", err);
    return { error: "Erro de conexão com o servidor. Tente novamente." };
  }
}