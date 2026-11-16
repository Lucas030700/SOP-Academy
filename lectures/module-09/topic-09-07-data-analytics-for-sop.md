---
module: 9
topic: "9.7"
title: "Data Analytics for S&OP"
language: "Taglish"
status: "complete"
---

# Module 9 – Topic 9.7: Data Analytics for S&OP

**Learning objective:** Understand how to transform raw business data into meaningful insights that support demand planning, supply planning, inventory management, financial evaluation, and management decision-making.

For this lesson, isipin natin na hindi lang tayo basta nagko-consolidate ng Excel files, gumagawa ng charts, or nagre-report ng KPIs. Ang goal natin ay matutong mag-isip bilang isang S&OP Analyst.

An S&OP Analyst should be able to answer three important questions:

1. **What is happening?** Identify the current business situation.
2. **Why is it happening?** Investigate the patterns, gaps, and possible causes.
3. **What should we do?** Recommend actions based on evidence.

Ito ang progression na gusto nating ma-develop:

**RAW DATA**  
Sales, forecast, inventory, production, supplier records

↓

**DATA ANALYSIS**  
Trends, variances, patterns, anomalies, relationships

↓

**BUSINESS INSIGHTS**  
Identify risks, opportunities, and performance gaps

↓

**BUSINESS DECISIONS**  
Adjust forecast, production, inventory, procurement, or financial plans

---

# 1. Topic Overview

## 1.1 What are we going to study?

Sa previous topics, pinag-aralan natin kung paano sinusukat ang performance ng S&OP through different KPIs.

For example:

- Forecast Accuracy tells us how accurate our forecasts are.
- Forecast Bias tells us whether we consistently overforecast or underforecast.
- Inventory Turnover measures how efficiently inventory is moving.
- Days of Supply tells us how long available inventory can support demand.
- Production Attainment measures whether production meets its planned output.
- Financial KPIs measure the financial consequences of business decisions.

Pero may isang importanteng question:

**Paano natin malalaman kung bakit ganito ang performance ng mga KPIs na ito?**

Dito pumapasok ang Data Analytics.

Data analytics allows us to examine business information, identify patterns, investigate problems, and develop recommendations.

### Why is this important in S&OP?

Imagine na nakita mo ang following monthly performance:

| KPI | Target | Actual |
|---|---:|---:|
| Forecast Accuracy | 90% | 78% |
| Inventory Turnover | 8x | 5x |
| Production Attainment | 95% | 88% |
| On-Time Delivery | 98% | 91% |

Reporting alone tells management that the business is underperforming.

But analytics goes further:

- Is forecast accuracy low because of seasonal demand?
- Is excess inventory caused by overforecasting?
- Is production attainment low because of machine capacity or material shortages?
- Is poor delivery performance connected to supplier delays?

These questions help management understand the situation and decide what to change.

## 1.2 Connection to previous topics: 9.1–9.6

| Previous topic | Connection to Data Analytics |
|---|---|
| 9.1 S&OP Performance Measurement | Analyze whether business performance meets targets |
| 9.2 Demand KPIs | Investigate forecast accuracy, bias, and demand patterns |
| 9.3 Supply KPIs | Analyze production performance and supply constraints |
| 9.4 Inventory KPIs | Identify excess, shortages, and inventory imbalances |
| 9.5 Financial KPIs | Evaluate the financial impact of operational decisions |
| 9.6 KPI Analysis and Interpretation | Use analytical techniques to investigate performance gaps |

**Important distinction:** Topic 9.6 teaches us how to interpret KPI performance. Topic 9.7 expands that capability by introducing the analytical methods and tools used to investigate business data and generate deeper insights.

Topic 9.8 will build on this by teaching us how to communicate those insights through S&OP reports and dashboards.

## 1.3 Learning objectives

By the end of this lesson, you should be able to:

1. Explain the four levels of data analytics.
2. Identify relevant S&OP data sources.
3. Prepare and validate data before analysis.
4. Apply common analytical techniques.
5. Analyze demand, supply, inventory, and supplier performance.
6. Use Excel and understand the applications of Power BI, SQL, and Python.
7. Investigate manufacturing and supply chain problems.
8. Convert analytical findings into actionable business recommendations.

---

# 2. Layman's Explanation

## 2.1 What is Data Analytics?

Let's use a simple manufacturing example.

Imagine that you are responsible for monitoring the production of three products:

- Product A
- Product B
- Product C

Every month, you receive an Excel file containing:

- Customer demand
- Sales forecast
- Actual sales
- Production quantities
- Beginning inventory
- Ending inventory
- Supplier delivery performance

After receiving the files, you consolidate the information.

Initially, you only see numbers.

| Product | Forecast | Actual Demand |
|---|---:|---:|
| A | 1,000 | 1,200 |
| B | 1,000 | 800 |
| C | 1,000 | 1,000 |

A basic report would tell you that Product A exceeded its forecast, Product B fell below its forecast, and Product C matched its forecast.

But data analytics asks more questions.

**Question 1: What happened?**

Product A had higher demand than forecast.

**Question 2: Why might it have happened?**

Perhaps a major customer increased its orders, or demand was affected by seasonality.

**Question 3: What could happen next?**

If demand continues increasing, Product A may experience an inventory shortage.

**Question 4: What should the business do?**

The company may need to revise its demand forecast, increase production, or secure additional raw materials.

Notice the difference?

Hindi ka na basta nagre-report ng numbers. You are using numbers to understand the business and support decisions.

## 2.2 The difference between reporting and analytics

Think of a doctor examining a patient.

| Activity | Example |
|---|---|
| Reporting | Patient's temperature is 39°C |
| Analysis | Temperature increased from 37°C to 39°C |
| Analytics | Examine historical readings and other available information to identify possible patterns and risks |
| Decision-making | Recommend appropriate medical evaluation and treatment |

Same principle applies to S&OP.

Reporting tells us the situation. Analysis helps explain it. Analytics uses data systematically to understand patterns, relationships, and potential future outcomes. Decision-making determines the appropriate business response.

---

# 3. Technical Explanation

## 3.1 Formal definition of Data Analytics

**Data Analytics** is the systematic process of collecting, preparing, examining, interpreting, and modeling data to identify meaningful patterns, relationships, trends, and insights that support informed decisions.

In S&OP, it involves examining information from different business functions to understand how demand, supply, inventory, and financial performance interact.

For example:

A decline in customer demand may result in excess finished goods inventory.

Excess inventory may increase:

- Inventory holding costs
- Warehouse utilization
- Working capital requirements
- Risk of obsolescence

Through data analytics, we can examine the relationship between forecast changes, actual demand, production quantities, and inventory levels.

## 3.2 Four types of Data Analytics

There are four commonly recognized levels of analytics.

### A. Descriptive Analytics

**What happened?**

Summarizes historical and current business performance.

Example: Production attainment decreased from 96% to 88%.

This is the simplest level.

Its purpose is to summarize what has already happened.

