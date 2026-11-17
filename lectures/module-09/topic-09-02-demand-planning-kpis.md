---
module: 9
topic: "9.2"
title: "Demand Planning KPIs"
language: "Taglish"
status: "complete"
---

# Module 9 – Topic 9.2: Demand Planning KPIs

**Main focus:** How do we know whether our demand forecasts are good, reliable, and useful for making business decisions?

Sa Topic 9.1, pinag-aralan natin ang Demand Planning process and how organizations develop demand forecasts. Ngayon, another important question naman:

**How do we measure whether those forecasts are performing well?**

Hindi sapat na may forecast tayo. Kailangan nating malaman kung:
- Gaano kalapit ang forecast sa actual customer demand?
- Palagi bang mas mataas o mas mababa ang forecast natin?
- Aling products ang may pinakamalaking forecasting problems?
- Improving ba ang forecasting process over time?
- May operational or financial consequences ba ang forecasting errors?

Dito pumapasok ang **Demand Planning KPIs**.

---

# 1. Topic Overview

## 1.1 What are Demand Planning KPIs?

**Demand Planning KPIs (Key Performance Indicators)** are measurable indicators used to evaluate how effectively an organization predicts, manages, and responds to customer demand.

Sa simpleng salita:

Demand Planning KPIs are tools that tell us whether our demand forecasts are performing as expected.

For example:

Imagine na gumagawa ang isang manufacturing company ng three products:

| Product | Forecast | Actual Demand |
|---|---:|---:|
| Product A | 1,000 | 950 |
| Product B | 500 | 700 |
| Product C | 200 | 150 |

May forecast ang company, pero makikita natin na:

- Product A: Slightly overforecasted.
- Product B: Underforecasted.
- Product C: Overforecasted.

Ang tanong ngayon: How do we quantify these differences?

Hindi sapat ang sabihin lang na "mali ang forecast."

We need measurable indicators to determine the magnitude, direction, and business significance of forecasting errors.

## 1.2 Why are Demand Planning KPIs important?

Demand forecasts influence almost every major supply chain decision.

**How demand forecast performance affects operations**

Demand Planning: Forecasted customer demand.

This forecast influences:
- **Production:** Determine production quantities and schedules.
- **Procurement:** Determine raw material purchasing requirements.
- **Inventory:** Determine inventory and replenishment requirements.
- **Customer Service:** Ensure products are available when customers need them.

Consider two situations:

**Scenario A: Overforecasting**

The company forecasts 10,000 units, but customers only purchase 7,000 units.

Possible consequences:
- Excess finished goods inventory.
- Higher inventory holding costs.
- Unnecessary raw material purchases.
- Potential obsolescence.
- Working capital tied up in inventory.

**Scenario B: Underforecasting**

The company forecasts 7,000 units, but customers actually need 10,000 units.

Possible consequences:
- Finished goods shortages.
- Missed sales opportunities.
- Expedited procurement.
- Overtime production.
- Delayed customer deliveries.

Therefore, forecast performance is not just a statistical concern. It is a business performance concern.

## 1.3 Connection to the S&OP process

Topic 9.1 introduced the demand planning process.

Topic 9.2 evaluates the effectiveness of that process.

The relationship is:

| Topic | Main question |
|---|---|
| 9.1 Demand Planning | How do we develop the demand forecast? |
| 9.2 Demand Planning KPIs | How well did our forecast perform? |
| 9.3 Supply Planning KPIs | How effectively can we meet the demand and execute the supply plan? |

Eventually, these measurements support the S&OP discussion, where demand and supply plans are reconciled.

---

# 2. Layman's Explanation

Before discussing formulas, kailangan muna nating maintindihan ang three fundamental concepts:

1. Forecast Quality
2. Forecast Accuracy
3. Forecast Bias

Magkakaugnay sila, pero hindi sila interchangeable.

## 2.1 Forecast Quality

Forecast quality refers to the overall reliability and usefulness of a forecast.

Hindi lang ito tungkol sa kung gaano kalapit ang forecast sa actual demand.

It can include:
- Accuracy: How close was the forecast?
- Bias: Does the forecast consistently overestimate or underestimate?
- Consistency: Is the forecasting process stable?
- Timeliness: Was the forecast available when needed?
- Granularity: Was it prepared at the appropriate product and time level?
- Value: Does the forecast help the organization make better decisions?

Think of forecast quality as the overall health of the forecasting process.

## 2.2 Forecast Accuracy

Forecast accuracy measures how close the forecast is to actual demand.

Example:

| | Units |
|---|---:|
| Forecast | 1,000 |
| Actual | 950 |
| Error | 50 |

The forecast was 50 units away from actual demand.

Mas maliit ang error, generally mas mataas ang accuracy.

## 2.3 Forecast Bias

Forecast bias measures whether forecasts consistently tend to be higher or lower than actual demand.

Example:

| Month | Forecast | Actual | Forecast Error |
|---|---:|---:|---:|
| January | 1,100 | 1,000 | +100 |
| February | 1,200 | 1,100 | +100 |
| March | 1,300 | 1,200 | +100 |

Notice something?

Every month, the company forecasts 100 units more than actual demand.

This is a systematic overforecasting pattern.

Ibig sabihin, hindi lang basta nagkamali ang forecast. May consistent direction ang error.

**Important distinction:**

- Accuracy tells us how large the forecasting error is.
- Bias tells us whether the forecasting error consistently goes in one direction.

Isipin mo ang target shooting:

- Accuracy: How close are your shots to the target?
- Bias: Do your shots consistently land to the left or right?

Puwedeng maliit ang average error pero may consistent directional tendency. Puwede ring malalaki ang errors pero nagkakansela ang positive at negative errors.

We will demonstrate this mathematically later.

---

# 3. Technical Explanation

## 3.1 Understanding Forecast Error

Before calculating KPIs, we need one common definition.

