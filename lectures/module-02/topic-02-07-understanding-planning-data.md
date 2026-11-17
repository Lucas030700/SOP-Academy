---
module: 2
topic: "2.7"
title: "Understanding Planning Data"
language: "Taglish"
status: "complete"
---

# Module 2 – Supply Chain Management
## Topic 2.7: Understanding Planning Data

**Learning focus:** Understanding what planning data is, the major classifications of business data, where data comes from, how it is structured, and how planners validate and prepare it before using it for S&OP planning and decision-making.

> A company cannot create a reliable business plan using unreliable data.

Kahit gaano kaganda ang forecasting method, production strategy, inventory policy, o planning software, kung mali ang information na ginagamit, posibleng mali rin ang magiging business decisions.

- Kung mali ang historical sales, maaaring mali ang demand forecast.
- Kung outdated ang supplier lead time, maaaring mali ang procurement schedule.
- Kung mali ang inventory balance, maaaring mag-order ng materials na hindi naman kailangan.
- Kung hindi updated ang production capacity, maaaring mangako ang company ng orders na hindi kayang gawin.

Kaya bago tayo gumawa ng plans, kailangan muna nating maintindihan kung saan nanggagaling ang data, ano ang ibig sabihin nito, paano ito inaayos, at paano natin malalaman kung reliable ito.

---

## 1. Topic Overview

### 1.1 What is this topic about?

Ang Topic 2.7 ay tungkol sa pag-unawa sa information na ginagamit ng isang company para makagawa ng operational at business plans.

Hindi sapat na may numbers lang tayo sa Excel o ERP. Kailangan nating malaman:

1. Ano ang data?
2. Saan ito nanggaling?
3. Ano ang meaning ng bawat field?
4. Paano ito connected sa ibang business information?
5. Tama ba at updated ang data?
6. Ready na ba itong gamitin for planning?

Ito ang foundation ng tinatawag na **Planning Data Management**.

### 1.2 Why is this important in S&OP?

Ang S&OP ay nangangailangan ng coordination between different departments.

| Department | Important data needed |
|---|---|
| Sales | Customer demand, orders, forecasts |
| Demand Planning | Historical sales, demand trends, promotions |
| Production | Capacity, production rates, yields |
| Procurement | Supplier lead times, purchase orders |
| Warehouse | Inventory balances, stock availability |
| Finance | Revenue, costs, budgets |
| Management | Business performance, risks, planning assumptions |

Imagine na ang Sales Department ay nagsasabing kailangan nila ng 100,000 units next month.

Pero according to Production, 80,000 units lang ang kaya nilang gawin.

Meanwhile, Procurement reports na kulang ang raw materials, at ang supplier ay may 45-day lead time.

Paano makakagawa ng decision ang management?

Kailangan nilang pagsamahin at i-analyze ang data mula sa iba't ibang departments.

That is where planning data becomes important.

### 1.3 Connection to previous topics

| Previous topic | Connection to planning data |
|---|---|
| 2.1 S&OP Fundamentals | Data provides the foundation for the S&OP process. |
| 2.2 S&OP Process | Each stage of S&OP requires different datasets. |
| 2.3 Organizational Roles | Different departments provide and validate different data. |
| 2.4 Product and Supply Chain Fundamentals | Products, materials, suppliers, and processes require accurate information. |
| 2.5 Product Classification and Product Families | Product master data allows products to be grouped and consolidated. |
| 2.6 Manufacturing Strategies | Manufacturing strategies determine what production and capacity information is important. |
| **2.7 Understanding Planning Data** | **We learn how to gather, structure, validate, and prepare the information used in planning.** |

The important connection: Topics 2.1–2.6 established what S&OP is, who participates, what products are involved, and how companies manufacture them. Topic 2.7 focuses on the information needed to make those activities work.

### 1.4 Learning objectives

By the end of this lesson, you should be able to:

- Explain what planning data is and why it matters.
- Differentiate five major business data classifications.
- Identify important demand, supply, and inventory data.
- Understand how planning data is organized.
- Identify common ERP, MES, MRP, WMS, and CRM data sources.
- Perform basic data validation and reconciliation.
- Differentiate actual recorded data from assumptions and planning parameters.
- Interpret data quality problems and their potential business consequences.

---

## 2. Layman's Explanation

### 2.1 Imagine that you are managing an electronic components factory.

Let's say you are responsible for ensuring that your factory can produce enough electronic components to meet customer demand next month.

Your manager asks:

"Can we produce 50,000 units next month?"

Simple question, right?

But before answering, you need to know several things.

| Question | Information needed |
|---|---|
| How many units do customers need? | Customer demand and sales forecast |
| How many units are already ordered? | Customer orders |
| How many finished products are available? | Finished goods inventory |
| How many raw materials are available? | Raw material inventory |
| How much can the factory produce? | Production capacity |
| How fast can production run? | Production rate |
| When will new materials arrive? | Supplier lead time and purchase orders |
| How much material is needed per product? | Bill of Materials |

Notice something?

You cannot answer the manager's question using only one number.

You need different pieces of information from different departments.

These pieces of information are what we call **planning data**.

### 2.2 An everyday analogy: Preparing for a family gathering

Imagine that you are organizing a family gathering for 100 people.

Before buying ingredients, you need to know:

- How many guests are coming?
- What food will be served?
- How many ingredients are needed?
- What ingredients are already available?
- How much money is available?
- How long will food preparation take?

Now imagine that your guest list contains duplicate names.

Instead of 100 guests, you mistakenly count 120.

You will probably buy too much food.

Or imagine that you have 20 kilograms of rice, but 10 kilograms are already reserved for another event.

Your actual usable rice is only 10 kilograms.

This is similar to inventory planning in manufacturing.

**The lesson:** Data must not only exist. It must also be accurate, properly classified, and understood.

### 2.3 Four stages of working with data

Before we discuss the technical classifications, understand these four concepts.

**Stage 1: Raw Data**

Original recorded numbers without much interpretation.

Example: 1,000, 1,200, 950, 1,500 units sold.

**Stage 2: Processed Data**

Data that has been cleaned, organized, and calculated.

Example: Monthly sales totals, duplicates removed, product codes standardized.

**Stage 3: Information**

Processed data that has meaning and context.

Example: Monthly demand increased from 950 to 1,500 units.

**Stage 4: Business Insight**

An interpretation that can support a business decision.

Example: Demand is increasing, so the company may need to increase production capacity or secure additional materials.

Important distinction: Not every increase in sales automatically means future demand will increase. The analyst must investigate whether the increase is caused by seasonality, promotions, a one-time order, or a genuine demand trend.

---

## 3. Technical Explanation

### 3.1 What is Planning Data?

**Planning Data** refers to the structured information, historical records, business transactions, operational measurements, and planning assumptions used by an organization to develop, evaluate, and execute business plans.

In simpler terms:

Planning data is the collection of information that helps a company determine:

- What needs to be produced.
- How much needs to be produced.
- When production should happen.
- Where production should happen.
- What materials are required.
- How much inventory is needed.
- Whether available resources can support the plan.

Planning data can be actual, historical, forecasted, or assumed.

Hindi lahat ng planning data ay actual recorded transactions. May information na galing sa historical records, at may information din na galing sa future assumptions.

### 3.2 Five major classifications of business data

Ito ang pinakaimportanteng distinction sa topic na ito.

**1. Master Data: Defines WHAT exists**

Stable information describing products, customers, suppliers, and resources.

Example: Product A requires 2 kg of raw material per unit.

**2. Transactional Data: Records WHAT happened**

Individual business transactions and operational events.

Example: Customer ordered 5,000 units on November 10.

**3. Historical Data: Shows WHAT happened over time**

Past records and measurements used to identify trends and performance.

Example: Monthly sales over the previous 12 months.

**4. Planning Data: Defines WHAT is planned**

Future-oriented forecasts, targets, schedules, and operational plans.

Example: Planned production of 50,000 units next month.

**5. Reference Data: Defines HOW data is interpreted**