Common methods include:
- Total and average calculations
- Monthly KPI summaries
- Production output summaries
- Inventory reports
- Sales performance reports

**Manufacturing example:**

| Month | Planned Production | Actual Production |
|---|---:|---:|
| January | 10,000 | 9,500 |
| February | 10,000 | 9,800 |
| March | 10,000 | 8,500 |

Descriptive analytics identifies the production results and performance differences.

### B. Diagnostic Analytics

**Why did it happen?**

Investigates factors associated with the observed results.

Example: Production attainment declined because of material shortages and equipment downtime.

Its purpose is to investigate why something happened.

For example, March production was significantly lower.

You investigate the production records:

| Possible Factor | March Observation |
|---|---|
| Machine downtime | 12 hours |
| Material shortage | 2 production days |
| Labor availability | Normal |
| Quality rejection | 3% |
| Planned production | 10,000 |

This gives you potential explanations for the performance decline.

However, be careful:

A factor occurring at the same time as a performance problem does not automatically prove that it caused the problem.

You still need supporting evidence.

### C. Predictive Analytics

**What might happen?**

Uses historical data, statistical methods, and models to estimate future outcomes.

Example: Current demand trends indicate a possible 15% increase next quarter.

Its purpose is to estimate future business outcomes.

For example:

Historical demand:

| Month | Actual Demand |
|---|---:|
| January | 1,000 |
| February | 1,100 |
| March | 1,200 |
| April | 1,300 |

The demand appears to increase by 100 units every month.

A simple linear projection would estimate May demand at 1,400 units.

This is a basic predictive approach.

In actual businesses, predictive models may also consider:

- Seasonality
- Customer order patterns
- Promotions
- Market conditions
- Historical forecast errors
- Economic indicators

Remember: A prediction is an estimate, not a guaranteed outcome.

### D. Prescriptive Analytics

**What should we do?**

Evaluates possible actions and identifies suitable decisions under defined constraints and objectives.

Example: Increase production by 10%, allocate available materials to priority products, and negotiate an earlier supplier delivery.

This level evaluates what action should be taken.

Suppose projected demand is 1,400 units, but current production capacity is only 1,200 units.

Possible actions:

1. Add overtime.
2. Transfer production to another facility.
3. Outsource production.
4. Allocate limited inventory to priority customers.
5. Negotiate alternative delivery schedules.

Prescriptive analytics considers the expected consequences, constraints, costs, and business objectives of these alternatives.

The goal is not simply to identify the highest production quantity. It is to find a feasible decision that best supports business objectives.

## 3.3 Reporting vs Analysis vs Analytics

These terms are related, but they are not interchangeable.

| Aspect | Reporting | Analysis | Analytics |
|---|---|---|---|
| Main purpose | Communicate results | Understand results | Discover patterns and generate insights |
| Main question | What happened? | Why did it happen? | What happened, why, and what may happen next? |
| Typical output | Reports | Findings | Insights, models, scenarios |
| Example | Monthly sales report | Investigate sales decline | Forecast future sales patterns |

**Practical distinction:**

- Reporting: Actual sales were 8,000 units.
- Analysis: Actual sales were 20% below forecast.
- Analytics: Demand patterns, customer segments, and historical trends indicate that the decline is concentrated in two major customers.
- Business decision: Review the forecast and adjust production and procurement plans.

Analytics is not necessarily advanced AI or machine learning. Even properly structured Excel analysis can be considered data analytics.

---

# 4. Detailed Discussion

## 4.1 S&OP Data Sources and Preparation

Before performing any analysis, we need data.

Pero hindi ibig sabihin na kapag marami kang data, accurate na agad ang analysis mo.

**Garbage In, Garbage Out (GIGO).**

If your source data contains incorrect, incomplete, or inconsistent information, your analytical results may also be incorrect.

### A. Common S&OP data sources

Different departments maintain different types of business information.

| Department / Source | Data Available | S&OP Application |
|---|---|---|
| Sales | Customer orders, actual sales | Demand analysis |
| Demand Planning | Forecast quantities | Forecast evaluation |
| Production | Planned and actual output | Supply analysis |
| Inventory / Warehouse | Stock levels, receipts, issues | Inventory analysis |
| Procurement | Purchase orders, supplier lead times | Material availability |
| Suppliers | Delivery performance, quality | Supply risk |
| Finance | Revenue, COGS, inventory value | Financial analysis |
| Customer Service | Backorders, delivery performance | Customer service analysis |

The important point is that S&OP requires cross-functional data.

For example, if demand increases by 20%, we cannot simply increase the production plan by 20%.

We need to check:

- Is raw material available?
- Can the supplier deliver additional materials?
- Is production capacity sufficient?
- Will additional production increase costs?
- Can the company still meet customer delivery commitments?

This is why integrating different data sources is important.

### B. Understanding the structure of business data

Let's assume you receive the following production records:

| Date | Product | Forecast | Actual Demand | Production |
|---|---|---:|---:|---:|
| Jan | A | 1,000 | 1,100 | 1,000 |
| Jan | B | 800 | 750 | 800 |
| Feb | A | 1,100 | 1,200 | 1,100 |
| Feb | B | 800 | 850 | 800 |

This is an example of structured data.

Each row represents one observation, while each column represents a variable or attribute.

Important terms:

- **Record:** An individual row of data.
- **Field:** A column containing a particular attribute.
- **Variable:** A measurable characteristic, such as demand or production.
- **Dimension:** A category used to group data, such as product, month, or customer.
- **Measure:** A numerical value being analyzed, such as sales quantity or inventory.

In S&OP, Product, Customer, Month, and Plant are commonly used dimensions.

Demand Quantity, Production Quantity, Revenue, and Inventory Value are examples of measures.

### C. Data quality

There are four important dimensions of data quality.

| Dimension | Meaning | Example of a Problem |
|---|---|---|
| Accuracy | Data reflects the actual business situation | Actual sales encoded as 1,500 instead of 1,050 |
| Completeness | Required information is present | Missing February demand |
| Consistency | Data follows common definitions and formats | One file uses kg, another uses grams |
| Validity | Data follows defined rules and acceptable values | Negative production quantity without a valid transaction type |

Another important consideration is timeliness.

A report using last month's inventory information may be inaccurate for a decision being made today.

### D. Data validation

Before analyzing the information, check whether the data makes sense.

For example:

| Product | Forecast | Actual Demand | Production |
|---|---:|---:|---:|
| A | 1,000 | 1,100 | 1,050 |
| B | 800 | 750 | 800 |
| C | 500 | -200 | 450 |

Product C has negative demand.

This may be:
- An encoding error.
- A return or credit transaction incorrectly included in demand.
- A data integration problem.

You should not automatically delete the negative value.

First, investigate what it represents.

**Important:** In manufacturing and supply chain analytics, unusual data is not always incorrect data. Sometimes it represents an actual business event.

### E. Data cleaning and preparation

Data preparation is the process of transforming raw information into a usable and consistent dataset.

