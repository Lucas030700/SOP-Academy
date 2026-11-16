---
module: 9
topic: "9.6"
title: "KPI Analysis and Interpretation"
language: "Taglish"
status: "complete"
---

# Module 9 – KPI Management and Performance Measurement
## Topic 9.6: KPI Analysis and Interpretation

**Main learning objective:** Matutunan mong hindi lang mag-report ng KPI results, kundi mag-isip bilang isang S&OP Analyst na kayang mag-identify ng business problems, mag-investigate ng root causes, at mag-recommend ng actions based on data.

---

# 1. Topic Overview

## 1.1 What will we discuss?

Sa previous topics, pinag-aralan natin ang iba't ibang KPIs na ginagamit para sukatin ang performance ng isang organization.

For example:

| Previous topic | What it measures |
|---|---|
| 9.1 – KPI Fundamentals | What KPIs are and why they matter |
| 9.2 – Demand KPIs | Demand and forecast performance |
| 9.3 – Supply KPIs | Production and supply performance |
| 9.4 – Inventory KPIs | Inventory efficiency and availability |
| 9.5 – Financial KPIs | Revenue, costs, and profitability |
| **9.6 – KPI Analysis and Interpretation** | **What the KPI results mean and what actions should be taken** |

Notice the progression.

Topics 9.1–9.5 taught us how to measure business performance.

Topic 9.6 teaches us how to understand that performance.

For example, imagine this monthly KPI report:

| KPI | Target | Actual |
|---|---:|---:|
| Forecast Accuracy | 90% | 72% |
| Production Attainment | 95% | 82% |
| Inventory Turnover | 8x | 5x |
| On-Time Delivery | 98% | 88% |
| Operating Margin | 15% | 11% |

A basic reporting approach would simply state that five KPIs missed their targets.

But an S&OP Analyst should ask:

1. Why is forecast accuracy only 72%?
2. Did poor forecasting cause production instability?
3. Did production instability contribute to late deliveries?
4. Why is inventory turnover declining despite customer shortages?
5. Are we holding too much of the wrong inventory?
6. How much profitability are we losing?
7. What decisions should management make?

**That is the difference between KPI reporting and KPI analysis.**

## 1.2 Why is this topic important?

An organization can have thousands of KPI measurements, but numbers alone do not improve business performance.

Management needs information that supports decisions.

For example:

- Should we increase production capacity?
- Should we reduce inventory?
- Should we expedite materials?
- Should we adjust the demand forecast?
- Should we prioritize certain customers?
- Should we change production allocation?
- Should we accept additional costs to protect customer service?

KPI analysis connects operational performance to these decisions.

## 1.3 Connection to the succeeding topic

Topic 9.6 establishes the analytical foundation for:

**Topic 9.7 – Data Analytics for S&OP**

Before learning advanced data analytics, you must first understand how to interpret the information.

Remember:

- Data Analytics helps us discover patterns and relationships.
- KPI Analysis helps us understand their business meaning.
- S&OP Decision-Making converts those insights into actions.

---

# 2. Layman's Explanation

## 2.1 Monitoring vs. Analysis vs. Interpretation

Let's use a simple manufacturing example.

Imagine that you are monitoring a production line manufacturing electronic components.

Your target is to produce 10,000 units per day.

Actual production is only 8,000 units.

There are three different activities involved.

### 1. MONITORING: What happened?

Production was 8,000 units against a target of 10,000 units.

Production attainment:

**80%**

### 2. ANALYSIS: How big is the problem, and where did it happen?

We investigate production records and discover that:

- Monday: 10,000 units
- Tuesday: 9,500 units
- Wednesday: 7,000 units
- Thursday: 6,500 units
- Friday: 7,000 units

We notice that production started declining on Wednesday.

### 3. INTERPRETATION: Why does it matter, and what should we do?

Further investigation reveals that a critical raw material was unavailable starting Wednesday.

Recommendation:

- Investigate supplier delivery performance.
- Review material availability.
- Establish an escalation process for critical materials.
- Reassess the production schedule.

The three activities are connected, but they are not interchangeable.

| Activity | Main question |
|---|---|
| Monitoring | What happened? |
| Analysis | How, where, and how much did it happen? |
| Interpretation | Why does it matter, and what should we do? |

### Important distinction

Hindi automatic na kapag bumaba ang KPI, alam na natin ang dahilan.

For example:

- Low production attainment is a performance result.
- Material shortage is a possible cause.
- Delayed supplier delivery is a possible underlying cause.

Kailangan pa rin nating mag-validate ng evidence bago mag-conclude.

## 2.2 Why business context matters

Imagine two manufacturing plants.

| KPI | Plant A | Plant B |
|---|---:|---:|
| Production Attainment | 90% | 90% |
| Target | 95% | 95% |
| Actual production | 9,000 | 9,000 |

Pareho ang KPI result nila.

Pero may importanteng difference:

- Plant A experienced an unexpected equipment breakdown.
- Plant B deliberately reduced production because customer demand declined.

Same KPI. Different business situations. Different recommended actions.

For Plant A, we might investigate equipment reliability.

For Plant B, we might investigate demand planning and production scheduling.

**A KPI result tells us what happened. Business context helps us understand its significance.**

---

# 3. Technical Explanation

## 3.1 Actual vs. Target, Actual vs. Forecast, and Actual vs. Previous Period

These are three important comparison methods in KPI analysis.

### A. Actual vs. Target

Compares actual performance against the organization's desired performance.

Example:

- Production attainment target = 95%
- Actual production attainment = 88%

The business is 7 percentage points below its target.

**Purpose:** Determine whether the organization achieved its performance objectives.

### B. Actual vs. Forecast

Compares actual business results against expected results.

Example:

- Forecast demand = 100,000 units
- Actual demand = 120,000 units

Actual demand exceeded the forecast by 20,000 units.

**Purpose:** Determine whether actual business conditions differed from expectations.

This is particularly important in S&OP because forecast deviations can affect procurement, production, inventory, and financial plans.

### C. Actual vs. Previous Period

Compares current performance with historical performance.

Example:

- Previous month's production attainment = 92%
- Current month's production attainment = 85%

Production attainment declined by 7 percentage points.

**Purpose:** Determine whether performance is improving, declining, or remaining stable.

### Comparison summary

| Comparison | Main question |
|---|---|
| Actual vs. Target | Are we achieving our objectives? |
| Actual vs. Forecast | Were our expectations accurate? |
| Actual vs. Previous Period | Is performance improving or deteriorating? |

**Professional insight:** You should not rely on only one comparison.

For example, production attainment might improve from 85% to 90%, but the target is still 95%.

Performance improved, but the business objective remains unmet.

## 3.2 Favorable vs. Unfavorable Performance

One common mistake in KPI analysis is assuming that positive variance is always good and negative variance is always bad.

Hindi ganoon kasimple.

It depends on the KPI's definition and business objective.

