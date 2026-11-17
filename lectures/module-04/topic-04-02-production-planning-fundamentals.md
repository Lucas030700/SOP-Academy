# Module 4 – Production Planning and Supply Planning
## Topic 4.2: Production Planning Fundamentals

**Lesson 4.2 | Beginner to Professional | Taglish**

**Main learning goal:** Matutunan kung paano nagde-decide ang isang manufacturing company kung gaano karaming products ang kailangang gawin, kailan ito gagawin, at kung kaya ba itong gawin gamit ang available materials, manpower, machines, at production capacity.

Sa previous Topic 4.1, pinag-aralan natin ang **Supply Planning**, kung saan tinitingnan kung paano matutugunan ng company ang demand using available resources.

Ngayon, magfo-focus tayo sa isang important component ng Supply Planning: **Production Planning**.

Isipin mo ito:

May customer na nag-order ng 10,000 electronic components. Mayroon kang 2,000 units na finished goods inventory. May raw materials ka para sa 6,000 units, at kaya ng production line mo gumawa ng 5,000 units per month.

Ang tanong:

- Ilan ang kailangan mong i-produce?
- Kailan dapat simulan ang production?
- Sapat ba ang raw materials?
- Kaya ba ng production line ang required quantity?
- Ilang units ang magiging ending inventory mo?

Iyan ang mga tanong na sinasagot ng Production Planning.

---

# 1. Topic Overview

## 1.1 What is Production Planning?

**Simple explanation:**

Production Planning is the process of deciding kung ano, gaano karami, at kailan gagawin ng manufacturing company para matugunan ang expected customer demand.

Halimbawa, gumagawa ang isang company ng capacitors.

Expected demand for November:

| Product | Required Quantity |
|---|---:|
| Capacitor A | 10,000 units |
| Capacitor B | 15,000 units |
| Capacitor C | 8,000 units |
| **Total** | **33,000 units** |

Hindi automatic na magpo-produce ang company ng 33,000 units.

Bakit?

Dahil kailangan munang malaman:

- May existing finished goods inventory ba?
- May ongoing production ba?
- Available ba ang raw materials?
- Sapat ba ang machine capacity?
- Ilang units ang expected na good output?
- May existing production commitments ba?

Production Planning considers all these factors before deciding the production quantity.

**Technical definition:**

Production Planning is the process of determining the required production quantities, production periods, and resource requirements to satisfy anticipated demand while considering inventory levels, material availability, manufacturing capacity, and operational constraints.

## 1.2 Why is Production Planning important?

Without production planning, maaaring mangyari ang dalawang extreme situations:

**Situation A: Overproduction**

Mas marami ang ginawa kaysa sa kailangan.

Possible consequences:
- Excess inventory
- Higher inventory holding costs
- Increased warehouse utilization
- Risk of obsolete inventory
- Unnecessary production expenses

**Situation B: Underproduction**

Mas kaunti ang ginawa kaysa sa kailangan.

Possible consequences:
- Product shortages
- Delayed customer deliveries
- Backorders
- Lost sales
- Customer dissatisfaction

Ang objective ay hindi basta paramihan ng production.

Ang objective ay gumawa ng **right quantity, at the right time, using the available resources.**

## 1.3 Production Planning vs. Production Scheduling vs. Production Execution

Importanteng maintindihan ang distinction na ito dahil madalas silang napagpapalit.

**1. Production Planning: What and how much should we produce?**

Example: Produce 10,000 capacitor units this month.

**2. Production Scheduling: When exactly and in what sequence should we produce?**

Example: Produce 2,000 units on November 2–3 using Line 1, followed by Product B on November 4.

**3. Production Execution: Are we actually producing according to the plan?**

Example: Operators run the machine, process materials, monitor output, and record actual production.

Let's compare them:

| Aspect | Planning | Scheduling | Execution |
|---|---|---|---|
| Main concern | Quantity and period | Specific timing and sequence | Actual manufacturing |
| Time horizon | Weeks/months | Days/shifts/hours | Real-time |
| Main output | Production plan | Production schedule | Actual production results |
| Responsible teams | Planning/Supply Chain | Production control | Manufacturing |

**Important distinction:**

Production Planning might tell you to produce 10,000 units in November.

Production Scheduling determines whether these 10,000 units will be produced in Week 1, Week 2, or distributed across the month.

Production Execution determines whether the manufacturing team actually produces those 10,000 units.

These three functions must work together.

## 1.4 Relationship Between Demand and Production Quantity

Production quantity is not necessarily equal to demand.

For example:

- Customer demand: 10,000 units
- Beginning inventory: 3,000 units
- Target ending inventory: 2,000 units

The company does not need to produce another 10,000 units.

It only needs to produce enough to cover demand while maintaining its target inventory.

This leads us to an important concept: **Net Production Requirement**, which we will calculate later.

---

# 2. Layman's Explanation

## 2.1 Think of a Restaurant

Imagine na may restaurant ka.

Expected customers tomorrow: 100 people.

Each customer is expected to order one serving of chicken.

Does that mean you should cook exactly 100 servings?

Not necessarily.

Suppose:
- May 20 servings ka nang prepared.
- You want to maintain 10 extra servings as buffer.
- You expect 5 servings to be wasted or rejected due to preparation issues.

You need to determine how many additional servings to prepare.

The same principle applies to manufacturing.

| Restaurant | Manufacturing |
|---|---|
| Expected customers | Demand forecast |
| Confirmed food orders | Customer orders |
| Prepared food | Finished goods inventory |
| Ingredients | Raw materials |
| Kitchen equipment | Production equipment |
| Number of cooks | Available workforce |
| Cooking time | Production lead time |
| Food waste | Scrap |
| Prepared servings | Production output |

Production Planning is essentially the process of preparing the right amount of output based on what customers need and what the business can produce.

## 2.2 Why can't companies simply produce everything immediately?

