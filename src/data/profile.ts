
/**
 * YOUR IDENTITY
 * Profile information for John Denielle Perez.
 * Keep the original photo paths until the resume photo is added.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'John Denielle Perez',
  firstName: 'John',
  handle: '@johndenielleperez',
  role: 'Technical Support | Customer Experience | Virtual Assistant',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Professional profile',
  email: 'johndenielleperez@gmail.com',
  location: 'Cavite, Philippines | UTC+8',
  stats: [
    { value: '2+ Years', label: 'Customer Support', Icon: Briefcase },
    { value: '3 Roles', label: 'Customer-Focused Experience', Icon: SealCheck },
    { value: 'UTC+8', label: 'Philippines Timezone', Icon: Clock },
  ],
  displayName: {
    line1: 'Technical support.',
    line2: 'Done with care.',
  },
  hero: {
    body: "I'm a technical support and customer experience professional with experience supporting AI-powered applications, fintech customers, QuickBooks users, and online platform safety. I focus on clear communication, practical troubleshooting, and careful follow-through.",
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Profile photo of John Denielle Perez',
  },
  socials: [
    {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/john-denielle-perez-47a4a1290/',
      iconPath: '/icons/linkedin.svg',
    },
  ],
}
