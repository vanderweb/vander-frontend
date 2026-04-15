export interface NavItem {
  label: string
  url: string
  target?: '_blank' | '_self'
}

export interface SiteConfig {
  siteName: string
  description: string
  logoUrl: string
  email: string
  phone: string
  address: string
}