Consider:

| KPI | Target | Actual | Interpretation |
|---|---:|---:|---|
| Revenue | ₱10M | ₱12M | Favorable |
| Production Cost | ₱5M | ₱6M | Unfavorable |
| Inventory | ₱8M | ₱12M | Potentially unfavorable |
| On-Time Delivery | 95% | 90% | Unfavorable |
| Defect Rate | 2% | 1% | Favorable |

Notice:

- Higher revenue is generally favorable.
- Higher production cost is generally unfavorable.
- Higher inventory is not automatically favorable because it may indicate excess stocks.
- Lower defect rates are generally favorable.

Some KPIs require additional context.

For example, higher inventory may be justified before a seasonal demand peak. However, if demand has declined and inventory continues increasing, that could indicate excess stock exposure.

**Rule:** Interpret the direction of a KPI based on its intended business outcome, not merely its numerical direction.

---

# 4. Detailed Discussion

## 4.1 Variance Analysis

Variance analysis is one of the most frequently used techniques in business performance evaluation.

It measures the difference between two values, such as actual performance and target performance.

There are two basic measurements:

1. Absolute variance
2. Percentage variance

### A. Absolute Variance

Absolute variance measures the numerical difference between actual and target values.

Formula:

\[
\text{Absolute Variance} = Actual - Target
\]

Example:

A manufacturing plant has a monthly production target of 100,000 units.

Actual production is 85,000 units.

\[
85,000-100,000=-15,000
\]

**Production variance: -15,000 units**

Production was 15,000 units below target.

The negative sign indicates a shortfall because actual production is lower than the target.

### B. Percentage Variance

Percentage variance expresses the difference relative to the comparison baseline.

Formula:

\[
\text{Variance \%}=
\frac{Actual-Target}{Target}\times100
\]

Using the previous example:

\[
=\frac{85,000-100,000}{100,000}\times100
\]

\[
=-15\%
\]

Interpretation:

Production was 15% below the target.

### C. Understanding percentage points vs. percentage variance

Important ito, especially when analyzing percentage-based KPIs.

Suppose:

- Target forecast accuracy = 90%
- Actual forecast accuracy = 75%

The difference is:

\[
75\%-90\%=-15\text{ percentage points}
\]

But the relative percentage variance is:

\[
\frac{75\%-90\%}{90\%}\times100=-16.67\%
\]

Therefore:

| Measurement | Result |
|---|---:|
| Absolute difference | -15 percentage points |
| Relative percentage variance | -16.67% |

Hindi pareho ang percentage points at percentage variance.

This distinction matters when presenting KPIs to management.

### D. Positive vs. negative variance

Let's use a production example:

| Scenario | Target | Actual | Variance |
|---|---:|---:|---:|
| A | 100,000 | 110,000 | +10,000 |
| B | 100,000 | 90,000 | -10,000 |

For production volume, positive variance generally indicates production above target.

However, that doesn't automatically mean good performance.

If production exceeded demand, the additional production may have created excess inventory and additional holding costs.

Likewise, negative production variance might be acceptable if production was deliberately reduced due to lower demand.

**Analyst mindset:** A variance is a signal for investigation, not automatically a business conclusion.

## 4.2 Identifying Significant Deviations

Hindi lahat ng variance ay nangangailangan ng management escalation.

Imagine a company tracking 200 KPIs.

Some indicators might change slightly every month because of normal operational variation.

If every small deviation is escalated, management will receive too many alerts.

This creates what we call *exception overload*.

Instead, organizations establish variance thresholds.

### A. Variance Thresholds

A variance threshold defines the level of deviation that requires attention or investigation.

Illustrative example:

| Variance from target | Classification | Action |
|---|---|---|
| Within ±2% | Normal | Monitor |
| More than ±2% to ±5% | Moderate | Investigate |
| More than ±5% | Significant | Escalate |

These thresholds are illustrative only. Actual limits depend on business requirements, KPI characteristics, and management policy.

### B. Exception Reporting

Exception reporting focuses on KPIs that exceed predefined thresholds.

Example:

| KPI | Target | Actual | Variance | Status |
|---|---:|---:|---:|---|
| Forecast Accuracy | 90% | 88% | -2 pp | Monitor |
| Production Attainment | 95% | 82% | -13 pp | Escalate |
| Inventory Turnover | 8x | 5x | -37.5% | Escalate |
| On-Time Delivery | 98% | 96% | -2 pp | Monitor |

Instead of presenting every KPI with equal attention, the analyst highlights the most significant exceptions.

### C. Absolute and relative significance

Consider two products:

| Product | Target production | Actual | Shortfall |
|---|---:|---:|---:|
| Product A | 100,000 | 90,000 | 10,000 |
| Product B | 1,000 | 500 | 500 |

Product A has the larger absolute shortfall.

Product B has the larger relative shortfall.

- Product A: 10% below target.
- Product B: 50% below target.

Which is more important?

It depends on the business impact.

If Product B is a critical component required for a high-value customer order, its 50% shortfall could be more urgent.

A professional analyst considers:

- Magnitude of deviation
- Relative deviation
- Financial impact
- Customer impact
- Operational risk
- Duration and recurrence

## 4.3 Trend and Performance Analysis

Variance analysis tells us how much performance differs from a comparison value.

Trend analysis tells us how performance changes over time.

This distinction is important.

A KPI can meet its target this month but still show a deteriorating trend.

### A. Historical Trend Analysis

Example: Monthly forecast accuracy.

| Month | Forecast Accuracy |
|---|---:|
| January | 92% |
| February | 90% |
| March | 89% |
| April | 85% |
| May | 81% |
| June | 76% |

The trend shows a sustained decline.

What should an analyst observe?

1. Forecast accuracy has declined for six consecutive months.
2. The decline is not limited to one reporting period.
3. The deterioration may indicate a persistent forecasting problem.
4. Further investigation is required to determine which products, customers, or demand categories are contributing to the decline.

The important point is that we are examining the pattern, not just June's result.

### B. Month-over-Month (MoM)

MoM compares the current month against the immediately preceding month.

Formula:

\[
MoM\ Change=
\frac{Current-Previous}{Previous}\times100
\]

Example:

- May inventory = 50,000 units
- June inventory = 60,000 units

\[
=\frac{60,000-50,000}{50,000}\times100
\]

\[
=20\%
\]

Inventory increased by 20% compared with the previous month.

**Business interpretation:** The company may be accumulating inventory faster than it is consuming or shipping products.

But we still need to determine whether the increase was planned or unplanned.

### C. Year-over-Year (YoY)

YoY compares a reporting period with the same period in the previous year.

Formula:

\[
YoY\ Change=
\frac{Current\ Period-Prior\ Year\ Period}
{Prior\ Year\ Period}\times100
\]

Example:

- June 2025 revenue = ₱10 million
- June 2026 revenue = ₱12 million

\[
=\frac{12-10}{10}\times100
\]