Because manufacturing has limitations.

For example, kahit may demand na 100,000 units, hindi ibig sabihin kaya itong gawin immediately.

Possible limitations:

1. Limited raw materials.
2. Limited production machines.
3. Limited operating hours.
4. Limited manpower.
5. Long manufacturing lead times.
6. Quality losses and production scrap.

Kaya production planning requires balancing three major considerations:

**The Production Planning Balance**

- **Demand:** What customers need.
- **Inventory:** What we already have.
- **Capacity:** What we can produce.

The production plan must reconcile these three factors while considering materials, timing, and quality.

---

# 3. Technical Explanation

Now let's introduce the professional concepts.

## 3.1 Production Planning in the S&OP Environment

In S&OP, Production Planning translates demand requirements into a feasible manufacturing plan.

The general relationship is:

1. **Demand Planning:** What customers are expected to require.
2. **Inventory Assessment:** What products are already available.
3. **Production Planning:** What quantity needs to be manufactured.
4. **Capacity and Material Validation:** Can the company actually manufacture it?
5. **Feasible Production Plan:** Agreed production quantities and timing.

Notice that production planning does not operate independently.

It needs information from:
- Demand Planning
- Inventory Management
- Procurement
- Manufacturing
- Supply Planning
- Finance

This is why Production Planning is an important part of the S&OP process.

## 3.2 Main Objectives of Production Planning

| Objective | Explanation | Business impact |
|---|---|---|
| Meet customer demand | Produce sufficient quantities | Better customer service |
| Maintain inventory | Avoid excessive or insufficient stocks | Better working capital |
| Optimize resources | Use available machines and workforce effectively | Higher productivity |
| Minimize production costs | Reduce unnecessary setups, overtime, and waste | Better profitability |
| Reduce delays | Plan materials and production timing | Improved schedule adherence |
| Support on-time delivery | Complete production before customer due dates | Higher delivery performance |

An important point: These objectives can sometimes conflict.

For example, producing in larger batches may reduce setup costs, but it can increase inventory.

This means production planning involves trade-offs, not just calculations.

## 3.3 Production Planning Inputs

Ito ang information na kailangan bago makagawa ng reliable production plan.

| Input | Meaning | Effect on production decision |
|---|---|---|
| Demand forecast | Expected future demand | Determines expected requirements |
| Customer orders | Confirmed customer requirements | Identifies committed demand |
| Finished goods inventory | Available completed products | Reduces additional production needed |
| WIP inventory | Products currently being manufactured | May reduce future production requirements |
| Raw material availability | Materials available for production | Determines material feasibility |
| Production capacity | Maximum achievable output under defined conditions | Determines production limits |
| Production rate | Output per unit of time | Determines production duration |
| Manufacturing lead time | Time required to manufacture a product | Determines when production must start |
| Workforce availability | Available operators and labor hours | Affects achievable output |
| Equipment availability | Available machines and operating hours | Affects production capability |
| Production yield | Proportion of input that becomes acceptable output | Determines required input quantity |
| Scrap rate | Proportion of production lost due to defects | Increases required production input |

Let's discuss some of the important inputs in more detail.

### A. Demand Forecast and Customer Orders

These represent the requirements that production must support.

- Forecast = expected demand.
- Customer order = actual customer commitment.

For example:

| Demand source | Quantity |
|---|---:|
| Forecast demand | 12,000 |
| Confirmed orders | 9,000 |

**Important:** Hindi automatic na 12,000 + 9,000 = 21,000 ang demand.

Why?

Because confirmed customer orders may already be included in the forecast.

Depending on the company's demand-planning methodology, you might use:
- Forecast only
- Customer orders only for the overlapping period
- Forecast consumption or order netting

The purpose is to avoid double-counting demand.

### B. Finished Goods Inventory

Finished Goods (FG) refers to products that have completed manufacturing and are available for sale or delivery.

Example:

- Required demand: 10,000 units
- Available FG: 3,000 units

The company needs to consider only the remaining requirement, subject to inventory policies and delivery timing.

### C. Work-in-Process Inventory

WIP refers to products that have already entered manufacturing but have not completed all required production processes.

For example, in MLCC manufacturing:

- Casting: Completed
- Stacking: Completed
- Cutting: Ongoing
- Firing: Not yet completed
- Electrical testing: Not yet completed

These products are WIP.

However, WIP should not automatically be counted as available finished goods.

Why?

Because the product may still require several operations before it becomes sellable.

WIP must be evaluated based on:
- Quantity
- Production stage
- Expected completion date
- Expected yield
- Remaining process requirements

### D. Raw Material Availability

Raw materials are the materials required to manufacture products.

For example:
- BT powder
- Binder
- Plasticizer
- Dispersant
- Solvents
- Packaging materials

If the company needs to manufacture 10,000 units but only has sufficient materials for 7,000 units, then material availability becomes a production constraint.

### E. Production Capacity

Capacity refers to the amount of output that manufacturing resources can produce within a specified period.

Example:

A machine can produce 500 units per hour.

If it operates for 8 hours per day over 20 working days:

\[
500 \times 8 \times 20 = 80,000
\]

The theoretical monthly output is 80,000 units.

But this assumes full productive time and no losses.

Actual capacity may be lower due to:
- Machine downtime
- Setup time
- Maintenance
- Quality losses
- Operator availability
- Product changeovers

We will distinguish theoretical, available, and effective capacity further in the next sections.

### F. Production Rate

Production rate measures how much output is produced within a specific period.

Examples:
- 500 units/hour
- 8,000 units/day
- 150,000 units/month

Higher production rates generally reduce the time required to produce a given quantity, assuming other conditions remain constant.

### G. Manufacturing Lead Time

Production lead time is the time between starting a manufacturing order and completing the required manufacturing process.

For example:

| Process | Duration |
|---|---:|
| Casting | 1 day |
| Stacking | 1 day |
| Cutting | 1 day |
| Firing | 2 days |
| Electrical testing | 1 day |
| Sorting | 1 day |
| **Total** | **7 days** |

The illustrative manufacturing lead time is 7 days.

If the customer requires delivery on November 30, the company cannot simply begin production on November 30.

It must plan backward from the required completion and delivery dates.

Also, actual elapsed lead time may be longer due to waiting time, queues, transportation, or rework.

### H. Production Yield and Scrap Rate

These are important because the number of units entering production may differ from the number of good units completed.

Example:

- Production input: 10,000 units
- Good output: 9,500 units
- Defective output: 500 units

Yield:

\[
\frac{9,500}{10,000}\times100=95\%
\]

Scrap rate:

\[
\frac{500}{10,000}\times100=5\%
\]

A 95% yield means that, on average, 95 out of every 100 units become acceptable output.

This will affect how many units the company must manufacture to satisfy demand.

---

# 4. Detailed Discussion

## 4.1 Production Planning Approaches

Hindi lahat ng manufacturing companies ay pare-pareho ang production strategy.

May companies na gumagawa muna ng products bago pa magkaroon ng customer orders. May companies naman na mag-uumpisa lang kapag may confirmed order na.

Mayroon ding companies na pinagsasama ang dalawang approach.

Let's discuss five important approaches.

### A. Make-to-Stock (MTS)

**Simple explanation:** Gumagawa muna ang company ng products at iniimbak ang finished goods bago pa dumating ang actual customer orders.

Example:

A manufacturer produces 50,000 standard capacitors every month based on its demand forecast.

Kahit wala pang customer na nag-order ng lahat ng 50,000 units, ginagawa na ito dahil expected na may demand.

**Technical explanation:**

Make-to-Stock is a production strategy where products are manufactured based on forecasted demand and stored as finished goods for future customer orders.

**MTS process:**

Demand Forecast → Production → Finished Goods Inventory → Customer Order and Delivery

**Advantages:**
- Faster customer delivery.
- Suitable for products with predictable demand.
- Allows continuous and stable production.
- Can improve production efficiency through larger batches.

**Limitations:**
- Risk of excess inventory.
- Forecast errors can result in unsold products.
- Requires inventory storage and working capital.
- Risk of obsolescence.

**Applications:**
- Standard electronic components.
- Common industrial supplies.
- Consumer products.
- Standardized products with relatively stable demand.

### B. Make-to-Order (MTO)

**Simple explanation:** Hindi gagawa ang company hangga't walang actual customer order.

Example:

A customer orders 5,000 customized electronic components with specific technical requirements.

The company starts manufacturing after confirming the order.

**Technical explanation:**

Make-to-Order is a production strategy where manufacturing activities are triggered by confirmed customer demand rather than solely by forecasted demand.

**MTO process:**

Customer Order → Production Planning → Manufacturing → Customer Delivery

**Advantages:**
- Lower finished goods inventory.
- Less risk of producing unwanted products.
- Better accommodation of customized requirements.
- Production is linked to actual demand.

**Limitations:**
- Longer customer lead time.
- Requires reliable material availability.
- Production capacity must accommodate incoming orders.
- Difficult to respond quickly to sudden demand increases.

**Applications:**
- Customized industrial equipment.
- Special electronic components.
- Products with unique specifications.
- Low-volume, high-variety manufacturing.

### C. Level Production Strategy

**Simple explanation:** Consistent ang production quantity kahit nagbabago ang demand.

Example:

| Month | Demand | Production |
|---|---:|---:|
| January | 8,000 | 10,000 |
| February | 12,000 | 10,000 |
| March | 10,000 | 10,000 |
| April | 9,000 | 10,000 |

Notice that production remains at 10,000 units per month.

Kapag mas mataas ang production kaysa demand, tumataas ang inventory.

Kapag mas mataas naman ang demand kaysa production, ginagamit ang previously accumulated inventory.

**Technical explanation:**

Level Production Strategy maintains a relatively constant production rate over a defined planning horizon, using inventory and sometimes backorders to absorb demand fluctuations.

**Advantages:**
- Stable workforce requirements.
- Predictable machine utilization.
- Fewer production adjustments.
- Potentially lower changeover costs.

**Limitations:**
- Inventory may accumulate during low-demand periods.
- Inventory may be insufficient during peak demand.
- Requires sufficient storage and working capital.

**Best suited for:**
- Products with predictable long-term demand.
- Manufacturing processes that benefit from stable production.
- Companies with sufficient inventory capacity.

### D. Chase Production Strategy

**Simple explanation:** Sinusundan ng production quantity ang demand.

Kapag mataas ang demand, tataasan ang production.

Kapag mababa ang demand, babawasan ang production.

Example:

| Month | Demand | Production |
|---|---:|---:|
| January | 8,000 | 8,000 |
| February | 12,000 | 12,000 |
| March | 10,000 | 10,000 |
| April | 9,000 | 9,000 |

**Technical explanation:**

Chase Production Strategy adjusts production output to closely match demand requirements during each planning period.

**Advantages:**
- Lower inventory requirements.
- Less risk of excess finished goods.
- Production closely follows demand.
- Potentially lower inventory holding costs.

**Limitations:**
- Requires flexible manufacturing capacity.
- May require overtime or additional shifts.
- Workforce utilization may fluctuate.
- Frequent production adjustments can increase costs.

**Best suited for:**
- Products with highly variable demand.
- Companies with flexible production resources.
- Manufacturing operations with scalable capacity.

### E. Hybrid Production Strategy

**Simple explanation:** Combination ng Level at Chase Production Strategy.

Hindi kailangang constant lahat ng production, pero hindi rin kailangang sundan nang eksakto ang demand every month.

Example:

| Month | Demand | Planned Production |
|---|---:|---:|
| January | 8,000 | 9,000 |
| February | 12,000 | 11,000 |
| March | 10,000 | 10,000 |
| April | 9,000 | 9,000 |

