# Module 8 – S&OP Process Execution and Governance
## Topic 8.2: Data Gathering and Preparation

**Main learning objective:** Understand how to transform data collected from different departments into one accurate, consistent, validated, and reliable dataset that can be used during the S&OP planning cycle.

## 1. Topic Overview

### 1.1 What are we going to learn?

Sa previous topic, **Topic 8.1: Understanding the S&OP Cycle**, pinag-aralan natin kung paano gumagana ang complete S&OP process.

We learned that S&OP involves different stages, including:

1. Data Gathering and Preparation
2. Demand Review
3. Supply Review
4. Pre-S&OP Meeting
5. Executive S&OP Meeting
6. Plan Approval and Execution

Ngayon, pag-aaralan natin ang unang importanteng activity bago makapagsimula ang actual planning discussions: **Data Gathering and Preparation.**

Imagine na may upcoming monthly S&OP meeting ang isang manufacturing company.

- Sales provides the latest demand forecast.
- Production provides actual output and available capacity.
- Warehouse provides current inventory.
- Procurement provides purchase orders and supplier delivery schedules.
- Finance provides revenue, material costs, and financial projections.

May problema: magkakaiba ang formats, reporting periods, product codes, and quantities ng kanilang reports.

For example:

| Department | Reported information |
|---|---|
| Sales | Forecast: 10,000 units |
| Production | Actual output: 9,500 units |
| Warehouse | Inventory: 3,000 units |
| Procurement | Incoming materials: 5,000 kg |
| Finance | Projected revenue: ₱12 million |

Hindi pa ibig sabihin na ready na ang company for S&OP just because mayroon nang reports.

Kailangan munang siguraduhin na:
- Tama ang numbers.
- Complete ang required information.
- Consistent ang reporting periods.
- Walang duplicate or missing records.
- Pare-pareho ang product definitions and units.
- Reconciled ang differences between departments.

**The objective is not simply to collect data. It is to establish one reliable version of the business situation.**

### 1.2 Why is this important?

Think about this situation:

Sales believes that demand next month is 12,000 units, but Operations believes that demand is only 10,000 units.

If the S&OP analyst uses the wrong information:

- Production might manufacture too little.
- Inventory might become insufficient.
- Customers might experience delayed deliveries.
- Procurement might purchase insufficient raw materials.
- Revenue targets might not be achieved.

The opposite can also happen. Overstated demand can result in excess inventory, unnecessary purchases, and additional storage costs.

Kaya mahalaga ang data preparation. It protects the quality of the decisions made during S&OP.

### 1.3 Connection to previous modules

| Previous learning | Connection to data preparation |
|---|---|
| Demand Planning | Collect historical sales, customer orders, and forecasts |
| Supply Planning | Collect production capacity, output, and supply constraints |
| Inventory Management | Validate stock balances and inventory movements |
| Procurement Planning | Collect purchase orders and supplier lead times |
| Financial Planning | Consolidate revenue, costs, and budget information |
| Module 8.1: S&OP Cycle | Prepare the information required for every stage of the S&OP cycle |

**Connection to Topic 8.3: Demand Review Meeting**

The next topic will focus on evaluating demand.

But before Sales and other stakeholders can discuss whether the demand forecast is realistic, they need reliable information about historical demand, customer orders, forecast changes, and actual sales.

Therefore:

**Topic 8.2 prepares the data. Topic 8.3 uses that data to evaluate demand.**

---

## 2. Layman's Explanation

### 2.1 Understanding Data Gathering and Preparation

Let's use a simple analogy.

Imagine that you are preparing a monthly household budget.

You need information from different sources:

- Your salary statement.
- Electricity and water bills.
- Grocery receipts.
- Rent payments.
- Loan payments.
- Bank balance.

You cannot simply add everything immediately.

First, you need to check:

1. Are all expenses included?
2. Are there duplicate receipts?
3. Are the amounts correct?
4. Are the transactions from the same month?
5. Are pending payments already included in actual expenses?

Once everything is checked and organized, you can calculate your actual monthly expenses and prepare your next month's budget.

Ganoon din ang Data Gathering and Preparation sa S&OP.

Instead of household expenses, manufacturing companies collect information about demand, production, inventory, procurement, and financial performance.

Instead of preparing a household budget, they prepare an integrated business plan.

### 2.2 Three stages of information

One important concept is understanding the difference between raw data, processed data, and planning information.

**Stage 1: RAW DATA**

Original information collected from business systems.

Example: Production transactions showing 450, 500, 475, and 525 units.

**Stage 2: PROCESSED DATA**

Data that has been cleaned, organized, consolidated, and validated.

Example: Total monthly production = 1,950 units, with duplicate transactions removed and reporting dates standardized.

**Stage 3: PLANNING INFORMATION**

Processed data interpreted and presented to support business decisions.

Example: Production achieved 97.5% of its monthly target of 2,000 units. The shortfall requires investigation before next month's supply plan is finalized.

The important distinction:

- Raw data tells you what was recorded.
- Processed data tells you what the validated numbers are.
- Planning information tells you what those numbers mean for the business.

A good S&OP analyst should understand all three.

---

## 3. Technical Explanation

### 3.1 Formal Definition

**Data Gathering and Preparation** is the systematic process of collecting, integrating, validating, cleansing, standardizing, and organizing relevant business information from different organizational sources to establish a reliable dataset for planning, analysis, and decision-making.

In S&OP, the process establishes a common and trusted information foundation across Sales, Operations, Supply Chain, Procurement, and Finance.

Let's break down the important technical terms.

| Term | Meaning |
|---|---|
| Data Gathering | Collecting information from different sources |
| Data Integration | Combining information from multiple systems |
| Data Validation | Checking whether information satisfies defined rules |
| Data Cleansing | Identifying and correcting or handling errors |
| Data Standardization | Making formats, units, and definitions consistent |
| Data Reconciliation | Comparing records from different sources and resolving differences |
| Data Consolidation | Combining validated information into a unified dataset |
| Data Governance | Establishing responsibilities, rules, and controls for managing data |

These activities are related, but they are not interchangeable.

