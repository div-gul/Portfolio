import { FormEvent, useState } from "react";
import sketch from "./assets/graphite-eye.jpeg";
import painting from "./assets/watercolor-landscape.jpeg";

const LINKS = {
  email: "divyani.p.gulhane@gmail.com",
  leetcode: "https://leetcode.com/u/divyani_gulhane/",
  github: "https://github.com/div-gul",
  linkedin: "https://www.linkedin.com/in/divyani-gulhane-38144031b",
  projects: ["https://github.com/pranalicharkha/Dhatu-Scan", "https://github.com/OmKalshetti2276/PBL  ", "https://github.com/div-gul/LibraryManagementSysten", "https://github.com/div-gul/Customer_Segmentation-"],
};
const skills = [["PROGRAMMING LANGUAGES", "Programming Foundations", "Problem solving, object-oriented programming, data structures, algorithms, and database querying.", "C++ · C · Python · SQL · JavaScript"], ["SOFTWARE & WEB DEV", "Web Development", "Building responsive interfaces, REST APIs, and frontend-backend integrations.", "React.js · FastAPI · HTML5/CSS3 · Tailwind CSS · JavaScript"], ["AI, DATA & ANALYTICS", "Data & Machine Learning", "Data preprocessing, exploratory analysis, visualization, and introductory machine learning models.", "Pandas · NumPy · Scikit-learn · Matplotlib · Machine Learning"], ["DATABASES & TOOLING", "Databases & Developer Tools", "Relational and NoSQL databases, CRUD operations, basic database design, and version control.", "MySQL · MongoDB  · Git & GitHub · VS Code"]];
const projects = [
  
    [
      "Dhatu-Scan : Children Malnutrition Analysis",
      "Data & Analytics",
      "An analytical project focused on identifying patterns and factors associated with child malnutrition to derive meaningful insights from real-world data.",
      "Tech: Python, Pandas, NumPy, Data Analysis, Visualization",
      
    ],
    [
      "HormoAI",
      "Machine Learning System",
      "A machine learning-based health risk prediction system for screening diabetes, PCOS, and thyroid-related conditions.",
      "Tech: Python, Pandas, Scikit-learn, Flask, Machine Learning",
      
    ],
    [
    "Library Management System",
    "Full-Stack Application",
    "A library management platform for handling books, members, and borrowing records through a connected frontend and backend.",
    "Tech: React, Python, MySQL, REST API",
    
  ],

  [
    "Customer Segmentation",
    "Data Analytics",
    "A K-Means clustering project that analyzes customer behavior and groups customers into distinct segments for meaningful business insights.",
    "Tech: Python, Pandas, NumPy, Scikit-learn, Matplotlib",
    
  ]

];
const milestones = [
  "NPTEL – Internet Crimes and Cyber Security (93%)",
  "HackerRank Skill Certification – Python (Basic) and Problem Solving (Basic)",
  "HackerRank – 5★ in Python & C++",
  "Kaggle Learn – Pandas and Data Visualization",
  "Tata Group Data Visualisation: Empowering Business with Effective Insights – Forage (June 2026)",
  "Finalist – MIT-WPU Hackathon (Dhatu-Scan)",
  "Secured 99.60 percentile in MHT-CET and 96.39 percentile in JEE Main"
];
const poem = `I wish to cry.
I wish to bawl my eyes out
like a lost child crying for it's mother.

It does not matter whether I have a shoulder to cry on or not.
I merely wish to have a light heart again.
At this moment,
my heart sinks into an endless abyss burdened by feelings whose names I do not know.

Why, I ask.
What are these feelings I ask.
What direction do I look into?
I do not know.

I call into the dark and not even my voice returns.

I realise I am all I have,
Yet even I do not wish to stand by my side`;

