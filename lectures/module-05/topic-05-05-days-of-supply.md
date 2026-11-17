# Module 5 – Inventory Management
## Topic 5.5: Days of Supply (DOS)

**Level 1 → Level 2 → Level 3**  
**S&OP Fundamentals**

**Learning Objective:** Understand how to calculate, interpret, and use Days of Supply (DOS) to determine how long current inventory can support expected material consumption or customer demand.

---

# 1. Topic Overview

Imagine that you're managing a manufacturing plant.

You currently have 10,000 kg of raw material in your warehouse. Your production consumes 1,000 kg every day.

A simple question arises:

**How many days can your current inventory support production?**

The answer is 10 days.

This is the basic idea behind Days of Supply (DOS).

In inventory management, knowing how many kilograms of material you have is important. However, knowing how long that inventory will last is often more useful for operational decision-making.

For example:

| Material | Inventory | Daily Consumption | Coverage |
|---|---:|---:|---:|
| Material A | 10,000 kg | 1,000 kg/day | 10 days |
| Material B | 10,000 kg | 500 kg/day | 20 days |
| Material C | 10,000 kg | 2,000 kg/day | 5 days |

Notice that all three materials have exactly the same inventory quantity.

But their inventory coverage is different because their consumption rates are different.

This is why companies monitor DOS.

### Why is DOS important in S&OP?

DOS helps answer several important business questions:

- How long can our inventory support production?
- Which materials are at risk of running out?
- Will incoming purchase orders arrive before inventory is depleted?
- Are we holding too much inventory?
- Which materials require immediate procurement attention?
- Do we need to adjust production schedules?

**Connection to previous topics:**

| Previous Topic | Relationship to DOS |
|---|---|
| 5.3 Inventory Position | Determines the inventory available or expected after considering supply and demand commitments. |
| 5.4 Average Daily Usage (ADU) | Provides the daily consumption rate used to calculate DOS. |
| 5.5 Days of Supply | Combines inventory quantity and consumption rate to measure inventory coverage. |
| 5.6 Lead Time and Safety Stock | Helps determine whether inventory coverage is sufficient to survive the replenishment period and unexpected demand. |

Think of the relationship this way:

**Inventory Position tells us how much inventory we have or expect to have.**

**ADU tells us how quickly we consume it.**

**DOS tells us how long it will last.**

---

# 2. Layman's Explanation

## 2.1 What DOS means in everyday life

Imagine you have a 20-liter container of drinking water.

You consume 2 liters every day.

How long will your water last?

\[
20 \div 2 = 10 \text{ days}
\]

You have enough water for 10 days.

Now imagine that your consumption increases to 4 liters per day.

\[
20 \div 4 = 5 \text{ days}
\]

Your water supply now lasts only five days.

Notice something important:

You didn't lose any water. Your inventory quantity remained at 20 liters.

What changed was your consumption rate.

This is exactly how DOS works in manufacturing.

For example:

- Raw material inventory = 20,000 kg
- Daily production consumption = 2,000 kg/day
- Inventory coverage = 10 days

If production increases and daily consumption becomes 4,000 kg/day, your coverage decreases to five days.

**The important principle: DOS depends on both inventory quantity and consumption rate.**

A large inventory does not necessarily mean sufficient supply. If consumption is extremely high, the inventory may still run out quickly.

---

# 3. Technical Explanation

## 3.1 What is Days of Supply?

**Days of Supply (DOS)** is an inventory performance and planning metric that estimates the number of days an inventory quantity can support expected consumption or demand at a given daily usage rate.

It is commonly used in:

- Inventory management
- Material planning
- Procurement
- Production planning
- Supply chain monitoring
- Sales and Operations Planning

DOS is a time-based measurement of inventory coverage.

Unlike inventory quantity, which is expressed in physical units such as kilograms, pieces, or liters, DOS is expressed in days.

## 3.2 Understanding the three inventory measurements

It is important to distinguish between inventory quantity, inventory position, and DOS.

