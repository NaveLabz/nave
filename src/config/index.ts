const createSiteConfig = () => {
  const links = {
    github: 'https://github.com/navelabz/nave',
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
      label: 'Serviços',
      href: '#servicos',
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
    name: 'Nave',
    url: 'https://navelabz.com.br',
    description: 'Nave description.',
    ogImage: 'https://navelabz.com.br/og.jpg',
    mainNav,
    links,
  }
}

export const siteConfig = createSiteConfig()
