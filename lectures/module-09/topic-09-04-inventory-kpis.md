---
module: 9
topic: "9.4"
title: "Inventory KPIs"
language: "Taglish"
status: "complete"
---

# Module 9 – Topic 9.4: Inventory KPIs

**Main Learning Objective:** Understand how organizations measure inventory performance, determine whether inventory is sufficient or excessive, and use inventory data to make better operational and financial decisions.

Sa topic na ito, pagsasamahin natin ang demand planning at supply planning concepts na pinag-aralan natin sa Topics 9.1, 9.2, and 9.3.

May isang importanteng principle na gusto kong maintindihan mo:

**Having more inventory does not automatically mean having better inventory performance.**

Puwedeng maraming stocks ang company pero hindi available ang tamang materials. Puwede ring mataas ang inventory turnover pero madalas namang magkaroon ng stockouts.

Ang objective ng S&OP ay hindi basta paramihin o bawasan ang inventory. Ang objective ay magkaroon ng **the right inventory, in the right quantity, at the right time, to support the business demand.**

---

# 1. Topic Overview

## 1.1 What are Inventory KPIs?

Ang Inventory KPIs (Key Performance Indicators) ay mga measurements na ginagamit ng organizations para malaman kung gaano ka-effective ang kanilang inventory management.

Simple question na sinasagot ng Inventory KPIs:

- Enough ba ang inventory para matugunan ang customer demand?
- May sobra bang inventory?
- May materials bang malapit nang maubos?
- Gaano kabilis umiikot ang inventory?
- Gaano karaming capital ang nakatali sa stocks?
- Accurate ba ang inventory records kumpara sa actual physical stocks?
- May inventory ba na matagal nang hindi nagagamit?

For example:

Imagine na may manufacturing company na gumagawa ng electronic components.

Mayroon silang:
- Raw materials: Barium Titanate powder, binders, solvents, and other materials.
- Work-in-Process (WIP): Materials na nasa production process.
- Finished Goods (FG): Completed products na ready for shipment.

Mayroon silang ₱20 million worth of inventory.

At first glance, mukhang okay dahil maraming stocks.

Pero kapag in-analyze:

- ₱8 million worth of raw materials are not being used.
- ₱3 million worth of finished goods have no confirmed demand.
- One critical raw material is nearly depleted.
- Inventory records show 5,000 kg, pero actual physical count is only 4,300 kg.

Makikita natin na kahit mataas ang total inventory, hindi ibig sabihin na healthy ang inventory position.

Ito ang dahilan kung bakit kailangan ng Inventory KPIs.

## 1.2 Why are Inventory KPIs important in S&OP?

Inventory is the connection between demand and supply.

### The role of inventory in S&OP

**Demand Planning**  
How much will customers need?

↓

**Inventory Position**  
How much stock do we have and need?

↓

**Supply Planning**  
How much should we procure and produce?

↓

**Customer Service and Financial Performance**  
Can we fulfill demand without excessive inventory investment?

Inventory serves as a buffer between supply and demand.

Kapag mas mataas ang demand kaysa available supply, puwedeng gamitin ang existing inventory para matugunan ang demand.

Pero kapag sobra naman ang inventory, maaaring magkaroon ng:
- Higher storage costs.
- Higher insurance and handling expenses.
- Increased risk of expiration or obsolescence.
- Higher working capital requirements.
- Reduced cash available for other business activities.

Therefore, inventory management requires balancing two competing objectives:

1. **Inventory Availability:** Having sufficient stocks to support demand.
2. **Inventory Efficiency:** Maintaining inventory without unnecessarily tying up company resources.

## 1.3 Connection to previous topics

| Previous topic | Connection to Inventory KPIs |
|---|---|
| 9.1 Demand Planning KPIs | Forecast quality helps determine how much inventory may be needed. |
| 9.2 Supply Planning KPIs | Production and supply capabilities determine whether inventory can be replenished. |
| 9.3 Supply Planning KPIs | Supply performance and constraints affect inventory availability and replenishment. |
| 9.4 Inventory KPIs | Measures whether inventory is sufficient, accurate, efficient, and financially healthy. |
| 9.5 Financial KPIs | Evaluates the financial consequences of inventory decisions. |

The important relationship:

**Demand determines what we need. Supply determines what we can provide. Inventory helps bridge the difference.**

---

# 2. Layman's Explanation

Before discussing formulas, let's understand inventory performance through a simple business situation.

## 2.1 Imagine that you own a small manufacturing company

Your company manufactures electronic components.

Every month, customers purchase approximately 10,000 units.

You currently have:

- 15,000 units of finished goods.
- 5,000 units of raw materials available.
- 2,000 units currently being processed.

At first glance, you might think your business is well-prepared because you have substantial inventory.

But let's examine three situations.

**Situation A: Too little inventory**

Customer demand is 10,000 units, but you only have 3,000 finished goods.

Your production line cannot replenish the remaining 7,000 units immediately.

Result:
- Potential stockouts.
- Delayed shipments.
- Lost sales.
- Customer dissatisfaction.

**Situation B: Too much inventory**

Customer demand is only 5,000 units, but you have 30,000 finished goods.

Result:
- Excess inventory.
- More warehouse space required.
- Money tied up in unsold products.
- Higher risk that products become obsolete.

**Situation C: Balanced inventory**

Customer demand is 10,000 units, and you maintain sufficient inventory based on expected demand, replenishment lead time, and appropriate safety stock.

Result:
- Better product availability.
- Lower risk of stockouts.
- More controlled inventory investment.

This is the objective of effective inventory management.

## 2.2 Two important concepts: Availability vs. Efficiency

| Concept | Simple meaning | Main question |
|---|---|---|
| Inventory Availability | Do we have enough stocks when needed? | Can we fulfill customer demand? |
| Inventory Efficiency | Are we maintaining inventory at a reasonable level? | Are we holding too much inventory? |

These two concepts are related, but they are not identical.

For example:

A company could maintain 100 days of inventory.

That may provide excellent availability, but it could also mean the company is holding excessive stocks.

Another company may maintain only 5 days of inventory.

That may indicate efficient inventory utilization, but it could also create significant stockout risks if replenishment takes 30 days.

**Important:** Low inventory is not automatically good, and high inventory is not automatically bad.

The correct inventory level depends on demand variability, supply reliability, lead time, product characteristics, and customer service requirements.

---

# 3. Technical Explanation

Now let's introduce the professional concepts.

## 3.1 Inventory Classification

Before calculating Inventory KPIs, we must understand the three major inventory categories in manufacturing.

