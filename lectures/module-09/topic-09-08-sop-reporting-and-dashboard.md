---
module: 9
topic: "9.8"
title: "S&OP Reporting and Dashboard"
language: "Taglish"
status: "complete"
---

# Module 9 – Topic 9.8: S&OP Reporting and Dashboard

**Main objective:** Learn how to transform raw operational and supply chain data into meaningful reports and dashboards that help management understand business performance, identify problems, and make decisions.

---

# 1. Topic Overview

## 1.1 What is S&OP Reporting and Dashboard?

Imagine that you're working as an S&OP Analyst in a manufacturing company.

Every department gives you information:

- Sales provides customer demand and sales forecasts.
- Production provides actual production output and production plans.
- Supply Chain provides inventory levels and material availability.
- Procurement provides supplier performance and purchase order status.
- Manufacturing Engineering provides production capacity and resource utilization.
- Finance provides revenue, cost, and financial projections.

The problem?

Each department has its own data, reports, spreadsheets, and interpretation of performance.

Management cannot simply review hundreds of Excel files every month. They need a consolidated view of the business.

**This is where S&OP Reporting and Dashboards come in.**

S&OP reporting organizes information from different departments into structured reports, while dashboards present the most important information in a way that makes business performance easier to understand.

The ultimate purpose is to answer five important management questions:

1. **What happened?** – Historical performance.
2. **What is happening?** – Current business situation.
3. **What will happen?** – Future projections.
4. **What are the problems?** – Risks, gaps, and exceptions.
5. **What should we do?** – Recommended business actions.

Notice the last question. This is particularly important.

An effective S&OP dashboard should not simply tell management that inventory is low. It should help management understand which products are affected, when shortages will occur, what the business impact will be, and what action is necessary.

## 1.2 Why is this topic important?

Sa previous topics, natutunan natin kung paano mag-analyze ng different S&OP components.

However, kahit tama ang analysis mo, kung hindi mo maipapakita nang malinaw ang findings, mahihirapan ang management na gumawa ng decisions.

For example:

You discover that:

- Demand is increasing by 15%.
- Production capacity is already at 95%.
- Inventory coverage is declining.
- One critical supplier has a delayed delivery.
- Projected revenue is at risk.

These findings are valuable.

But management needs to understand how these problems are connected.

A properly designed dashboard makes these relationships visible.

**Think of an S&OP dashboard as the business control panel of an organization.**

It helps management see whether the business is on track or whether intervention is required.

## 1.3 Connection to previous topics

Topic 9.8 brings together the concepts covered in Topics 9.1 through 9.7.

| Previous topic | Connection to reporting |
|---|---|
| 9.1 – S&OP Fundamentals | Overall business performance and planning alignment |
| 9.2 – Demand Planning | Demand forecasts and forecast accuracy |
| 9.3 – Supply Planning | Production performance and supply availability |
| 9.4 – Inventory Management | Inventory health, coverage, and shortages |
| 9.5 – Capacity Planning | Capacity utilization and constraints |
| 9.6 – KPI Analysis and Interpretation | Performance evaluation and root-cause identification |
| 9.7 – Data Analytics for S&OP | Identifying patterns, trends, and business insights |
| **9.8 – S&OP Reporting and Dashboard** | Communicating all these findings to management |
| 9.9 – Continuous Improvement | Using reported performance gaps to improve business processes |

The important distinction:

Topics 9.1–9.7 help you understand and analyze the business.

Topic 9.8 teaches you how to communicate those findings effectively.

Topic 9.9 will build on this by using performance information to drive continuous improvement.

## 1.4 Learning objectives

After completing this lesson, you should be able to:

1. Explain the purpose of S&OP reports and dashboards.
2. Differentiate operational reports, management reports, and executive dashboards.
3. Identify essential S&OP reports and KPIs.
4. Design appropriate visualizations for different types of information.
5. Consolidate and validate information from different departments.
6. Use Excel, Power BI, SQL, and Python for reporting.
7. Convert raw manufacturing data into management-ready information.
8. Identify business exceptions and recommend appropriate actions.
9. Present S&OP performance clearly to management.

---

# 2. Layman's Explanation

## 2.1 Understanding the difference between raw data, reports, and dashboards

Let's use a manufacturing company as an example.

Suppose the company manufactures electronic components.

At the end of November, you receive the following information:

| Department | Information provided |
|---|---|
| Sales | Forecast: 100,000 units |
| Production | Actual output: 90,000 units |
| Supply Chain | Ending inventory: 20,000 units |
| Procurement | Material shortage: 5,000 units |
| Manufacturing | Capacity utilization: 95% |
| Finance | Revenue: ₱10 million |

These are your raw business information.

But imagine sending this information directly to the General Manager.

The manager might ask:

- Is production sufficient to support demand?
- Why is capacity utilization already 95%?
- Is the inventory sufficient for next month?
- How serious is the material shortage?
- Will the shortage affect revenue?
- What decisions should we make?

The numbers alone do not answer these questions.

Let's transform the information.

**Stage 1: Raw data**

Individual departmental information.

**Stage 2: Reports**

Organized information with calculations, comparisons, and performance indicators.

**Stage 3: Dashboard**

A visual summary showing the most important KPIs, trends, gaps, and exceptions.

**Stage 4: Management decision**

Actions such as increasing production, expediting materials, reallocating inventory, or adjusting customer commitments.

### How raw data becomes a management decision

1. **RAW DATA:** Sales, production, inventory, procurement, finance.
2. **DATA VALIDATION AND CONSOLIDATION:** Check accuracy, consistency, and completeness.
3. **REPORTS AND KPI CALCULATIONS:** Actual vs. target, forecast accuracy, inventory coverage.
4. **S&OP DASHBOARD:** Performance, trends, exceptions, and risks.
5. **MANAGEMENT DECISIONS:** Actions, responsibilities, and expected outcomes.

## 2.2 An everyday analogy

Imagine driving a car.

You have several instruments:

- Speedometer: How fast are you going?
- Fuel gauge: How much fuel remains?
- Temperature gauge: Is the engine overheating?
- Warning indicators: Is something wrong?

These instruments are not there just to display numbers.

They help you decide whether to accelerate, slow down, refuel, or stop.

An S&OP dashboard works similarly.

| Car instrument | S&OP equivalent |
|---|---|
| Speedometer | Production output |
| Fuel gauge | Inventory availability |
| Temperature gauge | Capacity utilization |
| Warning light | Supply shortage or demand-supply gap |
| Navigation system | Future demand and supply projections |

A dashboard that displays information without helping someone make a decision is like a car dashboard that displays numbers but has no warning indicators.

Technically impressive, but operationally useless.

---

# 3. Technical Explanation

## 3.1 What is S&OP Reporting?

**S&OP Reporting** is the systematic process of collecting, consolidating, analyzing, and communicating information about demand, supply, inventory, capacity, and financial performance to support Sales and Operations Planning.

Its primary functions include:

- Performance monitoring.
- KPI measurement.
- Plan-versus-actual comparison.
- Exception identification.
- Risk assessment.
- Business outlook communication.
- Management decision support.

S&OP reporting generally follows an established reporting calendar, often aligned with the monthly S&OP cycle.

## 3.2 Report vs. Dashboard vs. KPI Scorecard vs. Executive Presentation

These four terms are related, but they are not interchangeable.

| Item | Primary purpose | Typical content |
|---|---|---|
| Report | Provide detailed information | Tables, calculations, transaction-level data |
| Dashboard | Monitor business performance | KPIs, charts, trends, exceptions |
| KPI Scorecard | Evaluate performance against objectives | KPI, target, actual, variance, status |
| Executive Presentation | Communicate findings and obtain decisions | Key issues, business impact, recommendations |

