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
  // SEMINARS — newest first; the order here does not matter, the page sorts by date.
  // A talk moves from "Upcoming talks" into the archive by itself once its date passes.
  //   date: "2026-10-15"          YYYY-MM-DD; leave out for a talk not yet scheduled ("TBA")
  //   time: "11:00"               local Ghent time; omit if it was the usual hour
  //   location: "Leslokaal 2.2"   otherwise falls back to seminarLocation above
  //   speakerUrl:                 turns the speaker's name into a link to their page
  //   onlineUrl / videoUrl / slidesUrl / paperUrl   appear as links beneath the talk
  //   abstract: ["first paragraph", "second paragraph"]   one entry per paragraph
  //   id:                         the talk's own link (seminars.html#id) — keep it unique
  // Any field except date, speaker and title may simply be left out.
  // To add a talk, copy one entry, change the fields, and mind the commas.
  seminars: [
    { id: "2024-12-12-provenzano", date: "2024-12-12",
      speaker: "Philipp Provenzano",
      affiliation: "Ghent University",
      title: "On the reverse mathematics of cut-elimination and determinacy",
      abstract: [
        "In this talk, we will see how soundness and cut-elimination are connected to questions of determinacy.",
        "Concretely, we look at an infinitary version of propositional fixpoint logic (for binary connectives), which is just enough to interpret PA. For this system, soundness and consistency are equivalent to (Σ⁰₁∧Π⁰₁)-Det over Cantor space or, equivalently, ACA₀. Correctness of syntactic cut-elimination, on the other hand, turns out to be significantly stronger, blowing up to Π¹₁-CA₀ or, equivalently, (Σ⁰₁∧Π⁰₁)-Det over Baire space.",
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
      title: "Π¹₂ proof-theoretic analysis of ACA₀, part II",
      abstract: ["Tantalizingly, there is no abstract."] },
    { id: "2024-10-24-pakhomov", date: "2024-10-24",
      speaker: "Fedor Pakhomov", speakerUrl: "https://research.ugent.be/web/person/fedor-pakhomov-0/en",
      affiliation: "Ghent University",
      title: "Π¹₂ proof-theoretic analysis of ACA₀, part I",
      abstract: ["Tantalizingly, there is no abstract."] },
    { id: "2024-05-23-lazar", date: "2024-05-23",
      speaker: "Vlad Lazar",
      affiliation: "Ghent University",
      title: "A poly-modal logic for omega model reflections",
      abstract: ["In this talk I will present an extension of reflection calculus (RC) intended for the analysis of the theory of Bar Induction. RC is a modal logic where formulas are constructed from propositional variables by only utilizing conjunctions and labelled diamond modalities. In its standard arithmetical interpretation, formulas of RC represent theories of first-order arithmetic, and the labelled modalities are interpreted as syntactic reflection principles. Our extension is based on the introduction of a new set of modalities aimed at capturing semantic uniform reflections (also known as omega model reflections). By using ACA₀ as the base theory in the arithmetical interpretation, these additional modalities allow for the representation of the theory of Bar Induction within our framework. The main results I will be presenting are focused on the semantic properties of this system."] },
    { id: "2024-05-16-gjetaj", date: "2024-05-16",
      speaker: "Oriola Gjetaj",
      affiliation: "Ghent University",
      title: "A Goodstein principle for ID₂",
      abstract: ["The Goodstein principle is a natural number-theoretic theorem which is unprovable in Peano arithmetic. Since the original process definition there have been different canonical representations using Ackermann function or the Grzegorczyk hierarchy. These representations give a natural Goodstein process independent from different theories of reverse mathematics. In this talk, we consider a normal form for which we get an independent Goodstein theorem from the ordinal of ID₂."] },
    { id: "2024-05-02-mojtahedi", date: "2024-05-02",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Intuitionistic Polymodal Provability Logic, part II",
      abstract: [
        "The polymodal provability logic GLP, studies the provability predicates for extensions of Peano Arithmetic PA by all true Πₙ-sentences and their interactions with each other. In this talk, we consider the polymodal provability logic of Heyting Arithmetic HA. With the aid of the characterization of provability logic of HA, we are able to characterize the provability logic of HAⁿ, extension of HA by all true Πₙ-sentences.",
        "It turns out that HA and HAⁿ share the same provability logic for every n. Moreover we suggest a polymodal provability logic, called iGLPH, and prove its soundness for arithmetical interpretations in HA. Roughly speaking, iGLPH is just the intuitionistic version of GLP together with [n]A → [n]B for some admissible rules A/B of HAⁿ, namely those who are verifiable in HA."
      ] },
    { id: "2024-04-25-mojtahedi", date: "2024-04-25",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Intuitionistic Polymodal Provability Logic, part I",
      abstract: [
        "The polymodal provability logic GLP, studies the provability predicates for extensions of Peano Arithmetic PA by all true Πₙ-sentences and their interactions with each other. In this talk, we consider the polymodal provability logic of Heyting Arithmetic HA. With the aid of the characterization of provability logic of HA, we are able to characterize the provability logic of HAⁿ, extension of HA by all true Πₙ-sentences.",
        "It turns out that HA and HAⁿ share the same provability logic for every n. Moreover we suggest a polymodal provability logic, called iGLPH, and prove its soundness for arithmetical interpretations in HA. Roughly speaking, iGLPH is just the intuitionistic version of GLP together with [n]A → [n]B for some admissible rules A/B of HAⁿ, namely those who are verifiable in HA."
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
      title: "\"3 is bqo\" implies ATR₀",
      abstract: ["The abstract of the talk coincides with the title."] },
    { id: "2024-02-07-rossegger", date: "2024-02-07",
      speaker: "Dino Rossegger", speakerUrl: "https://drossegger.github.io/",
      affiliation: "UC Berkeley and TU Wien",
      title: "The Borel complexity of first-order theories",
      slidesUrl: "https://drive.google.com/file/d/14nkXYUAS1i3yQNvWMty2B9UalO8qLBLe/view?usp=drive_link",
      abstract: [
        "The Borel hierarchy gives a robust way to stratify the complexity of sets of countable structures and is intimately tied with definability in infinitary logic via the Lopez-Escobar theorem. However, what happens with sets axiomatizable in finitary first-order logic, such as the set of structures satisfying a given finitary first-order theory T? Is the complexity of the set of T's models in any way related to the quantifier complexity of the sentences axiomatizing it? In particular, if a theory T is not axiomatizable by a set of sentences of bounded quantifier complexity, can the set of models of T still be at a finite level of the Borel hierarchy?",
        "In this talk, we will present results concerning these questions:",
        "In joint work with Andrews, Gonzalez, Lempp, and Zhu we show that the set of models of a theory T is Π⁰_ω-complete if and only if T does not have an axiomatization by sentences of bounded quantifier complexity, answering the last question in the negative. We also characterize the Borel complexity of the set of models of complete theories in terms of their finitary axiomatizations. Our results suggest that infinitary logic does not provide any efficacy when defining first-order properties, a phenomenon already observed by Wadge and Keisler and, recently, rediscovered by Harrison-Trainor and Kretschmer using different techniques.",
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
        "Continuous Weihrauch degrees have been known and studied for more than thirty years, yet very little is known on their structure. In this talk, we will focus on some recent observations concerning the degrees that are closest to the degree of the identity (but different from it), and we will show that, perhaps unsurprisingly, their configuration depends strongly on set-theoretic assumptions: in particular, the existence of a minimal such degree requires some form of determinacy. We will then move to a smaller class of \"tamely discontinuous\" multifunctions, still very close to the identity, and show in ZFC that they admit a minimum.",
        "Joint work with Arno Pauly."
      ] },
    { id: "2023-11-30-murwanashyaka", date: "2023-11-30",
      speaker: "Juvenal Murwanashyaka",
      affiliation: "University of Oslo",
      title: "Hilbert's Tenth Problem for Term Algebras with a Substitution Operator",
      location: "Leslokaal 2.2",
      videoUrl: "https://www.youtube.com/watch?v=jI1Fgcm6Qzc",
      abstract: [
        "The analogue of Hilbert’s 10th Problem for a first-order structure A with signature L asks whether there exists an algorithm with input and output as follows:",
        "input: an L-sentence of the form ∃x [ s = t ]",
        "output: YES if ∃x [ s = t ] is true in A, and NO otherwise.",
        "In this talk, we consider the term algebra of finite full binary trees extended with a substitution operator. We show that the analogue of Hilbert’s 10th problem is undecidable by existentially interpreting (N, 0, 1, +, ×). If there is time, we sketch how to existentially interpret (N, 0, 1, +, ×, exp) without relying on the solution to the original Hilbert’s 10th Problem. The talk is based on the CiE 2022 paper [1] and an extended journal version under review.",
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
        "The topological μ-calculus has gathered attention in recent years as a powerful framework for representation of spatial knowledge. In particular, spatial relations can be represented over finite structures in the guise of weakly transitive (wK4) frames. Together with David Fernández-Duque we have shown that the μ-calculus is equivalent to a simple fragment based on a variant of the \"tangle\" operator. Similar results were proven for transitive frames by Dawar and Otto, using modal characterisation theorems for the corresponding classes of frames. However these theorems are not available in our setting and so we ended up with a different approach by studying the Σ-final part of the corresponding Kripke models for finite sets of formulae Σ.",
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
        "The proof of Martin of Borel determinacy showed that the existence of the nth iterated power set of ω is necessary to prove the determinacy of Π⁰ₙ₊₃ Gale-Stewart games (for n ≥ 1). However, it is not known what is the optimal proof for this kind of determinacy nowadays.",
        "Most of the work in the area has been led into second-order arithmetic when one only uses natural numbers and sets of natural numbers. The limit of this analysis is the striking result of Montalbàn and Shore. They showed that when taking finite differences of Π⁰₃ sets, the determinacy axioms grow exponentially in proof-theoretic strength until the limit of provability in Z₂.",
        "We present a generalisation of the results of Montalbán and Shore in some natural interpretation of third-order arithmetic about differences of Π⁰₄ sets. Our work reveals the situation to be slightly different in the uncountable case while generating a plethora of reverse mathematical results about (Π⁰ₙ₊₃)ₘ determinacy axioms (n, m ≥ 1)."
      ] },
    { id: "2023-10-19-beklemishev", date: "2023-10-19",
      speaker: "Lev Beklemishev", speakerUrl: "https://homepage.mi-ras.ru/~bekl/",
      affiliation: "Steklov Mathematical Institute and ILLC Amsterdam",
      title: "Some recent results in provability logic",
      location: "Leslokaal 3.2",
      videoUrl: "https://www.youtube.com/watch?v=9ruySAUUKCs",
      abstract: ["This will be an semi-formal blackboard and chalk talk where I present a survey of the work I and my students are currently doing around provability logic. Time permitting this will include the work of Wang on periodic topological models of GLP, Lukashov on the unification problem for GLP, Dvorkin on the provability logic of Niebergall's arithmetic, Kovalev on open induction, Svyatlovsky on well-quasi orders in strictly positive logics."] },
    { id: "2023-10-12-mojtahedi", date: "2023-10-12",
      speaker: "Mojtaba Mojtahedi",
      affiliation: "Ghent University",
      title: "Solving Logical Equations",
      location: "Leslokaal 3.2",
      videoUrl: "https://www.youtube.com/watch?v=iU7UO5Hkv0c&t=1664s",
      abstract: ["Consider an equation ax+by+c=0 in reals, i.e. assume that a, b and c are given parameters seeking for all r and s that if we replace them for variables x and y, the equality holds. What if we consider equations in logical setting? More precisely, an equation like p → x = ⊥, seeking for all formulas A that if we replace them for the variable x, the equality p → A ≡ ⊥ holds. In this talk we consider this question with a propositional logic in the background: Classical logic, Intuitionistic Logic and Classical Modal Logics."] },
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
      abstract: ["For Γ = Σ¹ₙ or Π¹ₙ, the closure ordinal of monotone Γ operators is smaller than the closure ordinal of Γ operators, assuming V=L or PD. Half the inequalities are due to Aanderaa (1974) and the rest are new and joint with Philip Welch."] },
    { id: "2023-05-30-nivasch", date: "2023-05-30",
      speaker: "Gabriel Nivasch", speakerUrl: "https://www.gabrielnivasch.org/",
      affiliation: "Ariel University",
      title: "On the termination of some recursive algorithms",
      abstract: [
        "Erickson, Nivasch, and Xu (2021), while studying so-called \"fusible numbers\", considered the following recursive algorithm M(x): if x<0 return −x, else return M(x−M(x−1))/2. They showed that M terminates on real inputs, and that PA cannot prove that M terminates on all natural inputs. In this talk we investigate conditions under which similar recursive algorithms terminate on all real inputs.",
        "Joint work with Lior Shiboli."
      ] },
    { id: "2023-05-30-chopra", date: "2023-05-30",
      speaker: "Alakh Dhruv Chopra",
      affiliation: "Ghent University",
      title: "Finite leaf-labeled trees ordered by non-inf-preserving embeddings",
      abstract: [
        "As indicated in the title, the subject of the talk will be a certain well-quasi-order of leaf-labeled trees with an ordering which is weaker than the usual Kruskal embedding. The primary goal is the calculation of maximal order types — an oft-discussed topic during a recent visit by Harry Altman — as a function of the labeling wqo. Using their correspondence to finitary indecomposable transfinite sequences, we'll also get a nice result for all finitary sequences of length less than ω^ω.",
        "This is joint work with Fedor Pakhomov, and overlapping with a recent paper by Andreas Weiermann and Harvey Friedman."
      ] },
    { id: "2023-05-11-vivi", date: "2023-05-11",
      speaker: "Andrea Vivi",
      affiliation: "Università di Roma La Sapienza",
      title: "Relations between the Ramsey theorem and other important theorems",
      abstract: ["The Ramsey theorem is an important result that will be treated from a reverse mathematics perspective. Considering the Hindman theorem and the Increasing Polarized Theorem, we will restrict each other to the version on couples and two colours, and then compare these theorems with other conditions and stronger versions to find some interesting equivalences, and see if over RCA₀ it is possible to prove that these three theorems are equivalent to each other."] },
    { id: "2023-05-04-walsh", date: "2023-05-04",
      speaker: "James Walsh", speakerUrl: "https://www.jameswalsh.org/",
      affiliation: "NYU",
      title: "New results on incompleteness and ordinal analysis",
      abstract: [
        "We present an analogue of Gödel’s second incompleteness theorem. Whereas Gödel showed that sufficiently strong theories that are Π⁰₁-sound and Σ⁰₁-definable do not prove their own Π⁰₁-soundness, we prove that sufficiently strong theories that are Π¹₁-sound and Σ¹₁-definable do not prove their own Π¹₁-soundness. Our proof does not involve the construction of a self-referential sentence but rather relies on ordinal analysis.",
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
        "It is a known result that any theory T extending RCA₀ which proves that 3 is bqo also proves that any finite poset is bqo. Interestingly, as Freund recently showed, 3 being bqo is not a trivial statement, as it entails ACA₀⁺ over RCA₀ (an implication not known to be strict). Hence, a natural question to be asked is: what can we say about the finite posets P that a \"weak\" theory (i.e., a theory not proving that 3 is bqo) proves to be bqo? In this talk, we will provide a characterization of these posets, and then extend this result to study the posets that ACA₀ proves to be bqo. Finally, we will show how these considerations can be exploited to show the weakness of some versions of the minimal bar array lemma.",
        "This is joint work with Anton Freund, Alberto Marcone and Fedor Pakhomov."
      ] },
    { id: "2023-03-30-weiermann", date: "2023-03-30",
      speaker: "Andreas Weiermann", speakerUrl: "http://cage.ugent.be/~weierman/",
      affiliation: "Ghent University",
      title: "The phase transition for Friedman's Bolzano Weierstrass Theorem",
      abstract: ["We cover our recent findings regardings the parameterized Friedman's Bolzano Weierstrass theorem FBW_f where f is a positive primitive recursive function. Our aim is to indicate the precise threshold region for f for which FBW_f becomes unprovable in the fragment of PA with one quantifier induction only."] },
    { id: "2023-03-23-altman", date: "2023-03-23",
      speaker: "Harry Altman", speakerUrl: "https://hjaltman.github.io/",
      title: "An Introduction to Integer Complexity",
      abstract: [
        "The *integer complexity* of a number n, denoted ||n||, is the smallest number of 1's needed to write n using any combination of addition and multiplication. Despite this simple definition many problems about it remain open; for instance, it is unknown whether ||2ᵏ||=2k for all k≥1.",
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
        "The notion of better quasi order, due to Nash-Williams, has led to a rich body of results, which includes Laver’s famous proof of Fraïssé’s conjecture. A central tool is the minimal bad array principle. In the present paper, we show that this principle is exceptionally strong from the viewpoint of reverse mathematics, a framework from mathematical logic. Specifically, it is equivalent to Π¹₂-comprehension over the base theory ATR₀.",
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
      abstract: ["Since 1980 where Albert Visser considered the question for the provability logic of Heyting Arithmetic HA, several related results obtained by e.g. Dick de Jongh, Albert Visser, Rosalie Iemhoff, Mohammad Ardeshir and me. It turns out that intuitionistic provability, is deeply connected with admissibility, preservability, interpretability, projectivity and unification."] }
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
