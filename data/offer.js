// What every tuition plan includes, the standard discounts and the Founding 40 offer.
// Values from the school (Oct 24 and Oct 27, 2026). Every included item, discount and
// Founding 40 term on the site is read from this file, so a change here updates every page.
// The site never shows tuition amounts: families ask for a quote instead.
import { site } from '@/data/site'

const lunchAges = '15 months and up'

const included = [
  { icon: 'lunch', title: 'Catered lunch and snacks', note: `For children ${lunchAges}` },
  { icon: 'music', title: 'Music classes', note: 'In every tuition plan' },
  { icon: 'spanish', title: 'Spanish classes', note: 'In every tuition plan' },
  { icon: 'stem', title: 'STEM-based, Montessori-inspired learning', note: 'Hands-on discovery every day' },
  { icon: 'noFees', title: 'No annual fees', note: 'Monthly tuition, nothing yearly on top' },
]

const discounts = {
  standardPercent: 10,
  // Wording and order as the site listed them before the Founding 40 update.
  standardGroups: [
    { icon: 'police', label: 'Law Enforcement Officers' },
    { icon: 'responder', label: 'First Responders' },
    { icon: 'veteran', label: 'Veterans' },
    { icon: 'nurse', label: 'Nurses & Nursing Staff' },
    { icon: 'sibling', label: 'Siblings' },
    { icon: 'church', label: 'Church & Nonprofit Organization Employees' },
  ],
  rule: 'One discount per child.',
}

// To take the offer down, set show to false. That hides the announcement bar and every Founding 40 block.
const founding = {
  show: true,
  name: 'Founding 40',
  spotsTotal: 40,
  deadline: null, // text like 'December 31, 2026'. null hides the line
  lockYears: 2,
  siblingPercent: 20,
}

const location = {
  line: '2 miles from Route 7. 1 mile from the Dulles Greenway.',
  // Same distances, written as one sentence for the FAQ answer.
  sentence: '2 miles from Route 7 and 1 mile from the Dulles Greenway.',
}

const f = founding
const pct = discounts.standardPercent

const quote = {
  label: 'Get a Tuition Quote',
  // #enquiry is the contact form, so the prefilled message is on screen when the page opens.
  href: '/contact?topic=tuition#enquiry',
  heading: 'Get a tuition quote',
  message: 'I’d like tuition rates for my child. Age: , Days per week: ',
}

const lockSentence = `Tuition rates are locked for ${f.lockYears} years from your child’s start date, as long as your child stays enrolled without a break.`

const summary = `${f.name}: Tuition locked for ${f.lockYears} years, ${f.siblingPercent}% sibling discount, registration fee waived.`

export const offer = {
  included,
  discounts,
  founding,
  location,
  quote,

  // "Included" section (Home and /tuition) and the short mentions elsewhere.
  includedCopy: {
    heading: 'Included in every',
    headingHighlight: 'tuition plan',
    closing: 'Competitive Loudoun County tuition, with more included.',
    short: 'Lunch, music and Spanish included.',
    heroBadge: { value: 'Lunch, music and Spanish', label: 'Included' },
    aboutLine: 'Catered lunch, music and Spanish classes are included in every tuition plan.',
    aboutLink: 'See what’s included',
    tuitionLink: `Tuition, discounts and ${f.name}`,
  },

  // Announcement bar on every page, and the compact strip on Programs, About, Tour and Contact.
  bar: {
    text: summary,
    shortText: `${f.name}: Tuition locked for ${f.lockYears} years.`,
    link: 'See the offer',
    shortLink: 'See offer',
    href: '/tuition#founding-40',
  },

  // Full Founding 40 block (Home and /tuition).
  block: {
    label: f.name,
    heroLabel: `${f.name}: Now Enrolling`,
    heading: `Join our first ${f.spotsTotal} families`,
    subheading: 'Enroll as a founding family and lock in these benefits.',
    cards: [
      {
        big: `${f.lockYears} years`,
        title: `Tuition rates locked in for ${f.lockYears} years`,
        text: `Your founding rate holds for ${f.lockYears} years from your child’s start date.`,
      },
      {
        big: `${f.siblingPercent}%`,
        title: `${f.siblingPercent}% sibling discount`,
        text: `Double our standard ${pct}% sibling discount.`,
      },
      { icon: 'fee', title: 'Registration fee waived', text: `${f.name} families pay no registration fee.` },
    ],
    scarcity: `Limited to the first ${f.spotsTotal} families to enroll.`,
    deadline: f.deadline ? `Offer ends ${f.deadline} or when all ${f.spotsTotal} spots are filled.` : null,
    detailsLink: 'See details',
    ctaLine: `${f.name} spots are limited. Lock in your tuition for ${f.lockYears} years.`,
    terms: `${f.name} terms: Open to the first ${f.spotsTotal} families who complete enrollment. ${lockSentence} When your child moves up to the next age group, the founding rate for that group applies. The ${f.siblingPercent}% sibling discount replaces the standard ${pct}% sibling discount and applies to each additional child. The registration fee is waived. ${discounts.rule}`,
  },

  // /tuition page.
  tuition: {
    title: `Tuition and ${f.name}`,
    intro: 'Competitive Loudoun County tuition, with more included. Catered lunch, music and Spanish come with every plan, and there are no annual fees.',
    howItWorks: {
      heading: 'How tuition works',
      points: [
        'Tuition depends on your child’s age group and schedule, from 3-day plans to full-time care.',
        'Before care, after care and transportation are available.',
        'Children can attend up to 10 hours a day, between 6:30 am and 6:30 pm.',
      ],
      closing: 'Ask for a quote and we’ll send the rates for your family.',
    },
    discountsCopy: {
      heading: 'Discounts',
      lead: `${pct}% off tuition for:`,
      foundingNote: `${f.name} families get ${f.siblingPercent}% off for siblings instead of ${pct}%.`,
    },
    questionsHeading: 'Tuition questions',
    closing: 'See the classrooms and meet our team.',
  },

  faqs: {
    cost: {
      q: 'How much is tuition?',
      a: `Tuition depends on your child’s age and schedule. Ask for a quote and we’ll send rates for your family. Catered lunch, music and Spanish are included, there are no annual fees, and siblings save ${pct}%.`,
      link: { label: quote.label, href: quote.href },
    },
    tuition: [
      { q: 'Is lunch included?', a: `Catered lunch and snacks are included for children ${lunchAges}. Families may also send lunch from home. We are a nut-free facility, and families who send food sign an outside food agreement form.` },
      { q: 'Are music and Spanish extra?', a: 'No. Music and Spanish classes are included in every tuition plan.' },
      { q: `How does the ${f.lockYears}-year rate lock work?`, a: lockSentence },
      { q: 'How many hours can my child attend?', a: 'Up to 10 hours a day, between 6:30 am and 6:30 pm.' },
      { q: 'Do you accept child care subsidies?', a: 'We do not accept state child care subsidies at this time.' },
    ],
    location: { q: 'Where are you located?', a: `${site.address.full}. ${location.sentence}` },
  },

  meta: {
    home: `STEM-based, Montessori-inspired Christian preschool in Ashburn, VA. Lunch, music and Spanish included. ${f.name} families lock tuition for ${f.lockYears} years.`,
    tuition: `Catered lunch, music and Spanish included in tuition. No annual fees. ${pct}% sibling discount. ${f.name} families lock tuition for ${f.lockYears} years.`,
  },
}