Let's understand each one.

### A. Operational Report

An operational report contains detailed information used by employees who directly manage day-to-day activities.

Example: Production Performance Report.

| Production line | Planned output | Actual output | Achievement |
|---|---:|---:|---:|
| Line A | 10,000 | 9,500 | 95% |
| Line B | 12,000 | 11,000 | 91.7% |
| Line C | 8,000 | 8,000 | 100% |

Production supervisors can use this report to identify which production lines are underperforming.

**Typical audience:** Production planners, supervisors, supply planners, procurement teams.

**Typical frequency:** Daily or weekly.

### B. Management Report

A management report summarizes operational information into business performance and issues that require management attention.

Example:

| KPI | Actual | Target | Status |
|---|---:|---:|---|
| Production achievement | 94% | 98% | Below target |
| Forecast accuracy | 85% | 90% | Below target |
| Inventory coverage | 18 days | 25 days | Below target |
| Capacity utilization | 95% | 85% | Above target |

Notice that management does not necessarily need every production transaction.

They need to understand the performance gaps.

**Typical audience:** Department managers, S&OP managers, operations managers.

**Typical frequency:** Weekly or monthly.

### C. Executive Dashboard

An executive dashboard is a high-level visual summary of the organization's most important business indicators.

Its focus is strategic visibility.

For example:

- Revenue performance.
- Demand outlook.
- Supply availability.
- Inventory health.
- Capacity constraints.
- Financial risks.
- Major decisions required.

**Typical audience:** General Manager, Vice Presidents, Directors, Executive Leadership.

**Typical frequency:** Monthly, aligned with the executive S&OP review.

### Important distinction

An operational report answers:

"What happened on Production Line A?"

A management report answers:

"Why did production performance fall below target?"

An executive dashboard answers:

"Will the production shortfall affect our ability to meet customer demand and revenue commitments?"

An executive presentation answers:

"What decision do we need from leadership to resolve this?"

## 3.3 Characteristics of an Effective S&OP Report

A good report should have these characteristics.

| Characteristic | Explanation |
|---|---|
| Accurate | Numbers must reflect actual business conditions |
| Relevant | Information must support the intended audience |
| Timely | Information must be available when decisions are made |
| Consistent | KPI definitions and reporting periods must be standardized |
| Comparable | Actuals must be compared against appropriate targets or plans |
| Actionable | Exceptions should lead to investigation or action |
| Understandable | Information must be easy to interpret |
| Traceable | Data sources and calculation methods should be identifiable |

One important professional principle:

**A visually attractive dashboard with incorrect data is worse than a plain report with accurate data.**

Because management may make decisions based on misleading information.

## 3.4 Reporting Frequency, Audience, and Level of Detail

Hindi lahat ng reports ay kailangang i-update daily. Depende ito sa purpose ng report, business process, at kung sino ang gagamit.

| Reporting level | Frequency | Main audience | Level of detail |
|---|---|---|---|
| Operational | Daily | Supervisors, planners | Detailed |
| Tactical | Weekly | Department managers | Moderate |
| Management S&OP | Monthly | Functional managers | Consolidated |
| Executive S&OP | Monthly | Senior leadership | High-level |
| Strategic | Quarterly or annually | Executive leadership | Long-term outlook |

**Example:**

Suppose production output suddenly decreases.

- Daily report: Identifies which production line experienced the decrease.
- Weekly report: Shows whether the decrease is recurring.
- Monthly S&OP report: Shows its impact on supply availability.
- Executive dashboard: Shows whether customer demand and revenue are at risk.

The information may originate from the same production data, but the presentation changes depending on the audience.

---

# 4. Detailed Discussion

## 4.1 Essential S&OP Reports

There are several categories of reports that an S&OP Analyst should understand.

### A. Demand and Forecast Performance Report

This report monitors customer demand and the accuracy of demand forecasts.

Its purpose is to determine whether the organization's demand plan is aligned with actual customer requirements.

Common information:

- Actual customer demand.
- Forecast demand.
- Previous forecast.
- Current forecast.
- Forecast accuracy.
- Forecast bias.
- Demand growth.
- Customer-level demand changes.
- Product-level demand changes.

**Example:**

| Product | Forecast | Actual demand | Variance |
|---|---:|---:|---:|
| Product A | 10,000 | 12,000 | +2,000 |
| Product B | 15,000 | 13,000 | -2,000 |
| Product C | 8,000 | 8,500 | +500 |

Interpretation:

- Product A experienced higher-than-expected demand.
- Product B experienced lower-than-expected demand.
- Product C was relatively close to forecast.

Why does this matter?

If actual demand consistently exceeds forecast, the company may experience inventory shortages and missed customer deliveries.

On the other hand, if forecast consistently exceeds actual demand, the company may accumulate excess inventory.

The report helps determine whether the demand plan needs adjustment.

### B. Supply and Production Performance Report

This report evaluates whether the organization can produce and deliver the required quantity of products.

Typical information:

- Planned production.
- Actual production.
- Production achievement.
- Production backlog.
- Production schedule adherence.
- Yield and scrap rates, when relevant.
- Unplanned downtime.
- Production constraints.
- Material availability.

**Example:**

| Production metric | Actual | Target |
|---|---:|---:|
| Planned production | 100,000 | 100,000 |
| Actual production | 92,000 | 100,000 |
| Production achievement | 92% | 98% |
| Schedule adherence | 90% | 95% |

Interpretation:

Production is below target.

However, the report alone does not tell us why.

Possible causes include:

- Insufficient raw materials.
- Machine breakdown.
- Labor shortage.
- Lower production efficiency.
- Product mix changes.
- Excessive changeover time.

The S&OP Analyst must coordinate with the responsible departments to identify the underlying cause.

### C. Inventory Status and Projection Report

This report monitors inventory availability and determines whether the company can support future demand.

Important information:

- Beginning inventory.
- Production receipts.
- Customer demand.
- Shipments.
- Ending inventory.
- Safety stock.
- Days of Supply (DOS).
- Inventory aging.
- Excess and obsolete inventory.
- Projected inventory.

The difference between inventory status and inventory projection is important.

**Inventory status** tells you what you have now.

**Inventory projection** estimates how much inventory you will have in the future.

Example:

| Month | Beginning inventory | Production | Demand | Ending inventory |
|---|---:|---:|---:|---:|
| November | 20,000 | 40,000 | 45,000 | 15,000 |
| December | 15,000 | 40,000 | 50,000 | 5,000 |
| January | 5,000 | 45,000 | 55,000 | -5,000 |

Notice what happens in January.

Projected demand exceeds available inventory.

The negative 5,000 units indicate a projected shortage of 5,000 units, assuming no additional supply or other inventory adjustments.

This is a critical S&OP exception.

Management can investigate whether to:

- Increase production.
- Expedite materials.
- Transfer inventory from another plant.
- Prioritize customer orders.
- Adjust delivery commitments.

### D. Capacity and Resource Utilization Report

This report evaluates whether the available production resources can support the required production plan.

Common information:

- Available production hours.
- Required production hours.
- Machine utilization.
- Labor utilization.
- Available capacity.
- Bottleneck operations.
- Overtime requirements.
- Capacity shortages.

Example:

| Production line | Available hours | Required hours | Utilization |
|---|---:|---:|---:|
| Line A | 500 | 450 | 90% |
| Line B | 500 | 475 | 95% |
| Line C | 500 | 400 | 80% |

Interpretation:

Line B has the highest utilization.

It may become a bottleneck if demand increases.

However, high utilization is not automatically good or bad.

A company operating at 95% utilization may appear efficient, but it may have very limited flexibility to accommodate:

- Unexpected demand.
- Machine breakdowns.
- Additional customer orders.
- Product mix changes.

This is why capacity reports must be analyzed together with demand projections.

### E. Financial Performance Report

S&OP is not only about producing enough products.

It must also support the organization's financial objectives.

The financial report connects operational plans with business performance.

Typical KPIs:

- Revenue.
- Gross margin.
- Manufacturing cost.
- Inventory value.
- Freight and expedite costs.
- Overtime costs.
- Budget variance.
- Revenue forecast.

Example:

| Financial KPI | Budget | Forecast | Variance |
|---|---:|---:|---:|
| Revenue | ₱10M | ₱9.5M | -₱0.5M |
| Manufacturing cost | ₱6M | ₱6.3M | +₱0.3M |
| Gross profit | ₱4M | ₱3.2M | -₱0.8M |

Interpretation:

Revenue is below budget while manufacturing costs are higher than expected.

This creates a double financial impact:

1. Lower revenue.
2. Higher production costs.

The management team must investigate the operational reasons behind these financial results.

### F. Demand-Supply Gap and Exception Report

This is one of the most important S&OP reports.

Its purpose is to identify differences between what customers require and what the organization can supply.

The basic calculation is:

\[
\text{Demand-Supply Gap}=\text{Supply}-\text{Demand}
\]

Example:

| Product | Demand | Available supply | Gap |
|---|---:|---:|---:|
| A | 50,000 | 55,000 | +5,000 |
| B | 40,000 | 35,000 | -5,000 |
| C | 30,000 | 30,000 | 0 |

Interpretation:

- Product A has a supply surplus.
- Product B has a supply shortage.
- Product C is balanced.

This report helps management identify where intervention is required.

Importantly, supply should be defined consistently. It may include available inventory, confirmed production, and other eligible supply receipts within the planning period. Avoid double-counting inventory and production receipts.

### G. Risk, Opportunity, and Action-Item Tracker

This report translates identified problems into accountable business actions.

It is not enough to identify an exception.

Someone must own the action required to resolve it.

Example:

| Issue | Business impact | Action | Owner | Due date |
|---|---|---|---|---|
| Supplier delay | Material shortage | Expedite delivery | Procurement | Nov. 20 |
| Low production output | Supply gap | Review production schedule | Production | Nov. 18 |
| Rising demand | Inventory risk | Revise demand plan | Sales | Nov. 19 |
| Excess inventory | Working capital impact | Review production orders | Supply Chain | Nov. 25 |

A good action tracker should contain:

- Issue or opportunity.
- Root cause, if known.
- Business impact.
- Proposed action.
- Responsible owner.
- Due date.
- Current status.
- Expected result.

**Professional reminder:** An action item without an owner and due date is usually just an observation.

## 4.2 S&OP Dashboard Components

Now that we understand the different reports, let's discuss how they come together in a dashboard.

An S&OP dashboard should organize information into meaningful sections.

A useful structure consists of eight components.

### Component 1: KPI Scorecard

This provides a quick overview of business performance.

Example:

| KPI | Actual | Target | Status |
|---|---:|---:|---|
| Forecast accuracy | 85% | 90% | Below |
| Production achievement | 94% | 98% | Below |
| Inventory DOS | 18 days | 25 days | Below |
| Capacity utilization | 95% | 85% | Above |
| On-time delivery | 92% | 98% | Below |

Why use a scorecard?

Because management should immediately recognize which indicators require attention.

A scorecard is particularly useful when the organization has established KPI targets.

### Component 2: Actual vs. Target and Actual vs. Forecast

These are two different comparisons.

**Actual vs. Target**

Measures performance against an established business objective.

Example:

- Production target: 100,000 units.
- Actual production: 92,000 units.
- Performance: 92%.

**Actual vs. Forecast**

Measures how actual business results compare with the previously established forecast.

Example:

- Sales forecast: 100,000 units.
- Actual sales: 110,000 units.
- Demand exceeded forecast by 10%.

Why are these different?

A target represents what the business wants to achieve.

A forecast represents what the business currently expects to happen.

You can meet your forecast but still miss your target.

For example, your revenue forecast may be ₱9 million, actual revenue may be ₱9 million, but your target may be ₱10 million.

You achieved your forecast, but missed your target.

### Component 3: Historical Trends and Performance Comparisons

A single month's performance does not always tell the complete story.

Consider production achievement:

| Month | Achievement |
|---|---:|
| July | 98% |
| August | 97% |
| September | 95% |
| October | 93% |
| November | 90% |

The trend reveals continuous deterioration.

A dashboard should help management identify whether performance is:

- Improving.
- Declining.
- Stable.
- Fluctuating.

Historical trends are especially useful for identifying recurring problems.

### Component 4: Demand and Supply Projections

This component shows the expected future relationship between customer requirements and available supply.

Example:

| Month | Demand forecast | Supply plan | Gap |
|---|---:|---:|---:|
| November | 100,000 | 100,000 | 0 |
| December | 110,000 | 105,000 | -5,000 |
| January | 120,000 | 110,000 | -10,000 |
| February | 125,000 | 115,000 | -10,000 |

This makes the future supply shortage visible.

The management team can intervene before the shortage actually happens.

### Component 5: Inventory Health Indicators

This section monitors whether inventory is sufficient, excessive, or at risk.

Possible indicators:

- Inventory value.
- Days of Supply.
- Safety stock compliance.
- Excess inventory.
- Obsolete inventory.
- Projected stockouts.

One useful visualization is an inventory health classification.

| Inventory condition | Interpretation |
|---|---|
| Below safety stock | Critical shortage risk |
| Within acceptable range | Healthy inventory |
| Above maximum target | Excess inventory risk |
| No future demand | Potential obsolete stock |

Note that actual thresholds must be established by the organization and product-specific planning policies.

### Component 6: Capacity Constraints and Supply Risks

This component identifies operational limitations.

Example:

- Line A: 80% utilization.
- Line B: 95% utilization.
- Line C: 105% required capacity.

Line C requires attention because the production requirement exceeds available capacity.

This can be presented using a capacity utilization chart or a constraint table.

### Component 7: Financial Performance and Business Outlook

This section connects operational performance with financial results.

For example:

| Indicator | Business outlook |
|---|---|
| Demand increase | Potential revenue opportunity |
| Production shortage | Potential lost sales |
| Excess inventory | Higher working capital |
| Overtime production | Higher manufacturing cost |
| Supplier expedite | Additional procurement or freight cost |

This is where S&OP becomes particularly valuable to senior management.

It connects operational decisions with financial consequences.

### Component 8: Alerts, Exceptions, and Management Actions

The dashboard should identify the issues that require attention.

Example:

| Exception | Priority | Required decision |
|---|---|---|
| January shortage of 10,000 units | High | Approve additional production |
| Line C exceeds capacity | High | Review capacity allocation |
| Excess Product A inventory | Medium | Reduce future production |
| Supplier delivery delay | High | Approve expedited sourcing |

The purpose is to move from performance monitoring to action.

## 4.3 Dashboard Design and Visualization

One of the most important skills of an S&OP Analyst is knowing which visualization to use.

Hindi lahat ng data ay dapat gawing graph.

The choice of visualization should depend on the question you want the user to answer.

### A. KPI Cards

Illustrative S&OP KPI cards:

| KPI | Actual | Reference |
|---|---:|---|
| Forecast accuracy | 92% | Target: 90% |
| Production achievement | 88% | Target: 98% |
| Inventory DOS | 18 | Target: 25 days |
| Capacity utilization | 96% | Target: 85% |

Illustrative figures only. Colors in a dashboard may represent assumed performance thresholds.

KPI cards are useful when management needs to see a small number of important indicators immediately.

