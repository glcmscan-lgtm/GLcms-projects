// Uniforms page (glcm.net/uniforms), its FAQ answer and the store links.
// The school store is run by ArtsyTrendz. Change the link or the wording here.
const store = 'https://www.artsytrendz.com/guiding_light_christian_montessori/'

export const uniforms = {
  storeUrl: store,                         // top of the store (Shop GLCM Merchandise)
  uniformsUrl: `${store}#school-uniforms`, // uniforms section (Shop Uniforms buttons)
  supportEmail: 'support@artsytrendz.com',
  buttonLabel: 'Shop Uniforms',
  merch: {
    label: 'Shop GLCM Merchandise',
    meta: 'Uniforms now, spirit wear soon', // update when spirit wear goes live
  },
  meta: 'Uniforms for ages 2 and up, Monday through Thursday. Fridays are Friday Fun Days. Order uniform polos online and pick them up at school.',
  hero: {
    eyebrow: 'For Families',
    title: 'School Uniforms',
    text: 'At Guiding Light Christian Montessori, we believe uniforms help create a sense of belonging and school pride!',
  },
  policy: {
    heading: 'School Uniform Policy',
    paragraphs: [
      'Children ages 2 and up are required to wear their school uniform Monday through Thursday. Uniform shirts must be paired with khaki bottoms.',
      'Fridays are for a little extra fun! We celebrate Friday Fun Day, when children can show off their personalities by choosing their own outfits and wearing whatever makes them feel comfortable.',
    ],
  },
  steps: [
    { icon: 'order', title: 'Order online', text: 'Choose short or long sleeve uniform polos in our school store on ArtsyTrendz.' },
    { icon: 'pickup', title: 'Pick up at school', text: 'ArtsyTrendz emails you when your order is ready, usually 5 to 7 business days after payment.' },
    { icon: 'help', title: 'Questions about an order?', text: 'Email the ArtsyTrendz team at' },
  ],
  faq: {
    q: 'Do children wear uniforms?',
    a: 'Yes. Children ages 2 and up are required to wear their school uniform Monday through Thursday. Uniform shirts must be paired with khaki bottoms. Fridays are Friday Fun Days, when children choose their own outfits. Uniform polos are sold through our school store on ArtsyTrendz.',
    link: { label: 'Uniform details and store', href: '/uniforms' },
  },
}