\[
\text{Forecast Error} = \text{Forecast} - \text{Actual}
\]

Where:

- Forecast = Predicted demand.
- Actual = Realized customer demand.
- Forecast Error = Difference between forecast and actual.

Interpretation:

| Forecast Error | Meaning |
|---:|---|
| Positive (+) | Overforecasting |
| Negative (-) | Underforecasting |
| Zero (0) | Exact forecast |

Example:

| Forecast | Actual | Error | Interpretation |
|---:|---:|---:|---|
| 1,200 | 1,000 | +200 | Overforecast |
| 800 | 1,000 | -200 | Underforecast |
| 1,000 | 1,000 | 0 | Exact forecast |

**Important:** Some organizations define forecast error as Actual minus Forecast instead. This reverses the signs. Always verify the company's convention before interpreting bias.

For this lesson, we will consistently use:

\[
e_t=F_t-A_t
\]

## 3.2 The Seven Important Demand Planning KPIs

We will cover these seven measurements:

| KPI | What it measures |
|---|---|
| Forecast Accuracy | Closeness of forecast to actual demand |
| MAPE | Average absolute percentage error |
| WAPE | Total absolute error relative to total actual demand |
| MAE | Average absolute error in units |
| Forecast Bias | Direction and magnitude of systematic error |
| FVA | Value added or lost by forecasting activities |
| Forecast Attainment | Achievement against a defined forecast target |

These metrics answer different business questions. Hindi sila basta interchangeable formulas.

---

# 4. Detailed Discussion: KPI Formulas and Calculations

Ito ang pinaka-importanteng technical section ng topic natin. Dito natin matututunan kung paano kinukuwenta ang bawat KPI at kung kailan dapat gamitin.

## 4.1 Forecast Accuracy

**Definition:** Forecast Accuracy measures how closely the forecast matches actual demand.

There are several ways companies calculate forecast accuracy. Walang iisang formula na universally required across all organizations.

One commonly used approach is to derive accuracy from percentage error.

\[
\text{Forecast Accuracy}=100\%-\text{MAPE}
\]

This means the accuracy is calculated by subtracting MAPE from 100%.

Example:

- MAPE = 15%
- Forecast Accuracy = 100% − 15%
- Forecast Accuracy = 85%

**Important:** This is one convention, not a universal standard. Some organizations calculate accuracy using WAPE, or use other error-based methods. Some apply error caps or special treatments for zero-demand periods.

Always understand the company's official KPI definition before comparing reported accuracy figures.

## 4.2 Mean Absolute Percentage Error (MAPE)

**Definition:** MAPE measures the average absolute forecast error expressed as a percentage of actual demand.

Sa simpleng salita:

It tells us, on average, ilang percent ang layo ng forecast natin from actual demand.

### Formula

\[
MAPE=\frac{1}{n}\sum_{t=1}^{n}
\left|\frac{F_t-A_t}{A_t}\right|\times100
\]

Where:

| Variable | Meaning |
|---|---|
| \(F_t\) | Forecast demand for period t |
| \(A_t\) | Actual demand for period t |
| \(n\) | Number of observations |
| \(| |\) | Absolute value |

### Step-by-step example

Suppose the company has the following monthly demand:

| Month | Forecast | Actual |
|---|---:|---:|
| January | 1,100 | 1,000 |
| February | 900 | 1,000 |
| March | 1,200 | 1,000 |

**Step 1: Calculate forecast error.**

\[
Error=Forecast-Actual
\]

| Month | Forecast | Actual | Error |
|---|---:|---:|---:|
| January | 1,100 | 1,000 | +100 |
| February | 900 | 1,000 | -100 |
| March | 1,200 | 1,000 | +200 |

**Step 2: Calculate absolute error.**

Absolute value removes the negative sign.

| Month | Error | Absolute Error |
|---|---:|---:|
| January | +100 | 100 |
| February | -100 | 100 |
| March | +200 | 200 |

**Step 3: Calculate percentage error.**

\[
APE=\frac{|Forecast-Actual|}{Actual}\times100
\]

| Month | Absolute Error | Actual | APE |
|---|---:|---:|---:|
| January | 100 | 1,000 | 10% |
| February | 100 | 1,000 | 10% |
| March | 200 | 1,000 | 20% |

**Step 4: Calculate MAPE.**

\[
MAPE=\frac{10\%+10\%+20\%}{3}
\]

\[
\boxed{MAPE=13.33\%}
\]

Using the 100% minus MAPE convention:

\[
Forecast\ Accuracy=100\%-13.33\%
\]

\[
\boxed{Forecast\ Accuracy=86.67\%}
\]

### Interpretation

The average absolute percentage error is 13.33%.

The corresponding accuracy under this convention is 86.67%.

Meaning, the forecast has an average percentage deviation of approximately 13.33% from actual demand.

### Advantages of MAPE

- Easy to understand.
- Expressed as a percentage.
- Useful for comparing products with different demand volumes.
- Useful for evaluating forecast performance over time.

### Limitations of MAPE

**Problem 1: Actual demand equals zero.**

\[
APE=\frac{|F-A|}{A}\times100
\]

If actual demand is zero, division by zero occurs.

MAPE becomes undefined.

**Problem 2: Very low actual demand.**

Example:

| Forecast | Actual | Absolute Error | APE |
|---:|---:|---:|---:|
| 100 | 10 | 90 | 900% |

A 90-unit error produces 900% error because the actual demand is only 10 units.

This can make low-volume products disproportionately affect MAPE.

**Problem 3: Equal weighting of periods.**

MAPE gives every observation equal weight, regardless of its actual demand volume.

A 10-unit product and a 10,000-unit product can contribute equally to the average percentage error.

That is why we need another metric.

## 4.3 Weighted Mean Absolute Percentage Error (WAPE)

**Definition:** WAPE measures total absolute forecast error relative to total actual demand.

Unlike MAPE, WAPE considers the actual demand volume when calculating the overall percentage error.

