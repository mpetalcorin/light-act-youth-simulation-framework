<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# LIGHT-ACT Youth: Simulation Framework for Circadian and Physical Activity Intervention in Adolescent Anxiety and Depression

## Overview

**LIGHT-ACT Youth** is a reproducible simulation and trial-design framework for a proposed mechanistic intervention targeting anxiety and depressive symptoms in young people aged 10 to 18 years. The framework integrates **morning light exposure**, **sleep-wake regularisation**, **structured physical activity**, and **routine-based behavioural support** with wearable-derived rhythm measures, biomarker hypotheses, causal mediation analysis, moderation testing, missing-data modelling, and interpretable responder prediction.

This repository supports the development of a future randomised controlled trial by showing how clinical outcomes, biological mediators, behavioural rhythms, implementation factors, and predictive modelling can be analysed together before empirical data collection begins.

The project is **not a completed clinical trial** and does **not** provide medical advice. All current numerical results are simulated and are intended for planning, hypothesis refinement, methodological demonstration, and reproducible grant-development work.

## Scientific Rationale

Adolescent anxiety and depression often emerge during a developmental period in which sleep timing, circadian phase, school demands, physical activity, peer relationships, digital exposure, stress physiology, and emotional regulation are changing rapidly. LIGHT-ACT Youth is based on the hypothesis that symptoms may be partly maintained by instability in the 24-hour rhythm system.

The framework models four intervention components as interacting biological and behavioural signals:

1. **Morning light exposure**, designed to strengthen circadian entrainment through retinal melanopsin pathways and the suprachiasmatic nucleus.
2. **Sleep-wake regularisation**, designed to stabilise sleep timing, reduce social jet lag, and improve rhythm consistency.
3. **Structured physical activity**, designed to increase activity-rest rhythm amplitude, improve sleep pressure, reduce fatigue, and support autonomic and metabolic regulation.
4. **Routine-based behavioural support**, designed to reduce avoidance, support habit formation, improve self-efficacy, and improve emotional regulation.

At the molecular and physiological levels, the framework links these components to circadian clock regulation, melatonin timing, HPA-axis function, cortisol rhythm, autonomic regulation, inflammatory tone, mitochondrial energy signalling, neuroplasticity, rumination, fatigue, and emotional-control circuits.

At the systems level, the model recognises that intervention feasibility is shaped by family routines, school schedules, neighbourhood safety, socioeconomic context, digital exposure, peer relationships, cultural expectations, and access to youth support.

## Repository Contents

```text
LIGHT-ACT-Youth/
├── README.md
├── MODELCARD.md
├── DATASHEET.md
├── LICENSE
├── requirements.txt
├── notebooks/
│   └── LIGHT_ACT_Youth_Grant_Analytics_Notebook_FIXED.ipynb
├── data/
│   ├── simulated_light_act_youth_data.csv
│   └── README_data.md
├── figures/
│   ├── figure_1_symptom_trajectory.png
│   ├── figure_2_sleep_regularity.png
│   ├── figure_3_activity_rest_rhythm.png
│   ├── figure_4_cortisol_rhythm.png
│   ├── figure_5_hrv_trajectory.png
│   ├── figure_6_power_simulation.png
│   ├── figure_7_mediation_analysis.png
│   ├── figure_8_moderation_analysis.png
│   ├── figure_9_missingness.png
│   ├── figure_10_roc_curve.png
│   └── figure_11_permutation_importance.png
├── manuscript/
│   └── LIGHT_ACT_Youth_Integrated_Two_Column_Manuscript.docx
└── src/
    ├── simulate_trial_data.py
    ├── analyse_longitudinal_outcomes.py
    ├── mediation_analysis.py
    ├── moderation_analysis.py
    ├── responder_prediction.py
    └── plot_results.py
```

## Main Analytical Components

