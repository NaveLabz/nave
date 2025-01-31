const createSiteConfig = () => {
  const links = {
    github: 'https://github.com/navelabz/nave',
    instagram: 'https://www.instagram.com/navelabz/',
    whatsapp: '',
  }

  const mainNav = [
    {
      label: 'Projetos',
      href: '#projetos',
    },
    {
      label: 'Processo',
      href: '#processo',
    },
    {
      label: 'Avaliações',
      href: '#avaliacoes',
    },
    {
      label: 'Benefícios',
      href: '#beneficios',
    },
    {
      label: 'Preços',
      href: '#precos',
    },
    {
      label: 'FAQ',
      href: '#faq',
    },
  ]

  return {
    name: 'Nave Labz | Transforme sua presença digital',
    url: 'https://navelabz.com.br',
    description:
      'Criamos sites e experiências digitais que ajudam sua empresa a a se destacar no mundo online.',
    ogImage: 'https://navelabz.com.br/og.jpg',
    mainNav,
    links,
  }
}

export const siteConfig = createSiteConfig()