### Formula

\[
WAPE=\frac{\sum|F_t-A_t|}{\sum A_t}\times100
\]

Where:

- Numerator = Total absolute forecast error.
- Denominator = Total actual demand.

### Step-by-step example

Let's use the same data:

| Month | Forecast | Actual | Absolute Error |
|---|---:|---:|---:|
| January | 1,100 | 1,000 | 100 |
| February | 900 | 1,000 | 100 |
| March | 1,200 | 1,000 | 200 |
| **Total** | **3,200** | **3,000** | **400** |

**Step 1: Calculate total absolute error.**

\[
100+100+200=400
\]

**Step 2: Calculate total actual demand.**

\[
1,000+1,000+1,000=3,000
\]

**Step 3: Calculate WAPE.**

\[
WAPE=\frac{400}{3,000}\times100
\]

\[
\boxed{WAPE=13.33\%}
\]

In this example, MAPE and WAPE happen to produce the same result because actual demand is equal across all three months.

Let's see what happens when demand volumes are different.

### Another example

| Product | Forecast | Actual | Absolute Error |
|---|---:|---:|---:|
| A | 1,100 | 1,000 | 100 |
| B | 300 | 100 | 200 |
| C | 90 | 100 | 10 |
| **Total** | **1,490** | **1,200** | **310** |

**MAPE calculation:**

Product A:

\[
100/1,000=10\%
\]

Product B:

\[
200/100=200\%
\]

Product C:

\[
10/100=10\%
\]

\[
MAPE=\frac{10\%+200\%+10\%}{3}
\]

\[
\boxed{MAPE=73.33\%}
\]

**WAPE calculation:**

\[
WAPE=\frac{310}{1,200}\times100
\]

\[
\boxed{WAPE=25.83\%}
\]

Notice the difference!

- MAPE = 73.33%
- WAPE = 25.83%

Why?

Because MAPE gives equal importance to each product's percentage error.

WAPE gives greater influence to products with higher actual demand volumes.

### When should we use WAPE?

WAPE is particularly useful when:
- Monitoring overall forecast performance.
- Evaluating a product portfolio.
- Comparing total forecast error against total demand.
- Reporting performance to management.

However, WAPE also has limitations.

If total actual demand is zero, WAPE is undefined. Very low total demand can also make it unstable.

It can also hide serious errors in low-volume products because high-volume products dominate the calculation.

## 4.4 Mean Absolute Error (MAE)

**Definition:** MAE measures the average absolute difference between forecast and actual demand, expressed in the original unit of measurement.

Unlike MAPE and WAPE, MAE does not convert the error into a percentage.

### Formula

\[
MAE=\frac{\sum|F_t-A_t|}{n}
\]

Where:

- \(F_t\) = Forecast.
- \(A_t\) = Actual.
- \(n\) = Number of observations.

### Example

Using our first dataset:

| Month | Forecast | Actual | Absolute Error |
|---|---:|---:|---:|
| January | 1,100 | 1,000 | 100 |
| February | 900 | 1,000 | 100 |
| March | 1,200 | 1,000 | 200 |

**Step 1: Sum the absolute errors.**

\[
100+100+200=400
\]

**Step 2: Divide by the number of observations.**

\[
MAE=\frac{400}{3}
\]

\[
\boxed{MAE=133.33\ units}
\]

### Interpretation

On average, the monthly forecast differs from actual demand by approximately 133.33 units.

If the company manufactures in pieces, MAE is measured in pieces.

If demand is measured in kilograms, MAE is measured in kilograms.

### Advantages

- Easy to interpret operationally.
- Not affected by zero actual demand through division.
- Useful for production and material planning.
- Uses the same unit as the demand data.

### Limitation

MAE is not ideal for comparing products with very different demand volumes.

For example:

- Product A has MAE of 100 units against 10,000 units of demand.
- Product B has MAE of 100 units against 200 units of demand.

Both have the same MAE, but their relative forecasting performance is very different.

## 4.5 Forecast Bias

**Definition:** Forecast Bias measures the systematic tendency of a forecast to overestimate or underestimate actual demand.

Remember our error convention:

\[
e_t=F_t-A_t
\]

### Formula 1: Mean Forecast Error

\[
Mean\ Forecast\ Error=\frac{\sum(F_t-A_t)}{n}
\]

This measures the average signed error in units.

### Formula 2: Percentage Forecast Bias

\[
Forecast\ Bias=
\frac{\sum(F_t-A_t)}{\sum A_t}\times100
\]

This measures the net signed error relative to total actual demand.

### Step-by-step example

| Month | Forecast | Actual | Forecast Error |
|---|---:|---:|---:|
| January | 1,100 | 1,000 | +100 |
| February | 1,200 | 1,000 | +200 |
| March | 900 | 1,000 | -100 |
| **Total** | **3,200** | **3,000** | **+200** |

**Step 1: Calculate total signed forecast error.**

\[
100+200-100=200
\]

**Step 2: Calculate percentage bias.**

\[
Bias=\frac{200}{3,000}\times100
\]

\[
\boxed{Forecast\ Bias=+6.67\%}
\]

### Interpretation

The company has a positive forecast bias of 6.67%.

Meaning, the total forecast exceeds total actual demand by 6.67%.

| Bias Result | Interpretation |
|---|---|
| Positive | Overforecasting tendency |
| Negative | Underforecasting tendency |
| Zero | No net bias |

**Important:** Zero bias does not necessarily mean good forecasting.

Consider this example:

| Month | Forecast | Actual | Error |
|---|---:|---:|---:|
| January | 1,500 | 1,000 | +500 |
| February | 500 | 1,000 | -500 |

Total error:

\[
+500-500=0
\]

Bias is zero.

However, the forecasts are wrong by 500 units in each month!

This is why bias must be evaluated together with accuracy or absolute error metrics.

## 4.6 Forecast Value Added (FVA)