The company maintains relatively stable production but adjusts output when necessary.

**Advantages:**
- Balances inventory and capacity utilization.
- More flexible than pure level production.
- Avoids excessive workforce fluctuations.
- Can reduce the cost of frequent production changes.

**Limitations:**
- Requires more detailed planning.
- Needs accurate inventory and demand information.
- May still require overtime or inventory buffers.

**Applications:**
- Large manufacturing companies.
- Multi-product manufacturing environments.
- Companies with moderate demand fluctuations.

### Comparison of Production Strategies

| Strategy | Production behavior | Main advantage | Main risk |
|---|---|---|---|
| MTS | Based on forecast | Fast delivery | Excess inventory |
| MTO | Based on orders | Low FG inventory | Longer lead time |
| Level | Relatively constant | Stable operations | Inventory imbalance |
| Chase | Follows demand | Lower inventory | Capacity fluctuations |
| Hybrid | Combination | Balanced flexibility | Planning complexity |

**Important S&OP insight:**

A company does not necessarily use only one strategy for all products.

For example, an electronics manufacturer might use:

- MTS for standard capacitors.
- MTO for customized components.
- Hybrid production for products with seasonal demand.

The strategy can differ by product family, customer segment, and manufacturing constraints.

## 4.2 Production Planning Process

Now let's examine how companies develop an actual production plan.

The following is a simplified planning workflow.

### Step 1: Review Demand Requirements

Determine the expected quantity of products required during the planning period.

Sources:
- Demand forecast.
- Confirmed customer orders.
- Sales commitments.
- Backorders.
- Demand changes.

Example:

| Product | November Demand |
|---|---:|
| Product A | 12,000 |
| Product B | 8,000 |
| Product C | 5,000 |
| Total | 25,000 |

The company must determine how these requirements will be fulfilled.

### Step 2: Check Existing Inventory

Review available finished goods and expected WIP completions.

Example:

| Inventory | Product A |
|---|---:|
| Beginning finished goods | 2,000 |
| Expected WIP completion | 500 |

The 500 WIP units are expected to become finished goods within November.

Important: Only count WIP that is realistically expected to be completed and available when needed.

### Step 3: Calculate Net Production Requirements

Determine how many additional good units must be manufactured.

The calculation considers:

- Demand.
- Target ending inventory.
- Beginning inventory.
- Expected WIP completion.

We will discuss the formula in Section 6.

### Step 4: Check Material Availability

Determine whether sufficient raw materials are available.

Example:

| Material | Required | Available | Result |
|---|---:|---:|---|
| BT powder | 500 kg | 600 kg | Sufficient |
| Binder | 120 kg | 100 kg | Shortage |
| Solvent | 300 L | 350 L | Sufficient |

Even if the company has enough machine capacity, it cannot manufacture the complete planned quantity if critical materials are unavailable.

Procurement must therefore be coordinated with production planning.

### Step 5: Evaluate Production Capacity

Determine whether available machines and labor can produce the required quantities.

Consider:
- Available production hours.
- Machine operating rate.
- Planned downtime.
- Preventive maintenance.
- Changeover requirements.
- Workforce availability.

Example:

Required output: 11,000 good units.

Available production capacity: 12,000 units of production input.

If the expected yield is 95%, the good output capacity is:

\[
12,000 \times 95\%=11,400
\]

The company can theoretically meet the 11,000-unit good-output requirement.

### Step 6: Determine Production Quantities

Finalize the production quantity while considering:

- Net production requirements.
- Expected yield.
- Scrap rate.
- Lot-size restrictions.
- Material availability.
- Capacity limitations.

### Step 7: Establish Production Timing

Determine when production should begin and when it should finish.

Example:

Required completion: November 30.

Manufacturing lead time: 7 days.

The company should plan to start manufacturing early enough to complete the product before the required date.

Additional buffer may be needed for inspection, transportation, and unexpected delays.

### Step 8: Review Constraints

Check whether the proposed plan is realistically achievable.

Typical constraints include:

| Constraint | Possible action |
|---|---|
| Raw material shortage | Expedite procurement |
| Machine capacity shortage | Overtime or additional shift |
| Labor shortage | Workforce reallocation |
| Long production lead time | Start earlier |
| High scrap rate | Improve yield |
| Equipment downtime | Reschedule production |

### Step 9: Finalize and Communicate the Production Plan

Once validated, communicate the agreed plan to relevant departments.

Typical information:

- Product or product family.
- Planned production quantity.
- Production period.
- Expected completion date.
- Required materials.
- Capacity requirements.
- Identified constraints.
- Action owners.

The final plan becomes an important input to manufacturing execution and production scheduling.

## 4.3 Important Production Planning Concepts

Let's establish the terminology that you will encounter in actual S&OP work.

| Concept | Explanation |
|---|---|
| Gross Production Requirements | Total production requirement before considering available inventory and scheduled supply |
| Net Production Requirements | Additional production needed after accounting for usable inventory and expected supply |
| Production Lot Size | Quantity produced in one manufacturing batch or production order |
| Production Rate | Output produced per unit of time |
| Production Lead Time | Time needed to complete manufacturing |
| Planned Production Quantity | Quantity scheduled or intended to be manufactured |
| Beginning Inventory | Inventory available at the start of a period |
| Ending Inventory | Inventory remaining at the end of a period |
| WIP | Products currently undergoing manufacturing |

### A. Gross Production Requirements

This represents the total requirement that must be covered before deducting available inventory.

For example:

- Demand: 10,000 units.
- Target ending inventory: 2,000 units.

Gross production requirement:

\[
10,000+2,000=12,000
\]

This is the total quantity that must be available from beginning inventory and incoming supply.

### B. Net Production Requirements

This represents the additional production needed after considering available inventory and other expected supply.

Example:

- Gross requirement: 12,000.
- Beginning inventory: 3,000.
- Expected WIP completion: 1,000.

Net production requirement:

\[
12,000-3,000-1,000=8,000
\]

The company needs another 8,000 good units.

### C. Production Lot Size

A production lot is a defined quantity manufactured together under a production order or batch.

Example:

Required production: 10,000 units.

Minimum practical lot size: 2,000 units.

The company may produce five lots of 2,000 units each.

Why does lot size matter?

Because manufacturing often has setup costs and minimum batch requirements.

For example, cleaning and preparing a machine may take two hours regardless of whether you produce 500 or 2,000 units.

Producing larger lots may reduce setup frequency but can increase inventory.

### D. Production Rate

Production rate measures output over time.

Example:

A line produces 600 units per hour.

Its rate is:

\[
600\text{ units/hour}
\]

### E. Production Lead Time

Production lead time refers to the time required to manufacture a product from production start to completion.

It may include:
- Processing time.
- Setup time.
- Waiting time.
- Inspection time.
- Internal movement time.

Not every company calculates lead time using exactly the same boundaries, so always clarify the company's definition.

### F. Beginning and Ending Inventory

Beginning inventory is the available stock at the start of the planning period.

Ending inventory is the stock remaining after demand has been fulfilled and planned supply has been received.

The relationship is:

\[
Ending\ Inventory =
Beginning\ Inventory + Supply - Demand
\]

Where supply may include completed production, receipts, and other valid incoming supply.

### G. Work-in-Process (WIP)

WIP is inventory that has entered manufacturing but has not yet become finished goods.

It is important because it represents resources already committed to production.

However, WIP is not necessarily immediately available to fulfill customer demand.

---

# 5. Practical Examples and Applications

Let's now apply the concepts using a realistic electronic components manufacturing scenario.

## 5.1 Scenario: Electronic Components Manufacturer

Imagine a company manufacturing electronic capacitors.

The company is preparing its November production plan.

Its main objective is to fulfill customer demand while maintaining the desired ending inventory.

The planning team collects the following data.

### A. Monthly Production Planning Dataset

**Illustrative business data**

| Planning input | Value | Unit |
|---|---:|---|
| Beginning FG inventory | 2,000 | Units |
| November demand forecast | 12,000 | Units |
| Confirmed customer orders | 9,000 | Units |
| Expected WIP completion | 500 | Good units |
| Target ending inventory | 1,500 | Units |
| Production yield | 95% | % |
| Scrap rate | 5% | % |
| Available raw materials | 11,700 | Input-unit equivalent |
| Available production capacity | 12,000 | Input units |

**Important assumption:** The 9,000 confirmed orders are already included in the 12,000-unit forecast. Therefore, we will use 12,000 units as total demand, not 21,000 units.

The expected 500 WIP units are assumed to complete production within November and become usable finished goods.

For simplicity, raw material availability is expressed as the number of equivalent production input units that can be supported by available materials.

## 5.2 Step 1: Determine Total Demand

Forecast demand:

\[
12,000\text{ units}
\]

Confirmed orders are already included, so:

\[
Total\ Demand=12,000
\]

## 5.3 Step 2: Determine Gross Production Requirement

Formula:

\[
Gross\ Requirement=Demand+Target\ Ending\ Inventory
\]

Substitute:

\[
=12,000+1,500
\]

**13,500 units**

This is the total supply required to cover November demand and the desired ending inventory.

## 5.4 Step 3: Determine Net Production Requirement

We must account for existing FG inventory and expected WIP completion.

\[
Net\ Requirement =
Gross\ Requirement - Beginning\ FG - Expected\ WIP
\]

Substitute:

\[
=13,500-2,000-500
\]

**11,000 good units**

Therefore, the company needs to manufacture another 11,000 good units.

## 5.5 Step 4: Adjust for Production Yield

The 11,000 units represent good finished products.

But manufacturing has a 95% yield.

Therefore, the company must start with more than 11,000 input units.

\[
Production\ Input =
\frac{Required\ Good\ Output}{Yield}
\]

\[
=\frac{11,000}{0.95}
\]

\[
=11,578.95
\]

Since the company cannot start a fraction of a unit:

\[
Production\ Input=11,579\text{ units}
\]

Expected scrap:

\[
11,579-11,000\approx579\text{ units}
\]

This is an approximate planning result because actual yield and scrap are variable.

## 5.6 Step 5: Check Raw Material Availability

| Item | Quantity |
|---|---:|
| Required production input | 11,579 |
| Available material equivalent | 11,700 |
| Remaining material equivalent | 121 |

**Material feasible**

Available materials are sufficient for the planned production quantity.

However, in an actual manufacturing environment, each raw material must be validated individually through its Bill of Materials (BOM).

A total material-equivalent figure alone is not enough to establish full material feasibility.

## 5.7 Step 6: Check Production Capacity

| Item | Quantity |
|---|---:|
| Required production input | 11,579 |
| Available capacity | 12,000 |
| Remaining capacity | 421 |

**Capacity feasible**

The company has enough production capacity to manufacture the required input quantity.

Utilization:

\[
Capacity\ Utilization =
\frac{Required\ Production\ Input}{Available\ Capacity}
\times100
\]

\[
=\frac{11,579}{12,000}\times100
\]

\[
=96.49\%
\]

This means approximately 96.49% of available production capacity will be used.

**Business interpretation:** Feasible ang plan mathematically, pero relatively mataas ang capacity utilization. Kaunti na lang ang remaining capacity for unexpected downtime, rework, or additional demand.

## 5.8 Step 7: Determine Projected Ending Inventory

The inventory equation is:

\[
Ending\ Inventory =
Beginning\ FG + WIP\ Completion + Good\ Production - Demand
\]

Substitute:

\[
=2,000+500+11,000-12,000
\]

\[
=1,500\text{ units}
\]

**Target achieved**

