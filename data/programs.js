// Two age-based programs. Slugs drive /programs/[slug], the nav dropdown and the
// contact form's "Program of interest" list.
export const programs = [
  {
    slug: 'infants-toddlers',
    name: 'Infants & Toddlers',
    age: '6 Weeks – 3 Years',
    shortAge: '6 wks – 3 yrs',
    formLabel: 'Infants & Toddlers — 6 Weeks to 3 Years',
    accent: 'sun',
    image: '/images/school/toddler-classroom.jpg',
    tagline: 'A loving, responsive start for our youngest learners.',
    description:
      'A loving and responsive environment designed around the developmental needs of infants and toddlers, including nurturing care, sensory experiences, movement, language development, practical-life exploration, and growing independence.',
    focus: [
      'Nurturing, responsive care',
      'Sensory experiences and exploration',
      'Movement and motor development',
      'Language development',
      'Practical-life exploration and growing independence',
    ],
    day: [
      { time: '6:30 – 8:30 am', activity: 'Arrival, cuddles and a gentle start to the morning' },
      { time: '8:30 – 10:00 am', activity: 'Breakfast, sensory bins and tummy time' },
      { time: '10:00 – 11:30 am', activity: 'Music, movement and outdoor fresh air' },
      { time: '11:30 am – 2:30 pm', activity: 'Lunch, story time and naps on each child’s own schedule' },
      { time: '2:30 – 6:30 pm', activity: 'Snack, free play, motor-skill games and pickup' },
    ],
  },
  {
    slug: 'preschool-prek',
    name: 'Preschool & Pre-K',
    age: '3 – 6 Years',
    shortAge: '3 – 6 yrs',
    formLabel: 'Preschool & Pre-K — 3 to 6 Years',
    accent: 'sky',
    image: '/images/school/preschool-activity-table.jpg',
    tagline: 'Montessori-inspired learning, with kindergarten readiness right behind it.',
    description:
      'A Christ-centered, Montessori-inspired learning environment combining purposeful hands-on activities, academics, social-emotional development, practical life, STEM, coding, robotics, creative arts, and kindergarten readiness.',
    focus: [
      'Montessori-inspired, hands-on learning',
      'Academics, literacy and mathematics',
      'Social-emotional development and practical life',
      'STEM, coding and robotics',
      'Creative arts and kindergarten readiness',
    ],
    day: [
      { time: '6:30 – 8:30 am', activity: 'Arrival, free choice centres and breakfast' },
      { time: '8:30 – 9:30 am', activity: 'Circle time, calendar, weather and a Bible story' },
      { time: '9:30 – 11:00 am', activity: 'Letters, numbers and hands-on learning centres' },
      { time: '11:00 am – 1:00 pm', activity: 'Outdoor play, lunch and quiet story time' },
      { time: '1:00 – 6:30 pm', activity: 'Rest, art, STEM, music, dramatic play and pickup' },
    ],
  },
]

export const getProgram = (slug) => programs.find((p) => p.slug === slug)
