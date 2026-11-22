/**
 * The film and its chapters. Start times come from the xfade offsets in
 * output/engineer-film/edit-filter.txt (verified against the 46.25 s export).
 * Scenes are narrative illustrations, not photographs of real places or events.
 */

export const FILM_DURATION = 46.25;

export const film = {
  sources: [
    { src: "/media/film/journey-720.mp4", type: "video/mp4", label: "720p" },
    { src: "/media/film/journey-1080.mp4", type: "video/mp4", label: "1080p (original)" },
  ],
  poster: "/media/film/poster.webp",
  label:
    "The Journey of an Engineer — a silent 46-second animated short following one boy from his walk to school to a night workstation as an engineer.",
};

export type Chapter = {
  n: string;
  start: number;
  title: string;
  stage: "Childhood" | "College" | "Now";
  caption: string;
  image: { src: string; alt: string; position: string };
};

export const chapters: Chapter[] = [
  {
    n: "01",
    start: 0,
    title: "The walk to school",
    stage: "Childhood",
    caption: "A tree-lined street in morning light. A boy with a backpack, already looking ahead.",
    image: {
      src: "/media/scenes/childhood-walk-to-school.webp",
      alt: "Illustration: a young boy in a light-blue school shirt walks away down a sunlit, tree-lined street towards a school gate.",
      position: "50% 60%",
    },
  },
  {
    n: "02",
    start: 5.75,
    title: "The first love: computer games",
    stage: "Childhood",
    caption: "The first screen that answered back. Play turned, slowly, into wondering how it worked.",
    image: {
      src: "/media/scenes/childhood-gaming-bedroom.webp",
      alt: "Illustration: an excited boy at a desk in a cosy bedroom, hand on the mouse, playing an adventure game on a large monitor.",
      position: "45% 35%",
    },
  },
  {
    n: "03",
    start: 11.5,
    title: "Arriving at engineering college",
    stage: "College",
    caption: "Navy T-shirt, the same blue backpack, a campus much bigger than the street he started on.",
    image: {
      src: "/media/scenes/college-campus-arrival.webp",
      alt: "Illustration: a college student with a navy backpack walks towards a glass-fronted campus building on a sunny path.",
      position: "35% 40%",
    },
  },
  {
    n: "04",
    start: 15.25,
    title: "Learning to program",
    stage: "College",
    caption: "Daylight in the lab. Code that doesn't run yet — and the patience to make it.",
    image: {
      src: "/media/scenes/college-programming-laboratory.webp",
      alt: "Illustration: a focused student types on a laptop in a bright programming lab with large windows.",
      position: "55% 30%",
    },
  },
  {
    n: "05",
    start: 19,
    title: "Graduation",
    stage: "College",
    caption: "B.Tech in Computer Science and Engineering, 2021–2025. Golden hour, degree in hand.",
    image: {
      src: "/media/scenes/engineering-graduation.webp",
      alt: "Illustration: a smiling graduate in a black gown holds a blank degree folder in front of a campus building at golden hour.",
      position: "35% 30%",
    },
  },
  {
    n: "06",
    start: 24.75,
    title: "Software engineering",
    stage: "Now",
    caption: "A glass office in Bengaluru, a city skyline, and systems other people depend on.",
    image: {
      src: "/media/scenes/bengaluru-software-engineer-office.webp",
      alt: "Illustration: a young engineer works at a desk with two monitors showing code and a system diagram, city towers through the window.",
      position: "60% 35%",
    },
  },
  {
    n: "07",
    start: 31.5,
    title: "Personal AI experiments",
    stage: "Now",
    caption: "After hours, under a desk lamp: notebooks, papers, and ideas worth trying.",
    image: {
      src: "/media/scenes/late-night-ai-research.webp",
      alt: "Illustration: at night, the engineer types at a workstation with three monitors and an open notebook under a warm desk lamp.",
      position: "30% 35%",
    },
  },
  {
    n: "08",
    start: 39.25,
    title: "The builder",
    stage: "Now",
    caption: "Late at night, leaning in to the screens: the next thing is already being built.",
    image: {
      src: "/media/scenes/builder-at-night.webp",
      alt: "Still from the film: at night, the engineer leans towards his three-monitor workstation, an open sketchbook of diagrams on the desk.",
      position: "30% 30%",
    },
  },
];

/** Index of the chapter playing at `t` seconds. Pure, so it can be tested. */
export function chapterAt(t: number, list: Pick<Chapter, "start">[] = chapters): number {
  if (!Number.isFinite(t) || t <= 0) return 0;
  let i = 0;
  for (let k = 0; k < list.length; k++) if (t >= list[k].start) i = k;
  return i;
}

export const lifeStages = [
  {
    age: "Age 8",
    label: "Curiosity",
    line: "Games, questions, and the first screen that answered back.",
    src: "/media/portraits/childhood-protagonist.webp",
    alt: "Character portrait: an eight-year-old boy in a cream shirt and navy trousers with a blue backpack, smiling and looking up.",
  },
  {
    age: "Age 20",
    label: "Craft",
    line: "Ramaiah Institute of Technology · B.Tech CSE · CGPA 9.06 / 10.",
    src: "/media/portraits/protagonist-college-age-20.webp",
    alt: "Character portrait: a twenty-year-old student in a navy T-shirt and jeans with the same blue backpack.",
  },
  {
    age: "Age 23",
    label: "Building",
    line: "Software Engineer at NatWest Group. Applied AI and backend systems.",
    src: "/media/portraits/protagonist-age-23.webp",
    alt: "Character portrait: a twenty-three-year-old engineer in a grey shirt and dark trousers, standing with a calm smile.",
  },
] as const;