The projected ending inventory matches the company's target.

## 5.9 Final Production Plan

**November Production Plan**

| Metric | Result |
|---|---:|
| Required good output | 11,000 units |
| Production input | 11,579 units |
| Capacity utilization | 96.49% |
| Ending inventory | 1,500 units |
| Material availability | Sufficient |
| Production capacity | Sufficient |
| Target inventory | Achieved |

**Interpretation:**

The company can meet its expected demand and achieve its target ending inventory using the available materials and production capacity.

However, the plan has limited capacity headroom.

An S&OP analyst should flag this to Manufacturing because any significant downtime or yield deterioration could create a supply shortage.

This is the difference between simply calculating production requirements and evaluating whether the plan is operationally realistic.

---

# 6. Formulas and Calculations

This section is particularly important because these are the calculations you may encounter when reviewing production plans in Excel, ERP systems, or supply planning reports.

Let's organize the formulas and understand when to use each one.

## 6.1 Net Production Requirement

**Purpose:** Determine how many additional good units must be manufactured after considering existing inventory and expected incoming supply.

Formula:

\[
NPR=D+EI-BI-WIP
\]

Where:

| Variable | Definition | Unit |
|---|---|---|
| NPR | Net Production Requirement | Units |
| D | Demand | Units |
| EI | Target Ending Inventory | Units |
| BI | Beginning Finished Goods Inventory | Units |
| WIP | Expected usable WIP completion | Good units |

Example:

- Demand = 15,000 units
- Target ending inventory = 2,000 units
- Beginning inventory = 3,000 units
- Expected WIP completion = 1,000 units

Step 1:

\[
Gross\ Requirement=15,000+2,000
\]

\[
=17,000
\]

Step 2:

\[
NPR=17,000-3,000-1,000
\]

\[
\boxed{NPR=13,000\ units}
\]

**Interpretation:** The company must manufacture another 13,000 good units.

Important assumptions:
- Beginning inventory is usable and available.
- WIP is expected to complete within the required period.
- Demand is not double-counted.
- No other incoming supply is being considered.

If there are other scheduled receipts or production completions, these must also be considered.

## 6.2 Production Quantity with Yield Consideration

**Purpose:** Determine how many input units must enter production to achieve the required good output.

Formula:

\[
Production\ Input=
\frac{Required\ Good\ Output}{Yield}
\]

Where:
- Production Input = units entering manufacturing.
- Required Good Output = acceptable finished units required.
- Yield = percentage of input that becomes acceptable output, expressed as a decimal.

Example:

Required good output = 20,000 units.

Expected yield = 96%.

Step 1: Convert yield into decimal.

\[
96\%=0.96
\]

Step 2: Calculate required production input.

\[
=\frac{20,000}{0.96}
\]

\[
\boxed{20,833.33\ units}
\]

Rounded up:

\[
20,834\ units
\]

Expected scrap:

\[
20,834-20,000=834\ units
\]

**Interpretation:** The company should start approximately 20,834 units to obtain 20,000 good units, assuming the 96% yield is achieved.

### Yield vs. Scrap Rate

These two terms are related.

\[
Yield=1-Scrap\ Rate
\]

For example:

- Yield = 95%
- Scrap rate = 5%

However, this assumes all non-good units are classified as scrap. In real manufacturing, some rejected units may be reworked or recovered, so the definitions must be checked.

**Common mistake:**

Incorrect:

\[
20,000\times1.05=21,000
\]

Correct:

\[
\frac{20,000}{0.95}=21,052.63
\]

Why?

Because scrap is calculated as a percentage of input, not as a percentage of the required good output.

## 6.3 Production Rate

**Purpose:** Determine how much output a manufacturing line produces per unit of time.

Formula:

\[
Production\ Rate=
\frac{Total\ Output}{Production\ Time}
\]

Where:
- Total Output = units produced.
- Production Time = operating time.

Example:

A machine produces 4,800 units in 8 hours.

\[
Rate=\frac{4,800}{8}
\]

\[
\boxed{600\ units/hour}
\]

**Interpretation:** The machine produces an average of 600 units per operating hour.

Be careful with the type of output being measured.

Production rate may refer to:
- Gross input rate.
- Total processed output.
- Good finished output.

For production planning, good output per hour is often more useful when evaluating whether customer demand can be fulfilled.

## 6.4 Production Time

**Purpose:** Determine how long it will take to produce the required quantity.

Formula:

\[
Production\ Time=
\frac{Required\ Production\ Quantity}{Production\ Rate}
\]

Example:

- Required good output = 12,000 units.
- Good production rate = 600 units/hour.

\[
Time=\frac{12,000}{600}
\]

\[
\boxed{20\ hours}
\]

If the company operates for 8 productive hours per day:

\[
Days=\frac{20}{8}
\]

\[
\boxed{2.5\ days}
\]

**Important limitation:** This calculation assumes the rate is constant and does not separately account for setup, downtime, waiting time, or changeovers.

## 6.5 Projected Ending Inventory

**Purpose:** Estimate how much finished goods inventory will remain after satisfying demand.

Formula:

\[
PEI=BI+S-D
\]

Where:

| Variable | Definition |
|---|---|
| PEI | Projected Ending Inventory |
| BI | Beginning Inventory |
| S | Total usable supply received during the period |
| D | Demand during the period |

For a manufacturing example:

- Beginning FG = 5,000 units
- WIP completion = 1,000 units
- New good production = 10,000 units
- Demand = 13,000 units

Total supply:

\[
S=1,000+10,000=11,000
\]

Projected ending inventory:

\[
PEI=5,000+11,000-13,000
\]

\[
\boxed{PEI=3,000\ units}
\]

**Interpretation:** The company will have 3,000 units remaining after fulfilling demand.

If the target ending inventory is 4,000 units, the company has an inventory gap of:

\[
4,000-3,000=1,000\ units
\]