Common preparation activities:

1. Remove duplicate records after verifying that they are true duplicates.
2. Correct inconsistent product codes.
3. Standardize dates and measurement units.
4. Identify missing values.
5. Validate negative and unusually high quantities.
6. Align forecast and actual demand periods.
7. Consolidate information from multiple sources.
8. Check whether the data uses the same business definitions.

**Example:**

Suppose the same product is recorded differently across three files.

| Source | Product Code |
|---|---|
| Sales | MLCC-A001 |
| Production | A001 |
| Inventory | MLCC_A001 |

These may refer to the same product.

However, before merging the records, confirm that they really represent the same material or SKU.

Otherwise, your analysis may incorrectly treat one product as three different products.

### F. Data granularity

One particularly important concept is **Data Granularity**.

It refers to the level of detail contained in your dataset.

Consider the following:

| Dataset | Granularity |
|---|---|
| Annual sales by product | Year + Product |
| Monthly sales by product | Month + Product |
| Daily sales by product | Day + Product |
| Individual customer orders | Order + Product + Customer |

Why does this matter?

Imagine that you want to investigate a shortage that occurred on March 15.

An annual sales report will not provide enough detail.

You may need daily inventory transactions, production records, and material receipts.

On the other hand, if you want to evaluate annual demand trends, individual transaction-level data may be unnecessarily detailed.

**Rule:** Select the appropriate level of data detail based on the business question.

---

## 4.2 Common Data Analysis Techniques

Ito ang core technical section ng topic natin.

These are methods that an S&OP Analyst regularly uses to investigate business performance.

### A. Trend Analysis

**Purpose:** Identify how a particular business variable changes over time.

Examples:
- Monthly demand trends.
- Production output trends.
- Inventory growth or reduction.
- Supplier delivery performance.
- Revenue trends.

Consider this demand history:

| Month | Actual Demand |
|---|---:|
| January | 1,000 |
| February | 1,100 |
| March | 1,200 |
| April | 1,300 |
| May | 1,400 |

We can observe that demand is consistently increasing.

A simple monthly growth calculation:

[
Growth\ Rate=\frac{Current-Prior}{Prior}\times100
]

For February:

[
=\frac{1,100-1,000}{1,000}\times100
]

[
=10\%
]

The same calculation can be applied to other months.

**Business application:**

If demand continuously increases, the S&OP team may need to evaluate:
- Future production requirements.
- Raw material availability.
- Additional capacity.
- Inventory positioning.

**Important consideration:** A historical upward trend does not guarantee that demand will continue increasing.

You should also investigate seasonality, promotions, customer behavior, and one-time events.

### B. Variance Analysis

**Purpose:** Measure the difference between a planned or expected result and the actual result.

This is particularly important in S&OP because the organization constantly compares plans against actual performance.

Two commonly used measurements:

**1. Absolute Variance**

[
Variance=Actual-Plan
]

**2. Percentage Variance**

[
Variance\%=\frac{Actual-Plan}{Plan}\times100
]

Example:

| Item | Planned | Actual |
|---|---:|---:|
| Production | 10,000 | 9,000 |

Absolute variance:

[
9,000-10,000=-1,000
]

Percentage variance:

[
\frac{9,000-10,000}{10,000}\times100=-10\%
]

Interpretation:

Production was 1,000 units below plan, equivalent to a 10% shortfall.

But remember that the meaning of a positive or negative variance depends on the metric.

For production, a negative variance may indicate underproduction.

For costs, a negative variance may indicate favorable cost performance if actual cost is below budget.

Always establish the correct business interpretation.

### C. Comparative Analysis

**Purpose:** Compare two or more datasets, products, periods, facilities, or business conditions.

Example:

| Product | Forecast | Actual Demand |
|---|---:|---:|
| A | 1,000 | 1,200 |
| B | 1,000 | 800 |
| C | 1,000 | 1,050 |

You can compare:
- Product A versus Product B.
- Current month versus previous month.
- Plant 1 versus Plant 2.
- Supplier X versus Supplier Y.

Why is this useful?

Because overall performance can hide problems in individual segments.

For example, total forecast accuracy might appear acceptable even when one important product has a serious forecast error.

### D. Segmentation and Aggregation

These two concepts work together but have different purposes.

**Segmentation** means dividing data into meaningful groups.

**Aggregation** means combining data into summarized values.

Example of segmentation:

Divide products into:
- Product A
- Product B
- Product C

Or classify customers into:
- Strategic customers
- Regular customers
- Low-volume customers

Example of aggregation:

| Product | January | February | March | Total |
|---|---:|---:|---:|---:|
| A | 1,000 | 1,100 | 1,200 | 3,300 |
| B | 800 | 900 | 850 | 2,550 |

Aggregation helps summarize performance, while segmentation helps identify where the performance is coming from.

**Important S&OP application:**

A company might report total inventory of 100,000 units.

However, segmentation may reveal:
- Product A: Shortage
- Product B: Healthy inventory
- Product C: Excess inventory

The total number alone does not tell the complete story.

### E. Pareto Analysis

**Purpose:** Identify which products, customers, suppliers, or problems contribute most significantly to a particular result.

Pareto analysis is commonly associated with the 80/20 principle.

This principle suggests that a relatively small number of categories may account for a large proportion of the total impact.

It is an observation, not a universal mathematical rule.

**Manufacturing example:**

Suppose a factory experiences the following production losses:

| Defect Category | Lost Production Hours |
|---|---:|
| Machine Breakdown | 40 |
| Material Shortage | 30 |
| Quality Rejection | 15 |
| Setup Delay | 10 |
| Others | 5 |
| **Total** | **100** |

Percentage contribution:

[
Contribution\%=\frac{Category\ Impact}{Total\ Impact}\times100
]

| Defect Category | Hours | Contribution | Cumulative |
|---|---:|---:|---:|
| Machine Breakdown | 40 | 40% | 40% |
| Material Shortage | 30 | 30% | 70% |
| Quality Rejection | 15 | 15% | 85% |
| Setup Delay | 10 | 10% | 95% |
| Others | 5 | 5% | 100% |

Interpretation:

Machine breakdown and material shortage account for 70% of total production losses.

Therefore, these two areas deserve initial investigation.

**Business application:**

Instead of trying to improve every production problem simultaneously, management can prioritize the problems with the largest operational impact.

### F. Correlation Analysis

**Purpose:** Determine whether two variables move together and measure the strength and direction of their statistical relationship.

Example:

You want to determine whether higher customer demand is associated with higher production output.

| Month | Demand | Production |
|---|---:|---:|
| Jan | 1,000 | 950 |
| Feb | 1,100 | 1,050 |
| Mar | 1,200 | 1,150 |
| Apr | 1,300 | 1,250 |
| May | 1,400 | 1,350 |

Both variables increase together.

This suggests a positive relationship.

The Pearson correlation coefficient is commonly represented by:

[
r=\frac{Cov(X,Y)}{\sigma_X\sigma_Y}
]

