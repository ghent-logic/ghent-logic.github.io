/* YOUR GROUP'S CONTENT
   Edit the text between quotation marks. Keep commas and brackets in place.
   Empty links ("") are safely hidden. Do not put private information here.
   Open START-HERE.html for illustrated editing and publishing instructions.
*/
window.GROUP = {
  preview: true, // Set to false AFTER replacing the sample records and reviewing the copy.
  name: "Logic Group",
  university: "Ghent University",
  universityUrl: "https://www.ugent.be/",
  department: "", // e.g. your actual department or research centre
  city: "Ghent, Belgium",
  email: "", // e.g. your real institutional contact email
  address: [], // e.g. ["Building name", "Street and number", "9000 Ghent, Belgium"]
  mapUrl: "", // optional link to your building on a map
  directions: "", // public transport, entrance, and accessibility information
  seminarEmail: "", // optional; falls back to the general email
  seminarLocation: "", // e.g. a verified building and room
  seminarSchedule: "", // e.g. Fridays at 14:00; leave blank if irregular
  home: {
    eyebrow: "LOGIC · FOUNDATIONS · COMPUTATION",
    title: "The structure of",
    emphasis: "reasoning.",
    introduction: "Exploring proof, truth, and computation at the intersection of mathematics, philosophy, and computer science.",
    about: "Logic studies what follows from what—and why. It brings precise methods to foundational questions about mathematics, language, and computation. This site brings together our research, the people behind it, and opportunities for discussion."
  },
  research: [
    {
      id: "proof-theory", number: "01", title: "Proof theory & foundations",
      short: "The structure of mathematical proofs and the strength of formal theories.",
      description: "Proof theory treats proofs as mathematical objects. It asks which principles a theorem requires, how formal systems compare in strength, and where their limits lie. Connections with computability and the foundations of mathematics are central to this perspective.",
      topics: ["Ordinal analysis", "Reverse mathematics", "Reflection principles"],
      question: "What is needed to prove a theorem?"
    },
    {
      id: "non-classical-logic", number: "02", title: "Non-classical logic",
      short: "Logical systems for different notions of truth, possibility, and consequence.",
      description: "Non-classical logics investigate alternatives and extensions to classical reasoning. Their proof systems and semantics illuminate the roles of constructive evidence, modality, and the treatment of incomplete or inconsistent information.",
      topics: ["Modal logic", "Intuitionistic logic", "Logical semantics"],
      question: "How does the notion of consequence change?"
    },
    {
      id: "logic-computation", number: "03", title: "Logic & computation",
      short: "The possibilities and limits of algorithms, and the relationship between proofs and programs.",
      description: "Logic supplies languages and methods for understanding computation. Computability and complexity describe what algorithms can achieve, while formal reasoning offers ways to specify and verify the behaviour of programs.",
      topics: ["Computability", "Complexity", "Formal verification"],
      question: "What can be computed—and at what cost?"
    }
  ],
  // Duplicate a complete member object to add a person. Remove sample: true or
  // set it to false once you have supplied real information with their consent.
  people: [
    { name: "[Member name]", initials: "A", group: "Academic staff", role: "Professor",
      area: "Proof theory & foundations", bio: "Add a short biography describing this member’s research interests and current work.",
      photo: "", profile: "", email: "", sample: true },
    { name: "[Member name]", initials: "B", group: "Academic staff", role: "Researcher",
      area: "Non-classical logic", bio: "Add a short biography and a link to the member’s institutional or personal academic page.",
      photo: "", profile: "", email: "", sample: true },
    { name: "[Member name]", initials: "C", group: "Postdoctoral researchers", role: "Postdoctoral researcher",
      area: "Logic & computation", bio: "Add research topics, current projects, and optional links to publications or a personal website.",
      photo: "", profile: "", email: "", sample: true },
    { name: "[Member name]", initials: "D", group: "Doctoral researchers", role: "Doctoral researcher",
      area: "Foundations of mathematics", bio: "Add a brief description of the doctoral project and, if appropriate, the supervisor’s name.",
      photo: "", profile: "", email: "", sample: true }
  ],
  // date: YYYY-MM-DD; time: HH:MM (24-hour LOCAL time in Ghent).
  // Blank dates display as 'To be announced'. Past dated talks move to the archive.
  seminars: [
    { id: "first-talk", title: "[First seminar title]", speaker: "[Speaker name]",
      affiliation: "[Speaker’s institution]", date: "", time: "", location: "",
      abstract: "Replace this with the speaker’s abstract. A paragraph explaining the question, the main result, and the intended audience is usually enough.",
      onlineUrl: "", slidesUrl: "", archived: false, sample: true },
    { id: "second-talk", title: "[Second seminar title]", speaker: "[Speaker name]",
      affiliation: "[Speaker’s institution]", date: "", time: "", location: "",
      abstract: "Add the abstract for this talk. You can add as many talks as you need by copying one complete entry in content.js.",
      onlineUrl: "", slidesUrl: "", archived: false, sample: true },
    { id: "past-talk", title: "[Past seminar title]", speaker: "[Speaker name]",
      affiliation: "[Speaker’s institution]", date: "", time: "", location: "",
      abstract: "A previous talk can stay available here with its abstract and optional slides.",
      onlineUrl: "", slidesUrl: "", archived: true, sample: true }
  ],
  publications: [
    { title: "[Title of a research article]", authors: "[Author names]", year: "",
      venue: "[Journal, volume, and pages]", type: "Journal article", url: "", preprintUrl: "",
      abstract: "Optional: add a short abstract or summary of this publication.", sample: true },
    { title: "[Title of a preprint]", authors: "[Author names]", year: "",
      venue: "[Preprint repository or series]", type: "Preprint", url: "", preprintUrl: "",
      abstract: "Optional: explain the main question and result in a few sentences.", sample: true },
    { title: "[Title of a book or chapter]", authors: "[Author names]", year: "",
      venue: "[Publisher or edited volume]", type: "Book / chapter", url: "", preprintUrl: "",
      abstract: "", sample: true }
  ]
};