Standard codes, units, calendars, categories, and predefined values.

Example: Units of measurement, currency codes, and working-day calendars.

These classifications are not always mutually exclusive. For example, historical sales are derived from transactional sales records, while a product's master data is used to identify and classify those transactions.

---

## 4. Detailed Discussion

### 4.1 A. Master Data

#### What is Master Data?

Master Data is the relatively stable information that describes the main entities of a business.

Think of it as the company's official directory or database of important business objects.

For example, bago ka makapag-record ng sales transaction, kailangan munang malaman ng system:

- Anong product ang binebenta?
- Sino ang customer?
- Anong plant ang involved?
- Anong warehouse ang ginagamit?

These are described by master data.

#### Types of Master Data

| Master data | Meaning | Manufacturing example |
|---|---|---|
| Product Master | Official product information | Product code, description, product family |
| Customer Master | Customer information | Customer ID, address, payment terms |
| Supplier Master | Supplier information | Supplier ID, location, purchasing details |
| Location Master | Official business locations | Plant 1, Warehouse 2, Distribution Center |
| Bill of Materials (BOM) | Materials required to produce a product | 2 kg powder + 1 component casing |
| Work Center Master | Production resources and work centers | Casting Line 1, Firing Machine 2 |

#### 1. Product Master Data

Contains the official information about each product.

Example:

| Field | Value |
|---|---|
| Product Code | MLCC-1001 |
| Description | Multilayer Ceramic Capacitor |
| Product Family | MLCC Standard |
| Product Category | Capacitor |
| Base Unit of Measure | Pieces |
| Product Status | Active |
| Manufacturing Plant | Plant 01 |

**Why does this matter?**

Suppose the company has 500 SKUs.

If product codes are inconsistent, the planning system might interpret one product as two different products.

Example:

- MLCC-1001
- MLCC1001
- MLCC-100I

These may represent the same intended product, or they may be different products. The analyst must verify rather than assume.

#### 2. Customer Master Data

Contains official customer information.

Examples:

- Customer ID
- Customer name
- Customer group
- Country
- Market segment
- Shipping location
- Payment terms

**S&OP application:**

Allows planners to analyze demand by customer, customer group, or market.

For example, a company may discover that 60% of its product demand comes from three major customers.

This is important when evaluating customer concentration and demand risks.

#### 3. Supplier Master Data

Contains information about the company's suppliers.

Examples:

- Supplier code
- Supplier name
- Supplier location
- Approved material list
- Purchasing terms
- Currency
- Supplier status

**S&OP application:**

Helps identify supplier dependencies, sourcing options, and potential supply risks.

#### 4. Location and Warehouse Master Data

Describes where materials and products are stored, manufactured, or distributed.

Examples:

- Plant 01
- Warehouse A
- Finished Goods Warehouse
- Raw Material Warehouse
- Distribution Center 01

**S&OP application:**

Helps determine whether inventory is available at the correct location.

Important concept: Having 10,000 units in the company does not automatically mean those 10,000 units are available to fulfill orders at every plant or warehouse.

#### 5. Bill of Materials (BOM)

**Important for manufacturing planning**

A Bill of Materials is a structured list of materials and their required quantities to manufacture one unit of a product.

Example:

Product MLCC-1001 requires:

| Material | Required quantity per finished unit |
|---|---:|
| Ceramic powder | 0.020 kg |
| Electrode material | 0.005 kg |
| Packaging material | 1 pc |

If the company plans to produce 10,000 finished units:

- Ceramic powder = 10,000 × 0.020 = 200 kg
- Electrode material = 10,000 × 0.005 = 50 kg
- Packaging material = 10,000 × 1 = 10,000 pcs

Notice that the BOM connects production planning to material requirements.

A wrong BOM can cause the company to purchase too much or too little material.

Professional terminology: **BOM Explosion** is the process of calculating the total component and material requirements based on the planned production quantity and BOM structure.

#### 6. Work Center and Resource Information

A Work Center represents a production resource or group of resources where manufacturing operations take place.

Examples:

- Casting Line 1
- Stacking Machine 2
- Cutting Line 3
- Firing Furnace 1

Work center data may contain:

- Available working hours
- Production rate
- Number of machines
- Shift schedule
- Efficiency assumptions
- Capacity limits

**S&OP application:**

Helps determine how much production capacity is available.

For example, if a casting line can process 500 units per hour and operates for 16 hours per day, its theoretical daily capacity is 8,000 units.

Actual achievable output may be lower because of downtime, changeovers, maintenance, and yield losses.

### 4.2 B. Transactional Data

#### What is Transactional Data?

Transactional Data records individual business activities or events that occur during normal business operations.

Simple explanation:

Master data describes the business objects. Transactional data records what happens to those objects.

Example:

- Product master: MLCC-1001 exists.
- Customer master: Customer A exists.
- Sales transaction: Customer A purchased 5,000 units of MLCC-1001.

#### Types of Transactional Data

| Transaction | Description | Example |
|---|---|---|
| Customer Orders | Orders received from customers | 5,000 units ordered |
| Sales Transactions | Recorded sales activity | 3,000 units invoiced |
| Purchase Orders | Orders placed with suppliers | 2,000 kg powder ordered |
| Production Orders | Instructions to manufacture products | Produce 10,000 units |
| Inventory Movements | Stock transfers or adjustments | 500 units transferred |
| Goods Receipts | Materials received from suppliers | 1,000 kg received |
| Shipments | Products dispatched to customers | 4,000 units shipped |

#### Why is transactional data important?

It provides evidence of what actually occurred in the business.

Let's say the company received three customer orders:

| Order | Customer | Quantity |
|---|---|---:|
| SO-001 | Customer A | 2,000 |
| SO-002 | Customer B | 3,000 |
| SO-003 | Customer C | 5,000 |
| **Total** | | **10,000** |

The company has 10,000 units of confirmed customer orders.

This information can be used in demand planning and supply planning.

However, be careful: customer orders, shipments, and invoiced sales are not interchangeable.

- Order = Customer requested the product.
- Shipment = Product physically dispatched.
- Invoice = Commercial billing transaction.

A company may have orders that have not yet been shipped or invoiced.

This distinction is extremely important when analyzing demand.

### 4.3 C. Historical Data

#### What is Historical Data?

Historical Data consists of records from previous periods that help the company understand past performance and identify patterns.

Examples:

| Historical data | Example |
|---|---|
| Historical Sales | Units sold per month |
| Historical Demand | Customer demand received per month |
| Historical Production | Actual units manufactured |
| Historical Inventory | Month-end stock balances |
| Supplier Performance | Actual supplier delivery performance |
| Historical Lead Time | Actual time between order placement and receipt |

#### Why is historical data important?

Because past performance provides evidence that helps us understand possible future behavior.

Example:

| Month | Historical Sales |
|---|---:|
| July | 8,000 |
| August | 9,000 |
| September | 10,000 |
| October | 11,000 |
| November | 12,000 |

What can we observe?

Sales have been increasing.

A demand planner may investigate whether this is a continuing trend.

But remember:

**Historical performance is not automatically equal to future demand.**

There may be:

- Seasonal changes.
- One-time customer orders.
- Promotions.
- Market changes.
- Supply shortages that prevented actual sales.

#### Important distinction: Historical Sales vs. Historical Demand

This is a particularly important concept.

Imagine that customers wanted 10,000 units, but the company only had 7,000 units available.

| Metric | Quantity |
|---|---:|
| Actual customer demand | 10,000 |
| Actual fulfilled sales | 7,000 |
| Unfulfilled demand | 3,000 |

If the company uses only actual sales to forecast future demand, it may underestimate the market requirement.

Why?

Because sales were restricted by product availability.

This is known as **censored demand** or demand constrained by supply.

An analyst should investigate whether historical sales reflect true demand or merely the quantity the company was able to supply.

### 4.4 D. Planning Data

#### What is Planning Data?

Planning Data contains information about what the company intends, expects, or targets to do in future periods.