| Measurement | What it tells us | Unit |
|---|---|---|
| Inventory Quantity | How much inventory physically exists | kg, pcs, liters |
| Inventory Position | Current inventory adjusted for relevant incoming supply and outstanding demand commitments | kg, pcs, liters |
| Days of Supply | How long a selected inventory quantity can support consumption | Days |

Let's use an example:

- On-hand inventory = 10,000 kg
- Incoming purchase orders = 5,000 kg
- Allocated inventory = 2,000 kg
- ADU = 1,000 kg/day

Depending on the inventory measure selected:

- Physical inventory = 10,000 kg
- Available inventory = 8,000 kg, assuming allocations are deducted
- Simplified inventory position = 13,000 kg, assuming incoming supply is included and allocations are deducted

Their DOS values will be different.

This distinction becomes especially important when communicating inventory coverage to procurement and production teams.

---

# 4. Detailed Discussion

## 4.1 DOS Fundamentals

There are three important concepts to understand.

**A. Inventory Coverage**

Inventory coverage refers to the period that inventory can support expected consumption.

For example:

A material with 15 DOS means that the selected inventory quantity can theoretically support 15 days of consumption at the assumed daily usage rate.

**B. Inventory Depletion**

Inventory depletion occurs when inventory decreases because of production consumption, customer shipments, scrap, or other inventory movements.

As inventory decreases, DOS generally decreases if consumption remains constant.

**C. Consumption Rate**

Consumption rate determines how quickly inventory is used.

In our previous topic, we discussed Average Daily Usage (ADU).

ADU becomes the denominator in our basic DOS calculation.

## 4.2 DOS Calculation: Basic Formula

### Basic Days of Supply Formula

\[
DOS = \frac{Inventory\ Quantity}{Average\ Daily\ Usage}
\]

**Where:**

- DOS = Days of Supply (days)
- Inventory Quantity = Selected inventory balance (kg, pcs, liters)
- ADU = Average Daily Usage (kg/day, pcs/day, liters/day)

Result: Days.

### Example 1: Basic DOS

Assume the following:

| Parameter | Value |
|---|---:|
| On-hand inventory | 15,000 kg |
| Average Daily Usage | 1,500 kg/day |

**Step 1: Identify the formula.**

\[
DOS = \frac{Inventory}{ADU}
\]

**Step 2: Substitute the values.**

\[
DOS = \frac{15,000}{1,500}
\]

**Step 3: Calculate.**

\[
\boxed{DOS = 10\text{ days}}
\]

**Interpretation:**

Your current inventory can theoretically support 10 days of consumption, assuming daily usage remains at 1,500 kg.

However, this does not automatically mean that production is safe for 10 days.

We still need to consider:

- Incoming purchase orders
- Material allocations
- Supplier lead time
- Production schedule
- Safety stock
- Unexpected consumption

These factors will become increasingly important in the succeeding sections.

## 4.3 Different Inventory Measures Used in DOS

This is one of the most important parts of the lesson.

Companies can calculate DOS using different inventory balances depending on the purpose of the analysis.

Let's use the following scenario:

| Inventory Component | Quantity |
|---|---:|
| On-hand inventory | 15,000 kg |
| Allocated inventory | 3,000 kg |
| Incoming purchase orders | 5,000 kg |
| ADU | 1,500 kg/day |

### A. On-hand DOS

This uses the physical inventory currently recorded in the warehouse.

\[
DOS_{On-hand}=\frac{15,000}{1,500}
\]

\[
\boxed{10\text{ days}}
\]

**Meaning:** The physical inventory currently on hand represents 10 days of consumption.

### B. Available Inventory DOS

Available inventory is the quantity that remains after accounting for inventory already allocated or reserved for other requirements.

\[
Available\ Inventory=On-hand-Allocated
\]

\[
=15,000-3,000
\]

\[
=12,000\text{ kg}
\]

Then:

\[
DOS_{Available}=\frac{12,000}{1,500}
\]

\[
\boxed{8\text{ days}}
\]

**Meaning:** Only eight days of inventory coverage remain available for additional requirements, under these assumptions.

### C. Inventory Position DOS

Inventory position considers current inventory, incoming supply, and outstanding commitments.

For this simplified example:

\[
Inventory\ Position=On-hand+Incoming-Allocated
\]

\[
=15,000+5,000-3,000
\]

\[
=17,000\text{ kg}
\]

Therefore:

\[
DOS_{Position}=\frac{17,000}{1,500}
\]

\[
\boxed{11.33\text{ days}}
\]

**Meaning:** Including the incoming purchase order, the simplified inventory position represents approximately 11.33 days of coverage.

### Comparison of the three DOS measurements

| Inventory Measure | Quantity | DOS |
|---|---:|---:|
| On-hand | 15,000 kg | 10 days |
| Available | 12,000 kg | 8 days |
| Position | 17,000 kg | 11.33 days |

The inventory measure changes the result, even though the ADU remains the same.

**Important:** These three measurements answer different questions. Do not interchange them without explaining what inventory is included.

Also, actual inventory-position definitions vary by company and ERP system. Some companies include only firm, usable purchase orders. Others consider open production orders, transfer orders, quality holds, or additional commitments.

An incoming purchase order should not automatically be treated as physically available inventory.

## 4.4 Calendar Days versus Working Days

Another important consideration is the definition of a day.

Companies may calculate DOS using:

1. Calendar days
2. Working days
3. Production or operating days

### Calendar-day DOS

Includes every day:

- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
- Saturday
- Sunday

Example:

- Inventory = 7,000 kg
- Consumption = 1,000 kg per calendar day

\[
DOS=\frac{7,000}{1,000}=7\text{ calendar days}
\]

### Working-day DOS

Includes only the company's designated working days.

Example:

- Inventory = 7,000 kg
- Consumption = 1,000 kg per working day
- Operating schedule = 5 days per week

\[
DOS=\frac{7,000}{1,000}=7\text{ working days}
\]

Seven working days are not necessarily seven calendar days.

If the company operates Monday to Friday, seven working days would span approximately nine calendar days when starting on a Monday, assuming no holidays.

### Why does this distinction matter?

Imagine a manufacturing facility that operates continuously, 24 hours a day, seven days a week.

Using working-day calculations based on a Monday-to-Friday schedule could overestimate inventory coverage.

On the other hand, a factory that operates only five days per week may need working-day calculations for its production material planning.

**Professional consideration:** Always ensure that the inventory period, ADU calculation, supplier lead time, and DOS interpretation use compatible time units.

For example, don't compare 10 working days of DOS directly against 12 calendar days of supplier lead time without converting them to the same basis.

## 4.5 Choosing the Appropriate Inventory Quantity and ADU

DOS is only as reliable as the numbers used to calculate it.

Consider these inventory measures:

| Inventory Measure | Appropriate Use |
|---|---|
| On-hand | Understanding physical inventory coverage |
| Available | Understanding coverage after reservations and allocations |
| Inventory position | Understanding broader supply coverage, including qualifying incoming supply |

Now consider different consumption rates:

| Usage Rate | What It Represents |
|---|---|
| Historical ADU | Average actual consumption over a previous period |
| Forecast ADU | Expected future consumption based on the demand forecast |
| Production-based ADU | Expected consumption based on the production plan |
| Adjusted ADU | Usage adjusted for known changes in demand or operating conditions |

Which one should an S&OP analyst use?

It depends on the business question.

For example:

- Historical ADU is useful for understanding past consumption.
- Forecast ADU is useful for anticipating future inventory coverage.
- Production-based ADU is useful for raw materials whose consumption depends on the manufacturing schedule.

A material that historically consumed 1,000 kg/day may consume 2,000 kg/day next month because of a planned production increase.

Using historical ADU without considering the production plan could significantly overestimate future DOS.

---

# 5. Factors Affecting DOS

Let's discuss the operational factors that cause DOS to change.

## 5.1 Changes in Demand or Material Consumption

DOS is inversely related to ADU.

If consumption increases, DOS decreases.

If consumption decreases, DOS increases.

Example:

| Scenario | Inventory | ADU | DOS |
|---|---:|---:|---:|
| Normal production | 10,000 kg | 1,000 kg/day | 10 days |
| Increased production | 10,000 kg | 2,000 kg/day | 5 days |
| Reduced production | 10,000 kg | 500 kg/day | 20 days |