\[
=20\%
\]

Revenue increased by 20% year-over-year.

Why use YoY?

Because some industries experience seasonality.

For example, comparing December against November might be misleading if December is normally a high-demand month.

Comparing December this year against December last year provides a more comparable reference.

### D. Temporary vs. Persistent Problems

Consider two scenarios.

**Scenario 1: Temporary deviation**

Production attainment:

- January: 95%
- February: 94%
- March: 75%
- April: 95%
- May: 96%

March had a major equipment breakdown, but performance recovered afterward.

This may be an isolated event.

**Scenario 2: Persistent deterioration**

Production attainment:

- January: 96%
- February: 93%
- March: 90%
- April: 87%
- May: 84%

This indicates a sustained downward trend.

Possible underlying issues:

- Increasing equipment downtime
- Growing material shortages
- Capacity constraints
- Ineffective production scheduling
- Increasing product complexity

A single-period variance and a persistent trend should not be treated identically.

## 4.4 Relationships Between KPIs

This is one of the most important sections of Topic 9.6.

In an actual manufacturing organization, KPIs rarely operate independently.

A change in one area can affect several other areas.

For example:

Poor forecast accuracy can contribute to poor inventory positioning, production instability, and declining customer service.

Let's examine the relationships.

### A. Forecast Accuracy and Inventory Levels

Consider a company manufacturing electronic components.

The demand forecast is 100,000 units.

Actual demand becomes 60,000 units.

The company has already purchased materials and produced based on the original forecast.

Possible consequences:

1. Finished goods inventory increases.
2. Raw material inventory may remain unused.
3. Working capital becomes tied up.
4. Inventory holding costs increase.
5. Obsolescence risk increases.

Now consider the opposite situation.

Forecast demand is 60,000 units, but actual demand becomes 100,000 units.

Possible consequences:

1. Inventory becomes insufficient.
2. Production may not have enough materials.
3. Customer orders may be delayed.
4. Expediting costs may increase.
5. Customer service may deteriorate.

**Demand forecasting relationship**

**Forecast higher than actual demand**

Excess inventory → Higher holding costs → Potential obsolescence

**Forecast lower than actual demand**

Inventory shortage → Production disruption → Late deliveries

Important: Forecast error does not automatically cause inventory problems. Inventory policy, lead time, capacity flexibility, and existing stock also influence the outcome.

### B. Production Attainment and Customer Service

Production attainment measures whether production achieved its planned output.

Customer service indicators, such as OTIF (On-Time In-Full), measure whether customer orders were delivered on time and in the required quantity.

Possible relationship:

\[
\text{Low Production Attainment}
\rightarrow
\text{Supply Shortage}
\rightarrow
\text{Delayed Orders}
\rightarrow
\text{Lower OTIF}
\]

Example:

- Planned production = 100,000 units
- Actual production = 80,000 units
- Customer demand = 95,000 units

Production attainment:

\[
\frac{80,000}{100,000}\times100=80\%
\]

If there is no sufficient existing inventory, the business could face a 15,000-unit supply gap.

However, production attainment alone cannot determine OTIF.

You must also consider:

- Beginning inventory
- Available finished goods
- Customer order priorities
- Distribution capacity
- Delivery schedules

### C. Capacity Utilization and Production Costs

Capacity utilization measures how much of the available production capacity is being used.

Formula:

\[
Capacity\ Utilization=
\frac{Actual\ Output}{Available\ Capacity}\times100
\]

Example:

- Available capacity = 100,000 units
- Actual production = 90,000 units

\[
=\frac{90,000}{100,000}\times100=90\%
\]

A higher utilization rate can improve fixed-cost absorption because fixed manufacturing costs are distributed across more units.

But very high utilization can create problems:

- Less room for unexpected demand
- Increased overtime
- More equipment stress
- Reduced maintenance windows
- Greater risk of production bottlenecks

A utilization rate of 100% is not automatically the ideal operating condition.

Sometimes operating at 85%–90% provides flexibility to absorb unexpected demand or operational disruptions. This is an illustrative planning consideration, not a universal benchmark.

### D. Inventory Turnover and Working Capital

Inventory turnover measures how frequently inventory is sold or consumed over a period.

Formula:

\[
Inventory\ Turnover=
\frac{COGS}{Average\ Inventory}
\]

Where:

- COGS = Cost of Goods Sold
- Average Inventory = Average inventory value over the period

Example:

- Annual COGS = ₱120 million
- Average inventory = ₱20 million

\[
=\frac{120}{20}=6\ times
\]

The company turns over its inventory approximately six times per year.

A lower turnover can indicate:

- Excess inventory
- Slow-moving products
- Declining demand
- Poor inventory planning

Higher turnover generally means less capital is tied up in inventory, but excessively low inventory can increase shortage risk.

**Important:** Inventory turnover should be evaluated alongside customer service and material availability.

### E. Supplier Performance and Production Reliability

Suppose a critical supplier has an on-time delivery rate of 70%.

The factory depends on that supplier for essential raw materials.

Possible consequences:

1. Materials arrive late.
2. Production schedules are disrupted.
3. Machines may experience idle time.
4. Production attainment declines.
5. Customer deliveries may become late.

However, supplier OTD (On-Time Delivery) alone may not fully explain the problem.

Other factors include:

- Material quality
- Quantity accuracy
- Supplier lead-time variability
- Incoming inspection delays
- Internal receiving processes

### F. Revenue Growth and Profitability

Revenue measures sales generated by the business.

Profitability measures how much of that revenue remains after costs.

A company can experience increasing revenue but declining profitability.

Example:

| Metric | Previous year | Current year |
|---|---:|---:|
| Revenue | ₱100M | ₱120M |
| Total operating costs | ₱80M | ₱105M |
| Operating profit | ₱20M | ₱15M |
| Operating margin | 20% | 12.5% |

Revenue increased by 20%.

But operating profit declined by 25%.

Why?

Operating costs increased faster than revenue.

Possible explanations:

- Higher material costs
- Increased overtime
- Expedited freight
- Production inefficiency
- Lower-margin product mix

**S&OP insight:** Revenue growth does not necessarily mean improved business performance.

## 4.5 KPI Trade-offs: Improving One KPI Can Damage Another

This is where professional-level analysis begins.

Sometimes management tries to improve one KPI without considering its impact on other KPIs.

This can create unintended consequences.

| Decision | KPI that may improve | KPI that may deteriorate |
|---|---|---|
| Increase safety stock | Customer service | Inventory carrying cost |
| Maximize production volume | Production attainment | Inventory levels |
| Reduce inventory aggressively | Working capital | Customer service |
| Maximize machine utilization | Capacity utilization | Maintenance flexibility |
| Expedite supplier deliveries | Material availability | Logistics cost |
| Produce large batches | Production efficiency | Inventory and responsiveness |
| Reduce selling prices | Sales volume | Profit margin |