They should generally include:

- KPI name.
- Actual value.
- Target or reference value.
- Variance or status.
- Reporting period.

Avoid placing too many KPI cards on one page.

### B. Line Charts

Use line charts when you want to show trends over time.

Best applications:

- Monthly demand trends.
- Forecast accuracy.
- Production output.
- Inventory projection.
- Revenue performance.

Illustrative monthly demand versus supply:

| Month | Demand | Supply |
|---|---:|---:|
| November | 100,000 | 100,000 |
| December | 110,000 | 105,000 |
| January | 120,000 | 110,000 |
| February | 125,000 | 115,000 |
| March | 130,000 | 125,000 |

Why use a line chart?

Because the management team can immediately see whether the demand-supply gap is increasing or decreasing.

### C. Bar Charts

Use bar charts when comparing different categories.

Examples:

- Production performance by plant.
- Inventory by product.
- Demand by customer.
- Capacity utilization by production line.
- Supplier performance.

Illustrative production achievement by line:

| Production line | Actual output | Target output |
|---|---:|---:|
| Line A | 9,500 | 10,000 |
| Line B | 11,000 | 12,000 |
| Line C | 8,000 | 8,000 |

The purpose is to make comparisons easier.

### D. Tables

Tables are useful when management needs exact values, details, or explanations.

Examples:

- Product-level shortage.
- Supplier delivery status.
- Action-item tracker.
- Inventory aging.
- Financial variance analysis.

Tables are especially useful when several dimensions must be viewed together.

### E. Conditional Formatting

Conditional formatting automatically changes the appearance of cells based on predefined conditions.

For example:

| Forecast accuracy | Status |
|---:|---|
| 95% | On target |
| 90% | On target |
| 85% | Below target |
| 70% | Critical |

In Excel, you can use:

Home → Conditional Formatting → Highlight Cell Rules.

In Power BI, you can use conditional formatting for tables, matrices, and KPI visuals.

**Important:** Define the thresholds first. Do not arbitrarily assign green, yellow, and red.

Also, different KPIs require different interpretation. For example, high forecast accuracy is generally desirable, while excessively high capacity utilization may indicate risk.

### F. Filters and Drill-Down

Imagine that your dashboard shows the company's total inventory.

Management sees that inventory has decreased.

They may ask:

- Which product is responsible?
- Which customer is affected?
- Which plant has the shortage?
- Which supplier is causing the problem?

This is where filters and drill-down become useful.

A dashboard can provide filters for:

- Plant.
- Product.
- Product family.
- Customer.
- Supplier.
- Region.
- Reporting month.

**Filtering** narrows the information displayed.

**Drill-down** allows the user to move from summarized information to more detailed information.

Example:

Company inventory → Plant → Product family → Individual product.

This makes a dashboard useful for both management and investigation.

### G. Avoiding Dashboard Clutter

A common beginner mistake is putting every available KPI into one dashboard.

This creates information overload.

A dashboard with 50 KPIs may be less useful than one with 10 carefully selected KPIs.

Common design mistakes:

1. Too many charts.
2. Too many colors.
3. Unnecessary decorative graphics.
4. Missing reporting periods.
5. No target or comparison values.
6. Inconsistent units.
7. Missing data sources.
8. Using pie charts for complicated comparisons.
9. Showing historical data without explaining its relevance.
10. Displaying KPIs without indicating what action is needed.

The golden principle:

**Every chart, KPI, and table should answer a business question.**

## 4.4 Data Preparation and Reporting Process

This is where the technical work of an S&OP Analyst becomes important.

A dashboard is only as reliable as the data behind it.

Let's discuss the typical process.

### Step 1: Data Collection

Collect information from the different departments.

| Department | Data required |
|---|---|
| Sales | Customer demand and forecasts |
| Production | Planned and actual output |
| Inventory | Beginning and ending stock |
| Procurement | Supplier deliveries and material availability |
| Manufacturing | Available capacity and utilization |
| Finance | Revenue, costs, and budget |

Possible sources include:

- ERP systems.
- Manufacturing Execution Systems (MES).
- Excel workbooks.
- Enterprise databases.
- Power BI datasets.
- Department-specific planning systems.

### Step 2: Data Consolidation

Different departments may provide different file formats.

For example:

Sales uses one Excel workbook.

Production uses another workbook.

Inventory uses an ERP export.

Finance provides a separate financial report.

You need to consolidate them into a consistent reporting structure.

One important consideration is the data grain.

**Data grain** refers to the level of detail represented by each record.

For example:

- One row per product per month.
- One row per customer per product per month.
- One row per production line per shift.

If you combine datasets with different levels of detail without understanding their relationships, you may accidentally duplicate values.

Example:

One product has five customer records, but production output is recorded only once for that product.

If you join these tables incorrectly, the production quantity could be repeated five times.

This creates an incorrect total.

### Step 3: Data Validation

Before calculating KPIs, check the quality of the information.

Important validation checks:

| Validation | What to check |
|---|---|
| Completeness | Are all expected records present? |
| Accuracy | Do values match the original source? |
| Consistency | Are units and definitions standardized? |
| Duplicates | Are records repeated? |
| Missing values | Are important fields blank? |
| Reporting period | Are all records within the correct period? |
| Reconciliation | Do totals match source systems? |

Example:

The production department reports 95,000 units, but the ERP report shows 92,000 units.

Do not simply choose one number.

Investigate:

- Are the reporting cut-off times different?
- Is one report showing good units only?
- Does the other include rework?
- Are there differences in production completion dates?
- Were transactions posted late?

This is called data reconciliation.

### Step 4: Standardize KPI Definitions

Imagine two departments reporting inventory coverage.

Department A uses:

\[
DOS=\frac{\text{Inventory}}{\text{Average Daily Demand}}
\]

Department B uses:

\[
DOS=\frac{\text{Inventory}}{\text{Forecast Daily Demand}}
\]

Both calculations may be mathematically correct, but they use different demand bases.

Their results may not be comparable.

Therefore, organizations should establish standardized KPI definitions.

A KPI definition should identify:

- KPI name.
- Purpose.
- Formula.
- Data source.
- Unit of measurement.
- Reporting frequency.
- Calculation period.
- Responsible department.
- Target or threshold.

This is called KPI governance.

### Step 5: Calculate KPIs and Identify Exceptions

After validation, calculate the required KPIs.

Compare the results against:

- Targets.
- Budgets.
- Previous periods.
- Forecasts.
- Planning assumptions.

Identify significant deviations.

### Step 6: Prepare Reports and Dashboard

Organize the information according to the intended audience.

For example:

- Detailed Excel report for planners.
- Management summary for department heads.
- Executive dashboard for leadership.

### Step 7: Review and Approve

Before distribution, the report should be checked by the appropriate data owners or process owners.

This helps prevent inaccurate information from reaching management.

### Step 8: Publish and Maintain Version Control

Establish:

- Reporting date.
- Data cut-off date.
- Report version.
- Data refresh timestamp.
- Report owner.
- Source system.

For example:

**S&OP Monthly Performance Report**

| Field | Value |
|---|---|
| Reporting period | November 2026 |
| Data cut-off | November 30, 2026 |
| Version | V1.0 |
| Status | Approved |
| Report owner | S&OP Analyst |

This prevents confusion when different versions of a report circulate.

---

# 5. Practical Examples and Applications

Let's now move from individual concepts to an actual manufacturing scenario.

## 5.1 Manufacturing Scenario

Imagine that you are working as an S&OP Analyst for a company manufacturing electronic components.

The company produces three product families:

- Product A
- Product B
- Product C

Management wants a consolidated November performance report and a three-month outlook.

The departments submit the following information.

### A. Demand Data

