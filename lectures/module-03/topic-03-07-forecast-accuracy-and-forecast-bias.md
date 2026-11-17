# Module 3 – Demand Planning
## Topic 3.7: Forecast Accuracy and Forecast Bias

**Main learning objective:** Matutunan natin kung paano malaman kung gaano kalapit ang forecast sa actual customer demand, kung may consistent na overforecasting o underforecasting, at kung paano gamitin ang results para mapabuti ang business planning.

Sa previous topics, pinag-aralan natin kung paano bumubuo ng demand forecast, ano ang mga factors na nakakaapekto sa demand, at paano nagkakaroon ng consensus demand plan.

Ngayon, ibang tanong naman ang sasagutin natin:

**"Gaano ba kaayos ang forecast natin, at paano natin malalaman kung may recurring problem sa forecasting process?"**

Ito ang purpose ng Forecast Accuracy and Forecast Bias.

---

# 1. Topic Overview

### 1.1 What are we going to learn?

Imagine na ang isang electronic components manufacturer ay nag-forecast na makakabenta sila ng 10,000 units next month.

Pagdating ng end of the month, 8,000 units lang pala ang actual demand.

May difference na 2,000 units.

Pero sapat na ba ang malaman nating may 2,000-unit difference?

Hindi pa.

Kailangan nating malaman:

1. Gaano kalaki ang forecasting error?
2. Gaano kalapit ang forecast sa actual demand?
3. Palagi ba tayong nag-o-overforecast?
4. Palagi ba tayong nag-u-underforecast?
5. Ano ang operational at financial consequences?
6. Ano ang dapat baguhin sa forecasting process?

Dito pumapasok ang dalawang importanteng concepts:

| Concept | Main question |
|---|---|
| Forecast Accuracy | Gaano kalapit ang forecast sa actual demand? |
| Forecast Bias | May consistent tendency ba tayong mag-overforecast o underforecast? |

### 1.2 Why is this important in S&OP?

Hindi natatapos ang Demand Planning kapag nakagawa na tayo ng forecast.

Kailangan din nating i-evaluate kung effective ba ang forecasting process.

Halimbawa:

- Kapag consistently mataas ang forecast, maaaring magkaroon ng excess inventory.
- Kapag consistently mababa ang forecast, maaaring magkaroon ng material shortages.
- Kapag unpredictable ang forecast errors, maaaring mahirapan ang Production Planning na mag-adjust ng capacity.
- Kapag hindi nai-investigate ang errors, maaaring maulit lang ang parehong forecasting mistakes.

**The objective is not to create a perfect forecast. The objective is to create a forecast that is sufficiently accurate, unbiased, explainable, and useful for business decisions.**

### 1.3 Connection to the S&OP process

Ang relationship ng previous topics at current topic ay:

| Previous / Current Topic | Connection |
|---|---|
| Demand Patterns | Understanding how customer demand behaves |
| Forecasting Methods | Generating the forecast |
| Demand Influencing Factors | Understanding what changes demand |
| Consensus Demand Planning | Agreeing on the demand plan |
| **Forecast Accuracy and Bias** | Evaluating whether the forecast is performing well |

Ang Topic 3.7 ay bahagi ng continuous improvement cycle ng Demand Planning.

Hindi lang tayo gumagawa ng forecast. Sinusuri rin natin ang performance nito para mapabuti ang susunod na forecasting cycle.

---

# 2. Layman's Explanation

## 2.1 Understanding Forecast Accuracy

Let's use a simple example.

May sari-sari store na nag-forecast na makakabenta ito ng 100 bottles of water bukas.

Pero ang actual sales ay 95 bottles.

Malapit ang forecast sa actual demand, kaya relatively accurate ang forecast.

**Simple definition:**

Forecast Accuracy measures how close our forecast is to actual demand.

The closer the forecast is to actual demand, the better its accuracy.

## 2.2 Understanding Forecast Error

Ang forecast error ay ang difference between forecast demand and actual demand.

May dalawang possible situations:

**Situation A: Overforecasting**

- Forecast: 1,000 units
- Actual: 800 units
- Nag-forecast tayo ng mas mataas kaysa actual demand.

Possible consequence:
- Excess finished goods
- Higher inventory carrying cost
- Unnecessary production
- Excess raw materials

**Situation B: Underforecasting**

- Forecast: 800 units
- Actual: 1,000 units
- Nag-forecast tayo ng mas mababa kaysa actual demand.

Possible consequence:
- Insufficient inventory
- Material shortages
- Production expediting
- Delayed customer deliveries

Notice na parehong may problem, pero magkaiba ang business consequences.

## 2.3 Understanding Forecast Bias

Ito naman ang mas interesting.

Imagine na sa loob ng six months, ganito ang performance ng isang planner:

| Month | Forecast | Actual |
|---|---:|---:|
| January | 1,200 | 1,000 |
| February | 1,150 | 1,000 |
| March | 1,250 | 1,000 |
| April | 1,180 | 1,000 |
| May | 1,220 | 1,000 |
| June | 1,200 | 1,000 |

Ano ang napapansin mo?

Every month, mas mataas ang forecast kaysa actual demand.

Hindi na ito simpleng forecasting error.

May recurring pattern na.

Ito ang tinatawag na **Forecast Bias**.

Simple definition:

Forecast Bias measures whether forecasts consistently tend to be higher or lower than actual demand.

- Consistently higher forecast = Overforecasting bias.
- Consistently lower forecast = Underforecasting bias.

### 2.4 The easiest way to remember the difference

Imagine na nagba-basketball ka.

- **Forecast Accuracy:** Gaano kalapit ang tira mo sa ring?
- **Forecast Bias:** Palagi ka bang tumitira sa kaliwa o sa kanan ng ring?

Puwedeng minsan mataas, minsan mababa, at minsan sakto ang tira mo. Iyon ay random error.

Pero kung palagi kang pumapalya sa isang direction, may systematic pattern. Iyon ang concept ng bias.

---

# 3. Technical Explanation

Now, let's introduce the formal terminology.

## 3.1 Forecast Accuracy

Forecast accuracy is the degree to which forecasted demand corresponds to actual observed demand over a specified time period and level of aggregation.

Sa madaling salita, sinusukat nito kung gaano kalaki ang difference between forecasted demand and actual demand.

Important terminology:

| Term | Meaning |
|---|---|
| Forecast Demand (F) | Quantity predicted by the forecasting process |
| Actual Demand (A) | Actual demand observed during the period |
| Forecast Error (E) | Difference between forecast and actual demand |
| Absolute Error (AE) | Magnitude of the error, ignoring its direction |
| Forecast Accuracy | Measure of closeness between forecast and actual |
| Forecast Bias | Systematic tendency to overforecast or underforecast |