### 1. Raw Materials (RM)

Materials purchased from suppliers but not yet consumed in production.

Examples:
- Barium Titanate powder
- Binder
- Plasticizer
- Solvents

### 2. Work-in-Process (WIP)

Materials that have entered production but have not yet become completed finished goods.

Examples:
- Mixed slurry
- Cast sheets
- Stacked ceramic sheets
- Components undergoing firing

### 3. Finished Goods (FG)

Completed products that are ready for shipment or sale.

Examples:
- Completed MLCC products
- Inspected and approved electronic components
- Packed products ready for shipment

Bakit importanteng magkakahiwalay ang RM, WIP, at FG?

Because each category has a different operational purpose.

| Inventory type | Primary purpose | Typical risk |
|---|---|---|
| RM | Support future production | Supplier delay, material shortage, expiration |
| WIP | Support production flow | Production bottlenecks, process delays |
| FG | Fulfill customer orders | Unsold stocks, demand changes, obsolescence |

For example, puwedeng mataas ang total inventory ng company dahil maraming WIP, pero mababa naman ang finished goods available for shipment.

Therefore, total inventory alone does not tell us whether customer demand can be fulfilled.

## 3.2 Financial Inventory vs. Physical Inventory

Ito ang isa sa pinakamahalagang distinctions sa inventory management.

**Physical inventory** refers to the actual quantity of materials or products available.

Examples:
- 5,000 kg of raw materials.
- 20,000 units of finished goods.
- 3,000 trays of WIP.

**Financial inventory** refers to the monetary value of those materials or products.

Examples:
- ₱2,000,000 worth of raw materials.
- ₱5,000,000 worth of WIP.
- ₱8,000,000 worth of finished goods.

Consider this example:

| Material | Physical quantity | Unit cost | Inventory value |
|---|---:|---:|---:|
| Material A | 1,000 kg | ₱100/kg | ₱100,000 |
| Material B | 500 kg | ₱500/kg | ₱250,000 |
| Material C | 2,000 kg | ₱20/kg | ₱40,000 |
| **Total** | **3,500 kg** | | **₱390,000** |

Notice:

- Material C has the highest physical quantity.
- Material B has the highest financial inventory value.

This means physical quantity and financial value provide different perspectives.

In S&OP, both are necessary.

- Operations usually focuses on quantities, availability, and material requirements.
- Finance focuses on inventory valuation, working capital, and carrying costs.
- S&OP connects both perspectives to make balanced decisions.

## 3.3 Inventory Valuation Methods

Kapag financial inventory ang pinag-uusapan, kailangan ding malaman kung paano binibigyan ng monetary value ang inventory.

Common inventory valuation methods include:

| Method | Explanation |
|---|---|
| FIFO (First-In, First-Out) | Assumes the oldest inventory costs are assigned first to goods issued or sold. |
| Weighted Average Cost | Uses the average cost of available inventory. |
| Specific Identification | Tracks the actual cost of each individually identifiable inventory item. |

Example:

A company purchases the same raw material twice:

| Purchase | Quantity | Unit cost | Total |
|---|---:|---:|---:|
| January | 100 kg | ₱100 | ₱10,000 |
| February | 100 kg | ₱120 | ₱12,000 |
| **Total** | **200 kg** | | **₱22,000** |

Weighted average cost:

\[
\frac{22,000}{200}=\text{₱110/kg}
\]

If the company consumes 50 kg, its material consumption value using weighted average cost is:

\[
50\times110=\text{₱5,500}
\]

Why does this matter?

Because inventory turnover and other financial KPIs use monetary values. Different valuation methods can affect the reported inventory value and cost of goods sold (COGS).

The company's accounting policy determines the applicable valuation method. Hindi basta puwedeng pumili ng method depende lang sa gustong KPI result.

---

# 4. Detailed Discussion: Key Inventory KPIs

We will cover nine major Inventory KPIs.

## 4.1 Inventory Turnover

**Definition:** Inventory Turnover measures how many times a company sells or consumes its average inventory during a specific period.

Simple explanation:

Gaano kabilis nauubos at napapalitan ang inventory ng company?

For example:

If a company has an inventory turnover of 6 times annually, ibig sabihin, its inventory investment turns over approximately six times within a year.

**Formula:**

\[
\text{Inventory Turnover}=
\frac{\text{COGS}}{\text{Average Inventory}}
\]

Where:

- COGS = Cost of Goods Sold, in currency.
- Average Inventory = Average inventory value, in currency.
- Result = Number of turns per year or reporting period.

### Step-by-step example

Assume:

- Annual COGS = ₱36,000,000
- Beginning Inventory = ₱5,000,000
- Ending Inventory = ₱7,000,000

First, calculate Average Inventory:

\[
\text{Average Inventory}=
\frac{5M+7M}{2}
\]

\[
=\text{₱6,000,000}
\]

Next, calculate Inventory Turnover:

\[
=\frac{36,000,000}{6,000,000}
\]

**Result: 6 times per year**

Interpretation:

The company turns over its average inventory approximately six times annually.

### Why use COGS instead of Sales?

This is an important technical distinction.

Suppose:

- Annual Sales = ₱50 million
- Annual COGS = ₱36 million
- Average Inventory = ₱6 million

Using COGS:

\[
\frac{36M}{6M}=6.0
\]

Using Sales:

\[
\frac{50M}{6M}=8.33
\]

Which one is more appropriate?

**COGS is generally preferred for financial inventory turnover.**

Why?

Because inventory is recorded at cost, not at selling price.

Imagine that you purchased a product for ₱100 and sold it for ₱150.

Your inventory investment was ₱100, not ₱150.

Comparing COGS with inventory value provides a more consistent cost-based measurement.

Using sales may overstate turnover because it includes the profit margin.

**Important distinction:** Some companies use units sold divided by average inventory units, particularly for operational inventory analysis. This is a valid alternative, but it measures unit-based turnover rather than financial inventory turnover.

### How do we interpret Inventory Turnover?

| Turnover | Possible interpretation |
|---|---|
| High | Inventory is moving quickly. May indicate efficient utilization. |
| Low | Inventory is moving slowly. May indicate excess or weak demand. |
| Extremely high | May indicate insufficient inventory and potential stockout risk. |

Hindi ibig sabihin na dapat palaging pinakamataas ang turnover.

For example, a company that maintains very little safety stock may achieve high turnover but experience frequent shortages.

## 4.2 Days of Inventory on Hand (DOH) / Days of Supply (DOS)