**NOVEMBER 2026 | ILLUSTRATIVE DATA**

| Product | Forecast | Actual demand |
|---|---:|---:|
| A | 50,000 | 55,000 |
| B | 40,000 | 38,000 |
| C | 30,000 | 32,000 |
| **Total** | **120,000** | **125,000** |

Observation:

Actual demand is higher than forecast by 5,000 units.

### B. Production Data

| Product | Planned | Actual |
|---|---:|---:|
| A | 55,000 | 50,000 |
| B | 40,000 | 38,000 |
| C | 30,000 | 27,000 |
| **Total** | **125,000** | **115,000** |

Observation:

Production achieved only 115,000 units against the planned 125,000 units.

### C. Inventory Data

| Product | Beginning inventory | Ending inventory |
|---|---:|---:|
| A | 15,000 | 10,000 |
| B | 12,000 | 12,000 |
| C | 10,000 | 5,000 |
| **Total** | **37,000** | **27,000** |

Observation:

Total inventory decreased by 10,000 units.

### D. Capacity Data

| Production line | Available hours | Required hours |
|---|---:|---:|
| Line A | 500 | 475 |
| Line B | 500 | 490 |
| Line C | 500 | 450 |

Observation:

Line B has very high capacity utilization.

### E. Financial Data

| Financial indicator | Budget | Actual |
|---|---:|---:|
| Revenue | ₱15M | ₱14M |
| Production cost | ₱9M | ₱9.5M |
| Gross profit | ₱6M | ₱4.5M |

Observation:

Revenue is below budget while production cost is higher than budget.

## 5.2 Converting Raw Data into Management KPIs

Let's calculate the KPIs.

### KPI 1: Demand Variance

Formula:

\[
\text{Demand Variance}=\text{Actual Demand}-\text{Forecast}
\]

Substitution:

\[
125,000-120,000=5,000
\]

Percentage variance:

\[
\frac{5,000}{120,000}\times100=4.17\%
\]

**Demand above forecast**

Interpretation:

Demand was 4.17% higher than forecast.

This means the supply plan may not be sufficient to meet actual customer requirements.

### KPI 2: Production Achievement

Formula:

\[
\text{Production Achievement}=
\frac{\text{Actual Production}}{\text{Planned Production}}\times100
\]

Substitution:

\[
\frac{115,000}{125,000}\times100
=92\%
\]

**Below target**

Interpretation:

The organization produced only 92% of its planned production volume.

This creates a potential supply gap.

### KPI 3: Inventory Change

Formula:

\[
\text{Inventory Change}=
\text{Ending Inventory}-\text{Beginning Inventory}
\]

Substitution:

\[
27,000-37,000=-10,000
\]

Percentage change:

\[
\frac{-10,000}{37,000}\times100=-27.03\%
\]

**Inventory decreased**

Interpretation:

Inventory decreased by approximately 27%.

However, declining inventory is not automatically bad.

We must compare the remaining inventory with future demand and safety stock.

### KPI 4: Capacity Utilization

Formula:

\[
\text{Capacity Utilization}=
\frac{\text{Required Hours}}{\text{Available Hours}}\times100
\]

For Line B:

\[
\frac{490}{500}\times100=98\%
\]

**High utilization**

Interpretation:

Line B has only 10 hours of remaining theoretical capacity.

If demand increases, the company may need overtime, additional shifts, or production reallocation.

### KPI 5: Revenue Achievement

Formula:

\[
\text{Revenue Achievement}=
\frac{\text{Actual Revenue}}{\text{Budget Revenue}}\times100
\]

\[
\frac{14M}{15M}\times100=93.33\%
\]

Revenue shortfall:

\[
15M-14M=₱1M
\]

Interpretation:

Revenue is ₱1 million below budget.

The S&OP team should investigate whether supply constraints, lower sales, or product mix changes contributed to the shortfall.

### KPI 6: Gross Profit Variance

\[
\text{Gross Profit Variance}=
\text{Actual Gross Profit}-\text{Budget Gross Profit}
\]

\[
4.5M-6M=-₱1.5M
\]

The company generated ₱1.5 million less gross profit than budgeted.

This is a major financial exception.

## 5.3 Building the Management KPI Scorecard

After calculating the KPIs, organize them into a management-ready summary.

**NOVEMBER 2026 | CONSOLIDATED MANAGEMENT SCORECARD**

| KPI | Actual | Target/Budget | Variance |
|---|---:|---:|---:|
| Demand volume | 125,000 | 120,000 | +4.17% |
| Production achievement | 92% | 98% | -6 pp |
| Inventory | 27,000 | 37,000* | -27.03% |
| Line B utilization | 98% | 85%* | +13 pp |
| Revenue | ₱14M | ₱15M | -₱1M |
| Gross profit | ₱4.5M | ₱6M | -₱1.5M |

*Inventory and capacity references are illustrative comparison assumptions, not necessarily approved organizational targets. pp = percentage points.*

Now we can see the overall situation.

The company has:

1. Higher demand than forecast.
2. Lower production than planned.
3. Declining inventory.
4. High utilization on Line B.
5. Revenue below budget.
6. Gross profit below budget.

These findings should not be interpreted separately.

They may be connected.

## 5.4 Management Interpretation: Connecting the KPIs

This is where you transition from reporting to analytical thinking.

Let's construct a possible business relationship.

**Possible operational relationship:**

1. Demand increased by 4.17%.
2. Production achieved only 92% of plan.
3. Inventory decreased by 27.03%.
4. Potential customer supply constraints.
5. Potential revenue and customer service risk.

*Illustrative hypothesis. Actual causality must be verified through order fulfillment, backlog, shipment, and production data.*

Notice the difference between reporting and analysis.

Reporting:

"Production achievement is 92%."

Analysis:

"Production underachievement occurred during a period of higher-than-forecast demand, potentially contributing to inventory depletion and future supply constraints."

Management recommendation:

"Review the production schedule, prioritize constrained products, and evaluate additional capacity for the next planning period."

That is the progression we want to develop.

## 5.5 Identifying Critical Exceptions

Not every KPI deviation deserves the same level of attention.

An S&OP Analyst must prioritize exceptions based on their business impact.

Let's use the following exception tracker.

| Exception | Severity | Business implication | Recommended action |
|---|---|---|---|
| Demand +4.17% | Medium | Potential additional supply requirement | Review forecast |
| Production achievement 92% | High | Potential supply shortage | Investigate production losses |
| Inventory down 27% | High | Reduced inventory buffer | Review future stock coverage |
| Line B utilization 98% | High | Limited capacity flexibility | Evaluate overtime or reallocation |
| Revenue shortfall ₱1M | High | Missed financial objective | Analyze lost sales and product mix |
| Gross profit shortfall ₱1.5M | High | Reduced profitability | Review cost and margin drivers |

These severity classifications are illustrative. Actual classifications should follow company-approved thresholds and business priorities.

### How should you prioritize exceptions?

Consider five factors:

1. **Magnitude:** How large is the deviation?
2. **Urgency:** How soon will the problem affect operations?
3. **Business impact:** How much revenue, cost, or customer service is affected?
4. **Probability:** How likely is the risk to happen?
5. **Controllability:** Can the organization take action to prevent or reduce the impact?

For example:

A shortage of 10,000 units that will occur tomorrow may be more urgent than a projected shortage of 15,000 units three months from now.

The larger number is not automatically the higher priority.

### Important: Separate facts, interpretations, and recommendations

Professional reporting should distinguish these three:

| Type | Example |
|---|---|
| Fact | Production achievement was 92%. |
| Interpretation | Production was 6 percentage points below target. |
| Recommendation | Investigate the production losses and evaluate recovery capacity. |

