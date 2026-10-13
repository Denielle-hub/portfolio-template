
export type FunnelTag = 'Lead Capture' | 'Booking' | 'Checkout' | 'Website'

export type Funnel = {
  file: string
  label: string
  tag: FunnelTag
  desc: string
  dir?: 'funnels' | 'samples'
}

const funnel = (
  n: string,
  label: string,
  tag: FunnelTag,
  desc: string,
): Funnel => ({
  file: `placeholder-funnel-${n}.html`,
  label: `Sample Funnel ${n} — ${label}`,
  tag,
  desc: `Portfolio demonstration only. ${desc}`,
})

const site = (
  n: string,
  label: string,
  desc: string,
): Funnel => ({
  file: `placeholder-site-${n}.html`,
  label: `Website Sample ${n} — ${label}`,
  tag: 'Website',
  desc: `Portfolio demonstration only. ${desc}`,
  dir: 'samples',
})

export const gymFunnel: Funnel[] = [
  funnel(
    '01',
    'Customer Support Request',
    'Lead Capture',
    'A sample customer support request page for collecting customer details and questions.',
  ),
  funnel(
    '02',
    'Virtual Assistant Inquiry',
    'Lead Capture',
    'A sample inquiry page for people interested in virtual assistant services.',
  ),
  funnel(
    '03',
    'Technical Help Intake',
    'Lead Capture',
    'A sample technical support form for describing issues and troubleshooting attempts.',
  ),
]

export const bookingFunnel: Funnel[] = [
  funnel(
    '04',
    'Support Consultation Booking',
    'Booking',
    'A sample page for requesting a customer support consultation.',
  ),
  funnel(
    '05',
    'Virtual Assistant Services',
    'Lead Capture',
    'A sample landing page presenting virtual assistant services.',
  ),
  funnel(
    '06',
    'Customer Support Help Center',
    'Lead Capture',
    'A sample help center providing customer support information and guidance.',
  ),
]

export const websiteFunnel: Funnel[] = [
  site(
    '01',
    'ClearPath Technical Support',
    'A fictional technical support website focused on troubleshooting and customer assistance.',
  ),
  site(
    '02',
    'Bloom Assist',
    'A fictional virtual assistant agency website presenting administrative and customer support services.',
  ),
  site(
    '03',
    'TechBridge Support',
    'A fictional technical support and customer service website.',
  ),
  site(
    '04',
    'NexaAssist',
    'A fictional virtual assistant and administrative services website.',
  ),
  site(
    '05',
    'TaskFlow Pro',
    'A fictional productivity and project management product website.',
  ),
  site(
    '06',
    'GreenDesk Solutions',
    'A fictional remote business support services website.',
  ),
]

export const tagColors: Record<FunnelTag, string> = {
  'Lead Capture': '#8b5cf6',
  Booking: '#ec4899',
  Checkout: '#f59e0b',
  Website: '#FF7A1A',
}