**Definition:** Forecast Value Added measures whether a particular forecasting activity or intervention improves or worsens forecast performance.

Ito naman ay mas focused sa effectiveness ng forecasting process itself.

Imagine that a company has several forecasting stages:

1. Statistical forecast.
2. Sales adjustment.
3. Demand planner adjustment.
4. Final consensus forecast.

The question is:

**Did each step actually improve the forecast?**

### Example

Suppose actual demand is 1,000 units.

| Forecast Stage | Forecast | Absolute Error |
|---|---:|---:|
| Statistical Forecast | 900 | 100 |
| Sales Adjustment | 1,200 | 200 |
| Planner Adjustment | 1,050 | 50 |
| Final Forecast | 1,050 | 50 |

The sales team increased the forecast from 900 to 1,200.

But actual demand was only 1,000.

The adjustment increased the absolute error from 100 to 200.

Therefore, the sales adjustment reduced forecast value.

The demand planner subsequently reduced the forecast to 1,050, improving the result.

### Formula

Using absolute error as the performance measure:

\[
FVA=Error_{Before}-Error_{After}
\]

For the sales adjustment:

\[
FVA=100-200=-100
\]

**Negative FVA**

The sales adjustment worsened the forecast by 100 units of absolute error.

For the planner adjustment:

\[
FVA=200-50=+150
\]

**Positive FVA**

The planner adjustment improved the forecast by 150 units of absolute error.

### Important FVA interpretation

| FVA | Meaning |
|---:|---|
| Positive | Forecast performance improved |
| Negative | Forecast performance deteriorated |
| Zero | No measurable improvement or deterioration |

FVA can be measured using MAE, WAPE contribution, or another defined error metric. The organization must specify its measurement method.

### Why is FVA important?

It helps organizations identify whether:
- Sales adjustments genuinely improve forecasts.
- Demand planners add value.
- Management overrides improve or worsen forecast quality.
- Additional forecasting activities are worth the time and effort.

**Professional insight:** An organization should not automatically assume that a more heavily adjusted forecast is a better forecast.

More meetings and more manual adjustments do not guarantee better forecasting.

## 4.7 Forecast Attainment

Forecast Attainment is a term whose definition depends on the organization's reporting framework.

One possible definition is the percentage of actual demand achieved against the forecast target.

\[
Forecast\ Attainment=
\frac{Actual\ Demand}{Forecast\ Target}\times100
\]

Example:

- Forecast target = 1,000 units.
- Actual demand = 950 units.

\[
Attainment=\frac{950}{1,000}\times100
\]

\[
\boxed{Attainment=95\%}
\]

Interpretation: Actual demand reached 95% of the forecast target.

However, be careful.

This is not necessarily a measure of forecast accuracy.

For example:

| Forecast | Actual | Attainment |
|---:|---:|---:|
| 1,000 | 950 | 95% |
| 1,000 | 1,050 | 105% |
| 1,000 | 500 | 50% |

Attainment tells us how actual demand compares with a target. It does not directly measure absolute forecasting error.

Some organizations use forecast attainment to describe the achievement of forecast-related process targets, rather than actual-versus-forecast demand. Always check the company's definition.

## 4.8 Comparison of the Seven KPIs

| KPI | Measurement | Main purpose |
|---|---|---|
| Forecast Accuracy | Percentage | Closeness to actual demand |
| MAPE | Percentage | Average percentage error |
| WAPE | Percentage | Volume-weighted percentage error |
| MAE | Units | Average absolute error |
| Forecast Bias | Signed percentage or units | Direction of errors |
| FVA | Error improvement or deterioration | Value of forecasting activities |
| Forecast Attainment | Percentage | Achievement against a target |

### Which KPI should we use?

| Business Question | Recommended KPI |
|---|---|
| How accurate are our forecasts on average? | MAPE or another defined accuracy metric |
| How much total demand error do we have? | WAPE |
| How many units are we missing by? | MAE |
| Are we consistently overforecasting? | Forecast Bias |
| Are manual adjustments helping? | FVA |
| Did actual demand reach the forecast target? | Forecast Attainment |

A professional demand planner does not simply report one accuracy percentage.

They select appropriate metrics based on the business question.

---

# 5. Forecast Accuracy vs. Forecast Bias: A Deeper Understanding

Ito ang distinction na gusto kong talagang ma-master mo.

Accuracy and bias are two different dimensions of forecast performance.

## 5.1 Example A: Reasonable Accuracy but Consistent Bias

Consider the following data:

| Month | Forecast | Actual | Error |
|---|---:|---:|---:|
| January | 1,100 | 1,000 | +100 |
| February | 1,100 | 1,000 | +100 |
| March | 1,100 | 1,000 | +100 |
| April | 1,100 | 1,000 | +100 |

MAPE:

\[
MAPE=\frac{10+10+10+10}{4}=10\%
\]

Bias:

\[
Bias=\frac{400}{4,000}\times100=10\%
\]

Interpretation:

- Accuracy under the 100%-MAPE convention = 90%.
- Bias = +10%.
- The forecast consistently overestimates demand.

The forecast is relatively close, but the consistent overforecasting indicates a systematic issue.

Possible causes:
- Sales teams consistently add optimistic adjustments.
- Forecast assumptions are outdated.
- Historical demand is being interpreted incorrectly.
- Demand planners are not adequately adjusting for known customer changes.

Business consequence:

The company may repeatedly procure more raw materials than necessary and accumulate excess finished goods.

## 5.2 Example B: Poor Accuracy but Almost Zero Bias

Now consider:

| Month | Forecast | Actual | Error |
|---|---:|---:|---:|
| January | 1,500 | 1,000 | +500 |
| February | 500 | 1,000 | -500 |
| March | 1,500 | 1,000 | +500 |
| April | 500 | 1,000 | -500 |

MAPE:

\[
MAPE=\frac{50+50+50+50}{4}=50\%
\]