Never present an unverified explanation as an established root cause.

---

# 6. Formulas and Calculations

Let's consolidate the formulas that are particularly useful when preparing S&OP reports.

## 6.1 Essential Reporting Formulas

| KPI | Formula |
|---|---|
| Absolute variance | Actual − Reference |
| Percentage variance | (Actual − Reference) / Reference × 100 |
| Production achievement | Actual production / Planned production × 100 |
| Forecast error | Actual demand − Forecast |
| Forecast accuracy | Depends on the organization's approved methodology |
| Inventory change | Ending inventory − Beginning inventory |
| Inventory DOS | Inventory / Average daily demand |
| Capacity utilization | Required hours / Available hours × 100 |
| Revenue achievement | Actual revenue / Budget revenue × 100 |
| Gross profit | Revenue − Cost of goods sold |

### Important distinction: Percentage vs. percentage points

Suppose production achievement decreases from 98% to 92%.

The difference is:

\[
92\%-98\%=-6\text{ percentage points}
\]

The relative percentage decrease is:

\[
\frac{92-98}{98}\times100=-6.12\%
\]

These are not the same.

Use percentage points (pp) when comparing two percentage values directly.

## 6.2 Excel Formulas for S&OP Reporting

Since Excel is commonly used in S&OP environments, let's look at the formulas you should be comfortable using.

Assume your worksheet has this structure:

| Column | Field |
|---|---|
| A | Product |
| B | Month |
| C | Forecast |
| D | Actual Demand |
| E | Planned Production |
| F | Actual Production |
| G | Ending Inventory |

### A. SUMIFS

Purpose: Summarize values based on multiple conditions.

Example:

Calculate actual demand for Product A during November.

```excel
=SUMIFS(D:D,A:A,"Product A",B:B,"November")
```

This is useful when your raw data contains many products and months.

You can summarize:

- Actual demand by product.
- Production by plant.
- Inventory by product family.
- Revenue by customer.
- Supply by reporting month.

### B. COUNTIFS

Purpose: Count records satisfying multiple conditions.

Example:

Count how many records have Product A and production output below plan.

```excel
=COUNTIFS(A:A,"Product A",F:F,"<"&E:E)
```

The above is not a valid way to compare two ranges row by row using COUNTIFS criteria. Instead, use a helper column that calculates whether actual production is below plan, then count the flagged records:

```excel
=COUNTIFS(A:A,"Product A",H:H,"Below Plan")
```

This is a useful reporting technique because it allows you to count:

- Products below target.
- Delayed purchase orders.
- Critical inventory items.
- Production records with shortages.

### C. IF

Purpose: Automatically classify KPI performance.

Example:

```excel
=IF(B2>=C2,"On Target","Below Target")
```

Where:

- B2 = Actual performance.
- C2 = Target.

For multiple classifications:

```excel
=IF(B2>=C2,"On Target",
 IF(B2>=C2*0.9,"Warning","Critical"))
```

This is a simplified example. Actual warning thresholds should be defined by the business.

### D. INDEX and MATCH

Purpose: Retrieve information from a reference table.

Example:

You have a product master containing product names and assigned product families.

```excel
=INDEX(ProductFamilyRange,
 MATCH(A2,ProductCodeRange,0))
```

This is useful when combining reports from different departments.

For example, a production report may contain only product codes, while the management dashboard requires product family descriptions.

### E. SUMIFS for Monthly KPI Reporting

Suppose your raw data contains:

| Product | Month | Actual Demand |
|---|---|---:|
| A | Nov | 10,000 |
| B | Nov | 15,000 |
| A | Dec | 12,000 |
| B | Dec | 14,000 |

To calculate total November demand:

```excel
=SUMIFS(C:C,B:B,"Nov")
```

This allows your reporting template to summarize large datasets without manually adding records.

## 6.3 Automating Recurring Reports

An S&OP Analyst may prepare the same report every month.

Imagine manually performing these tasks:

1. Open sales workbook.
2. Copy demand data.
3. Open production workbook.
4. Copy production data.
5. Open inventory workbook.
6. Consolidate the numbers.
7. Calculate KPIs.
8. Prepare charts.
9. Format the report.
10. Send it to management.

Doing this manually every month is inefficient and increases the likelihood of errors.

Instead, organizations can automate recurring activities.

| Tool | Typical application |
|---|---|
| Excel formulas | KPI calculations and summaries |
| PivotTables | Flexible reporting by product, month, and plant |
| Power Query | Data extraction and transformation |
| VBA | Repetitive Excel task automation |
| Power BI | Interactive dashboards and visualization |
| SQL | Extracting and aggregating database information |
| Python | Data cleaning, validation, analytics, and automated report generation |

You don't need to use every tool for every report.

Choose the tool according to the problem.

---

# 7. Reporting Tools and Applications

Now let's examine the main reporting technologies used in S&OP environments.

## 7.1 Excel

**Foundation tool**

Excel remains useful for operational and management reporting.

Common applications:

- Monthly KPI reports.
- Forecast versus actual analysis.
- Inventory summaries.
- Production performance.
- Capacity calculations.
- Action trackers.
- PivotTables and charts.

**When to use Excel:**

When the dataset is manageable, calculations are relatively straightforward, and users need a flexible reporting template.

### PivotTables

A PivotTable allows you to summarize large datasets without manually creating separate formulas for every product or month.

Suppose you have 10,000 production records.

You want to summarize actual production by plant and month.

A PivotTable can organize the information into:

| Plant | November | December | January |
|---|---:|---:|---:|
| Plant A | 100,000 | 110,000 | 115,000 |
| Plant B | 90,000 | 95,000 | 105,000 |
| Plant C | 80,000 | 85,000 | 90,000 |

You can change the rows, columns, filters, and summarized values without rebuilding the report.

## 7.2 Power BI

**Dashboard and visualization tool**

Power BI is a business intelligence platform used to connect, transform, analyze, and visualize business data.

Its major components include:

**1. Power Query**

Used to extract, clean, transform, and consolidate data.

**2. Data Model**

Defines relationships between different datasets.

For example:

- Product table.
- Sales table.
- Production table.
- Inventory table.
- Calendar table.

**3. DAX (Data Analysis Expressions)**

Used to create calculations and measures.

Example:

```dax
Total Production =
SUM(Production[Actual Output])
```

Production achievement:

```dax
Production Achievement =
DIVIDE(
    [Total Production],
    [Total Planned Production],
    0
)
```

**4. Visualizations**

Used to create:

- KPI cards.
- Line charts.
- Bar charts.
- Tables.
- Matrices.
- Filters and slicers.
- Drill-down views.

**When to use Power BI:**

When the organization needs interactive reporting, consolidated datasets, repeatable dashboards, and visibility across multiple plants or departments.

### Excel vs. Power BI

| Feature | Excel | Power BI |
|---|---|---|
| Calculations | Excellent | Excellent |
| PivotTables | Native | Similar functionality through matrices and visuals |
| Interactive dashboards | Possible | Strong capability |
| Data modeling | More limited | Strong capability |
| Large consolidated datasets | Depends on workbook design | Better suited to governed BI models |
| Scheduled refresh | Depends on setup | Supported with appropriate configuration |
| Ad hoc analysis | Excellent | Good |
| Executive dashboards | Possible | Particularly suitable |

Power BI does not automatically guarantee correct reporting. Data models, KPI definitions, and source quality still matter.

## 7.3 SQL

SQL stands for Structured Query Language.

It is used to retrieve and manipulate data stored in relational databases.

Imagine that your organization stores production records in an ERP database.

You need to retrieve November production data.

A simplified SQL query:

```sql
SELECT
    Product,
    SUM(Actual_Production) AS Total_Production
FROM Production_Data
WHERE Reporting_Month = '2026-11'
GROUP BY Product;
```