For example, data integration combines reports, while data reconciliation investigates why the combined reports contain different quantities.

### 3.2 Four characteristics of good S&OP data

Not all collected data is automatically reliable.

There are four fundamental data quality dimensions.

**A. Accuracy**

Accuracy means that the recorded information correctly represents the actual business situation.

Example:

Physical inventory count = 4,800 units.

ERP inventory balance = 5,200 units.

There is a 400-unit discrepancy.

The ERP number exists in the system, but it does not necessarily represent the correct physical inventory.

**B. Completeness**

Completeness means that all required information is available.

Example:

The demand forecast contains:

- Product A
- Product B
- Product C
- Product D

But the company has five active products.

Product E is missing.

The report may contain thousands of records, but it is still incomplete.

**C. Consistency**

Consistency means that information follows the same definitions, formats, units, and rules across different sources.

Example:

| System | Product code |
|---|---|
| Sales | MLCC-001 |
| Production | MLCC001 |
| Warehouse | 001-MLCC |

These might represent the same product, but without an established mapping, consolidating them can create errors.

Another example is unit of measurement:

- Sales reports in pieces.
- Production reports in thousands of pieces.
- Procurement reports in kilograms.

These cannot be directly compared without proper conversion or product-specific assumptions.

**D. Timeliness**

Timeliness means that data is available and updated at the appropriate time for the planning activity.

Example:

S&OP meeting is scheduled for November 25.

Sales submits a forecast dated November 5, while Production submits its capacity report dated November 20.

The reports have different information dates.

The analyst must determine whether the Sales forecast is still valid or whether it needs to be refreshed.

A report can be accurate when generated but outdated when used.

### 3.3 Why one dimension is not enough

Consider these situations:

| Scenario | Accuracy | Completeness | Consistency | Timeliness |
|---|---|---|---|---|
| Correct but missing products | Good | Poor | Good | Good |
| Complete but incorrect quantities | Poor | Good | Good | Good |
| Correct numbers using different units | Good | Good | Poor | Good |
| Accurate report from two months ago | Good historically | Good | Good | Poor |

A dataset should be evaluated across multiple dimensions.

A 100% completeness result does not guarantee 100% accuracy.

This is an important distinction for professional S&OP analysis.

---

## 4. Detailed Discussion

### 4.1 Types of Data Required in S&OP

S&OP requires information from multiple business functions. Each department sees a different part of the business.

The analyst's responsibility is to bring these different perspectives together.

Let's examine the seven major categories.

#### A. Historical Sales and Demand Data

This represents what customers previously purchased or requested.

Typical information:

- Historical sales quantity.
- Customer demand history.
- Actual shipments.
- Sales orders.
- Cancelled orders.
- Backorders.
- Historical demand patterns.
- Seasonality and demand fluctuations.

Example:

| Month | Actual sales |
|---|---:|
| January | 8,000 |
| February | 8,500 |
| March | 9,000 |
| April | 9,500 |
| May | 10,000 |

Why is this important?

Historical demand provides the foundation for forecasting future demand.

However, remember that sales, orders, shipments, and demand are not always the same.

For example:

- A customer orders 10,000 units.
- The company ships only 8,000 units.
- The remaining 2,000 units become backorders.

If the analyst uses shipments alone as the historical demand figure, actual customer demand may be understated.

#### B. Customer Orders and Demand Forecasts

This information represents what customers currently want and what the business expects customers to need in the future.

Typical information:

- Open customer orders.
- Confirmed orders.
- Unconfirmed orders.
- Customer forecasts.
- Sales forecasts.
- Forecast adjustments.
- New product demand.
- Customer cancellations.

Example:

| Product | Customer orders | Forecast | Planning consideration |
|---|---:|---:|---|
| A | 5,000 | 6,000 | Check forecast versus confirmed orders |
| B | 3,000 | 4,500 | Potential additional demand |
| C | 2,000 | 2,000 | Orders align with forecast |

Important concept: **Actual versus Forecast.**

Actual represents what happened. Forecast represents what is expected to happen.

Never combine them without identifying which values are actual and which are forecast.

#### C. Production Output and Capacity Data

This represents the manufacturing company's ability to produce products.

Typical information:

- Actual production output.
- Planned production.
- Production capacity.
- Machine availability.
- Labor availability.
- Production downtime.
- Yield and scrap rates.
- Production backlog.
- Maintenance schedules.

Example:

| Product | Planned output | Actual output |
|---|---:|---:|
| A | 10,000 | 9,500 |
| B | 8,000 | 8,000 |
| C | 6,000 | 5,400 |

This information helps answer:

- Can Operations meet the forecast?
- Is available capacity sufficient?
- Are there production bottlenecks?
- Does the company need overtime or additional shifts?

Connection to your manufacturing background: Production output should not be evaluated independently from machine capacity, yield, downtime, and process constraints.

For instance, producing 10,000 units with a 90% yield does not provide the same usable quantity as producing 10,000 units with a 98% yield.

#### D. Inventory Levels and Inventory Movements

Inventory information represents the materials and products available within the business.

Typical information:

- Raw materials inventory.
- Work-in-process (WIP).
- Finished goods inventory.
- Available inventory.
- Allocated inventory.
- Reserved inventory.
- Blocked or quality-hold inventory.
- Inventory receipts.
- Inventory issues.
- Inventory adjustments.
- Inventory transfers.

Example:

| Inventory classification | Quantity |
|---|---:|
| Physical stock | 10,000 |
| Allocated stock | 2,000 |
| Quality hold | 500 |
| Available stock | 7,500 |

For this example:

\[
Available=10,000-2,000-500
\]

\[
Available=7,500\ units
\]

Why does this matter?

Hindi lahat ng inventory sa warehouse ay available for customer orders.

Some inventory is already committed to customers. Others may be defective, under inspection, or blocked.

Using total inventory instead of available inventory can result in an overstated supply position.

#### E. Procurement and Supplier Information

This information represents the company's ability to obtain materials and supplies from external vendors.

Typical information:

- Purchase orders (PO).
- Open purchase orders.
- Supplier confirmations.
- Purchase order quantities.
- Supplier delivery schedules.
- Supplier performance.
- Material shortages.
- Supplier constraints.
- Procurement status.

