# Datasheet for the LIGHT-ACT Youth Simulated Dataset

## Dataset Name

**LIGHT-ACT Youth Simulated Trial Dataset**

## Dataset Version

Version: `0.1-simulation`

Status: Synthetic, simulation-only.

## Dataset Summary

The LIGHT-ACT Youth simulated dataset is a synthetic dataset created to support methodological development for a proposed mechanistic randomised controlled trial of a circadian and physical activity intervention for adolescent anxiety and depression.

The dataset simulates young people aged 10 to 18 years assigned to either **LIGHT-ACT Youth intervention** or **active control**.

It includes simulated clinical outcomes, wearable-derived rhythm variables, physiological mediators, psychological mediators, contextual variables, missingness patterns, and responder labels.

No real participant data are included.

## Motivation

The dataset was created to support grant planning, trial-design simulation, mechanistic hypothesis testing, longitudinal analysis workflow development, mediation and moderation analysis demonstration, missing-data planning, responder prediction modelling, manuscript figure generation, and reproducible research training.

The dataset allows researchers to test analysis code and refine causal assumptions before collecting real-world data from young people.

## Dataset Creators

**Mark I.R. Petalcorin**

Project: LIGHT-ACT Youth  
Focus: Circadian regulation, physical activity, wearable analytics, adolescent anxiety and depression, mechanistic trial simulation

## Dataset Type

Synthetic tabular dataset.

Potential file format:

```text
.csv
```

Potential filename:

```text
simulated_light_act_youth_data.csv
```

## Data Source

The dataset is generated programmatically using simulation code.

It is not derived from real patients, real young people, electronic health records, wearable devices, schools, clinics, survey platforms, or biological samples.

All values are artificial and generated from assumed statistical distributions.

## Population Represented

The simulated population represents hypothetical young people aged 10 to 18 years with, or at risk of, anxiety and depressive symptoms.

The dataset is intended to reflect a plausible trial-planning population, but it should not be interpreted as epidemiologically representative.

## Unit of Observation

Depending on the file structure, the unit of observation may be either:

1. **Participant-level**, one row per simulated participant, or
2. **Longitudinal participant-timepoint-level**, one row per participant per timepoint.

Recommended longitudinal format:

```text
participant_id | timepoint | trial_arm | outcome_variable | mediator_variable | covariates
```

## Simulated Timepoints

Possible simulated timepoints include baseline, week 4, week 10, month 3, month 6, and month 12.

These timepoints are intended to model intervention delivery and follow-up.

## Key Variables

### Identification Variables

| Variable | Description |
|---|---|
| `participant_id` | Synthetic participant identifier |
| `timepoint` | Study timepoint |
| `trial_arm` | Intervention or active control |

### Baseline Variables

| Variable | Description |
|---|---|
| `age` | Simulated age in years |
| `baseline_symptom_score` | Simulated baseline anxiety/depression symptom severity |
| `baseline_sleep_regularity` | Simulated baseline sleep timing consistency |
| `baseline_activity_level` | Simulated baseline daytime activity |
| `baseline_rhythm_disruption` | Simulated baseline circadian or rest-activity disruption |
| `chronotype_delay` | Simulated later sleep timing tendency |
| `socioeconomic_risk` | Simulated contextual disadvantage score |

### Clinical Outcome Variables

| Variable | Description |
|---|---|
| `symptom_score` | Simulated anxiety/depression symptom score |
| `symptom_change` | Simulated change from baseline |
| `responder` | Simulated clinically meaningful improvement label |

### Wearable-Derived Variables

| Variable | Description |
|---|---|
| `sleep_regularity` | Simulated consistency of sleep-wake timing |
| `activity_rest_rhythm` | Simulated strength of daytime activity and rest rhythm |
| `activity_level` | Simulated overall movement level |
| `light_exposure` | Simulated morning or daytime light exposure |
| `wearable_completeness` | Simulated wearable data completeness |

### Physiological Mediator Variables

| Variable | Description |
|---|---|
| `cortisol_rhythm` | Simulated HPA-axis rhythm marker |
| `heart_rate_variability` | Simulated autonomic regulation marker |
| `inflammation_score` | Simulated inflammatory tone marker |
| `fatigue` | Simulated fatigue severity |

### Psychological Mediator Variables