### Example: Maximizing production attainment

Management wants production attainment to increase from 85% to 100%.

The production team responds by producing more than customer demand requires.

Result:

- Production attainment increases.
- Finished goods inventory increases.
- Storage costs increase.
- Working capital increases.
- Obsolescence risk increases.

The production KPI improves, but overall business performance may deteriorate.

This is called a KPI trade-off.

**Professional principle:** Do not optimize an individual KPI at the expense of the entire business.

S&OP aims to balance demand, supply, inventory, customer service, and financial objectives.

## 4.6 Root Cause Analysis

Now that we understand KPI deviations and relationships, the next question is:

**How do we determine why the problem happened?**

This is the purpose of Root Cause Analysis (RCA).

### A. Symptoms vs. Root Causes

Imagine that a manufacturing plant experiences declining production attainment.

| Observation | Classification |
|---|---|
| Production attainment declined | Symptom |
| Production experienced material shortages | Immediate contributing factor |
| Supplier deliveries were frequently late | Possible underlying cause |
| Supplier lead time was underestimated during planning | Potential systemic root cause |

The mistake is stopping at the first visible problem.

For example:

"Production attainment declined because of material shortages."

This may be correct, but it is incomplete.

Why were the materials unavailable?

Why were supplier deliveries late?

Why did planning not account for the longer lead time?

The investigation must continue until the organization identifies an actionable underlying cause supported by evidence.

### B. 5 Whys

The 5 Whys technique involves repeatedly asking why a problem occurred.

Let's use a manufacturing example.

**Problem: Production was delayed due to material shortages.**

1. **Why 1: Why was production delayed?**

   Because the required raw materials were unavailable.

2. **Why 2: Why were raw materials unavailable?**

   Because the supplier delivered them later than expected.

3. **Why 3: Why did the supplier deliver late?**

   Because the purchase order was released later than the required date.

4. **Why 4: Why was the purchase order released late?**

   Because the procurement plan used an outdated material lead time.

5. **Why 5: Why was the lead time outdated?**

   Because supplier lead-time changes were not regularly reviewed and incorporated into planning parameters.

**Potential systemic root cause:** Supplier lead-time parameters were not maintained through an effective review process.

Possible corrective actions:

- Review supplier lead-time data.
- Update planning parameters.
- Establish regular supplier performance reviews.
- Create escalation rules for critical materials.

Important: Five questions are not mandatory. Sometimes three are enough; sometimes more investigation is necessary.

The objective is not to reach exactly five questions. The objective is to identify the underlying cause.

### C. Fishbone Diagram (Ishikawa Diagram)

The Fishbone Diagram organizes possible causes into categories.

A manufacturing company experiencing low production attainment might investigate:

| Category | Possible causes |
|---|---|
| Manpower | Insufficient operators, skills gaps |
| Machine | Equipment breakdown, low machine availability |
| Method | Ineffective production scheduling |
| Material | Supplier delays, raw material shortages |
| Measurement | Incorrect production reporting |
| Environment | Temperature, humidity, facility conditions |

These categories are commonly referred to as the 6Ms.

**Fishbone analysis: Low production attainment**

- **Manpower:** Operator shortage; training gaps
- **Machine:** Equipment downtime; low availability
- **Method:** Poor scheduling; long changeovers
- **Material:** Supplier delays; material shortages
- **Measurement:** Incorrect data; reporting errors
- **Environment:** Temperature; facility conditions

Illustrative cause categories. Each suspected cause requires evidence and validation.

When should we use this?

When the problem has several possible contributing factors and we need to organize the investigation.

### D. Pareto Analysis

Pareto Analysis helps identify which categories contribute most significantly to a problem.

It is commonly associated with the 80/20 principle.

The principle suggests that a relatively small number of causes may account for a large proportion of the total problem.

However, 80/20 is a heuristic, not a guaranteed mathematical relationship.

Example:

A factory experienced 1,000 production-delay hours.

| Cause | Delay hours |
|---|---:|
| Material shortages | 450 |
| Equipment breakdown | 250 |
| Operator shortages | 150 |
| Quality issues | 100 |
| Other | 50 |
| **Total** | **1,000** |

Contribution formula:

\[
Contribution\%=
\frac{Cause\ Delay\ Hours}{Total\ Delay\ Hours}
\times100
\]

For material shortages:

\[
=\frac{450}{1,000}\times100=45\%
\]

Cumulative analysis:

| Cause | Hours | Contribution | Cumulative |
|---|---:|---:|---:|
| Material shortages | 450 | 45% | 45% |
| Equipment breakdown | 250 | 25% | 70% |
| Operator shortages | 150 | 15% | 85% |
| Quality issues | 100 | 10% | 95% |
| Other | 50 | 5% | 100% |

Interpretation:

Material shortages and equipment breakdowns contribute 70% of total delay hours.

Therefore, these two areas are logical starting points for improvement.

This does not mean the other causes are unimportant. It means the first two offer the largest potential impact based on the observed data.

### E. Avoiding conclusions based on KPI results alone

This is a critical professional skill.

Suppose:

- Inventory increased by 30%.
- Customer service declined by 10 percentage points.

Can we conclude that increasing inventory caused customer service to decline?

No.

In fact, both conditions may be happening simultaneously because the company has excess inventory of slow-moving products while critical fast-moving products are unavailable.

The issue may be poor inventory mix rather than total inventory quantity.

This brings us to another important distinction.

**Correlation vs. Causation**

- Correlation means two variables change together or show a statistical relationship.
- Causation means a change in one variable directly contributes to a change in another.

Example:

A company observes that overtime hours and production defects increase during the same months.

This indicates a possible relationship.

But we cannot immediately conclude that overtime caused the defects.

Other possible explanations include:

- Increased production demand
- Operator fatigue
- More complex product mix
- Equipment deterioration
- Reduced maintenance time

To establish causation, we need additional evidence, a logical mechanism, and appropriate investigation.

## 4.7 KPI Segmentation and Drill-Down

Imagine a manufacturing company with:

- 5 plants
- 20 product families
- 100 products
- 30 major customers
- 15 suppliers
- 10 production lines

The overall production attainment is 85%.

Is the entire organization performing poorly?

Not necessarily.

Maybe four plants are performing at 95%, while one plant is performing at 45%.

If we only look at the company-wide KPI, the major problem could remain hidden.

This is why we use segmentation and drill-down analysis.

### A. What is KPI Segmentation?

Segmentation means dividing a KPI into smaller categories to understand where performance differences occur.

Common segmentation dimensions:

| Dimension | Example |
|---|---|
| Product | Individual SKU or model |
| Product family | Product Group A, B, C |
| Customer | Customer 1, Customer 2 |
| Supplier | Supplier A, Supplier B |
| Plant | Plant 1, Plant 2 |
| Production line | Line 1, Line 2 |
| Region | North America, Asia, Europe |
| Time | Month, week, day |

