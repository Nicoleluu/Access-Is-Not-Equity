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
  ["OPEN STUDIO", "maker space address", "SPA"],
  ["BFA / MFA", "art school information", "EDU"],
  ["DESIGNER I", "entry level job listing", "JOB"],
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
          <span>AI + ACCESS + ENVIRONMENT</span>
          <a href="#question">follow the question ↓</a>
        </div>
        <div className="locator locator-a">40.7128° N</div>
        <div className="locator locator-b">education</div>
        <div className="locator locator-c">opportunity</div>
      </section>

      <section id="question" className="question-section">
        <p className="margin-label">THE QUESTION / FOR NOW</p>
        <div className="question-copy">
          <h2>How do your starting conditions and resource environment shape what you can do with AI?</h2>
          <p>
            Starting conditions include background, location, language, prior
            education, and financial stability. A resource environment includes
            the learning, cultural, social, and professional opportunities that
            surround a person.
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
          <p className="margin-label">TWO PARTS OF MEANINGFUL ACCESS</p>
          <h2>What you bring. What surrounds you.</h2>
          <p>
            Location matters because it connects a person to particular
            institutions, communities, costs, languages, and opportunities. It
            is one condition among many, not a complete explanation.
          </p>
        </div>

        <div className="field country-field" aria-label="Starting conditions and resource environment">
          <div className="map-grid" />
          <div className="same-tool"><span>BEFORE THE AI INTERFACE</span><b>MEANINGFUL ACCESS</b></div>
          <div className="country-column country-a">
            <header><small>PART / 01</small><h3>STARTING CONDITIONS</h3><p>what a person arrives with</p></header>
            <div className="country-resources">
              {[
                ["LOC","location"],["LAN","language"],["FAM","family background"],
                ["CLS","social class"],["EDU","prior education"],["TIM","time + money"],
              ].map(([code,name]) => <span key={code}><b>{code}</b>{name}</span>)}
            </div>
            <footer>BACKGROUND / EXPERIENCE / POSITION</footer>
          </div>
          <div className="country-column country-b">
            <header><small>PART / 02</small><h3>RESOURCE ENVIRONMENT</h3><p>what is available around a person</p></header>
            <div className="country-resources">
              {resources.map((item) => <span key={item.code}><b>{item.code}</b>{item.name}</span>)}
            </div>
            <footer>LEARNING / CULTURE / NETWORKS / OPPORTUNITY</footer>
          </div>
          <div className="field-note">These conditions overlap and shape each other.</div>
        </div>

        <div className="working-chain">
          <span>STARTING CONDITIONS</span><i />
          <span>RESOURCE ENVIRONMENT</span><i />
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
          <div className="drawing-summary">
            <small>PRINTED VERTICAL DRAWING · IN DEVELOPMENT</small>
            <h3>Before the Prompt</h3>
            <p className="drawing-question">What happens before a person reaches an AI prompt?</p>
            <p>The drawing looks at the layers that shape a person approaching AI. It does not examine the technical layers behind the AI system.</p>
            <blockquote>By the time someone reaches the same prompt box, their access has already been shaped by unequal experiences, knowledge, relationships, and opportunities.</blockquote>
          </div>
          <div className="before-prompt-plan" aria-label="Planning outline for the Before the Prompt vertical drawing">
            <header>
              <small>DRAWING STRUCTURE / TOP TO BOTTOM</small>
              <strong>THE USER IS NOT<br />THE STARTING POINT.</strong>
            </header>
            <ol>
              <li><b>01</b><div><strong>STARTING CONTEXT</strong><span>location · language · social class · family · prior education</span><small>Where does a person begin?</small></div></li>
              <li><b>02</b><div><strong>EXPOSURE</strong><span>museums · books · exhibitions · objects · ways of making</span><small>What have they had opportunities to encounter?</small></div></li>
              <li><b>03</b><div><strong>LEARNING</strong><span>vocabulary · technical skills · references · research methods</span><small>What knowledge have they been able to develop?</small></div></li>
              <li><b>04</b><div><strong>GUIDANCE</strong><span>teachers · mentors · peers · critique · professional networks</span><small>Who helps reveal the next possibility?</small></div></li>
              <li><b>05</b><div><strong>JUDGMENT</strong><span>compare · question · reject · revise · apply</span><small>How do they decide whether an AI answer is useful?</small></div></li>
              <li><b>06</b><div><strong>CONFIDENCE + AGENCY</strong><span>curiosity · belonging · intention · independent decisions</span><small>Do they feel able to participate and direct the tool?</small></div></li>
              <li><b>07</b><div><strong>FORMING THE PROMPT</strong><span>context · vocabulary · references · constraints · intention</span><small>What prior knowledge is already contained in a question?</small></div></li>
              <li className="interface-layer"><b>08</b><div><strong>THE SAME AI INTERFACE</strong><span>open AI → log in → enter a prompt</span><small>The visible access point appears last.</small></div></li>
            </ol>
            <footer>
              <span>SAME PROMPT BOX</span>
              <strong>≠</strong>
              <span>SAME ACCESS TO POSSIBILITY</span>
            </footer>
          </div>
        </article>

        <article className="form material-form">
          <div className="form-index">03</div>
          <div className="material-summary">
            <small>MATERIAL GESTURE · EARLY TEST</small>
            <h3>Bags of surrounding resources</h3>
            <p className="material-question">What resources surround an emerging designer before they approach AI?</p>
            <p>The installation compares two resource environments situated in different locations. Within each section, every transparent bag represents one resource category through collected printed evidence.</p>
            <blockquote>People can approach the same AI tool from very different educational, cultural, social, and professional environments.</blockquote>
          </div>
          <div className="bag-sample">
            <div className="bag-handle" />
            <p>RESOURCE ENVIRONMENT / A · CATEGORY / EDUCATION</p>
            {bagFragments.map(([title, note, code], index) => (
              <span className={`fragment f${index + 1}`} key={title}>
                <b>{title}</b><small>{note}</small><i>{code}</i>
              </span>
            ))}
          </div>
          <div className="material-outline">
            <section>
              <small>UNIT OF COMPARISON</small>
              <h4>One bag = one category</h4>
              <p>The display is divided into two resource environment sections. Each section repeats the same set of labeled category bags so equivalent resources can be compared across two situated case studies.</p>
            </section>
            <section>
              <small>WHAT GOES INSIDE</small>
              <div className="content-tags">
                <span>design schools</span><span>tuition</span><span>museum tickets</span>
                <span>exhibitions</span><span>maker spaces</span><span>design companies</span>
                <span>job listings</span><span>job titles</span><span>designer salaries</span>
                <span>workshops</span><span>professional events</span><span>language access</span>
              </div>
            </section>
            <section>
              <small>LABELING SYSTEM</small>
              <p>Each resource environment section is clearly titled. Every bag is labeled by category, and every printed fragment includes its source, date, and value when relevant. Category labels repeat across both sections.</p>
              <div className="label-key"><b>EDU</b><b>CUL</b><b>SPA</b><b>NET</b><b>JOB</b><b>INC</b></div>
            </section>
            <section>
              <small>HOW COMPARISON WORKS</small>
              <p>Place matching category bags in the same order within both country sections. Differences become visible through the amount, variety, cost, salary values, and types of evidence contained in corresponding bags.</p>
            </section>
          </div>
        </article>
      </section>

      <section className="open-section">
        <p className="margin-label">STILL OPEN</p>
        <h2>This project is not trying to solve unequal access yet.</h2>
        <div className="open-grid">
          <p><b>WHO?</b><span>Which emerging designers am I talking about?</span></p>
          <p><b>WHERE?</b><span>Which two locations or communities make a responsible and meaningful comparison?</span></p>
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