| Variable | Description |
|---|---|
| `rumination` | Simulated repetitive negative thinking |
| `self_efficacy` | Simulated confidence in managing daily routines |
| `avoidance` | Simulated avoidance behaviour |
| `emotional_regulation` | Simulated emotion regulation capacity |

### Missingness Variables

| Variable | Description |
|---|---|
| `questionnaire_complete` | Simulated questionnaire completion indicator |
| `wearable_complete` | Simulated wearable-data completion indicator |
| `biomarker_complete` | Simulated biomarker-data completion indicator |

## Data Generation Assumptions

The simulated dataset assumes that participants are randomly allocated to intervention or active control, baseline characteristics are approximately balanced across groups, the intervention arm shows larger average symptom improvement than active control, sleep regularity improves more strongly in the intervention arm, activity-rest rhythm strengthens more strongly in the intervention arm, cortisol rhythm and HRV improve more strongly in the intervention arm, fatigue and rumination decline more strongly in the intervention arm, some mediator changes partially explain symptom improvement, some participants respond more strongly than others, and missingness increases over time, especially for wearable and biomarker streams.

These assumptions are illustrative and should be revised when empirical feasibility or pilot data become available.

## Recommended Analyses

The dataset can be used for descriptive baseline summaries, longitudinal symptom trajectory plotting, group comparison at follow-up, mixed-effects modelling, repeated-measures analysis, mediation analysis, moderation analysis, missing-data profiling, responder classification, ROC curve generation, permutation importance, sensitivity analysis, and figure generation for manuscript preparation.

## Ethical Considerations

Although the current dataset is synthetic, the intended future research area involves young people and mental health. Therefore, any real-world version of this dataset would require ethics approval, parental consent where required, youth assent or consent, safeguarding procedures, data minimisation, privacy protection, secure storage, clear withdrawal procedures, clinical escalation pathways, governance for wearable data, and careful handling of sensitive mental health information.

## Privacy

The current dataset contains no real personal information.

It does not contain names, addresses, dates of birth, real wearable data, real health records, real school records, real biological data, or real clinical assessments.

Future empirical datasets should be treated as highly sensitive because wearable and mental health data may be identifiable or re-identifiable.

## Bias and Representativeness

The simulated dataset is not representative of any real population.

Potential future sources of bias in real data may include recruitment through specific schools or clinics, unequal access to wearable devices, unequal opportunity for morning light exposure, unequal access to safe spaces for physical activity, differences in family routines, socioeconomic disadvantage, cultural differences in sleep and activity patterns, disability-related differences in movement feasibility, digital exclusion, and differential missingness by symptom severity.

Future empirical datasets should document recruitment pathways, inclusion and exclusion criteria, missingness patterns, and subgroup representation.

## Limitations

1. The dataset is fully synthetic.
2. It cannot prove intervention efficacy.
3. It cannot estimate real-world effect sizes.
4. It cannot validate clinical prediction models.
5. It simplifies complex biological mechanisms.
6. It does not capture the full diversity of adolescent lives.
7. It does not include real environmental, school, family, or clinical data.
8. It should be used only for simulation, planning, education, and code development.

## Maintenance

The dataset should be version controlled.

Recommended versioning:

```text
v0.1-simulation
v0.2-expanded-mediators
v0.3-missingness-model
v0.4-feasibility-pilot
v1.0-empirical-trial-data
```

Empirical data should never be committed publicly unless fully anonymised, ethically approved, and legally shareable.

## Recommended File Naming

```text
simulated_light_act_youth_data_v0_1.csv
simulated_light_act_youth_longitudinal_v0_1.csv
simulated_light_act_youth_baseline_v0_1.csv
simulated_light_act_youth_mediators_v0_1.csv
```

## Data Access

The synthetic dataset may be shared openly for educational and methodological purposes.

Future empirical data access should be controlled and governed by ethics approval, data-sharing agreements, participant consent terms, institutional policy, data protection law, and youth safeguarding requirements.

## Suggested Citation

```text
Petalcorin, M.I.R.(2026). LIGHT-ACT Youth simulated dataset for circadian and physical activity intervention planning in adolescent anxiety and depression. GitHub repository. https://github.com/mpetalcorin/light-act-youth-simulation-framework
```

## Contact

**Author:** Mark I.R. Petalcorin  
**Project:** LIGHT-ACT Youth  
**Purpose:** Simulation-based trial design for adolescent anxiety and depression research