### B. Aggregated vs. Detailed KPI Analysis

**Aggregated analysis**

Looks at total organizational performance.

Example:

Company-wide forecast accuracy = 82%.

**Detailed analysis**

Breaks down the same KPI into smaller categories.

| Product family | Forecast accuracy |
|---|---:|
| Family A | 95% |
| Family B | 92% |
| Family C | 70% |
| Family D | 65% |

Now we can see that Families C and D have much weaker forecast performance.

However, do not immediately assume they contribute equally to the company-wide gap.

We must also consider their demand volume and the organization's exact forecast accuracy calculation method.

### C. Drill-Down Analysis

A typical investigation follows this hierarchy:

1. **Company-wide KPI:** Forecast Accuracy = 82%.
2. **Product Family:** Identify the underperforming family.
3. **Individual Product:** Identify the products with the largest forecast errors.
4. **Customer / Demand Pattern:** Investigate customer ordering behavior.
5. **Root Cause:** Identify the actual reason for the deviation.

### D. Contribution to Overall Performance Gap

Let's say the total production shortfall is 20,000 units.

| Production line | Shortfall |
|---|---:|
| Line 1 | 2,000 |
| Line 2 | 3,000 |
| Line 3 | 12,000 |
| Line 4 | 3,000 |
| **Total** | **20,000** |

Line 3 contributes:

\[
\frac{12,000}{20,000}\times100=60\%
\]

Although Line 3 is only one of four production lines, it contributes 60% of the total shortfall.

This is where segmentation becomes valuable.

Instead of implementing corrective actions across all four lines, management can prioritize Line 3.

**Analyst principle:** Find where the problem is concentrated before deciding where to intervene.

---

# 5. Practical Examples and Applications

## 5.1 Manufacturing Example: Connecting Multiple KPIs

Let's use a simplified MLCC manufacturing scenario.

A factory manufactures several product families.

During the monthly S&OP review, the following results are observed:

| KPI | Target | Actual |
|---|---:|---:|
| Forecast Accuracy | 90% | 75% |
| Production Attainment | 95% | 82% |
| Material Availability | 98% | 85% |
| Inventory Turnover | 8x | 5x |
| On-Time Delivery | 98% | 88% |
| Operating Margin | 15% | 11% |

What can we initially conclude?

- Demand planning performance is below target.
- Production is not achieving its plan.
- Material availability is insufficient.
- Inventory efficiency has deteriorated.
- Customer delivery performance is poor.
- Profitability is declining.

But these results are not yet root causes.

We need to investigate how the indicators interact.

### Possible business relationship

1. **Poor Forecast Accuracy:** Actual demand differs significantly from planned demand.
2. **Inventory Imbalance:** Some products accumulate while other products experience shortages.
3. **Material Availability Problems:** Critical materials are not available at the required time.
4. **Production Delays:** Production schedules cannot be achieved.
5. **Customer Service Deterioration:** Orders are delayed or delivered incompletely.
6. **Financial Impact:** Expediting costs, excess inventory, and lower operating margins.

Illustrative causal hypothesis, not an established causal relationship. Each link must be verified using operational evidence.

## 5.2 From KPI Results to Business Recommendations

Consider the following findings from the investigation:

| Finding | Supporting evidence | Potential action |
|---|---|---|
| Forecast errors are concentrated in two product families | Historical demand data | Review forecasting assumptions |
| Supplier lead times are longer than planning parameters | Supplier delivery records | Update lead-time parameters |
| Production delays are concentrated on one line | Production downtime reports | Investigate bottleneck |
| Excess inventory exists in slow-moving products | Inventory aging report | Review replenishment and production plans |
| Expedited freight increased | Logistics cost records | Improve material planning and supplier coordination |

Notice the structure:

**KPI result → Investigation → Evidence → Business implication → Recommendation**

This is how an analyst should communicate findings.

---

# 6. Formulas and Calculations

Let's consolidate the most important calculations in this topic.

| Metric | Formula | Purpose |
|---|---|---|
| Absolute variance | Actual − Target | Measures numerical gap |
| Percentage variance | (Actual − Target) / Target × 100 | Measures relative gap |
| MoM change | (Current − Previous) / Previous × 100 | Measures monthly movement |
| YoY change | (Current − Prior Year) / Prior Year × 100 | Measures annual movement |
| Contribution % | Segment value / Total value × 100 | Identifies segment contribution |
| Capacity utilization | Actual output / Available capacity × 100 | Measures capacity usage |
| Inventory turnover | COGS / Average inventory | Measures inventory efficiency |
| Production attainment | Actual production / Planned production × 100 | Measures execution against plan |

### Worked Example: Integrated KPI Analysis

A manufacturing company has the following monthly data:

| Indicator | Value |
|---|---:|
| Production target | 120,000 units |
| Actual production | 102,000 units |
| Previous month production | 110,000 units |
| Planned demand | 115,000 units |
| Actual demand | 125,000 units |

**Step 1: Production variance**

\[
102,000-120,000=-18,000
\]

Production shortfall = 18,000 units.

**Step 2: Production variance percentage**

\[
\frac{-18,000}{120,000}\times100=-15\%
\]

Production was 15% below target.

**Step 3: Month-over-month production change**

\[
\frac{102,000-110,000}{110,000}\times100
=-7.27\%
\]

Production declined by 7.27% compared with the previous month.

**Step 4: Demand variance**

\[
125,000-115,000=10,000
\]

Actual demand exceeded planned demand by 10,000 units.

**Step 5: Demand variance percentage**

\[
\frac{10,000}{115,000}\times100=8.70\%
\]

Actual demand was 8.70% higher than planned.

### Business interpretation

We now have two simultaneous issues:

1. Production was below plan.
2. Actual demand was higher than planned.

This creates potential supply-demand pressure.

However, we cannot automatically conclude that customers experienced shortages.

We still need to check:

- Beginning finished goods inventory
- Available inventory
- Work-in-process inventory
- Incoming production
- Customer order priorities
- Actual shipments

That additional information determines whether the production shortfall translated into a customer-service problem.

---

# 7. Business Perspective and Decision-Making

## 7.1 How an S&OP Analyst Uses KPI Analysis

An S&OP Analyst should translate KPI information into business decisions.

Consider the following framework:

| Analytical stage | Analyst's responsibility |
|---|---|
| Identify | Detect KPI deviations |
| Validate | Confirm the accuracy of data |
| Compare | Evaluate actual vs. target, forecast, and history |
| Investigate | Identify contributing factors |
| Quantify | Determine operational and financial impact |
| Recommend | Propose corrective or preventive actions |
| Monitor | Track whether actions improve performance |

This is an important professional workflow.

## 7.2 Data Validation Before Interpretation

Before analyzing KPI performance, validate the underlying data.

Imagine that a report shows production attainment of 70%.

But after investigation, you discover that one production line failed to upload its production output.