## 3.2 Forecast Reliability vs. Forecast Accuracy

Magka-related sila, pero hindi exactly the same.

| Aspect | Forecast Accuracy | Forecast Reliability |
|---|---|---|
| Main concern | Closeness to actual demand | Consistency and dependability of forecasting performance |
| Question | How close was the forecast? | Can stakeholders depend on the forecasting process? |
| Focus | Forecast error | Stability and consistency of performance |
| Example | Forecast was 95% accurate using a defined metric | Forecast performance remains reasonably stable across planning cycles |

**Important distinction:** Walang iisang universally standardized mathematical definition of forecast reliability. In actual companies, it may refer to consistency, repeatability, or confidence in the forecasting process. Some organizations use it interchangeably with accuracy, so always check the company's KPI definition.

A forecasting process can produce good accuracy in one month but poor accuracy in the next. That may make the process less dependable for operational planning.

## 3.3 Why will forecasts never be perfectly accurate?

Dahil future demand is uncertain.

Kahit gaano kaganda ang forecasting method, may variables na hindi natin fully control:

- Customer purchasing decisions
- Competitor activities
- Economic conditions
- Unexpected orders
- Customer cancellations
- Promotions
- New product introductions
- Product obsolescence
- Market disruptions

For example, kahit stable ang demand history ng isang electronic component, puwedeng biglang mag-order ang isang major customer ng additional 20,000 units.

Hindi ibig sabihin na defective ang forecasting method.

It means that actual demand contains uncertainty.

**A forecast is an estimate of future demand, not a guaranteed future outcome.**

## 3.4 Forecast Error: Technical Definition

For this lesson, gagamit tayo ng consistent sign convention:

\[
\boxed{E_t=A_t-F_t}
\]

Where:

- \(E_t\) = Forecast error during period \(t\), in units
- \(A_t\) = Actual demand during period \(t\), in units
- \(F_t\) = Forecast demand during period \(t\), in units
- \(t\) = Time period, such as a month

Using this convention:

| Forecast Error | Interpretation |
|---|---|
| Positive (+) | Actual is higher than forecast: underforecasting |
| Negative (-) | Actual is lower than forecast: overforecasting |
| Zero (0) | Forecast exactly matches actual |

**Important:** May companies na gumagamit ng opposite convention, \(F-A\). Kaya kapag nagbabasa ka ng company reports, always verify the formula before interpreting positive and negative values.

## 3.5 Why Forecast Error Has Two Components

May dalawang importanteng characteristics ang forecast error:

**A. Magnitude**

Gaano kalaki ang difference between forecast and actual?

**B. Direction**

Mas mataas ba ang forecast kaysa actual, or mas mababa?

Example:

| Forecast | Actual | Error (A − F) | Absolute Error |
|---:|---:|---:|---:|
| 1,000 | 900 | -100 | 100 |
| 1,000 | 1,100 | +100 | 100 |

Pareho silang may 100 units na error.

Pero magkaiba ang direction:

- First row: Overforecasting.
- Second row: Underforecasting.

Ito ang dahilan kung bakit kailangan natin ng dalawang types of measurement:

1. **Accuracy metrics:** Usually focus on the magnitude of errors.
2. **Bias metrics:** Focus on the direction and persistence of errors.

---

# 4. Detailed Discussion

## 4.1 Forecast Accuracy Measurement

Hindi sapat na sabihin lang na "maganda ang forecast natin."

Kailangan natin ng measurable performance indicators.

Sa S&OP, gumagamit tayo ng Forecast Accuracy KPIs para malaman kung gaano kalaki ang forecasting errors.

Pag-aralan natin ang five important metrics.

### A. MAD – Mean Absolute Deviation

**Simple explanation:**

Ang MAD ay average na laki ng forecasting error, regardless kung overforecasting o underforecasting.

Example:

- Month 1: 100 units error.
- Month 2: 200 units error.
- Month 3: 150 units error.

Ang MAD ay average ng 100, 200, at 150.

Hindi mahalaga kung positive o negative ang original error. Absolute values ang ginagamit.

**Formula:**

\[
MAD=\frac{\sum_{t=1}^{n}|A_t-F_t|}{n}
\]

Where:

| Variable | Definition | Unit |
|---|---|---|
| \(A_t\) | Actual demand | Units |
| \(F_t\) | Forecast demand | Units |
| \(n\) | Number of periods | Months, weeks, etc. |
| \(|A_t-F_t|\) | Absolute forecast error | Units |

**Purpose:** Sukatin ang average number of units na nagkakamali ang forecast.

Advantages:
- Easy to calculate.
- Easy to explain to operations teams.
- Same unit of measurement as demand.
- Hindi affected ng positive or negative signs cancelling each other.

Limitations:
- Hindi directly comparable ang MAD ng products na magkaiba ang demand volume.
- Hindi nito ipinapakita kung overforecasting or underforecasting.
- Hindi nito masyadong pinaparusahan ang exceptionally large errors compared with squared-error metrics.

### B. MAPE – Mean Absolute Percentage Error

**Simple explanation:**

Ang MAD ay nagsasabi kung ilang units ang average error.

Ang MAPE naman ay nagsasabi kung ilang percent ang average error relative to actual demand.

For example:

Kung actual demand ay 1,000 units at ang forecast error ay 100 units, 10% ang error.

**Formula:**

\[
MAPE=\frac{1}{n}
\sum_{t=1}^{n}
\left|\frac{A_t-F_t}{A_t}\right|
\times100
\]

Variables:

- \(A_t\) = Actual demand in units.
- \(F_t\) = Forecast demand in units.
- \(n\) = Number of valid periods.
- Absolute percentage error = Error relative to actual demand.

**Example:**

- Actual demand = 1,000 units.
- Forecast demand = 900 units.
- Absolute error = 100 units.

\[
MAPE=\left|\frac{1000-900}{1000}\right|\times100
\]

\[
MAPE=10\%
\]

Meaning: The forecast error is 10% of actual demand for that period.

Advantages:
- Easy to communicate as a percentage.
- Useful for comparing forecasting performance across products with different demand scales.
- Commonly used in forecasting performance reports.

Limitations:

**Problem 1: Actual demand is zero.**

\[
\frac{|A-F|}{A}
\]

Kapag \(A=0\), undefined ang calculation dahil division by zero.

**Problem 2: Actual demand is very small.**

Example:

- Actual = 2 units.
- Forecast = 10 units.
- Error = 8 units.

\[
MAPE=\frac{8}{2}\times100=400\%
\]

Napakataas ng percentage kahit 8 units lang ang error.

**Problem 3: Equal weighting of periods.**