This indicates that additional production or another supply source may be needed.

## 6.6 Additional Useful Formula: Capacity Utilization

Although not explicitly included in your requested formula list, this is very useful when evaluating production plans.

\[
Capacity\ Utilization=
\frac{Required\ Capacity}{Available\ Capacity}
\times100
\]

Example:

- Required capacity = 9,000 machine hours.
- Available capacity = 10,000 machine hours.

\[
=\frac{9,000}{10,000}\times100
\]

\[
\boxed{90\%}
\]

Interpretation:

The company is using 90% of its available capacity.

The remaining 10% represents unused capacity, assuming both values use the same capacity basis.

A high utilization level does not automatically mean the operation is efficient. If there is insufficient capacity buffer, the company may struggle when unexpected problems occur.

---

# 7. Business Perspective and Decision-Making

Now let's move beyond the calculations.

This section introduces how an S&OP Analyst uses production planning information to support business decisions.

## 7.1 What Does an S&OP Analyst Actually Review?

An S&OP Analyst does not necessarily decide the exact machine sequence or daily production schedule.

Instead, the analyst helps determine whether the proposed production plan can support the business requirements.

Typical responsibilities include:

### A. Compare Demand Against Planned Production

Example:

| Metric | Quantity |
|---|---:|
| Demand | 20,000 |
| Planned good production | 15,000 |
| Available beginning inventory | 2,000 |
| Expected WIP completion | 1,000 |

Total available supply:

\[
15,000+2,000+1,000=18,000
\]

Supply gap:

\[
20,000-18,000=2,000
\]

**2,000-unit supply gap**

The analyst should identify why the plan cannot meet demand.

Possible causes:
- Insufficient capacity.
- Material shortages.
- Equipment downtime.
- Unrealistic production assumptions.
- Inaccurate production yield.

The analyst then coordinates with the relevant departments to evaluate possible solutions.

### B. Evaluate Inventory Implications

Consider two scenarios:

| Metric | Scenario A | Scenario B |
|---|---:|---:|
| Beginning inventory | 5,000 | 5,000 |
| Production | 15,000 | 20,000 |
| Demand | 17,000 | 17,000 |
| Ending inventory | 3,000 | 8,000 |

Scenario A produces a lower ending inventory.

Scenario B produces 5,000 additional units.

Which is better?

It depends on the target inventory, future demand, storage capacity, and financial implications.

Higher inventory is not automatically better because it ties up working capital.

Lower inventory is not automatically better because it may increase shortage risk.

### C. Evaluate Production Constraints

A production constraint is any factor that limits the company's ability to manufacture the required output.

Example:

Demand requirement: 15,000 good units.

Available production capacity: 14,000 input units.

Expected yield: 95%.

Maximum good output:

\[
14,000\times0.95=13,300
\]

Production gap:

\[
15,000-13,300=1,700
\]

The company cannot achieve the required production quantity using the available capacity.

Possible actions:

1. Add overtime.
2. Introduce another production shift.
3. Transfer production to another line.
4. Outsource part of the production.
5. Prioritize critical customer orders.
6. Negotiate delivery schedules, if necessary.

An S&OP Analyst helps quantify the gap and communicate the business impact.

### D. Coordinate With Other Departments

Production Planning is cross-functional.

| Department | Information or responsibility |
|---|---|
| Sales | Customer requirements and order changes |
| Demand Planning | Forecast and demand assumptions |
| Manufacturing | Production capability and constraints |
| Procurement | Raw material availability and supplier commitments |
| Inventory/Warehouse | FG, WIP, and material inventory |
| Finance | Production costs, inventory value, and financial implications |
| Supply Planning | Reconciliation of supply against demand |

The analyst must ensure that departments are working with consistent assumptions and data.

## 7.2 Connection to Supply Review

Remember Topic 4.1: Supply Planning determines how the company will meet demand using its available resources.

Production Planning provides an important part of that supply assessment.

During Supply Review, the team may evaluate:

- Can manufacturing meet the demand forecast?
- Is the production plan achievable?
- Are there material shortages?
- Are machines operating within available capacity?
- Is there enough production buffer?
- Will projected inventory meet the target?
- Are additional resources required?

The result should be a supply plan that is operationally feasible or a clearly documented list of constraints requiring management decisions.

## 7.3 Example of a Professional S&OP Discussion

Imagine that Manufacturing submits its proposed November production plan.

**Manufacturing's proposed plan**

- Demand requirement: 20,000 units
- Planned good production: 18,000 units
- Beginning inventory: 1,000 units
- Expected WIP completion: 500 units
- Target ending inventory: 2,000 units

Total projected supply:

\[
18,000+1,000+500=19,500
\]

Projected ending inventory:

\[
19,500-20,000=-500
\]

**500-unit shortage**

**Recommended discussion**

1. Can Manufacturing increase production by 500 good units?
2. Are additional raw materials available?
3. Is overtime or additional capacity feasible?
4. Can another production line support the requirement?
5. What is the impact if the shortage cannot be resolved?

Notice something important:

Hindi basta sasabihin ng analyst na kulang ang production.

Dapat niyang ipakita:
- How much is the shortage?
- Why is it happening?
- What is the business impact?
- What options are available?
- What decision is needed?

That is the transition from basic production planning knowledge to professional S&OP analysis.

## 7.4 Important Business Trade-offs

| Decision | Potential benefit | Potential disadvantage |
|---|---|---|
| Increase production | More supply | Higher costs and inventory |
| Reduce production | Lower inventory and cost | Possible shortages |
| Add overtime | Additional capacity | Higher labor costs |
| Increase lot size | Fewer setups | More WIP and inventory |
| Maintain constant output | Stable operations | Inventory fluctuations |
| Expedite materials | Faster material availability | Additional procurement/logistics costs |

A good production plan balances customer service, inventory, capacity, and cost.

---

# 8. Key Takeaways

