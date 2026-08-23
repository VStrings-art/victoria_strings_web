export type Luthier = {
  id: string;
  name: string;
  role?: string;
  specialty: string;
  image: string;
  bio: [string, string];
};

export const luthiers: Luthier[] = [
  {
    id: "j-hu",
    name: "Mrs J. Hu",
    role: "Head of Luthier",
    specialty: "Violins",
    image: "/images/2025/12/l1.webp",
    bio: [
      "She specialises in fine violins inspired by the classic Cremonese makers, with a particular focus on elegant arching and balanced graduations.",
      "Her instruments are chosen by players who seek a warm core sound, a singing upper register and a refined, responsive setup.",
    ],
  },
  {
    id: "q-hu",
    name: "Mr Q. Hu",
    role: "Quality Control Lead",
    specialty: "Violins & Violas",
    image: "/images/2025/12/l13.webp",
    bio: [
      "He brings decades of experience in violin and viola making, combining traditional hand tools with a meticulous modern approach to setup.",
      "His instruments are appreciated for their clarity, projection and reliability under the bow.",
    ],
  },
  {
    id: "l-wang-mrs",
    name: "Mrs L. Wang",
    specialty: "Violins",
    image: "/images/2025/12/l3.webp",
    bio: [
      "A graduate of the Central Conservatory of Music, Mrs L. Wang brings a refined musical sensibility to her instrument making.",
      "Professionals appreciate her violins for their balanced tone, clear response, and understated, elegant workmanship.",
    ],
  },
  {
    id: "x-ge",
    name: "Mr X. Ge",
    specialty: "Cellos",
    image: "/images/2025/12/l11.webp",
    bio: [
      "Trained in Shanghai, Mr X. Ge focuses primarily on crafting cellos with a strong artistic identity and mature tonal depth.",
      "His instruments are valued by advancing cellists for their warmth, resonance, and expressive tonal colour.",
    ],
  },
  {
    id: "g-li",
    name: "Mr G. Li",
    specialty: "Cellos",
    image: "/images/2025/12/l5.webp",
    bio: [
      "With over thirty years of experience in cello making, Mr G. Li builds instruments renowned for their long-term stability and tonal breadth.",
      "His cellos are chosen by professionals for their rich resonance and dependable responsiveness.",
    ],
  },
  {
    id: "shuai-w",
    name: "Mr Shuai W.",
    specialty: "Double Basses",
    image: "/images/2025/12/l6.webp",
    bio: [
      "Trained in northern China, Mr Shuai W. concentrates on crafting double basses designed for daily rehearsal and demanding performance use.",
      "His basses are praised for their comfortable feel, solid foundation, and confident low register projection.",
    ],
  },
  {
    id: "x-song",
    name: "Mr X. Song",
    specialty: "Violins",
    image: "/images/2025/12/l7.webp",
    bio: [
      "After working in leading workshops in Guangzhou and Beijing, Mr X. Song builds instruments with a calm, consistent approach.",
      "His violins are trusted by orchestra players for their lyrical treble and stable tonal foundation.",
    ],
  },
  {
    id: "k-jia",
    name: "Mr K. Jia",
    specialty: "Fine String Instruments",
    image: "/images/2025/12/l8.webp",
    bio: [
      "With more than forty years dedicated to string-instrument making, Mr K. Jia blends traditional craftsmanship with thoughtful modern refinement.",
      "Players appreciate his instruments for their clarity, balanced projection, and mature, confident tonal character.",
    ],
  },
  {
    id: "l-wang-mr",
    name: "Mr L. Wang",
    specialty: "Violins",
    image: "/images/2025/12/l9.webp",
    bio: [
      "With experience as a violin teacher and ensemble musician, Mr L. Wang brings a performer’s insight to the bench.",
      "Students and teachers value his violins for their openness, quick response, and reliable ensemble blend.",
    ],
  },
  {
    id: "e-yuan",
    name: "Mrs E. Yuan",
    specialty: "Violins",
    image: "/images/2025/12/l10.webp",
    bio: [
      "A graduate of the Sichuan Conservatory of Music, Mrs E. Yuan creates instruments that speak easily and feel immediately comfortable to players.",
      "Her violins are admired for their graceful outlines, smooth setup, and clear, singing tone.",
    ],
  },
];
