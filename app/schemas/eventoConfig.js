export default {
  name: 'eventoConfig',
  title: 'Configurações do Evento',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título do Fórum',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slogan',
      title: 'Slogan / Subtítulo',
      type: 'text',
      rows: 2,
    },
    {
      name: 'data',
      title: 'Data do Evento',
      type: 'string',
      placeholder: 'Ex: 23 de Julho de 2026',
    },
    {
      name: 'local',
      title: 'Local do Evento',
      type: 'string',
      placeholder: 'Ex: Polo de Ecoturismo de São Paulo',
    },
    {
      name: 'linkInscricao',
      title: 'Link do Formulário de Inscrição',
      type: 'url',
    },
  ],
};
