import { CareerProgram } from "@/types/product";

const SEAMLESS_HIRING_URL = "https://tranos.seamlesshiring.com/h/advanced#/jobs";

export const careersHeroCopy = {
  headline: "Meet Our People",
  subheadline:
    "Experience Tranos through the stories of our people celebrating growth, creativity and the difference we all make together.",
};

export const wantToWorkCopy = {
  subheading: "Want to Work at Tranos?",
  paragraphs: [
    "As a leader in the engineering and manufacturing industry, Tranos creates a dynamic environment for professionals to thrive. Enabling a culture that pushes boundaries and drives innovation.",
    "We are committed to sustainability and we prioritize our people, enabling an inclusive and innovative work environment that fosters career-growth by supporting skill development and professional advancement - equipping teams with expertise to overcome new challenges.",
  ],
  bullets: [
    "Optimize our processes",
    "Integrate eco-friendly practices",
    "Recognize efforts",
    "Reward excellence and provide growth opportunities through meaningful benefits and compensation to create a sense of value among our employees because we have them at heart.",
  ],
  ctaLabel: "Explore Open Roles",
  ctaHref: SEAMLESS_HIRING_URL,
};

export const earlyCareerPrograms: CareerProgram[] = [
  {
    id: "internship-program",
    name: "Tranos' Internship Program",
    description:
      "Do you want to kick-start your career with Tranos' Internship Program? This opportunity is designed to provide hands-on industry experience by bridging the gap between academic and real-world applications. The program provides interns with structured training, practical exposure and the avenue to contribute to impactful projects beyond the classroom.",
    eligibility: [
      "Have completed at least their second year of tertiary institution but not in their final year.",
      "Be pursuing a degree in any discipline (preferably engineering or related fields).",
      "Demonstrate strong academic performance.",
      "Show a passion for innovation in engineering and manufacturing.",
    ],
    ctaLabel: "Explore All Roles",
    ctaHref: SEAMLESS_HIRING_URL,
  },
  {
    id: "graduate-internship-program",
    name: "Graduate Internship Program",
    description:
      "Have a go at corporate exposure with Tranos' Graduate Internship Program. This opportunity is designed for recent graduates seeking valuable industry experience, while awaiting their National Youth Service Corps (NYSC) deployment.",
    benefits: [
      "Hands-on experience of real projects.",
      "Mentorship from industry professionals.",
      "Structured training.",
      "Helping interns develop essential and technical professional skills in a dynamic engineering and manufacturing environment.",
    ],
    eligibility: [
      "Be a recent graduate awaiting NYSC deployment.",
      "Hold a degree in any discipline (engineering and related fields are preferred).",
      "Have a strong academic background and a passion for innovation.",
      "Be eager to gain practical experience and develop industry-relevant skills.",
    ],
    ctaLabel: "Explore Graduate Internship Roles",
    ctaHref: SEAMLESS_HIRING_URL,
  },
  {
    id: "thinkers-trainee-program",
    name: "Tranos Thinkers Trainee Program",
    description:
      "Curious about innovation and problem-solving? Then Tranos Thinkers Trainee Programme is the right fit for you. This specialized development program is designed to identify and nurture ambitious graduates looking to build a successful career. It is an immersive training experience that incorporates hands-on exposure into exclusive learning opportunities, and structured career progression. Equipping trainees with industry-relevant skills and integrating them into Tranos' culture of innovation, excellence, and problem-solving.",
    eligibility: [
      "Be a recent graduate with 0-2 years of work experience.",
      "Hold a degree in engineering, science or related fields.",
      "Demonstrate strong analytical, problem-solving, and leadership potential.",
      "Be eager to learn, innovate, and take on challenges in a dynamic environment.",
    ],
    ctaLabel: "Explore Open Roles",
    ctaHref: SEAMLESS_HIRING_URL,
  },
];

export const experiencedHires = {
  paragraphs: [
    "At Tranos, we recognize that experience fuels innovation and as such we seek industry professionals eager to tackle complex challenges, take the lead on transformative projects, and collaboratively drive groundbreaking advancements in engineering and manufacturing.",
    "Our work environment consists of a dynamic workforce that promotes collaboration, continuous learning, and professional development. Ensuring each team member has the right resources to excel.",
  ],
  lookingForHeading: "What We Look Out For",
  bullets: [
    "Professionals with proven expertise in engineering, manufacturing, or related fields.",
    "Individuals who thrive in fast-paced, and innovative environments.",
    "Leaders who can drive change, optimize processes, and inspire teams.",
    "Problem-solvers, who are passionate about engineering excellence and cutting-edge solutions.",
  ],
  ctaLabel: "Join Us — See Open Roles",
  ctaHref: SEAMLESS_HIRING_URL,
};