- Baseline participant simulation
- Randomised group allocation
- Simulated anxiety/depression symptom trajectories
- Sleep regularity modelling
- Activity-rest rhythm modelling
- Cortisol rhythm modelling
- Heart-rate variability trajectory simulation
- Power simulation across standardised effect sizes
- Mediation analysis of candidate mechanisms
- Moderation analysis by baseline rhythm disruption
- Missing-data profiling across questionnaires, wearables, and biomarkers
- Responder prediction using interpretable machine learning
- Permutation importance for model interpretation
- Publication-style figure and table outputs

## Example Research Questions

1. Could a combined circadian and physical activity intervention produce greater symptom improvement than active control?
2. Are improvements in anxiety and depressive symptoms plausibly mediated by sleep regularity, activity-rest rhythm, cortisol rhythm, HRV, fatigue, rumination, or inflammation?
3. Do young people with greater baseline rhythm disruption respond differently to the intervention?
4. What sample size may be required to detect clinically meaningful symptom differences?
5. Which data streams are most vulnerable to missingness?
6. Can interpretable machine learning identify candidate responder profiles without replacing clinical judgement?

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/LIGHT-ACT-Youth.git
cd LIGHT-ACT-Youth
```

Create a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Suggested `requirements.txt`:

```text
numpy
pandas
matplotlib
scikit-learn
scipy
jupyter
notebook
```

Optional:

```text
statsmodels
seaborn
```

The fixed notebook is designed to run even if `statsmodels` is unavailable, using fallback regression and mediation calculations.

## Running the Notebook

```bash
jupyter notebook
```

Open:

```text
notebooks/LIGHT_ACT_Youth_Grant_Analytics_Notebook_FIXED.ipynb
```

Run all cells to generate simulated datasets, figures, summary tables, and exploratory modelling outputs.

## Outputs

- Simulated baseline participant characteristics
- Longitudinal symptom plots
- Mechanistic mediator plots
- Power simulation curves
- Mediation effect estimates
- Moderation regression outputs
- Missingness summaries
- ROC curve for responder prediction
- Permutation importance plot
- Manuscript-ready figure legends and table captions

## Interpretation Notes

All results are simulated. They should not be interpreted as evidence that LIGHT-ACT Youth is clinically effective.

The simulation is intended to support grant planning, clarify causal assumptions, test analysis workflows, estimate feasibility, identify likely measurement challenges, prepare a future preregistered trial, and demonstrate transparent, reproducible methodology.

A real trial would require ethical approval, safeguarding procedures, lived-experience co-design, recruitment feasibility testing, intervention fidelity monitoring, clinical oversight, data governance, statistical preregistration, and independent evaluation.

## Ethical and Safeguarding Considerations

Because this framework concerns young people and mental health, future empirical work should include youth and caregiver involvement, safeguarding protocols, clear consent and assent procedures, data minimisation, privacy-preserving wearable data handling, clinical escalation pathways, inclusive recruitment, accessibility planning, and careful management of biological sampling burden.

## Intended Use

This repository is intended for grant development, simulation-based trial planning, academic methods demonstration, mechanistic intervention design, reproducible mental health data science, and training in wearable-guided clinical trial analytics.

## Not Intended For

This repository is not intended for clinical diagnosis, treatment recommendation, replacement of professional mental health care, automated intervention allocation, real-world prediction without validation, or use with identifiable youth data without ethics approval.

## Citation

```text
Petalcorin, M. I. R. LIGHT-ACT Youth: A simulation framework for circadian and physical activity intervention design in adolescent anxiety and depression. GitHub repository.
```

## License

Add the appropriate open-source license for your intended use, for example MIT, Apache 2.0, or CC BY 4.0 for manuscript-style materials.

## Contact

**Author:** Mark Ihrwell R. Petalcorin  
**Project:** LIGHT-ACT Youth  
**Focus:** Circadian regulation, physical activity, wearable analytics, adolescent anxiety and depression, simulation-based trial design
>>>>>>> c4b7b985cb82047859a52919a168709274f6cc70