Example:

| Material | Open PO quantity | Expected delivery |
|---|---:|---|
| Raw Material A | 5,000 kg | December 5 |
| Raw Material B | 3,000 kg | December 10 |
| Raw Material C | 2,000 kg | December 20 |

A purchase order does not automatically mean that the material is already available.

The analyst must verify:

- Is the PO still open?
- Has the supplier confirmed it?
- Is the delivery date reliable?
- Is the quantity correct?
- Will it arrive before production needs it?

#### F. Lead Times and Material Availability

Lead time refers to the time required to complete an activity or obtain a material.

Examples include:

- Supplier manufacturing lead time.
- Transportation lead time.
- Internal production lead time.
- Quality inspection lead time.
- Customer delivery lead time.

Example:

A supplier requires 20 days to deliver raw materials.

If production needs the material on December 20, the purchasing team cannot simply place the order on December 15.

The analyst must consider the supplier lead time and the material requirement date.

Also distinguish between:

**Supplier lead time:** Time required by the supplier to deliver.

**Internal lead time:** Time required for receiving, inspection, processing, and internal handling.

These may need to be combined when calculating the actual material availability date.

#### G. Financial Data

Finance provides the monetary perspective of the S&OP plan.

Typical information:

- Sales revenue.
- Product selling prices.
- Material costs.
- Manufacturing costs.
- Labor costs.
- Inventory carrying costs.
- Operating expenses.
- Budget.
- Gross margin.
- Financial forecasts.

Example:

| Product | Forecast quantity | Selling price | Forecast revenue |
|---|---:|---:|---:|
| A | 10,000 | ₱100 | ₱1,000,000 |
| B | 5,000 | ₱150 | ₱750,000 |
| C | 3,000 | ₱200 | ₱600,000 |
| **Total** | **18,000** | | **₱2,350,000** |

This connects operational planning with financial planning.

The company must understand not only whether it can manufacture the required quantities but also whether the resulting plan supports its financial objectives.

### 4.2 Data Sources and Ownership

Now that we understand what information is needed, let's examine where companies obtain it.

Most manufacturing companies use multiple business systems.

#### A. Major business systems

| System | Full name | Primary purpose | Typical S&OP data |
|---|---|---|---|
| ERP | Enterprise Resource Planning | Integrates major business transactions | Orders, inventory, purchasing, finance |
| MRP | Material Requirements Planning | Calculates material requirements | Material demand, shortages, planned orders |
| MES | Manufacturing Execution System | Monitors manufacturing execution | Production output, downtime, yield |
| WMS | Warehouse Management System | Manages warehouse activities | Stock balances, receipts, issues |
| CRM | Customer Relationship Management | Manages customer relationships | Customer forecasts, opportunities, demand |
| APS | Advanced Planning and Scheduling | Supports advanced production planning | Capacity, schedules, constraints |

Let's understand their differences through a manufacturing example.

Imagine a company manufacturing electronic components.

**Illustrative information flow across business systems:**

1. **CRM / Sales:** Customer demand, forecasts, and sales opportunities.
2. **ERP / MRP:** Orders, inventory, purchasing, material requirements, and financial records.
3. **MES:** Production execution, output, yield, and downtime.
4. **WMS:** Inventory movements, receipts, and warehouse stock.
5. **S&OP Data Preparation:** Consolidation, validation, reconciliation, and reporting.
6. **Demand Review and Supply Review:** Reliable information for planning and decision-making.

Important: This is an illustrative information flow, not a mandatory architecture. Actual system responsibilities and integrations vary by company.

#### B. Other data sources

Not all companies have fully integrated business systems.

Some still depend on:

- Excel workbooks.
- CSV exports.
- Shared departmental databases.
- Manual reports.
- Power BI dashboards.
- Emails from suppliers.
- Customer-provided forecast files.

For example, the warehouse may provide an ERP export, while Production sends an Excel report and Sales provides a separate forecast workbook.

The S&OP analyst must consolidate these sources carefully.

#### C. Data ownership and responsibility

One of the most important concepts in data preparation is **Data Ownership**.

Data ownership means identifying the department or responsible person accountable for maintaining and validating a particular dataset.

| Data category | Primary data owner | Typical source |
|---|---|---|
| Sales history | Sales / Commercial | ERP / CRM |
| Customer forecast | Sales | CRM / Forecast file |
| Production output | Operations | MES |
| Production capacity | Operations / Planning | MES / APS |
| Inventory | Warehouse / Inventory Control | ERP / WMS |
| Purchase orders | Procurement | ERP |
| Supplier lead times | Procurement | ERP / Supplier records |
| Revenue and costs | Finance | ERP / Financial systems |

Why does this matter?

Suppose you discover that inventory is 500 units higher in the ERP than in the warehouse report.

As an S&OP analyst, you should investigate and coordinate with the responsible data owners.

You should not simply change the inventory number yourself without understanding the source of the discrepancy and following the company's correction process.

**The S&OP analyst is responsible for data coordination and analysis, but is not automatically the owner of every department's data.**

#### D. Reporting frequency and cutoff dates

Data collection requires a defined schedule.

Consider these terms:

| Term | Explanation |
|---|---|
| Data owner | Person or department responsible for the information |
| Reporting frequency | How often the information is updated |
| Data cutoff | The agreed date and time after which transactions are excluded from the reporting snapshot |
| Data refresh date | When the information was last updated |
| Reporting period | The period represented by the report |

Example:

The November S&OP cycle uses October actuals and November-to-February planning data.

The company establishes November 5 as the data cutoff.

That means all departments should submit information according to the agreed reporting rules and snapshot.

Without a common cutoff, Sales might submit information updated through November 5 while Operations submits information only through October 31.

The reports may therefore represent different business situations.

### 4.3 Data Validation and Preparation

This is the core technical portion of the topic.

Let's discuss the most common data quality problems.

#### A. Missing Records

Missing data occurs when required information is unavailable.

Example:

| Product | Forecast |
|---|---:|
| A | 10,000 |
| B | 8,000 |
| C | Blank |
| D | 6,000 |