**Definition:** Measures how many days the current inventory can support expected consumption or sales, assuming no additional replenishment.

Simple explanation:

Kung wala nang darating na bagong stocks, ilang araw bago maubos ang available inventory?

**Formula using inventory turnover:**

\[
DOH=\frac{\text{Number of Days}}{\text{Inventory Turnover}}
\]

For annual calculations:

\[
DOH=\frac{365}{\text{Annual Inventory Turnover}}
\]

Using our previous result:

- Inventory Turnover = 6 times/year.

\[
DOH=\frac{365}{6}
\]

**Result: 60.83 days**

Interpretation:

The average inventory represents approximately 61 days of COGS coverage.

### Alternative formula using daily demand or consumption

\[
DOS=\frac{\text{Available Inventory}}{\text{Average Daily Demand}}
\]

For operational planning, this is frequently calculated using physical quantities.

Example:

- Available FG = 12,000 units.
- Average daily demand = 400 units/day.

\[
DOS=\frac{12,000}{400}
\]

\[
=30\text{ days}
\]

Interpretation:

The available finished goods inventory can support approximately 30 days of demand.

### Important distinction: DOH vs. DOS

Although these terms are sometimes used interchangeably, company definitions can differ.

- DOH often refers to financial inventory coverage using COGS and inventory value.
- DOS often refers to operational coverage using available physical quantities and daily demand or consumption.

Also, some companies calculate DOS using gross inventory, while others use net available inventory after reservations and allocations.

Always confirm the company's KPI definition.

## 4.3 Average Inventory

**Definition:** Measures the average inventory maintained over a specific period.

Simple explanation:

Hindi lang natin tinitingnan kung magkano ang inventory ngayon. Gusto nating malaman kung magkano ang typical inventory na hinahawakan ng company throughout the period.

**Basic formula:**

\[
Average\ Inventory=
\frac{Beginning+Ending}{2}
\]

Example:

- Beginning inventory = ₱5 million.
- Ending inventory = ₱7 million.

\[
=\frac{5M+7M}{2}
\]

\[
=\text{₱6 million}
\]

### Why is Average Inventory important?

Imagine:

| Month | Inventory value |
|---|---:|
| January | ₱5M |
| February | ₱8M |
| March | ₱12M |
| April | ₱7M |

Kung beginning and ending inventory lang ang gagamitin, maaaring hindi makita ang malaking fluctuations sa pagitan ng periods.

For more accurate measurement, especially when inventory fluctuates significantly, companies may use:

\[
Average\ Inventory=
\frac{\sum Monthly\ Inventory\ Balances}{Number\ of\ Months}
\]

Using the four monthly balances:

\[
=\frac{5+8+12+7}{4}
\]

\[
=\text{₱8 million}
\]

**Practical rule:** Use the simplest method that is appropriate for the analysis, but use periodic averages when beginning and ending balances do not represent normal inventory levels.

## 4.4 Inventory Accuracy

**Definition:** Measures how closely the recorded inventory quantity matches the actual physical inventory.

Simple explanation:

Kapag sinasabi ng system na may 5,000 kg tayong material, dapat approximately 5,000 kg din ang actual physical stock.

**Common formula:**

\[
Inventory\ Accuracy=
\frac{\text{Number of Accurate Inventory Records}}
{\text{Total Records Counted}}\times100
\]

Example:

The warehouse performs a physical count of 100 inventory records.

- 92 records match the company's accuracy tolerance.
- 8 records have discrepancies.

\[
=\frac{92}{100}\times100
\]

**Result: 92% accuracy**

Interpretation:

92 out of 100 inventory records are accurate based on the company's defined counting tolerance.

### Alternative quantity-based measurement

Some companies calculate accuracy based on quantity differences:

\[
Quantity\ Accuracy=
\left(1-
\frac{|System\ Qty-Physical\ Qty|}
{System\ Qty}\right)\times100
\]

Example:

- System quantity = 1,000 kg.
- Physical quantity = 950 kg.

\[
=\left(1-\frac{50}{1000}\right)\times100
\]

\[
=95\%
\]

These two approaches measure different things:

- Record accuracy measures how many records are correct.
- Quantity accuracy measures the magnitude of quantity discrepancies.

A company may have 95% record accuracy but still have a large total inventory discrepancy if the inaccurate records involve high-value materials.

**Common causes of inventory inaccuracy:**

- Unrecorded material consumption.
- Incorrect receiving transactions.
- Delayed system updates.
- Incorrect material issuance.
- Scrap and production losses not recorded.
- Incorrect unit-of-measure conversion.
- Physical counting errors.

## 4.5 Stockout Rate

**Definition:** Measures the frequency or proportion of demand events that cannot be fulfilled because the required inventory is unavailable.

Simple explanation:

Gaano kadalas walang available stocks kapag kailangan ng customer or production?

There are different ways to calculate this KPI.

### Order-line-based stockout rate

\[
Stockout\ Rate=
\frac{\text{Order Lines with Stockouts}}
{\text{Total Order Lines}}\times100
\]

Example:

- Total order lines = 500.
- Order lines with stockouts = 25.

\[
=\frac{25}{500}\times100
\]

**Result: 5% stockout rate**

This means 5% of the order lines experienced stockouts.

### Unit-based stockout measurement

Another possible measurement is:

\[
Stockout\ Rate=
\frac{\text{Unfulfilled Demand Units}}
{\text{Total Demand Units}}\times100
\]

This measures the percentage of requested units that could not be supplied.

**Important:** Order-line stockout rate and unit-based stockout rate are not identical. Always identify which definition your organization uses.

## 4.6 Fill Rate

**Definition:** Measures the proportion of customer demand that is fulfilled from available inventory.

Simple explanation:

Ilang percent ng requested quantity ang naibigay natin?

**Formula:**

\[
Fill\ Rate=
\frac{\text{Units Fulfilled}}
{\text{Total Units Ordered}}\times100
\]

Example:

A customer orders 10,000 units.

The company ships 9,200 units within the agreed fulfillment window.

\[
=\frac{9,200}{10,000}\times100
\]

**Result: 92% fill rate**

Interpretation:

The company fulfilled 92% of the requested quantity.

The remaining 800 units were not fulfilled within the measurement window.

### Types of Fill Rate

| Measurement | What it measures |
|---|---|
| Unit Fill Rate | Percentage of requested units fulfilled. |
| Order-Line Fill Rate | Percentage of order lines fulfilled completely. |
| Order Fill Rate | Percentage of entire orders fulfilled completely. |