Unlike historical data, it is forward-looking.

| Type | Example |
|---|---|
| Demand Forecast | Expected demand of 15,000 units next month |
| Supply Plan | Planned supply of 14,000 units |
| Production Plan | Schedule to produce 12,000 units |
| Procurement Plan | Plan to purchase 500 kg of material |
| Inventory Target | Desired month-end stock of 2,000 units |
| Capacity Plan | Planned utilization of 85% |

#### Why does planning data matter?

It translates business expectations into operational activities.

For example:

The demand plan says 20,000 units are expected next month.

The supply plan evaluates how much of that demand the company can support.

The production plan determines how many units must be manufactured.

The procurement plan determines how many raw materials must be purchased.

The inventory plan evaluates the expected stock position.

These plans are connected.

**Important:** A plan is not necessarily a confirmed commitment. A demand forecast is an estimate, while a confirmed customer order is a transactional record. A production plan may still be subject to management approval and capacity confirmation.

### 4.5 E. Reference Data

#### What is Reference Data?

Reference Data consists of standardized values, codes, classifications, and definitions used to maintain consistency across business records and systems.

Simple explanation:

Ito ang common standards na sinusunod para pare-pareho ang interpretation ng data.

Examples:

| Reference data | Example |
|---|---|
| Unit of Measurement | kg, g, pcs, meters |
| Currency | PHP, USD, EUR |
| Product Categories | Capacitor, Resistor, Inductor |
| Calendar | Working days, holidays |
| Country Codes | PH, US, JP |
| Order Status | Open, Released, Closed |
| Standard Lead Time | 30 days |
| Planning Period | Weekly, Monthly |

#### Why does it matter?

Imagine that one department records material quantity in kilograms while another records it in grams.

| Department | Recorded quantity |
|---|---:|
| Warehouse | 500 kg |
| Procurement | 500,000 g |

These quantities are equivalent.

But if the units are not properly identified and converted, the planning calculation may become incorrect.

Reference data ensures that different departments and systems use consistent definitions.

#### Standard Lead Time: Reference Data or Master Data?

This is a useful technical distinction.

In many ERP environments, standard lead time is maintained as a planning parameter within product, supplier, or material master records. Some organizations also manage calendars, status codes, and units as separate reference-data objects.

The classification can vary depending on the company's data architecture.

The important thing is to understand the purpose and ownership of the field, not memorize a rigid category.

### 4.6 Comparison of the Five Classifications

| Classification | Main question answered | Example |
|---|---|---|
| Master Data | What entities exist? | Product MLCC-1001 |
| Transactional Data | What business event occurred? | Customer ordered 5,000 units |
| Historical Data | What happened in previous periods? | November sales were 12,000 |
| Planning Data | What is expected or intended? | December forecast is 15,000 |
| Reference Data | What standards or definitions apply? | UOM = pieces |

#### Let's test the distinction using one product.

Suppose we have Product MLCC-1001.

| Information | Classification |
|---|---|
| Product code: MLCC-1001 | Master Data |
| Customer order: 5,000 units | Transactional Data |
| Sales last month: 4,500 units | Historical Data |
| Forecast next month: 6,000 units | Planning Data |
| UOM: Pieces | Reference Data |

This is the type of distinction an S&OP analyst must understand when gathering information from multiple departments.

### 4.7 Important Data Used in Demand Planning

Demand Planning is concerned with estimating how much customers will need in the future.

To do this, planners combine different data inputs.

| Data input | What it tells us | How it is used |
|---|---|---|
| Historical Demand | Past customer requirements | Identifying trends |
| Historical Sales | Past fulfilled sales | Baseline forecasting, with supply constraints considered |
| Customer Orders | Confirmed customer requirements | Understanding committed demand |
| Open Order Backlog | Orders not yet fulfilled | Evaluating outstanding requirements |
| Forecast Quantities | Expected future demand | Creating the demand plan |
| Product Information | Product characteristics | Product-level analysis |
| Customer Information | Who is generating demand | Customer-level forecasting |
| Demand Calendar | When demand occurs | Time-based planning |
| Promotions | Expected demand changes | Forecast adjustments |
| Market Adjustments | Changes in market expectations | Demand consensus |

#### What is Open Order Backlog?

Open Order Backlog represents customer orders that have been received but not yet fully fulfilled.

Example:

| Customer order | Ordered | Shipped | Remaining backlog |
|---|---:|---:|---:|
| SO-101 | 10,000 | 6,000 | 4,000 |
| SO-102 | 5,000 | 0 | 5,000 |
| SO-103 | 8,000 | 8,000 | 0 |
| **Total** | **23,000** | **14,000** | **9,000** |

\[
\text{Open Backlog}=\text{Ordered Quantity}-\text{Shipped Quantity}
\]

The open backlog is 9,000 units.

However, not all open backlog necessarily belongs to the same future planning period. Planners must consider requested delivery dates, confirmed delivery dates, order cancellations, and partial shipments.

#### Forecast vs. Customer Orders

These are different concepts.

- Customer orders are known customer commitments or requests.
- Forecasts are estimates of future demand.

A common planning mistake is to add the entire forecast to the entire order backlog without checking whether the forecast already includes those orders.

This can cause double counting.

For example:

| Metric | Quantity |
|---|---:|
| Forecast | 15,000 |
| Open customer orders | 5,000 |

If the forecast represents total expected demand, including the existing orders, total demand remains 15,000, not 20,000.

A common approach is to calculate remaining forecast demand after accounting for existing orders, but the exact method depends on the company's forecast consumption rules and planning horizon.

### 4.8 Important Data Used in Supply Planning

Supply Planning evaluates whether the company has enough resources to meet the demand plan.

| Data | Meaning | Impact on supply |
|---|---|---|
| Production Capacity | Maximum available output | Determines production limits |
| Available Production Hours | Time available for operations | Determines usable capacity |
| Production Rate | Output per hour | Determines production speed |
| Equipment Availability | Machines available for use | Affects production capability |
| Labor Availability | Available workforce | Affects operating capacity |
| Raw Material Inventory | Materials currently available | Determines material readiness |
| Supplier Lead Time | Time required to receive materials | Affects replenishment timing |
| Purchase Orders | Materials already ordered | Provides expected incoming supply |
| BOM | Material requirements per product | Calculates material consumption |
| Production Yield | Good output relative to input | Affects required production input |
| Scrap Rate | Portion of input lost as scrap | Affects material requirements |
| Manufacturing Constraints | Limitations in production | Restricts achievable output |

#### Understanding Production Capacity

Suppose:

- Production rate = 500 units/hour.
- Available production hours = 16 hours/day.
- Operating days = 20 days/month.

Theoretical production capacity:

\[
500 \times 16 \times 20=160,000
\]

**160,000 units/month**

But this assumes that the line can continuously operate at the stated rate.

Actual output may be lower due to:

- Equipment downtime.
- Preventive maintenance.
- Changeovers.
- Material shortages.
- Labor shortages.
- Quality problems.

This is why theoretical capacity and effective capacity should not be treated as identical.

#### Understanding Yield and Scrap

**Yield** measures the proportion of input or produced units that become acceptable output.

\[
\text{Yield}=\frac{\text{Good Output}}{\text{Total Input}}\times100
\]

Example:

- Total input = 10,000 units.
- Good output = 9,500 units.

\[
\text{Yield}=\frac{9,500}{10,000}\times100=95\%
\]

The scrap rate, assuming all losses are classified as scrap, is:

\[
100\%-95\%=5\%
\]

If the company needs 10,000 good units and expects a 95% yield:

\[
\text{Required Input}=\frac{10,000}{0.95}
\]

\[
=10,526.32
\]

The company needs approximately 10,527 input units.

This is important because production plans based only on finished-good demand may underestimate the materials and production input required.

### 4.9 Important Inventory Data

One of the most common sources of confusion in planning is the difference between physical inventory and usable inventory.

Let's discuss the different inventory categories.