The actual performance was 90%.

If you present the original report without validation, management could make an incorrect decision.

Important validation checks:

- Are actual and target periods aligned?
- Are units of measurement consistent?
- Are duplicate records present?
- Are missing values affecting the result?
- Are product codes correctly mapped?
- Are calculations using the correct denominator?
- Are all relevant plants or production lines included?
- Has the KPI definition changed?

### Example: Incorrect denominator

Suppose:

- Actual production = 90,000 units
- Planned production = 100,000 units

Correct attainment:

\[
\frac{90,000}{100,000}\times100=90\%
\]

But if the analyst mistakenly divides by available capacity of 120,000:

\[
\frac{90,000}{120,000}\times100=75\%
\]

Both calculations are mathematically valid, but they measure different things.

The first is production attainment.

The second is capacity utilization, assuming the capacity figure represents available capacity for the same period.

This is why KPI definitions matter.

## 7.3 Connecting Operational Results to Financial Impact

Management often needs to understand the financial consequences of operational issues.

Example:

A factory experiences 10,000 units of production shortfall.

Assume:

- 6,000 units cannot be recovered within the customer delivery window.
- Average selling price = ₱100 per unit.

Potential delayed revenue exposure:

\[
6,000\times ₱100=₱600,000
\]

This is potential delayed revenue exposure, not necessarily lost revenue.

If the company later delivers all 6,000 units, the revenue may simply be recognized later.

Now consider expediting costs:

- Normal freight cost = ₱20,000
- Expedited freight cost = ₱65,000

Incremental logistics expense:

\[
₱65,000-₱20,000=₱45,000
\]

The analyst can now communicate both operational and financial consequences.

## 7.4 Preparing Management Insights

A good management insight should answer three questions:

1. What happened?
2. Why did it happen?
3. What should happen next?

Compare the following.

### Weak KPI reporting

"Production attainment declined to 82%, below the 95% target."

This reports the result but provides no investigation or recommendation.

### Stronger management insight

"Production attainment declined to 82%, 13 percentage points below target. The shortfall was concentrated in Product Family A, where supplier delivery delays contributed to critical material shortages. The affected materials accounted for 60% of production-delay hours. We recommend reviewing supplier lead-time parameters, prioritizing critical material procurement, and establishing weekly exception monitoring."

The second version gives management:

- Performance gap
- Business context
- Evidence
- Identified contributor
- Recommended action

This is the expected direction of professional S&OP reporting.

## 7.5 Distinguishing Analyst Responsibilities from Management Decisions

An S&OP Analyst does not necessarily have the authority to decide every corrective action.

Your responsibility is to provide reliable information and actionable recommendations.

| S&OP Analyst | Functional Management |
|---|---|
| Identifies performance gaps | Evaluates proposed actions |
| Analyzes operational data | Determines resource allocation |
| Investigates contributing factors | Owns functional corrective actions |
| Quantifies business impact | Approves business decisions |
| Prepares recommendations | Commits to execution |
| Monitors KPI progress | Ensures accountability |

S&OP is cross-functional.

A supply issue may require procurement, production, planning, finance, and commercial teams to coordinate.

The analyst helps make the problem visible and the decision understandable.

---

# 8. Practical Manufacturing Case Study

## Case Study: Declining Manufacturing Performance Despite Increasing Inventory

**Integrated S&OP Analysis**

Let's simulate a situation in an electronics manufacturing company producing MLCC components.

The company has experienced declining operational and financial performance over the last three months.

Management wants to understand why inventory is increasing while customer service and profitability are declining.

## 8.1 Business Situation

The company manufactures three product families:

- Family A: High-volume products
- Family B: Medium-volume products
- Family C: Specialized products

The latest monthly S&OP review identifies the following performance:

### A. Demand and Supply KPIs

| KPI | Target | Actual |
|---|---:|---:|
| Forecast Accuracy | 90% | 72% |
| Production Attainment | 95% | 82% |
| Material Availability | 98% | 84% |
| Capacity Utilization | 85% | 92% |
| On-Time Delivery | 98% | 87% |

### B. Inventory KPIs

| KPI | Target | Actual |
|---|---:|---:|
| Inventory Value | ₱20M | ₱28M |
| Inventory Turnover | 8x | 5x |
| Excess Inventory | ₱2M | ₱7M |
| Inventory Days | 46 days | 73 days |

### C. Financial KPIs

| KPI | Target | Actual |
|---|---:|---:|
| Monthly Revenue | ₱50M | ₱45M |
| Production Cost | ₱25M | ₱29M |
| Expediting Cost | ₱200K | ₱650K |
| Operating Profit | ₱7.5M | ₱4.5M |
| Operating Margin | 15% | 10% |

These figures are illustrative assumptions for the case study.

## 8.2 Step 1: Identify the Major Performance Gaps

Let's calculate the important variances.

**Forecast Accuracy**

\[
72\%-90\%=-18\text{ pp}
\]

Forecast accuracy is 18 percentage points below target.

**Production Attainment**

\[
82\%-95\%=-13\text{ pp}
\]

Production attainment is 13 percentage points below target.

**On-Time Delivery**

\[
87\%-98\%=-11\text{ pp}
\]

On-time delivery is 11 percentage points below target.

**Inventory Value**

\[
₱28M-₱20M=₱8M
\]

\[
\frac{8}{20}\times100=40\%
\]

Inventory value is 40% above target.

**Operating Margin**

\[
10\%-15\%=-5\text{ pp}
\]

Operating margin is 5 percentage points below target.

### Initial assessment

The business has several interconnected problems:

1. Demand planning is unreliable.
2. Production execution is below plan.
3. Materials are not consistently available.
4. Inventory is accumulating.
5. Customer service is declining.
6. Operating profitability is deteriorating.

The most interesting observation is this:

**How can a company have increasing inventory while simultaneously experiencing material shortages and declining customer service?**

This is an important S&OP problem.

The answer may be poor inventory positioning.

The company may have too much of certain products and insufficient inventory of other products.

## 8.3 Step 2: Segment the Inventory Problem

Let's break down the ₱28 million inventory.

| Inventory category | Inventory value |
|---|---:|
| Family A | ₱8M |
| Family B | ₱12M |
| Family C | ₱8M |
| **Total** | **₱28M** |

Additional investigation reveals:

| Product family | Demand performance | Inventory condition |
|---|---|---|
| Family A | Higher than forecast | Inventory shortage |
| Family B | Lower than forecast | Excess inventory |
| Family C | Unstable demand | Slow-moving inventory |

Now we understand the situation better.

The company does not necessarily have an overall inventory quantity problem.

It has an inventory allocation and planning problem.

Possible actions:

- Review Family A's demand forecast and material requirements.
- Reduce or reschedule production for Family B.
- Review replenishment policies for Family C.
- Identify whether excess materials can be consumed by alternative products, subject to compatibility and quality requirements.

