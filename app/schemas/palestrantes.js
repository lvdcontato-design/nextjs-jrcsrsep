export default {
  name: 'palestrantes',
  title: 'Palestrantes',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome do Especialista',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cargo',
      title: 'Cargo / Instituição',
      type: 'string',
      placeholder: 'Ex: Fundador da Planeta Terra Tur',
    },
    {
      name: 'biografia',
      title: 'Biografia / Resumo',
      type: 'text',
      rows: 4,
    },
    {
      name: 'foto',
      title: 'Foto do Palestrante',
      type: 'image',
      options: {
        hotspot: true, // Permite ajustar o corte da foto direto pelo painel
      },
    },
  ],
};
