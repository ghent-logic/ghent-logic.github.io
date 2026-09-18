/* YOUR GROUP'S CONTENT
   Edit the text between quotation marks. Keep commas and brackets in place.
   Empty links ("") are safely hidden. Do not put private information here.
   Open START-HERE.html for illustrated editing and publishing instructions.
*/
window.GROUP = {
  preview: true, // Set to false AFTER replacing the sample records and reviewing the copy.
  name: "Ghent Logic Group",
  tagline: "International research group at Ghent University", // the line above the blue bar
  university: "Ghent University",
  universityUrl: "https://www.ugent.be/",
  department: "", // e.g. your actual department or research centre
  city: "Ghent, Belgium",
  email: "", // e.g. your real institutional contact email
  address: [], // e.g. ["Building name", "Street and number", "9000 Ghent, Belgium"]
  mapUrl: "", // optional link to your building on a map
  // If the background photograph needs crediting, name it here and the line
  // appears in the footer, e.g. "Photograph: Jan Jansen, CC BY-SA 4.0".
  photoCredit: "",
  directions: "", // public transport, entrance, and accessibility information
  seminarEmail: "", // optional; falls back to the general email
  seminarLocation: "", // e.g. a verified building and room
  seminarVenue: "Campus Sterre, building S8", // put before a room name such as "Vergaderzaal 3.2"
  seminarSchedule: "", // e.g. Fridays at 14:00; leave blank if irregular
  home: {
    title: "Mathematical logic at Ghent University",
    // Milan is rewriting this paragraph; it is the first thing a visitor reads.
    introduction: "We work on proof theory and the foundations of mathematics, non-classical logic, and the limits of computation. The group meets weekly for its seminar, alongside reading groups and mini-courses we give one another.",
    about: "Logic studies what follows from what—and why. It brings precise methods to foundational questions about mathematics, language, and computation. This site brings together our research, the people behind it, and opportunities for discussion."
  },
  research: [
    {
      id: "proof-theory", title: "Proof theory & foundations",
      short: "The structure of mathematical proofs and the strength of formal theories.",
      description: "Proof theory treats proofs as mathematical objects. It asks which principles a theorem requires, how formal systems compare in strength, and where their limits lie. Connections with computability and the foundations of mathematics are central to this perspective.",
      topics: ["Ordinal analysis", "Reverse mathematics", "Reflection principles"],
      question: "What is needed to prove a theorem?"
    },
    {
      id: "non-classical-logic", title: "Non-classical logic",
      short: "Logical systems for different notions of truth, possibility, and consequence.",
      description: "Non-classical logics investigate alternatives and extensions to classical reasoning. Their proof systems and semantics illuminate the roles of constructive evidence, modality, and the treatment of incomplete or inconsistent information.",
      topics: ["Modal logic", "Intuitionistic logic", "Logical semantics"],
      question: "How does the notion of consequence change?"
    },
    {
      id: "logic-computation", title: "Logic & computation",
      short: "The possibilities and limits of algorithms, and the relationship between proofs and programs.",
      description: "Logic supplies languages and methods for understanding computation. Computability and complexity describe what algorithms can achieve, while formal reasoning offers ways to specify and verify the behaviour of programs.",
      topics: ["Computability", "Complexity", "Formal verification"],
      question: "What can be computed—and at what cost?"
    }
  ],
  // Duplicate a complete member object to add a person. Remove sample: true or
  // set it to false once you have supplied real information with their consent.
  // Add former: true when someone leaves and they move from the People page to
  // former.html, keeping their group. Former entries use name, group and
  // optionally role, years ("2019-2024"), now (where they went) and profile;
  // no photograph or biography is shown there.
  // The section heading already says whether someone is a professor, a postdoc
  // or a PhD student, so leave role empty unless it adds something the heading
  // does not — "Assistant professor", "FWO postdoctoral fellow", "Visiting
  // professor". An empty role, area or bio is left off the card entirely.
  people: [
    { name: "Lev Beklemishev", initials: "LB", group: "Professors", role: "",
      area: "Proof theory & foundations", bio: "Add a short biography describing this member’s research interests and current work.",
      photo: "", profile: "", email: "lev.beklemishev@ugent.be", sample: false },
    { name: "Fedor Pakhomov", initials: "FP", group: "Professors", role: "",
      area: "Non-classical logic", bio: "Add a short biography and a link to the member’s institutional or personal academic page.",
      photo: "", profile: "", email: "fedor.pakhomov@ugent.be", sample: false },
     { name: "Andreas Weiermann", initials: "AW", group: "Professors", role: "",
      area: "Non-classical logic", bio: "Add a short biography and a link to the member’s institutional or personal academic page.",
      photo: "", profile: "", email: "andreas.weiermann@ugent.be", sample: false },
     
    { name: "Brett McLean", initials: "BM", group: "Postdocs", role: "",
      area: "Logic & computation", bio: "Add research topics, current projects, and optional links to publications or a personal website.",
      photo: "", profile: "", email: "brett.mclean@ugent.be", sample: false },
    { name: "Seyedmojtaba Mojtahedi", initials: "SM", group: "Postdocs", role: "",
      area: "Logic & computation", bio: "Add research topics, current projects, and optional links to publications or a personal website.",
      photo: "", profile: "", email: "mojtaba.mojtahedi@ugent.be", sample: false },
    { name: "Giovanni Solda", initials: "GS", group: "Postdocs", role: "",
      area: "Logic & computation", bio: "Add research topics, current projects, and optional links to publications or a personal website.",
      photo: "", profile: "", email: "giovanni.solda@ugent.be", sample: false },
     
    { name: "Julien Daoud", initials: "JD", group: "PhD students", role: "",
      area: "Foundations of mathematics", bio: "Add a brief description of the doctoral project and, if appropriate, the supervisor’s name.",
      photo: "", profile: "", email: "julien.daoud@ugent.be", sample: false },
    { name: "Luke Dowling", initials: "LD", group: "PhD students", role: "",
      area: "Foundations of mathematics", bio: "Add a brief description of the doctoral project and, if appropriate, the supervisor’s name.",
      photo: "", profile: "", email: "luke.dowling@ugent.be", sample: false },
    { name: "Florian Iglauer", initials: "FI", group: "PhD students", role: "",
      area: "Foundations of mathematics", bio: "Add a brief description of the doctoral project and, if appropriate, the supervisor’s name.",
      photo: "", profile: "", email: "florian.iglauer@ugent.be", sample: false },
    { name: "Oscar Jocqué", initials: "OJ", group: "PhD students", role: "",
      area: "Foundations of mathematics", bio: "Add a brief description of the doctoral project and, if appropriate, the supervisor’s name.",
      photo: "", profile: "", email: "oscar.jocque@ugent.be", sample: false },
    { name: "Vlad Lazar", initials: "VL", group: "PhD students", role: "",
      area: "Foundations of mathematics", bio: "Add a brief description of the doctoral project and, if appropriate, the supervisor’s name.",
      photo: "", profile: "", email: "vlad.lazar@ugent.be", sample: false },
    { name: "Milan Morreel", initials: "MM", group: "PhD students", role: "",
      area: "Foundations of mathematics", bio: "Add a brief description of the doctoral project and, if appropriate, the supervisor’s name.",
      photo: "", profile: "", email: "milan.morreel@ugent.be", sample: false },
    { name: "Philipp Provenzano", initials: "PP", group: "PhD students", role: "",
      area: "Foundations of mathematics", bio: "Add a brief description of the doctoral project and, if appropriate, the supervisor’s name.",
      photo: "", profile: "", email: "philipp.provenzano@ugent.be", sample: false },
    { name: "Alakh Dhruv Chopra", initials: "ADC", group: "PhD students", role: "",
      area: "Foundations of mathematics", bio: "Add a brief description of the doctoral project and, if appropriate, the supervisor’s name.",
      photo: "", profile: "", email: "alakhdhruv.chopra@ugent.be", sample: false },


     
    { name: "[Former professor]", group: "Professors", former: true,
      years: "[2005-2023]", now: "[now emeritus, or where they went]", profile: "", sample: true },
    { name: "[Former postdoc]", group: "Postdocs", former: true,
      years: "[2021-2024]", now: "[now at another university]", profile: "", sample: true },
    { name: "[Former PhD student]", group: "PhD students", former: true,
      years: "[2019-2023]", now: "[where they went next]", profile: "", sample: true }
  ],
  // SEMINARS — newest first; the order here does not matter, the page sorts by date.
  // A talk moves from "Upcoming talks" into the archive by itself once its date passes.
  // Maths is written as LaTeX between \\( and \\), or between single $, and is typeset
  // in the browser: "the strength of \\(\\mathsf{ACA}_0\\)" or "the strength of $\\mathsf{ACA}_0$".
  //   date: "2026-10-15"          YYYY-MM-DD; leave out for a talk not yet scheduled ("TBA")
  //   time: "11:00"               local Ghent time; omit if it was the usual hour
  //   location: "Leslokaal 2.2"   otherwise falls back to seminarLocation above
  //   speakerUrl:                 turns the speaker's name into a link to their page
  //   videoUrl:    a YouTube link, or any other link to a recording; shown as
  //                "Recording" beneath the talk. onlineUrl (a live meeting
  //                link), slidesUrl and paperUrl work the same way.
  //   abstract: ["first paragraph", "second paragraph"]   one entry per paragraph
  //   id:                         the talk's own link (archive.html#id) — keep it unique
  // Any field except date, speaker and title may simply be left out.
  // To add a talk, copy one entry, change the fields, and mind the commas.
  seminars: [
    { id: "2026-09-15-gagarin", date: "2026-09-15",
      speaker: "Aleksandr Gagarin",
      title: "Topological modal logics of path-reachability",
      time: "11:00", location: "Vergaderzaal 3.2",
      paperUrl: "https://doi.org/10.4204/EPTCS.447.22",
      abstract: [
        "We address an Until-like path-reachability modality that asserts the existence of a path from the current point to a given region, lying entirely within a second given region. Working in its topological semantics, we axiomatize the corresponding logic and establish its EXPTIME-completeness. The proof relies on an equivalent neighborhood-like semantics in which the logic has the finite model property. Further, we address combinations of path-reachability with the well-studied topological modalities of closure and Cantor derivative.",
        "Based on joint work with David Fernández-Duque."
      ] },
    { id: "2026-08-13-wilken", date: "2026-08-13",
      speaker: "Gunnar Wilken",
      title: "Generalizing Goodstein’s theorem and Cichon’s independence proof",
      time: "11:00", location: "Leslokaal 3.2",
      abstract: ["I am going to present a most direct method to generalize Goodstein's theorem and Cichon's independence proof. This is demonstrated by a Goodstein process independent of the fragment \\(\\Pi^1_1\\text{-}\\mathsf{CA}_0\\) of second order number theory. The method is centered around the concept of “quotient” of a set of ordinals which allows for a 1-1 correspondence between (unique) ordinal notations and natural numbers."] },
    { id: "2026-06-11-sold", date: "2026-06-11",
      speaker: "Giovanni Soldà", speakerUrl: "https://giovannisolda.github.io/",
      affiliation: "Ghent University",
      title: "On formalized provability for set theories in infinitary languages",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: [
        "In this talk, we want to provide a framework for the study of what strong enough infinitary theories can say about provability in themselves: this will be achieved by, in essence, developing an infinitary counterpart of the study of arithmetized provability for arithmetical theories. The theories we will be interested in will be certain extensions of Kripke-Platek set theory (to which we aim to give an introduction).",
        "We will then present, to speak freely, some lower bounds and (for some special cases) upper bounds for the provability logics of the theories above: these will be essentially given in terms of calculi introduced by Mojtaba Mojtahedi in a previous talk of this series.",
        "This is joint work with Mojtaba Mojtahedi and Fedor Pakhomov."
      ] },
    { id: "2026-04-30-damonja", date: "2026-04-30",
      speaker: "Mirna Džamonja",
      affiliation: "Logique Consult, Paris",
      title: "MSO Logic of the Real Order with the Set Quantifiers ranging over the Borel Sets",
      time: "16:00", location: "Vergaderzaal 3.2",
      abstract: ["A celebrated 1969 theorem of Michael Rabin is that the monadic second order (MSO) theory of the real order where the monadic quantifier is allowed only to range over the closed or \\(F_\\sigma\\)-sets, is decidable. In 1975 Saharon Shelah conjectured that if the monadic quantifier is allowed to range over the Borel subsets of the reals, the resulting MSO theory is still decidable. We confirm this conjecture. In fact, the conjecture can be understood in the weak form, in the language where there is a special symbol for each level of the Borel hierarchy, or in a strong form where the language simply has a symbol for Borel sets. We confirm both versions of the conjecture, the former one by interpreting it in \\(\\mathsf{S2S}\\) and the latter one by in addition using Büchi's theorem that \\(\\mathsf{MSO}(\\omega_1,<)\\) is decidable."] },
    { id: "2026-04-16-mojtahedi", date: "2026-04-16",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Provability Logic for Infinitary Languages",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: [
        "We extend the propositional language to include infinite conjunctions and disjunctions. We then present a sequent calculus for this infinitary propositional modal language that is sound and complete with respect to conversely well-founded Kripke models. The system we consider is a deep-inference, non-well-founded sequent calculus.",
        "This is joint work with Fedor Pakhomov and Giovanni Soldà."
      ] },
    { id: "2026-04-10-aguilera", date: "2026-04-10",
      speaker: "Juan Pablo Aguilera", speakerUrl: "https://juan.ag/",
      title: "Ex-logic",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: ["Joint work with Guillaume Massas."] },
    { id: "2026-03-19-beklemishev", date: "2026-03-19",
      speaker: "Lev Beklemishev", speakerUrl: "https://homepage.mi-ras.ru/~bekl/",
      affiliation: "Ghent University",
      title: "Strictly positive logics and gap-embeddability",
      time: "16:00", location: "Vergaderzaal 3.2",
      abstract: ["I will explain how various known variants of gap-embeddability (on words) naturally correspond to fragments of reflection calculus. In particular, this will provide a new treatment of Gordeev's “symmetric” variant of gap condition which so far seemed to fall outside the picture."] },
    { id: "2026-02-25-pakhomov", date: "2026-02-25",
      speaker: "Fedor Pakhomov", speakerUrl: "https://research.ugent.be/web/person/fedor-pakhomov-0/en",
      affiliation: "Ghent University",
      title: "The Strength of the Extensionality and the Theories of Generalized Pairing",
      time: "11:00", location: "Leslokaal 1.5",
      abstract: [
        "T. Parsons (1987) had considered the theory \\(\\mathsf{FOF}\\) that is a theory with unrestricted comprehension that avoids paradoxes by not having the membership predicate. Instead, comprehension is instantiated via comprehension terms \\(\\hat{x}\\varphi(x,\\vec{y})\\) representing \\(\\{x \\mid \\varphi(x,\\vec{y})\\}\\) and the only axioms that the theory have are extensionality principles \\(\\hat{x}\\varphi(x)=\\hat{x}\\psi(x) \\leftrightarrow \\forall x(\\varphi(x)=\\psi(x))\\). In this talk I will present the result that \\(\\mathsf{FOF}\\) has a decidable model. The technique allowing this analysis is mainly about theories of locally free algebras, that have been introduced and proved to be decidable by A.I. Mal'cev (1962). Namely, we develop a suitable theory of normal form of definitions of definable sets in models of these theories.",
        "This is a joint work with Stephen Mackereth."
      ] },
    { id: "2026-02-12-morreel", date: "2026-02-12",
      speaker: "Milan Morreel",
      affiliation: "Ghent University",
      title: "The Ouroboros Goodstein Principle",
      time: "11:00", location: "Vergaderzaal 1.1",
      abstract: ["A variant of the Goodstein Principle which is independent of \\(\\mathsf{KP}\\)."] },
    { id: "2026-01-22-weiermann", date: "2026-01-22",
      speaker: "Andreas Weiermann", speakerUrl: "http://cage.ugent.be/~weierman/",
      affiliation: "Ghent University",
      title: "Proving logical limit laws using AI",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: ["We report some new results about logical limit laws. Certain intermediate steps have been assisted by a combination of DeepSeek, Gemini pro and chatgpt5.2. The talk is intended for a broad audience."] },
    { id: "2025-12-16-chopra", date: "2025-12-16",
      speaker: "Alakh Dhruv Chopra",
      affiliation: "Ghent University",
      title: "Well-quasi-order on finite trees and transfinite sequences",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: ["The talk will begin with a introduction to the theory of well-quasi-orders (wqos) and associated ordinal invariants, in particular the maximal order type of linearizations of a given wqo. We will then focus on two constructions: finite trees labelled by a wqo and ordered by tree homomorphisms, and transfinite sequences of finite range (i.e., sequences in which, individually, only a finite number of elements from a given wqo occur) ordered by embeddability. The goal is to show that they are indeed wqos, to calculate their maximal order types, and — the reason for focusing on these specific examples — that they are essentially equivalent."] },
    { id: "2025-12-04-provenzano", date: "2025-12-04",
      speaker: "Philipp Provenzano",
      affiliation: "Ghent University",
      title: "Non-wellfounded proofs and languages",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: [
        "The notion of non-wellfounded proofs has recently gained attention for the analysis of various theories, including theories of inductive definitions. In this talk, we will explore the idea of also allowing the underlying languages to be non-wellfounded.",
        "After presenting a general framework for these, we will be interested in the proof-theoretic properties of consistency, soundness and (semantic) cut-admissibility for propositional calculi based on such non-wellfounded languages. As we will see, from a reverse mathematical point of view, these are intimately connected to questions of determinacy.",
        "I will present an example of a non-wellfounded language for which these proof-theoretic properties of the associated calculus are equivalent to projective determinacy, a principle transcending \\(\\mathsf{ZFC}\\). If time permits, we will also look into syntactic cut-elimination for these systems."
      ] },
    { id: "2025-11-27-mojtahedi", date: "2025-11-27",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Intuitionistic Provability Logic, part 2",
      time: "11:00", location: "Vergaderzaal 1.1",
      abstract: [
        "Provability logic is a propositional modal logic in which the modal operator is interpreted as formal provability in a fixed mathematical theory, while the remaining connectives retain their usual meanings and atomic formulas are replaced by arbitrary sentences. Thanks to foundational results of Martin Löb and Robert Solovay, we know that the provability logic of classical mathematics is decidable and precisely the modal logic \\(\\mathsf{GL}\\).",
        "The intuitionistic counterpart of this subject—intuitionistic provability logic—was first investigated by Albert Visser in 1980. Since then, several partial results have been established, yet a full characterization remained open for decades.",
        "In this series of talks (likely three sessions), I will present a proof sketch for the complete axiomatization and decidability of the intuitionistic provability logic of Heyting Arithmetic, based on results in [1,2].",
        "[1] Mojtahedi, Mojtaba. “On provability logic of HA.” arXiv preprint arXiv:2206.00445 (2022).",
        "[2] Mojtahedi, Mojtaba. “Relative unification in intuitionistic logic: Towards provability logic of HA.” To appear in JSL."
      ] },
    { id: "2025-11-20-mojtahedi", date: "2025-11-20",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Intuitionistic Provability Logic",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: [
        "Provability logic is a propositional modal logic in which the modal operator is interpreted as formal provability in a fixed mathematical theory, while the remaining connectives retain their usual meanings and atomic formulas are replaced by arbitrary sentences. Thanks to foundational results of Martin Löb and Robert Solovay, we know that the provability logic of classical mathematics is decidable and precisely the modal logic \\(\\mathsf{GL}\\).",
        "The intuitionistic counterpart of this subject—intuitionistic provability logic—was first investigated by Albert Visser in 1980. Since then, several partial results have been established, yet a full characterization remained open for decades.",
        "In this series of talks (likely three sessions), I will present a proof sketch for the complete axiomatization and decidability of the intuitionistic provability logic of Heyting Arithmetic, based on results in [1,2].",
        "[1] Mojtahedi, Mojtaba. “On provability logic of HA.” arXiv preprint arXiv:2206.00445 (2022).",
        "[2] Mojtahedi, Mojtaba. “Relative unification in intuitionistic logic: Towards provability logic of HA.” To appear in JSL."
      ] },
    { id: "2025-11-13-vernaeve", date: "2025-11-13",
      speaker: "Geert Vernaeve",
      affiliation: "Ghent University",
      title: "Adventures in interactive theorem proving: The computer as a “thinking tool”",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: ["Interactive theorem proving programs exist since the 1960's in various kinds and shapes. We'll explore what interactive theorem provers are, how they work, carefully try to break one to check how robust they are, and illustrate some of the possible design choices in constructing one."] },
    { id: "2025-10-30-daoud", date: "2025-10-30",
      speaker: "Julien Daoud",
      affiliation: "Ghent University",
      title: "Speedup for Natural Axiomatizations of Real Closed Fields",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: ["In this talk we shall examine how two natural axiomatizations of the theory of Real Closed Fields behave w.r.t. speed of proofs. This will be achieved by showing that the axiomatization using Least Upper Bound property has a double exponential speedup over the axiomatization using closure for certain class of polynomial equations."] },
    { id: "2025-10-23-lazar", date: "2025-10-23",
      speaker: "Vlad Lazar",
      affiliation: "Ghent University",
      title: "On the linearity of natural theories between \\(\\mathsf{ACA}_0\\) and \\(\\mathsf{BI}\\)",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: ["In this talk we will look at a family of extensions of \\(\\mathsf{ACA}_0\\) broadly generated by iterations of omega model and uniform syntactic reflection principles, whose union is precisely the theory of bar induction. The main focus of the talk will be on proving that this family of theories is linearly ordered by consistency strength."] },
    { id: "2025-10-16-pakhomov", date: "2025-10-16",
      speaker: "Fedor Pakhomov", speakerUrl: "https://research.ugent.be/web/person/fedor-pakhomov-0/en",
      affiliation: "Ghent University",
      title: "Finitely axiomatized theories lack self-comprehension",
      time: "11:00", location: "Vergaderzaal 3.2",
      paperUrl: "https://londmathsoc.onlinelibrary.wiley.com/doi/full/10.1112/blms.12708",
      abstract: [
        "We prove that no finitely axiomatizable theory can proves its own scheme of predicative comprehension. As I will explain in the talk, this result is in fact a generalization of Godel's 2nd Incompleteness Theorem.",
        "This is a joint work with Albert Visser."
      ] },
    { id: "2025-10-09-tahmouresi", date: "2025-10-09",
      speaker: "Deniz Tahmouresi",
      affiliation: "University of Tehran and Ghent University",
      title: "Unification for Weak Classical Modal Logics",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: [
        "This work investigates the unification problem for weak classical modal logics, in particular the logic \\(\\mathsf{CL}_\\square^+\\) obtained by extending classical propositional logic with a modal operator \\(\\square\\) and a weak necessitation rule. We develop a systematic correspondence between substitutions in the modal language and substitutions in its classical fragment, allowing us to transfer results on classical unification to the modal setting.",
        "First, we introduce restricted and well-founded substitutions in classical logic, proving that their unification type is finitary—that is, every formula has a finite complete set of well-founded unifiers. Using this foundation, we then define injective unifiers for \\(\\mathsf{CL}_\\square^+\\), showing that the injective unification type of the logic is also finitary.",
        "Finally, by combining these constructions inductively on modal depth, we establish that the overall unification type of \\(\\mathsf{CL}_\\square^+\\) is finitary. This result clarifies the structural behavior of unification in weak modal systems and extends the classical framework of exact formulas to a modal context."
      ] },
    { id: "2025-05-26-pawlowski", date: "2025-05-26",
      speaker: "Pawel Pawlowski",
      title: "Philosophical applications of non-deterministic semantics",
      time: "16:00", location: "Leslokaal 3.2",
      abstract: [
        "In this talk, we will present an approach to modality and modal logic based on non-deterministic semantics. More specifically, we will explore two closely related frameworks: non-deterministic semantics and restricted non-deterministic semantics. Both approaches are grounded in the use of non-deterministic matrices and share a many-valued character, where truth-values are typically represented by tuples of 0s and 1s, where each component corresponding to dimensions such as truth/falsity, possibility/non-possibility, or necessity/non-necessity.",
        "A key feature of non-deterministic semantics is that it allows formulas to take on more than one designated value. That is, the semantic interpretation of a formula is not always uniquely determined, but rather ranges over a set of admissible values, depending on the context. This indeterminacy is not a defect but a deliberate feature that enables a more flexible and uniform treatment of various modal notions."
      ] },
    { id: "2025-05-19-mclean", date: "2025-05-19",
      speaker: "Brett McLean",
      title: "Difference–restriction algebras with operators",
      time: "16:00", location: "Vergaderzaal 3.2",
      abstract: [
        "This work is about developing a framework for categorical dualities for algebras of partial functions, in the style of Jónsson and Tarski's Boolean algebras with operators.",
        "Specifically, we are studying a category of algebras we call difference–restriction algebras, which are the algebras we obtain from collections of partial functions closed under set-theoretic differences and domain restrictions.",
        "I will discuss: an adjunction between this category and a certain topological category; the restriction of the adjunction to an already known duality; the related completions/reflective subcategories; additional operators on the algebras.",
        "This is joint work with Célia Borlido and Ganna Kudryavtseva."
      ] },
    { id: "2025-03-31-yokoyama", date: "2025-03-31",
      speaker: "Keita Yokoyama",
      affiliation: "Tohoku University",
      title: "Seeking for the first-order strength of Ramsey's theorem for pairs",
      time: "16:00", location: "Vergaderzaal 3.2",
      abstract: [
        "In the study of reverse mathematics, numerous conservation theorems are established using low basis theorems and their variations. Specifically, the proof-theoretic/first-order strength of Ramsey's theorem for pairs and its variations are calibrated in this way.",
        "In this talk, we introduce a method for converting model-theoretic \\(\\Pi^1_1\\)-conservation theorems by means of low-like basis theorems into proof interpretations. We will then overview the study of the first-order strength of Ramsey's theorem for pairs and reproving several conservation theorems together with polynomial-size proof transformations."
      ] },
    { id: "2025-03-24-weiermann", date: "2025-03-24",
      speaker: "Andreas Weiermann", speakerUrl: "http://cage.ugent.be/~weierman/",
      title: "Phase transitions for Ackermannian functions",
      time: "16:00", location: "Leslokaal 3.2",
      abstract: ["We will classify the thresholds for the iteration speed for Grzegorczyk style hierarchies which describe the transition from being primitive recursive to non primitive recursive. The talk will be addressed at a general audience."] },
    { id: "2025-03-17-beklemishev", date: "2025-03-17",
      speaker: "Lev Beklemishev", speakerUrl: "https://homepage.mi-ras.ru/~bekl/",
      title: "Fragments of arithmetic and cyclic proofs",
      time: "11:00", location: "Vergaderzaal 3.2",
      abstract: [
        "We present an alternative cyclic proof system for Peano arithmetic that could be simpler than the existing ones and well-adapted both for proof analysis and for automatizing inductive proof search. In addition, we show how various traditional subsystems of Peano arithmetic defined by restricted forms of induction can be represented as fragments of the proposed system.",
        "This is a joint work with Daniyar Shamkanov and Ivan Smirnov."
      ] },
    { id: "2025-03-10-mojtahedi", date: "2025-03-10",
      speaker: "Mojtaba Mojtahedi",
      title: "On Propositional-Provability Interpretations of modal logics",
      time: "10:30", location: "Vergaderzaal 3.2",
      abstract: [
        "In this talk, we explore T-provability interpretations for the modal operator \\(\\Box\\), where T is a propositional theory. As a straightforward result, we establish soundness and completeness for Gödel-Löb logic under these interpretations.",
        "We then extend this approach to the Interpretability Logic \\(\\mathsf{ILM}\\), presenting analogous propositional interpretations and proving the corresponding soundness and completeness results. The origin of such propositional-provability interpretations traces back to my earlier work on the provability logic of Heyting Arithmetic (\\(\\mathsf{HA}\\)), where I employed a similar framework—referred to as mixed semantics—to analyze the provability logic of \\(\\mathsf{HA}\\).",
        "This is a joint work with Borja Sierra Miranda."
      ] },
    { id: "2025-02-20-sold", date: "2025-02-20",
      speaker: "Giovanni Soldà", speakerUrl: "https://giovannisolda.github.io/",
      title: "On statistical learning of graphs",
      time: "11:15", location: "Vergaderzaal 3.2",
      abstract: [
        "In the first part of this talk, I aim to give an introduction to two frameworks that describe when a family of functions can be considered to be learnable, namely PAC and online learnability, and discuss the relationship between them. In the second part, we will apply these frameworks to study the graphs such that the family of their isomorphic copies (with some constraints to be made precise) are learnable.",
        "This is joint work with Vittorio Cipriani, Valentino Delle Rose, and Luca San Mauro."
      ] },
    { id: "2024-12-12-provenzano", date: "2024-12-12",
      speaker: "Philipp Provenzano",
      affiliation: "Ghent University",
      title: "On the reverse mathematics of cut-elimination and determinacy",
      abstract: [
        "In this talk, we will see how soundness and cut-elimination are connected to questions of determinacy.",
        "Concretely, we look at an infinitary version of propositional fixpoint logic (for binary connectives), which is just enough to interpret \\(\\mathsf{PA}\\). For this system, soundness and consistency are equivalent to \\((\\Sigma^0_1\\wedge\\Pi^0_1)\\text{-}\\mathsf{Det}\\) over Cantor space or, equivalently, \\(\\mathsf{ACA}_0\\). Correctness of syntactic cut-elimination, on the other hand, turns out to be significantly stronger, blowing up to \\(\\Pi^1_1\\text{-}\\mathsf{CA}_0\\) or, equivalently, \\((\\Sigma^0_1\\wedge\\Pi^0_1)\\text{-}\\mathsf{Det}\\) over Baire space.",
        "Finally, we investigate how this phenomenon can be tamed by switching to a system for intuitionistic propositional logic with greatest fixpoints."
      ] },
    { id: "2024-12-05-zenger", date: "2024-12-05",
      speaker: "Lukas Zenger",
      affiliation: "Ghent University",
      title: "Intuitionistic modal logic with the master modality",
      abstract: [
        "In this talk I will present recent work on intuitionistic modal logic extended with a greatest fixed-point operator called master modality.",
        "Formulas of the logic are evaluated over bi-relational Kripke models with three different frame conditions: functional frames, 'triangle' confluent frames, and arbitrary frames. I will present a cyclic sequent calculus which is sound and complete for all three classes of models. This, in particular, proves that intuitionistic modal logic with the master modality cannot distinguish between arbitrary models and functional models. Soundness is established by a standard argument while completeness is proven via a detour to non-wellfounded proofs, using a proof-search argument that draws on analyticity of the calculus.",
        "The framework is robust in the sense that it can be naturally adapted to account for various frame conditions, such as serial models, reflexive models or S4-models, as well as for a polymodal extension which may be interpreted as intuitionistic common knowledge. Additionally, using different techniques, the calculus can be extended to a sound and complete calculus for intuitionistic S5 common knowledge logic.",
        "This is joint work with Lide Grotenhuis, Bahareh Afshari and Graham Leigh."
      ] },
    { id: "2024-11-28-weiermann", date: "2024-11-28",
      speaker: "Andreas Weiermann", speakerUrl: "http://cage.ugent.be/~weierman/",
      affiliation: "Ghent University",
      title: "Goodstein sequences, finitary functors and well partial orders",
      abstract: ["We introduce a framework for Goodstein sequences so that their termination can be proved by an appeal to the well partial orderedness of certain sets of terms."] },
    { id: "2024-11-07-mclean", date: "2024-11-07",
      speaker: "Brett McLean",
      affiliation: "Ghent University",
      title: "Is the collection of operations on partial functions finitely generated?",
      paperUrl: "https://doi.org/10.46298/lmcs-20(3:20)2024",
      abstract: [
        "The algebraic study of partial functions involves studying collections of partial functions closed under operations such as composition, intersection, etc. Some 15-20 different operations have been considered so far, and unsurprisingly there are interdependencies (an operation can be defined in terms of one or more other operations).",
        "This talk is about the question of whether there exists a finite set of operations that can term-define any possible operation on partial functions. After formalising this question, I will show that the answer is 'no'. I will also give two positive results for variants of the question (for 'forward-looking' operations and for operations on injective partial functions).",
        "This is joint work with Bart Bogaerts, Balder ten Cate, and Jan Van den Bussche."
      ] },
    { id: "2024-10-31-pakhomov", date: "2024-10-31",
      speaker: "Fedor Pakhomov", speakerUrl: "https://research.ugent.be/web/person/fedor-pakhomov-0/en",
      affiliation: "Ghent University",
      title: "\\(\\Pi^1_2\\) proof-theoretic analysis of \\(\\mathsf{ACA}_0\\), part II",
      abstract: ["Tantalizingly, there is no abstract."] },
    { id: "2024-10-24-pakhomov", date: "2024-10-24",
      speaker: "Fedor Pakhomov", speakerUrl: "https://research.ugent.be/web/person/fedor-pakhomov-0/en",
      affiliation: "Ghent University",
      title: "\\(\\Pi^1_2\\) proof-theoretic analysis of \\(\\mathsf{ACA}_0\\), part I",
      abstract: ["Tantalizingly, there is no abstract."] },
    { id: "2024-05-23-lazar", date: "2024-05-23",
      speaker: "Vlad Lazar",
      affiliation: "Ghent University",
      title: "A poly-modal logic for omega model reflections",
      abstract: ["In this talk I will present an extension of reflection calculus (\\(\\mathsf{RC}\\)) intended for the analysis of the theory of Bar Induction. \\(\\mathsf{RC}\\) is a modal logic where formulas are constructed from propositional variables by only utilizing conjunctions and labelled diamond modalities. In its standard arithmetical interpretation, formulas of \\(\\mathsf{RC}\\) represent theories of first-order arithmetic, and the labelled modalities are interpreted as syntactic reflection principles. Our extension is based on the introduction of a new set of modalities aimed at capturing semantic uniform reflections (also known as omega model reflections). By using \\(\\mathsf{ACA}_0\\) as the base theory in the arithmetical interpretation, these additional modalities allow for the representation of the theory of Bar Induction within our framework. The main results I will be presenting are focused on the semantic properties of this system."] },
    { id: "2024-05-16-gjetaj", date: "2024-05-16",
      speaker: "Oriola Gjetaj",
      affiliation: "Ghent University",
      title: "A Goodstein principle for \\(\\mathsf{ID}_2\\)",
      abstract: ["The Goodstein principle is a natural number-theoretic theorem which is unprovable in Peano arithmetic. Since the original process definition there have been different canonical representations using Ackermann function or the Grzegorczyk hierarchy. These representations give a natural Goodstein process independent from different theories of reverse mathematics. In this talk, we consider a normal form for which we get an independent Goodstein theorem from the ordinal of \\(\\mathsf{ID}_2\\)."] },
    { id: "2024-05-02-mojtahedi", date: "2024-05-02",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Intuitionistic Polymodal Provability Logic, part II",
      abstract: [
        "The polymodal provability logic \\(\\mathsf{GLP}\\), studies the provability predicates for extensions of Peano Arithmetic \\(\\mathsf{PA}\\) by all true \\(\\Pi_n\\)-sentences and their interactions with each other. In this talk, we consider the polymodal provability logic of Heyting Arithmetic \\(\\mathsf{HA}\\). With the aid of the characterization of provability logic of \\(\\mathsf{HA}\\), we are able to characterize the provability logic of \\(\\mathsf{HA}^n\\), extension of \\(\\mathsf{HA}\\) by all true \\(\\Pi_n\\)-sentences.",
        "It turns out that \\(\\mathsf{HA}\\) and \\(\\mathsf{HA}^n\\) share the same provability logic for every \\(n\\). Moreover we suggest a polymodal provability logic, called \\(\\mathsf{iGLPH}\\), and prove its soundness for arithmetical interpretations in \\(\\mathsf{HA}\\). Roughly speaking, \\(\\mathsf{iGLPH}\\) is just the intuitionistic version of \\(\\mathsf{GLP}\\) together with \\([n]A \\to [n]B\\) for some admissible rules \\(A/B\\) of \\(\\mathsf{HA}^n\\), namely those who are verifiable in \\(\\mathsf{HA}\\)."
      ] },
    { id: "2024-04-25-mojtahedi", date: "2024-04-25",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Intuitionistic Polymodal Provability Logic, part I",
      abstract: [
        "The polymodal provability logic \\(\\mathsf{GLP}\\), studies the provability predicates for extensions of Peano Arithmetic \\(\\mathsf{PA}\\) by all true \\(\\Pi_n\\)-sentences and their interactions with each other. In this talk, we consider the polymodal provability logic of Heyting Arithmetic \\(\\mathsf{HA}\\). With the aid of the characterization of provability logic of \\(\\mathsf{HA}\\), we are able to characterize the provability logic of \\(\\mathsf{HA}^n\\), extension of \\(\\mathsf{HA}\\) by all true \\(\\Pi_n\\)-sentences.",
        "It turns out that \\(\\mathsf{HA}\\) and \\(\\mathsf{HA}^n\\) share the same provability logic for every \\(n\\). Moreover we suggest a polymodal provability logic, called \\(\\mathsf{iGLPH}\\), and prove its soundness for arithmetical interpretations in \\(\\mathsf{HA}\\). Roughly speaking, \\(\\mathsf{iGLPH}\\) is just the intuitionistic version of \\(\\mathsf{GLP}\\) together with \\([n]A \\to [n]B\\) for some admissible rules \\(A/B\\) of \\(\\mathsf{HA}^n\\), namely those who are verifiable in \\(\\mathsf{HA}\\)."
      ] },
    { id: "2024-02-29-buriola", date: "2024-02-29",
      speaker: "Gabriele Buriola", speakerUrl: "https://www.di.univr.it/?ent=persona&id=65484",
      affiliation: "University of Verona",
      title: "Decidable fragments of Real Analysis",
      slidesUrl: "https://drive.google.com/file/d/1qxe5fIPP37KJzH0CLb0-sh6pq9Ns9Ksh/view?usp=drive_link",
      abstract: [
        "In this talk, based on a joint work, I will present a decidable theory called RDF* (Reals with Differentiable Functions); RDF* is an unquantified first-order theory which extends a fragment of Tarski's real algebra with one-argument real functions endowed with a continuous first derivative. The language of RDF* embodies the addition of functions and multiplication of functions by scalars; regarding relators, an array of predicates designates various relationships between functions, as well as function properties, that may hold over intervals of the real line; those are: function comparisons, strict and non-strict monotonicity/convexity/concavity, comparisons between the derivative of a function and a real-valued term.",
        "Our decision method consists in preprocessing the given formula into an equi-satisfiable quantifier-free formula of the elementary algebra of real numbers, whose satisfiability can then be checked by means of Tarski’s decision method."
      ] },
    { id: "2024-02-22-pakhomov", date: "2024-02-22",
      speaker: "Fedor Pakhomov", speakerUrl: "https://research.ugent.be/web/person/fedor-pakhomov-0/en",
      affiliation: "Ghent University",
      title: "\"3 is bqo\" implies \\(\\mathsf{ATR}_0\\)",
      abstract: ["The abstract of the talk coincides with the title."] },
    { id: "2024-02-07-rossegger", date: "2024-02-07",
      speaker: "Dino Rossegger", speakerUrl: "https://drossegger.github.io/",
      affiliation: "UC Berkeley and TU Wien",
      title: "The Borel complexity of first-order theories",
      slidesUrl: "https://drive.google.com/file/d/14nkXYUAS1i3yQNvWMty2B9UalO8qLBLe/view?usp=drive_link",
      abstract: [
        "The Borel hierarchy gives a robust way to stratify the complexity of sets of countable structures and is intimately tied with definability in infinitary logic via the Lopez-Escobar theorem. However, what happens with sets axiomatizable in finitary first-order logic, such as the set of structures satisfying a given finitary first-order theory T? Is the complexity of the set of T's models in any way related to the quantifier complexity of the sentences axiomatizing it? In particular, if a theory T is not axiomatizable by a set of sentences of bounded quantifier complexity, can the set of models of T still be at a finite level of the Borel hierarchy?",
        "In this talk, we will present results concerning these questions:",
        "In joint work with Andrews, Gonzalez, Lempp, and Zhu we show that the set of models of a theory T is \\(\\Pi^0_\\omega\\)-complete if and only if T does not have an axiomatization by sentences of bounded quantifier complexity, answering the last question in the negative. We also characterize the Borel complexity of the set of models of complete theories in terms of their finitary axiomatizations. Our results suggest that infinitary logic does not provide any efficacy when defining first-order properties, a phenomenon already observed by Wadge and Keisler and, recently, rediscovered by Harrison-Trainor and Kretschmer using different techniques.",
        "Combining our results with recent results by Enayat and Visser, we obtain that a large class of theories studied in the foundations of mathematics, sequential theories, have a maximal complicated set of models."
      ] },
    { id: "2023-12-14-weiermann", date: "2023-12-14",
      speaker: "Andreas Weiermann", speakerUrl: "http://cage.ugent.be/~weierman/",
      affiliation: "Ghent University",
      title: "A new proof of Girard's hierarchy comparison theorem",
      location: "Leslokaal 2.2",
      videoUrl: "https://youtu.be/8TsRqDOfqnA",
      abstract: ["We give a new proof of Girard's hierarchy comparison theorem relating the slow growing hierarchy along the Bachmann Howard ordinal to the fast growing hierarchy along the proof-theoretic ordinal of first order Peano arithmetic."] },
    { id: "2023-12-07-sold", date: "2023-12-07",
      speaker: "Giovanni Soldà", speakerUrl: "https://giovannisolda.github.io/",
      affiliation: "Ghent University",
      title: "An introduction to the low levels of the continuous Weihrauch degrees",
      location: "Leslokaal 2.2",
      videoUrl: "https://youtu.be/Pwz4nsrM-xU",
      abstract: [
        "Continuous Weihrauch degrees have been known and studied for more than thirty years, yet very little is known on their structure. In this talk, we will focus on some recent observations concerning the degrees that are closest to the degree of the identity (but different from it), and we will show that, perhaps unsurprisingly, their configuration depends strongly on set-theoretic assumptions: in particular, the existence of a minimal such degree requires some form of determinacy. We will then move to a smaller class of \"tamely discontinuous\" multifunctions, still very close to the identity, and show in \\(\\mathsf{ZFC}\\) that they admit a minimum.",
        "Joint work with Arno Pauly."
      ] },
    { id: "2023-11-30-murwanashyaka", date: "2023-11-30",
      speaker: "Juvenal Murwanashyaka",
      affiliation: "University of Oslo",
      title: "Hilbert's Tenth Problem for Term Algebras with a Substitution Operator",
      location: "Leslokaal 2.2",
      videoUrl: "https://www.youtube.com/watch?v=jI1Fgcm6Qzc",
      abstract: [
        "The analogue of Hilbert’s 10th Problem for a first-order structure A with signature \\(L\\) asks whether there exists an algorithm with input and output as follows:",
        "input: an \\(L\\)-sentence of the form \\(\\exists x [ s = t ]\\)",
        "output: YES if \\(\\exists x [ s = t ]\\) is true in A, and NO otherwise.",
        "In this talk, we consider the term algebra of finite full binary trees extended with a substitution operator. We show that the analogue of Hilbert’s 10th problem is undecidable by existentially interpreting \\((N,0, 1, +, \\times)\\). If there is time, we sketch how to existentially interpret \\((N, 0, 1, +, \\times, \\text{exp})\\) without relying on the solution to the original Hilbert’s 10th Problem. The talk is based on the CiE 2022 paper [1] and an extended journal version under review.",
        "[1] Murwanashyaka, J.: Hilbert’s Tenth Problem for Term Algebras with a Substitution Operator."
      ] },
    { id: "2023-11-23-vega", date: "2023-11-23",
      speaker: "James Jerson Ortiz Vega",
      affiliation: "Université de Namur",
      title: "An alternative semantics for Timed Automata and Hennessy-Milner Logic: Modeling and Specification of Distributed and Real-time Systems",
      location: "Leslokaal 2.2",
      videoUrl: "https://youtu.be/In-5ji1_eTE",
      abstract: ["With the rapid growth of distributed computing and networking, the demand for large-scale, complex distributed applications is increasing significantly. Distributed Real-Time Applications (DRTA) are used to control and monitor a wide variety of distributed real-time systems, including aerospace, robotics, and nuclear power plants. DRTAs often operate on eterogeneous computer networks with multiple interconnected components, each equipped with its own local independent clock. These independent clocks have their own rate behavior without synchronization. Timed Automata (TA) can be used to model DRTAs with independent clocks. However, it is important to recognize that in certain scenarios there may be indirect interactions or dependencies between independent clocks. This may be the case in larger systems where different components or subsystems interact or depend on each other for timing information. In this talk, we propose a derivative-based alternative semantics for TA and Hennessy-Milner Logic (HML) with independent clocks. This approach has been implemented in a tool called MIMETIC. We will also discuss the problem of timed bisimulation with our alternative semantics for TA and HML with independent clocks."] },
    { id: "2023-11-16-papafilippou", date: "2023-11-16",
      speaker: "Konstantinos Papafilippou",
      affiliation: "Ghent University",
      title: "The universal tangle for spatial reasoning",
      location: "Leslokaal 2.2",
      abstract: [
        "The topological \\(\\mu\\)-calculus has gathered attention in recent years as a powerful framework for representation of spatial knowledge. In particular, spatial relations can be represented over finite structures in the guise of weakly transitive (wK4) frames. Together with David Fernández-Duque we have shown that the \\(\\mu\\)-calculus is equivalent to a simple fragment based on a variant of the \"tangle\" operator. Similar results were proven for transitive frames by Dawar and Otto, using modal characterisation theorems for the corresponding classes of frames. However these theorems are not available in our setting and so we ended up with a different approach by studying the \\(\\Sigma\\)-final part of the corresponding Kripke models for finite sets of formulae \\(\\Sigma\\).",
        "I will be giving a blackboard presentation starting with an overview of the motivation and the results then, if time allows, we will look into the proof of one of the main theorems of our paper."
      ] },
    { id: "2023-10-26-kouptchinsky", date: "2023-10-26",
      speaker: "Thibaut Kouptchinsky",
      affiliation: "TU Wien",
      title: "Determinacy axioms in higher-order arithmetic",
      location: "Leslokaal 3.2",
      videoUrl: "https://youtu.be/VcAmrUs67iM",
      abstract: [
        "This talk is about the foundations of mathematics, studying determinacy axioms derived from game theory, with a reverse mathematics point of view.",
        "It exposes their relationship with second-order and third-order arithmetic, examining a significant paper in the field by Montalbán and Shore.",
        "The proof of Martin of Borel determinacy showed that the existence of the nth iterated power set of \\(\\omega\\) is necessary to prove the determinacy of \\(\\Pi^0_{n+3}\\) Gale-Stewart games (for \\(n \\geq 1\\)). However, it is not known what is the optimal proof for this kind of determinacy nowadays.",
        "Most of the work in the area has been led into second-order arithmetic when one only uses natural numbers and sets of natural numbers. The limit of this analysis is the striking result of Montalbàn and Shore. They showed that when taking finite differences of \\(\\Pi^0_3\\) sets, the determinacy axioms grow exponentially in proof-theoretic strength until the limit of provability in \\(Z_2\\).",
        "We present a generalisation of the results of Montalbán and Shore in some natural interpretation of third-order arithmetic about differences of \\(\\Pi^0_4\\) sets. Our work reveals the situation to be slightly different in the uncountable case while generating a plethora of reverse mathematical results about \\((\\Pi^0_{n+3})_m\\) determinacy axioms \\((n, m \\geq 1)\\)."
      ] },
    { id: "2023-10-19-beklemishev", date: "2023-10-19",
      speaker: "Lev Beklemishev", speakerUrl: "https://homepage.mi-ras.ru/~bekl/",
      affiliation: "Steklov Mathematical Institute and ILLC Amsterdam",
      title: "Some recent results in provability logic",
      location: "Leslokaal 3.2",
      videoUrl: "https://www.youtube.com/watch?v=9ruySAUUKCs",
      abstract: ["This will be an semi-formal blackboard and chalk talk where I present a survey of the work I and my students are currently doing around provability logic. Time permitting this will include the work of Wang on periodic topological models of \\(\\mathsf{GLP}\\), Lukashov on the unification problem for \\(\\mathsf{GLP}\\), Dvorkin on the provability logic of Niebergall's arithmetic, Kovalev on open induction, Svyatlovsky on well-quasi orders in strictly positive logics."] },
    { id: "2023-10-12-mojtahedi", date: "2023-10-12",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Solving Logical Equations",
      location: "Leslokaal 3.2",
      videoUrl: "https://www.youtube.com/watch?v=iU7UO5Hkv0c&t=1664s",
      abstract: ["Consider an equation \\(ax+by+c=0\\) in reals, i.e. assume that \\(a\\), \\(b\\) and \\(c\\) are given parameters seeking for all \\(r\\) and \\(s\\) that if we replace them for variables \\(x\\) and \\(y\\), the equality holds. What if we consider equations in logical setting? More precisely, an equation like \\(p \\to x = \\bot\\), seeking for all formulas \\(A\\) that if we replace them for the variable \\(x\\), the equality \\(p\\to A \\equiv \\bot\\) holds. In this talk we consider this question with a propositional logic in the background: Classical logic, Intuitionistic Logic and Classical Modal Logics."] },
    { id: "2023-10-05-lazar", date: "2023-10-05",
      speaker: "Vlad Lazar",
      affiliation: "Ghent University",
      title: "Quantitative Probabilistic Fixed-Point Logic and the Problem of Satisfiability",
      location: "Leslokaal 3.2",
      videoUrl: "https://youtu.be/WFY7AeylVJ0",
      slidesUrl: "https://drive.google.com/file/d/1vUFMqI84vowNRCC1lNq01HPcrqAPoB_I/view?usp=sharing",
      abstract: ["I will be presenting the research that I have done for my Master's Thesis in the area of probabilistic fixed-point modal logic. The main focus will be on a tableau construction that I have developed with the aim of addressing the satisfiability problem of a specific probabilistic fixed-point logic setup."] },
    { id: "2023-09-28-weiermann", date: "2023-09-28",
      speaker: "Andreas Weiermann", speakerUrl: "http://cage.ugent.be/~weierman/",
      affiliation: "Ghent University",
      title: "Phase transitions for Gödel incompleteness",
      location: "Leslokaal 3.2",
      videoUrl: "https://www.youtube.com/watch?v=YfeMdus_sTc",
      slidesUrl: "https://drive.google.com/file/d/1-03yCcuhwO2DA75LEqdnxHeArB4x4vNE/view?usp=sharing",
      abstract: ["I will survey various results about phase transitions for Gödel incompleteness. The talk will be accessible for a general audience."] },
    { id: "2023-05-30-aguilera", date: "2023-05-30",
      speaker: "Juan Pablo Aguilera", speakerUrl: "https://juan.ag/",
      affiliation: "Ghent University and TU Wien",
      title: "Monotone versus non-monotone projective operators",
      abstract: ["For \\(\\Gamma = \\Sigma^1_n\\) or \\(\\Pi^1_n\\), the closure ordinal of monotone \\(\\Gamma\\) operators is smaller than the closure ordinal of \\(\\Gamma\\) operators, assuming \\(V=L\\) or \\(\\mathsf{PD}\\). Half the inequalities are due to Aanderaa (1974) and the rest are new and joint with Philip Welch."] },
    { id: "2023-05-30-nivasch", date: "2023-05-30",
      speaker: "Gabriel Nivasch", speakerUrl: "https://www.gabrielnivasch.org/",
      affiliation: "Ariel University",
      title: "On the termination of some recursive algorithms",
      abstract: [
        "Erickson, Nivasch, and Xu (2021), while studying so-called \"fusible numbers\", considered the following recursive algorithm \\(M(x)\\): if \\(x<0\\) return \\(-x\\), else return \\(M(x-M(x-1))/2\\). They showed that \\(M\\) terminates on real inputs, and that \\(\\mathsf{PA}\\) cannot prove that \\(M\\) terminates on all natural inputs. In this talk we investigate conditions under which similar recursive algorithms terminate on all real inputs.",
        "Joint work with Lior Shiboli."
      ] },
    { id: "2023-05-30-chopra", date: "2023-05-30",
      speaker: "Alakh Dhruv Chopra",
      affiliation: "Ghent University",
      title: "Finite leaf-labeled trees ordered by non-inf-preserving embeddings",
      abstract: [
        "As indicated in the title, the subject of the talk will be a certain well-quasi-order of leaf-labeled trees with an ordering which is weaker than the usual Kruskal embedding. The primary goal is the calculation of maximal order types — an oft-discussed topic during a recent visit by Harry Altman — as a function of the labeling wqo. Using their correspondence to finitary indecomposable transfinite sequences, we'll also get a nice result for all finitary sequences of length less than \\(\\omega^\\omega\\).",
        "This is joint work with Fedor Pakhomov, and overlapping with a recent paper by Andreas Weiermann and Harvey Friedman."
      ] },
    { id: "2023-05-11-vivi", date: "2023-05-11",
      speaker: "Andrea Vivi",
      affiliation: "Università di Roma La Sapienza",
      title: "Relations between the Ramsey theorem and other important theorems",
      abstract: ["The Ramsey theorem is an important result that will be treated from a reverse mathematics perspective. Considering the Hindman theorem and the Increasing Polarized Theorem, we will restrict each other to the version on couples and two colours, and then compare these theorems with other conditions and stronger versions to find some interesting equivalences, and see if over \\(\\mathsf{RCA}_0\\) it is possible to prove that these three theorems are equivalent to each other."] },
    { id: "2023-05-04-walsh", date: "2023-05-04",
      speaker: "James Walsh", speakerUrl: "https://www.jameswalsh.org/",
      affiliation: "NYU",
      title: "New results on incompleteness and ordinal analysis",
      abstract: [
        "We present an analogue of Gödel’s second incompleteness theorem. Whereas Gödel showed that sufficiently strong theories that are \\(\\Pi^0_1\\)-sound and \\(\\Sigma^0_1\\)-definable do not prove their own \\(\\Pi^0_1\\)-soundness, we prove that sufficiently strong theories that are \\(\\Pi^1_1\\)-sound and \\(\\Sigma^1_1\\)-definable do not prove their own \\(\\Pi^1_1\\)-soundness. Our proof does not involve the construction of a self-referential sentence but rather relies on ordinal analysis.",
        "If time permits, we will then turn to characterizations of ordinal analysis itself. One of the main goals of ordinal analysis is measuring the “strength” of theories by calculating their proof-theoretic ordinals. But in what sense do proof-theoretic ordinals measure the strength of theories? What is the attendant notion of strength? We provide some abstract answers to this question."
      ] },
    { id: "2023-04-27-mclean", date: "2023-04-27",
      speaker: "Brett McLean",
      affiliation: "Ghent University",
      title: "Complete representation by partial functions for signatures containing antidomain restriction",
      abstract: [
        "In [1], Jackson and Stokes investigate the axiomatisability of classes of algebras that are representable as (i.e. isomorphic to) an algebra of partial functions. Using a uniform method of representation, they give, for around 30 different signatures containing the domain restriction operation, either a finite equational or finite quasi-equational axiomatisation of the class of representable algebras. Only a handful of these classes had previously been axiomatised.",
        "We show that a similar uniform method of representation can be used to characterise many of the corresponding subclasses of completely representable algebras. A complete representation is one that turns any existing infima/suprema into intersections/unions. Specifically, we do this for signatures containing the operation called minus in [1] and which we call antidomain restriction; thus for about half of the signatures treated in [1]. Together with the results of [1], this gives us finite first-order axiomatisations of 11 of these classes of completely representable algebras. Only a couple of complete representation classes had previously been axiomatised (for representation as partial functions).",
        "[1] Marcel Jackson and Tim Stokes, Restriction in Program Algebra, Logic Journal of the IGPL, (2022), 35 pp."
      ] },
    { id: "2023-04-20-sold", date: "2023-04-20",
      speaker: "Giovanni Soldà", speakerUrl: "https://giovannisolda.github.io/",
      affiliation: "Ghent University",
      title: "Provable bqo's",
      abstract: [
        "It is a known result that any theory T extending \\(\\mathsf{RCA}_0\\) which proves that 3 is bqo also proves that any finite poset is bqo. Interestingly, as Freund recently showed, 3 being bqo is not a trivial statement, as it entails \\(\\mathsf{ACA}_0^+\\) over \\(\\mathsf{RCA}_0\\) (an implication not known to be strict). Hence, a natural question to be asked is: what can we say about the finite posets P that a \"weak\" theory (i.e., a theory not proving that 3 is bqo) proves to be bqo? In this talk, we will provide a characterization of these posets, and then extend this result to study the posets that \\(\\mathsf{ACA}_0\\) proves to be bqo. Finally, we will show how these considerations can be exploited to show the weakness of some versions of the minimal bar array lemma.",
        "This is joint work with Anton Freund, Alberto Marcone and Fedor Pakhomov."
      ] },
    { id: "2023-03-30-weiermann", date: "2023-03-30",
      speaker: "Andreas Weiermann", speakerUrl: "http://cage.ugent.be/~weierman/",
      affiliation: "Ghent University",
      title: "The phase transition for Friedman's Bolzano Weierstrass Theorem",
      abstract: ["We cover our recent findings regardings the parameterized Friedman's Bolzano Weierstrass theorem \\(\\mathsf{FBW}_f\\) where f is a positive primitive recursive function. Our aim is to indicate the precise threshold region for f for which \\(\\mathsf{FBW}_f\\) becomes unprovable in the fragment of \\(\\mathsf{PA}\\) with one quantifier induction only."] },
    { id: "2023-03-23-altman", date: "2023-03-23",
      speaker: "Harry Altman", speakerUrl: "https://hjaltman.github.io/",
      title: "An Introduction to Integer Complexity",
      abstract: [
        "The *integer complexity* of a number \\(n\\), denoted \\(\\|n\\|\\), is the smallest number of 1's needed to write \\(n\\) using any combination of addition and multiplication. Despite this simple definition many problems about it remain open; for instance, it is unknown whether \\(\\|2^k\\|=2k\\) for all \\(k \\geq 1\\).",
        "In this talk we'll provide an overview of integer complexity, discussing its approximate magnitude, how fast it may be computed, and some infinite families of numbers we *can* determine the complexity of, but focusing primarily on a well-ordering phenomenon that occurs when one transforms the complexity values into real-valued \"defects\". We'll also discuss variants of the problem."
      ] },
    { id: "2023-03-09-altman", date: "2023-03-09",
      speaker: "Harry Altman", speakerUrl: "https://hjaltman.github.io/",
      title: "Untitled talk",
      abstract: ["Given a finite collection of well-orders, the lower sets of their Cartesian product form a well partial order under inclusion. In this talk we'll discuss how the type of this well partial order may be computed (both with and without a boundedness restriction) and why the resulting function takes the specific form that it does. Time permitting we may discuss variants of the problem."] },
    { id: "2023-03-02-buriola", date: "2023-03-02",
      speaker: "Gabriele Buriola", speakerUrl: "https://webapps.unitn.it/du/en/Persona/PER0230713",
      affiliation: "University of Verona",
      title: "Higman and Kruskal in Reverse Mathematics",
      abstract: [
        "Higman’s lemma and Kruskal’s theorem are two of the most celebrated results in the theory of well quasi-orders. In his seminal paper, G. Higman obtained what is known as Higman’s lemma as a corollary of a more general theorem, dubbed here Higman’s theorem. J.B. Kruskal was well aware of this more general set up; in the very end of his famous article, he explicitly stated how Higman’s theorem is a special version, restricted to trees of finite branching degree, of Kruskal’s own tree theorem. In this talk, we present proof-theoretic relations between different version of Higman's and Kruskal's theorems, establishing also their proof-theoretic ordinals.",
        "Joint work with Peter Schuster and Andreas Weiermann"
      ] },
    { id: "2023-02-23-pakhomov", date: "2023-02-23",
      speaker: "Fedor Pakhomov", speakerUrl: "https://research.ugent.be/web/person/fedor-pakhomov-0/en",
      affiliation: "Ghent University",
      title: "The Logical Strength of Minimal Bad Array",
      abstract: [
        "The notion of better quasi order, due to Nash-Williams, has led to a rich body of results, which includes Laver’s famous proof of Fraïssé’s conjecture. A central tool is the minimal bad array principle. In the present paper, we show that this principle is exceptionally strong from the viewpoint of reverse mathematics, a framework from mathematical logic. Specifically, it is equivalent to \\(\\Pi^1_2\\)-comprehension over the base theory \\(\\mathsf{ATR}_0\\).",
        "Joint work with Anton Freund and Giovanni Soldà"
      ] },
    { id: "2023-02-16-visser", date: "2023-02-16",
      speaker: "Albert Visser", speakerUrl: "https://www.phil.uu.nl/profiel/albert.visser/",
      affiliation: "University of Utrecht",
      title: "Inseparability meets Creativity",
      abstract: [
        "In this talk we take a step in the program of studying incompleteness and undecidability of theories from a recursion theoretic standpoint. We review some relevant notions and give some historical results.",
        "We explain the notions of *effective strong inseparability* of theories and *effective essential hereditary creativity*. We provide a proof of Vaught’s theorem that the theory R is effectively strongly inseparable and show how Trakhtenbrot’s is a direct consequence of this result.",
        "If time allows, we will also give Hanf’s example of an effectively strongly inseparable theory of an entirely different flavor than R.",
        "We sketch the easy part of the proof that the two salient notions of effective strong inseparability and effective essential hereditary creativity coincide.",
        "Joint work with Taishi Kurahashi."
      ] },
    { id: "2023-02-13-ternovska", date: "2023-02-13",
      speaker: "Eugenia Ternovska", speakerUrl: "https://www.cs.sfu.ca/~ter/my_web_page/Welcome.html",
      affiliation: "Simon Fraser University",
      title: "An Algebraic Model of Non-Deterministic Polynomial Time Computations",
      abstract: [
        "The central open question in Descriptive Complexity is whether there is a logic that characterizes deterministic polynomial time (P-time) on relational structures. Towards this goal, I will present a logic defined algebraically. The algebra can also be viewed as a modal Dynamic Logic, where terms describing programs appear inside modalities.",
        "Semantically, algebraic expressions are partial functions on strings of relational structures. Choice functions select among possible partial mappings, and serve as certificates for the membership in the computational problem specified by a term.",
        "The logic precisely captures non-deterministic polynomial time (NP) computations, and an interesting questions is to find decidable conditions for P-time. I will explain how our proof system could aid this goal. The work is ongoing, and there are challenging mathematical questions to be answered."
      ] },
    { id: "2023-02-09-rock", date: "2023-02-09",
      speaker: "Daisy Rock", speakerUrl: "https://sites.google.com/view/jobdrock/",
      affiliation: "Ghent University",
      title: "Some Continuous Algebra",
      abstract: ["We will discuss some algebraic structures and their “continuification”. In particular, we’ll consider representations of path algebras, ideals in certain abelian categories, certain kinds of orbit categories, and associahedra. In each case we’ll have a very quick over view of the classical (discrete) case and then an intuitive description of the continuous case. This talk is intended to be accessible to a general mathematical audience."] },
    { id: "2023-02-02-mojtahedi", date: "2023-02-02",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Intuitionistic provability logic: an overview",
      abstract: ["Since 1980 where Albert Visser considered the question for the provability logic of Heyting Arithmetic \\(\\mathsf{HA}\\), several related results obtained by e.g. Dick de Jongh, Albert Visser, Rosalie Iemhoff, Mohammad Ardeshir and me. It turns out that intuitionistic provability, is deeply connected with admissibility, preservability, interpretability, projectivity and unification."] }
  ],
  // ACTIVITIES — what the group does besides the research seminar.
  // Each entry names its "kind"; every distinct kind becomes a section on the
  // page, in the order the kinds first appear here, with a jump link at the top.
  // Invent a new kind simply by typing one — nothing else has to change.
  //   title:       what this particular reading group, course or event is
  //   when:        "Weekly, Tuesdays at 16:00" or "9-11 June 2027"
  //   where:       a room or venue
  //   description: one paragraph, or a list of paragraphs
  //   url / linkLabel:  an optional link, and what to call it
  //   contact:     an email address; shown as "Email the organisers"
  //   id:          optional, for linking straight to this entry
  activities: [
    { kind: "Workshops & conferences",
      title: "[Name of a meeting the group organises]",
      when: "[Dates]", where: "[Venue]",
      description: "A sentence on the subject and who it is for. Link to the meeting's own page for the programme and registration.",
      url: "", linkLabel: "Workshop website", contact: "", sample: true },
    { kind: "Workshops & conferences",
      title: "[A second meeting, if there is one]",
      when: "[Dates]", where: "[Venue]",
      description: "Copy an entry to add another. Delete this one if there is only the single meeting.",
      url: "", contact: "", sample: true },
    { kind: "Reading groups",
      title: "[Book or paper the group is reading]",
      when: "[Weekly, day and time]", where: "[Room]",
      description: "Say what is being read, how much background it assumes, and whether newcomers can join part way through.",
      contact: "", url: "", sample: true },
    { kind: "Reading groups",
      title: "[A second reading group, if there is one]",
      when: "[Fortnightly, day and time]", where: "[Room]",
      description: "Copy an entry to add another. Delete this one if a single reading group is all there is.",
      contact: "", url: "", sample: true },
    { kind: "Courses",
      title: "[Topic of the course]",
      when: "[Three sessions, day and time]", where: "[Room]",
      description: "A handful of lectures rather than a semester: the doctoral students take turns teaching one another the basics of a subject, so that everyone in the group ends up with a working knowledge of it. Name the topic, say who is lecturing, and say how many sessions it runs for.",
      contact: "", url: "", sample: true }
  ]
};