Where:

- (r) = correlation coefficient
- (Cov(X,Y)) = covariance between X and Y
- (sigma_X) = standard deviation of X
- (sigma_Y) = standard deviation of Y

The correlation coefficient ranges from -1 to +1.

| Correlation | General Interpretation |
|---|---|
| +1.00 | Perfect positive linear relationship |
| +0.80 | Strong positive relationship |
| +0.50 | Moderate positive relationship |
| 0.00 | No linear relationship |
| -0.50 | Moderate negative relationship |
| -0.80 | Strong negative relationship |
| -1.00 | Perfect negative linear relationship |

These descriptions are general guidelines, not rigid statistical thresholds.

**Critical concept: Correlation does not equal causation.**

For example:

You observe that production output increases when machine operating hours increase.

This does not automatically prove that machine operating hours alone caused the increase.

Other variables may also be involved:
- Product mix.
- Machine speed.
- Downtime.
- Labor availability.
- Material availability.

Correlation identifies a relationship that deserves investigation. It does not independently establish causation.

### G. Outlier and Anomaly Detection

**Purpose:** Identify observations that are unusually different from normal patterns.

Example:

| Month | Production Output |
|---|---:|
| January | 10,000 |
| February | 10,200 |
| March | 9,900 |
| April | 10,100 |
| May | 5,000 |
| June | 10,300 |

May production is significantly lower than the other months.

This is a potential anomaly.

Possible explanations:
- Major equipment breakdown.
- Material shortage.
- Planned shutdown.
- Data encoding error.
- Production transfer to another facility.

One simple statistical method is the Z-score.

[
Z=\frac{X-\mu}{\sigma}
]

Where:

- (X) = Observed value
- (mu) = Mean
- (sigma) = Standard deviation

A commonly used investigation guideline is to flag observations with an absolute Z-score greater than 3.

However, this threshold is not appropriate for every dataset. It assumes a distribution where the standard deviation is a meaningful measure of spread, and small datasets may produce unstable results.

Another method is the Interquartile Range (IQR).

[
IQR=Q3-Q1
]

Lower boundary:

[
Q1-1.5(IQR)
]

Upper boundary:

[
Q3+1.5(IQR)
]

Observations outside these boundaries are potential outliers.

**S&OP application:**

Outlier detection can identify:
- Unusually high customer orders.
- Sudden demand declines.
- Unexpected inventory increases.
- Abnormally low production output.
- Unusual supplier lead times.

Do not automatically remove outliers. They may represent important business events.

### H. Root Cause Investigation

**Purpose:** Identify the underlying factors contributing to an observed problem.

Suppose:

On-time delivery declined from 98% to 90%.

A basic report identifies the gap.

Root cause investigation attempts to understand the reasons.

One useful technique is the **5 Whys**.

Example:

**Problem:** Customer orders were delivered late.

1. Why? Finished goods were unavailable.
2. Why? Production did not meet the planned quantity.
3. Why? Production was delayed because raw materials were unavailable.
4. Why? The supplier delivered materials late.
5. Why? The purchase order was released later than the required procurement date.

Possible underlying issue: Procurement planning and order release timing.

However, the 5 Whys is an investigation framework, not proof by itself. Validate each answer against actual records and evidence.

Other useful methods:
- Fishbone Diagram (Ishikawa).
- Pareto Analysis.
- Process Mapping.
- Drill-down analysis.
- Cause-and-effect investigation.

**Remember:** The objective is not to find someone to blame. The objective is to identify the process or condition that needs improvement.

---

## 4.3 Demand and Supply Analytics

Now let's connect the analytical methods to actual S&OP responsibilities.

### A. Demand Analytics

Demand analytics examines historical and expected customer demand.

Important areas include:

**1. Historical demand patterns**

Determine whether demand is:
- Increasing.
- Decreasing.
- Stable.
- Seasonal.
- Intermittent.
- Highly volatile.

Example:

| Month | Demand |
|---|---:|
| January | 1,000 |
| February | 1,100 |
| March | 1,200 |
| April | 1,300 |
| May | 1,400 |

The business may need to investigate whether the increasing demand is sustainable before adjusting its long-term capacity.

**2. Seasonality analysis**

Seasonality refers to recurring demand patterns associated with specific periods.

For example:

| Quarter | Demand |
|---|---:|
| Q1 | 10,000 |
| Q2 | 12,000 |
| Q3 | 11,000 |
| Q4 | 17,000 |

Q4 demand is significantly higher.

Possible explanations:
- Holiday-related customer demand.
- Year-end purchasing.
- Seasonal market requirements.
- Customer production cycles.

The S&OP team should account for recurring seasonal demand when developing future forecasts and capacity plans.

**3. Forecast error analysis**

Forecast error measures the difference between actual demand and forecast demand.

[
Forecast\ Error=Actual-Forecast
]

Example:

Forecast = 1,000 units

Actual demand = 1,200 units

[
Error=1,200-1,000=200
]

The forecast underestimated demand by 200 units.

A commonly used error measure is Mean Absolute Error (MAE):

[
MAE=\frac{\sum|Actual-Forecast|}{n}
]

Suppose the monthly absolute forecast errors are:

200, 100, 150, and 50 units.

[
MAE=\frac{200+100+150+50}{4}
]

[
MAE=125\ units
]

Interpretation: The average absolute forecast error was 125 units per period.

Another measure is Mean Absolute Percentage Error (MAPE):

[
MAPE=\frac{1}{n}\sum\left|\frac{Actual-Forecast}{Actual}\right|\times100
]

MAPE is useful for expressing error as a percentage, but it becomes problematic when actual demand is zero or very close to zero. It can also be misleading when comparing products with intermittent demand.

**4. Demand volatility**

Demand volatility measures how much demand fluctuates over time.

One basic measure is the coefficient of variation:

[
CV=\frac{Standard\ Deviation}{Mean}\times100
]

Example:

- Average monthly demand = 1,000 units.
- Standard deviation = 200 units.

[
CV=\frac{200}{1,000}\times100=20\%
]

A higher CV generally indicates greater relative variability.

This can help determine whether products require different forecasting or inventory strategies.

### B. Supply Analytics

Supply analytics evaluates whether the organization can meet the expected demand.

Important areas:

**1. Production performance**

Compare planned and actual production.

[
Production\ Attainment=\frac{Actual\ Production}{Planned\ Production}\times100
]

Example:

Planned = 10,000 units.

Actual = 9,000 units.

[
=\frac{9,000}{10,000}\times100=90\%
]

Interpretation: Production achieved 90% of its planned output.

**2. Capacity analysis**

Capacity analysis identifies whether available production resources can support expected demand.

Suppose:

- Required production = 12,000 units.
- Available capacity = 10,000 units.

[
Capacity\ Gap=Required\ Capacity-Available\ Capacity
]

[
=12,000-10,000=2,000
]

The company has a capacity shortfall of 2,000 units.