This means that production increases can create material shortages even if the physical inventory remains unchanged.

## 5.2 Inventory Receipts

When new inventory arrives, available inventory increases.

Example:

- Current inventory = 5,000 kg
- Incoming receipt = 5,000 kg
- ADU = 1,000 kg/day

Before receipt:

\[
DOS=\frac{5,000}{1,000}=5
\]

After receipt:

\[
DOS=\frac{10,000}{1,000}=10
\]

The receipt increases coverage from five to ten days.

However, the material should only be considered available after receiving, inspection, and release, depending on the company's inventory process.

## 5.3 Allocations and Reservations

Suppose you have 10,000 kg in the warehouse.

However, 4,000 kg is already allocated to a production order.

Your available inventory is:

\[
10,000-4,000=6,000\text{ kg}
\]

At 1,000 kg/day consumption:

- On-hand DOS = 10 days
- Available DOS = 6 days

This is why looking at physical inventory alone can be misleading.

## 5.4 Seasonality and Consumption Variability

Not all materials have constant consumption.

For example:

A manufacturer may produce significantly more products during peak seasons.

| Period | ADU |
|---|---:|
| January | 500 kg/day |
| February | 600 kg/day |
| March | 800 kg/day |
| April | 1,200 kg/day |

If the company continues using January's ADU when calculating April's DOS, it may overestimate coverage.

For materials with variable consumption, a forward-looking consumption rate may be more appropriate.

## 5.5 Supplier and Production Lead Times

Lead time refers to the period required to obtain a material or complete a replenishment process.

For example:

- Current available DOS = 8 days
- Supplier lead time = 12 days

Your inventory may be depleted before the next delivery arrives.

This indicates a potential shortage.

This is where DOS starts connecting directly with Topic 5.6: Lead Time and Safety Stock.

---

# 6. Formulas and Calculations

Now let's move beyond basic DOS and learn how to use it in actual inventory planning.

## 6.1 Basic Days of Supply

\[
\boxed{DOS=\frac{I}{ADU}}
\]

Where:

- \(I\) = Selected inventory quantity (kg)
- \(ADU\) = Average daily usage (kg/day)

Example:

- Inventory = 24,000 kg
- ADU = 2,000 kg/day

\[
DOS=\frac{24,000}{2,000}
\]

\[
\boxed{12\text{ days}}
\]

## 6.2 Projected DOS After Consumption

Inventory decreases as production consumes material.

The basic projected inventory formula is:

\[
Projected\ Inventory=Current\ Inventory-(Daily\ Usage\times Days)
\]

Example:

- Current inventory = 20,000 kg
- Daily usage = 1,500 kg/day
- Projection period = 5 days

**Step 1: Calculate expected consumption.**

\[
1,500\times5=7,500\text{ kg}
\]

**Step 2: Calculate projected inventory.**

\[
20,000-7,500=12,500\text{ kg}
\]

**Step 3: Calculate remaining DOS.**

\[
DOS=\frac{12,500}{1,500}
\]

\[
\boxed{8.33\text{ days}}
\]

**Interpretation:** After five days of consumption, the remaining inventory can support another 8.33 days at the same usage rate.

## 6.3 Projected DOS After Inventory Receipt

Now let's introduce incoming supply.

Assume:

- Current inventory = 10,000 kg
- Daily usage = 1,000 kg/day
- Inventory receipt = 5,000 kg
- Receipt arrives after 4 days

**Step 1: Calculate consumption before receipt.**

\[
1,000\times4=4,000\text{ kg}
\]

**Step 2: Calculate inventory before receipt.**

\[
10,000-4,000=6,000\text{ kg}
\]

**Step 3: Add incoming material.**

\[
6,000+5,000=11,000\text{ kg}
\]

**Step 4: Calculate DOS after receipt.**

\[
DOS=\frac{11,000}{1,000}
\]

\[
\boxed{11\text{ days}}
\]

**Interpretation:** Immediately after the receipt, the inventory represents 11 days of coverage.