| Inventory type | Meaning |
|---|---|
| On-hand Inventory | Physical quantity recorded as being in stock |
| Available Inventory | Quantity currently available for use or allocation |
| Allocated Inventory | Stock assigned to specific requirements |
| Reserved Inventory | Stock set aside for specific orders or purposes |
| Blocked Inventory | Stock restricted from use |
| Quality-Hold Inventory | Stock awaiting inspection or disposition |
| Work-in-Process (WIP) | Products currently undergoing manufacturing |
| In-Transit Inventory | Materials or products being transported |
| Open Purchase Orders | Outstanding supplier orders |
| Safety Stock | Buffer inventory maintained against uncertainty |
| Inventory Target | Desired inventory level |

#### Example: Why physical inventory is not equal to available inventory

Suppose the warehouse reports 10,000 units on hand.

However:

| Inventory status | Quantity |
|---|---:|
| Total On-hand | 10,000 |
| Allocated to Customer A | 2,000 |
| Reserved for Customer B | 1,000 |
| Quality Hold | 500 |
| Blocked Stock | 500 |

Assuming these categories are mutually exclusive:

\[
\text{Available Inventory}
=10,000-2,000-1,000-500-500
\]

\[
=6,000\text{ units}
\]

**6,000 units available**

The company physically has 10,000 units, but only 6,000 units are available for additional requirements.

**Important technical note:** Actual ERP availability calculations vary. Some systems treat reservations, allocations, safety stock, and quality stock differently. Always understand the company's official inventory definition before using the number.

#### What about WIP and In-Transit Inventory?

These require special attention.

WIP is not the same as finished goods. It may still need additional production operations before it can be shipped.

In-transit inventory is expected to arrive, but it is not necessarily physically available yet.

Open purchase orders are also not automatically available inventory. They represent expected future receipts, subject to supplier performance and receiving schedules.

### 4.10 Understanding Data Structure and Planning Levels

Now that we know the types of data, let's understand how companies organize them.

Imagine an Excel dataset containing 100,000 records.

How do you analyze it?

You need to organize information into dimensions.

A **dimension** is a category or perspective through which data can be organized, filtered, grouped, and analyzed.

The four important dimensions are:

#### A. Time Dimension

| Level | Example |
|---|---|
| Daily | November 16 |
| Weekly | Week 47 |
| Monthly | November 2026 |
| Quarterly | Q4 2026 |
| Annual | FY 2026 |

Why does this matter?

Because different decisions require different planning periods.

- Daily: Production scheduling.
- Weekly: Material availability and near-term supply.
- Monthly: S&OP demand-supply balancing.
- Quarterly: Business outlook and capacity strategy.
- Annual: Budget and strategic planning.

#### B. Product Dimension

| Level | Example |
|---|---|
| SKU | MLCC-1001 |
| Product Model | Model 1001 |
| Product Family | MLCC Standard |
| Product Category | Capacitors |

This creates a hierarchy.

**Product Category → Product Family → Product Model → SKU**

Why is this useful?

Suppose you have 50 individual SKUs.

Instead of analyzing every SKU individually during an executive S&OP meeting, you can consolidate demand into product families.

This is called **Aggregation**.

You can still drill down into individual SKUs when necessary. This is called **Drill-down Analysis**.

#### C. Location Dimension

| Level | Example |
|---|---|
| Plant | Plant 01 |
| Production Line | Casting Line 1 |
| Warehouse | Raw Material WH |
| Distribution Center | DC Philippines |
| Supplier Location | Supplier Factory Japan |

This helps planners identify where products and resources are located.

#### D. Business Dimension

| Level | Example |
|---|---|
| Customer | Customer A |
| Customer Group | Automotive Customers |
| Market | North America |
| Business Unit | Electronics Division |

This enables demand analysis from a commercial perspective.

#### Combining the four dimensions

Let's say you want to answer:

"How much demand do we expect for MLCC Standard products from automotive customers in Plant 01 during December 2026?"

Your dataset must allow you to filter by:

- Time = December 2026.
- Product Family = MLCC Standard.
- Customer Group = Automotive.
- Location = Plant 01.

This is the foundation of multidimensional planning and analysis.

Professional terminology: **Planning Granularity** refers to the level of detail at which planning data is maintained or analyzed.

For example:

- SKU-level monthly planning.
- Product-family monthly planning.
- Plant-level weekly planning.

The appropriate granularity depends on the planning decision.

Too much detail can make S&OP unnecessarily complicated. Too little detail can hide important constraints.

### 4.11 Data Sources and Business Systems

Now let's answer an important question:

Where does all this information come from?

In a manufacturing company, planning data usually comes from several interconnected systems.

| System | Full name | Primary purpose | Typical planning data |
|---|---|---|---|
| ERP | Enterprise Resource Planning | Manages core business transactions | Orders, purchasing, inventory, master data |
| MES | Manufacturing Execution System | Monitors and manages shop-floor production | Actual production, downtime, yield, WIP |
| MRP | Material Requirements Planning | Calculates material requirements | Material demand, planned orders, shortages |
| WMS | Warehouse Management System | Manages warehouse activities | Stock balances, bin locations, receipts, shipments |
| CRM | Customer Relationship Management | Manages customer relationships | Customer forecasts, opportunities, promotions |
| Excel | Spreadsheet software | Organizes and analyzes data | Reports, manual forecasts, adjustments |

#### 1. ERP

ERP is generally the central business system that connects departments and manages core transactions.

Examples of ERP platforms include:

- SAP S/4HANA.
- Oracle Fusion Cloud ERP.
- Microsoft Dynamics 365.

For S&OP, ERP may provide:

- Product master.
- Customer orders.
- Purchase orders.
- Inventory balances.
- Production orders.
- Shipment records.

#### 2. MES

MES monitors manufacturing operations.

For example, in an electronic components factory:

MES may record:

- Actual output per machine.
- Production start and end times.
- Defect quantities.
- Equipment downtime.
- Production yield.
- WIP quantities.

This is particularly useful when actual shop-floor performance differs from the assumptions used in production planning.

#### 3. MRP

MRP calculates the materials required to support a production plan.

It commonly uses:

- Master production schedule or planned production requirements.
- BOM.
- Inventory availability.
- Scheduled receipts.
- Lead times.
- Lot-sizing rules.

For example, if the production plan requires 10,000 products and each product needs 20 grams of powder, MRP calculates the gross material requirement before accounting for available stock and scheduled receipts.

#### 4. WMS

WMS manages warehouse operations.

It provides information about:

- Stock quantities.
- Storage locations.
- Goods receipts.
- Picking.
- Transfers.
- Shipment confirmations.

ERP and WMS inventory figures may differ because of timing, integration delays, transaction errors, or differences in inventory status definitions.

#### 5. CRM

CRM primarily supports customer-related activities.

It may provide:

- Customer forecasts.
- Sales opportunities.
- Promotional information.
- Customer relationship information.
- Market expectations.

Not all CRM forecasts are firm orders. They may represent commercial expectations that still require validation.

#### 6. Excel and Manual Reports

Excel remains widely used in planning activities.

Examples:

- Monthly demand consolidation.
- Production capacity reports.
- Supplier delivery monitoring.
- Inventory analysis.
- S&OP presentation reports.

Excel is flexible, but it also introduces risks:

- Manual data entry errors.
- Incorrect formulas.
- Duplicate records.
- Outdated copies.
- Different versions of the same report.

#### 7. Supplier Reports and Customer Forecasts

External business partners also provide useful information.

Suppliers may provide:

- Expected delivery dates.
- Material availability.
- Capacity constraints.
- Lead-time updates.

Customers may provide:

- Rolling demand forecasts.
- Firm orders.
- Forecast revisions.
- Promotional schedules.

#### How data moves between systems

Here's a simplified example of a manufacturing company's data flow.

**Business and Operational Sources**

Customer orders · Suppliers · Warehouse · Factory · Sales

↓

**ERP:** Orders, inventory, purchasing

**MES:** Production, yield, downtime