Potential responses:
- Overtime.
- Additional shifts.
- Outsourcing.
- Production transfer.
- Demand prioritization.

**3. Supplier performance**

Supplier analytics examines whether suppliers can reliably provide materials.

Common measurements:

| Metric | Purpose |
|---|---|
| Supplier On-Time Delivery | Measures delivery reliability |
| Average Lead Time | Measures procurement duration |
| Lead Time Variability | Measures consistency of delivery timing |
| Supplier Defect Rate | Measures incoming material quality |
| Fill Rate | Measures fulfillment of ordered quantities |

Example:

A supplier was expected to deliver 20 purchase orders.

Only 16 arrived on time.

[
Supplier\ OTD=\frac{16}{20}\times100=80\%
]

The supplier's on-time delivery performance is 80%.

However, you should investigate whether late deliveries are concentrated in a specific material, supplier location, or purchasing period.

### C. Inventory Analytics

Inventory analytics identifies whether inventory levels are appropriate relative to expected demand and supply requirements.

Three common situations:

| Inventory Condition | Business Situation |
|---|---|
| Excess Inventory | More stock than required |
| Healthy Inventory | Sufficient stock to support requirements |
| Inventory Shortage | Insufficient stock to support requirements |

Important analysis areas:

**1. Inventory coverage**

[
DOS=\frac{Available\ Inventory}{Average\ Daily\ Demand}
]

Example:

- Available inventory = 3,000 units.
- Average daily demand = 100 units.

[
DOS=\frac{3,000}{100}=30\ days
]

The inventory provides approximately 30 days of demand coverage, assuming the demand rate remains constant and all inventory is usable.

**2. Inventory imbalance**

Suppose:

| Product | Available Inventory | Expected Demand |
|---|---:|---:|
| A | 5,000 | 6,000 |
| B | 8,000 | 3,000 |
| C | 2,000 | 4,000 |

Product A and C may experience shortages, while Product B may have excess inventory.

The organization may need to evaluate inventory allocation, production priorities, and procurement adjustments.

**3. Slow-moving and obsolete inventory**

Analyze:
- Last movement date.
- Inventory age.
- Consumption frequency.
- Remaining shelf life, where applicable.
- Expected future demand.

This is especially important for products with limited shelf life, changing specifications, or technological obsolescence.

---

# 5. Practical Analytical Methods and Tools

Now let's discuss the tools that help an S&OP Analyst perform these activities.

Hindi kailangan gamitin lahat ng tools sa bawat analysis. The appropriate tool depends on the data volume, complexity, frequency, and required output.

## 5.1 Excel for S&OP Analytics

Excel is particularly useful for structured datasets, calculations, reconciliations, and ad hoc analysis.

### A. SUMIFS

**Purpose:** Sum values based on multiple conditions.

Example dataset:

| Month | Product | Production |
|---|---|---:|
| Jan | A | 1,000 |
| Jan | B | 800 |
| Feb | A | 1,100 |
| Feb | B | 900 |

You want to calculate total Product A production.

```excel
=SUMIFS(C2:C5,B2:B5,"A")
```

Result:

2,100 units.

To calculate Product A production in February:

```excel
=SUMIFS(C2:C5,B2:B5,"A",A2:A5,"Feb")
```

Result:

1,100 units.

### B. COUNTIFS

**Purpose:** Count records that meet multiple conditions.

Example:

You want to count how many times Product A experienced production below 1,000 units.

```excel
=COUNTIFS(B2:B10,"A",C2:C10,"<1000")
```

This is useful for:
- Counting late supplier deliveries.
- Counting stockout events.
- Identifying production failures.
- Counting products with forecast errors above a threshold.

### C. Lookup formulas

**Purpose:** Retrieve related information from another dataset.

For example, you have a product master:

| Product | Product Category |
|---|---|
| A | High Volume |
| B | Medium Volume |
| C | Low Volume |

Your transaction table contains only product codes.

Using INDEX and MATCH:

```excel
=INDEX($B$2:$B$4,MATCH(E2,$A$2:$A$4,0))
```

This retrieves the category corresponding to the product code in E2.

You can also use XLOOKUP in Excel versions that support it.

### D. PivotTables

PivotTables are among the most useful Excel features for S&OP analysis.

They allow you to summarize large datasets without manually writing multiple formulas.

Suppose you have 10,000 production records.

You want to determine:

- Total production per product.
- Monthly production output.
- Production per manufacturing line.
- Total demand per customer.
- Inventory by product category.

A PivotTable can quickly organize this information.

Example:

| Product | Jan | Feb | Mar | Grand Total |
|---|---:|---:|---:|---:|
| A | 1,000 | 1,100 | 1,200 | 3,300 |
| B | 800 | 900 | 850 | 2,550 |
| C | 500 | 600 | 700 | 1,800 |

You can also add filters and slicers to explore different segments.

**When to use PivotTables:** When you need to summarize and compare large amounts of structured data quickly.

### E. Charts and visualization

Charts help communicate patterns that may not be immediately obvious in a table.

| Chart Type | Common S&OP Application |
|---|---|
| Line Chart | Demand and inventory trends |
| Column Chart | Actual versus forecast |
| Stacked Column | Product mix |
| Bar Chart | Pareto analysis |
| Scatter Plot | Correlation analysis |
| Waterfall Chart | Variance bridge and financial impact |
| Combo Chart | Demand versus inventory or production |

A good chart should answer a specific business question.

For example, if the question is whether inventory is increasing while demand is decreasing, a suitable chart can show both variables over the same periods.

Avoid adding charts simply to make a report look impressive.

## 5.2 Introduction to Power BI

**BUSINESS INTELLIGENCE TOOL**

Microsoft Power BI is a business intelligence tool used to connect, transform, analyze, and visualize data.

Its main purpose is to turn information from multiple sources into interactive reports and dashboards.

### Important Power BI components

| Component | Purpose |
|---|---|
| Power Query | Import and transform data |
| Data Model | Establish relationships between tables |
| DAX | Create calculations and measures |
| Visualizations | Present analytical results |
| Reports | Interactive analytical pages |
| Dashboards | Consolidated KPI monitoring views in the Power BI service |

Example of an S&OP dashboard:

- Forecast Accuracy by product.
- Production Attainment by plant.
- Inventory DOS by SKU.
- Supplier OTD by supplier.
- Revenue versus target.
- Demand versus available supply.

### When should you use Power BI?

Use Power BI when:
- You regularly consolidate multiple datasets.
- Management needs interactive reports.
- Reports must be refreshed periodically.
- Different departments need different views of the same data.
- You need drill-down capabilities.

Excel is often sufficient for smaller or one-time analysis.

Power BI becomes more useful when reporting needs are recurring, multi-dimensional, and shared across departments.

## 5.3 Introduction to SQL

**DATABASE QUERY LANGUAGE**

SQL stands for Structured Query Language.

It allows analysts to retrieve, filter, combine, and summarize data stored in databases.

Imagine your company maintains millions of production records in a database.