This query:

1. Selects the product.
2. Adds the production quantities.
3. Filters the data for November 2026.
4. Groups the results by product.

Why is SQL useful?

Because you don't always need to download thousands or millions of records into Excel.

You can retrieve only the information required for reporting.

Common SQL operations:

| SQL command | Purpose |
|---|---|
| SELECT | Retrieve information |
| WHERE | Filter records |
| GROUP BY | Summarize categories |
| ORDER BY | Sort results |
| JOIN | Combine tables |
| SUM | Calculate totals |
| COUNT | Count records |
| AVG | Calculate averages |

## 7.4 Python

Python is useful when reporting processes involve repetitive data preparation, complicated validation, or large-scale analytical tasks.

Common libraries:

| Library | Application |
|---|---|
| pandas | Data cleaning and consolidation |
| numpy | Numerical calculations |
| matplotlib | Data visualization |
| openpyxl | Excel workbook processing |
| sqlalchemy | Database connectivity |

Example:

You receive production and demand files every month.

You can use Python to:

1. Read both Excel files.
2. Standardize product codes.
3. Remove duplicate records.
4. Validate missing values.
5. Calculate production achievement.
6. Calculate demand variance.
7. Consolidate the datasets.
8. Export the management report.

Example code:

```python
import pandas as pd

df = pd.read_excel("sop_data.xlsx")

summary = (
    df.groupby("Product")
      .agg(
          Forecast=("Forecast", "sum"),
          Actual_Demand=("Actual_Demand", "sum"),
          Planned_Production=("Planned", "sum"),
          Actual_Production=("Actual", "sum")
      )
      .reset_index()
)

summary["Demand_Variance"] = (
    summary["Actual_Demand"] - summary["Forecast"]
)

summary["Production_Achievement"] = (
    summary["Actual_Production"]
    / summary["Planned_Production"] * 100
)

summary.to_excel("sop_management_report.xlsx", index=False)
```

This demonstrates how raw data can be transformed into a consolidated management dataset.

### 7.5 Which Tool Should an S&OP Analyst Use?

Here is a practical decision guide.

| Situation | Recommended tool |
|---|---|
| Calculate monthly KPI values | Excel |
| Summarize data by product and month | Excel PivotTables |
| Consolidate multiple Excel files | Power Query or Python |
| Retrieve ERP production data | SQL |
| Create interactive executive dashboard | Power BI |
| Automate complex recurring reporting | Python |
| Maintain action-item tracker | Excel or an approved workflow platform |

**Professional perspective:**

An S&OP Analyst does not need to be an expert programmer to be effective.

The most important ability is understanding the business question, selecting the correct data, validating the calculations, and communicating the result.

The technology is the instrument. Business understanding is the steering wheel.

---

# 8. S&OP Analyst's Role

Let's discuss what you are actually expected to do as an S&OP Analyst.

Your role is not simply to prepare charts and update Excel files.

You are responsible for helping the organization maintain a reliable view of its demand, supply, inventory, capacity, and financial position.

## 8.1 Preparing Recurring S&OP Reports

Typical responsibilities:

- Collect monthly departmental data.
- Update reporting templates.
- Refresh datasets.
- Calculate KPIs.
- Prepare historical performance comparisons.
- Update demand and supply projections.
- Prepare management summaries.

Your objective is to ensure that the organization has the latest validated information before its S&OP meetings.

## 8.2 Validating and Consolidating Information

You should not blindly accept whatever numbers departments submit.

For example:

Sales reports 100,000 units of demand.

Production reports 95,000 units of output.

Inventory reports 20,000 units available.

You need to understand:

- Are these figures for the same reporting period?
- Are they expressed in the same unit of measurement?
- Are production quantities reported as completed or released units?
- Does inventory include blocked or quality-hold stock?
- Are customer requirements based on orders or forecasts?

The S&OP Analyst must identify inconsistencies before the report is distributed.

## 8.3 Highlighting Business Exceptions

A good analyst does not merely send a report with hundreds of rows.

You should highlight the few items that matter most.

For example:

Instead of saying:

"Production achievement is 92%."

Say:

"Production achievement declined to 92%, six percentage points below target. Line B is operating at 98% required-capacity utilization, limiting its ability to recover the production shortfall. Additional capacity or production reallocation should be evaluated."

The second statement gives management more useful information.

## 8.4 Translating Data into Management Insights

A management insight should connect:

**Performance → Deviation → Business Impact → Recommended Action**

Let's compare.

**Weak reporting**

"Inventory decreased by 27%."

**Strong reporting**

"Inventory decreased by 27% during November. Combined with demand exceeding forecast by 4.17% and production achievement of 92%, this may reduce inventory coverage in the coming planning periods. Review product-level inventory projections and prioritize constrained items."

Notice how the second statement uses multiple KPIs to explain the business situation.

This is what management expects from an effective S&OP Analyst.

## 8.5 Presenting Findings and Recommendations

When presenting an S&OP report, follow a simple structure:

1. **Situation:** What is happening?
2. **Evidence:** Which KPIs support the observation?
3. **Impact:** What is the consequence?
4. **Recommendation:** What should the business do?
5. **Decision required:** What approval or action is needed from management?

Example:

| Presentation element | Example |
|---|---|
| Situation | Demand is exceeding forecast. |
| Evidence | Demand is 4.17% above forecast. |
| Impact | Inventory is declining and supply flexibility is reduced. |
| Recommendation | Review production recovery and inventory allocation. |
| Decision required | Approve additional capacity or overtime, subject to cost and feasibility review. |

This structure is particularly useful during management and executive S&OP meetings.

---

# 9. Business Perspective and Decision-Making

Now let's discuss the most important question:

**How does an S&OP dashboard actually influence business decisions?**

The answer is through the relationship between operational performance and business objectives.

## 9.1 Dashboard Information and Corresponding Decisions

| Dashboard finding | Possible management decision |
|---|---|
| Demand exceeds forecast | Revise demand plan |
| Production below plan | Investigate constraints and recover output |
| Inventory below safety stock | Expedite supply or reallocate inventory |
| Excess inventory | Reduce future production or procurement |
| Capacity exceeds available hours | Evaluate additional shifts or outsourcing |
| Supplier delivery delays | Expedite delivery or identify alternatives |
| Revenue below budget | Review supply constraints and demand performance |
| Manufacturing costs increasing | Investigate efficiency and cost drivers |

## 9.2 Understanding KPI Relationships

A common mistake is evaluating KPIs independently.

For example:

High capacity utilization may indicate strong production demand.

But if inventory is declining and on-time delivery is deteriorating, high utilization may actually indicate insufficient capacity flexibility.

Similarly:

High inventory may look positive.

But if demand is declining and inventory aging is increasing, the business may be accumulating excess or obsolete stock.

An effective S&OP dashboard should reveal these relationships.

## 9.3 Leading vs. Lagging Indicators

Another important concept is distinguishing between leading and lagging indicators.

**Lagging indicators** measure results that have already happened.

Examples:

- Actual revenue.
- Actual production output.
- Historical forecast accuracy.
- Actual on-time delivery.

**Leading indicators** provide information about potential future performance.

Examples:

- Projected demand.
- Supplier delivery risk.
- Future capacity utilization.
- Projected inventory shortages.
- Upcoming production schedule constraints.

| Lagging indicator | Corresponding leading indicator |
|---|---|
| Actual stockout | Projected stockout |
| Actual lost sales | Forecasted supply-demand gap |
| Actual production loss | Upcoming capacity constraint |
| Actual expedite cost | Supplier delivery risk |
| Historical revenue shortfall | Future revenue at risk |