**WMS:** Warehouse stock, movements

**CRM / Excel:** Forecasts, market inputs

↓

**Data Integration and Validation**

Extraction · Mapping · Cleaning · Reconciliation

↓

**Planning and S&OP**

Demand plan · Supply plan · Inventory plan · Management decisions

This is a simplified logical flow, not a mandatory system architecture. Some companies integrate ERP, MES, WMS, and planning platforms directly. Others use data warehouses, spreadsheets, or dedicated integration tools.

#### Why can data differ between systems?

Example:

ERP shows 10,000 units of inventory.

WMS shows 9,800 units.

MES shows 500 units of WIP.

Possible reasons:

1. Some warehouse movements have not yet synchronized with ERP.
2. Some units are under inspection.
3. ERP and WMS use different stock-status definitions.
4. The MES WIP quantity is not included in finished goods.
5. Transactions were recorded at different cut-off times.

The analyst must investigate the difference rather than simply choose whichever number looks correct.

### 4.12 Data Validation and Preparation

This is one of the most practical responsibilities of an S&OP analyst.

Before using data for planning, the analyst must determine whether it is fit for purpose.

#### A. Data Completeness

Check whether all required fields and records are present.

Example:

| Product | Forecast | Production Rate |
|---|---:|---:|
| A | 10,000 | 500 units/hr |
| B | 15,000 | Missing |
| C | 8,000 | 400 units/hr |

Product B has missing production-rate information.

You cannot accurately calculate its production hours without obtaining a valid rate.

#### B. Data Accuracy

Check whether the information correctly represents reality.

Example:

The inventory report says 50,000 units, but the physical count confirms 45,000 units.

There is a discrepancy of 5,000 units.

The analyst must investigate the cause.

#### C. Duplicate Records

Example:

| Order Number | Product | Quantity |
|---|---|---:|
| SO-001 | A | 5,000 |
| SO-002 | B | 3,000 |
| SO-001 | A | 5,000 |

If the third row is an accidental duplicate, the total demand is overstated by 5,000 units.

But be careful: two legitimate orders can have identical product codes and quantities. Always use transaction identifiers and business rules to determine whether a record is truly duplicated.

#### D. Missing Values

Missing values can affect calculations.

For example, a missing supplier lead time means the analyst cannot confidently determine the expected material arrival date.

Do not automatically replace missing values with zero.

Zero lead time and unknown lead time have completely different meanings.

#### E. Product Code Validation

Check whether product codes match the official product master.

Example:

| Sales Report Code | Product Master |
|---|---|
| MLCC-1001 | MLCC-1001 |
| MLCC-1002 | MLCC-1002 |
| MLCC-101O | No matching code |

The last code may contain the letter O instead of zero.

This can cause a product to disappear from consolidated planning reports.

#### F. Unit of Measurement Validation

Always verify whether quantities use the same unit.

Example:

| Source | Quantity | UOM |
|---|---:|---|
| ERP | 500 | kg |
| Supplier report | 500,000 | g |

These are equivalent:

\[
500,000g=500kg
\]

If the analyst incorrectly treats both numbers as kilograms, the resulting calculation will be dramatically overstated.

#### G. Date and Planning Period Validation

Check:

- Date format.
- Requested delivery date.
- Actual receipt date.
- Planning month.
- Fiscal calendar.
- Working days.
- Time zone, where relevant.

For example, 03/04/2026 could mean March 4 or April 3, depending on the date convention.

#### H. Inventory Reconciliation

Compare inventory balances from different sources.

Example:

| Source | Quantity |
|---|---:|
| ERP | 10,000 |
| WMS | 9,800 |
| Physical Count | 9,750 |

The differences must be investigated.

Do not assume that the physical count automatically replaces the system balance without checking the counting date, stock scope, and pending movements.

#### I. Historical Comparison

Compare the current report with previous reports.

Example:

| Month | Production |
|---|---:|
| August | 45,000 |
| September | 48,000 |
| October | 47,000 |
| November | 120,000 |

November shows a significant increase.

Possible reasons:

- Actual production increased.
- Reporting unit changed.
- Duplicate records exist.
- A different plant was included.
- A data-entry error occurred.

The correct response is to investigate the exception.

#### J. Outlier Identification

An outlier is a value that differs significantly from the expected pattern.

Example:

Normal daily production is around 2,000 units, but one day shows 25,000 units.

It may be a genuine exceptional event or a reporting error.

Outliers should be investigated, not automatically deleted.

#### Data preparation terminology

| Term | Meaning |
|---|---|
| Data Cleansing | Correcting or handling inaccurate, inconsistent, or invalid data |
| Data Validation | Checking whether data meets defined rules |
| Data Reconciliation | Comparing records from different sources and resolving differences |
| Data Standardization | Converting data into consistent formats and definitions |
| Data Integration | Combining information from different systems |
| Exception Reporting | Highlighting records that require investigation |

#### The planning data preparation workflow

1. **Data Extraction:** Obtain data from ERP, MES, WMS, CRM, Excel, and other sources.
2. **Data Consolidation:** Combine the required datasets into a common structure.
3. **Data Validation:** Check completeness, accuracy, formats, units, and duplicates.
4. **Data Reconciliation:** Investigate differences between departments and systems.
5. **Data Transformation:** Convert data into the required planning level, units, and periods.
6. **Data Analysis:** Identify trends, exceptions, shortages, and planning risks.
7. **Planning Utilization:** Use the validated dataset to support S&OP activities.

### 4.13 Planning Assumptions and Parameters

Now let's discuss something that is often confused with actual data.

A company does not always know exactly what will happen in the future.

For example:

- How long will a supplier take to deliver?
- How much production output can a machine achieve?
- What will the production yield be?
- How many working days will be available?

To plan, the company uses assumptions and parameters.

#### What is a Planning Assumption?

A Planning Assumption is an estimated or agreed condition used when developing a plan.

Example:

The company assumes that a supplier will deliver materials within 30 days.

This does not guarantee that delivery will happen in exactly 30 days.

#### What is a Planning Parameter?

A Planning Parameter is a defined value or rule used by a planning process or system to calculate or determine requirements.

Examples:

- Safety stock = 2,000 units.
- MOQ = 500 units.
- Production lot size = 1,000 units.
- Standard lead time = 30 days.

#### Important assumptions and parameters

| Parameter | Meaning | Example |
|---|---|---|
| Standard Lead Time | Expected time from order to receipt or completion | 30 days |
| Production Rate | Expected output per production hour | 500 units/hr |
| Capacity Assumption | Expected available production resources | 16 hours/day |
| Yield | Expected good output percentage | 95% |
| Scrap Rate | Expected production loss | 5% |
| MOQ | Minimum quantity a supplier accepts | 500 kg |
| Lot Size | Quantity manufactured or ordered per batch | 1,000 units |
| Safety Stock | Buffer stock against uncertainty | 2,000 units |
| Planning Calendar | Defined planning periods | Monthly |
| Working Days | Days available for normal operations | 22 days/month |
| Holidays | Non-working days | December 25 |

#### Actual Data vs. Assumptions vs. Parameters

| Information | Classification |
|---|---|
| Actual supplier delivery took 38 days | Historical/actual data |
| Expected supplier delivery is 30 days | Planning assumption or standard parameter |
| Actual machine output was 450 units/hr | Historical operational data |
| Planned production rate is 500 units/hr | Planning parameter |
| Actual yield last month was 94% | Historical operational data |
| Expected yield is 95% | Planning assumption |

Why is this distinction important?

Suppose the company's standard supplier lead time is 30 days.

But the last five deliveries took:

| Delivery | Actual lead time |
|---|---:|
| 1 | 35 days |
| 2 | 38 days |
| 3 | 40 days |
| 4 | 36 days |
| 5 | 41 days |

Average actual lead time:

\[
\frac{35+38+40+36+41}{5}=38\text{ days}
\]

The standard parameter is 30 days, but the observed average is 38 days.

This difference should be investigated.