Let's consolidate what you should remember from Topic 4.2.

## 8.1 Core Concepts

| Concept | Remember this |
|---|---|
| Production Planning | Determines what, how much, and when to produce |
| Production Scheduling | Determines the detailed timing and sequence |
| Production Execution | Actual manufacturing activities |
| MTS | Produce based on forecast |
| MTO | Produce based on confirmed orders |
| Level Strategy | Maintain relatively constant production |
| Chase Strategy | Adjust production to follow demand |
| Hybrid Strategy | Combine different production approaches |
| Gross Requirement | Total requirement before deducting available supply |
| Net Requirement | Additional good output required |
| Production Yield | Percentage of input that becomes acceptable output |
| WIP | Products still undergoing manufacturing |
| Capacity | Available manufacturing capability |
| Production Lead Time | Time required to manufacture products |

## 8.2 Five Important Formulas

**1. Net Production Requirement**

\[
NPR=D+TEI-BI-WIP
\]

**2. Production Input with Yield**

\[
Input=\frac{Required\ Good\ Output}{Yield}
\]

**3. Production Rate**

\[
Rate=\frac{Output}{Time}
\]

**4. Production Time**

\[
Time=\frac{Required\ Quantity}{Production\ Rate}
\]

**5. Projected Ending Inventory**

\[
PEI=BI+Supply-Demand
\]

## 8.3 What You Should Understand Before Proceeding

You should now be able to explain:

1. Why production quantity is not necessarily equal to demand.
2. Why existing inventory reduces additional production requirements.
3. Why WIP must be evaluated based on expected completion.
4. Why yield and scrap affect required production input.
5. Why production capacity must be checked before finalizing a plan.
6. Why production strategies differ depending on demand behavior.
7. Why a mathematically correct production plan may still be operationally infeasible.

**Most important lesson:**

A production plan is not simply a target quantity. It is a coordinated plan that must balance demand, inventory, materials, capacity, timing, and manufacturing performance.

---

# 9. Knowledge Check and Exercises

Time to test your understanding.

This assessment will progress through three learning levels:

- **Level 1 – Understanding:** Understand fundamental concepts and terminology.
- **Level 2 – Technical Application:** Apply formulas and calculate production requirements.
- **Level 3 – Professional Analysis:** Evaluate business situations and recommend actions.

Do not worry about getting everything correct. The objective is to identify which concepts you already understand and which ones need further practice.

## Exercise 1: Conceptual Understanding

**Level 1**

Answer using your own understanding.

1. What is the primary purpose of Production Planning, and why can't a company simply produce the same quantity as its demand?

2. Explain the difference between Production Planning, Production Scheduling, and Production Execution. Give one manufacturing example for each.

3. A company uses Make-to-Stock (MTS). Why does it need an accurate demand forecast?

4. What is the difference between Level Production and Chase Production strategies?

5. Why should WIP not automatically be treated as available Finished Goods Inventory?

## Exercise 2: Production Planning Calculations

**Level 2**

A manufacturing company produces electronic capacitors.

The following information is available for December:

| Planning information | Quantity |
|---|---:|
| Beginning FG inventory | 4,000 units |
| Demand forecast | 18,000 units |
| Confirmed orders | 14,000 units |
| Expected WIP completion | 1,500 units |
| Target ending inventory | 3,000 units |
| Production yield | 96% |
| Available raw material capacity | 17,000 input units |
| Available production capacity | 18,000 input units |

**Assumption:** Confirmed orders are already included in the forecast.

Answer the following:

**Question 1.** What is the total demand requirement?

**Question 2.** Calculate the gross production requirement.

**Question 3.** Calculate the net production requirement in good units.

**Question 4.** Considering the 96% yield, how many input units must enter production?

**Question 5.** Is the available raw material sufficient?

**Question 6.** Is the available production capacity sufficient?

**Question 7.** Calculate the projected ending inventory if the company produces the required good output.

Show your calculations, not just the final answers.

## Exercise 3: Production Planning Scenario

**Level 3**

Imagine that you are an S&OP Analyst reviewing the January production plan.

Manufacturing submits the following information:

| Metric | Value |
|---|---:|
| Demand | 25,000 units |
| Beginning inventory | 4,000 units |
| Expected WIP completion | 1,000 units |
| Planned good production | 18,000 units |
| Target ending inventory | 3,000 units |
| Production yield | 95% |
| Available production capacity | 20,000 input units |

Answer these questions:

1. Calculate the projected ending inventory.
2. Is the company able to achieve its target ending inventory?
3. If not, how many additional good units are required?
4. How many additional input units are needed to produce the shortage, assuming 95% yield?
5. Is the available production capacity sufficient to cover the additional requirement?
6. What would you recommend to Manufacturing?

**Professional analysis question:**

Suppose Manufacturing says that it cannot increase production because of limited machine availability.

As an S&OP Analyst, what information would you request, and what alternative solutions would you evaluate before presenting the issue during Supply Review?

## How to Submit Your Answers

You can answer one exercise at a time or submit all three together.

### How the answers will be evaluated

Responses will be assessed based on:

- Conceptual understanding and technical accuracy.
- Correct formula selection.
- Step-by-step calculation accuracy.
- Interpretation of numerical results.
- Practical business reasoning.
- Quality of recommendations.

The objective is to explain why an answer is correct or incorrect, rather than simply give a score.

---

## Lesson Completion: Topic 4.2

**Lecture completed**

You have covered the fundamentals of Production Planning, from understanding basic production requirements to evaluating production feasibility and supporting S&OP decisions.

**Recommendation:** Pay particular attention to the relationship between Net Production Requirement, Production Yield, and Available Capacity. These three concepts are especially important when reviewing manufacturing plans.

We will remain on Topic 4.2 until you've completed the exercises and are comfortable with the concepts.

**Topic 4.3 will remain untouched until you explicitly confirm that you're ready.**