Bias:

\[
Bias=\frac{500-500+500-500}{4,000}\times100
\]

\[
\boxed{Bias=0\%}
\]

Interpretation:

- Accuracy under the 100%-MAPE convention = 50%.
- Bias = 0%.
- Forecast errors are large but cancel each other out.

Business consequence:

Even if the overall bias is zero, the company experiences alternating periods of:
- Excess production.
- Inventory accumulation.
- Production shortages.
- Expedited material requirements.

### Visual comparison

| | Example A | Example B |
|---|---:|---:|
| MAPE | 10% | 50% |
| Accuracy convention | 90% | 50% |
| Bias | +10% | 0% |
| Forecast behavior | Consistently high | Alternating high and low |
| Main concern | Systematic overforecast | High forecast variability |

**Remember this principle:**

A forecast can have good accuracy but persistent bias. It can also have zero bias but very poor accuracy.

You need both measurements to understand forecasting performance.

---

# 6. KPI Interpretation and Reporting

Hindi sapat na makuha lang ang KPI. Ang tunay na trabaho ng S&OP analyst ay ma-interpret ang results.

Let's discuss how organizations evaluate forecasting performance.

## 6.1 Actual vs. Forecast Comparison

The first step is comparing forecast demand with actual demand.

Example:

| Month | Forecast | Actual | Variance |
|---|---:|---:|---:|
| Jan | 10,000 | 9,000 | +1,000 |
| Feb | 11,000 | 12,000 | -1,000 |
| Mar | 12,000 | 11,500 | +500 |
| Apr | 13,000 | 14,000 | -1,000 |

A demand planner should identify:
- Which months have the largest errors?
- Are errors predominantly positive or negative?
- Is there a recurring pattern?
- Did something happen to customer demand?

A variance report is the starting point for investigation, not the final conclusion.

## 6.2 Product-Level Analysis

Company-wide accuracy can hide problems at individual product levels.

Example:

| Product | Forecast | Actual | Absolute Error |
|---|---:|---:|---:|
| A | 10,000 | 9,500 | 500 |
| B | 2,000 | 3,000 | 1,000 |
| C | 500 | 200 | 300 |

Product B has the largest absolute error.

However, Product C has the largest percentage error:

- Product A: 5.26%
- Product B: 33.33%
- Product C: 150%

Therefore, different KPIs identify different problems.

## 6.3 Product-Family Analysis

Products can be grouped according to their families.

For example:

| Product Family | Products |
|---|---|
| Capacitors | CAP-001, CAP-002, CAP-003 |
| Resistors | RES-001, RES-002 |
| Sensors | SEN-001, SEN-002 |

Why do this?

Because management may not need to investigate every individual SKU during the S&OP meeting.

Instead, they can first identify which product families have significant forecast issues.

Then, they can drill down into individual products.

This is called *drill-down analysis*.

## 6.4 Aggregated vs. Disaggregated Forecast Performance

This is another important concept.

**Aggregated forecast:** Forecast measured at a higher level, such as total product family or total company demand.

**Disaggregated forecast:** Forecast measured at a detailed level, such as individual SKU, customer, or location.

Example:

| Product | Forecast | Actual | Error |
|---|---:|---:|---:|
| A | 1,000 | 800 | +200 |
| B | 500 | 700 | -200 |
| **Total** | **1,500** | **1,500** | **0** |

At the aggregated level:

Forecast = Actual.

It appears that the forecast is perfect.

But at the individual product level:
- Product A is overforecasted.
- Product B is underforecasted.

The errors cancel each other.

This is called **forecast error cancellation**.

Why does it matter?

Because Product A and Product B may use different raw materials, production lines, or manufacturing processes.

Even if the total forecast is correct, the organization may still experience:
- Excess inventory for Product A.
- Material shortages for Product B.
- Incorrect production allocation.
- Capacity imbalances.

Therefore:

**Good aggregate accuracy does not automatically mean good SKU-level forecast accuracy.**

## 6.5 Period-Based Trend Analysis

Forecast performance should also be monitored over time.

Example:

| Month | WAPE |
|---|---:|
| January | 18% |
| February | 17% |
| March | 16% |
| April | 14% |
| May | 12% |
| June | 10% |

This indicates an improving trend in overall weighted forecast performance.

But consider another situation:

| Month | WAPE |
|---|---:|
| January | 10% |
| February | 12% |
| March | 16% |
| April | 20% |
| May | 23% |
| June | 25% |

This indicates deteriorating forecast performance.

The analyst should investigate possible causes:
- Increasing customer demand variability.
- New product launches.
- Product discontinuations.
- Changes in customer ordering patterns.
- Supply-related constraints affecting observed sales.

## 6.6 Common Forecasting Problems

| Problem | Possible Cause | Investigation |
|---|---|---|
| Persistent overforecasting | Optimistic sales assumptions | Review sales overrides |
| Persistent underforecasting | Missed customer demand | Review customer forecasts and orders |
| High percentage errors | Low-volume or intermittent demand | Review MAPE and absolute errors |
| Sudden increase in errors | Demand pattern changed | Investigate recent customer events |
| Good family accuracy, poor SKU accuracy | Error cancellation | Drill down into products |
| Repeated forecast adjustments | Weak baseline forecast | Evaluate FVA |
| Forecast improves only at month-end | Late information or delayed updates | Review forecast process timing |

A KPI identifies where to look. Investigation identifies why the problem exists.

---

# 7. Practical Manufacturing Case Study

Now let's combine the concepts using a manufacturing scenario.

## 7.1 Business Scenario

Imagine that you are working as an S&OP Analyst for an industrial electronics manufacturer.

The company manufactures four product models.

Each product has different demand volumes and manufacturing requirements.

The demand planning team prepares monthly forecasts for November.

At the end of November, actual customer demand becomes available.

Your task is to evaluate the performance of the demand forecast.

### November Demand Data

