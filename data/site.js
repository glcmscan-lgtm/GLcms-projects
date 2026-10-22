// Single source of truth for business info. Change it here and it updates everywhere.
// Display name shown in the header/footer wordmark.
export const brand = {
  name: "Guiding Light Christian Montessori",
  line1: "Guiding Light",
  line2: "Christian Montessori",
};

// Enrollment happens on Brightwheel, not on this site. Used by the nav and the footer.
export const enrollmentUrl =
  "https://schools.mybrightwheel.com/sign-in?redirect_path=forms/8c28c94e-9070-484f-9f5b-6984deceab77/self-service";

export const site = {
  name: "Guiding Light Christian Montessori",
  // The LLC is the registered entity; GLCM is the trading name it does business as.
  legalName: "Sunlight Childcare LLC",
  dba: "Guiding Light Christian Montessori",
  url: "https://glcm.net",
  tagline:
    "Nurturing little hearts and minds in the love of Christ and guiding children in the path they should follow.",
  verseRef: "Inspired by Proverbs 22:6",
  values: "Faith • Truth • Excellence",
  shortDescription:
    "A Virginia-licensed, Christ-centered, Montessori-inspired daycare and preschool serving children from 6 weeks to 6 years in Ashburn, Virginia.",
  // Single published number for the school — shown as "UAN" wherever it is labelled.
  phone: "800-363-9855",
  phoneHref: "tel:+18003639855",
  // Local number — shown under the UAN in the footer and on the Contact page.
  localPhone: "703-858-7337",
  localPhoneHref: "tel:+17038587337",
  email: "contact@glcm.net",
  address: {
    street: "42885 Orchard Oriole Dr",
    city: "Ashburn",
    state: "VA",
    zip: "20147",
    full: "42885 Orchard Oriole Dr, Ashburn, VA 20147",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=42885+Orchard+Oriole+Dr+Ashburn+VA+20147",
  hours: {
    label: "Mon–Fri: 6:30 am – 6:30 pm",
    days: "Monday – Friday",
    time: "6:30 am – 6:30 pm",
    closed: "Saturday & Sunday — Closed",
  },
  ages: "6 weeks to 6 years",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/share/19UkG99SMU/" },
    { label: "Instagram", href: "https://www.instagram.com/glchristianmontessori/" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", meta: "Who we are" },
      { label: "Our Team", href: "/team", meta: "Founders, advisors, director and staff" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      {
        label: "Infants & Toddlers",
        href: "/programs/infants-toddlers",
        meta: "6 weeks – 3 years",
      },
      {
        label: "Preschool & Pre-K",
        href: "/programs/preschool-prek",
        meta: "3 – 6 years",
      },
    ],
  },
  { label: "Enrollment", href: enrollmentUrl, external: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const highlights = [
  {
    title: "Warm & Nurturing Environment",
    text: "A welcoming Christian preschool and daycare in Ashburn — warm, nurturing, safe, and designed to help every child feel known, loved, and secure.",
    icon: "home",
    image: "/images/school/sunlit-discovery-room.jpg",
    accent: "sun",
  },
  {
    title: "Quality Educators",
    text: "Experienced, caring, and well-trained teachers committed to supporting each child’s academic, social, emotional, physical, and spiritual development.",
    icon: "graduation",
    image: "/images/school/language-learning-table.jpg",
    accent: "sky",
  },
  {
    title: "Learning Through Discovery",
    text: "Hands-on and sensory learning experiences help children explore, create, and discover. Age-appropriate enrichment includes STEM, coding, robotics, creative arts, movement, and practical-life activities.",
    icon: "blocks",
    image: "/images/school/beads-and-language-materials.jpg",
    accent: "mint",
  },
];

export const trustFacts = [
  { value: "Virginia-Licensed", label: "child day center" },
  { value: "6 Weeks – 6 Years", label: "ages welcomed" },
  { value: "Experienced", label: "& caring teachers" },
  { value: "Open 12 Hours Daily", label: "Mon–Fri · 6:30 am – 6:30 pm" },
];
