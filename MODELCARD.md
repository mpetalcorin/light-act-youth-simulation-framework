# Model Card: LIGHT-ACT Youth Responder Simulation and Prediction Framework

## Model Name

**LIGHT-ACT Youth Responder Prediction Framework**

## Model Version

Version: `0.1-simulation`

Status: Prototype, simulation-only, not clinically validated.

## Model Type

This project uses a simulated machine learning framework for exploratory responder prediction in a proposed adolescent mental health intervention trial.

The current implementation may use standard supervised classification models such as logistic regression, random forest classifier, gradient boosting classifier, or other scikit-learn-compatible classifiers.

The main interpretability method is **permutation importance**, with performance assessed using a receiver operating characteristic curve and area under the curve, AUC.

## Intended Purpose

The purpose of the model is to demonstrate how interpretable machine learning could be used in a future trial to explore which baseline clinical, behavioural, wearable, physiological, and contextual variables may predict clinically meaningful response to the LIGHT-ACT Youth intervention.

The model is designed for **simulation-based planning**, not real-world clinical decision-making.

## Intended Users

- Clinical trial methodologists
- Mental health researchers
- Circadian biology researchers
- Physical activity intervention researchers
- Data scientists
- Grant-writing teams
- Implementation scientists
- Youth mental health research teams

## Out-of-Scope Uses

The model should not be used for clinical diagnosis, treatment allocation, risk prediction in real young people, automated clinical decision-making, school-based screening without ethics approval, use on identifiable youth data without consent, governance, and safeguarding review, or replacement of clinician, caregiver, or youth judgement.

## Model Inputs

| Input variable | Description |
|---|---|
| `trial_arm` | Simulated assignment to LIGHT-ACT Youth or active control |
| `age` | Simulated participant age |
| `baseline_symptom_score` | Simulated anxiety/depression symptom score at baseline |
| `baseline_sleep_regularity` | Simulated sleep rhythm regularity |
| `baseline_activity_level` | Simulated daytime physical activity |
| `baseline_rhythm_disruption` | Simulated circadian or rest-activity disruption |
| `chronotype_delay` | Simulated tendency toward later sleep timing |
| `fatigue` | Simulated fatigue severity |
| `rumination` | Simulated repetitive negative thinking |
| `socioeconomic_risk` | Simulated contextual disadvantage score |
| `cortisol_rhythm` | Simulated HPA-axis rhythm marker |
| `heart_rate_variability` | Simulated autonomic regulation marker |
| `inflammation_score` | Simulated inflammatory tone marker |

The exact variables may differ depending on the notebook or script version.

## Model Output

The model outputs a predicted probability that a simulated participant is a **responder**.

A responder is defined in the simulation as a participant who shows clinically meaningful improvement in anxiety/depression symptoms by a specified timepoint, for example week 10 or follow-up.

```text
Predicted probability of response = 0.78
Predicted class = responder
```

## Target Variable

```text
responder
```

Possible values:

```text
1 = clinically meaningful simulated improvement
0 = no clinically meaningful simulated improvement
```

The threshold for meaningful improvement should be explicitly defined in the analysis notebook, for example percentage symptom reduction, absolute score change, or crossing below a clinical cut-off.

## Training Data

The model is trained on **synthetic data only**.

The simulated dataset is generated from assumptions about baseline symptom distributions, group allocation, expected intervention effects, sleep regularity trajectories, activity-rest rhythm trajectories, cortisol rhythm trajectories, heart-rate variability changes, fatigue and rumination changes, contextual variability, and missing-data patterns.

No real participant data are included in the current framework.

## Evaluation Data

The model is evaluated using held-out synthetic data or cross-validation within the simulated dataset.

Evaluation metrics may include ROC AUC, accuracy, sensitivity, specificity, precision, recall, confusion matrix, calibration plots, and permutation importance.

## Performance

In the demonstration notebook, the simulated responder prediction model produced an illustrative ROC AUC of approximately:

```text
AUC ≈ 0.82
```

This value is simulation-dependent and should not be interpreted as evidence of real clinical predictive performance.

Model performance will change depending on simulation assumptions, noise levels, effect-size assumptions, missing-data assumptions, feature set, classification threshold, train-test split, and model type.

## Explainability

The framework uses permutation importance to estimate how much each input feature contributes to model performance.

In the simulated analysis, important features may include intervention assignment, baseline symptom severity, fatigue, rhythm disruption, activity level, rumination, and socioeconomic risk.

Permutation importance should be interpreted cautiously because correlated predictors can distort apparent importance.

## Ethical Considerations

This framework concerns youth mental health and therefore requires careful ethical handling before any real-world use.

Key risks include misclassification of vulnerable young people, over-reliance on algorithmic predictions, encoding socioeconomic bias, privacy risks from wearable data, stigmatisation of non-responders, inappropriate use in schools or clinics without safeguarding, and false precision from unvalidated models.

Future real-world modelling should include ethics approval, youth and caregiver co-design, bias auditing, external validation, model calibration, transparent reporting, human oversight, clear limits on use, data minimisation, and safeguarding pathways.

## Bias and Fairness

Potential sources of bias include unequal access to safe outdoor spaces, unequal access to wearable devices, differences in school schedules, socioeconomic differences in sleep opportunity, cultural differences in activity norms, differential missingness by family stress or symptom burden, digital exclusion, and disability-related differences in physical activity feasibility.

Future empirical models should evaluate performance across age groups, sex and gender where ethically collected, socioeconomic strata, ethnic and cultural groups where ethically collected, disability status, baseline symptom severity, baseline rhythm disruption, recruitment site, and school or community context.

## Limitations

1. The model is trained and evaluated on simulated data only.
2. It has not been validated in real young people.
3. It should not be used for clinical decision-making.
4. Feature relationships are determined by assumptions in the simulation.
5. Model performance may be optimistic because the data-generating process is known.
6. Biomarker and wearable variables are simplified.
7. Missingness mechanisms are simulated and may not reflect real-world adherence.
8. The responder definition is illustrative and requires clinical validation.

## Recommended Future Development

Before real-world use, the model should be developed through feasibility study data collection, prospective preregistration, independent validation, calibration assessment, sensitivity analysis, bias and subgroup auditing, missing-data robustness testing, lived-experience review, clinical oversight, and transparent model documentation.

## Model Governance

A future real-world model should be governed by a clinical trial protocol, data management plan, statistical analysis plan, safeguarding plan, youth advisory group, independent trial steering committee, data monitoring procedures, model audit logs, version control, and secure data storage.

## Summary Statement

The LIGHT-ACT Youth responder model is a **simulation-based, interpretable machine learning demonstration** designed to support trial planning and hypothesis generation. It is not a clinical prediction tool. Its value lies in showing how future trials could integrate symptom outcomes, wearable-derived rhythm measures, biomarkers, contextual variables, and interpretable prediction to understand heterogeneity of response in adolescent anxiety and depression.