| Product | Forecast | Actual |
|---|---:|---:|
| Product A | 11,000 | 10,000 |
| Product B | 2,400 | 3,000 |
| Product C | 1,000 | 800 |
| Product D | 140 | 200 |
| **Total** | **14,540** | **14,000** |

## 7.2 Calculate Forecast Error

\[
Error=Forecast-Actual
\]

| Product | Forecast | Actual | Error | Interpretation |
|---|---:|---:|---:|---|
| A | 11,000 | 10,000 | +1,000 | Overforecast |
| B | 2,400 | 3,000 | -600 | Underforecast |
| C | 1,000 | 800 | +200 | Overforecast |
| D | 140 | 200 | -60 | Underforecast |

What can we observe?

- Product A has significant overforecasting.
- Product B has significant underforecasting.
- Product C is overforecasted.
- Product D is underforecasted.

## 7.3 Calculate Absolute Percentage Error

\[
APE=\frac{|Forecast-Actual|}{Actual}\times100
\]

| Product | Absolute Error | Actual | APE |
|---|---:|---:|---:|
| A | 1,000 | 10,000 | 10% |
| B | 600 | 3,000 | 20% |
| C | 200 | 800 | 25% |
| D | 60 | 200 | 30% |

Interpretation:

Product D has the largest percentage error.

However, Product A has the largest absolute error in units.

This distinction is important.

Product D may be the biggest percentage forecasting problem, but Product A contributes the largest number of excess units.

## 7.4 Calculate MAPE

\[
MAPE=\frac{10\%+20\%+25\%+30\%}{4}
\]

\[
\boxed{MAPE=21.25\%}
\]

Using our selected convention:

\[
Forecast\ Accuracy=100\%-21.25\%
\]

\[
\boxed{Forecast\ Accuracy=78.75\%}
\]

Interpretation:

The average absolute percentage error across the four products is 21.25%.

## 7.5 Calculate WAPE

First, calculate total absolute error.

\[
1,000+600+200+60=1,860
\]

Then:

\[
WAPE=\frac{1,860}{14,000}\times100
\]

\[
\boxed{WAPE=13.29\%}
\]

Using the WAPE-based accuracy convention:

\[
100\%-13.29\%=86.71\%
\]

Notice:

| Metric | Result |
|---|---:|
| MAPE | 21.25% |
| MAPE-based Accuracy | 78.75% |
| WAPE | 13.29% |
| WAPE-based Accuracy | 86.71% |

Both calculations are correct under their respective definitions.

The difference comes from how they weight product-level errors.

## 7.6 Calculate MAE

There are four products.

\[
MAE=\frac{1,860}{4}
\]

\[
\boxed{MAE=465\ units}
\]

Interpretation:

The average absolute forecasting error per product is 465 units.

Note that this is a cross-sectional product average for November, not a monthly time-series average.

## 7.7 Calculate Forecast Bias

First, calculate total signed error.

\[
1,000-600+200-60=540
\]

Then:

\[
Bias=\frac{540}{14,000}\times100
\]

\[
\boxed{Forecast\ Bias=+3.86\%}
\]

Interpretation:

The total forecast exceeded actual demand by 540 units, or 3.86% of total actual demand.

The company has a net overforecasting tendency for this period.

However, hindi ibig sabihin na lahat ng products ay overforecasted. Products B and D were underforecasted.

## 7.8 Overall KPI Summary

**November Demand Planning Performance**

| KPI | Result | Interpretation |
|---|---:|---|
| MAPE | 21.25% | Average percentage error |
| WAPE | 13.29% | Volume-weighted error |
| MAE | 465 units | Average absolute units |
| Forecast Bias | +3.86% | Net overforecasting |
| MAPE-based Accuracy | 78.75% | Accuracy under MAPE convention |
| WAPE-based Accuracy | 86.71% | Accuracy under WAPE convention |

## 7.9 Identify Products with the Largest Forecast Errors

Absolute forecast error by product, in units:

| Product | Absolute Error |
|---|---:|
| A | 1,000 |
| B | 600 |
| C | 200 |
| D | 60 |

The ranking based on absolute units is:

1. Product A: 1,000 units.
2. Product B: 600 units.
3. Product C: 200 units.
4. Product D: 60 units.

But ranking based on percentage error is different:

1. Product D: 30%.
2. Product C: 25%.
3. Product B: 20%.
4. Product A: 10%.

This gives us two different investigation priorities.

- Product A: Largest volume impact.
- Product D: Largest relative forecasting error.

A good S&OP analyst considers both.

## 7.10 Operational and Manufacturing Implications

Let's translate the forecasting errors into actual manufacturing consequences.

### Product A: Overforecasted by 1,000 units

Potential consequences:
- Production may have been scheduled for 1,000 excess units.
- Raw material procurement may have exceeded actual requirements.
- Finished goods inventory may increase.
- Working capital may become tied up.

Possible corrective action:

Review sales assumptions, customer order changes, and inventory positioning before repeating the same forecast.

### Product B: Underforecasted by 600 units

Potential consequences:
- Insufficient production allocation.
- Potential finished goods shortage.
- Additional production requirements.
- Possible expedited raw material procurement.
- Customer delivery delays.

Possible corrective action:

Investigate whether the customer submitted an additional order, demand increased unexpectedly, or the forecasting team missed relevant demand information.

### Product C: Overforecasted by 200 units

Potential consequences:
- Excess raw material allocation.
- Unnecessary production.
- Higher inventory exposure.

Possible corrective action:

Check whether the demand forecast was based on outdated historical demand or an incorrect sales adjustment.

### Product D: Underforecasted by 60 units

Potential consequences:
- Potential shortage despite the relatively small volume.
- Possible missed customer orders.
- Production schedule disruption.

Possible corrective action:

Investigate whether the product has intermittent demand, a new customer, or an unusually large order.

**Important manufacturing lesson:**

The largest forecasting error is not automatically the highest business priority.