Instead of manually downloading all records, you can retrieve only the information required.

Example:

```sql
SELECT
    Product,
    SUM(Production_Qty) AS Total_Production
FROM Production_Data
GROUP BY Product;
```

This query:
1. Retrieves the Product column.
2. Calculates total production.
3. Groups the results by product.

Another example:

```sql
SELECT *
FROM Inventory_Data
WHERE Available_Inventory < Safety_Stock;
```

This retrieves products with inventory below their safety stock levels.

### Important SQL concepts

| SQL Concept | Purpose |
|---|---|
| SELECT | Choose columns |
| FROM | Identify the source table |
| WHERE | Filter records |
| GROUP BY | Group records |
| ORDER BY | Sort results |
| JOIN | Combine tables |
| SUM | Calculate totals |
| AVG | Calculate averages |
| COUNT | Count records |

**When to use SQL:** When business data is stored in relational databases and you need to retrieve or consolidate large datasets efficiently.

## 5.4 Introduction to Python

**PROGRAMMING AND DATA ANALYSIS**

Python is useful for automating repetitive analytical tasks and performing more advanced statistical analysis.

Some commonly used Python libraries:

| Library | Purpose |
|---|---|
| pandas | Data manipulation and analysis |
| NumPy | Numerical calculations |
| Matplotlib | Data visualization |
| SciPy | Statistical and scientific methods |
| scikit-learn | Machine learning |

Example:

```python
import pandas as pd

data = pd.read_excel("SOP_Data.xlsx")

summary = (
    data.groupby("Product")
    [["Forecast", "Actual_Demand", "Production"]]
    .sum()
)

print(summary)
```

This code:
1. Reads an Excel dataset.
2. Groups the records by product.
3. Calculates total forecast, actual demand, and production.
4. Displays the summarized results.

Another example:

```python
data["Forecast_Error"] = (
    data["Actual_Demand"] - data["Forecast"]
)

data["Forecast_Error_Percent"] = (
    data["Forecast_Error"]
    / data["Actual_Demand"]
) * 100
```

This automatically calculates forecast errors for every record.

### When should you use Python?

Use Python when:
- You process large datasets.
- You need repeatable analytical workflows.
- You perform statistical analysis.
- You want to automate recurring data preparation.
- You develop forecasting or predictive models.

## 5.5 Choosing the right tool

| Tool | Best Application | Example |
|---|---|---|
| Excel | Calculations and ad hoc analysis | Forecast variance |
| PivotTables | Data summarization | Monthly demand by SKU |
| Power BI | Interactive reporting | S&OP KPI dashboard |
| SQL | Database retrieval | Extract production records |
| Python | Automation and advanced analytics | Demand forecasting |

A practical workflow can combine these tools.

For example:

**SQL**  
Retrieve production, demand, and inventory records

↓

**Python / Power Query**  
Clean, validate, and consolidate datasets

↓

**Excel / Python**  
Perform calculations and statistical analysis

↓

**Power BI**  
Present results through interactive reports

↓

**S&OP Management**  
Evaluate findings and agree on business actions

This is an example of a possible analytical workflow, not a mandatory technology architecture.

---

# 6. Practical Manufacturing Case Study

Now let's put the concepts together.

This will be our main case study for Topic 9.7.

## 6.1 Business scenario

Imagine you are an S&OP Analyst at a manufacturing company producing three products:

- Product A: High-volume product.
- Product B: Medium-volume product.
- Product C: Specialized product.

Management has noticed three problems:

1. Forecast accuracy has declined.
2. Some products are experiencing shortages while others have excess inventory.
3. Supplier delivery performance has become inconsistent.

Your assignment is to analyze the data and recommend appropriate actions.

**All figures below are illustrative assumptions for training purposes.**

## 6.2 Dataset A: Historical Demand and Forecast

**Units per month**

| Month | Product | Forecast | Actual Demand |
|---|---|---:|---:|
| Jan | A | 1,000 | 1,100 |
| Feb | A | 1,050 | 1,150 |
| Mar | A | 1,100 | 1,300 |
| Apr | A | 1,150 | 1,400 |
| Jan | B | 800 | 750 |
| Feb | B | 850 | 800 |
| Mar | B | 900 | 850 |
| Apr | B | 950 | 800 |
| Jan | C | 500 | 450 |
| Feb | C | 500 | 480 |
| Mar | C | 550 | 600 |
| Apr | C | 550 | 900 |

### Analysis 1: Demand trends

Product A:

- Forecast increases from 1,000 to 1,150.
- Actual demand increases from 1,100 to 1,400.

Product B:

- Forecast increases from 800 to 950.
- Actual demand decreases from 750 to 800 after reaching 850.

Product C:

- Forecast remains relatively stable.
- Actual demand jumps from 600 to 900 in April.

**Initial findings:**

- Product A demonstrates sustained demand growth.
- Product B shows a potential overforecasting pattern.
- Product C has a significant April demand spike.

These are observations. We still need additional information before determining the underlying causes.

### Analysis 2: Forecast error

Let's calculate the April forecast error.

Product A:

[
1,400-1,150=250
]

Product B:

[
800-950=-150
]

Product C:

[
900-550=350
]

| Product | April Forecast | Actual | Forecast Error |
|---|---:|---:|---:|
| A | 1,150 | 1,400 | +250 |
| B | 950 | 800 | -150 |
| C | 550 | 900 | +350 |

Interpretation:

- Product A was underforecasted by 250 units.
- Product B was overforecasted by 150 units.
- Product C was underforecasted by 350 units.

Notice that the total forecast error can hide individual product problems.

Let's calculate April aggregate forecast:

[
1,150+950+550=2,650
]

Actual demand:

[
1,400+800+900=3,100
]

Aggregate error:

[
3,100-2,650=450
]

The company underestimated total demand by 450 units.

However, Product B was overforecasted.

This illustrates why segmentation is important.

### Analysis 3: Aggregate forecast accuracy

For this example, we will use WAPE (Weighted Absolute Percentage Error) as our aggregate error measurement.

[
WAPE=\frac{\sum|Actual-Forecast|}{\sum Actual}\times100
]

For April:

[
WAPE=\frac{250+150+350}{3,100}\times100
]

[
WAPE=24.19\%
]

If we express accuracy as:

[
Forecast\ Accuracy=100\%-WAPE
]

[
=100\%-24.19\%
]

[
=75.81\%
]

This is an illustrative accuracy convention. Organizations may use different forecast accuracy definitions and should clearly document their chosen methodology.

The result indicates significant aggregate forecast error.

## 6.3 Dataset B: Production and Inventory

| Product | Planned Production | Actual Production | Beginning Inventory | Ending Inventory |
|---|---:|---:|---:|---:|
| A | 4,500 | 4,200 | 1,000 | 600 |
| B | 3,600 | 3,600 | 2,000 | 2,800 |
| C | 2,100 | 1,800 | 500 | 200 |

Assume these figures represent the same four-month reporting period.

