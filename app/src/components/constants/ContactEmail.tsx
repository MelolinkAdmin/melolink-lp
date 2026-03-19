// app/emails/ContactEmail.tsx
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text, Link
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  name: string; email: string; phone: string; cep: string; isClient: string; message: string;
}

export const ContactEmail = ({ name, email, phone, cep, isClient, message }: ContactEmailProps) => {
  const isExistingClient = isClient.toLowerCase() === 'sim';

  return (
    <Html>
      <Head />
      <Preview>Novo contato: {name} ({cep})</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header com a cor da marca */}
          <Section style={header}>
            <Heading style={h1}>Melo<span style={{ color: '#EE1D23' }}>link</span></Heading>
          </Section>
          
          <Section style={section}>
            <div style={{ marginBottom: '24px' }}>
                <Text style={text}>Você recebeu uma nova solicitação de contato:</Text>
            </div>

            {/* Status Badge - Destaque imediato */}
            <div style={isExistingClient ? badgeSuccess : badgeAlert}>
              {isExistingClient ? '✓ JÁ É CLIENTE' : '★ NÃO É CLIENTE'}
            </div>
            
            <div style={card}>
              <div style={column}>
                <div style={column}>
                  <Text style={label}>NOME COMPLETO</Text>
                  <Text style={value}>{name}</Text>
                </div>
                <div style={column}>
                  <Text style={label}>CEP</Text>
                  <Text style={value}>{cep}</Text>
                </div>
              </div>

              <Hr style={hrLight} />
              
              <div style={column}>
                <div style={column}>
                  <Text style={label}>E-MAIL</Text>
                  <Link href={`mailto:${email}`} style={link}>{email}</Link>
                </div>
           
                <div    >
                  <Text style={label}>TELEFONE / WHATSAPP</Text>
                  <Text style={value}>{phone}</Text>
                </div>
              </div>
            </div>

            <Text style={label}>MENSAGEM DO USUÁRIO:</Text>
            <Section style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Hr style={hr} />
            
            <Text style={footer}>
                Este é um e-mail automático gerado pelo formulário do site.<br/>
                <strong>Melolink</strong>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Estilos Otimizados
const main = { backgroundColor: '#f4f4f7', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif' };
const container = { margin: '0 auto', padding: '40px 0', width: '600px' };
const header = { padding: '40px', backgroundColor: '#0a0a14', textAlign: 'center' as const, borderRadius: '16px 16px 0 0' };
const h1 = { color: '#ffffff', fontSize: '28px', fontWeight: '900', margin: '0', letterSpacing: '-1px' };
const section = { backgroundColor: '#ffffff', padding: '40px', borderRadius: '0 0 16px 16px', border: '1px solid #e6e6e6' };
const text = { color: '#525f7f', fontSize: '16px', lineHeight: '24px', textAlign: 'center' as const };

const card = { padding: '24px', border: '1px solid #f0f0f0', borderRadius: '12px', backgroundColor: '#ffffff', margin: '20px 0' };
const row = { display: 'flex' as const, flexDirection: 'row' as const };
const column = { width: '50%' };

const label = { color: '#8898aa', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '4px', textTransform: 'uppercase' as const };
const value = { color: '#0a0a14', fontSize: '15px', fontWeight: '600', margin: '0 0 16px 0' };
const link = { color: '#EE1D23', fontSize: '15px', fontWeight: '600', textDecoration: 'none' };

const badgeSuccess = { backgroundColor: '#ecfdf5', color: '#059669', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', textAlign: 'center' as const, display: 'block', marginBottom: '10px' };
const badgeAlert = { backgroundColor: '#fef2f2', color: '#EE1D23', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', textAlign: 'center' as const, display: 'block', marginBottom: '10px' };

const hr = { borderColor: '#e6e6e6', margin: '30px 0' };
const hrLight = { borderColor: '#f4f4f7', margin: '15px 0' };

const messageBox = { backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #EE1D23' };
const messageText = { color: '#1a1f36', fontSize: '14px', lineHeight: '24px', margin: '0' };
const footer = { color: '#8898aa', fontSize: '11px', textAlign: 'center' as const, lineHeight: '18px' };