Bawat period ay may equal contribution sa average, kahit 10 units lang ang demand sa isang month at 10,000 units naman sa ibang month.

Kaya hindi palaging magandang choice ang MAPE para sa intermittent or highly variable demand.

### C. WAPE – Weighted Absolute Percentage Error

Ito ang isang particularly useful metric sa business forecasting.

**Simple explanation:**

Similar sa MAPE, percentage-based din ang WAPE.

Pero instead na kunin ang average percentage error per period, pinagsasama muna ang lahat ng absolute errors, then dini-divide sa total actual demand.

**Formula:**

\[
WAPE=
\frac{\sum_{t=1}^{n}|A_t-F_t|}
{\sum_{t=1}^{n}A_t}
\times100
\]

Variables:

- Numerator = Total absolute forecast error, in units.
- Denominator = Total actual demand, in units.
- WAPE = Percentage.

**Example:**

Suppose:

- Total actual demand = 10,000 units.
- Total absolute forecast error = 1,000 units.

\[
WAPE=\frac{1,000}{10,000}\times100
\]

\[
WAPE=10\%
\]

Meaning: Total absolute forecast error is equivalent to 10% of total actual demand.

Advantages:
- Considers the relative size of demand across periods.
- Higher-volume periods naturally receive more weight.
- Useful for aggregated product-family and business-level reporting.
- Does not divide by individual period actual demand.

Limitations:
- If total actual demand is zero, WAPE is undefined.
- Small-demand SKUs can have poor performance hidden by high-volume products.
- It does not reveal error direction.
- Different product mixes can change the overall WAPE.

**Important distinction:**

MAPE calculates the average of individual percentage errors.

WAPE calculates the percentage of total absolute errors against total actual demand.

Hindi sila interchangeable.

### D. MSE – Mean Squared Error

**Simple explanation:**

Sa MAD, ordinary absolute errors ang ginagamit.

Sa MSE, tina-square natin ang errors bago kunin ang average.

Bakit?

Para mas mabigyan ng malaking penalty ang unusually large forecasting errors.

**Formula:**

\[
MSE=\frac{\sum_{t=1}^{n}(A_t-F_t)^2}{n}
\]

Variables:

- \(A_t\) = Actual demand in units.
- \(F_t\) = Forecast demand in units.
- \(n\) = Number of periods.
- Squared error = Units squared.

**Example:**

May dalawang forecast errors:

| Period | Error | Squared Error |
|---|---:|---:|
| 1 | 10 | 100 |
| 2 | 100 | 10,000 |

\[
MSE=\frac{100+10,000}{2}
\]

\[
MSE=5,050
\]

Notice na mas malaki ang contribution ng 100-unit error dahil squared ito.

Advantages:
- Penalizes large errors more heavily.
- Useful in statistical forecasting model evaluation.
- Helpful when large forecast misses are particularly undesirable.

Limitations:
- Sensitive to outliers.
- Difficult to interpret operationally because the unit is squared.
- Not directly comparable across different demand scales.

### E. RMSE – Root Mean Squared Error

Ang RMSE ay simply the square root of MSE.

Bakit kailangan pa ito?

Dahil ang MSE ay expressed in squared units. By taking its square root, ibinabalik natin sa original demand unit.

**Formula:**

\[
RMSE=\sqrt{
\frac{\sum_{t=1}^{n}(A_t-F_t)^2}{n}
}
\]

Using our previous example:

\[
RMSE=\sqrt{5,050}
\]

\[
RMSE=71.06\text{ units}
\]

Meaning: The root mean squared error is approximately 71.06 units.

Advantages:
- Same unit as actual demand.
- Penalizes large errors more than MAD.
- Useful when large misses are particularly costly.

Limitations:
- Sensitive to unusually large errors.
- Does not indicate whether the company overforecasted or underforecasted.
- Not directly comparable between products with significantly different demand scales.

## 4.2 Comparing the Five Accuracy Metrics

| Metric | What it measures | Unit | Best use |
|---|---|---|---|
| MAD | Average absolute error | Units | Operational interpretation |
| MAPE | Average percentage error | % | Period-level percentage comparison |
| WAPE | Total absolute error relative to total actual demand | % | Aggregate business performance |
| MSE | Average squared error | Units² | Statistical model evaluation |
| RMSE | Root average squared error | Units | Penalizing large misses |

### Which metric should an S&OP Analyst use?

Hindi kailangan na lahat ng five metrics ay gamitin sa isang dashboard.

A practical selection might be:

- WAPE: Overall demand planning performance.
- MAD: Average error in units.
- MAPE: Product or period-level percentage analysis, when actual demand is sufficiently large and nonzero.
- RMSE: Evaluating whether large forecasting misses are occurring.
- MSE: More commonly used for statistical model evaluation.

The appropriate metric depends on the business objective, demand characteristics, and reporting requirements.

## 4.3 Understanding Forecast Bias

Now, punta naman tayo sa second major concept.

As discussed earlier, Forecast Accuracy measures the magnitude of errors.

Forecast Bias measures the direction of errors over time.

### Positive Bias and Negative Bias

Using our established convention:

\[
E_t=A_t-F_t
\]

| Error Result | Interpretation | Bias |
|---|---|---|
| Positive | Actual greater than forecast | Underforecasting |
| Negative | Actual lower than forecast | Overforecasting |
| Zero | Actual equals forecast | No error for that period |

Remember: positive bias under our convention means underforecasting.

This is important because some companies use the opposite sign convention.

### Why is persistent bias concerning?

Imagine a manufacturing company that consistently overforecasts demand by 15%.

What happens?

1. Sales expects higher demand.
2. Demand Planning incorporates the high forecast.
3. Supply Planning prepares production requirements.
4. Procurement orders more raw materials.
5. Production manufactures more finished goods.
6. Actual customer demand turns out lower.

Result:

- Excess inventory.
- Higher warehousing costs.
- More working capital tied up in stocks.
- Potential material expiration or obsolescence.
- Reduced inventory turnover.

Now imagine persistent underforecasting.

Possible consequences:

- Insufficient raw materials.
- Production shortages.
- Emergency procurement.
- Overtime and expediting costs.
- Missed delivery commitments.
- Lower customer service levels.

**The important lesson:** Bias is not merely a statistical issue. It can become a recurring operational and financial problem.

## 4.4 Measuring Forecast Bias

Let's discuss three common measurements.

### A. CFE – Cumulative Forecast Error

CFE is the sum of forecast errors across multiple periods.

**Formula:**

\[
CFE=\sum_{t=1}^{n}(A_t-F_t)
\]

Using our convention:

- Positive CFE = Net underforecasting.
- Negative CFE = Net overforecasting.
- Zero CFE = No net cumulative error.

Example:

| Month | Actual | Forecast | Error (A − F) |
|---|---:|---:|---:|
| January | 1,000 | 900 | +100 |
| February | 1,100 | 1,000 | +100 |
| March | 900 | 1,000 | -100 |

\[
CFE=100+100-100
\]

\[
\boxed{CFE=+100\text{ units}}
\]

Interpretation:

Across the three periods, the forecast was 100 units lower than actual demand on a net basis.

Important: CFE can hide offsetting errors. Kahit zero ang CFE, hindi ibig sabihin perfect ang forecast.

### B. MFE – Mean Forecast Error

MFE is the average signed forecast error.

**Formula:**

\[
MFE=\frac{\sum_{t=1}^{n}(A_t-F_t)}{n}
\]

Or:

\[
MFE=\frac{CFE}{n}
\]

Using the same example:

\[
MFE=\frac{100}{3}
\]

\[
\boxed{MFE=+33.33\text{ units}}
\]

Interpretation:

On average, the company underforecasted demand by approximately 33.33 units per period.

Unlike MAD, MFE preserves the direction of errors.

### C. Forecast Bias Percentage

One practical way of expressing bias as a percentage is to divide CFE by total actual demand.

**Formula:**

\[
Forecast\ Bias\%=
\frac{\sum(A_t-F_t)}
{\sum A_t}
\times100
\]

Using our example:

- CFE = +100 units.
- Total actual demand = 1,000 + 1,100 + 900 = 3,000 units.

\[
Forecast\ Bias\%=
\frac{100}{3,000}\times100
\]

\[
\boxed{Forecast\ Bias=+3.33\%}
\]

Interpretation:

The net forecast shortfall is equivalent to 3.33% of total actual demand.

Positive means underforecasting under our convention.

Negative means overforecasting.

**Important technical note:** Companies may define Forecast Bias Percentage differently. Some use forecast minus actual, while others use actual minus forecast. Some also use average demand or another denominator. Always verify the company's KPI definition before comparing results.

## 4.5 Forecast Accuracy vs. Forecast Bias

Ito ang pinakaimportanteng distinction ng topic.

| Aspect | Forecast Accuracy | Forecast Bias |
|---|---|---|
| Definition | Measures closeness to actual demand | Measures systematic direction of forecast errors |
| Purpose | Determine the magnitude of errors | Identify recurring overforecasting or underforecasting |
| Measurement | Absolute errors or squared errors | Signed errors |
| Common metrics | MAD, MAPE, WAPE, RMSE | CFE, MFE, Bias % |
| Positive/negative direction | Usually removed by absolute values | Preserved |
| Business concern | How much are we missing? | Which direction are we consistently missing? |
| Main implication | Forecasting performance | Systematic planning imbalance |

### Can accuracy be good while bias is poor?

Yes, depending on the company's acceptable performance thresholds and measurement period.

Example:

| Month | Actual | Forecast | Error |
|---|---:|---:|---:|
| 1 | 1,000 | 900 | +100 |
| 2 | 1,000 | 900 | +100 |
| 3 | 1,000 | 900 | +100 |
| 4 | 1,000 | 900 | +100 |

Every month, the company underforecasts by 10%.

The errors are consistent and relatively small compared with demand, but the direction never changes.

- MAPE = 10%.
- WAPE = 10%.
- CFE = +400 units.
- Bias percentage = +10%.

The company has a predictable underforecasting pattern.

Whether 10% accuracy error is acceptable depends on the product, planning horizon, business impact, and company targets. But the persistent bias deserves investigation.

### Can accuracy be poor while bias is zero?

Yes!

Consider:

| Month | Actual | Forecast | Error |
|---|---:|---:|---:|
| 1 | 1,000 | 800 | +200 |
| 2 | 1,000 | 1,200 | -200 |

Results:

- CFE = 0.
- MFE = 0.
- MAD = 200 units.
- WAPE = 10%.

The errors cancel out when calculating bias.

But the forecasting process still has errors.

This is why **zero bias does not mean high forecast accuracy.**

---

# 5. Practical Examples and Applications

## 5.1 Manufacturing Business Scenario

Let's use an illustrative electronic components manufacturer.

The company manufactures MLCC products and supplies different electronic component customers.

The Demand Planning team prepares monthly forecasts, which are used by:

- Production Planning
- Material Planning
- Procurement
- Inventory Management
- Finance

The company wants to evaluate the performance of its demand forecast for one product family over six months.

**Illustrative dataset**

### Monthly Demand Dataset

| Month | Actual Demand | Forecast Demand |
|---|---:|---:|
| January | 1,000 | 1,100 |
| February | 1,200 | 1,000 |
| March | 900 | 1,000 |
| April | 1,100 | 1,200 |
| May | 1,300 | 1,200 |
| June | 1,000 | 900 |
| **Total** | **6,500** | **6,400** |

All quantities are expressed in units.

Now, let's analyze this dataset.

### Step 1: Calculate Forecast Error

Formula:

\[
E=A-F
\]

| Month | Actual | Forecast | Error | Interpretation |
|---|---:|---:|---:|---|
| Jan | 1,000 | 1,100 | -100 | Overforecast |
| Feb | 1,200 | 1,000 | +200 | Underforecast |
| Mar | 900 | 1,000 | -100 | Overforecast |
| Apr | 1,100 | 1,200 | -100 | Overforecast |
| May | 1,300 | 1,200 | +100 | Underforecast |
| Jun | 1,000 | 900 | +100 | Underforecast |

Initial observation:

- Three months of overforecasting.
- Three months of underforecasting.
- Largest error: 200 units.
- Total actual demand: 6,500 units.

Hindi pa natin masasabi na walang bias dahil lang equal ang number of overforecasted and underforecasted months.

Kailangan nating tingnan ang magnitude ng errors.

### Step 2: Calculate Absolute Error

Formula:

\[
AE=|A-F|
\]

| Month | Forecast Error | Absolute Error |
|---|---:|---:|
| Jan | -100 | 100 |
| Feb | +200 | 200 |
| Mar | -100 | 100 |
| Apr | -100 | 100 |
| May | +100 | 100 |
| Jun | +100 | 100 |
| **Total** | **+100** | **700** |

Notice:

- Sum of signed errors = +100.
- Sum of absolute errors = 700.

Magkaiba ang purpose ng dalawang totals.

### Step 3: Calculate MAD

\[
MAD=\frac{\sum|A-F|}{n}
\]

\[
MAD=\frac{700}{6}
\]

\[
\boxed{MAD=116.67\text{ units}}
\]

Interpretation:

On average, the monthly forecast differs from actual demand by approximately 117 units.

Operationally, this means the planner's monthly forecast misses actual demand by around 117 units on average, without considering direction.

### Step 4: Calculate MAPE

Formula:

\[
MAPE=\frac{1}{n}\sum
\left|\frac{A-F}{A}\right|\times100
\]

Let's calculate each month.

| Month | Absolute Error | Actual | Percentage Error |
|---|---:|---:|---:|
| Jan | 100 | 1,000 | 10.00% |
| Feb | 200 | 1,200 | 16.67% |
| Mar | 100 | 900 | 11.11% |
| Apr | 100 | 1,100 | 9.09% |
| May | 100 | 1,300 | 7.69% |
| Jun | 100 | 1,000 | 10.00% |

Now calculate the average:

\[
MAPE=
\frac{10+16.67+11.11+9.09+7.69+10}{6}
\]

\[
\boxed{MAPE\approx10.76\%}
\]

Interpretation:

The average monthly absolute percentage error is approximately 10.76%.

Notice that February has the highest percentage error.

This may be a good starting point for root cause investigation.

### Step 5: Calculate WAPE

Formula:

\[
WAPE=
\frac{\text{Total Absolute Error}}
{\text{Total Actual Demand}}\times100
\]

\[
WAPE=\frac{700}{6,500}\times100
\]

\[
\boxed{WAPE\approx10.77\%}
\]

Interpretation:

The total absolute forecast error is equivalent to approximately 10.77% of total actual demand.

For this particular dataset, MAPE and WAPE happen to be very close.

But that is not always the case.

### Step 6: Calculate MSE and RMSE

Using the signed errors, square each value.

| Month | Error | Squared Error |
|---|---:|---:|
| Jan | -100 | 10,000 |
| Feb | +200 | 40,000 |
| Mar | -100 | 10,000 |
| Apr | -100 | 10,000 |
| May | +100 | 10,000 |
| Jun | +100 | 10,000 |
| **Total** | | **90,000** |

MSE:

\[
MSE=\frac{90,000}{6}
\]

\[
\boxed{MSE=15,000\text{ units}^2}
\]

RMSE:

\[
RMSE=\sqrt{15,000}
\]

\[
\boxed{RMSE\approx122.47\text{ units}}
\]

Interpretation:

The RMSE is approximately 122.47 units.

Mas mataas ito sa MAD na 116.67 units dahil mas malaki ang penalty sa 200-unit error.

### Step 7: Calculate CFE

\[
CFE=\sum(A-F)
\]

\[
CFE=-100+200-100-100+100+100
\]

\[
\boxed{CFE=+100\text{ units}}
\]

Interpretation:

On a net cumulative basis, the company underforecasted demand by 100 units across the six months.

### Step 8: Calculate MFE

\[
MFE=\frac{CFE}{n}
\]

\[
MFE=\frac{100}{6}
\]

\[
\boxed{MFE=+16.67\text{ units}}
\]

Interpretation:

On average, the forecast was 16.67 units below actual demand per month.

### Step 9: Calculate Forecast Bias Percentage

\[
Bias\%=\frac{CFE}{Total\ Actual}\times100
\]

\[
Bias\%=\frac{100}{6,500}\times100
\]

\[
\boxed{Bias\%=+1.54\%}
\]

Interpretation:

The company had a net underforecasting bias equivalent to 1.54% of total actual demand.

### 5.2 Summary of Calculated Results

**Forecast Performance Dashboard**

| Metric | Result | Interpretation |
|---|---:|---|
| MAD | 116.67 units | Average absolute monthly error |
| MAPE | 10.76% | Average monthly percentage error |
| WAPE | 10.77% | Total absolute error relative to actual demand |
| MSE | 15,000 units² | Average squared error |
| RMSE | 122.47 units | Root mean squared error |
| CFE | +100 units | Net underforecasting |
| MFE | +16.67 units | Average signed error |
| Bias % | +1.54% | Net underforecasting |

**Important interpretation:**

The company has approximately 10.77% WAPE and a relatively small net bias of +1.54%.

Does this mean the forecasting process is already good?

Not necessarily.

Why?

Because the net bias is small partly because positive and negative errors offset one another.

The company still has 700 units of cumulative absolute error.

The next step is to investigate the monthly errors and understand why they occurred.

## 5.3 How Forecast Errors Affect Manufacturing Operations

Let's connect the calculations to actual business decisions.

### Scenario A: Overforecasting

Suppose the company forecasts 1,200 units, but actual demand is only 1,000 units.

Possible operational effects:

| Department | Potential Impact |
|---|---|
| Production Planning | Excess production quantities |
| Procurement | Unnecessary raw material purchasing |
| Inventory | Increased finished goods inventory |
| Warehouse | Additional storage requirements |
| Finance | Higher working capital requirements |
| Management | Risk of inventory write-offs or obsolescence |

### Scenario B: Underforecasting

Suppose the company forecasts 1,000 units, but actual demand becomes 1,300 units.

| Department | Potential Impact |
|---|---|
| Production Planning | Additional production requirements |
| Procurement | Emergency material replenishment |
| Inventory | Possible raw material or finished goods shortage |
| Warehouse | Insufficient available inventory |
| Customer Service | Delayed or incomplete deliveries |
| Finance | Higher expediting and overtime expenses |

Notice how Forecast Accuracy and Bias are connected to the entire supply chain.

Hindi lang ito KPI ng Demand Planning team.

It affects the decisions of multiple departments.

## 5.4 Root Cause Analysis: Why Do Forecasts Become Inaccurate?

A poor forecast does not automatically mean that the forecasting method is wrong.

As an S&OP Analyst, kailangan mong i-investigate kung saan nanggaling ang error.

Let's discuss common causes.

| Root Cause | Explanation | Possible Improvement |
|---|---|---|
| Incorrect historical data | Missing or incorrect sales records | Validate historical data |
| Poor forecasting method | Method does not match demand behavior | Review method selection |
| Unvalidated sales adjustments | Sales changes forecast without sufficient evidence | Require supporting assumptions |
| Incorrect assumptions | Expected customer demand does not materialize | Review assumptions regularly |
| Customer order volatility | Customer orders change unexpectedly | Improve customer collaboration |
| Promotions | Temporary demand spikes are not incorporated correctly | Separate promotional demand |
| Product lifecycle changes | New or obsolete products have different demand patterns | Apply lifecycle-based forecasting |
| Supply constraints | Recorded sales are lower because stock was unavailable | Adjust for constrained demand |
| Inconsistent processes | Different teams use different assumptions and cut-off dates | Standardize the process |

### A. Incorrect Historical Data

Example:

Suppose actual demand for a product was 10,000 units, but only 7,000 units were recorded due to an incomplete transaction report.

The forecasting system will use incorrect historical data.

Possible result: Underforecasting in future periods.

Corrective action:
- Reconcile sales records.
- Check ERP transactions.
- Validate missing or duplicated data.
- Confirm demand history with the responsible team.

### B. Unvalidated Sales Adjustments

Example:

The statistical forecast is 10,000 units.

The Sales team increases it to 15,000 units because they expect a major customer order.

But walang confirmed order, customer communication, or supporting market evidence.

Actual demand becomes 10,500 units.

The forecast was inflated by an unsupported adjustment.

Corrective action:
- Require a documented reason for adjustments.
- Identify the person or department responsible.
- Track the impact of each adjustment.
- Compare adjusted forecast versus actual results.

### C. Promotions and Unusual Demand

Example:

A customer conducts a promotional campaign that increases demand for three months.

If the forecasting team treats this increase as permanent demand, future forecasts may become too high.

Corrective action:
- Identify one-time demand.
- Separate base demand from promotional demand.
- Record promotion start and end dates.
- Avoid automatically carrying temporary demand increases into future periods.

### D. Product Lifecycle Changes

New products and end-of-life products require different forecasting approaches.

For example:

- New product: Limited historical data.
- Mature product: More stable demand history.
- Declining product: Demand gradually decreases.
- Obsolete product: Regular demand may stop.

A forecasting method that works for mature products may not work for new products.

### E. Supply Constraints Affecting Recorded Sales

This is particularly important in manufacturing.

Imagine:

- Customer demand = 10,000 units.
- Available supply = 7,000 units.
- Actual shipments = 7,000 units.

If the company uses shipments as a direct substitute for demand, it may conclude that demand was only 7,000 units.

But 3,000 units of demand were not fulfilled.

This is called **censored or constrained demand**, depending on the data context.

The company may underestimate future demand if it does not account for lost sales or unfulfilled orders.

**Key lesson:** Actual shipments are not always equal to actual customer demand.

## 5.5 How an S&OP Analyst Investigates Forecast Errors

A professional analyst should not immediately change the forecast simply because the accuracy KPI is poor.

Instead, follow a structured investigation.

**Forecast Performance Investigation**

1. **Identify the error.** Determine which products, customers, periods, and planning horizons have the largest errors.
2. **Determine the direction.** Identify whether the error is overforecasting or underforecasting.
3. **Check the historical data.** Validate actual demand, shipments, cancellations, backorders, and adjustments.
4. **Review forecasting assumptions.** Check statistical forecasts, sales adjustments, customer inputs, and market information.
5. **Identify the root cause.** Determine whether the problem comes from data, methodology, assumptions, customer behavior, or process execution.
6. **Recommend corrective actions.** Assign specific actions to the responsible departments.
7. **Monitor the next cycle.** Check whether the corrective action actually improves forecasting performance.

---

# 6. Formulas and Calculations

Now, let's consolidate the formulas into one reference section.

This is useful kapag nagbu-build ka ng Excel reports, forecasting dashboards, or S&OP KPI presentations.

## 6.1 Formula Reference

| Metric | Formula |
|---|---|
| Forecast Error | \(A-F\) |
| Absolute Error | \(|A-F|\) |
| MAD | \(\frac{\sum|A-F|}{n}\) |
| MAPE | \(\frac{1}{n}\sum|\frac{A-F}{A}|\times100\) |
| WAPE | \(\frac{\sum|A-F|}{\sum A}\times100\) |
| MSE | \(\frac{\sum(A-F)^2}{n}\) |
| RMSE | \(\sqrt{MSE}\) |
| CFE | \(\sum(A-F)\) |
| MFE | \(\frac{CFE}{n}\) |
| Forecast Bias % | \(\frac{CFE}{\sum A}\times100\) |

Where:

- \(A\) = Actual demand in units.
- \(F\) = Forecast demand in units.
- \(n\) = Number of periods.
- \(E\) = Signed forecast error.
- \(AE\) = Absolute forecast error.

## 6.2 Excel Application

Let's assume your Excel worksheet uses this structure:

| Column | Contents |
|---|---|
| A | Month |
| B | Actual Demand |
| C | Forecast Demand |
| D | Forecast Error |
| E | Absolute Error |
| F | Squared Error |
| G | Absolute Percentage Error |

For row 2, use the following formulas:

| Column | Excel Formula | Purpose |
|---|---|---|
| D2 | `=B2-C2` | Forecast Error |
| E2 | `=ABS(D2)` | Absolute Error |
| F2 | `=D2^2` | Squared Error |
| G2 | `=IF(B2=0,"",E2/B2)` | Absolute Percentage Error |

Copy the formulas down to the remaining months.

Assuming your data occupies rows 2 to 7:

| KPI | Excel Formula |
|---|---|
| MAD | `=AVERAGE(E2:E7)` |
| MAPE | `=AVERAGE(G2:G7)*100` |
| WAPE | `=SUM(E2:E7)/SUM(B2:B7)*100` |
| MSE | `=AVERAGE(F2:F7)` |
| RMSE | `=SQRT(AVERAGE(F2:F7))` |
| CFE | `=SUM(D2:D7)` |
| MFE | `=AVERAGE(D2:D7)` |
| Bias % | `=SUM(D2:D7)/SUM(B2:B7)*100` |

**Excel caution:**

The MAPE formula above excludes zero-actual periods by returning blank. However, you should not simply ignore those periods without investigating them. Document how zero-demand periods are treated in your company's KPI policy.

For WAPE and Bias %, check that total actual demand is not zero.

## 6.3 Important Calculation Considerations in Actual S&OP

May ilang bagay na dapat bantayan bago mag-report ng forecast accuracy.

**1. Use the correct forecast version.**

Example:

- January forecast was prepared in December.
- Actual January demand is available in February.

Dapat ang ikumpara mo ay ang forecast that was available before January demand occurred, not a forecast revised after actual results became known.

Otherwise, misleading ang KPI.

**2. Use a consistent forecast horizon.**

For example, compare:

- One-month-ahead forecasts with actual demand.
- Three-month-ahead forecasts with actual demand.

Huwag basta pagsamahin ang iba't ibang forecast horizons dahil maaaring magkaiba ang forecasting difficulty.

**3. Use the same level of aggregation.**

If the forecast is measured in units per SKU, the actual data must also be measured in units per SKU.

**4. Avoid mixing demand and shipments.**

Determine whether the business measures actual customer demand, customer orders, or shipments. They are not always the same.

**5. Be careful with aggregation.**

Suppose:

- Product A is overforecasted by 500 units.
- Product B is underforecasted by 500 units.