If procurement continues using the outdated 30-day parameter, the company may plan material arrivals too early.

#### Why document assumptions?

Every important assumption should ideally have:

- Value.
- Unit of measurement.
- Source.
- Owner.
- Effective date.
- Last review date.
- Reason for the assumption.
- Approval or validation status, where applicable.

Planning assumptions should be reviewed when actual performance changes, suppliers change, machines are modified, or business conditions shift.

---

## 5. Practical Examples and Applications

Let's now apply the concepts to a fictional electronic components manufacturer.

This scenario will combine the five classifications, the data sources, data validation, and planning interpretation.

### 5.1 Business Scenario: Electronic Components Manufacturer

*All values below are illustrative assumptions for learning purposes, not actual company data or universal industry standards.*

The company manufactures three electronic component products.

| Product code | Product family | UOM |
|---|---|---|
| EC-1001 | Standard Capacitors | pcs |
| EC-1002 | High-Capacity Capacitors | pcs |
| EC-1003 | Industrial Capacitors | pcs |

The S&OP team is preparing the December 2026 plan.

### 5.2 Sample Dataset A: Demand and Historical Sales

| Product | October sales | November sales | December forecast |
|---|---:|---:|---:|
| EC-1001 | 8,000 | 9,000 | 10,000 |
| EC-1002 | 5,000 | 5,500 | 6,000 |
| EC-1003 | 3,000 | 3,500 | 4,000 |
| **Total** | **16,000** | **18,000** | **20,000** |

Initial observation:

- Total sales increased from 16,000 to 18,000 units.
- December forecast is 20,000 units.
- All three products show an increasing demand pattern.

But before accepting the forecast, the analyst should investigate:

- Are historical sales representative of actual demand?
- Are there any one-time customer orders?
- Are there upcoming promotions?
- Are there unfulfilled orders?
- Are all products classified correctly?

### 5.3 Sample Dataset B: Customer Orders

| Order | Product | Quantity | Delivery month |
|---|---|---:|---|
| SO-001 | EC-1001 | 3,000 | December |
| SO-002 | EC-1002 | 2,000 | December |
| SO-003 | EC-1003 | 1,500 | December |

Total customer orders:

\[
3,000+2,000+1,500=6,500
\]

The December forecast is 20,000 units, while customer orders are 6,500 units.

If the forecast represents total demand, and those orders are already included in the forecast, we should not simply add them again.

For this illustrative scenario, assume the forecast represents total expected demand.

Then:

| Product | Total forecast | Existing orders | Remaining forecast |
|---|---:|---:|---:|
| EC-1001 | 10,000 | 3,000 | 7,000 |
| EC-1002 | 6,000 | 2,000 | 4,000 |
| EC-1003 | 4,000 | 1,500 | 2,500 |
| **Total** | **20,000** | **6,500** | **13,500** |

This means 6,500 units are covered by existing orders, while another 13,500 units represent forecast demand not yet covered by those orders.

Again, this treatment depends on the company's forecast-consumption logic.

### 5.4 Sample Dataset C: Inventory

| Product | On-hand FG | Allocated | Quality Hold |
|---|---:|---:|---:|
| EC-1001 | 4,000 | 1,000 | 200 |
| EC-1002 | 2,500 | 500 | 0 |
| EC-1003 | 1,500 | 500 | 100 |

For this example:

\[
Available=OnHand-Allocated-QualityHold
\]

| Product | On-hand | Allocated | Quality hold | Available |
|---|---:|---:|---:|---:|
| EC-1001 | 4,000 | 1,000 | 200 | 2,800 |
| EC-1002 | 2,500 | 500 | 0 | 2,000 |
| EC-1003 | 1,500 | 500 | 100 | 900 |
| **Total** | **8,000** | **2,000** | **300** | **5,700** |

The company has 8,000 physical units on hand, but only 5,700 units are available under our assumed inventory definition.

### 5.5 Sample Dataset D: Raw Material Inventory and BOM

Assume each product requires the following materials:

| Product | Ceramic powder | Electrode material |
|---|---:|---:|
| EC-1001 | 0.020 kg | 0.005 kg |
| EC-1002 | 0.030 kg | 0.008 kg |
| EC-1003 | 0.040 kg | 0.010 kg |

Raw material inventory:

| Material | On-hand | UOM |
|---|---:|---|
| Ceramic powder | 800 | kg |
| Electrode material | 250 | kg |

Assume December production requirements are 10,000, 6,000, and 4,000 units respectively, before adjusting for available finished goods.

Gross ceramic powder requirement:

\[
(10,000\times0.020)+(6,000\times0.030)+(4,000\times0.040)
\]

\[
=200+180+160
\]

\[
=540\text{ kg}
\]

Gross electrode material requirement:

\[
(10,000\times0.005)+(6,000\times0.008)+(4,000\times0.010)
\]

\[
=50+48+40
\]

\[
=138\text{ kg}
\]

These are gross requirements before considering yield losses and other planning adjustments.

### 5.6 Sample Dataset E: Supplier and Procurement Information

| Material | On-hand | Open PO | Supplier lead time |
|---|---:|---:|---:|
| Ceramic powder | 800 kg | 300 kg | 30 days |
| Electrode material | 250 kg | 100 kg | 45 days |

Assume all open purchase orders are confirmed for receipt within the planning horizon and are not already included in the on-hand balance.

Then projected material supply before other consumption is:

- Ceramic powder = 800 + 300 = 1,100 kg.
- Electrode material = 250 + 100 = 350 kg.

Compare these against gross requirements:

| Material | Projected supply | Gross requirement | Preliminary surplus |
|---|---:|---:|---:|
| Ceramic powder | 1,100 kg | 540 kg | 560 kg |
| Electrode material | 350 kg | 138 kg | 212 kg |

At first glance, material supply appears sufficient.

But the analyst must still check:

- Are the purchase orders confirmed?
- Will they arrive before production needs them?
- Are the materials quality-approved?
- Are there other products consuming the same materials?
- Is safety stock required?
- Is there any material already allocated to another production plan?

### 5.7 Sample Dataset F: Production Capacity

| Product | Production rate | Available hours |
|---|---:|---:|
| EC-1001 | 500 pcs/hr | 100 |
| EC-1002 | 400 pcs/hr | 100 |
| EC-1003 | 250 pcs/hr | 100 |

Theoretical capacity:

| Product | Production rate | Available hours | Capacity |
|---|---:|---:|---:|
| EC-1001 | 500 | 100 | 50,000 |
| EC-1002 | 400 | 100 | 40,000 |
| EC-1003 | 250 | 100 | 25,000 |

All three products have theoretical capacity above their December forecast quantities.

However, this does not yet prove that the plan is feasible.

We still need to check:

- Actual production yield.
- Changeover requirements.
- Shared equipment.
- Maintenance.
- Labor availability.
- Material availability by required date.

### 5.8 Sample Dataset G: Yield and Scrap Assumptions

| Product | Expected yield | Expected scrap |
|---|---:|---:|
| EC-1001 | 98% | 2% |
| EC-1002 | 96% | 4% |
| EC-1003 | 95% | 5% |

If EC-1001 requires 10,000 good units:

\[
\text{Input Required}=\frac{10,000}{0.98}
\]

\[
=10,204.08
\]

Approximately 10,205 input units are required.

For EC-1002:

\[
\frac{6,000}{0.96}=6,250
\]

For EC-1003:

\[
\frac{4,000}{0.95}=4,210.53
\]

Approximately 4,211 input units are required.

This shows why production capacity calculations and material requirements must consider expected yield.

### 5.9 Identifying Data Errors in the Scenario

Now imagine that the analyst discovers the following problems.