Product C has no forecast value.

But what does a blank mean?

It could mean:

- Sales forgot to submit the forecast.
- The product has no expected demand.
- The product is discontinued.
- The forecast is not yet available.
- The information failed to load.

These situations have different meanings.

**Never automatically replace missing values with zero.**

Zero means that the expected quantity is explicitly zero. Blank means that the value is unavailable or unrecorded.

#### B. Duplicate Records

Duplicate records occur when the same transaction is recorded more than once.

Example:

| Transaction ID | Product | Quantity |
|---|---|---:|
| T001 | A | 500 |
| T002 | A | 300 |
| T002 | A | 300 |
| T003 | A | 400 |

T002 appears twice.

If you simply sum the quantities:

\[
500+300+300+400=1,500
\]

But the correct total, assuming T002 is a true duplicate, is:

\[
500+300+400=1,200
\]

Overstated production or inventory data can affect the entire supply plan.

However, identical-looking records are not necessarily duplicates.

For example, two separate legitimate transactions can have the same product, date, and quantity. Use the appropriate unique transaction identifier and business rules.

#### C. Inconsistent Data

Inconsistent data means that different systems or departments use different formats or definitions.

Examples:

| Issue | Source 1 | Source 2 |
|---|---|---|
| Product code | PROD-001 | P001 |
| Date format | 11/05/2026 | 2026-05-11 |
| Quantity | 1,000 pcs | 1.0 thousand pcs |
| Period | Calendar month | Fiscal month |

The analyst must establish standard definitions and conversion rules.

**Important:** Date formats are particularly dangerous because 05/11/2026 may represent May 11 or November 5 depending on the convention.

#### D. Inaccurate Records

Inaccurate records contain values that do not correctly represent the actual transaction or business condition.

Example:

Production report = 12,000 units.

MES transaction detail = 10,800 units.

The analyst should investigate:

- Was the production report manually adjusted?
- Were rejected units included?
- Were transactions counted twice?
- Is the reporting period identical?
- Were some production lines excluded?

Do not immediately assume that the larger number is wrong. Investigate the underlying source and definition.

#### E. Data Cleansing and Standardization

Data cleansing involves identifying and handling errors, while standardization ensures uniform formats and definitions.

Common activities include:

1. Removing confirmed duplicate records.
2. Correcting invalid product codes using approved mappings.
3. Standardizing date formats.
4. Converting quantities into common units.
5. Identifying missing values.
6. Separating actual and forecast records.
7. Checking invalid or impossible values.

Example of product code standardization:

| Original code | Standard code |
|---|---|
| MLCC001 | MLCC-001 |
| MLCC 001 | MLCC-001 |
| MLC-001 | MLCC-001 |

This mapping must be validated against the product master.

Do not merge product codes merely because they look similar.

#### F. Actual versus Forecast Data

This distinction is critical in S&OP.

| Period | Data classification | Quantity |
|---|---|---:|
| August | Actual | 8,000 |
| September | Actual | 8,500 |
| October | Actual | 9,000 |
| November | Forecast | 9,500 |
| December | Forecast | 10,000 |
| January | Forecast | 10,500 |

Actuals represent completed business activity, while forecasts represent future expectations.

One common mistake is treating an old forecast as actual performance.

For example, November's forecast was 9,500 units, but actual November sales turned out to be 8,900.

The correct reporting should preserve both values:

| November metric | Quantity |
|---|---:|
| Original forecast | 9,500 |
| Actual sales | 8,900 |
| Forecast error in units | 600 |

This allows the company to evaluate forecasting performance.

#### G. Data Reconciliation Between Departments

Data reconciliation means comparing different datasets to understand and resolve differences.

Example:

| Information | Sales | Operations |
|---|---:|---:|
| Product A demand | 12,000 | 10,000 |

Difference:

\[
12,000-10,000=2,000
\]

Possible reasons:

- Sales includes unconfirmed customer forecasts.
- Operations uses only confirmed orders.
- Sales includes demand from a new customer.
- The reports have different cutoff dates.
- The product codes are mapped incorrectly.

The analyst should identify the reason for the difference rather than simply choosing one number.

This leads to an important professional practice:

**Reconciliation is not about forcing different departments to show identical numbers. It is about understanding why their numbers differ and establishing the correct planning basis.**

#### H. Identifying Unusual Values and Outliers

An outlier is a data point that is unusually different from the rest of the observations.

Example:

| Month | Output |
|---|---:|
| January | 9,800 |
| February | 10,100 |
| March | 9,900 |
| April | 10,000 |
| May | 15,500 |

May's production is significantly higher.

Possible explanations:

- Additional shifts were implemented.
- Production included a backlog.
- A transaction was duplicated.
- A reporting error occurred.
- The manufacturing process genuinely improved.

An outlier is not automatically an error.

It is a signal that deserves investigation.

---

## 5. Data Quality Metrics and Calculations

Now let's move from understanding concepts to measuring data quality.

These calculations are useful for S&OP analysts, particularly when building Excel validation reports.

### 5.1 Data Completeness Percentage

Measures how many required data fields contain valid information.

**Formula:**

\[
Completeness(\%)=
\frac{\text{Completed Required Fields}}
{\text{Total Required Fields}}\times100
\]

Example:

A demand forecast requires 100 product-period records.

Only 92 contain valid forecast quantities.

\[
=\frac{92}{100}\times100
\]

**92% completeness**

Interpretation:

Eight required records are incomplete.

But this does not necessarily mean that 8% of the total demand quantity is missing. It measures record completeness, not quantity completeness.

### 5.2 Data Accuracy Checks

Accuracy is more difficult to measure because there is no universal way to establish whether every business record is correct.

A practical method is to compare reported information against an independently verified reference.

For example:

- ERP reported quantity = 10,000.
- Verified physical or transaction quantity = 9,800.

Difference:

\[
10,000-9,800=200
\]

Percentage deviation:

\[
Deviation(\%)=
\frac{|Reported-Reference|}
{Reference}\times100
\]

\[
=\frac{|10,000-9,800|}{9,800}\times100
\]

**2.04% deviation**

This tells us that the reported quantity differs from the reference by 2.04%.

