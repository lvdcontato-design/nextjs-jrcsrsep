export default {
  name: 'programacao',
  title: 'Programação / Cronograma',
  type: 'document',
  fields: [
    {
      name: 'horario',
      title: 'Horário',
      type: 'string',
      placeholder: 'Ex: 09:00',
    },
    {
      name: 'atividade',
      title: 'Nome da Atividade',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tipo',
      title: 'Tipo de Atividade',
      type: 'string',
      options: {
        list: [
          { title: 'Geral (Credenciamento, Almoço, etc.)', value: 'Geral' },
          { title: 'Palestra / Painel', value: 'Palestra' },
          { title: 'Oficina Prática', value: 'Oficina' },
        ],
      },
    },
  ],
};