### Analysis 4: Production attainment

[
Attainment=\frac{Actual}{Planned}\times100
]

Product A:

[
=\frac{4,200}{4,500}\times100=93.33\%
]

Product B:

[
=\frac{3,600}{3,600}\times100=100.00\%
]

Product C:

[
=\frac{1,800}{2,100}\times100=85.71\%
]

| Product | Production Attainment |
|---|---:|
| A | 93.33% |
| B | 100.00% |
| C | 85.71% |

Initial finding:

Product C has the lowest production attainment.

This deserves further investigation.

### Analysis 5: Inventory movement

For a simplified inventory reconciliation:

[
Ending\ Inventory=Beginning\ Inventory+Receipts-Issues
]

If we treat actual production as receipts and actual demand as issues, we can calculate:

Product A:

Total demand:

[
1,100+1,150+1,300+1,400=4,950
]

Expected ending inventory:

[
1,000+4,200-4,950=250
]

But the reported ending inventory is 600.

There is a discrepancy of 350 units.

Product B:

Total demand:

[
750+800+850+800=3,200
]

Expected ending inventory:

[
2,000+3,600-3,200=2,400
]

Reported ending inventory is 2,800.

Discrepancy: 400 units.

Product C:

Total demand:

[
450+480+600+900=2,430
]

Expected ending inventory:

[
500+1,800-2,430=-130
]

Reported ending inventory is 200.

Discrepancy: 330 units.

### Important analytical discovery

Our simplified inventory calculations do not reconcile with reported ending inventory.

Possible reasons:

- Inventory transfers.
- Customer returns.
- Production receipts timing.
- Scrap and write-offs.
- Data cut-off differences.
- Different units of measurement.
- Incomplete transaction records.

This is a very important lesson.

**Do not automatically trust a calculated result just because the formula is correct.**

You must also verify whether the data and assumptions are correct.

In a real manufacturing environment, this type of investigation is critical.

## 6.4 Dataset C: Supplier Performance

| Supplier | Purchase Orders | On-Time Deliveries | Average Lead Time |
|---|---:|---:|---:|
| Supplier X | 20 | 18 | 10 days |
| Supplier Y | 20 | 12 | 18 days |
| Supplier Z | 20 | 19 | 8 days |

Supplier OTD:

[
OTD=\frac{On-Time\ Deliveries}{Total\ Deliveries}\times100
]

| Supplier | OTD |
|---|---:|
| X | 90% |
| Y | 60% |
| Z | 95% |

Supplier Y has the weakest on-time delivery performance and the longest average lead time.

This could be related to Product C's production shortfall, but we cannot yet conclude that Supplier Y caused it.

We need to connect:
- Which materials are supplied by Supplier Y?
- Does Product C require those materials?
- Did the material shortages occur during the affected production periods?
- Were there other production constraints?

This is diagnostic analytics.

## 6.5 Consolidated findings

Let's summarize the observations.

| Area | Finding | Possible Business Risk |
|---|---|---|
| Demand A | Continuous growth | Potential shortage |
| Demand B | Forecast above actual | Excess inventory risk |
| Demand C | Sudden April spike | Demand-supply imbalance |
| Production A | 93.33% attainment | Potential supply gap |
| Production B | 100% attainment | Production plan achieved |
| Production C | 85.71% attainment | Potential shortage |
| Inventory | Reconciliation differences | Incorrect inventory decisions |
| Supplier Y | 60% OTD | Material availability risk |

## 6.6 From findings to business recommendations

Now comes the most important part.

An S&OP Analyst should not stop at the analysis.

The analyst must help the business determine what action should be taken.

| Finding | Recommended Investigation / Action |
|---|---|
| Product A demand consistently increasing | Review demand forecast and evaluate additional production requirements |
| Product B actual demand below forecast | Reassess forecast assumptions and future procurement quantities |
| Product C April demand spike | Validate customer orders and determine whether the increase is recurring |
| Product C production attainment is low | Review capacity, downtime, material availability, and production scheduling |
| Inventory records do not reconcile | Conduct inventory reconciliation before making allocation decisions |
| Supplier Y has poor OTD | Review material-level delivery history and establish supplier recovery actions |

Notice that some recommendations are immediate actions, while others require additional validation.

That is how professional S&OP analysis should work.

---

# 7. Business Perspective and Decision-Making

## 7.1 How an S&OP Analyst transforms data into insights

A professional S&OP Analyst must understand the difference between four things:

| Stage | Example |
|---|---|
| Data | Product C demand was 900 units |
| Information | Demand increased from 600 to 900 units |
| Insight | Demand increased by 50%, while the forecast remained at 550 units |
| Recommendation | Validate whether the demand increase is recurring and adjust the forecast and supply plan accordingly |

The business value is created when the analyst converts information into a decision.

## 7.2 Demand-Supply Reconciliation

This is where data analytics becomes especially valuable.

Suppose:

- Forecast demand = 10,000 units.
- Actual demand expectation = 12,000 units.
- Available inventory = 2,000 units.
- Planned production = 8,000 units.
- Available capacity = 7,000 units.

Total available supply:

[
Available\ Supply=Inventory+Planned\ Production
]

[
=2,000+8,000=10,000
]

Supply gap:

[
Demand-Supply=12,000-10,000
]

[
=2,000\ units
]

But there is also a capacity constraint:

[
Required\ Production=12,000-2,000=10,000
]

Available capacity is only 7,000 units.

Therefore:

[
Capacity\ Gap=10,000-7,000=3,000
]

This shows that simply revising the production schedule may not solve the problem.

Management must evaluate additional capacity, alternate supply, customer prioritization, or revised delivery commitments.

## 7.3 How to communicate findings to management

A useful analytical presentation should contain five elements:

1. **Business issue:** What is the problem?
2. **Evidence:** What data supports the observation?
3. **Impact:** What happens if the issue remains unresolved?
4. **Recommendation:** What action should be considered?
5. **Decision required:** What approval or alignment is needed?

Example:

**Management Analytical Brief**

**Issue:** Product C is experiencing a demand-supply imbalance.

**Evidence:** April demand reached 900 units against a forecast of 550 units. Production attainment was only 85.71%.

**Potential impact:** Increased risk of inventory shortages and delayed customer deliveries.

**Recommendation:** Validate the customer demand increase, review material availability, and assess additional production capacity.

**Decision required:** Approval to evaluate an alternative production schedule and supplier recovery plan.

This is much more useful than presenting ten Excel charts without explaining their business implications.

## 7.4 Presenting data versus recommending action

Consider these two statements:

**Statement A:**

"Supplier Y has an on-time delivery performance of 60%."

This is a finding.

**Statement B:**

"Supplier Y's 60% OTD performance and 18-day average lead time may expose Product C to material shortages. We recommend reviewing the affected material codes, establishing a supplier recovery plan, and evaluating qualified alternative sources."

This is an analytical recommendation.

The second statement connects the metric to a potential business risk and proposes an action.

That is the professional capability we want to develop.