If the company has an approved tolerance of 1%, the record would require investigation.

Remember: the tolerance is an illustrative assumption, not a universal industry standard.

Also, this is a deviation measurement, not a complete accuracy score.

### 5.3 Duplicate Record Identification

A duplicate exists when a record repeats a transaction that should only be counted once.

Suppose you have the following dataset:

| Transaction ID | Quantity |
|---|---:|
| T001 | 100 |
| T002 | 200 |
| T003 | 150 |
| T002 | 200 |
| T004 | 300 |

There are five records but only four unique transaction IDs.

\[
Duplicate\ Records=5-4=1
\]

Duplicate rate:

\[
Duplicate\ Rate=
\frac{Duplicate\ Records}{Total\ Records}\times100
\]

\[
=\frac{1}{5}\times100=20\%
\]

**20% duplicate rate**

**Excel application:**

If transaction IDs are in column A:

```excel
=COUNTIF($A$2:$A$6,A2)
```

A result greater than 1 indicates that the ID appears more than once.

However, you must investigate whether the repeated ID is a genuine duplicate or an authorized split transaction.

### 5.4 Missing Data Assessment

Let's say the company requires 50 product-month forecast records.

Only 45 are populated.

\[
Missing\ Records=50-45=5
\]

\[
Missing\ Rate=
\frac{5}{50}\times100
\]

\[
=10\%
\]

The missing rate is 10%.

**Excel application:**

If column B contains required forecast values:

```excel
=COUNTBLANK(B2:B51)
```

To calculate missing percentage:

```excel
=COUNTBLANK(B2:B51)/ROWS(B2:B51)
```

Format the result as a percentage.

Important: This assumes that every row is required and that blanks are genuinely missing. Some records may legitimately have no applicable value.

### 5.5 Actual versus Reported Quantity Reconciliation

Suppose Production reports 12,000 units, while the verified MES transaction total is 11,700 units.

Absolute difference:

\[
Difference=12,000-11,700
\]

\[
=300\ units
\]

Percentage difference relative to the reference:

\[
Difference(\%)=
\frac{300}{11,700}\times100
\]

\[
=2.56\%
\]

The reported quantity is 300 units higher than the reference.

This discrepancy should be investigated before the production actuals are finalized.

### 5.6 Basic Outlier Identification Using Standard Deviation

A commonly used statistical method is the Z-score.

The Z-score measures how far an observation is from the average, expressed in standard deviations.

Formula:

\[
Z=\frac{X-\mu}{\sigma}
\]

Where:

- \(X\) = Observed value.
- \(\mu\) = Mean or average.
- \(\sigma\) = Standard deviation.

Let's use this production dataset:

9,800; 10,100; 9,900; 10,000; 15,500.

The average is:

\[
\mu=\frac{9,800+10,100+9,900+10,000+15,500}{5}
\]

\[
\mu=11,060
\]

Using the population standard deviation for this illustrative dataset:

\[
\sigma\approx2,178.9
\]

For May:

\[
Z=\frac{15,500-11,060}{2,178.9}
\]

\[
Z\approx2.04
\]

May is approximately 2.04 standard deviations above the mean.

A commonly used screening rule is:

- \(|Z|>2\): Potential unusual observation.
- \(|Z|>3\): Stronger statistical outlier signal.

These are screening conventions, not universal rules.

Small datasets, trends, seasonality, and non-normal distributions can make Z-scores misleading.

### 5.7 Summary of Data Quality Formulas

| Metric | Formula | Purpose |
|---|---|---|
| Completeness | Completed fields / Required fields × 100 | Measure missing information |
| Percentage deviation | Absolute difference / Reference × 100 | Measure difference from a reference |
| Duplicate rate | Duplicate records / Total records × 100 | Identify repeated records |
| Missing rate | Missing records / Required records × 100 | Measure unavailable information |
| Quantity difference | Reported quantity − Reference quantity | Identify reconciliation gaps |
| Z-score | (Observation − Mean) / Standard deviation | Identify unusual observations |

### 5.8 Why one data quality percentage is insufficient

Imagine two datasets:

| Metric | Dataset A | Dataset B |
|---|---:|---:|
| Completeness | 99% | 95% |
| Accuracy | 90% | 99% |
| Duplicate rate | 1% | 0% |
| Timeliness | Delayed | On time |

Dataset A has better completeness, but Dataset B has better accuracy and timeliness.

Which one is better?

It depends on the planning purpose and the impact of each issue.

For example, missing a forecast for a high-revenue customer could be more significant than missing a noncritical administrative field.

A professional S&OP analyst evaluates data quality using multiple dimensions and business impact, not just one overall score.

---

## 6. Practical Manufacturing Application

Let's now combine everything into one realistic manufacturing scenario.

This is where the concepts become actual S&OP work.

### 6.1 Business Scenario

Imagine that you are an S&OP Analyst for a manufacturing company producing electronic components.

The company is preparing its December 2026 S&OP cycle.

Five departments submit their reports:

1. Sales
2. Production
3. Warehouse
4. Procurement
5. Finance

Your responsibility is to consolidate their information and prepare a reliable dataset for the upcoming Demand Review and Supply Review.

For this example, all figures are illustrative.

### 6.2 Step 1: Collect Departmental Data

The departments submit the following information.

**A. Sales Department**

*December demand forecast*

| Product | Forecast quantity |
|---|---:|
| A | 12,000 |
| B | 10,000 |
| C | 8,000 |
| D | 6,000 |
| **Total** | **36,000** |

**B. Production Department**

*November production actuals*

| Product | Planned output | Reported actual |
|---|---:|---:|
| A | 12,000 | 11,500 |
| B | 10,000 | 9,800 |
| C | 8,000 | 8,100 |
| D | 6,000 | 5,900 |
| **Total** | **36,000** | **35,300** |

**C. Warehouse Department**

*Finished goods inventory*

| Product | ERP inventory | WMS inventory |
|---|---:|---:|
| A | 4,000 | 4,000 |
| B | 3,500 | 3,500 |
| C | 3,000 | 2,700 |
| D | 2,000 | 2,000 |
| **Total** | **12,500** | **12,200** |