These distinctions matter.

For example:

Customer orders 100 units of Product A and 100 units of Product B.

Company ships:
- Product A = 100 units.
- Product B = 50 units.

Unit fill rate:

\[
=\frac{150}{200}\times100=75\%
\]

But order-line fill rate:

Only one of the two lines was completely fulfilled.

\[
=\frac{1}{2}\times100=50\%
\]

So unit fill rate is 75%, while order-line fill rate is 50%.

Same shipment, different performance measurement.

## 4.7 Service Level

**Definition:** Measures the company's ability to meet customer demand or fulfill customer requirements according to a defined service commitment.

Simple explanation:

Gaano kadalas nating natutupad ang customer requirements?

This is related to fill rate, but it is not necessarily the same.

### Example: Cycle Service Level

\[
Service\ Level=
\frac{\text{Cycles Without Stockouts}}
{\text{Total Replenishment Cycles}}\times100
\]

Assume:

A company has 100 replenishment cycles.

- 95 cycles experienced no stockout.
- 5 cycles experienced stockouts.

\[
=\frac{95}{100}\times100
\]

**Result: 95% cycle service level**

Interpretation:

95% of replenishment cycles were completed without a stockout.

### Fill Rate vs. Service Level

This is one of the most important distinctions in this lesson.

| KPI | Main question | Measurement |
|---|---|---|
| Fill Rate | How much of the demand did we fulfill? | Quantity fulfilled / quantity requested |
| Cycle Service Level | How often did we avoid a stockout? | Stockout-free cycles / total cycles |

Let's use a simple example.

A company experiences 10 customer orders.

Nine orders are fulfilled completely.

One order requests 1,000 units, but only 100 units are available.

The company fulfills:

- 9,000 units from the first nine orders.
- 100 units from the tenth order.

Total requested = 10,000 units.

Fill Rate:

\[
=\frac{9,100}{10,000}\times100=91\%
\]

Order service level:

\[
=\frac{9}{10}\times100=90\%
\]

In this example, the two measurements produce different results.

**Important:** The term Service Level has several definitions in industry. It can refer to cycle service level, order service level, on-time delivery performance, or other customer service commitments. Never assume the definition without checking the KPI specification.

## 4.8 Excess and Obsolete Inventory

These two concepts are related but different.

**Excess Inventory**

Inventory quantity that exceeds the amount needed to support expected demand and the company's desired inventory policy.

Example:

- Required inventory = 10,000 units.
- Actual inventory = 16,000 units.

\[
Excess=16,000-10,000
\]

\[
=6,000\text{ units}
\]

**Obsolete Inventory**

Inventory that is no longer expected to be used or sold because of reasons such as:

- Product discontinuation.
- Engineering changes.
- Technology changes.
- Expiration.
- Quality issues.
- Changes in customer requirements.

Example:

A company has 5,000 units of an old product model, but the customer has permanently discontinued purchasing it.

Those units may be considered obsolete, subject to the company's inventory policy and assessment.

### Excess vs. Obsolete

| Excess | Obsolete |
|---|---|
| More inventory than currently required. | Inventory no longer expected to have productive or sales use. |
| May still be consumed or sold. | May have little or no recoverable value. |
| Can potentially be corrected through reduced procurement or production. | May require disposal, write-down, return, or alternative disposition. |

### Common Excess Inventory Formula

\[
Excess\ Inventory=
\max(0,Actual\ Inventory-Target\ Inventory)
\]

This can be calculated in physical quantities or financial values, provided both values use the same basis.

For a meaningful excess inventory assessment, target inventory should consider demand, lead time, safety stock, production requirements, and inventory policy.

## 4.9 Inventory Carrying Cost

**Definition:** Measures the cost of holding inventory over a specified period.

Simple explanation:

Magkano ang ginagastos ng company para lang mapanatili ang inventory sa warehouse at supply chain?

Typical carrying cost components include:

- Storage and warehouse expenses.
- Insurance.
- Handling costs.
- Inventory financing costs.
- Risk of deterioration.
- Obsolescence risk.
- Damage and shrinkage.

**Formula:**

\[
Carrying\ Cost=
Average\ Inventory\ Value\times Carrying\ Cost\ Rate
\]

Example:

- Average inventory = ₱6,000,000.
- Annual carrying cost rate = 20%.

\[
=6,000,000\times20\%
\]

**Annual carrying cost: ₱1,200,000**

Interpretation:

The company estimates that maintaining ₱6 million in average inventory costs approximately ₱1.2 million annually.

### Important distinction

Inventory value and inventory carrying cost are not the same.

- Inventory value = Monetary value of the stocks themselves.
- Carrying cost = Cost associated with holding and maintaining those stocks.

The carrying cost rate is company-specific. A 20% assumption is used here only for illustration, not as a universal industry standard.

---

# 5. Formula and Calculation Summary

Let's consolidate the formulas.

| KPI | Formula | Unit |
|---|---|---|
| Inventory Turnover | COGS / Average Inventory | Times |
| DOH | Days in Period / Inventory Turnover | Days |
| DOS | Available Inventory / Average Daily Demand | Days |
| Average Inventory | (Beginning + Ending) / 2 | Currency or units |
| Inventory Accuracy | Accurate Records / Total Records × 100 | % |
| Stockout Rate | Stockout Events / Total Events × 100 | % |
| Fill Rate | Units Fulfilled / Units Ordered × 100 | % |
| Cycle Service Level | Stockout-Free Cycles / Total Cycles × 100 | % |
| Excess Inventory | MAX(0, Actual − Target) | Units or currency |
| Carrying Cost | Average Inventory Value × Carrying Cost Rate | Currency |

Remember: Some formulas are company-specific. For example, the denominator for Inventory Accuracy, Stockout Rate, and Service Level must be defined consistently.

---

# 6. Inventory Performance Analysis

Calculating the KPIs is only the first step.

The real value comes from interpreting the results and identifying what is happening in the business.

## 6.1 Actual Inventory vs. Target Inventory

**Actual Inventory** is the inventory currently available or recorded.

**Target Inventory** is the desired inventory level based on the company's planning assumptions and inventory policies.

Example:

| Product | Actual | Target | Variance |
|---|---:|---:|---:|
| Product A | 15,000 | 10,000 | +5,000 |
| Product B | 8,000 | 12,000 | -4,000 |
| Product C | 20,000 | 20,000 | 0 |

Formula:

\[
Inventory\ Variance=Actual-Target
\]

Interpretation:

- Product A: Excess inventory of 5,000 units.
- Product B: Inventory shortfall of 4,000 units.
- Product C: On target.

But be careful.

An inventory shortfall does not automatically mean a stockout.

For example, Product B may have 8,000 units available but only 5,000 units of demand before the next replenishment.

It is below target, but it may still be sufficient.

Similarly, Product A may exceed its target but have a major demand increase coming next month.

The target must be evaluated alongside future demand and supply.

## 6.2 Inventory Trends

Inventory trend analysis looks at how inventory changes over time.

Consider:

| Month | Inventory value |
|---|---:|
| January | ₱5M |
| February | ₱6M |
| March | ₱8M |
| April | ₱10M |
| May | ₱12M |
| June | ₱14M |

What should an S&OP analyst investigate?

1. Is inventory increasing because demand is decreasing?
2. Is procurement exceeding actual material requirements?
3. Is production producing more than customer demand?
4. Are finished goods accumulating because of shipment delays?
5. Are suppliers delivering earlier than required?
6. Is the company deliberately building inventory for a future demand peak?

An increasing inventory trend is not automatically bad. The reason behind the increase matters.

## 6.3 Inventory Aging

Inventory aging measures how long inventory has remained unused or unsold.

Example:

| Inventory age | Inventory value |
|---|---:|
| 0–30 days | ₱4M |
| 31–60 days | ₱2M |
| 61–90 days | ₱1.5M |
| 91–180 days | ₱1M |
| More than 180 days | ₱1.5M |
| **Total** | **₱10M** |

Why is this important?

Because older inventory may have a higher risk of:

- Becoming obsolete.
- Expiring.
- Being damaged.
- Becoming incompatible with new product specifications.
- Remaining unused for an extended period.

However, inventory age alone does not prove obsolescence.

Some materials have long shelf lives and are intentionally purchased in advance. Others may expire within a few months.

A good aging analysis must consider the material's actual shelf life, demand, usability, and future requirements.

## 6.4 Slow-Moving Inventory

Slow-moving inventory refers to stocks with low consumption or sales relative to their available quantity.

Example:

| Material | Current stock | Monthly consumption |
|---|---:|---:|
| Material A | 10,000 kg | 5,000 kg |
| Material B | 10,000 kg | 1,000 kg |
| Material C | 10,000 kg | 100 kg |

Calculate coverage:

\[
DOS=\frac{Inventory}{Monthly\ Consumption/30}
\]

| Material | Approximate DOS |
|---|---:|
| A | 60 days |
| B | 300 days |
| C | 3,000 days |

Material C deserves investigation.

Possible explanations:
- Forecast is too high.
- Procurement quantity is excessive.
- Material is no longer required.
- Production schedule has changed.
- A customer program has been discontinued.

## 6.5 Understanding Inventory Shortage Risk

A shortage risk occurs when projected inventory may become insufficient before replenishment arrives.

A useful planning relationship is:

\[
Projected\ Inventory=
Beginning\ Inventory+Receipts-Demand
\]

Example:

- Beginning inventory = 10,000 units.
- Expected receipts = 2,000 units.
- Expected demand = 11,000 units.

\[
=10,000+2,000-11,000
\]

\[
=1,000\text{ units}
\]

Projected ending inventory is 1,000 units.

But suppose the company requires 2,000 units of safety stock.

Then:

\[
Inventory\ Shortfall=2,000-1,000
\]

\[
=1,000\text{ units}
\]

The company may still have positive inventory, but it is below the required safety stock.

This is an early warning of potential service risk.

## 6.6 Inventory Across RM, WIP, and FG

One of the most important analytical practices is evaluating inventory by stage.

| Category | High inventory may indicate | Low inventory may indicate |
|---|---|---|
| Raw Materials | Excess purchasing or bulk procurement | Material shortage risk |
| WIP | Production bottleneck or poor flow | Low production activity or insufficient input |
| Finished Goods | Overproduction or weak demand | Potential inability to fulfill orders |

Example:

A manufacturer has:

- High RM inventory.
- High WIP inventory.
- Low FG inventory.

What could be happening?

Possible scenario:

The company has sufficient raw materials, but production is unable to convert them into finished goods fast enough.

Possible causes:
- Production capacity constraints.
- Equipment breakdowns.
- Quality problems.
- Processing delays.
- Labor shortages.

This is where inventory analysis connects directly to Topic 9.3 and supply planning performance.

---

# 7. Relationship Between Inventory KPIs

Dito natin makikita kung bakit hindi dapat isolated ang pagtingin sa Inventory KPIs.

A KPI can improve while another KPI deteriorates.

## 7.1 Inventory Turnover vs. DOS

These two KPIs have an inverse relationship when calculated using the same inventory basis and period.

\[
DOS=\frac{365}{Inventory\ Turnover}
\]

| Inventory Turnover | Approximate DOH |
|---:|---:|
| 2 times | 182.5 days |
| 4 times | 91.25 days |
| 6 times | 60.83 days |
| 8 times | 45.63 days |
| 10 times | 36.5 days |
| 12 times | 30.42 days |

Interpretation:

- Higher turnover generally means lower inventory coverage.
- Lower turnover generally means higher inventory coverage.

But remember:

High turnover does not automatically mean excellent performance.

Kung sobrang bilis ng inventory movement dahil kulang ang stocks, puwedeng magkaroon ng stockouts.

## 7.2 Inventory Levels vs. Service Level

Generally:

- Increasing inventory can improve product availability.
- Decreasing inventory can increase shortage risk.
- Insufficient safety stock can reduce service performance.

However, the relationship is not always linear.

For example:

A company may increase finished goods from 10,000 to 15,000 units.

But if the additional inventory consists of slow-moving products while the high-demand products remain unavailable, customer service may not improve.

This leads to an important principle:

**Total inventory is less meaningful if the inventory mix does not match the demand mix.**

## 7.3 Excess Inventory vs. Working Capital

Working capital is the capital used to support the company's day-to-day operations.

Inventory is one component of working capital.

Imagine:

| Scenario | Average inventory |
|---|---:|
| Before improvement | ₱10M |
| After improvement | ₱7M |

Inventory reduction:

\[
10M-7M=\text{₱3M}
\]

The company has released ₱3 million from inventory investment, assuming the reduction represents a genuine decrease in inventory value without simply shifting the stock elsewhere.

That capital may become available for:
- Supplier payments.
- Operational expenses.
- Debt reduction.
- Other investments.
- Business expansion.

This is why inventory management is also a financial management activity.

## 7.4 Why Improving One KPI Can Negatively Affect Another

