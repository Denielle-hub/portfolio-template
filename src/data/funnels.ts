
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
  label: `Sample Project — ${label}`,
  tag,
  desc: `DEMONSTRATION ONLY. ${desc}`,
})

const site = (
  n: string,
  label: string,
  desc: string,
): Funnel => ({
  file: `placeholder-site-${n}.html`,
  label: `Sample Website — ${label}`,
  tag: 'Website',
  desc: `DEMONSTRATION ONLY. ${desc}`,
  dir: 'samples',
})

export const gymFunnel: Funnel[] = [
  funnel(
    '01',
    'Customer Support Request',
    'Lead Capture',
    'A fictional help page that collects a customer's name, contact details, and support question.',
  ),
  funnel(
    '02',
    'Service Inquiry',
    'Checkout',
    'A fictional service inquiry page that explains next steps before a customer submits a request.',
  ),
  funnel(
    '03',
    'Technical Help Intake',
    'Lead Capture',
    'A fictional technical support form for reporting an issue and describing troubleshooting already attempted.',
  ),
]

export const bookingFunnel: Funnel[] = [
  funnel(
    '04',
    'Support Consultation',
    'Booking',
    'A fictional appointment page where visitors can review consultation details and request a time.',
  ),
  funnel(
    '05',
    'Virtual Assistant Discovery Call',
    'Booking',
    'A fictional booking page for discussing administrative support and customer communication needs.',
  ),
  funnel(
    '06',
    'Customer Follow-Up',
    'Booking',
    'A fictional follow-up scheduling page designed to help customers choose a convenient contact time.',
  ),
]

export const websiteFunnel: Funnel[] = [
  site(
    '01',
    'Technical Support Center',
    'A fictional support website with troubleshooting topics, common questions, and contact guidance.',
  ),
  site(
    '02',
    'Fintech Help Desk',
    'A fictional financial technology help website covering account access, payment status, and common support questions.',
  ),
  site(
    '03',
    'Virtual Assistant Services',
    'A fictional service website presenting email management, data entry, and customer inquiry assistance.',
  ),
  site(
    '04',
    'AI Application Help',
    'A fictional help website explaining how users can report application issues and find basic guidance.',
  ),
  site(
    '05',
    'Online Store Customer Care',
    'A fictional online store support website with order questions, delivery information, and return guidance.',
  ),
  site(
    '06',
    'Community Safety Help',
    'A fictional community support website explaining reporting options, platform rules, and escalation guidance.',
  ),
]

export const tagColors: Record<FunnelTag, string> = {
  'Lead Capture': '#8b5cf6',
  Booking: '#ec4899',
  Checkout: '#f59e0b',
  Website: '#FF7A1A',
}
