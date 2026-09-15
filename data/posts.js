// NOTE: the old site's blog posts were all "This text is a temporary placeholder".
// These are real starter articles written for Sunlight Childcare — edit the copy freely,
// or add new entries to this array and a page is generated automatically.
export const posts = [
  {
    slug: 'kindergarten-readiness-checklist',
    title: 'What kindergarten readiness really looks like',
    category: 'Kindergarten',
    date: '2024-07-09',
    readingTime: '4 min read',
    image: '/images/program-preschool.jpg',
    excerpt:
      'Kindergarten readiness is far less about reading fluently and far more about confidence, curiosity and the ability to be part of a group.',
    body: [
      'Parents often ask us whether their four-year-old should be reading before kindergarten. The honest answer is no — and the research agrees. What kindergarten teachers actually hope for is a child who can separate from a parent calmly, follow a two-step instruction, take turns, and try something hard without giving up.',
      'In our preschool program we build those skills into the ordinary parts of the day. Circle time teaches listening and waiting. Learning centres teach choosing and finishing. Clean-up teaches responsibility. None of it feels like school to a child, which is exactly the point.',
      'Alongside that, we lay early literacy and numeracy foundations: recognising and writing their name, hearing the first sound in a word, counting objects with one-to-one matching, and sorting by colour, size and shape. Children who arrive at kindergarten with these habits settle in within days.',
      'If your child is heading to kindergarten next year, the most useful thing you can do at home is read together for fifteen minutes a day and let them do small things for themselves — zip the coat, pour the water, carry the bag. Confidence is the curriculum.',
    ],
  },
  {
    slug: 'why-art-matters-in-early-childhood',
    title: 'Why paint, glue and mess belong in every day',
    category: 'Painting',
    date: '2024-07-09',
    readingTime: '3 min read',
    image: '/images/gallery-2.jpg',
    excerpt:
      'A painting session is a fine-motor workout, a language lesson and an emotional outlet all at once. Here is what is really happening behind the mess.',
    body: [
      'When a toddler drags a brush across paper, they are strengthening the same small muscles they will later use to hold a pencil. When a preschooler chooses colours and explains their picture, they are practising decision-making and vocabulary. Art is never just art at this age.',
      'We keep open-ended materials within reach every day — paint, dough, chalk, collage scraps, safety scissors — and we deliberately avoid colouring sheets with one right answer. Open-ended work lets each child work at their own level, which matters enormously in a mixed-age classroom.',
      'Art is also one of the gentlest ways children process feelings they cannot yet name. A child who has had a hard drop-off will often settle at the art table faster than anywhere else in the house.',
      'Our only rule is that the process matters more than the product. Some days a masterpiece goes home. Some days it is brown mush, and that is a good day too.',
    ],
  },
  {
    slug: 'screen-free-games-that-teach',
    title: 'Screen-free games that teach more than you would expect',
    category: 'Play',
    date: '2024-07-09',
    readingTime: '4 min read',
    image: '/images/gallery-6.jpg',
    excerpt:
      'Simple group games build memory, self-control and turn-taking — the exact skills that predict how well a child does at school.',
    body: [
      'Our afternoons are deliberately screen-free, and the games we play are older than any of us: Simon Says, Red Light Green Light, memory pairs, I Spy, obstacle courses in the yard.',
      'These games are quietly demanding. Simon Says asks a child to hold a rule in mind and stop an impulse. Memory pairs trains working memory. Board games teach losing gracefully — arguably the hardest lesson of the primary years.',
      'Mixed ages help here too. Older children explain the rules, which cements their own understanding, while younger children stretch to keep up with the group.',
      'If you want one game to bring home, make it a nightly round of "highs and lows" at dinner. It costs nothing, takes four minutes, and it teaches children to put feelings into words — the foundation of everything else.',
    ],
  },
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)
