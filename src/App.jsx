
import { useEffect, useMemo, useState } from "react";

import {

  Activity,

  Brain,

  Clock,

  HeartPulse,

  Moon,

  Sun,

  Waves,

  ShieldCheck,

  Network,

  Sparkles,

  BarChart3,

  Microscope,

  Users,

  Zap,

  Database,

  LineChart,

  GitBranch,

  Eye,

  Flame,

  Wind,

} from "lucide-react";

import { motion } from "framer-motion";

import {

  LineChart as RLineChart,

  Line,

  XAxis,

  YAxis,

  CartesianGrid,

  Tooltip,

  ResponsiveContainer,

  RadarChart,

  PolarGrid,

  PolarAngleAxis,

  PolarRadiusAxis,

  Radar,

  BarChart,

  Bar,

  AreaChart,

  Area,

  ScatterChart,

  Scatter,

  ZAxis,

} from "recharts";

import "./App.css";

const symptomTrajectory = [

  { time: "Baseline", control: 27.4, lightAct: 27.1 },

  { time: "Week 4", control: 25.6, lightAct: 22.4 },

  { time: "Week 10", control: 23.8, lightAct: 16.2 },

  { time: "Month 3", control: 22.9, lightAct: 15.0 },

  { time: "Month 6", control: 22.1, lightAct: 14.1 },

  { time: "Month 12", control: 21.5, lightAct: 13.8 },

];

const mediatorTrajectory = [

  { time: "Baseline", sleep: 42, activity: 45, cortisol: 41, hrv: 38 },

  { time: "Week 4", sleep: 55, activity: 58, cortisol: 49, hrv: 46 },

  { time: "Week 10", sleep: 72, activity: 76, cortisol: 66, hrv: 61 },

  { time: "Month 3", sleep: 76, activity: 79, cortisol: 69, hrv: 65 },

  { time: "Month 6", sleep: 80, activity: 82, cortisol: 73, hrv: 69 },

  { time: "Month 12", sleep: 82, activity: 84, cortisol: 75, hrv: 71 },

];

const biomarkerData = [

  { marker: "Sleep regularity", effect: 0.38 },

  { marker: "Activity rhythm", effect: 0.34 },

  { marker: "Fatigue", effect: 0.25 },

  { marker: "Cortisol rhythm", effect: 0.19 },

  { marker: "HRV", effect: 0.16 },

  { marker: "Rumination", effect: 0.14 },

  { marker: "Inflammation", effect: 0.12 },

];

const systemsRadar = [

  { factor: "Family routine", value: 82 },

  { factor: "School rhythm", value: 74 },

  { factor: "Peer support", value: 68 },

  { factor: "Digital hygiene", value: 61 },

  { factor: "Safe activity", value: 77 },

  { factor: "Care access", value: 70 },

];

const powerData = [

  { n: 60, small: 0.26, medium: 0.46, large: 0.72 },

  { n: 100, small: 0.36, medium: 0.67, large: 0.91 },

  { n: 140, small: 0.45, medium: 0.79, large: 0.97 },

  { n: 180, small: 0.54, medium: 0.88, large: 0.99 },

  { n: 220, small: 0.63, medium: 0.93, large: 1.0 },

  { n: 260, small: 0.70, medium: 0.96, large: 1.0 },

];

const missingnessData = [

  { stream: "Questionnaire", baseline: 98, week10: 92, month12: 84 },

  { stream: "Wearable", baseline: 94, week10: 82, month12: 70 },

  { stream: "Biomarker", baseline: 88, week10: 74, month12: 58 },

];

const responderImportance = [

  { feature: "Intervention", importance: 0.25 },

  { feature: "Baseline symptoms", importance: 0.18 },

  { feature: "Fatigue", importance: 0.13 },

  { feature: "Sleep regularity", importance: 0.11 },

  { feature: "Activity rhythm", importance: 0.09 },

  { feature: "Rumination", importance: 0.07 },

  { feature: "Socioeconomic risk", importance: 0.05 },

];