At aggregate level, the net error is zero.

But both products have planning errors.

This is called an aggregation or netting effect. It is one reason why an analyst should examine performance at SKU, product-family, and total business levels.

## 6.4 Forecast Accuracy at Different Aggregation Levels

| Level | Example | Why it matters |
|---|---|---|
| SKU Level | Specific MLCC model | Identifies product-specific problems |
| Product-Family Level | MLCC products under one family | Evaluates broader product demand |
| Business Level | Total electronic components demand | Supports management-level planning |

A company might have good aggregate WAPE but poor SKU-level performance.

For example, overforecasting one SKU may offset underforecasting another.

**Professional insight:** Never rely on aggregate accuracy alone when making production and material decisions. Inventory is maintained at specific product and component levels, not just at total business level.

---

# 7. Business Perspective and Decision-Making

Now, let's move from calculating KPIs to using them as an S&OP Analyst.

This is where you transition from simply reporting numbers to providing business insights.

## 7.1 Monitoring Forecast Performance

An S&OP Analyst should regularly monitor:

- Forecast accuracy by SKU.
- Forecast accuracy by product family.
- Forecast accuracy by customer.
- Forecast accuracy by planning horizon.
- Forecast bias by product and business unit.
- Trends in forecast errors over time.

The goal is to identify recurring problems rather than just report the latest monthly score.

For example:

| KPI | January | February | March |
|---|---:|---:|---:|
| WAPE | 8% | 12% | 16% |
| Bias % | -2% | -5% | -9% |

Using our convention, the increasingly negative bias indicates worsening overforecasting.

Possible interpretation:

- The company may be consistently planning higher demand than actual.
- Sales adjustments may be too optimistic.
- Customer demand may be declining.
- Product lifecycle assumptions may be outdated.

An analyst should investigate before concluding which cause is responsible.

## 7.2 Identifying Recurring Forecast Errors

Let's say you notice that one product family has consistently high WAPE.

Instead of simply reporting:

"Product Family A has poor forecast accuracy."

A better analysis would be:

"Product Family A has consistently higher forecast errors over the last three months. The largest deviations are concentrated in two SKUs, particularly during periods with unconfirmed customer demand adjustments. Further investigation is recommended to validate the sales assumptions and determine whether the current forecasting method reflects actual demand behavior."

Notice the difference?

The second statement includes:

1. Observation.
2. Identification of the problem.
3. Possible explanation.
4. Recommended investigation.

That is the expected direction of professional S&OP analysis.

## 7.3 Investigating Forecast Bias

Let's assume the company has a recurring overforecasting problem.

The analyst should ask:

- Are Sales adjustments consistently increasing the statistical forecast?
- Are customer orders being treated as confirmed when they are only estimates?
- Are promotions being carried forward into future months?
- Are outdated forecasts being used?
- Are customer demand assumptions still valid?
- Are actual demand records complete?

The objective is to identify the source of the bias.

Hindi automatic solution ang pag-reduce ng forecast by 10%.

You need to understand why the forecast is 10% too high in the first place.

## 7.4 Communicating Results to Management

Management does not necessarily need to see every calculation.

They need to understand the business implication.

A useful reporting structure is:

| Reporting Component | What to Communicate |
|---|---|
| Performance | Current WAPE, MAD, and Bias % |
| Trend | Improving or deteriorating performance |
| Problem Area | Products or customers with significant errors |
| Root Cause | Identified or suspected causes |
| Business Impact | Inventory, capacity, service, or cost implications |
| Corrective Action | Proposed improvement |
| Ownership | Responsible team or department |
| Follow-up | When the action will be reviewed |

### Example Management Commentary

**Demand Forecast Performance – Illustrative**

The product family recorded a WAPE of 10.77% during the six-month evaluation period, with a cumulative forecast error of +100 units.

This indicates a relatively small net underforecasting position despite a higher cumulative absolute forecast error of 700 units.

The analysis shows that forecast errors occurred in both directions, suggesting that net bias alone does not adequately represent the overall forecasting performance.

**Recommended actions:**

- Investigate February's higher forecast deviation.
- Review Sales adjustments and customer demand assumptions.
- Validate whether actual demand was affected by supply constraints.
- Continue monitoring SKU-level WAPE and cumulative forecast error.

## 7.5 How Forecast Performance Improves the Demand Review

The Demand Review should not only discuss the next forecast.

It should also learn from previous forecast performance.

For example:

| Previous Performance | Demand Review Discussion |
|---|---|
| Persistent overforecasting | Review optimistic demand assumptions |
| Persistent underforecasting | Investigate missing demand signals |
| High WAPE | Identify products with significant errors |
| High MAPE but low WAPE | Check whether low-volume products are creating disproportionate percentage errors |
| Large RMSE | Investigate unusually large forecasting misses |
| High SKU-level errors but good aggregate WAPE | Review product-level demand allocation |

The results help the Demand Planning team decide whether to:

- Adjust the forecasting methodology.
- Improve customer collaboration.
- Validate sales input.
- Improve historical data quality.
- Change product lifecycle assumptions.
- Establish additional forecast review controls.

## 7.6 Level 3: Professional Analytical Thinking

Let's examine a more realistic situation.

An electronic components manufacturer reports:

- Overall WAPE: 8%.
- Overall Bias: +1%.
- Product Family A WAPE: 25%.
- Product Family B WAPE: 5%.
- Product Family C WAPE: 4%.

At first glance, the overall WAPE looks reasonable.

However, Product Family A has significantly higher errors.

Suppose Product Family A also has high customer service requirements and long raw material lead times.

An analyst should not immediately recommend changing the entire company's forecasting methodology.

Instead:

1. Investigate the SKUs under Product Family A.
2. Identify which customers are driving demand volatility.
3. Compare statistical forecasts with Sales-adjusted forecasts.
4. Check customer orders against historical demand.
5. Investigate whether supply shortages distorted actual shipments.
6. Assess the inventory and service implications.
7. Recommend targeted improvements.

**The professional mindset:**

A KPI tells you where to look. Root cause analysis tells you what to do.

That distinction separates KPI reporting from business analysis.

---

# 8. Key Takeaways

Let's summarize the most important concepts from this lesson.

## 8.1 Concepts You Must Remember

| Concept | What You Should Remember |
|---|---|
| Forecast Accuracy | How close the forecast is to actual demand |
| Forecast Error | Difference between actual and forecast demand |
| Absolute Error | Error magnitude without direction |
| Overforecasting | Forecast is higher than actual demand |
| Underforecasting | Forecast is lower than actual demand |
| Forecast Bias | Consistent tendency to overforecast or underforecast |
| CFE | Sum of signed errors |
| MFE | Average signed error |
| Bias % | Signed cumulative error relative to actual demand |