Notice that we accounted for the consumption that occurred while waiting for the delivery.

Simply adding the incoming 5,000 kg to the original inventory would have overstated the actual inventory available after four days.

## 6.4 Required Inventory for a Target DOS

Sometimes the company establishes a target inventory coverage.

For example:

A company wants to maintain 15 days of inventory coverage.

How much inventory should it maintain?

Formula:

\[
\boxed{Required\ Inventory=Target\ DOS\times ADU}
\]

Where:

- Target DOS = Desired coverage in days
- ADU = Average daily usage in kg/day
- Required Inventory = Desired inventory quantity in kg

Example:

- Target DOS = 15 days
- ADU = 2,000 kg/day

\[
Required\ Inventory=15\times2,000
\]

\[
\boxed{30,000\text{ kg}}
\]

The company needs 30,000 kg of inventory to achieve its 15-day coverage target.

## 6.5 Inventory Shortage Based on Target Coverage

Let's assume:

- Target DOS = 15 days
- ADU = 2,000 kg/day
- Available inventory = 22,000 kg

**Step 1: Calculate required inventory.**

\[
15\times2,000=30,000\text{ kg}
\]

**Step 2: Calculate the inventory gap.**

\[
Inventory\ Gap=Required-Available
\]

\[
=30,000-22,000
\]

\[
\boxed{8,000\text{ kg}}
\]

The company needs an additional 8,000 kg to achieve its target coverage.

Alternatively, calculate current DOS:

\[
DOS=\frac{22,000}{2,000}=11\text{ days}
\]

The company currently has 11 days of coverage against its 15-day target.

Therefore:

\[
15-11=4\text{ days}
\]

It has a four-day coverage gap.

**Important distinction:** An inventory gap against a target is not automatically an actual material shortage. It means inventory is below the desired coverage level. Whether it becomes a stockout depends on future demand, supply timing, and replenishment.

## 6.6 Estimating the Stockout Date

One of the most practical uses of DOS is estimating when inventory will run out.

Assume:

- Available inventory = 12,000 kg
- ADU = 1,500 kg/day

\[
DOS=\frac{12,000}{1,500}=8\text{ days}
\]

If the calculation starts on November 16, the estimated depletion point is approximately eight days later, around November 24.

This is an estimate, not a guaranteed stockout date.

Actual depletion depends on the daily production schedule, consumption variability, inventory transactions, and whether the material is available for use.

---

# 7. Practical Manufacturing Application

Let's now apply everything to a realistic manufacturing scenario.

## Scenario: Raw Material Inventory Monitoring

You are an S&OP analyst supporting a manufacturing plant.

Your responsibility is to monitor the availability of a critical raw material used in production.

The material is BT Powder.

The plant has the following inventory and procurement information:

| Parameter | Value |
|---|---:|
| Current on-hand inventory | 25,000 kg |
| Allocated inventory | 5,000 kg |
| Incoming purchase order | 15,000 kg |
| Expected delivery | 12 calendar days |
| Average Daily Usage | 2,000 kg/day |
| Target DOS | 15 days |
| Supplier lead time | 12 calendar days |

For this example, assume:

- Consumption remains constant.
- Allocations represent committed material.
- The incoming purchase order is firm.
- All delivered material passes inspection and is released immediately.
- No other receipts or adjustments occur.

### Step 1: Calculate Available Inventory

\[
Available=25,000-5,000
\]

\[
\boxed{20,000\text{ kg}}
\]

### Step 2: Calculate Available DOS

\[
DOS=\frac{20,000}{2,000}
\]

\[
\boxed{10\text{ days}}
\]

The material has 10 days of available coverage.

### Step 3: Compare DOS with Supplier Lead Time

| Parameter | Days |
|---|---:|
| Available DOS | 10 days |
| Supplier lead time | 12 days |
| Difference | -2 days |

The supplier delivery is expected two days after the available inventory is depleted.

**Potential shortage**

This is a supply risk that requires attention.

### Step 4: Estimate Inventory at Delivery

Expected consumption over 12 days:

\[
2,000\times12=24,000\text{ kg}
\]