## 8.4 Step 3: Investigate Production Delays

The company records 1,000 production-delay hours during the month.

| Cause | Delay hours |
|---|---:|
| Material shortages | 500 |
| Equipment breakdown | 250 |
| Changeover delays | 150 |
| Quality issues | 100 |
| **Total** | **1,000** |

Calculate contribution:

Material shortages:

\[
\frac{500}{1,000}\times100=50\%
\]

Equipment breakdown:

\[
\frac{250}{1,000}\times100=25\%
\]

The two largest contributors account for 75% of the total production-delay hours.

The analyst should prioritize these issues.

Further investigation reveals:

- Supplier lead times increased.
- Planning parameters were not updated.
- Critical materials were not available when required.
- One production line experienced recurring equipment downtime.

We now have evidence supporting two major improvement areas.

## 8.5 Step 4: Understand Why Inventory Is Increasing

The inventory investigation shows:

- Family B demand was overestimated.
- Production continued according to the original plan.
- Some finished goods remained unsold.
- Certain raw materials were purchased based on outdated forecasts.
- Family A experienced shortages despite the overall inventory increase.

This demonstrates an important concept:

**Total inventory value does not tell us whether the correct inventory is available.**

The company needs to evaluate inventory by:

- Product
- Material
- Demand rate
- Lead time
- Inventory aging
- Customer requirements
- Production requirements

## 8.6 Step 5: Connect the Operational Problem to Financial Performance

Operating profit declined from the target of ₱7.5 million to ₱4.5 million.

The difference is:

\[
₱4.5M-₱7.5M=-₱3M
\]

The company is ₱3 million below its operating profit target.

Potential contributors include:

| Business issue | Possible financial consequence |
|---|---|
| Excess inventory | Higher carrying costs |
| Material shortages | Production interruptions |
| Expedited freight | Higher logistics expenses |
| Equipment downtime | Lost production opportunities |
| Poor product mix | Lower-margin sales composition |
| Late deliveries | Potential penalties and lost sales |

The analyst must avoid assigning the entire ₱3 million profit gap to these factors without a financial reconciliation.

Each contributor needs to be quantified separately, including possible overlap.

## 8.7 Step 6: Develop an Evidence-Based Action Plan

| Priority | Issue | Recommended action | Expected outcome |
|---|---|---|---|
| 1 | Critical material shortages | Review supplier lead times and procurement timing | Improved material availability |
| 2 | Poor forecast accuracy | Review forecasting assumptions by product family | Improved demand planning |
| 3 | Excess inventory | Adjust production and replenishment plans | Reduced inventory exposure |
| 4 | Equipment downtime | Investigate recurring equipment failures | Improved production reliability |
| 5 | High expediting cost | Establish critical material exception monitoring | Reduced emergency logistics costs |
| 6 | Declining profitability | Review product mix and manufacturing costs | Improved operating margin |

## 8.8 Step 7: Define How Success Will Be Measured

Recommendations should have measurable follow-up indicators.

| KPI | Current | Proposed review objective |
|---|---:|---:|
| Forecast Accuracy | 72% | Improve toward 90% |
| Production Attainment | 82% | Improve toward 95% |
| Material Availability | 84% | Improve toward 98% |
| Inventory Turnover | 5x | Improve toward 8x |
| On-Time Delivery | 87% | Improve toward 98% |
| Operating Margin | 10% | Improve toward 15% |

These are the original targets, not guaranteed results or immediate commitments.

The company should establish realistic milestones based on improvement feasibility.

**Case study conclusion:**

The problem is not simply that production is low or inventory is high.

The organization is experiencing an imbalance between demand, supply, and inventory.

The S&OP Analyst's responsibility is to identify where the imbalance exists, quantify its consequences, and coordinate decisions that improve overall business performance.

---

# 9. S&OP Analyst's Role in KPI Analysis

Let's now connect the lesson to your actual responsibilities as an S&OP professional.

Your role is not simply to prepare a monthly KPI dashboard.

You need to convert operational information into meaningful management insights.

## 9.1 Identifying Business Exceptions

An exception is a performance result that requires attention because it deviates significantly from expectations or presents business risk.

Examples:

- Forecast accuracy suddenly declines.
- Production attainment repeatedly misses target.
- Supplier OTD deteriorates.
- Inventory exceeds approved limits.
- Customer backlog increases.
- Operating margin declines.

You should prioritize exceptions based on business impact, not merely the number of KPIs that missed their targets.

## 9.2 Validating Data

Before presenting results:

- Check source data.
- Confirm reporting periods.
- Verify formulas.
- Check missing or duplicated records.
- Validate KPI definitions.
- Confirm that comparisons use consistent units.

An incorrect KPI can lead to an incorrect management decision.

## 9.3 Connecting Operational Findings to Financial Impact

Management may understand that production attainment declined by 10 percentage points.

But they also want to understand:

- How many units were affected?
- Which customers were affected?
- What is the revenue exposure?
- Did expediting expenses increase?
- Did inventory holding costs increase?
- What is the effect on profitability?

Your job is to connect the operational problem to its financial significance.

## 9.4 Preparing Management Insights

A useful reporting format is:

### S&OP KPI Analysis Template

**1. WHAT HAPPENED?**

Performance gap

Production attainment was 82%, compared with the 95% target.

**2. WHY DID IT HAPPEN?**

Root cause / evidence

Critical material shortages accounted for 50% of production-delay hours.

**3. WHAT IS THE IMPACT?**

Business consequence

Production delays contributed to supply constraints and customer delivery risks.

**4. WHAT SHOULD HAPPEN NEXT?**

Recommended action

Review supplier lead times, prioritize critical procurement, and establish weekly shortage monitoring.

## 9.5 Distinguishing Analyst Responsibilities from Management Decisions

An S&OP Analyst does not necessarily have the authority to decide every corrective action.

Your responsibility is to provide reliable information and actionable recommendations.

| S&OP Analyst | Functional Management |
|---|---|
| Identifies performance gaps | Evaluates proposed actions |
| Analyzes operational data | Determines resource allocation |
| Investigates contributing factors | Owns functional corrective actions |
| Quantifies business impact | Approves business decisions |
| Prepares recommendations | Commits to execution |
| Monitors KPI progress | Ensures accountability |

S&OP is cross-functional.

A supply issue may require procurement, production, planning, finance, and commercial teams to coordinate.

The analyst helps make the problem visible and the decision understandable.

---

# 10. Key Takeaways

Here are the concepts you should retain before proceeding to Topic 9.7.

