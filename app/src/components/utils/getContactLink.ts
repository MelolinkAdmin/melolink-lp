import contactsDataJson from "@/public/data/contatos.json";

/**
 * Busca o link de um canal de atendimento pelo título definido no CMS.
 * Exemplo: getContactLink("Comercial")
 */
export const getContactLink = (title: string): string => {
  const channel = contactsDataJson.channels.find(
    (c: any) => c.title.toLowerCase() === title.toLowerCase()
  );
  
  // Se não encontrar o canal, retorna um link padrão para não quebrar o site
  return channel?.link || "https://wa.me/551333721548"; 
};