**D. Procurement Department**

*Open purchase orders*

| Material | Open PO | Supplier confirmed |
|---|---:|---:|
| RM-A | 5,000 kg | 5,000 kg |
| RM-B | 4,000 kg | 3,000 kg |
| RM-C | 3,000 kg | 3,000 kg |

**E. Finance Department**

*December financial forecast*

| Product | Forecast quantity | Selling price | Revenue |
|---|---:|---:|---:|
| A | 12,000 | ₱100 | ₱1,200,000 |
| B | 10,000 | ₱120 | ₱1,200,000 |
| C | 8,000 | ₱150 | ₱1,200,000 |
| D | 6,000 | ₱200 | ₱1,200,000 |
| **Total** | **36,000** | | **₱4,800,000** |

At first glance, everything looks reasonable.

But collecting the information is only the first step.

### 6.3 Step 2: Perform Data Validation

Now you begin checking the reports.

**Issue 1: Production discrepancy**

Production's report shows 35,300 units.

However, the MES transaction summary shows only 35,000 units.

| Product | Production report | MES actual | Difference |
|---|---:|---:|---:|
| A | 11,500 | 11,500 | 0 |
| B | 9,800 | 9,800 | 0 |
| C | 8,100 | 7,800 | +300 |
| D | 5,900 | 5,900 | 0 |
| **Total** | **35,300** | **35,000** | **+300** |

Investigation:

Product C has a 300-unit discrepancy.

Possible causes:

- Duplicate production transactions.
- Manual adjustment in the production report.
- Different treatment of reworked units.
- Different cutoff dates.

Action:

Contact the Production data owner and request transaction-level reconciliation.

Do not automatically overwrite the Production report with the MES number until the discrepancy is understood.

**Issue 2: Inventory discrepancy**

The warehouse submitted ERP and WMS balances.

| Product | ERP | WMS | Difference |
|---|---:|---:|---:|
| A | 4,000 | 4,000 | 0 |
| B | 3,500 | 3,500 | 0 |
| C | 3,000 | 2,700 | +300 |
| D | 2,000 | 2,000 | 0 |
| **Total** | **12,500** | **12,200** | **+300** |

Product C has another 300-unit discrepancy.

Potential causes:

- Unposted inventory movement.
- Pending warehouse transaction.
- Stock transfer not reflected in ERP.
- Quality-hold classification differences.
- Incorrect inventory adjustment.

Action:

Coordinate with Warehouse and Inventory Control to establish the correct available stock.

Notice something important: the production and inventory discrepancies both involve 300 units of Product C.

Could they be related?

Possibly, but we cannot assume that they are.

A good analyst investigates the transaction history before concluding that the two discrepancies have the same cause.

**Issue 3: Procurement discrepancy**

Procurement reports:

| Material | Open PO | Supplier confirmed | Difference |
|---|---:|---:|---:|
| RM-A | 5,000 | 5,000 | 0 |
| RM-B | 4,000 | 3,000 | 1,000 |
| RM-C | 3,000 | 3,000 | 0 |

RM-B has 1,000 kg that has not been confirmed by the supplier.

This is important because the company may be planning production using material that is not yet guaranteed to arrive.

Action:

Ask Procurement to confirm:

- Whether the supplier has acknowledged the remaining quantity.
- The expected delivery date.
- Whether alternative supply is available.
- Whether the material shortage will affect production.

**Issue 4: Financial reconciliation**

Sales and Finance both report a December revenue forecast of ₱4.8 million.

At first, this appears consistent.

However, you must still verify that:

- Both departments use the same product quantities.
- Selling prices are consistent.
- Discounts and rebates are properly treated.
- The revenue recognition assumptions are aligned.

Identical totals do not automatically mean that the underlying calculations are correct.

### 6.4 Step 3: Consolidate the Data

After validation, you prepare one consolidated planning dataset.

For this example, assume that:

- Product C production actual is confirmed at 7,800 units.
- Product C available inventory is confirmed at 2,700 units.
- The RM-B supplier confirmation remains unresolved.

Your consolidated dataset could look like this:

| Product | Demand forecast | Inventory | Production actual |
|---|---:|---:|---:|
| A | 12,000 | 4,000 | 11,500 |
| B | 10,000 | 3,500 | 9,800 |
| C | 8,000 | 2,700 | 7,800 |
| D | 6,000 | 2,000 | 5,900 |
| **Total** | **36,000** | **12,200** | **35,000** |

This is now a much more reliable starting dataset.

However, remember that November production actuals and December demand forecasts are different measures and periods.

We should not directly compare their totals to conclude that December demand can or cannot be fulfilled.

We still need production capacity, inventory availability dates, material requirements, and other supply-planning information.

### 6.5 Step 4: Prepare the Data Issue Log

Not all discrepancies can be resolved immediately.

An S&OP analyst should maintain a Data Issue Log.

Example:

| Issue | Owner | Status | Required action |
|---|---|---|---|
| Product C production discrepancy | Production | Resolved | Use validated MES actual |
| Product C inventory discrepancy | Warehouse | Resolved | Use confirmed WMS balance |
| RM-B supplier confirmation | Procurement | Open | Confirm delivery quantity and date |
| Revenue assumptions | Finance | Validated | Retain approved forecast |

This is an important professional practice.

It prevents unresolved problems from disappearing during the consolidation process.

### 6.6 Step 5: Prepare the Planning Dataset

The final output should contain the information needed by the next S&OP activities.

For example:

| Data category | Prepared information | Intended use |
|---|---|---|
| Historical demand | Previous monthly sales | Demand Review |
| Customer orders | Open and confirmed orders | Demand Review |
| Demand forecast | December forecast | Demand Review |
| Production actuals | Validated November output | Supply Review |
| Inventory | Confirmed available stock | Supply Review |
| Purchase orders | Confirmed and unconfirmed quantities | Supply Review |
| Supplier lead times | Expected delivery dates | Supply Review |
| Financial forecast | Revenue and cost projections | Financial reconciliation |

The result is not simply an Excel file containing numbers.

It is an organized, validated, traceable set of planning inputs.

---

