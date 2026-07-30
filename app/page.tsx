const resources = [
  { code: "EDU", name: "design education", note: "ways to learn the language of a field" },
  { code: "CUL", name: "cultural exposure", note: "museums, exhibitions, archives, references" },
  { code: "SPA", name: "space + tools", note: "libraries, software, studios, maker spaces" },
  { code: "NET", name: "people + networks", note: "mentors, peers, introductions, belonging" },
  { code: "TIM", name: "time + money", note: "the ability to practice, travel, and take risks" },
  { code: "JOB", name: "opportunity", note: "internships, design firms, titles, salaries" },
];

const bagFragments = [
  ["ADMIT ONE", "museum ticket", "CUL"],
  ["OPEN STUDIO", "maker-space address", "SPA"],
  ["BFA / MFA", "art-school information", "EDU"],
  ["DESIGNER I", "entry-level job listing", "JOB"],
  ["PORTFOLIO NIGHT", "industry event", "NET"],
  ["AVG. PAY", "designer salary", "INC"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top">ACCESS IS NOT EQUITY</a>
        <span className="status"><i /> WORKING IDEA · 30 JUL 2026</span>
        <nav aria-label="Page sections">
          <a href="#question">Question</a>
          <a href="#layers">Layers</a>
          <a href="#forms">Forms</a>
        </nav>
      </header>

      <section className="hero">
        <p className="kicker">A developing investigation by Nicole Lu</p>
        <h1>
          You can open<br />
          the same <span>tool.</span>
        </h1>
        <p className="turn">But what surrounds you<br />before you open it?</p>
        <div className="hero-foot">
          <span>AI + DESIGN + LOCATION</span>
          <a href="#question">follow the question ↓</a>
        </div>
        <div className="locator locator-a">40.7128° N</div>
        <div className="locator locator-b">education</div>
        <div className="locator locator-c">opportunity</div>
      </section>

      <section id="question" className="question-section">
        <p className="margin-label">THE QUESTION / FOR NOW</p>
        <div className="question-copy">
          <h2>How does the country you live in shape what you can do with AI?</h2>
          <p>
            Logging in is one kind of access. Knowing what to ask, what to notice,
            and where an answer might lead is another. Those abilities develop
            inside unequal educational, cultural, and professional systems.
          </p>
        </div>
        <div className="access-compare">
          <article>
            <small>01 / TECHNICAL ACCESS</small>
            <strong>CAN I<br />OPEN IT?</strong>
            <p>device · internet · account</p>
          </article>
          <div className="not-equal" aria-hidden="true">≠</div>
          <article>
            <small>02 / MEANINGFUL ACCESS</small>
            <strong>CAN I<br />USE IT?</strong>
            <p>knowledge · judgment · support · possibility</p>
          </article>
        </div>
        <aside className="pencil-note">not a final definition yet → something I want to test</aside>
      </section>

      <section id="layers" className="layers-section">
        <div className="layers-head">
          <p className="margin-label">COUNTRY AS A FIRST LAYER</p>
          <h2>The same tool enters different ecosystems.</h2>
          <p>
            I am not comparing distances between places. I am asking how the
            country someone lives in shapes the design resources and pathways
            available to them.
          </p>
        </div>

        <div className="field country-field" aria-label="A conceptual comparison of two national design ecosystems">
          <div className="map-grid" />
          <div className="same-tool"><span>SAME GENERATIVE AI PLATFORM</span><b>ONE INTERFACE</b></div>
          <div className="country-column country-a">
            <header><small>POSSIBLE STUDY / 01</small><h3>TAIWAN</h3><p>national + regional context</p></header>
            <div className="country-resources">
              {resources.map((item) => <span key={item.code}><b>{item.code}</b>{item.name}</span>)}
            </div>
            <footer>COLLECT DATA / FIND PATTERNS / DO NOT ASSUME</footer>
          </div>
          <div className="country-column country-b">
            <header><small>POSSIBLE STUDY / 02</small><h3>UNITED STATES</h3><p>national + regional context</p></header>
            <div className="country-resources">
              {resources.map((item) => <span key={item.code}><b>{item.code}</b>{item.name}</span>)}
            </div>
            <footer>USE THE SAME CATEGORIES / COMPARE CONDITIONS</footer>
          </div>
          <div className="field-note">possible comparison — countries not confirmed yet</div>
        </div>

        <div className="working-chain">
          <span>COUNTRY CONTEXT</span><i />
          <span>DESIGN ECOSYSTEM</span><i />
          <span>KNOWLEDGE + OPPORTUNITY</span><i />
          <span>MEANINGFUL AI USE</span>
        </div>
      </section>

      <section className="definition-section">
        <p className="margin-label">A WORKING DEFINITION</p>
        <blockquote>
          Access is not only whether something is available. It is whether a
          person can <em>find it, reach it, understand it, question it,</em> and
          <em>use it.</em>
        </blockquote>
        <div className="definition-foot">
          <span>Technical access may be shared.</span>
          <span>Starting conditions are not.</span>
        </div>
      </section>

      <section id="forms" className="forms-section">
        <div className="forms-intro">
          <p className="margin-label">THREE CONNECTED FORMS</p>
          <h2>Not three copies of the same information.</h2>
        </div>

        <article className="form website-form">
          <div className="form-index">01</div>
          <div>
            <small>THIS WEBSITE</small>
            <h3>An invitation into the question</h3>
            <p>Informal, interactive, and evolving. A place to feel how resources accumulate before reading a conclusion.</p>
          </div>
          <div className="browser-sample" aria-hidden="true">
            <div><i /><i /><i /></div>
            <span>what do you have access to?</span>
            <b>COLLECT / CONNECT / NOTICE</b>
          </div>
        </article>

        <article className="form drawing-form">
          <div className="form-index">02</div>
          <div>
            <small>PRINTED VERTICAL DRAWING · IN DEVELOPMENT</small>
            <h3>A comparison of design ecosystems</h3>
            <p>A long data field comparing the resources and professional pathways available in different countries—not the distance between them. The country pair and final dataset still need to be confirmed.</p>
          </div>
          <div className="map-sample ecosystem-sample" aria-label="Conceptual sketch for a printed comparison of national design ecosystems">
            <div className="sample-tool">SAME AI TOOL</div>
            <div className="sample-country"><b>COUNTRY / 01</b><span>EDUCATION</span><span>INDUSTRY</span><span>JOBS</span><span>SALARY</span><span>CULTURE</span></div>
            <div className="sample-country"><b>COUNTRY / 02</b><span>EDUCATION</span><span>INDUSTRY</span><span>JOBS</span><span>SALARY</span><span>CULTURE</span></div>
            <strong>WHAT DIFFERENCES BECOME VISIBLE?</strong>
          </div>
        </article>

        <article className="form material-form">
          <div className="form-index">03</div>
          <div>
            <small>MATERIAL GESTURE · EARLY TEST</small>
            <h3>Bags of surrounding resources</h3>
            <p>Transparent bags hold printed traces of access: tickets, programs, schools, salaries, job listings, companies, and cultural institutions. Each bag could represent one country’s design ecosystem.</p>
          </div>
          <div className="bag-sample">
            <div className="bag-handle" />
            <p>LOCATION / 01</p>
            {bagFragments.map(([title, note, code], index) => (
              <span className={`fragment f${index + 1}`} key={title}>
                <b>{title}</b><small>{note}</small><i>{code}</i>
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="open-section">
        <p className="margin-label">STILL OPEN</p>
        <h2>This project is not trying to solve unequal access yet.</h2>
        <div className="open-grid">
          <p><b>WHO?</b><span>Which emerging designers am I talking about?</span></p>
          <p><b>WHERE?</b><span>Which two countries make a responsible and meaningful comparison?</span></p>
          <p><b>WHAT?</b><span>Which resources actually shape meaningful AI use?</span></p>
          <p><b>HOW?</b><span>How can I compare without reducing people to profiles?</span></p>
        </div>
        <p className="closing-line">For now, I am learning how to see the conditions around the tool.</p>
      </section>

      <footer>
        <span>ACCESS IS NOT EQUITY</span>
        <span>A WORK IN PROGRESS</span>
        <a href="#top">TOP ↑</a>
      </footer>
    </main>
  );
}