Projected available inventory:

\[
20,000-24,000=-4,000\text{ kg}
\]

The negative value indicates a projected shortage of 4,000 kg before the delivery arrives.

This is a theoretical unmet requirement, not actual physical negative inventory.

### Step 5: Calculate the Inventory Needed for Target DOS

Target DOS = 15 days.

\[
Required=15\times2,000
\]

\[
=30,000\text{ kg}
\]

Current available inventory = 20,000 kg.

\[
Inventory\ Gap=30,000-20,000
\]

\[
\boxed{10,000\text{ kg}}
\]

The company needs an additional 10,000 kg to reach its target coverage based on the current available inventory.

### Step 6: Evaluate Possible Business Actions

As an S&OP analyst, you should not simply report that the material has 10 DOS.

You should identify possible corrective actions:

| Possible Action | Expected Benefit |
|---|---|
| Request expedited delivery | Reduce supplier lead time |
| Partial shipment | Obtain some material before the full delivery |
| Transfer inventory | Obtain available material from another facility |
| Adjust production schedule | Reduce immediate material consumption |
| Prioritize critical products | Protect production of high-priority customer orders |
| Negotiate alternative sourcing | Create another supply option |

These decisions require coordination between procurement, production, planning, and management.

## 7.1 Understanding the Inventory Timeline

The projected available inventory balance before the incoming receipt is:

| Day | Projected Available Inventory |
|---|---:|
| Day 0 | 20,000 kg |
| Day 2 | 16,000 kg |
| Day 4 | 12,000 kg |
| Day 6 | 8,000 kg |
| Day 8 | 4,000 kg |
| Day 10 | 0 kg |
| Day 12 | -4,000 kg |

The key observation is that the material is expected to be depleted around Day 10, while the supplier delivery arrives on Day 12.

This is a two-day supply gap.

**An important professional distinction:** The 15-day target DOS is a planning target, while the 12-day supplier lead time is an actual replenishment constraint. They serve different purposes and should not be treated as interchangeable.

---

# 8. DOS Interpretation and Business Perspective

## 8.1 Low, Sufficient, and High DOS

How do we determine whether DOS is low or high?

There is no universal DOS threshold applicable to every material or industry.

It depends on:

- Supplier lead time
- Material criticality
- Demand variability
- Replenishment frequency
- Safety stock requirements
- Storage capacity
- Material shelf life
- Business inventory targets

An illustrative classification might look like this:

| DOS | Interpretation |
|---|---|
| 0–5 days | Potentially critical |
| 6–10 days | Low coverage |
| 11–20 days | Moderate coverage |
| 21–30 days | High coverage |
| Above 30 days | Review potential excess |

These are illustrative ranges only. They are not universal industry standards.

A material with 5 DOS might be perfectly acceptable if replenishment takes only two days.

Another material with 15 DOS might be at risk if its supplier requires 25 days to deliver.

## 8.2 DOS Compared with Lead Time

This is one of the most important comparisons in inventory management.

### Example A: DOS greater than lead time

- Available DOS = 20 days
- Supplier lead time = 10 days

**Lower immediate replenishment risk**

Inventory coverage exceeds supplier lead time by 10 days.

### Example B: DOS less than lead time

- Available DOS = 8 days
- Supplier lead time = 20 days

**High potential stockout risk**

Inventory coverage is 12 days shorter than supplier lead time.

However, DOS greater than lead time does not automatically guarantee sufficient supply.

You must also consider safety stock, demand variability, delivery reliability, and the timing of existing purchase orders.

## 8.3 Why High DOS Does Not Always Mean Excess Inventory

Consider two materials:

| Parameter | Material A | Material B |
|---|---:|---:|
| Available Inventory | 20,000 kg | 20,000 kg |
| ADU | 2,000 kg/day | 500 kg/day |
| DOS | 10 days | 40 days |
| Supplier Lead Time | 15 days | 50 days |

Material B has 40 DOS, which appears high.

But its supplier requires 50 days to replenish.

Therefore, its 40 DOS may actually be insufficient.

This demonstrates why DOS should always be interpreted together with lead time and safety stock.