| Concept | What you should remember |
|---|---|
| KPI Monitoring | Measures and tracks performance |
| KPI Analysis | Examines performance gaps and patterns |
| KPI Interpretation | Explains business meaning and implications |
| Variance Analysis | Measures deviation from a reference value |
| Trend Analysis | Identifies performance patterns over time |
| MoM | Compares consecutive months |
| YoY | Compares the same period across years |
| KPI Relationships | Explains how different performance indicators interact |
| KPI Trade-offs | Improving one KPI can negatively affect another |
| Root Cause Analysis | Identifies underlying causes of problems |
| 5 Whys | Repeatedly asks why a problem occurred |
| Fishbone Diagram | Organizes possible causes into categories |
| Pareto Analysis | Identifies the largest contributors to a problem |
| Segmentation | Breaks down performance by business dimension |
| Drill-Down | Moves from aggregated results to detailed information |
| Exception Reporting | Highlights significant deviations |
| Correlation | Indicates a relationship between variables |
| Causation | Indicates that one factor contributes to another |

## The professional mindset

I want you to remember this sequence:

1. **DATA:** What information do we have?
2. **KPI MONITORING:** What happened?
3. **KPI ANALYSIS:** How significant is the deviation?
4. **ROOT CAUSE INVESTIGATION:** Why did it happen?
5. **BUSINESS INTERPRETATION:** What does it mean for the organization?
6. **ACTIONABLE RECOMMENDATIONS:** What should we do next?

This is the thinking process that separates someone who simply prepares reports from someone who provides meaningful business analysis.

---

# 11. Knowledge Check and Analytical Exercises

**Your Turn: Assessment**

Now let's test whether you can apply the concepts rather than simply memorize definitions.

The exercises progress through three learning levels.

- Level 1: Understanding
- Level 2: Technical Application
- Level 3: Professional Analysis

**Important:** I will not reveal the answers yet. Submit your responses first. I will evaluate them, correct misunderstandings, and explain the reasoning behind each answer.

## Exercise 1: Conceptual Understanding

*Level 1*

**1.** Explain the difference between KPI monitoring, KPI analysis, and KPI interpretation. Give one manufacturing example for each.

**2.** Why is it incorrect to assume that a positive variance is always favorable?

**3.** What is the difference between percentage variance and percentage-point difference?

**4.** Explain why increasing inventory and declining customer service can happen simultaneously.

**5.** What is the difference between correlation and causation? Give an example involving production and inventory.

## Exercise 2: Numerical Analysis

*Level 2*

A manufacturing company has the following monthly performance:

| KPI | Target | Previous Month | Current Actual |
|---|---:|---:|---:|
| Production | 100,000 | 95,000 | 85,000 |
| Forecast Accuracy | 90% | 88% | 75% |
| On-Time Delivery | 98% | 95% | 90% |
| Inventory Value | ₱20M | ₱22M | ₱26M |

Calculate the following.

**6. Production variance**

- Absolute variance
- Percentage variance

**7. Production MoM change**

Calculate the percentage change from the previous month.

**8. Forecast accuracy variance**

Calculate:
- Percentage-point difference against target
- Relative percentage variance against target

**9. Inventory variance**

Calculate:
- Absolute variance against target
- Percentage variance against target
- MoM percentage change

**10. Interpretation**

Which KPI has the most concerning performance? Explain your reasoning. Consider both the numerical deviation and the potential business impact.

## Exercise 3: Root Cause Analysis

*Level 2 to Level 3*

A manufacturing plant reports that production attainment declined from 96% to 78% over three months.

The investigation identifies the following:

- Supplier delivery delays increased.
- Equipment downtime increased.
- Material shortages became more frequent.
- Production scheduling changes increased.
- Customer orders became more unpredictable.

**11.** Identify which observations are symptoms and which are possible contributing causes.

**12.** Construct a 5 Whys investigation for the declining production attainment.

**13.** Using the Fishbone Diagram approach, classify the possible causes under the 6Ms.

**14.** What additional data would you request to validate the suspected root causes?

**15.** Which problem would you investigate first, and why?

## Exercise 4: KPI Relationship Analysis

*Level 3*

A manufacturing company wants to increase production attainment from 85% to 100%.

Management proposes increasing production batch sizes and maximizing machine utilization.

**16.** Which KPIs could improve because of this decision?

**17.** Which KPIs could deteriorate?

**18.** Why might maximizing production attainment not be the best overall business decision?

**19.** What additional KPIs should management monitor to avoid unintended consequences?

## Exercise 5: Professional S&OP Case Analysis

*Level 3*

You are the S&OP Analyst responsible for preparing the monthly management review.

Your report identifies the following:

| KPI | Target | Actual |
|---|---:|---:|
| Forecast Accuracy | 90% | 70% |
| Production Attainment | 95% | 80% |
| Material Availability | 98% | 82% |
| Inventory Turnover | 8x | 4x |
| On-Time Delivery | 98% | 85% |
| Operating Margin | 15% | 9% |

Additional findings:

- Family A has increasing demand but insufficient inventory.
- Family B has declining demand but increasing inventory.
- Two suppliers account for 70% of material shortages.
- One production line accounts for 60% of production downtime.
- Expedited freight costs increased by 40%.

**20.** Identify the three most important business problems.

**21.** Explain the relationships between the demand, supply, inventory, and financial KPIs.

**22.** Identify which problems require further investigation before recommending corrective actions.

**23.** Develop three evidence-based recommendations for management.

**24.** Prepare a short management summary answering:

- What happened?
- Why did it happen?
- What is the business impact?
- What should happen next?

---

# 12. Self-Assessment

Before submitting, evaluate your confidence in the following skills.

- [ ] I can distinguish monitoring, analysis, and interpretation.
- [ ] I can calculate and interpret KPI variances.
- [ ] I can analyze historical trends and identify persistent problems.
- [ ] I understand relationships and trade-offs between KPIs.
- [ ] I can distinguish correlation from causation.
- [ ] I can use 5 Whys, Fishbone, and Pareto Analysis.
- [ ] I can perform KPI segmentation and drill-down.
- [ ] I can translate KPI findings into management recommendations.

Check only the skills you can confidently explain or demonstrate without looking at the lesson.

---

# 13. How This Connects to Topic 9.7

Topic 9.6 has established the foundation for Data Analytics for S&OP.

You now understand what questions an analyst needs to answer. The succeeding topic will build on the analytical methods and data capabilities used to answer those questions.

| Topic 9.6 foundation | Application in Topic 9.7 |
|---|---|
| Variance analysis | Automated performance analysis |
| Trend analysis | Historical data visualization |
| KPI relationships | Correlation and analytical methods |
| Root cause analysis | Data-driven problem investigation |
| Segmentation | Multidimensional data analysis |
| Exception reporting | Dashboards and automated alerts |
| Business interpretation | Analytical insights for decisions |

The distinction is important:

**Topic 9.6 teaches you how to think analytically. Topic 9.7 develops how to use data analytics tools and methods to support that thinking.**

---

**Your next step:** Answer Exercises 1–5. You can submit them in batches. I'll assess your answers as an S&OP instructor, including calculation accuracy, analytical reasoning, and the quality of your business recommendations.

We will remain on Topic 9.6 until you've completed the assessment and are ready to proceed.
