const nav = [
  ["question", "Question"], ["keywords", "Keywords"], ["fields", "Fields"], ["lineage", "Lineage"],
  ["community", "Community"], ["situated", "Situated"], ["methods", "Methods"],
  ["experiments", "Experiments"], ["language", "Visual"],
  ["argument", "Argument"], ["outline", "Outline"], ["challenge", "Challenge"],
  ["exhibition", "Exhibition"],
];

const factors = [
  ["01", "Vocabulary", "Knowing the words that open a field."],
  ["02", "References", "Knowing what has already been imagined."],
  ["03", "Judgment", "Knowing when an answer is useful or wrong."],
  ["04", "Mentorship", "Having someone who can reveal the next question."],
  ["05", "Confidence", "Believing you are entitled to ask at all."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="identity" href="#top">NICOLE LU · RESEARCH FOUNDATIONS</a>
        <nav aria-label="Research sections">
          {nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </header>

      <section id="top" className="hero section dark">
        <p className="eyebrow">Research Foundations + Project Outline · Draft 02</p>
        <h1>ACCESS<br/><span>≠</span> EQUITY</h1>
        <p className="hero-line">Everyone may reach the same AI. Not everyone can reach the same possibilities.</p>
        <div className="equal-start" aria-label="Two equal access points leading to unequal outcomes">
          <span>same tool</span><i/><span>different histories</span><i/><strong>unequal outcomes</strong>
        </div>
      </section>

      <section id="question" className="section question">
        <div className="section-no">01 / RESEARCH QUESTION</div>
        <h2>When access to AI is widespread but the ability to benefit from it remains uneven, can AI truly be considered accessible?</h2>
        <div className="question-grid">
          <p>How does a person’s educational, cultural, geographic, and socioeconomic background shape what they can obtain from AI?</p>
          <p>Does AI redistribute knowledge, or give greater advantages to people who already possess expertise?</p>
          <p>What forms of prior knowledge does productive AI use quietly assume?</p>
        </div>
        <div id="keywords" className="keywords-block">
          <div className="keywords-title">KEYWORDS</div>
          <div className="keywords" aria-label="Five keywords">
            {['knowledge inequality','artificial intelligence','accessibility','agency','learning'].map((k,i)=><span key={k}>{String(i+1).padStart(2,'0')} {k}</span>)}
          </div>
        </div>
      </section>

      <section id="fields" className="section dark fields">
        <div className="section-no">02 / INTERSECTING FIELDS</div>
        <div className="orbit" aria-label="Intersecting research fields">
          <div className="core">WHO CAN<br/>BENEFIT?</div>
          <span className="o1">Human AI interaction</span><span className="o2">Education</span>
          <span className="o3">Knowledge equity</span><span className="o4">Critical AI studies</span>
          <span className="o5">Design research</span><span className="o6">Participatory design</span>
        </div>
      </section>

      <section id="lineage" className="section lineage">
        <div className="section-no">03 / HISTORICAL LINEAGE</div>
        <h2>Each new medium promises to democratize knowledge.</h2>
        <div className="timeline">
          {[["PUBLIC LIBRARY","information"],["OPEN SOURCE","tools"],["SEARCH","discovery"],["MOOCs","instruction"],["GENERATIVE AI","assistance"],["NOW","possibility?"]].map(([a,b],i)=><div key={a}><b>{String(i+1).padStart(2,'0')}</b><strong>{a}</strong><span>{b}</span></div>)}
        </div>
        <p className="large-note">Availability expanded. Unequal starting conditions remained.</p>
      </section>

      <section id="community" className="section community">
        <div className="section-no">04 / COMMUNITY OF PRACTICE</div>
        <h2>From explaining AI to questioning who can use explanation.</h2>
        <div className="practice-grid">
          <article className="precedent"><small>PRECEDENT</small><h3><a className="reference-link" href="https://pair.withgoogle.com/" target="_blank" rel="noreferrer">Google PAIR <span>↗</span></a></h3><p>Makes machine learning concepts understandable through explorable explanations.</p><b>EXTEND ↗</b></article>
          <article><small>CRITICAL PEDAGOGY</small><h3><a className="reference-link" href="https://www.paulofreire.org/" target="_blank" rel="noreferrer">Paulo Freire <span>↗</span></a><br/><a className="reference-link" href="https://www.berea.edu/centers/the-bell-hooks-center" target="_blank" rel="noreferrer">bell hooks <span>↗</span></a></h3><p>Learning as agency, dialogue, and the capacity to question.</p></article>
          <article><small>DESIGN JUSTICE</small><h3><a className="reference-link" href="https://mitpress.mit.edu/9780262043458/design-justice/" target="_blank" rel="noreferrer">Sasha Costanza Chock <span>↗</span></a></h3><p>Challenges who benefits from design and who participates in its decisions.</p></article>
          <article><small>CRITICAL AI</small><h3><a className="reference-link" href="https://www.ruhabenjamin.com/" target="_blank" rel="noreferrer">Ruha Benjamin <span>↗</span></a><br/><a className="reference-link" href="https://safiyaunoble.com/" target="_blank" rel="noreferrer">Safiya Noble <span>↗</span></a></h3><p>Shows how technical systems reproduce existing structures of inequality.</p></article>
        </div>
        <p className="position">My position: an extension and critique of <em>Measuring Fairness</em>, moving from unequal model outcomes to unequal human AI relationships.</p>
      </section>

      <section id="situated" className="section dark situated">
        <div className="section-no">05 / SITUATED TECHNOLOGY</div>
        <p className="quote">“Entering a design institution did not simply give me more information. It revealed possibilities, vocabularies, references, and standards of judgment that had previously been difficult to access.”</p>
        <div className="two-place"><div><b>TAIWAN</b><span>where my questions began</span></div><div><b>NEW YORK</b><span>where hidden structures became visible</span></div></div>
        <p className="situated-note">This research grows from moving between educational contexts and recognizing that knowledge is not only information. It is also exposure, mentorship, language, confidence, and belonging.</p>
      </section>

      <section id="methods" className="section methods">
        <div className="section-no">06 / METHODS</div>
        <h2>Study the distance between access and agency.</h2>
        <ol>
          <li><b>COMPARE</b><span>Observe how people with different prior knowledge approach the same AI task.</span></li>
          <li><b>TRACE</b><span>Map the invisible vocabulary, references, and judgment required to use an answer.</span></li>
          <li><b>LISTEN</b><span>Interview learners across educational and geographic contexts.</span></li>
          <li><b>PROTOTYPE</b><span>Test AI interactions that teach through questions instead of producing finished answers.</span></li>
          <li><b>REFLECT</b><span>Evaluate whether an interaction expands agency, not only output quality.</span></li>
        </ol>
      </section>

      <section id="experiments" className="section dark experiments">
        <div className="section-no">07 / COMPUTATIONAL DESIGN EXPERIMENTS</div>
        <h2>The same prompt is never the same starting point.</h2>
        <div className="paths">
          <div className="path a"><span>USER A</span><i/><b>“Make something.”</b><i/><strong>ONE OUTPUT</strong></div>
          <div className="path b"><span>USER B</span><i/><b>vocabulary + references + critique</b><i/><strong>NEW QUESTIONS</strong></div>
        </div>
        <div className="factor-list">{factors.map(([n,a,b])=><div key={n}><b>{n}</b><strong>{a}</strong><span>{b}</span></div>)}</div>
        <p className="caption">Experiment 01 proposal: visualize how invisible forms of prior knowledge alter a conversation with the same AI system.</p>
      </section>

      <section id="language" className="section visual-language">
        <div className="section-no">08 / VISUAL REPRESENTATION</div>
        <h2>A language of equal beginnings and diverging paths.</h2>
        <div className="swatches"><span/><span/><span/><span/></div>
        <p>Rigid grids represent the promise of universal access. Expanding gaps, incomplete lines, and uneven densities expose the different conditions hidden behind that promise.</p>
      </section>

      <section id="argument" className="section argument">
        <div className="section-no">09 / RHETORICAL ARGUMENT</div>
        <h2>AI does not democratize knowledge simply by making information available.</h2>
        <p>Without addressing unequal starting conditions, AI may amplify the advantages of people who already know what to ask, how to evaluate an answer, and what possibilities exist.</p>
      </section>

      <section id="outline" className="section dark outline">
        <div className="section-no">10 / POTENTIAL CAPSTONE</div>
        <small>NOT A SOLUTION · A DIRECTION</small>
        <h2>An experimental AI learning environment responsive to unequal starting conditions.</h2>
        <p>Rather than measuring success through polished outputs, it would investigate whether AI can help people develop vocabulary, judgment, confidence, and the ability to form their own questions.</p>
        <div className="future">ACCESS <i/> ORIENTATION <i/> EXPLORATION <i/> JUDGMENT <i/> AGENCY</div>
      </section>

      <section id="challenge" className="section challenge">
        <div className="section-no">11 / THE CHALLENGE</div>
        <div className="challenge-grid">
          <h2>How can I study inequality without flattening different lives into user types?</h2>
          <ul><li>Recruit participants beyond my immediate academic network.</li><li>Define “benefit” without relying only on output quality.</li><li>Build with AI without reproducing its assumptions.</li><li>Keep the research situated while connecting it to wider structures.</li><li>Learn qualitative research and responsible prototyping methods.</li></ul>
        </div>
      </section>

      <section id="exhibition" className="section exhibition">
        <div className="section-no">12 / EXHIBITION PLAN · CONFIRMED</div>
        <div className="exhibition-intro">
          <h2>Different knowledge.<br/>Different starting points.</h2>
          <p>A collective mural and a physical population make the universal user impossible.</p>
        </div>
        <div className="proposal-grid">
          <article className="drawing-plan">
            <small>01 / VERTICAL MURAL · CONFIRMED</small>
            <h2>A Crowd of Knowledge</h2>
            <p className="proposal-claim">Everyone arrives with knowledge. Not every form is recognized equally.</p>
            <a className="wip-preview" href="https://drive.google.com/file/d/1bBB-Lwr0elVDcYkSyRm95Fyuw-bcmrub/view?usp=sharing" target="_blank" rel="noreferrer">
              <img src="mural-wip-02.png" alt="Planning outline for a vertical mural with labeled composition zones, figure placeholders, and content notes" />
              <span>OPEN PLANNING OUTLINE WIP 02 ↗</span>
            </a>
            <a className="figma-link" href="https://www.figma.com/design/DnreENS6YElFGscQWENnEP" target="_blank" rel="noreferrer">EDITABLE FIGMA OUTLINE ↗</a>
            <div className="confirmation-strip">
              <span><b>36 × 96 IN</b> vertical</span>
              <span><b>FULL COLOR</b> digital collage</span>
              <span><b>MATTE</b> uncoated bond</span>
              <span><b>INSTALL</b> rail clips</span>
            </div>
          </article>
          <article className="material-plan">
            <small>02 / MATERIAL GESTURE · CONFIRMED</small>
            <h2>A Population of Starting Points</h2>
            <p className="proposal-claim">Composite profiles make different backgrounds physical.</p>
            <div className="profile-stage" aria-label="Setup mockup showing composite profile cards arranged as a physical population">
              {[
                ["01","TAIPEI","LANGUAGE · CRAFT · CARE"],
                ["02","QUEENS","WORK · COMMUNITY · BILINGUAL"],
                ["03","BROOKLYN","CODE · GAMES · SELF TAUGHT"],
                ["04","BRONX","TEACHING · FAMILY · MEDIA"],
                ["05","NEW YORK","DESIGN · SCHOOL · MENTORSHIP"],
                ["06","ONLINE","FANDOM · VIDEO · MAKING"],
              ].map(([n,place,knowledge])=>
                <div className="profile-card" key={n}>
                  <b>{n}</b><span>{place}</span><small>{knowledge}</small>
                </div>
              )}
              <p>COMPOSITE PROFILES / DIFFERENT KNOWLEDGE CONFIGURATIONS</p>
            </div>
            <div className="setup-plan">
              <div><b>PLACE</b><span>Beside mural on one shared table</span></div>
              <div><b>MAKE</b><span>30–50 printed composite profile cards</span></div>
              <div><b>ARRANGE</b><span>One continuous field, not two ranked groups</span></div>
              <div><b>VIEWER</b><span>Pick up and compare different starting conditions</span></div>
              <div><b>POWER</b><span>None required</span></div>
              <div><b>SETUP</b><span>10 minutes; cards secured with museum putty</span></div>
            </div>
          </article>
        </div>
      </section>

      <footer><span>ACCESS ≠ EQUITY</span><span>Nicole Lu · CDP · 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
