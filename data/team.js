// Our Team page (glcm.net/team) and the team preview on the homepage and About page.
// Bios are the text Peter John and Isabel sent in October 2026, unedited apart from line breaks.
// Photos live in public/images/team. A person with photo: null shows their initials until the headshot arrives.
// Jenifer Badham's headshot is due Friday, Oct 16: save it as public/images/team/jenifer-badham.jpg
// and change her photo to '/images/team/jenifer-badham.jpg'.
// Isabel Yadav's headshot is also due Friday: save it as public/images/team/isabel-yadav.jpg
// and change her photo to '/images/team/isabel-yadav.jpg'.
// Bio blocks: a string is a paragraph, { heading } is a subheading, { quote, cite } is a quote.
export const teamGroups = [
  {
    id: 'founders',
    title: 'Our Founders',
    people: [
      {
        slug: 'founders',
        name: 'Peter John & Kiran John',
        shortName: 'Peter & Kiran John',
        role: 'Founders',
        previewRole: 'Founders',
        subtitle: 'Faith • Truth • Excellence',
        photo: '/images/team/peter-kiran-john.jpg',
        photoAlt: 'Peter John and Kiran John, founders of Guiding Light Christian Montessori',
        initials: 'PK',
        moreLabel: 'Read their full story',
        intro: [
          "Peter John and Kiran John are the founders of Guiding Light Christian Montessori (GLCM), a Christ-centered early childhood education community established with a shared calling to provide children with a nurturing environment where faith, character, academic excellence, and a lifelong love of learning can grow together.",
          "For Peter and Kiran, Guiding Light Christian Montessori is more than a school—it is a ministry and a mission. As parents themselves, they understand the tremendous trust families place in those who care for and educate their children. Their vision is to create a safe, loving, and academically enriching environment where every child is valued as uniquely created by God and encouraged to develop spiritually, intellectually, socially, emotionally, and physically.",
        ],
        more: [
          { heading: 'Peter John – Co-Founder' },
          "Peter brings more than two decades of professional leadership experience in banking, business development, relationship management, operations, and organizational leadership. Throughout his career, he has held leadership and management positions within the financial services industry, developing extensive experience in building teams, serving families and communities, managing operations, and creating sustainable organizations.",
          "Beyond his professional career, Peter has a deep commitment to Christian ministry, fellowship, and community service. His heart for bringing people together and building meaningful relationships has helped shape the vision for GLCM as a place where children, parents, educators, churches, and the broader community can grow together.",
          "As Co-Founder, Peter provides leadership in the areas of strategic planning, business operations, financial stewardship, community partnerships, organizational development, and the long-term vision of GLCM.",
          { heading: 'Kiran John – Co-Founder' },
          "Kiran is at the heart of the vision and culture of Guiding Light Christian Montessori. As a wife, mother, and woman of faith, she brings a deeply personal understanding of the importance of creating an environment where children experience genuine love, patience, encouragement, security, and Christian values during their formative years.",
          "Her commitment to children and families has been instrumental in shaping GLCM's nurturing, family-centered approach. Kiran believes education should develop more than academic ability; it should also cultivate character, compassion, independence, confidence, responsibility, and a growing understanding of God's love.",
          "As Co-Founder, Kiran helps guide the school's culture, family engagement, educational environment, and commitment to ensuring that the values upon which GLCM was founded remain visible in the everyday experiences of children, families, and staff.",
          { heading: 'A Shared Calling' },
          "Peter and Kiran's journey as founders is rooted in their Christian faith and their belief that God has entrusted parents and educators with the extraordinary responsibility of preparing the next generation.",
          "Their vision for Guiding Light Christian Montessori combines the individualized, hands-on principles of Montessori education with a distinctly Christ-centered foundation. They desire for children not only to become capable learners, but also compassionate individuals who understand truth, demonstrate kindness, respect others, develop strong character, and discover the gifts God has placed within them.",
          "Together, Peter and Kiran are committed to building a school community where qualified educators, dedicated families, Christian leaders, and community partners work together for the benefit of every child.",
          "Their prayer is that Guiding Light Christian Montessori will be a place where children are known, loved, challenged, and encouraged—and where the foundation established during their earliest years prepares them for a lifetime of learning, service, leadership, and faith.",
          { quote: '“Train up a child in the way he should go, and when he is old he will not depart from it.”', cite: 'Proverbs 22:6' },
          "At Guiding Light Christian Montessori, Peter and Kiran seek to honor God through the work entrusted to them and to uphold the school's foundational values: Faith • Truth • Excellence",
        ],
      },
    ],
  },
  {
    id: 'advisors',
    title: 'Board of Advisors',
    people: [
      {
        slug: 'brian-shannon',
        name: 'Pastor Brian Shannon',
        shortName: 'Pastor Brian Shannon',
        role: 'Member, Board of Advisors',
        previewRole: 'Board of Advisors',
        subtitle: 'Pastoral Advisor & Spiritual Leadership',
        photo: '/images/team/brian-shannon.jpg',
        photoAlt: 'Pastor Brian Shannon, member of the Guiding Light Christian Montessori Board of Advisors',
        initials: 'BS',
        moreLabel: 'Read full bio',
        intro: [
          "Pastor Brian Shannon brings a unique combination of pastoral ministry, educational leadership, youth mentorship, and school administration experience to the Guiding Light Christian Montessori community.",
        ],
        more: [
          "Originally from Brooklyn, New York City, Pastor Brian moved to the Myrtle Beach, South Carolina area at the age of 13. During his senior year of high school, after hearing the Gospel shared by his mother, he came to a saving faith in Jesus Christ—an experience that would ultimately shape his lifelong commitment to Christian ministry, education, and service to others.",
          "Pastor Brian earned a Bachelor of Arts in Education from Coastal Carolina University and later completed a Master’s degree in School Administration from Cambridge College. His professional career includes four years of service as a mentor and youth advocate through the Department of Juvenile Justice, as well as work as a group-home mental health associate.",
          "He went on to dedicate 20 years to public education, serving his first five years as a science teacher and the following 15 years as a school administrator and certified principal. His extensive experience working with students, families, teachers, and school communities provides valuable insight into educational leadership and the development of nurturing, structured learning environments.",
          "Ordained into ministry in the Southern Baptist Church in 2005, Pastor Brian subsequently answered the Lord's call to serve within the Calvary Chapel movement. Over the course of 15 years at three Calvary Chapel churches, he served in numerous ministry leadership roles, including Worship Leader, Director of Evangelism, Preacher and Teacher, and Youth Pastor. During the latter part of this ministry, he sensed God's call to full-time pastoral ministry.",
          "Pastor Brian's extensive background in both Christian ministry and professional education makes his guidance especially meaningful to Guiding Light Christian Montessori as we seek to provide children with an academically enriching, Christ-centered environment built upon our core values of Faith • Truth • Excellence.",
          "Pastor Brian has been married for more than 20 years to his college sweetheart, Toni Shannon. Together they have two children and their beloved dog, Sassy. His commitment to Christ, family, education, and the spiritual development of the next generation reflects the heart of GLCM's mission to nurture children academically, socially, and spiritually.",
        ],
      },
      {
        slug: 'john-myers',
        name: 'John Myers',
        shortName: 'John Myers',
        role: 'Member, Board of Advisors',
        previewRole: 'Board of Advisors',
        subtitle: null,
        photo: '/images/team/john-myers.jpg',
        photoAlt: 'John Myers, member of the Guiding Light Christian Montessori Board of Advisors',
        initials: 'JM',
        moreLabel: 'Read full bio',
        intro: [
          "John Myers brings a remarkable combination of entrepreneurship, agriculture, sustainability, technical innovation, business development, and faith-centered leadership to the Board of Advisors of Guiding Light Christian Montessori.",
        ],
        more: [
          "A third-generation dairy farmer from Littlestown, Pennsylvania, John grew up with a strong appreciation for hard work, stewardship, family, and community. He initially believed God's path would lead him into electrical engineering and began his studies at Penn State University. However, his journey took a different direction when he left school to return to farming.",
          "At age 21, John met his future wife, Ginger, and together they began building a life, family, and business. They established Green Manor Farm and were blessed with two children, Susan and Andrew. Farming during the difficult agricultural and economic environment of the 1980s challenged John and Ginger to think creatively and entrepreneurially.",
          "John established a hay and straw business that developed new retail and distribution channels, including marketing straw through major retailers such as Home Depot. At the same time, Ginger founded an analytical laboratory and became certified and accredited in nutrient testing for agronomic applications.",
          "When their farm business ultimately closed in 1993, John viewed the experience not simply as an ending, but as another chapter in the path God was creating for their family.",
          "Over the following years, John pursued several entrepreneurial ventures, including a lawn installation company, international agricultural sales and development, and businesses in Puerto Rico, including a commercial composting operation. He developed significant expertise in commercial composting, agricultural systems, and sustainable resource management, helping develop additional commercial composting facilities in Florida.",
          "As Susan and Andrew entered important formative years, John and Ginger intentionally adjusted their professional lives so they could remain more closely involved with their children. Ginger entered agricultural marketing and extension work, while John became manager of the Baltimore City Composting Facility, one of the largest and most advanced operations of its kind. The facility became a center for research, technology, and professional learning, welcoming visitors and industry representatives from across the United States and around the world.",
          "In 2006, after their children had completed school and begun their own lives, John and Ginger returned to their agricultural roots by purchasing what became Evermore Farm in Westminster, Maryland. Built around regenerative and pasture-based agricultural principles, Evermore Farm developed direct-to-consumer programs, an on-farm retail store, and community-supported agriculture initiatives. The farm produces pasture-raised beef, pork, and eggs for direct sale to its community.",
          "John has continued his entrepreneurial journey by developing a specialized business that harvests and repurposes components for medical, scientific, and other commercial equipment. His diverse professional experiences have given him a distinctive ability to combine big-picture thinking with practical technical skills, turning ideas into workable solutions.",
          "Throughout the successes, challenges, transitions, and unexpected turns of his life, John's faith has remained foundational. He views his journey as evidence of God's guidance and provision and seeks to use the experience, knowledge, and opportunities he has been given for God's glory.",
          "As a member of the Guiding Light Christian Montessori Board of Advisors, John offers valuable perspective in entrepreneurship, organizational development, sustainability, problem-solving, stewardship, and long-term strategic thinking. His life reflects the importance of perseverance, innovation, family, faithful stewardship, and trusting God's direction through every season.",
        ],
      },
    ],
  },
  {
    id: 'director',
    title: 'Our Director',
    people: [
      {
        slug: 'jenifer-badham',
        name: 'Jenifer Badham, CDA',
        shortName: 'Jenifer Badham',
        role: 'Director',
        previewRole: 'Director',
        subtitle: 'Bachelor of Arts in Business Administration · Early Childhood Education Leader',
        photo: null,
        photoAlt: 'Jenifer Badham, Director of Guiding Light Christian Montessori',
        initials: 'JB',
        moreLabel: 'Read full bio',
        intro: [
          "My name is Jenifer Badham, and I am honored to introduce myself as your Director. I was born and raised in Howard County, Maryland, and I was blessed to grow up in a strong Christian home. I was born and raised in church under the guidance of my father, who is a pastor. My faith and upbringing have helped shape the values, compassion, integrity, and leadership that I bring to my work each day.",
        ],
        more: [
          "I hold a Child Development Associate (CDA) Credential and a Bachelor of Arts in Business Administration. I began my career in early childhood education working directly with children—from infants through school-age—before growing into management and center director leadership roles.",
          "With 17 years of experience in early childhood education, I have developed a deep passion for children, families, and building strong teams of dedicated educators. Throughout my career, I have focused on creating safe, nurturing, and engaging environments where children can learn, grow, and feel valued.",
          "I come from a long line of educators and am proud to continue that tradition. I believe working with children is more than a career—it is a calling. My greatest joy is seeing children smile, watching them reach new milestones, and knowing that I have played a positive role in their development. I am equally passionate about supporting teachers, partnering with families, and creating a school community where everyone feels welcomed and respected.",
          "Outside of my professional life, I am married and a proud mother of two children. I enjoy interior decorating, arts and crafts, shopping, and event planning, and I love creating memorable experiences for my family and those around me.",
          "I am truly excited about this next chapter and look forward to bringing my experience, leadership, faith, and love for children to Guiding Light Christian Montessori School. My goal is to help build a school community where children are nurtured academically, socially, emotionally, and spiritually, while families and teachers feel supported every step of the way.",
        ],
      },
    ],
  },
  {
    id: 'staff',
    title: 'Our Staff',
    people: [
      {
        slug: 'isabel-yadav',
        name: 'Isabel Yadav',
        shortName: 'Isabel Yadav',
        role: 'Operations Manager',
        previewRole: 'Operations Manager',
        subtitle: null,
        photo: null,
        photoAlt: 'Isabel Yadav, Operations Manager at Guiding Light Christian Montessori',
        initials: 'IY',
        moreLabel: 'Read full bio',
        intro: [
          "Hi, I’m Isabel! I’m a wife, mom, and most importantly, a follower of Jesus. My faith is a huge part of who I am, and I’m so grateful to be part of a school where we can share that love with children and families every day. Becoming a mom has changed the way I see childhood and made me even more passionate about creating an environment where children feel deeply loved and encouraged to grow into exactly who God created them to be.",
        ],
        more: [
          "Before joining Guiding Light, I spent several years working in marketing, branding, and creative design. I love bringing ideas to life, and getting to use that creativity to help build something meaningful for children and families has been such a blessing. Outside of school, you’ll probably find me spending time with my family, working on some kind of home project that makes my husband anxious, or getting a little too excited about Christmas (yes, I’m one of those people who is ready for Christmas way too early!).",
          "I am excited for the future of Guiding Light and I’m so thankful God has brought me to this school, I look forward to getting to know the wonderful families who become part of our community!",
        ],
      },
    ],
  },
]

export const teamPeople = teamGroups.flatMap((g) => g.people)