## 7. Data Preparation in the S&OP Process

Now let's translate the practical example into a repeatable monthly S&OP workflow.

### 7.1 The Monthly Data Preparation Process

1. **Establish the S&OP calendar.** Define the planning period, reporting schedule, submission deadlines, and data cutoff.
2. **Request departmental information.** Obtain reports from Sales, Operations, Warehouse, Procurement, and Finance.
3. **Collect and consolidate data.** Combine the different reports into an organized dataset.
4. **Validate and cleanse.** Check missing records, duplicate transactions, inconsistent formats, and incorrect values.
5. **Reconcile discrepancies.** Coordinate with data owners and investigate conflicting numbers.
6. **Document assumptions and unresolved issues.** Maintain a data issue log, source references, and validation results.
7. **Release the planning dataset.** Prepare the approved data for Demand Review and Supply Review.

### 7.2 Establishing a Consistent Planning Calendar

A company should establish a recurring monthly schedule.

Here is an illustrative calendar:

| Activity | Example schedule |
|---|---|
| Data cutoff | November 5 |
| Departmental submission | November 6–7 |
| Data consolidation | November 8 |
| Data validation | November 9–10 |
| Discrepancy resolution | November 11–12 |
| Planning dataset release | November 13 |
| Demand Review | November 16 |
| Supply Review | November 18 |
| Pre-S&OP | November 20 |
| Executive S&OP | November 24 |

The exact dates depend on the company's operating calendar.

The important principle is that every department works using the same agreed planning timeline.

### 7.3 Planning Horizon and Time Buckets

Another important preparation activity is standardizing the planning horizon.

A planning horizon is the future period covered by the S&OP plan.

For example, a company may use a rolling 18-month planning horizon.

The data could be organized into:

- Monthly buckets for detailed planning.
- Quarterly summaries for longer-term analysis.

A **time bucket** is a defined period used to group planning information.

Example:

| Product | November | December | January | February |
|---|---:|---:|---:|---:|
| A | 10,000 | 12,000 | 13,000 | 14,000 |
| B | 8,000 | 10,000 | 11,000 | 12,000 |

Why is this important?

Different departments may report information using different periods.

Sales might use monthly demand, Production might use weekly schedules, and Finance might use fiscal periods.

The S&OP analyst must establish a common calendar and appropriate conversion or aggregation rules.

### 7.4 Documenting Assumptions

An assumption is a condition accepted for planning purposes when complete information is not yet available.

Example:

The supplier has not confirmed the final 1,000 kg of RM-B.

The analyst may document:

| Item | Planning assumption |
|---|---|
| Material | RM-B |
| Unconfirmed quantity | 1,000 kg |
| Expected delivery | December 10 |
| Basis | Historical supplier delivery pattern |
| Risk | Supplier confirmation pending |
| Owner | Procurement |

Notice that we are not presenting the delivery date as confirmed.

It is explicitly identified as an assumption.

This protects the integrity of the plan.

### 7.5 Communicating Data Discrepancies

An S&OP analyst must communicate issues professionally.

**Example: Data clarification request**

**Subject:** Clarification Required – Product C Production Actual

Hi Production Team,

During the November production data consolidation, we identified a 300-unit discrepancy for Product C.

- Production report: 8,100 units
- MES transaction summary: 7,800 units
- Difference: 300 units

Could you please verify the transaction records and confirm the validated production quantity?

We would appreciate your confirmation before the December S&OP dataset is finalized.

Thank you.

The communication should be:

- Specific about the discrepancy.
- Supported by actual figures.
- Clear about the required action.
- Directed to the appropriate data owner.
- Associated with a resolution deadline.

Avoid sending vague messages such as "Please check your data."

### 7.6 How Prepared Data Supports the Next S&OP Meetings

| Prepared data | Demand Review | Supply Review |
|---|---|---|
| Historical sales | Analyze demand patterns | Reference for supply planning |
| Customer orders | Evaluate committed demand | Identify supply requirements |
| Demand forecast | Review forecast changes | Evaluate production feasibility |
| Production capacity | Reference supply constraints | Evaluate available capacity |
| Inventory | Consider available stock | Determine supply coverage |
| Procurement data | Identify material-related demand risks | Evaluate material availability |
| Financial data | Evaluate revenue expectations | Evaluate costs and operational implications |

The two meetings use overlapping information, but their primary questions are different.

**Demand Review asks:**

What do customers need, and how much demand should the business plan for?

**Supply Review asks:**

Can the company meet that demand with its available production capacity, inventory, materials, and resources?

This is why data preparation must be cross-functional.

---

## 8. Business Perspective and Decision-Making

Now let's look at this from the perspective of an S&OP Analyst.

Your job is not simply to collect Excel files and combine them into one workbook.

Your responsibility is to make sure that management can trust the information they use to make decisions.

### 8.1 What decisions depend on data quality?

| Business area | Data preparation impact | Potential business decision |
|---|---|---|
| Demand | Accurate sales history and forecasts | Adjust demand forecast |
| Production | Validated output and capacity | Increase production or add shifts |
| Inventory | Accurate available stock | Replenish or reduce inventory |
| Procurement | Confirmed supplier information | Expedite or adjust purchasing |
| Customer service | Correct orders and backorders | Prioritize customer requirements |
| Finance | Reconciled revenue and cost data | Evaluate financial feasibility |

### 8.2 What happens when data preparation fails?

| Data problem | Incorrect planning decision | Potential business consequence |
|---|---|---|
| Overstated inventory | Reduce production unnecessarily | Stockouts |
| Missing customer forecast | Underestimate demand | Lost sales |
| Duplicate purchase orders | Overestimate incoming materials | Excess inventory |
| Incorrect production output | Assume capacity is sufficient | Delivery delays |
| Outdated supplier lead time | Schedule production incorrectly | Material shortages |
| Incorrect selling price | Overestimate revenue | Financial plan deviation |

### 8.3 What should an S&OP Analyst prioritize?

I recommend thinking about data preparation using three priorities:

**Priority 1: Reliability**

Can we trust the numbers?

**Priority 2: Traceability**

Can we identify where the numbers came from, who owns them, and how they were processed?