| Data problem | What happened? | Potential consequence |
|---|---|---|
| Duplicate Customer Order | SO-001 was loaded twice | Demand overstatement |
| Incorrect Product Classification | EC-1002 classified as EC-1001 | Wrong product-family demand |
| Inconsistent UOM | Material recorded in grams instead of kg | Incorrect material requirements |
| Outdated Lead Time | Supplier lead time is 30 days, but actual performance is 45 days | Late procurement |
| Missing Production Capacity | EC-1003 capacity data is missing | Incomplete supply feasibility analysis |
| Incorrect Inventory Availability | Quality-hold stock included as available | Overestimated usable inventory |

Let's examine the consequences.

**Error 1: Duplicate order**

If SO-001 is duplicated, the company may believe customer demand is 3,000 units higher than reality.

This can create unnecessary production and procurement requirements.

**Error 2: Incorrect product classification**

If EC-1002 is mistakenly classified under EC-1001, demand analysis by product family becomes unreliable.

Management may increase capacity for the wrong product family.

**Error 3: Inconsistent units**

If the company interprets 500,000 grams as 500,000 kilograms, material availability becomes significantly overstated.

The production plan may later experience a material shortage.

**Error 4: Outdated supplier lead time**

Procurement plans using 30 days instead of 45 days may result in materials arriving too late.

**Error 5: Missing capacity**

The company cannot confidently determine whether EC-1003 production requirements can be met.

**Error 6: Incorrect inventory availability**

The company may promise customers products that are still under quality inspection.

This can cause delivery delays and customer-service problems.

#### What should the analyst do?

Not simply correct the numbers and move on.

The analyst should:

1. Identify the affected dataset.
2. Determine the source of the error.
3. Confirm the correct information with the responsible department.
4. Correct the data using an approved process.
5. Document the correction.
6. Evaluate whether previous planning outputs were affected.
7. Prevent the same issue from recurring.

This is the difference between simply editing a spreadsheet and performing professional data management.

---

## 6. Formulas and Calculations

Although Topic 2.7 is primarily about data management, several calculations are essential for understanding whether planning data is usable.

### 6.1 Basic planning data formulas

| Calculation | Formula | Purpose |
|---|---|---|
| Total Demand | Forecast or applicable demand components | Determine expected requirements |
| Open Backlog | Ordered − Shipped | Identify outstanding orders |
| Available Inventory | On-hand − unavailable quantities | Determine usable stock |
| Theoretical Capacity | Rate × Available Hours | Determine theoretical production capability |
| Yield | Good Output ÷ Total Input × 100 | Measure production effectiveness |
| Scrap Rate | Scrap ÷ Total Input × 100 | Measure production losses |
| Required Input | Required Good Output ÷ Yield | Account for production losses |
| Material Requirement | Production Quantity × BOM Quantity | Calculate gross material requirements |
| Average Lead Time | Total Actual Lead Time ÷ Number of Deliveries | Evaluate supplier performance |

### 6.2 Understanding data variance

Another useful calculation is the difference between actual and planned values.

\[
\text{Variance}=\text{Actual}-\text{Plan}
\]

Example:

| Metric | Planned | Actual |
|---|---:|---:|
| Production | 50,000 | 46,000 |

\[
46,000-50,000=-4,000
\]

Production is 4,000 units below plan.

Percentage variance:

\[
\text{Variance \%}=
\frac{\text{Actual}-\text{Plan}}{\text{Plan}}\times100
\]

\[
=\frac{46,000-50,000}{50,000}\times100
\]

\[
=-8\%
\]

Interpretation: Actual production was 8% below plan.

An S&OP analyst should investigate whether this was caused by incorrect planning assumptions, material shortages, capacity constraints, downtime, or data-recording errors.

### 6.3 Data quality measurements

Data quality can also be measured.

For example:

**Completeness Rate**

\[
\text{Completeness}=
\frac{\text{Records with Required Values}}
{\text{Total Required Records}}\times100
\]

Suppose 95 out of 100 required product records have complete information.

\[
\frac{95}{100}\times100=95\%
\]

The dataset has a 95% completeness rate.

**Duplicate Rate**

\[
\text{Duplicate Rate}=
\frac{\text{Duplicate Records}}
{\text{Total Records}}\times100
\]

If 5 out of 200 records are duplicates:

\[
\frac{5}{200}\times100=2.5\%
\]

These are useful indicators, but a dataset with 99% completeness is not automatically reliable. The remaining 1% might contain critical information, such as the production capacity of the company's most important product.

---

## 7. Business Perspective and Decision-Making

Now let's move from understanding the data to thinking like an S&OP analyst.

Your responsibility is not simply to collect numbers from different departments.

Your responsibility is to determine whether the information is sufficiently reliable to support business decisions.

### 7.1 How data quality affects business functions

| Business area | Poor data quality | Potential business impact |
|---|---|---|
| Demand Planning | Incorrect historical demand | Unreliable forecast |
| Supply Planning | Incorrect production capacity | Unrealistic supply plan |
| Procurement | Outdated supplier lead time | Late material arrivals |
| Inventory Management | Incorrect stock availability | Stockouts or excess inventory |
| Production Planning | Incorrect BOM or production rate | Material and capacity miscalculations |
| Finance | Incorrect quantities or costs | Inaccurate financial projections |
| Customer Service | Incorrect order status | Missed delivery commitments |

### 7.2 Five important data quality dimensions

Professional organizations often evaluate data using several quality dimensions.

| Dimension | Question | Example |
|---|---|---|
| Accuracy | Is the value correct? | Is the inventory balance correct? |
| Completeness | Are all required fields present? | Does every product have a valid production rate? |
| Consistency | Do different systems use the same definitions? | Are quantities expressed in the same UOM? |
| Timeliness | Is the information updated when needed? | Is the supplier lead time current? |
| Validity | Does the information follow established rules? | Is the delivery date in an acceptable format? |

Another important dimension is **Uniqueness**, which checks whether the same business record is unnecessarily duplicated.

### 7.3 How does an S&OP analyst determine whether data is reliable?

Here is a practical framework.

1. **Source verification:** Where did the number originate? ERP, MES, WMS, supplier report, or manual Excel?
2. **Definition verification:** What exactly does the number represent? Sales, demand, shipment, or production?
3. **Quality verification:** Are there missing, duplicated, inaccurate, or inconsistent values?
4. **Reconciliation:** Does the information agree with relevant records from other systems or departments?
5. **Assumption verification:** Are the planning parameters reasonable and updated?
6. **Business impact assessment:** Could the remaining data issues materially affect the planning decision?

### 7.4 Data ownership and accountability

An important professional concept is **Data Ownership**.

Not every department should independently modify every dataset.

Different departments normally have responsibility for maintaining different information.

| Data | Typical responsible function |
|---|---|
| Customer orders | Sales / Customer Service |
| Product master | Master Data Management / Product Management |
| Supplier information | Procurement |
| Inventory records | Warehouse / Inventory Control |
| Production output | Manufacturing / Production |
| Machine capacity | Manufacturing / Industrial Engineering |
| Demand forecast | Demand Planning |
| Supply plan | Supply Planning |

Actual ownership structures vary by organization.

For example, if the supplier lead time is incorrect, the S&OP analyst should identify the issue and coordinate with Procurement to validate it.

The analyst should not arbitrarily change the value without confirming its source and ownership.

### 7.5 Why should important numbers be traceable?

This is called **Data Traceability** or **Data Lineage**.

It means being able to identify where a number came from and how it was transformed.

Suppose the management report shows:

December demand = 20,000 units.

You should be able to trace that number back to:

- The source forecast.
- The relevant product codes.
- Customer forecast inputs.
- Existing customer orders.
- Any adjustments made.
- The planning period.
- The date the information was extracted.

If management asks:

"Why is December demand 20,000 units?"

You should be able to explain the calculation and provide the supporting records.

That is professional analytical accountability.

### 7.6 When is data good enough for planning?

Not every data issue needs to stop the entire planning process.

For example:

- A missing production rate for a product with no planned demand may have limited immediate impact.
- A missing production rate for the company's highest-volume product is a critical issue.
- A small discrepancy in a noncritical historical record may be manageable.
- An incorrect inventory balance affecting a major customer commitment requires immediate investigation.