function Arrow({ onClick, label, disabled = false }: { onClick: () => void; label: string; disabled?: boolean }) { return <button className="arrow" type="button" onClick={onClick} aria-label={label} disabled={disabled}>›</button>; }
function Heading({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) { return <div className="heading"><div><p className="eyebrow">{number}</p><h2>{title}</h2></div>{subtitle && <p>{subtitle}</p>}</div>; }

function ContactForm() {
  const [name, setName] = useState(""); const [replyTo, setReplyTo] = useState(""); const [message, setMessage] = useState(""); const [sent, setSent] = useState(false);
  function send(event: FormEvent) { event.preventDefault(); window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(`Portfolio message from ${name || "a visitor"}`)}&body=${encodeURIComponent(`From: ${name}\nReply-to: ${replyTo}\n\n${message}`)}`; setSent(true); }
  return <form className="contact-form" onSubmit={send}><div className="form-row"><label>Your name<input required value={name} onChange={e => setName(e.target.value)} placeholder="Name" /></label><label>Email address<input required type="email" value={replyTo} onChange={e => setReplyTo(e.target.value)} placeholder="you@example.com" /></label></div><label>Message<textarea required value={message} onChange={e => setMessage(e.target.value)} placeholder="Write your message…" rows={5} /></label><div className="form-footer"><span>{sent ? "Your email app is ready with the message." : "Send a note directly from here."}</span><button className="btn dark" type="submit">Send message ↗</button></div></form>;
}

export default function App() {
  const [clock, setClock] = useState(0); const [creative, setCreative] = useState(0); const [page, setPage] = useState(0); const visible = projects.slice(page * 2, page * 2 + 2);
  return <div className="site"><header><a className="brand" href="#about">Divyani Gulhane <span>ATELIER & SYSTEMS</span></a><nav>{[["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Education", "education"], ["Creative", "creative"], ["Contact", "contact"]].map(([n, id]) => <a href={`#${id}`} key={id}>{n}</a>)}</nav></header><main>
    <section className="section hero" id="about"><div className="hero-content"><p className="eyebrow">COMPUTER ENGINEERING STUDENT</p><span className="open-to-work">● OPEN TO WORK</span><h1>Divyani<br /><em>Gulhane</em></h1><p className="lede">Building thoughtful software, learning from data, and making space for art.</p><div className="actions"><a className="btn dark" href="#contact">Get in touch</a><a className="btn light" href="#projects">View work</a></div></div>
      <div className="clock"><div className="clock-top"><span><i /> SYS_CLOCK // 01: PROFILE</span><button onClick={() => setClock(clock ? 0 : 1)} aria-label="Switch profile panel">›</button></div>{clock === 0 ? <><p className="clock-label">ACADEMIC SNAPSHOT <b>ONLINE • 2026</b></p><p className="clock-value">PICT PUNE <span>CGPA 9.4 / 10</span></p><p className="clock-bottom">B.Tech in Computer Engineering <b>Class of 2028</b></p></> : <div className="channels"><p className="clock-label">EXTERNAL CHANNELS <b>OPEN</b></p>{[["LEETCODE", LINKS.leetcode], ["GITHUB", LINKS.github], ["LINKEDIN", LINKS.linkedin], ["EMAIL", `mailto:${LINKS.email}`]].map(([name, href]) => <a href={href} target={name === "EMAIL" ? undefined : "_blank"} rel="noreferrer" key={name}>{name}<span>↗</span></a>)}</div>}<button className="clock-next" onClick={() => setClock(clock ? 0 : 1)}>View {clock ? "academic snapshot" : "external channels"} ›</button></div>
    </section>
    <section className="section" id="skills"><Heading number="01 / TECH" title="Skills & Craft" subtitle="Core competencies across systems, data, and web engineering" /><div className="grid skill-grid">{skills.map(([title, sub, desc, stack]) => <article className="card skill" key={title}><p className="kicker">{title}</p><h3><em>{sub}</em></h3><p>{desc}</p><footer>{stack}</footer></article>)}</div></section>
    <section className="section" id="projects"><div className="heading-row"><Heading number="02 / WORK" title="Featured Projects" subtitle="A selection of work across product, AI, and data." /><div className="pager"><button onClick={() => setPage(0)} disabled={!page}>‹</button><span>{page + 1} / 2</span><Arrow label="Next projects" onClick={() => setPage(1)} disabled={page === 1} /></div></div><div className="grid">{visible.map((p, i) => <article className="card project" key={p[0]}>{p[0] === "Library Management System" && <b className="progress-tag">WORK IN PROGRESS</b>}<p className="kicker">0{page * 2 + i + 1} / {p[1]}</p><h3>{p[0]}</h3><p>{p[2]}</p>{LINKS.projects[page * 2 + i] ? <a href={LINKS.projects[page * 2 + i]} target="_blank" rel="noreferrer">Open project ↗</a> : <span>Project link coming soon</span>}</article>)}</div></section>
    <section className="section" id="education"><Heading number="03 / ACADEMICS" title="Academic Journey" subtitle="Education, credentials, and continuing learning." /><div className="academic-grid"><article className="card education timeline-card"><div className="academic-title"><i>⌂</i><div><h3>Formal Education</h3><span>Computer Science & Engineering</span></div></div><div className="timeline"><div><span className="timeline-dot" /><strong>Pune Institute of Computer Technology (PICT)</strong><time>2024 — 2028</time><p>B.Tech in Computer Engineering</p><b>◉ Cumulative GPA: 9.4 / 10.0</b></div><div><span className="timeline-dot" /><strong>CBSE Class XII</strong><time>2024</time><p>Central Board of Secondary Education</p><b>Distinction Score: 95.4%</b></div><div><span className="timeline-dot" /><strong>CBSE Class X</strong><time>2022</time><p>Central Board of Secondary Education</p><b>Top 5 Subjects: 98%</b></div></div></article><article className="card education milestones-card"><div className="academic-title"><i>♜</i><div><h3>Milestones & Programs</h3><span>Certifications & National Initiatives</span></div></div><div className="milestone-boxes">{milestones.map((m, index) => <div key={m}><strong>{m}</strong><b>{index === 0 ? "93%" : index < 3 ? "CERTIFIED" : index === 5 ? "NATIONAL" : "COMPLETED"}</b></div>)}</div></article></div></section>
    <section className="section" id="creative"><div className="heading-row"><Heading number="04 / ART" title="Creative Corner" /><div className="pager"><button onClick={() => setCreative(Math.max(0, creative - 1))} disabled={!creative}>‹</button><span>{creative + 1} / 3</span><Arrow label="Next creative page" onClick={() => setCreative(Math.min(2, creative + 1))} disabled={creative === 2} /></div></div><p className="creative-caption">unwinding in textures and colors in quiet moments of life</p>{creative === 0 ? <article className="card artwork"><img src={sketch} alt="Graphite eye sketch" /><div><p className="kicker">GRAPHITE STUDY</p><h3>Sketch</h3><p>A study in graphite and detail, created following a wonderful step-by-step tutorial. It was such a rewarding exercise in learning texture and shading!</p><b>( made with love&lt;3 )</b></div></article> : creative === 1 ? <article className="card poem"><p className="kicker">SELECTED VERSE</p><h3>EVEN I?  </h3><p>{poem}</p><aside>An exercise in capturing the moments where language fails us. Sometimes the most honest writing comes from leaning into the silence and observing the unnamable heavy spaces we all pass through.</aside><b>“written by me, with love &lt;3”</b></article> : <article className="card artwork"><img src={painting} alt="Watercolor landscape painting" /><div><p className="kicker">WATERCOLOR STUDY</p><h3>Painting</h3><p>I tried to capture the soft warmth of the scenery shown in a photograph and let the colors blend gently on paper.</p><b>( made with love&lt;3 )</b></div></article>}</section>
    <section className="section contact" id="contact"><p className="eyebrow">LET’S CONNECT</p><h2>Thank you for stopping by.</h2><p>Whether you have an internship opportunity, an open-source idea, or simply want to chat, my inbox is open.</p><ContactForm /></section>
  </main></div>;
}