**Priority 3: Business relevance**

Does the information provide what the S&OP team actually needs to make decisions?

A technically clean dataset can still be useless if it does not answer the business questions.

For example, a production report containing thousands of machine-level transactions may be accurate, but management may need monthly production capacity and output by product family.

The analyst must understand how to convert detailed operational information into useful planning information.

---

## 9. Key Takeaways

Here are the concepts you should remember before moving forward.

| Concept | What you should remember |
|---|---|
| Data Gathering | Collecting relevant business information |
| Data Preparation | Making collected information reliable and usable |
| Raw Data | Original recorded information |
| Processed Data | Cleaned, consolidated, and validated information |
| Planning Information | Information interpreted for business decisions |
| Accuracy | Correctness of recorded information |
| Completeness | Availability of required information |
| Consistency | Uniformity of definitions and formats |
| Timeliness | Availability of updated information when needed |
| Data Integration | Combining information from multiple sources |
| Data Cleansing | Identifying and handling data errors |
| Data Reconciliation | Investigating differences between sources |
| Data Ownership | Accountability for maintaining particular information |
| Data Cutoff | Agreed point in time for the planning data snapshot |
| Data Issue Log | Documentation of unresolved data problems |

### The most important principles

1. Having data does not mean having reliable data.
2. Never assume that a system-generated report is automatically correct.
3. Never replace missing information with zero without understanding its meaning.
4. Never remove duplicate-looking records without verifying their transaction identities.
5. Always distinguish actuals from forecasts.
6. Always establish consistent units, product codes, and reporting periods.
7. Investigate discrepancies instead of simply choosing whichever number looks reasonable.
8. Maintain traceability of sources, assumptions, and corrections.
9. Coordinate with the appropriate data owners.
10. Remember that data preparation supports both Demand Review and Supply Review.

**One professional principle to remember:**

An S&OP plan is only as reliable as the information and assumptions supporting it.

---

## 10. Knowledge Check and Exercises

**Assessment: Level 1–3**

Now let's test your understanding.

Don't worry about getting everything correct. The objective is to determine whether you can apply the concepts, not just memorize definitions.

I will not reveal the answers yet. Once you submit your answers, I will evaluate them, explain mistakes, and show the correct solutions.

### Level 1: Understanding

**Question 1.** Explain the difference between Raw Data, Processed Data, and Planning Information. Give one manufacturing example for each.

**Question 2.** Why is data accuracy not the same as data completeness?

**Question 3.** A company has the following situation:

- Sales uses product code A-001.
- Production uses A001.
- Warehouse uses PROD-A001.

All three represent the same product.

What type of data quality problem is this, and how should an S&OP analyst address it?

**Question 4.** What is the difference between Data Integration and Data Reconciliation?

**Question 5.** Why should an S&OP analyst not automatically replace missing forecast quantities with zero?

### Level 2: Technical Application

**Question 6. Data Completeness**

A company requires 250 product-month forecast records.

Only 225 records have valid forecast quantities.

Calculate:

a. Number of missing records.

b. Data completeness percentage.

c. Missing data percentage.

**Question 7. Duplicate Records**

A production report contains 500 transaction records. After validation, 15 records are confirmed duplicates.

Calculate the duplicate rate.

**Question 8. Quantity Reconciliation**

The ERP reports 15,000 units of inventory, while the verified warehouse reference shows 14,400 units.

Calculate:

a. Absolute difference.

b. Percentage deviation relative to the warehouse reference.

c. Which department should be contacted to investigate the discrepancy?

**Question 9. Outlier Identification**

A manufacturing line reports the following daily production:

10,000; 10,200; 9,900; 10,100; 10,050; 15,500.

Which observation would you investigate first?

Explain why an unusually high value should not automatically be deleted.

### Level 3: Professional Analysis

**Question 10. Manufacturing Data Investigation**

You are preparing the December S&OP dataset.

You discover the following:

| Data | Department A | Department B |
|---|---:|---:|
| Demand forecast | Sales: 20,000 | Planning: 18,000 |
| Production actual | Production: 15,000 | MES: 14,500 |
| Inventory | ERP: 8,000 | WMS: 7,500 |
| Incoming materials | Procurement: 5,000 | Supplier-confirmed: 3,000 |

Answer the following:

a. Identify all four discrepancies.

b. Which data owners should you contact?

c. What additional information would you request?

d. Which discrepancies could potentially affect December production?

e. Would you release the dataset immediately? Explain your decision.

**Question 11. S&OP Analyst Scenario**

Imagine that all departments have submitted their reports, but:

- Sales submitted its forecast two days late.
- Production uses weekly reporting periods.
- Finance uses fiscal months.
- Warehouse has unresolved inventory discrepancies.
- Procurement has unconfirmed supplier deliveries.

As the S&OP Analyst, explain how you would organize the data preparation process.

Your answer should include prioritization, coordination, documentation, and communication.

---

## Assessment Tracker

You can use this to track your progress as you answer.

### Topic 8.2 Progress

- [ ] Level 1: Understanding (Questions 1–5)
- [ ] Level 2: Technical Application (Questions 6–9)
- [ ] Level 3: Professional Analysis (Questions 10–11)

Mark each level as completed after submitting and reviewing your answers.

**How to proceed:** You can answer all 11 questions in one submission or start with Questions 1–5. I recommend answering progressively so we can correct misunderstandings before moving to more technical exercises.

---

## Final Connection: Topic 8.2 → Topic 8.3

**Completed lesson: Topic 8.2: Data Gathering and Preparation**

We learned how to collect, consolidate, validate, and prepare reliable business information.

**Next topic: Topic 8.3: Demand Review Meeting**

We will learn how the S&OP team evaluates historical demand, customer orders, forecasts, demand changes, and potential demand risks.

One important question to carry into our next lesson:

**If Sales submits a forecast of 20,000 units, should the S&OP team automatically accept that number as the official demand plan?**

Not necessarily.

That is precisely why the next stage exists: to challenge, evaluate, discuss, and establish a realistic demand plan.

We will proceed to Topic 8.3 only after you complete or confirm your understanding of Topic 8.2.