const systemsNodes = [

  { label: "Family routines", x: 12, y: 24, icon: Users },

  { label: "School timing", x: 37, y: 14, icon: Clock },

  { label: "Digital light", x: 66, y: 18, icon: Eye },

  { label: "Neighbourhood safety", x: 83, y: 43, icon: ShieldCheck },

  { label: "Peer support", x: 70, y: 74, icon: Network },

  { label: "Access to care", x: 35, y: 82, icon: HeartPulse },

  { label: "Youth behaviour", x: 15, y: 62, icon: Activity },

];

const mechanismCards = [

  {

    title: "Morning light exposure",

    icon: Sun,

    colour: "gold",

    mechanism:

      "Retinal melanopsin signalling entrains the suprachiasmatic nucleus and stabilises downstream clock-gene rhythms.",

    outputs: ["CLOCK/BMAL1", "PER/CRY", "Melatonin timing", "Wake alertness"],

  },

  {

    title: "Sleep-wake regularisation",

    icon: Moon,

    colour: "violet",

    mechanism:

      "Consistent wake timing reduces circadian drift, social jet lag, fatigue, and rhythm fragmentation.",

    outputs: ["Sleep midpoint", "Interdaily stability", "Social jet lag", "Fatigue reduction"],

  },

  {

    title: "Structured physical activity",

    icon: Activity,

    colour: "green",

    mechanism:

      "Daytime movement strengthens activity-rest rhythm, sleep pressure, autonomic flexibility, and mitochondrial adaptation.",

    outputs: ["PGC-1α", "BDNF", "HRV", "Activity-rest amplitude"],

  },

  {

    title: "Routine-based behavioural support",

    icon: Brain,

    colour: "pink",

    mechanism:

      "Behavioural scaffolding reduces avoidance, rumination, and emotional reactivity while increasing self-efficacy.",

    outputs: ["Habit formation", "Reward learning", "Emotion regulation", "Self-efficacy"],

  },

];

function Badge({ children }) {

  return <span className="badge">{children}</span>;

}

function SectionTitle({ icon: Icon, kicker, title, children }) {

  return (

    <div className="section-title">

      <div className="section-kicker">

        <Icon size={18} />

        <span>{kicker}</span>

      </div>

      <h2>{title}</h2>

      {children && <p>{children}</p>}

    </div>

  );

}

function MolecularClock() {

  const molecules = [

    { name: "CLOCK", angle: 0 },

    { name: "BMAL1", angle: 45 },

    { name: "PER", angle: 100 },

    { name: "CRY", angle: 155 },

    { name: "REV-ERB", angle: 220 },

    { name: "ROR", angle: 295 },

  ];

  return (

    <div className="molecular-stage">

      <motion.div

        className="clock-orbit"

        animate={{ rotate: 360 }}

        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}

      >

        {molecules.map((m) => (

          <div

            key={m.name}

            className="molecule"

            style={{

              transform: `rotate(${m.angle}deg) translate(150px) rotate(-${m.angle}deg)`,

            }}

          >

            {m.name}

          </div>

        ))}

      </motion.div>

      <motion.div

        className="nucleus"

        animate={{ scale: [1, 1.08, 1], boxShadow: [

          "0 0 40px rgba(250,204,21,.35)",

          "0 0 90px rgba(56,189,248,.55)",

          "0 0 40px rgba(250,204,21,.35)",

        ]}}

        transition={{ duration: 3, repeat: Infinity }}

      >

        <Sun size={42} />

        <strong>SCN</strong>

        <span>Master clock</span>

      </motion.div>

      <motion.div

        className="light-beam"

        animate={{ opacity: [0.25, 0.95, 0.25], x: [-20, 20, -20] }}

        transition={{ duration: 4, repeat: Infinity }}

      />

    </div>

  );

}