---

# 8. Key Takeaways

Let's consolidate the important concepts.

| Concept | What You Should Remember |
|---|---|
| Data Analytics | Systematic examination of data to generate useful insights |
| Descriptive Analytics | What happened? |
| Diagnostic Analytics | Why did it happen? |
| Predictive Analytics | What might happen? |
| Prescriptive Analytics | What should we do? |
| Data Quality | Accuracy, completeness, consistency, and validity |
| Data Granularity | Level of detail in the dataset |
| Trend Analysis | Identifies patterns over time |
| Variance Analysis | Measures differences between actual and planned |
| Comparative Analysis | Compares products, periods, or business units |
| Segmentation | Divides data into meaningful groups |
| Aggregation | Summarizes data |
| Pareto Analysis | Identifies major contributors |
| Correlation | Measures statistical relationships |
| Outlier Detection | Identifies unusual observations |
| Root Cause Investigation | Investigates underlying reasons |
| Demand Analytics | Evaluates customer demand and forecast performance |
| Supply Analytics | Evaluates production and supply capabilities |
| Inventory Analytics | Evaluates inventory availability and imbalance |

### The five things I want you to remember

1. Reporting tells you what happened. Analytics helps you investigate and understand the business situation.
2. Data quality must be established before analysis.
3. Always analyze data at the appropriate level of detail.
4. Correlation does not prove causation.
5. Every important analytical finding should be connected to a potential business impact and appropriate action.

**Connection to Topic 9.8:** We now understand how to generate insights. The next topic will focus on how to organize, communicate, and monitor those insights through S&OP reporting and dashboards. We will not proceed until you confirm.

---

# 9. Knowledge Check and Practical Exercises

Now let's test your understanding.

For this assessment, I want you to approach the questions as an S&OP Analyst, not simply as someone memorizing definitions.

## Part A. Conceptual Understanding

Answer in your own words.

**1.** What is the difference between Descriptive, Diagnostic, Predictive, and Prescriptive Analytics? Give one manufacturing example for each.

**2.** A company reports that its forecast accuracy decreased from 92% to 75%.

Why is reporting this KPI insufficient? What additional analysis should an S&OP Analyst perform?

**3.** Explain the difference between data segmentation and data aggregation. When would you use each?

**4.** Why is it dangerous to remove an outlier automatically from a manufacturing dataset?

**5.** A company observes that production output increases whenever machine operating hours increase. Can we conclude that machine operating hours caused the increase? Explain.

## Part B. Situational Analysis

**6. Forecast and Demand Investigation**

A company has the following performance:

| Product | Forecast | Actual Demand |
|---|---:|---:|
| A | 5,000 | 6,000 |
| B | 4,000 | 3,000 |
| C | 2,000 | 2,500 |

Questions:

a. Which products were underforecasted?

b. Which products were overforecasted?

c. Why is analyzing only total demand potentially misleading?

d. What would you recommend to the demand planning team?

**7. Production Investigation**

A manufacturing plant reports:

- Planned production: 20,000 units.
- Actual production: 17,000 units.
- Machine downtime: 15 hours.
- Material shortage: 2 days.
- Labor availability: Normal.

Questions:

a. Calculate production attainment.

b. Identify the potential contributing factors.

c. What additional information would you request?

d. What actions would you recommend?

**8. Supplier Risk Investigation**

Supplier A has an OTD of 95%, while Supplier B has an OTD of 65%.

However, Supplier B supplies a material used in the company's highest-volume product.

Which supplier should receive greater management attention, and why?

Explain why supplier performance should not be evaluated using OTD alone.

## Part C. Numerical Exercises

**9. Forecast Analytics**

Calculate the following:

| Month | Forecast | Actual |
|---|---:|---:|
| January | 1,000 | 1,200 |
| February | 1,100 | 1,000 |
| March | 1,200 | 1,500 |
| April | 1,300 | 1,300 |

Find:

a. Forecast error per month.

b. Absolute forecast error per month.

c. MAE.

d. WAPE.

**10. Inventory Analytics**

A product has:

- Beginning inventory: 2,000 units.
- Production receipts: 5,000 units.
- Actual demand: 6,000 units.
- Ending inventory reported: 1,500 units.

Calculate:

a. Expected ending inventory.

b. Inventory reconciliation discrepancy.

c. Possible reasons for the discrepancy.

d. What should the S&OP Analyst do before using the inventory figure for supply planning?

## Part D. Practical Excel Exercise

**11.** Assume you have a dataset containing the following columns:

| Date | Product | Customer | Forecast | Actual Demand | Production | Supplier |
|---|---|---|---:|---:|---:|---|
| Jan | A | C001 | 1,000 | 1,100 | 1,050 | X |
| Jan | B | C002 | 800 | 750 | 800 | Y |
| Feb | A | C001 | 1,100 | 1,300 | 1,100 | X |
| Feb | B | C002 | 850 | 900 | 850 | Y |

Explain how you would use Excel to:

a. Calculate total demand per product.

b. Calculate forecast error.

c. Identify products with actual demand exceeding forecast.

d. Summarize monthly production using a PivotTable.

e. Create a chart comparing forecast and actual demand.

f. Identify which products require further investigation.

## Part E. Professional-Level Analytical Challenge

**12. Management Case**

You are presenting to the S&OP leadership team.

Your analysis identifies the following:

- Demand increased by 20%.
- Production attainment declined to 85%.
- Supplier OTD declined to 70%.
- Inventory increased by 15%.
- Customer service level declined to 90%.

Management asks:

**"If demand is increasing, why is inventory also increasing while customer service is declining?"**

Prepare an analytical explanation.

Your answer should address:

1. Possible relationships between these KPIs.
2. Potential causes of the situation.
3. Additional data needed to validate your assumptions.
4. Recommended business actions.
5. How you would communicate your findings to management.

This is an important professional-level exercise because several KPIs may move in seemingly contradictory directions.

For example, total inventory can increase while shortages also increase if inventory is concentrated in the wrong products, locations, or materials.

---

## Assessment Guide

| Level | What I will evaluate |
|---|---|
| Level 1: Understanding | Correct understanding of analytical concepts |
| Level 2: Technical Application | Correct formulas, calculations, and methods |
| Level 3: Professional Analysis | Ability to identify problems, validate causes, and recommend actions |

**How we'll proceed:**

- You answer the exercises.
- I'll check each answer and identify what you understood correctly.
- I'll correct calculation errors and explain the reasoning.
- I'll assess your ability to translate findings into business recommendations.
- I'll provide additional exercises for any areas that need improvement.

My recommendation is to answer Parts A–C first, then proceed to the Excel and management exercises.

**Final objective of Topic 9.7:** Hindi lang marunong mag-compute ng KPIs or gumawa ng charts. You should be able to look at a business dataset, recognize what is happening, investigate why it is happening, and recommend what the organization should do based on evidence.

We will remain on **Module 9 – Topic 9.7** until you've completed the learning and exercises.