You must also consider:
- Product value.
- Profit margin.
- Material availability.
- Production lead time.
- Customer importance.
- Criticality of the product.
- Inventory position.

A 60-unit shortage of a critical component could be more disruptive than a 1,000-unit excess of a readily available product.

---

# 8. Business Perspective and Decision-Making

Now let's move from calculating KPIs to using them as an S&OP Analyst.

## 8.1 How does an S&OP Analyst use Demand Planning KPIs?

The analyst's responsibility is not simply to report:

"Our forecast accuracy is 85%."

The more important responsibility is to explain:

- Why is it 85%?
- Which products are contributing to the errors?
- Are we overforecasting or underforecasting?
- Is the problem recurring?
- What business consequences are expected?
- What actions should be taken?

A good KPI report should support a decision.

## 8.2 Distinguishing Forecasting Errors from Genuine Demand Changes

This is an important professional skill.

Not every forecast error means that the demand planning team performed poorly.

Sometimes actual demand changes because of genuine business events.

Example:

The company forecasted 10,000 units.

Actual demand reached 14,000 units because a major customer unexpectedly placed a large order.

Was the forecasting process necessarily poor?

Not necessarily.

The analyst should investigate:

| Investigation | Purpose |
|---|---|
| Customer order history | Was this demand pattern recurring? |
| Customer forecast updates | Was the information available before the forecast cutoff? |
| Sales communication | Was the additional order communicated? |
| Market conditions | Did an external event increase demand? |
| Forecast assumptions | Were assumptions reasonable at the time? |

The distinction is between:

**Forecasting process failure:** Information was available but was not properly incorporated.

**Genuine demand change:** Demand changed because of an event that was not reasonably known when the forecast was prepared.

This distinction prevents unfairly blaming the demand planning team for every deviation.

## 8.3 Forecast Accuracy Should Not Be Evaluated in Isolation

Imagine two products:

| Metric | Product A | Product B |
|---|---:|---:|
| Actual Demand | 10,000 | 200 |
| Forecast | 9,500 | 100 |
| Absolute Error | 500 | 100 |
| APE | 5% | 50% |

Product B has much worse percentage accuracy.

However, Product A has a larger absolute error.

Now consider that:
- Product A is a high-volume standard product.
- Product B is a critical spare part with long supplier lead time.

Product B's 100-unit shortage could create a significant customer service problem.

Therefore, the analyst should not judge business performance using accuracy alone.

Other considerations include:
- Inventory availability.
- Service level.
- Production capacity.
- Material lead time.
- Forecast horizon.
- Product lifecycle.
- Customer criticality.
- Financial impact.

## 8.4 Corrective Actions and Continuous Improvement

A useful approach is to connect KPI results with root-cause investigation and action planning.

| KPI Finding | Possible Root Cause | Corrective Action |
|---|---|---|
| Persistent positive bias | Optimistic sales adjustments | Review sales override assumptions |
| Persistent negative bias | Demand not captured | Improve customer demand visibility |
| High MAPE | Volatile or low-volume demand | Segment products and review appropriate forecasting methods |
| High WAPE | Large errors in high-volume products | Prioritize high-volume SKU investigations |
| Negative FVA | Manual adjustments worsen forecasts | Review override approval process |
| Increasing monthly WAPE | Deteriorating forecast performance | Investigate changes in demand patterns |
| Good aggregate but poor SKU accuracy | Forecast errors cancel out | Improve SKU-level forecast review |

### Recommended S&OP KPI review process

1. **Collect data:** Gather historical forecasts and actual demand.
2. **Calculate KPIs:** Calculate MAPE, WAPE, MAE, and bias using agreed definitions.
3. **Identify deviations:** Find products, product families, and periods with significant errors.
4. **Investigate root causes:** Review customer changes, sales adjustments, forecast assumptions, and demand patterns.
5. **Develop corrective actions:** Assign actions to the appropriate stakeholders.
6. **Monitor performance:** Evaluate whether corrective actions improve future forecast performance.

## 8.5 What should a Demand Planning KPI Dashboard contain?

A practical dashboard could contain:

| Dashboard Section | Information |
|---|---|
| Overall Performance | MAPE, WAPE, MAE |
| Forecast Direction | Forecast Bias |
| Historical Trend | Monthly WAPE and bias |
| Product Performance | SKU-level forecast accuracy |
| Product Family | Family-level forecast performance |
| Forecast Adjustments | FVA |
| Demand Variance | Forecast versus actual |
| Corrective Actions | Root cause, owner, due date, status |

One important reporting principle:

Always compare forecasts against the correct forecast version and horizon.

For example, if the company wants to evaluate a three-month-ahead forecast, it should compare that specific forecast version with actual demand three months later.

Do not compare different forecast horizons and assume they represent the same forecasting performance.

A forecast made one month ahead is generally not directly comparable with one made six months ahead.

Also, distinguish customer demand from actual shipments when measuring forecast performance. If supply shortages prevent shipments, actual shipments may be lower than true customer demand. Using shipments without considering lost or constrained demand can make the forecast appear artificially high.

---

# 9. Key Takeaways

Ito ang mga concepts na dapat mong ma-master bago tayo mag-proceed.

## 9.1 The most important distinctions

| Concept | What you should remember |
|---|---|
| Forecast Quality | Overall reliability and usefulness of the forecasting process |
| Forecast Accuracy | How close the forecast is to actual demand |
| Forecast Bias | Whether forecasts consistently overestimate or underestimate |
| MAPE | Average absolute percentage error |
| WAPE | Total absolute error relative to total actual demand |
| MAE | Average absolute error expressed in units |
| FVA | Whether forecasting activities improve or worsen forecast performance |
| Forecast Attainment | Achievement against a defined forecast target |

## 9.2 Five principles to remember

**1. Accuracy and bias are different.**

Accuracy measures the magnitude of errors. Bias measures their direction and systematic tendency.