High DOS can also be intentional because of:

- Long supplier lead times
- Minimum order quantities
- Seasonal demand preparation
- Supply disruption risks
- Strategic inventory policies

On the other hand, excessively high DOS can create:

- Higher inventory holding costs
- Warehouse capacity constraints
- Obsolescence risk
- Expiration or deterioration
- Increased working capital requirements

## 8.4 Why DOS Alone Cannot Guarantee Material Availability

DOS is a simplified coverage metric.

It generally assumes a selected consumption rate and inventory quantity.

It does not automatically account for:

1. Material quality holds.
2. Supplier delivery delays.
3. Sudden production increases.
4. Unexpected scrap or yield losses.
5. Incorrect inventory records.
6. Material incompatibility with specific production requirements.
7. Production scheduling restrictions.

For example, your warehouse might report 20,000 kg of inventory.

But 5,000 kg could be on quality hold.

If you calculate DOS using the entire 20,000 kg, you may overestimate usable inventory coverage.

**Always distinguish between recorded inventory and usable inventory.**

---

# 9. DOS in S&OP Decisions

Now let's approach this from the perspective of an S&OP analyst.

DOS is not just a calculation that goes into an Excel report.

It is a decision-support metric.

Its value comes from identifying potential supply-demand imbalances early enough for the organization to respond.

## 9.1 Monitoring Inventory Coverage

An S&OP analyst may monitor DOS across hundreds or thousands of materials.

A simplified inventory monitoring report could look like this:

| Material | Available DOS | Lead Time | Assessment |
|---|---:|---:|---|
| BT Powder A | 8 days | 15 days | Potential shortage |
| Binder B | 25 days | 10 days | Sufficient coverage |
| Solvent C | 45 days | 20 days | Review excess risk |
| Additive D | 12 days | 14 days | Monitor closely |

This allows management to focus on materials requiring attention instead of reviewing every inventory balance individually.

## 9.2 Supporting Procurement Decisions

Procurement teams can use DOS to determine:

- Which materials require urgent replenishment?
- Which purchase orders should be expedited?
- Which suppliers require follow-up?
- Should additional inventory be ordered?
- Should future orders be reduced or postponed?

For example:

If Material A has 5 DOS and a supplier lead time of 20 days, procurement should investigate immediately.

## 9.3 Supporting Production Planning

Production planners can use DOS to identify whether available raw materials can support the production schedule.

If material availability is insufficient, they may:

- Reschedule production.
- Prioritize products with available materials.
- Reduce production quantities.
- Shift production to another facility.
- Coordinate with procurement for expedited materials.

## 9.4 Identifying Excess Inventory

DOS can also help identify materials with potentially excessive coverage.

For example:

A material has 90 DOS, but the company's target is 30 days.

The analyst should investigate:

- Is demand lower than forecast?
- Were purchase orders placed based on outdated demand?
- Is production slower than planned?
- Are there excess minimum order quantities?
- Is the material becoming obsolete?

This can support purchasing adjustments and inventory reduction strategies.

## 9.5 Prioritizing Management Attention

One useful way to prioritize materials is to compare DOS against replenishment lead time.

For example:

| Material | DOS | Lead Time | Coverage Gap |
|---|---:|---:|---:|
| A | 5 | 20 | -15 days |
| B | 10 | 15 | -5 days |
| C | 25 | 15 | +10 days |
| D | 45 | 20 | +25 days |

A negative coverage gap indicates that current available inventory is shorter than replenishment lead time.

However, this is a screening indicator, not a complete stockout forecast.

An S&OP analyst should investigate the materials with the largest risks first, considering material criticality and customer impact.

---

# 10. Key Takeaways

Let's consolidate the most important lessons.

| Concept | What You Should Remember |
|---|---|
| Days of Supply | Measures how long inventory can support consumption |
| Basic Formula | Inventory ÷ ADU |
| ADU | Daily consumption rate |
| On-hand DOS | Uses physical inventory |
| Available DOS | Uses inventory after relevant allocations and reservations |
| Inventory Position DOS | Includes qualifying incoming supply and outstanding commitments |
| Calendar DOS | Uses calendar days |
| Working-day DOS | Uses operating days |
| Target DOS | Desired inventory coverage |
| Lead Time Comparison | Helps identify potential replenishment risks |