Why is this important?

Because management should not wait until the problem has already happened.

A good S&OP dashboard combines historical results with forward-looking information.

## 9.4 From Reporting to Continuous Improvement

This is our connection to Topic 9.9.

Imagine that your monthly dashboard shows:

- Production achievement consistently below target.
- Capacity utilization consistently above 95%.
- Increasing overtime.
- Recurring delivery delays.

The dashboard helps identify the recurring problem.

The next step is to investigate:

- Is production capacity insufficient?
- Are there recurring equipment constraints?
- Are production schedules unrealistic?
- Are material shortages affecting output?
- Are planning assumptions inaccurate?

Once the underlying issue is identified, the organization can develop corrective actions and monitor whether performance improves.

Therefore:

**Reporting identifies performance gaps. Analysis explains them. Management decisions address them. Continuous improvement prevents them from recurring.**

This is the connection between Topic 9.8 and Topic 9.9.

---

# 10. Key Takeaways

Let's consolidate the most important concepts from Topic 9.8.

## 10.1 Concepts You Must Understand

| Concept | What you should remember |
|---|---|
| S&OP Reporting | Organizes and communicates business performance information |
| Dashboard | Provides visual monitoring of important business indicators |
| KPI Scorecard | Evaluates performance against targets |
| Executive Presentation | Communicates business findings and decisions required |
| Operational Report | Provides detailed operational information |
| Management Report | Summarizes performance gaps and business issues |
| Data Validation | Ensures that information is accurate and consistent |
| Data Reconciliation | Resolves differences between reporting sources |
| Data Grain | Defines the level of detail in a dataset |
| Drill-down | Allows users to investigate summarized information |
| Conditional Formatting | Highlights performance based on defined conditions |
| Exception Reporting | Identifies deviations requiring attention |
| Version Control | Maintains report versions and reporting integrity |

## 10.2 The Five Principles of Effective S&OP Reporting

1. **Accuracy before appearance.** Correct data is more important than attractive visualizations.
2. **Relevant KPIs before numerous KPIs.** Display metrics that support business decisions.
3. **Future visibility, not just historical performance.** Include projections and potential risks.
4. **Exceptions before excessive details.** Highlight the issues that require management attention.
5. **Actions before conclusions.** Every significant business problem should lead to an investigation, recommendation, or decision.

## 10.3 What an S&OP Analyst Should Be Able to Do

By the end of this topic, you should be capable of performing this workflow:

### Your S&OP Reporting Workflow

1. **Collect data:** Gather information from Sales, Production, Procurement, Inventory, and Finance.
2. **Validate data:** Check completeness, accuracy, consistency, and reporting periods.
3. **Consolidate information:** Combine the departmental datasets using consistent definitions and data structures.
4. **Calculate KPIs:** Determine forecast performance, production achievement, inventory health, capacity utilization, and financial results.
5. **Analyze exceptions:** Identify significant deviations, trends, risks, and opportunities.
6. **Prepare reports and dashboards:** Organize findings into operational, management, and executive reporting formats.
7. **Develop recommendations:** Translate findings into proposed business actions.
8. **Present to management:** Communicate the situation, evidence, business impact, and decisions required.
9. **Monitor actions:** Track implementation and determine whether performance improves.

---

# 11. Knowledge Check and Practical Exercises

**Your turn.** This assessment is designed to test three levels of understanding.

- Level 1: Conceptual understanding.
- Level 2: Technical application.
- Level 3: Professional analysis and decision-making.

Do not immediately look for answers or explanations. I will evaluate your responses after you submit your attempt.

## Exercise 1: Conceptual Understanding

**Question 1.** Explain the difference between the following:

- Operational Report
- Management Report
- Executive Dashboard
- KPI Scorecard
- Executive Presentation

Use your own words and explain their respective purposes.

**Question 2.** Why is an S&OP dashboard not simply a collection of charts and numbers?

**Question 3.** What is the difference between Actual vs. Target and Actual vs. Forecast?

**Question 4.** Why is data validation important before publishing an S&OP dashboard?

**Question 5.** What is the difference between leading and lagging indicators? Give two examples of each.

## Exercise 2: Technical Application

A manufacturing company provides the following November performance data.

| KPI | Actual | Target |
|---|---:|---:|
| Forecast demand | 100,000 units | N/A |
| Actual demand | 115,000 units | 100,000 units |
| Planned production | 110,000 units | 110,000 units |
| Actual production | 99,000 units | 110,000 units |
| Beginning inventory | 30,000 units | N/A |
| Ending inventory | 14,000 units | N/A |
| Available capacity | 1,000 hours | N/A |
| Required capacity | 950 hours | N/A |
| Revenue | ₱9M | ₱10M |

Calculate the following:

**Question 6.**

Calculate demand variance in units and percentage.

**Question 7.**

Calculate production achievement and its percentage-point gap against the 98% target.

**Question 8.**

Calculate inventory change in units and percentage.

**Question 9.**

Calculate capacity utilization and remaining available hours.

**Question 10.**

Calculate revenue achievement and revenue shortfall.

Show your formulas and step-by-step calculations.

## Exercise 3: Dashboard Design

Imagine that you are preparing a monthly S&OP dashboard for the General Manager.

You have these available metrics:

- Forecast accuracy.
- Demand variance.
- Production achievement.
- Inventory DOS.
- Inventory value.
- Capacity utilization.
- Revenue achievement.
- Gross profit.
- Supplier delivery performance.
- Customer on-time delivery.

**Question 11.**

Group these KPIs into appropriate dashboard sections.

**Question 12.**

Select the most appropriate visualization for each of the following:

1. Monthly demand versus supply trend.
2. Production performance by plant.
3. Inventory status by product.
4. Overall forecast accuracy.
5. Monthly revenue performance.
6. Critical supply shortage list.

Explain why you selected each visualization.

## Exercise 4: Professional Business Analysis

This is the most important exercise.

You are presenting to management. Your dashboard reveals the following:

- Demand increased by 15%.
- Production achievement decreased to 88%.
- Inventory DOS decreased from 30 days to 12 days.
- Capacity utilization increased to 97%.
- Supplier on-time delivery decreased to 85%.
- Revenue achievement is 90%.

**Question 13.**

Identify the three most critical business exceptions.

**Question 14.**

Explain the possible relationship between demand, production, inventory, and capacity.

**Question 15.**

What additional information would you request before concluding that supplier delays are responsible for the production shortfall?

**Question 16.**

Prepare three management recommendations.

**Question 17.**

Write a short executive summary containing:

- Current business situation.
- Supporting KPI results.
- Potential business impact.
- Recommended actions.
- Decisions required from management.

## How I will evaluate your answers

I will assess your responses based on:

| Assessment area | Weight |
|---|---:|
| Conceptual understanding | 20% |
| Technical accuracy | 25% |
| Data interpretation | 20% |
| Business analysis | 20% |
| Recommendations and communication | 15% |
| **Total** | **100%** |

I will also identify:

- What you understood correctly.
- What needs correction or clarification.
- Any calculation mistakes.
- Whether your recommendations are supported by evidence.
- What you should improve to reach professional S&OP Analyst level.

---

## Final connection: Topic 9.8 → Topic 9.9

You have now learned how to transform business data into reports, dashboards, management insights, and recommended actions.

The next topic in the curriculum is:

### Module 9 – Topic 9.9: Continuous Improvement

**The next learning objective:**

Understand how organizations systematically identify performance gaps, investigate root causes, implement corrective actions, monitor results, and improve S&OP processes over time.

We will connect performance reporting and KPI analysis to continuous business improvement.

**For now, we will remain on Topic 9.8.** Complete the exercises first. I will evaluate your answers before we move forward.
