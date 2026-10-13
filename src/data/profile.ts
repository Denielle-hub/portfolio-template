/**
 * YOUR IDENTITY
 * Profile information for John Denielle Perez.
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
  verifiedLabel: 'Professional Profile',
  email: 'johndenielleperez@gmail.com',
  location: 'Cavite, Philippines | UTC+8',
  stats: [
    { value: '2+ Years', label: 'Customer Support', Icon: Briefcase },
    { value: '3 Areas', label: 'Technical, Financial & AI Support', Icon: SealCheck },
    { value: 'UTC+8', label: 'Philippines Timezone', Icon: Clock },
  ],
  displayName: {
    line1: 'Support that works.',
    line2: 'Service that cares.',
  },
  hero: {
    body: "I'm a customer-focused technical support professional with experience helping Intuit QuickBooks users with account access, payments, payroll, and basic troubleshooting. I also have experience reviewing AI responses, supporting workmates, and helping maintain safer online platforms. I value clear communication, practical problem-solving, and reliable customer service.",
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Profile illustration for John Denielle Perez',
  },
  socials: [
    {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/john-denielle-perez-47a4a1290/',
      iconPath: '/icons/linkedin.svg',
    },
  ],
}