function SystemsMap() {

  return (

    <div className="systems-map">

      <svg viewBox="0 0 100 100" className="network-lines">

        {systemsNodes.map((a, i) =>

          systemsNodes.slice(i + 1).map((b, j) => (

            <motion.line

              key={`${a.label}-${b.label}`}

              x1={a.x}

              y1={a.y}

              x2={b.x}

              y2={b.y}

              initial={{ pathLength: 0, opacity: 0 }}

              animate={{ pathLength: 1, opacity: 0.26 }}

              transition={{ duration: 1.6, delay: (i + j) * 0.08 }}

            />

          ))

        )}

      </svg>

      {systemsNodes.map(({ label, x, y, icon: Icon }, i) => (

        <motion.div

          key={label}

          className="system-node"

          style={{ left: `${x}%`, top: `${y}%` }}

          initial={{ opacity: 0, scale: 0.4 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ delay: i * 0.12 }}

          whileHover={{ scale: 1.12 }}

        >

          <Icon size={20} />

          <span>{label}</span>

        </motion.div>

      ))}

      <motion.div

        className="system-centre"

        animate={{ scale: [1, 1.04, 1] }}

        transition={{ duration: 3, repeat: Infinity }}

      >

        <Sparkles size={26} />

        <strong>LIGHT-ACT Youth</strong>

        <small>Synchronise light, sleep, movement, routine</small>

      </motion.div>

    </div>

  );

}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("lightActTheme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("lightActTheme", theme);
  }, [theme]);


  const [intensity, setIntensity] = useState(65);

  const [adherence, setAdherence] = useState(72);

  const [routine, setRoutine] = useState(60);

  const predicted = useMemo(() => {

    const symptomDrop = (intensity * 0.12 + adherence * 0.10 + routine * 0.08).toFixed(1);

    const sleepGain = (intensity * 0.05 + routine * 0.12).toFixed(1);

    const activityGain = (adherence * 0.13 + intensity * 0.05).toFixed(1);

    const response = Math.min(95, 35 + intensity * 0.23 + adherence * 0.21 + routine * 0.15).toFixed(0);

    return { symptomDrop, sleepGain, activityGain, response };

  }, [intensity, adherence, routine]);

  return (

    <main className={`app ${theme === "light" ? "light-mode" : "dark-mode"}`}>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
      </button>

      <section className="hero">

        <div className="hero-bg" />

        <motion.div

          className="hero-content"

          initial={{ opacity: 0, y: 28 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.9 }}

        >

          <div className="hero-badges">

            <Badge>Simulation framework</Badge>

            <Badge>Wearable-guided trial design</Badge>

            <Badge>Molecular + systems biology</Badge>

          </div>

          <h1>LIGHT-ACT Youth Simulation Studio</h1>

          <p>

            A colourful interactive app for exploring how morning light, sleep-wake regularisation,

            structured physical activity, and routine-based support may reduce adolescent anxiety

            and depression through measurable molecular, physiological, behavioural, and systems-level pathways.

          </p>

          <div className="hero-actions">

            <a href="#molecular">Explore molecular model</a>

            <a href="#simulation" className="secondary">Run simulation logic</a>

          </div>

        </motion.div>

        <motion.div

          className="hero-card"

          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}

          animate={{ opacity: 1, scale: 1, rotate: 0 }}

          transition={{ delay: 0.3 }}

        >

          <div className="pulse-ring">

            <Sun />

            <Moon />

            <Activity />

            <HeartPulse />

          </div>

          <h3>24-hour rhythm intervention</h3>

          <p>Light + sleep + activity + routine</p>

        </motion.div>

      </section>

      <section id="molecular" className="section">

        <SectionTitle

          icon={Microscope}

          kicker="Molecular level"

          title="Circadian, neuroimmune, autonomic, and energy pathways"

        >

          The intervention is modelled as a set of timed inputs that influence clock-gene regulation,

          melatonin timing, HPA-axis dynamics, HRV, inflammatory tone, mitochondrial energy signalling,

          BDNF-linked plasticity, fatigue, rumination, and emotional regulation.

        </SectionTitle>

        <div className="molecular-grid">

          <MolecularClock />

          <div className="mechanism-list">

            {mechanismCards.map(({ title, icon: Icon, mechanism, outputs, colour }, i) => (

              <motion.article

                key={title}

                className={`mechanism-card ${colour}`}

                initial={{ opacity: 0, x: 24 }}

                whileInView={{ opacity: 1, x: 0 }}

                viewport={{ once: true }}

                transition={{ delay: i * 0.1 }}

              >

                <Icon />

                <h3>{title}</h3>

                <p>{mechanism}</p>

                <div>

                  {outputs.map((o) => (

                    <span key={o}>{o}</span>

                  ))}

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>

      <section className="section systems-section">

        <SectionTitle

          icon={Network}

          kicker="Systems level"

          title="Real-world context shapes biological dose"

        >

          The same intervention may be easy for one young person and difficult for another.

          Family schedules, school timing, safety, peer support, digital exposure, and access to care

          determine whether light, sleep, movement, and routine can become stable daily signals.

        </SectionTitle>

        <SystemsMap />

      </section>

      <section id="simulation" className="section">

        <SectionTitle

          icon={BarChart3}

          kicker="Simulation dashboard"

          title="Synthetic trial outputs and mechanistic interpretation"

        >

          These plots are simulated and intended for grant planning, methodological development,

          trial design, and mechanistic hypothesis refinement, not clinical proof.

        </SectionTitle>

        <div className="chart-grid">

          <div className="chart-card wide">

            <h3><LineChart /> Simulated symptom trajectory</h3>

            <ResponsiveContainer width="100%" height={300}>

              <RLineChart data={symptomTrajectory}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="time" />

                <YAxis />

                <Tooltip />

                <Line type="monotone" dataKey="control" stroke="#2563eb" strokeWidth={4} name="Active control" dot={{ r: 5, fill: "#2563eb" }} />

                <Line type="monotone" dataKey="lightAct" stroke="#f97316" strokeWidth={4} name="LIGHT-ACT Youth" dot={{ r: 5, fill: "#f97316" }} />

              </RLineChart>

            </ResponsiveContainer>

          </div>

          <div className="chart-card">

            <h3><Waves /> Mediator trajectories</h3>

            <ResponsiveContainer width="100%" height={300}>

              <AreaChart data={mediatorTrajectory}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="time" />

                <YAxis />

                <Tooltip />

                <Area type="monotone" dataKey="sleep" stroke="#0284c7" fill="#38bdf8" strokeWidth={3} fillOpacity={0.35} />

                <Area type="monotone" dataKey="activity" stroke="#16a34a" fill="#22c55e" strokeWidth={3} fillOpacity={0.28} />

                <Area type="monotone" dataKey="cortisol" stroke="#d97706" fill="#f59e0b" strokeWidth={3} fillOpacity={0.25} />

                <Area type="monotone" dataKey="hrv" stroke="#7c3aed" fill="#a855f7" strokeWidth={3} fillOpacity={0.24} />

              </AreaChart>

            </ResponsiveContainer>

          </div>

          <div className="chart-card">

            <h3><GitBranch /> Mediation pathways</h3>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={biomarkerData} layout="vertical">

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis type="number" />

                <YAxis dataKey="marker" type="category" width={120} />

                <Tooltip />

                <Bar dataKey="effect" radius={[0, 10, 10, 0]} fill="#ec4899" />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <div className="chart-card">

            <h3><ShieldCheck /> System feasibility radar</h3>

            <ResponsiveContainer width="100%" height={300}>

              <RadarChart data={systemsRadar}>

                <PolarGrid />

                <PolarAngleAxis dataKey="factor" />

                <PolarRadiusAxis />

                <Radar dataKey="value" stroke="#14b8a6" fill="#5eead4" strokeWidth={3} fillOpacity={0.55} />

              </RadarChart>

            </ResponsiveContainer>

          </div>

          <div className="chart-card">

            <h3><Database /> Missing data streams</h3>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={missingnessData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="stream" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="baseline" fill="#22c55e" radius={[8, 8, 0, 0]} />

                <Bar dataKey="week10" fill="#f59e0b" radius={[8, 8, 0, 0]} />

                <Bar dataKey="month12" fill="#ef4444" radius={[8, 8, 0, 0]} />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <div className="chart-card wide">

            <h3><Zap /> Power simulation</h3>

            <ResponsiveContainer width="100%" height={300}>

              <RLineChart data={powerData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="n" label={{ value: "Total sample size", position: "insideBottom", offset: -4 }} />

                <YAxis domain={[0, 1]} />

                <Tooltip />

                <Line dataKey="small" stroke="#38bdf8" strokeWidth={4} name="Small effect" dot={{ r: 5, fill: "#38bdf8" }} />

                <Line dataKey="medium" stroke="#f97316" strokeWidth={4} name="Medium effect" dot={{ r: 5, fill: "#f97316" }} />

                <Line dataKey="large" stroke="#22c55e" strokeWidth={4} name="Large effect" dot={{ r: 5, fill: "#22c55e" }} />

              </RLineChart>

            </ResponsiveContainer>

          </div>

          <div className="chart-card">

            <h3><Brain /> Responder importance</h3>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={responderImportance} layout="vertical">

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis type="number" />

                <YAxis dataKey="feature" type="category" width={130} />

                <Tooltip />

                <Bar dataKey="importance" fill="#8b5cf6" radius={[0, 10, 10, 0]} />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <div className="chart-card">

            <h3><Flame /> Response phenotype space</h3>

            <ResponsiveContainer width="100%" height={300}>

              <ScatterChart>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis type="number" dataKey="x" name="Rhythm stability" />

                <YAxis type="number" dataKey="y" name="Symptom improvement" />

                <ZAxis type="number" dataKey="z" range={[80, 600]} />

                <Tooltip cursor={{ strokeDasharray: "3 3" }} />

                <Scatter
                  fill="#f97316"
                  stroke="#7c2d12"

                  data={[

                    { x: 35, y: 20, z: 80 },

                    { x: 44, y: 25, z: 120 },

                    { x: 52, y: 38, z: 180 },

                    { x: 64, y: 52, z: 260 },

                    { x: 76, y: 70, z: 420 },

                    { x: 84, y: 78, z: 560 },

                  ]}

                />

              </ScatterChart>

            </ResponsiveContainer>

          </div>

        </div>

      </section>

      <section className="section simulator-panel">

        <SectionTitle

          icon={Wind}

          kicker="Interactive planning"

          title="Adjust intervention assumptions"

        >

          Move the sliders to explore how intervention intensity, adherence, and behavioural routine

          could change simulated symptom reduction and mediator response.

        </SectionTitle>

        <div className="control-grid">

          <label>

            Morning light + activity intensity

            <input type="range" min="0" max="100" value={intensity} onChange={(e) => setIntensity(+e.target.value)} />

            <span>{intensity}%</span>

          </label>

          <label>

            Adherence and engagement

            <input type="range" min="0" max="100" value={adherence} onChange={(e) => setAdherence(+e.target.value)} />

            <span>{adherence}%</span>

          </label>

          <label>

            Routine support strength

            <input type="range" min="0" max="100" value={routine} onChange={(e) => setRoutine(+e.target.value)} />

            <span>{routine}%</span>

          </label>

        </div>

        <div className="prediction-grid">

          <motion.div className="prediction-card" whileHover={{ y: -6 }}>

            <strong>{predicted.symptomDrop}</strong>

            <span>Predicted symptom-score reduction</span>

          </motion.div>

          <motion.div className="prediction-card" whileHover={{ y: -6 }}>

            <strong>{predicted.sleepGain}</strong>

            <span>Sleep-regularity gain</span>

          </motion.div>

          <motion.div className="prediction-card" whileHover={{ y: -6 }}>

            <strong>{predicted.activityGain}</strong>

            <span>Activity-rhythm gain</span>

          </motion.div>

          <motion.div className="prediction-card" whileHover={{ y: -6 }}>

            <strong>{predicted.response}%</strong>

            <span>Simulated response probability</span>

          </motion.div>

        </div>

      </section>

      <section className="section interpretation">

        <SectionTitle

          icon={Sparkles}

          kicker="Interpretation"

          title="What the simulation means"

        />

        <div className="interpretation-grid">

          <article>

            <h3>Scientific interpretation</h3>

            <p>

              The simulated pattern supports the feasibility of a trial that tests whether synchronising

              light, sleep, movement, and routine can reduce symptoms through measurable changes in sleep

              regularity, activity-rest rhythm, cortisol rhythm, HRV, fatigue, rumination, and inflammatory tone.

            </p>

          </article>

          <article>

            <h3>Systems interpretation</h3>

            <p>

              Intervention dose is shaped by real-world context. A scientifically strong trial should measure

              family routines, school schedules, neighbourhood safety, digital exposure, and access to care,

              because these factors influence feasibility and equity.

            </p>

          </article>

          <article>

            <h3>Model interpretation</h3>

            <p>

              The app is a planning and demonstration tool. It does not prove efficacy, diagnose young people,

              or replace clinical judgement. It helps structure hypotheses before a real mechanistic trial.

            </p>

          </article>

        </div>

      </section>

    </main>

  );

}

export default App;