Let's examine common trade-offs.

| Business decision | Potential positive impact | Potential negative impact |
|---|---|---|
| Reduce safety stock | Lower inventory and carrying cost | Higher stockout risk |
| Increase procurement quantities | Better material availability | Higher excess inventory |
| Increase production batches | Lower production setup frequency | Higher finished goods inventory |
| Reduce finished goods inventory | Lower working capital | Lower immediate product availability |
| Improve forecast accuracy | Better inventory planning | Does not guarantee supplier reliability |
| Shorten replenishment lead time | Lower required inventory coverage | May increase procurement or transportation cost |

A professional S&OP analyst must understand these trade-offs.

Hindi sapat na sabihin na:

"Our inventory turnover improved from 4x to 8x."

The next questions should be:

- Did service level improve or decline?
- Did stockouts increase?
- Did inventory reduction affect production continuity?
- Did supplier lead time become more critical?
- Was working capital genuinely released?

A KPI improvement must be evaluated against the overall business objective.

---

# 8. Practical Manufacturing Case Study

Now let's combine the concepts.

We'll use a fictional company called **Electra Components Manufacturing Inc.**

It manufactures electronic components similar to MLCC products.

The company wants to evaluate its inventory performance for the current planning period.

All figures below are illustrative assumptions.

## 8.1 Company Inventory Position

**INVENTORY POSITION · JUNE 30**

| Inventory category | Physical quantity | Financial value |
|---|---:|---:|
| Raw Materials | 20,000 kg | ₱4,000,000 |
| Work-in-Process | 50,000 units | ₱3,000,000 |
| Finished Goods | 30,000 units | ₱6,000,000 |
| **Total** | | **₱13,000,000** |

Notice that we cannot simply add 20,000 kg and 50,000 units and 30,000 units.

They represent different units of measurement.

But we can add their financial values because all are expressed in pesos.

Therefore:

\[
Total\ Inventory\ Value=4M+3M+6M
\]

\[
=\text{₱13,000,000}
\]

## 8.2 Financial Inventory Performance

Assume the following financial information:

| Metric | Value |
|---|---:|
| Beginning inventory | ₱11,000,000 |
| Ending inventory | ₱13,000,000 |
| Annual COGS | ₱72,000,000 |
| Annual sales | ₱100,000,000 |
| Carrying cost rate | 20% |

**Step 1: Calculate Average Inventory**

\[
=\frac{11M+13M}{2}
\]

\[
=\text{₱12,000,000}
\]

**Step 2: Calculate Inventory Turnover**

\[
=\frac{72M}{12M}
\]

\[
=6\text{ times/year}
\]

**Step 3: Calculate DOH**

\[
=\frac{365}{6}
\]

\[
=60.83\text{ days}
\]

**Step 4: Calculate Inventory Carrying Cost**

\[
=12M\times20\%
\]

\[
=\text{₱2,400,000/year}
\]

**Step 5: Compare COGS-based turnover with Sales-based turnover**

Using COGS:

\[
72M/12M=6
\]

Using sales:

\[
100M/12M=8.33
\]

For standard financial inventory turnover, the 6x result is the more consistent measure because inventory is valued at cost.

## 8.3 Product-Level Inventory Analysis

Now let's examine the company's finished goods inventory.

Assume the following information:

| Product | Actual stock | Target stock | Average daily demand |
|---|---:|---:|---:|
| Product A | 12,000 | 10,000 | 400 |
| Product B | 8,000 | 12,000 | 500 |
| Product C | 20,000 | 8,000 | 100 |

### Calculate DOS

Formula:

\[
DOS=\frac{Actual\ Inventory}{Daily\ Demand}
\]

**Product A**

\[
12,000/400=30\text{ days}
\]

**Product B**

\[
8,000/500=16\text{ days}
\]

**Product C**

\[
20,000/100=200\text{ days}
\]

**PRODUCT INVENTORY COVERAGE**

| Product | Actual DOS | Target stock variance | Initial assessment |
|---|---:|---:|---|
| A | 30 days | +2,000 | Above target |
| B | 16 days | -4,000 | Shortage risk |
| C | 200 days | +12,000 | Potential excess |

What can we conclude?

**Product A**

Inventory is 2,000 units above target. However, 30 days of coverage may still be reasonable depending on replenishment lead time and demand variability.

**Product B**

Inventory is 4,000 units below target, and coverage is only 16 days.

If replenishment lead time is 25 days, there may be a shortage before the next supply arrives.

**Product C**

Inventory is 12,000 units above target and represents 200 days of demand.

This deserves an investigation for possible excess or slow-moving inventory.

### Calculate potential excess stock

\[
Excess=\max(0,Actual-Target)
\]

| Product | Actual | Target | Excess |
|---|---:|---:|---:|
| A | 12,000 | 10,000 | 2,000 |
| B | 8,000 | 12,000 | 0 |
| C | 20,000 | 8,000 | 12,000 |

Total potential excess:

\[
2,000+12,000=14,000\text{ units}
\]

Note that Product B's 4,000-unit shortfall is not deducted from the excess of Products A and C. These are different products and cannot necessarily substitute for one another.

## 8.4 Customer Service Performance

Assume the company received the following customer demand:

| Metric | Value |
|---|---:|
| Total customer orders | 500 |
| Orders completely fulfilled | 450 |
| Total units ordered | 100,000 |
| Total units fulfilled | 94,000 |
| Order lines with stockouts | 30 |
| Total order lines | 500 |

**A. Order Fill Rate**

\[
=\frac{450}{500}\times100
\]

\[
=90\%
\]

**B. Unit Fill Rate**

\[
=\frac{94,000}{100,000}\times100
\]

\[
=94\%
\]

**C. Order-Line Stockout Rate**

\[
=\frac{30}{500}\times100
\]

\[
=6\%
\]

**D. Order Service Level**

Using complete orders as the service measure:

\[
=\frac{450}{500}\times100
\]

\[
=90\%
\]

Notice that order fill rate and order service level are identical in this particular example because both use complete orders as their measurement. They are not universally interchangeable.

## 8.5 Inventory Accuracy

Assume warehouse cycle counting produced these results:

| Metric | Value |
|---|---:|
| Total records counted | 200 |
| Accurate records | 184 |
| Inaccurate records | 16 |

\[
Inventory\ Accuracy=
\frac{184}{200}\times100
\]

\[
=92\%
\]

The company has 92% inventory record accuracy.

The remaining 8% needs investigation.

Possible impact:

- Incorrect production material availability.
- Unexpected material shortages.
- Incorrect replenishment signals.
- Inaccurate inventory valuation.
- Unreliable S&OP reports.

## 8.6 Overall Inventory KPI Dashboard

**ELECTRA COMPONENTS · ILLUSTRATIVE RESULTS**

| KPI | Result |
|---|---:|
| Inventory turnover | 6.0x annually |
| Days of inventory | 60.83 days |
| Unit fill rate | 94% |
| Inventory accuracy | 92% |
| Potential excess | 14,000 finished goods units |
| Annual carrying cost | ₱2.4M |

### 8.7 What should management investigate?

Based on the results, an S&OP analyst should raise these findings:

| Finding | Possible business issue | Recommended investigation |
|---|---|---|
| Product B has 16 DOS | Supply shortage risk | Check incoming supply and production replenishment |
| Product C has 200 DOS | Excess or slow-moving stock | Review demand forecast and future consumption |
| Inventory accuracy is 92% | Unreliable inventory records | Investigate cycle-count discrepancies |
| Unit fill rate is 94% | Unfulfilled customer demand | Analyze stockout reasons and affected products |
| Carrying cost is ₱2.4M | Significant inventory holding expense | Evaluate inventory reduction opportunities |

The important lesson:

A company can simultaneously have excess inventory and shortages.

This happens when the inventory mix does not match the demand mix.

For example, Product C may have 200 days of inventory while Product B has only 16 days.

The company does not necessarily need more total inventory. It may need a better inventory allocation and replenishment strategy.

---

# 9. Business Perspective and S&OP Decision-Making

Now let's move from KPI calculation to professional S&OP application.

The purpose of an S&OP analyst is not simply to report that inventory turnover is 6x or inventory accuracy is 92%.

The analyst must explain what the results mean and what decisions may be necessary.

## 9.1 How S&OP Analysts Use Inventory KPIs

| S&OP activity | Inventory KPI application |
|---|---|
| Demand Review | Evaluate whether inventory supports forecasted demand. |
| Supply Review | Determine whether materials and finished goods are sufficient. |
| Inventory Review | Identify excess, shortage risks, and aging inventory. |
| Pre-S&OP | Evaluate alternative demand and supply scenarios. |
| Executive S&OP | Present inventory risks, financial exposure, and decisions requiring management approval. |

## 9.2 Supporting Procurement Decisions

Example:

A critical raw material has:

- Available inventory = 5,000 kg.
- Average daily consumption = 250 kg.
- Supplier lead time = 30 days.

Calculate DOS:

\[
DOS=\frac{5,000}{250}
\]

\[
=20\text{ days}
\]

But supplier lead time is 30 days.

This means current inventory provides only 20 days of coverage, while replenishment takes 30 days.

There is a potential 10-day supply gap if no additional supply is available.

Possible decisions:
- Expedite the purchase order.
- Find alternative qualified suppliers.
- Adjust production schedules.
- Allocate available materials to priority products.
- Review safety stock requirements.

## 9.3 Supporting Production Decisions

Example:

Finished goods inventory is below target, but WIP inventory is unusually high.

This suggests that materials are already in the production pipeline but have not yet been converted into finished goods.

The S&OP analyst should investigate:
- Production bottlenecks.
- Equipment availability.
- Manufacturing cycle time.
- Quality rejection rates.
- Production schedule adherence.

The solution may not be additional procurement.

It may be improving production throughput.

## 9.4 Supporting Demand Decisions

Example:

Product C has 200 DOS, while the demand forecast has declined by 30%.

Possible decisions:
- Reduce future production.
- Cancel or postpone purchase orders where feasible.
- Reallocate inventory to other customers or locations.
- Develop a promotion or alternative selling strategy.
- Review product discontinuation plans.

The objective is to prevent additional excess inventory.

## 9.5 Supporting Financial Decisions

Suppose management wants to reduce average inventory by ₱2 million.

At an illustrative annual carrying cost rate of 20%:

\[
2M\times20\%=\text{₱400,000}
\]

Potential annual carrying cost reduction:

\[
=\text{₱400,000}
\]

However, this must be balanced against service risk.

If the inventory reduction creates customer shortages or production downtime, the financial benefit may be outweighed by the operational losses.

---

# 10. Important Considerations and Common Mistakes

Before we move to the key takeaways, let's consolidate common errors that an S&OP analyst should avoid.

| Common mistake | Why it is incorrect |
|---|---|
| Using sales instead of COGS for standard financial inventory turnover | Sales includes profit margin, while inventory is valued at cost. |
| Treating inventory turnover and DOS as identical | Turnover is expressed in times; DOS is expressed in days. |
| Treating fill rate and service level as identical | They may measure quantity fulfillment and order or cycle success differently. |
| Assuming high turnover is always good | It may indicate insufficient inventory and stockout risk. |
| Assuming high inventory is always bad | Some materials require strategic or safety stock. |
| Comparing kilograms with units directly | Different physical measurement units cannot be added meaningfully. |
| Ignoring WIP inventory | High WIP can conceal production bottlenecks. |
| Using only ending inventory for turnover | Ending inventory may not represent the average inventory level. |
| Treating all excess inventory as obsolete | Excess inventory may still be usable or required in the future. |
| Ignoring inventory accuracy | Incorrect system records can create misleading planning decisions. |
| Reducing inventory without checking lead time | The company may experience shortages before replenishment. |

One more important professional concept:

**Inventory KPIs should always have a clearly defined scope, calculation method, time period, and data source.**

For example, when someone reports that DOS is 45 days, ask:

- Is it based on gross inventory or net available inventory?
- Is it based on historical consumption or forecast demand?
- Is it calculated for finished goods, raw materials, or total inventory?
- Does it include safety stock?
- Is the period based on 365 days, 360 days, or a monthly convention?

Without these details, comparing DOS across departments or companies can be misleading.

---

# 11. Key Takeaways

Ito ang mga concepts na kailangan mong ma-master bago tayo mag-move forward.

## 11.1 The Nine Inventory KPIs

| KPI | What you should remember |
|---|---|
| 1. Inventory Turnover | How many times inventory turns over during a period. |
| 2. DOH / DOS | How many days the inventory can support demand or consumption. |
| 3. Average Inventory | Typical inventory level maintained during a period. |
| 4. Inventory Accuracy | How closely system records match physical inventory. |
| 5. Stockout Rate | How frequently demand encounters unavailable inventory. |
| 6. Fill Rate | How much of the requested quantity is fulfilled. |
| 7. Service Level | How consistently the company meets a defined service commitment. |
| 8. Excess and Obsolete Inventory | Inventory exceeding requirements or no longer usable or saleable. |
| 9. Inventory Carrying Cost | Cost of maintaining inventory over time. |

