const createSiteConfig = () => {
  const links = {
    github: 'https://github.com/navelabz/nave',
  }

  return {
    name: 'Nave',
    url: 'https://navelabz.com.br',
    description: 'Nave description.',
    ogImage: 'https://navelabz.com.br/og.jpg',
    links,
  }
}

export const siteConfig = createSiteConfig()