### The five principles you should remember

1. **DOS measures time, not physical inventory quantity.**
2. Higher consumption means lower DOS when inventory remains constant.
3. The selected inventory measure determines the accuracy and meaning of DOS.
4. DOS must be compared with replenishment lead time and safety stock requirements.
5. DOS is a planning indicator, not a guarantee of future material availability.

### The relationship between Topics 5.3, 5.4, and 5.5

**Topic 5.3: Inventory Position**  
How much? Determine inventory after considering supply and demand commitments.

↓

**Topic 5.4: Average Daily Usage**  
How fast? Determine how quickly inventory is consumed.

↓

**Topic 5.5: Days of Supply**  
How long? Determine how long inventory can support consumption.

↓

**Topic 5.6: Lead Time and Safety Stock**  
Will it last long enough? Determine the replenishment time and protection needed against uncertainty.

---

# 11. Knowledge Check and Exercises

**Your turn: Apply what you learned**

Let's test your understanding through three learning levels.

Do not worry about getting everything correct. Ang objective natin ay makita kung paano mo naiintindihan at ina-apply ang DOS, hindi lang kung kaya mong mag-recall ng formula.

## Level 1: Understanding

**Question 1.** Two materials have the same inventory quantity of 10,000 kg.

- Material A consumes 1,000 kg/day.
- Material B consumes 2,000 kg/day.

Which material has lower DOS, and why?

**Question 2.** What is the difference between on-hand DOS and available DOS?

**Question 3.** Can a material have 30 DOS but still experience a stockout? Explain your answer.

## Level 2: Technical Application

**Question 4. Basic DOS Calculation**

A manufacturing plant has:

- On-hand inventory = 18,000 kg
- Allocated inventory = 3,000 kg
- ADU = 1,500 kg/day

Calculate:

a. On-hand DOS.

b. Available inventory.

c. Available DOS.

**Question 5. Target Inventory**

A material has an ADU of 2,500 kg/day.

The company wants to maintain 20 days of coverage.

Calculate the required inventory.

**Question 6. Projected Inventory**

A material currently has 15,000 kg of available inventory.

Its daily consumption is 1,500 kg/day.

An incoming delivery of 8,000 kg will arrive after four days.

Calculate:

a. Inventory immediately before the delivery.

b. Inventory immediately after the delivery.

c. DOS immediately after the delivery.

## Level 3: Professional Analysis

**Question 7. Manufacturing Scenario**

You are monitoring a critical raw material.

| Parameter | Value |
|---|---:|
| On-hand inventory | 30,000 kg |
| Allocated inventory | 5,000 kg |
| ADU | 2,000 kg/day |
| Supplier lead time | 12 calendar days |
| Incoming delivery | 10,000 kg |
| Expected delivery | 15 calendar days |

Answer the following:

a. What is the available inventory?

b. What is the available DOS?

c. Will the current available inventory last until the expected delivery?

d. What is the projected shortage before delivery, assuming constant consumption?

e. As an S&OP analyst, what actions would you recommend?

**Question 8. Business Analysis**

A company reports that its raw material DOS increased from 20 days to 45 days.

Management considers this a positive development.

Would you automatically agree?

Explain at least three factors you would investigate before concluding that the inventory situation improved.

## How we'll evaluate your answers

I'll assess your responses based on:

- Conceptual understanding
- Formula selection
- Calculation accuracy
- Interpretation of results
- Business decision-making

For Level 3, I will also evaluate whether your recommendations are operationally realistic.

You can answer all eight questions together or one level at a time. I won't reveal the solutions until you've attempted them.

**After completing Topic 5.5**, we'll be ready for **Module 5 – Topic 5.6: Lead Time and Safety Stock**, where we'll connect inventory coverage with replenishment time and protection against demand or supply uncertainty.

Take your time. The goal is to develop the thinking process of an S&OP analyst, not just memorize `Inventory ÷ ADU`.