**2. MAPE and WAPE are not interchangeable.**

MAPE gives equal weight to observations. WAPE gives greater weight to observations with higher actual demand.

**3. Percentage-based metrics have limitations.**

MAPE cannot handle zero actual demand and can become disproportionately large when actual demand is very low.

**4. Good aggregate accuracy does not guarantee good product-level accuracy.**

Forecast errors can cancel each other out when products are combined.

**5. Forecast accuracy is not the ultimate business objective.**

The ultimate objective is better business decisions, appropriate inventory, efficient production, reliable procurement, and good customer service.

## 9.3 Formula Reference Sheet

Keep this as your quick reference.

| KPI | Formula |
|---|---|
| Forecast Error | \(F-A\) |
| Absolute Error | \(|F-A|\) |
| APE | \(\frac{|F-A|}{A}\times100\) |
| MAPE | \(\frac{1}{n}\sum APE\) |
| WAPE | \(\frac{\sum|F-A|}{\sum A}\times100\) |
| MAE | \(\frac{\sum|F-A|}{n}\) |
| Mean Forecast Error | \(\frac{\sum(F-A)}{n}\) |
| Forecast Bias | \(\frac{\sum(F-A)}{\sum A}\times100\) |
| FVA | Error Before − Error After |
| Forecast Attainment | \(\frac{Actual}{Forecast\ Target}\times100\) |

*Note: These formulas use the conventions established in this lesson. Company-specific KPI definitions may differ.*

---

# 10. Knowledge Check and Exercises

**Assessment: Level 1 → Level 3**

Now let's test your understanding.

Hindi ko muna ibibigay ang answers. Sagutan mo muna, then I will evaluate your answers, identify your mistakes, and explain the correct reasoning.

## Part A – Conceptual Understanding

**Question 1.** What is the fundamental difference between Forecast Accuracy and Forecast Bias?

A. Accuracy measures demand volume, while bias measures production capacity.

B. Accuracy measures the closeness of forecasts to actual demand, while bias measures the direction of forecast errors.

C. Accuracy measures inventory levels, while bias measures customer satisfaction.

D. They are two different names for the same KPI.

**Question 2.** A company reports zero forecast bias. Does this automatically mean its forecasting process is good? Explain your answer.

**Question 3.** Why can MAPE produce misleading results when a product has very low actual demand?

**Question 4.** What is the main difference between MAPE and WAPE when evaluating products with different demand volumes?

## Part B – Numerical Exercises

Consider the following demand data:

| Month | Forecast | Actual |
|---|---:|---:|
| January | 1,100 | 1,000 |
| February | 800 | 1,000 |
| March | 1,200 | 1,000 |
| April | 900 | 1,000 |

Calculate the following:

**Question 5.** Calculate the forecast error for each month.

**Question 6.** Calculate the MAPE.

**Question 7.** Calculate the WAPE.

**Question 8.** Calculate the MAE.

**Question 9.** Calculate Forecast Bias and interpret the result.

**Question 10.** Based on the MAPE, what is the Forecast Accuracy using our 100% minus MAPE convention?

## Part C – Practical Business Analysis

A manufacturing company reports the following results:

| Product | Forecast | Actual |
|---|---:|---:|
| A | 10,000 | 9,000 |
| B | 2,000 | 3,000 |
| C | 500 | 250 |
| D | 100 | 200 |

**Question 11.** Which product has the largest absolute forecast error?

**Question 12.** Which product has the largest percentage error?

**Question 13.** The company reports a positive overall forecast bias. What does this indicate? Does it mean all products were overforecasted?

**Question 14.** Product D has a relatively small demand volume but a high percentage error. Should management automatically prioritize it over Product A? Explain your reasoning.

## Part D – Professional S&OP Analysis

**Question 15.**

During the monthly S&OP meeting, management reports:

- Overall WAPE improved from 18% to 12%.
- Product-level MAPE increased from 20% to 35%.
- Overall forecast bias is approximately zero.
- Several critical products experienced shortages.

As the S&OP Analyst:

1. How would you interpret these results?
2. Why might overall WAPE improve while product-level MAPE deteriorates?
3. What additional information would you request?
4. What corrective actions would you recommend?

---

## Interactive Answer Sheet

You can answer directly below. Hindi kailangang perfect ang answers. Mas importante na makita natin kung naiintindihan mo ang reasoning behind each KPI.

## How we will evaluate your answers

I will assess your responses based on four dimensions:

| Assessment area | What I will evaluate |
|---|---|
| Conceptual understanding | Do you understand what each KPI measures? |
| Calculation accuracy | Are your formulas and numerical results correct? |
| Interpretation | Can you explain what the results mean operationally? |
| Business judgment | Can you recommend appropriate S&OP actions? |

Hindi kailangang perfect ang answers. Ang goal natin ay makita kung naiintindihan mo ang reasoning behind each KPI.

---

# 11. Connection to the Next Topics

**Curriculum connection**

**Module 9 – Topic 9.3: Supply Planning KPIs**

We have now studied two important sides of supply chain performance:

- Demand Planning KPIs: Are we predicting customer requirements accurately?
- Supply Planning KPIs: Can we produce and procure what the business requires?

But there is another important question:

**Even if demand and supply plans are aligned, are we maintaining the right amount of inventory?**

For example:
- Can we have high production attainment but still experience inventory shortages?
- Can we have excellent supplier OTD but excessive raw material inventory?
- Can we have sufficient total inventory but still lack the specific products customers need?
- How do we determine whether inventory is too high or too low?

These are the questions that Inventory KPIs will address.

We will cover those in Topic 9.4, but only after completing this lesson.

---

## Your learning checkpoint

I recommend answering the exercises in order, starting with Exercise 1 and Exercise 2.

You can submit your answers together or one exercise at a time. I will check your calculations, explain mistakes, and challenge your business interpretation before we consider Topic 9.2 complete.