## 11.2 Five distinctions you must remember

**1. Inventory Turnover vs. DOS**

- Turnover = How many times inventory moves.
- DOS = How many days inventory can support demand.

**2. Fill Rate vs. Service Level**

- Fill Rate = How much quantity was fulfilled?
- Service Level = How consistently were service requirements met?

**3. Inventory Accuracy vs. Inventory Availability**

- Accuracy = Are the recorded quantities correct?
- Availability = Are the required stocks physically available when needed?

**4. Excess vs. Obsolete**

- Excess = More inventory than currently required.
- Obsolete = Inventory that no longer has expected productive or sales use.

**5. Physical Inventory vs. Financial Inventory**

- Physical = Kilograms, pieces, units, liters, etc.
- Financial = Monetary value, such as pesos or dollars.

## 11.3 The central principle of Inventory Management

**Effective Inventory Management**

**Right Quantity + Right Timing + Right Inventory Mix**

A company should maintain sufficient inventory to support demand while minimizing unnecessary inventory investment, storage costs, and obsolescence risk.

The goal is not simply to minimize inventory. It is to optimize inventory performance.

---

# 12. Connection to Topic 9.5: Financial KPIs

Topic 9.4 is the bridge between operational performance and financial performance.

We've learned that inventory decisions have financial consequences.

For example:

| Inventory decision | Financial impact |
|---|---|
| Increase inventory | More working capital tied up in stocks |
| Reduce inventory | Potential release of working capital |
| Maintain excess stocks | Higher carrying costs |
| Hold obsolete inventory | Potential inventory write-downs |
| Experience stockouts | Lost sales and potential customer penalties |
| Improve inventory turnover | Potentially better inventory investment efficiency |

In Topic 9.5, we'll examine the financial measurements used to evaluate business performance.

The connection will be:

- Inventory Turnover → Inventory investment efficiency.
- Inventory Value → Working capital.
- Carrying Cost → Operating expenses.
- Excess Inventory → Potential financial exposure.
- Inventory Reduction → Potential cash release.

**The transition in our learning program:**

Topics 9.1–9.3 taught us how to evaluate demand and supply performance.

Topic 9.4 taught us how to evaluate the inventory position created by demand and supply decisions.

Topic 9.5 will teach us how to evaluate the financial consequences of those decisions.

---

# 13. Knowledge Check and Exercises

**Assessment · Before proceeding**

Now let's test your understanding.

I won't reveal the answers yet. Sagutan mo muna, then I'll evaluate your answers, explain your mistakes, and identify which concepts need further improvement.

## Part A: Conceptual Understanding

**Question 1.** A company has high inventory turnover but frequently experiences stockouts.

Is this necessarily a sign of good inventory management? Explain why or why not.

**Question 2.** What is the difference between Inventory Turnover and Days of Supply?

**Question 3.** A company reports 95% inventory accuracy.

Does this mean that 95% of its customer demand can be fulfilled? Explain.

**Question 4.** What is the difference between Fill Rate and Service Level?

**Question 5.** Why is COGS generally preferred over Sales when calculating financial inventory turnover?

## Part B: Numerical Exercises

Use the following information.

A manufacturing company reports:

| Metric | Value |
|---|---:|
| Beginning inventory | ₱8,000,000 |
| Ending inventory | ₱12,000,000 |
| Annual COGS | ₱60,000,000 |
| Annual Sales | ₱90,000,000 |
| Carrying cost rate | 18% |

**Question 6.** Calculate the Average Inventory.

**Question 7.** Calculate the Inventory Turnover using COGS.

**Question 8.** Calculate the annual DOH.

**Question 9.** Calculate the annual Inventory Carrying Cost.

**Question 10.** Calculate the Inventory Turnover using Sales. Compare it with your answer to Question 7. Why are the results different?

## Part C: Inventory Analysis

A company has three finished goods products.

| Product | Actual Inventory | Target Inventory | Daily Demand |
|---|---:|---:|---:|
| A | 15,000 units | 10,000 units | 500 units |
| B | 6,000 units | 10,000 units | 400 units |
| C | 24,000 units | 12,000 units | 200 units |

**Question 11.** Calculate the DOS of Products A, B, and C.

**Question 12.** Identify which products have potential excess inventory and which have inventory shortfalls.

**Question 13.** Product B has a replenishment lead time of 20 days. Based on your DOS calculation, what is the potential operational risk?

**Question 14.** Product C has significantly higher inventory than its target. What information would you investigate before recommending an inventory reduction?

## Part D: Business Decision-Making

**Question 15.**

Imagine you are an S&OP analyst.

Your monthly inventory report shows:

- Raw Materials: Above target by 25%.
- WIP: Above target by 40%.
- Finished Goods: Below target by 20%.
- Customer Fill Rate: 88%.
- Inventory Accuracy: 96%.

Management asks you:

"Why are we experiencing low customer service when our inventory is already above target in some categories?"

Explain:
1. What could be happening operationally?
2. Which inventory categories should you investigate first?
3. What information would you request from Production, Procurement, and Demand Planning?
4. What actions would you recommend to management?

This final question tests whether you can connect inventory KPIs to actual S&OP decisions.

---

## 14. Learning Progress Tracker

**Topic 9.4 Completion**

- [ ] Inventory KPI Fundamentals: Availability, efficiency, and S&OP relationship
- [ ] Nine Key Inventory KPIs: Definitions, formulas, and distinctions
- [ ] Inventory Calculations: COGS, turnover, DOS, accuracy, fill rate, and carrying cost
- [ ] Inventory Performance Analysis: Trends, aging, excess, and shortage risks
- [ ] Relationships Between KPIs: Operational and financial trade-offs
- [ ] Manufacturing Case Study: Integrated inventory analysis
- [ ] S&OP Decision-Making: Procurement, production, demand, and management decisions

**7 learning areas** are available for self-assessment. This is separate from the knowledge check.

**My recommendation:** Focus particularly on Questions 4, 11, 13, and 15. These will show whether you can move beyond calculating KPIs and actually use them to explain inventory problems and recommend business actions.

Once you've answered the exercises, we'll review your answers as an S&OP training assessment, correct any misunderstandings, and strengthen your professional analysis.

We will remain on **Module 9 – Topic 9.4: Inventory KPIs** until you confirm that you're ready to proceed.
