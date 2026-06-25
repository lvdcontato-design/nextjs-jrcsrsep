export default {
  name: 'atracoes',
  title: 'Atrações e Oficinas',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título da Oficina',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descricao',
      title: 'Descrição completa',
      type: 'text',
      rows: 4,
    },
    {
      name: 'vagas',
      title: 'Disponibilidade de Vagas',
      type: 'string',
      placeholder: 'Ex: 30 vagas por turma ou Livre',
    },
    {
      name: 'imagem',
      title: 'Imagem de Destaque',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