## 8.2 Five Accuracy Metrics

- MAD: Average error in units.
- MAPE: Average percentage error across periods.
- WAPE: Total absolute error as a percentage of total actual demand.
- MSE: Average squared error.
- RMSE: Square root of MSE, expressed in original units.

## 8.3 Five Critical Lessons

**1. Accuracy and Bias are different.**

A forecast can have low bias but poor accuracy.

**2. Forecast errors are unavoidable.**

The goal is to understand, measure, and manage them.

**3. Positive and negative errors must be interpreted correctly.**

Under our Actual minus Forecast convention:
- Positive = Underforecasting.
- Negative = Overforecasting.

**4. Aggregated metrics can hide SKU-level problems.**

Always investigate the appropriate level of detail.

**5. A good S&OP Analyst does more than calculate KPIs.**

The analyst identifies problems, investigates causes, evaluates business consequences, and recommends corrective actions.

## 8.4 What You Should Be Able to Do Before Proceeding

**Topic 3.7 Learning Competencies**

- Explain forecast accuracy and forecast reliability.
- Calculate forecast errors and absolute errors.
- Differentiate overforecasting from underforecasting.
- Calculate MAD, MAPE, WAPE, MSE, and RMSE.
- Calculate CFE, MFE, and Forecast Bias Percentage.
- Interpret accuracy and bias results.
- Identify common causes of poor forecast performance.
- Recommend corrective actions based on forecast performance.

---

# 9. Knowledge Check and Exercises

Time to test your understanding.

This assessment will progress through three learning levels. Huwag muna magmadali sa numerical calculations. Ang objective ay maintindihan mo rin kung bakit ganoon ang result at ano ang ibig sabihin nito sa business.

**I will not reveal the answers yet.** Once you submit your answers, I will evaluate your calculations, reasoning, and business recommendations.

## Level 1 – Understanding

*Test your fundamental understanding.*

**Question 1.** Explain the difference between Forecast Accuracy and Forecast Bias using your own words. Give one manufacturing example for each.

**Question 2.** A company has the following results:

- Forecast demand: 10,000 units.
- Actual demand: 8,500 units.

Identify:
- Forecast error.
- Whether the company overforecasted or underforecasted.
- Possible operational consequences.

**Question 3.** A company has zero cumulative forecast error after six months.

Does this automatically mean that its forecast accuracy is excellent? Explain why or why not.

**Question 4.** Differentiate MAPE and WAPE. Why might WAPE be more appropriate for reporting the overall performance of a product family?

## Level 2 – Technical Application

*Perform the calculations yourself.*

### Exercise 1: Forecast Accuracy Calculation

An electronic components manufacturer has the following monthly demand data:

| Month | Actual Demand | Forecast Demand |
|---|---:|---:|
| January | 2,000 | 1,800 |
| February | 2,500 | 2,700 |
| March | 1,800 | 2,000 |
| April | 2,200 | 2,100 |
| May | 3,000 | 2,700 |
| June | 2,500 | 2,600 |

Calculate the following:

1. Forecast Error per month.
2. Absolute Error per month.
3. MAD.
4. MAPE.
5. WAPE.
6. MSE.
7. RMSE.

Show your formulas and calculations.

### Exercise 2: Forecast Bias Calculation

Using the same dataset, calculate:

1. Cumulative Forecast Error (CFE).
2. Mean Forecast Error (MFE).
3. Forecast Bias Percentage.

Then answer:

- Is the company overforecasting or underforecasting overall?
- Which month has the largest forecast error?
- Does the number of overforecasted months matter more than the magnitude of errors? Explain.

## Level 3 – Professional Analysis

*Think like an actual S&OP Analyst.*

### Exercise 3: Business Situation

You are an S&OP Analyst supporting an electronic components manufacturing business.

During the monthly Demand Review, you receive this report:

| KPI | Previous Month | Current Month |
|---|---:|---:|
| WAPE | 8% | 15% |
| Forecast Bias | -3% | -10% |
| Finished Goods Inventory | 12,000 | 18,000 |
| Customer Demand | 10,000 | 8,000 |

Assume the bias uses the Actual minus Forecast convention.

Answer the following:

1. What happened to forecast accuracy?
2. What does the negative bias indicate?
3. What could explain the increase in finished goods inventory?
4. What questions would you ask the Sales and Demand Planning teams?
5. What corrective actions would you recommend?

### Exercise 4: Management Recommendation

The management team asks:

"Our overall forecast accuracy is acceptable, so why are we still experiencing inventory problems?"

Prepare a short analytical response explaining:

- Why aggregate forecast accuracy may hide SKU-level problems.
- How forecast bias contributes to excess or insufficient inventory.
- What additional KPIs or analyses you would recommend.

## How to Submit Your Answers

You can answer progressively. Hindi kailangang isang bagsakan lahat.

**Knowledge Check Submission**

Choose a level:

- Level 1 – Understanding: Answer Questions 1–4 under Level 1.
- Level 2 – Technical Application: Submit your calculations for Exercises 1 and 2, including your formulas and intermediate results.
- Level 3 – Professional Analysis: Submit your analysis and recommendations for Exercises 3 and 4.

### How I will evaluate your answers

I will assess four areas:

| Evaluation Area | What I will check |
|---|---|
| Conceptual Understanding | Do you understand the concepts? |
| Technical Accuracy | Are your formulas and calculations correct? |
| Data Interpretation | Can you explain what the numbers mean? |
| Business Analysis | Can you recommend appropriate actions? |

Hindi lang final answer ang iche-check natin. Ipapakita ko rin kung saan nagkaroon ng calculation error, bakit mali ang interpretation kung mayroon, at paano ito gagawin correctly.

---

## Lesson Completion

**Topic 3.7 Lecture Completed**

**Module 3 – Demand Planning**

You have now covered the following progression:

1. Understanding Forecast Accuracy
2. Understanding Forecast Error
3. Forecast Accuracy Measurement
4. Understanding Forecast Bias
5. Measuring Forecast Bias
6. Forecast Accuracy vs. Forecast Bias
7. Manufacturing Business Application
8. Root Cause Analysis and Forecast Improvement
9. Business Perspective and Decision-Making

**My recommendation:** Unahin mong sagutan ang Level 1, then proceed to Level 2. Particularly important na ma-master mo ang MAD, MAPE, WAPE, CFE, and Bias % dahil magiging useful ang mga ito sa actual S&OP KPI reporting.

Hindi muna tayo lilipat sa Module 4. Tatapusin muna natin ang Topic 3.7 assessment at clarification ng mga concepts na kailangan pang palakasin.
