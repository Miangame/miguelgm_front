type Hrefs = {
  href: string
  desc: string
}

export const HOME_HREF: string = '/'
export const PRESENTATIONS_HREF: string = '/presentations'
export const POSTS_HREF: string = '/posts'
export const CONTACT_HREF: string = '/contact'

export const HREFS: Hrefs[] = [
  { href: HOME_HREF, desc: 'home' },
  { href: PRESENTATIONS_HREF, desc: 'presentations' },
  { href: POSTS_HREF, desc: 'devto' },
  { href: CONTACT_HREF, desc: 'contact' }
]