This introduces the concept of **Materiality**.

Materiality means evaluating whether an error or uncertainty is significant enough to affect a business decision.

A good S&OP analyst does not merely ask:

"Is the dataset perfect?"

The better question is:

"Are the remaining data limitations understood, documented, and acceptable for the decision we need to make?"

### 7.7 How planning data supports S&OP decisions

Consider this simplified business situation:

| Planning information | Result |
|---|---:|
| December demand | 20,000 units |
| Available finished goods | 5,700 units |
| Additional production required | 14,300 units |
| Theoretical production capacity | 115,000 units |
| Raw material supply | Apparently sufficient |

At first glance, the company appears capable of meeting demand.

But before recommending that the company proceed, the analyst must verify:

1. Are the 5,700 finished goods actually available for customer requirements?
2. Are all raw materials available at the correct time?
3. Does the capacity calculation account for yield and downtime?
4. Are the production resources shared with other products?
5. Are the supplier delivery dates reliable?
6. Are there other customer orders outside this planning dataset?

Only after these checks can the analyst present a credible supply assessment.

**The key principle:** Planning data converts disconnected departmental information into a common basis for business decisions.

---

## 8. Key Takeaways

Let's consolidate the most important lessons from Topic 2.7.

### 8.1 The five classifications

| Classification | Remember this |
|---|---|
| Master Data | Describes the business entities |
| Transactional Data | Records business activities |
| Historical Data | Shows past performance |
| Planning Data | Describes future expectations and plans |
| Reference Data | Provides standardized values and definitions |

### 8.2 The most important distinctions

1. Historical sales are not always equal to actual demand.
2. Customer orders are not the same as forecasts.
3. Physical inventory is not always available inventory.
4. Open purchase orders are not the same as received inventory.
5. Theoretical capacity is not the same as achievable production output.
6. Actual recorded data is different from planning assumptions.
7. A number is not automatically reliable just because it came from an ERP system.
8. Different systems may contain different versions or interpretations of the same information.

### 8.3 The planning data management process

Remember this sequence:

1. Gather data.
2. Organize data.
3. Validate data.
4. Reconcile differences.
5. Prepare planning datasets.
6. Analyze information.
7. Support business decisions.

### 8.4 Three professional principles to remember

**Principle 1: Understand the definition before using the number.**

A quantity of 10,000 can represent orders, sales, shipments, production, or inventory. These are not interchangeable.

**Principle 2: Verify the source before trusting the information.**

Know where the data came from, when it was updated, and who owns it.

**Principle 3: Understand the business impact of data errors.**

A small data error can become a large planning problem when it affects production, procurement, inventory, or customer commitments.

---

## 9. Knowledge Check and Exercises

**Assessment: Topic 2.7**

Now let's test your understanding.

I don't want you to memorize definitions only. I want you to practice thinking like an S&OP analyst.

We'll use three progressive levels.

- Level 1: Understanding
- Level 2: Technical Application
- Level 3: Professional Analysis

**Instructions:** Answer using your own understanding. Taglish is perfectly fine. Hindi kailangan textbook definition, but explain your reasoning.

I will evaluate your answers, identify what you understood correctly, correct misconceptions, and explain the reasoning behind each answer.

### Part A. Level 1: Understanding

**1. Data Classification**

Classify each item into one of the five categories: Master Data, Transactional Data, Historical Data, Planning Data, or Reference Data.

| Information | Your classification |
|---|---|
| A. Product code MLCC-1001 | ? |
| B. Customer ordered 5,000 units today | ? |
| C. November actual sales were 20,000 units | ? |
| D. December demand forecast is 25,000 units | ? |
| E. Standard unit of measurement is kilograms | ? |
| F. Supplier information and address | ? |
| G. Actual production output last month | ? |
| H. Planned production for next month | ? |

**2. Conceptual Understanding**

Explain the difference between:

- Master Data and Transactional Data.
- Historical Data and Planning Data.
- Planning Data and Reference Data.

**3. Raw Data to Business Insight**

A company records the following monthly sales:

| Month | Sales |
|---|---:|
| August | 5,000 |
| September | 6,000 |
| October | 7,000 |
| November | 8,000 |

Explain the difference between:

a. Raw Data

b. Processed Data

c. Information

d. Business Insight

### Part B. Level 2: Technical Application

**4. Inventory Availability**

A warehouse reports the following:

| Inventory status | Quantity |
|---|---:|
| On-hand inventory | 15,000 |
| Allocated inventory | 3,000 |
| Reserved inventory | 2,000 |
| Quality-hold inventory | 1,000 |
| Blocked inventory | 500 |

Assume all categories are mutually exclusive.

Questions:

a. How much is the available inventory?

b. Why can't the company use the entire 15,000 units to fulfill new customer orders?

c. What could happen if the demand planner uses on-hand inventory instead of available inventory?

**5. Data Quality Investigation**

You receive this report:

| Product | Demand | Production rate | UOM |
|---|---:|---:|---|
| A | 10,000 | 500 | pcs/hr |
| B | 15,000 | Missing | pcs/hr |
| C | 8,000 | 400 | pcs/hr |
| A | 10,000 | 500 | pcs/hr |

Identify at least three potential data quality issues or investigation points.

Explain how each could affect the planning process.

**6. Actual Data vs. Planning Assumptions**

The company's standard supplier lead time is 30 days.

However, the last four deliveries took:

- 35 days
- 40 days
- 38 days
- 47 days

Questions:

a. Calculate the average actual lead time.

b. Is the 30-day standard still representative of recent supplier performance?

c. What should the S&OP analyst do?

### Part C. Level 3: Professional Analysis

**7. Demand Planning Scenario**

The company has:

| Metric | Quantity |
|---|---:|
| December forecast | 20,000 |
| Existing customer orders | 8,000 |
| Historical November sales | 18,000 |

The demand forecast already includes the existing customer orders.

Questions:

a. What is the total expected December demand?

b. Should you add the 8,000 customer orders to the 20,000 forecast? Why?

c. What additional information would you investigate before accepting the forecast?

**8. Supply Planning Scenario**

The production department reports:

- Required production: 50,000 units.
- Production rate: 500 units/hour.
- Available production hours: 80 hours.
- Expected yield: 95%.

Questions:

a. What is the theoretical production capacity?

b. How many input units are required to achieve 50,000 good units at 95% yield?

c. Is the available capacity sufficient based on the information provided?

d. What additional factors should you investigate before confirming the production plan?

**9. S&OP Analyst Case Study**

You are preparing the monthly S&OP report.

You discover the following:

- ERP reports 10,000 units of inventory.
- WMS reports 9,500 units.
- 1,000 units are under quality inspection.
- Procurement reports that a supplier's lead time increased from 30 to 45 days.
- Production reports that one machine is currently unavailable.
- Sales submits a forecast that is 30% higher than last month.

Your manager asks:

"Are we ready to finalize next month's supply plan?"

Explain:

1. What information needs validation?
2. Which departments should you coordinate with?
3. What potential planning risks do you see?
4. What would you recommend before finalizing the supply plan?

### Your assessment progress

You can track your progress through the nine questions:

- Part A: Questions 1–3
- Part B: Questions 4–6
- Part C: Questions 7–9

You can answer all nine questions at once or one part at a time. I recommend starting with Part A so we can establish your understanding before moving into calculations and business analysis.

### What happens after your assessment?

I'll evaluate your responses using these criteria:

| Assessment area | What I'll evaluate |
|---|---|
| Conceptual accuracy | Do you understand the concepts? |
| Technical accuracy | Are your classifications and calculations correct? |
| Analytical thinking | Can you identify potential problems? |
| Business application | Can you translate findings into decisions? |

We will also identify any knowledge gaps that need reinforcement.

**My target for you:** By the end of this topic, you should be able to receive different reports from Sales, Production, Procurement, and Warehouse, understand what each dataset represents, identify unreliable information, and prepare a reasonably validated dataset for S&OP planning.

Take your time. Let's start with Question 1.
