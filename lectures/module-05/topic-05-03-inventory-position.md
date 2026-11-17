# Module 5 – Inventory Management
## Topic 5.3: Inventory Position

**Level 1 → Level 2 → Level 3**  
**S&OP Fundamentals**

**Main Learning Objective:** Understand how a company determines its actual supply position by considering physical inventory, incoming supply, and existing demand commitments.

Sa topic na ito, pag-aaralan natin kung paano malalaman ng isang company kung gaano karaming inventory ang tunay na available para sa future requirements.

May isang importanteng distinction na kailangan mong maintindihan:

**Hindi porket may 10,000 units sa warehouse, ibig sabihin ay available ang lahat ng 10,000 units para sa next customer order.**

Some units may already be reserved. Some may be committed to production. Some incoming materials may still be on purchase orders. At may mga customer requirements na kailangan pang i-fulfill.

Dito pumapasok ang concept ng **Inventory Position**.

---

# 1. Topic Overview

### 1.1 What is Inventory Position?

Ang Inventory Position ay isang inventory measure na nagbibigay ng mas comprehensive na picture ng supply situation ng isang company.

Hindi lang nito tinitingnan kung ilang units ang physically present sa warehouse. Isinasaalang-alang din nito ang:

- Existing physical inventory.
- Incoming inventory or expected receipts.
- Existing demand commitments.
- Outstanding requirements.

Sa madaling salita, sinasagot nito ang tanong na:

**"Considering our existing stock, incoming supply, and outstanding demand, how much inventory do we really have available or expected to have?"**

### 1.2 Why is it important?

Imagine na manufacturing company ka.

Mayroon kang:

- 1,000 kg raw material sa warehouse.
- 500 kg na paparating from supplier.
- 700 kg na kailangan para sa existing production requirements.

Kung physical inventory lang ang titingnan mo, mukhang marami kang stock.

Pero kapag isinama mo ang existing commitments, makikita mo kung gaano talaga karami ang natitirang supply.

Mahalaga ito dahil nakakaapekto ang inventory position sa:

| Business activity | Why it matters |
|---|---|
| Procurement | Malalaman kung kailangan pang bumili ng materials. |
| Production Planning | Malalaman kung may sapat na materials para sa production. |
| Customer Fulfillment | Malalaman kung kayang suportahan ang customer demand. |
| Inventory Management | Maiiwasan ang shortages at unnecessary purchases. |
| S&OP | Makikita ang potential supply-demand imbalance. |

### 1.3 Connection to Previous Topics

| Previous topic | Connection to Topic 5.3 |
|---|---|
| 5.1 Understanding Inventory | Na-establish natin kung ano ang inventory at bakit ito mahalaga. |
| 5.2 Types of Inventory | Natutunan natin ang iba't ibang inventory classifications at purposes. |
| **5.3 Inventory Position** | Pinagsasama natin ang inventory, incoming supply, at demand commitments para malaman ang overall supply position. |
| 5.4 Average Daily Usage (ADU) | Gagamitin natin ang inventory information para masukat kung gaano kabilis nauubos ang inventory. |

---

# 2. Layman's Explanation

### 2.1 Imagine that you own a small grocery store.

Mayroon kang 100 bottles of cooking oil sa stockroom.

Pero ganito ang situation:

- 100 bottles physically available sa stockroom.
- 30 bottles reserved para sa isang customer.
- 20 bottles ordered from your supplier, pero hindi pa dumarating.
- 40 bottles required para sa ibang confirmed customer orders.

Kung titingnan mo lang ang physical inventory, sasabihin mong mayroon kang 100 bottles.

Pero hindi ganoon kasimple ang actual situation.

Let's examine the different quantities.

**Your grocery inventory situation**

| Description | Quantity |
|---|---:|
| Physical stock | 100 bottles |
| Reserved stock | 30 bottles |
| Other customer commitments | 40 bottles |
| Incoming supplier delivery | 20 bottles |
| Uncommitted physical stock | 30 bottles |

Notice na kahit may 100 bottles ka, 70 bottles are already committed.

May additional 20 bottles na paparating.

Therefore, hindi sapat na sabihin lang na 100 bottles ang inventory mo.

Kailangan nating tingnan ang complete supply and demand picture.

### 2.2 The Three Important Questions

Kapag inventory ang pinag-uusapan, dapat magkakaiba ang tatlong tanong na ito:

1. **How much do we physically have?**

   Ito ang On-hand Inventory.

2. **How much is currently free for use?**

   Ito ang Available Inventory.

3. **How much supply do we have after considering incoming supply and outstanding demand?**

   Ito ang Inventory Position, subject to the company's defined calculation.

Ito ang foundation ng topic natin.

---

# 3. Technical Explanation

Ngayon, introduce natin ang formal inventory management terminology.

### 3.1 On-hand Inventory

**Definition:** The total quantity of inventory physically present in a warehouse or storage location at a specific point in time.

Example:

A manufacturing company has 5,000 kg of BT powder physically stored in its warehouse.

Therefore:

\[
\text{On-hand Inventory}=5,000\text{ kg}
\]

Important considerations:

- It refers to actual recorded physical stock.
- It does not automatically mean all quantities are usable.
- It may include allocated, reserved, blocked, or quality-inspection stock depending on the inventory system and reporting definition.

### 3.2 Available Inventory

**Definition:** The quantity of inventory that is currently available for use, allocation, or fulfillment after accounting for applicable restrictions and commitments.

For a simplified warehouse calculation:

\[
\text{Available Inventory}
=
\text{On-hand Inventory}
-
\text{Reserved Inventory}
\]

Example:

| Description | Quantity |
|---|---:|
| On-hand inventory | 5,000 kg |
| Reserved inventory | 1,200 kg |
| Available inventory | 3,800 kg |

Meaning:

Although 5,000 kg physically exists, only 3,800 kg remains unreserved.

Note: Actual ERP systems may also deduct blocked, quarantined, or otherwise unavailable stock.

### 3.3 Incoming Supply

Incoming supply refers to inventory expected to become available in the future.

Examples include:

- Open Purchase Orders (PO).
- Scheduled supplier receipts.
- Open production orders.
- Expected finished goods receipts from production.

Important: Hindi lahat ng incoming supply ay automatic na available today.

For example, kung may 2,000 kg na purchase order na expected next week, hindi mo pa iyon physically magagamit ngayon.

Kailangan nating i-consider ang expected delivery date.

### 3.4 Demand Commitments

Demand commitments refer to quantities already required or promised to satisfy existing business requirements.

Examples:

- Customer sales orders.
- Production material requirements.
- Reservations.
- Backorders.
- Other outstanding requirements.

Hindi dapat basta-basta mag-double count.

For example, if a customer order has already been used to reserve 500 units, hindi mo dapat ibawas ulit ang parehong 500 units as a separate commitment in a calculation that already deducts reserved stock.

### 3.5 Inventory Position

A commonly used planning definition is:

\[
IP=OH+OS-OD
\]

Where:

| Variable | Meaning |
|---|---|
| IP | Inventory Position |
| OH | On-hand inventory |
| OS | Open supply |
| OD | Outstanding demand |

In this simplified formula:

- On-hand inventory is the current stock.
- Open supply is qualified incoming supply.
- Outstanding demand is the demand not yet covered by the inventory or supply calculation.

**Important:** Inventory Position is not calculated identically in every ERP system or company. Some definitions use on-hand plus open purchase orders minus backorders; others explicitly account for reservations, allocations, and other commitments. The calculation must be consistent with the company's planning rules.

---

# 4. Detailed Discussion

## 4.1 Components of Inventory Position

Let's examine each component and how it affects the inventory position.

### A. On-hand Inventory

Ito ang physical stock na recorded sa inventory system.

Example:

A company has 8,000 kg of raw material in its warehouse.

\[
OH=8,000\text{ kg}
\]

However, kailangan ding malaman kung may restrictions ang stock.

| Stock classification | Quantity |
|---|---:|
| Total physical stock | 8,000 kg |
| Quality inspection / quarantine | 500 kg |
| Unrestricted stock | 7,500 kg |

For planning purposes, the 500 kg under quarantine should not automatically be treated as usable supply.

**Business implication:** Incorrectly counting unusable stock can create a false impression that the company has sufficient materials.

### B. Open Purchase Orders (Open POs)

An Open Purchase Order is a confirmed purchasing document for materials or products that have not yet been fully received.

Example:

| PO | Ordered quantity | Received | Outstanding |
|---|---:|---:|---:|
| PO-001 | 2,000 kg | 500 kg | 1,500 kg |
| PO-002 | 3,000 kg | 3,000 kg | 0 kg |
| PO-003 | 1,000 kg | 0 kg | 1,000 kg |
| **Total** | **6,000 kg** | **3,500 kg** | **2,500 kg** |

Therefore:

\[
\text{Open PO Supply}=2,500\text{ kg}
\]

Important considerations:

- Include only the outstanding quantity.
- Do not include the quantity already received because it is already part of on-hand inventory.
- Consider expected delivery dates.
- Check whether the PO is confirmed, cancelled, delayed, or subject to supplier issues.

**Common mistake:** Counting the original PO quantity instead of the outstanding quantity.

This results in double counting.

### C. Open Production Orders and Expected Production Receipts

Ito naman ang supply expected from manufacturing activities.

For example, a company manufactures electronic components.

| Production Order | Planned output | Already completed | Remaining expected output |
|---|---:|---:|---:|
| PROD-001 | 5,000 pcs | 2,000 pcs | 3,000 pcs |
| PROD-002 | 3,000 pcs | 1,000 pcs | 2,000 pcs |
| **Total** | **8,000 pcs** | **3,000 pcs** | **5,000 pcs** |

The expected production receipt is 5,000 pcs, assuming the remaining quantities are still expected to be completed.

But take note of something important:

**The effect of a production order depends on which inventory item you are monitoring.**

| Inventory being monitored | Effect of production order |
|---|---|
| Finished goods being manufactured | Expected production is incoming supply. |
| Raw materials consumed by production | Material requirements are demand. |
| Semi-finished goods being produced | Expected output is incoming supply. |

For example, if you are monitoring BT powder, a production order that consumes BT powder reduces the projected material availability.

If you are monitoring finished MLCC products, the same production order may increase expected finished goods supply.

This is a very important concept in manufacturing inventory planning.

### D. Allocated or Reserved Inventory

Reserved inventory refers to stock that has already been assigned to a particular requirement.

Example:

| Description | Quantity |
|---|---:|
| Total on-hand inventory | 10,000 pcs |
| Reserved for Customer A | 2,000 pcs |
| Reserved for Customer B | 1,500 pcs |
| Total reserved | 3,500 pcs |

Therefore:

\[
Available=10,000-3,500
\]

\[
\boxed{Available=6,500\text{ pcs}}
\]

The reserved stock still physically exists.

Hindi siya nawawala sa warehouse.

However, it is no longer freely available for another requirement.

**Remember:** Reservation is a commitment status, not a physical inventory movement.

### E. Customer Orders and Other Demand Commitments

Customer orders represent quantities that the company has agreed or is expected to fulfill.

Example:

| Customer | Order quantity |
|---|---:|
| Customer A | 2,000 pcs |
| Customer B | 3,000 pcs |
| Customer C | 1,500 pcs |
| **Total** | **6,500 pcs** |

These orders create demand against the available or projected supply.

However, kailangan nating i-check kung reserved na ba ang mga quantities na ito.

If the 6,500 pcs are already fully represented by the reservation of 3,500 pcs plus another 3,000 pcs of unreserved outstanding orders, we must not deduct the same demand twice.

### F. Backorders and Outstanding Requirements

A backorder occurs when customer demand has not been fulfilled by the required date because sufficient inventory or supply was unavailable.

Example:

A customer ordered 2,000 pcs.

The company delivered only 1,500 pcs.

\[
Backorder=2,000-1,500
\]

\[
\boxed{Backorder=500\text{ pcs}}
\]

The remaining 500 pcs are still outstanding demand.

Backorders are important because they represent existing obligations that compete with future supply.

Other outstanding requirements may include:

- Unfulfilled customer orders.
- Unissued production material requirements.
- Maintenance spare parts requirements.
- Other approved internal requirements.

Again, check whether these requirements are already reflected in reservations or allocations.

---

## 4.2 Inventory Position vs. Related Inventory Measures

Now, let's differentiate five inventory measures that are often confused with each other.

| Measure | What it tells us |
|---|---|
| On-hand Quantity | How much inventory physically exists? |
| Available Inventory | How much stock is currently free for use? |
| Inventory Position | What is the overall inventory position after considering qualified supply and demand? |
| Available-to-Promise (ATP) | How much uncommitted supply can we promise to customers? |
| Projected Available Balance (PAB) | How much inventory is expected to remain at a particular future period? |

These measures are related, but they answer different business questions.

### A. On-hand Quantity

Physical inventory recorded at a specific point in time.

Example:

\[
OH=5,000\text{ pcs}
\]

Question answered:

"How much stock do we have right now?"

### B. Available Inventory

The quantity that is currently usable and uncommitted.

Simplified formula:

\[
Available=OH-Reserved-Restricted
\]

Example:

| Component | Quantity |
|---|---:|
| On-hand | 5,000 |
| Reserved | 1,000 |
| Quality hold | 500 |
| Available | 3,500 |

Question answered:

"How much stock can we allocate right now?"

### C. Inventory Position

A planning measure that considers existing inventory, incoming supply, and outstanding demand.

One simplified convention is:

\[
IP=Usable\ OH+Qualified\ Open\ Supply
- Outstanding\ Demand
\]

Question answered:

"After considering supply and demand commitments, what is our net inventory position?"

### D. Available-to-Promise (ATP)

ATP refers to the quantity of uncommitted supply that a company can promise to customers.

It helps Sales and Customer Service determine whether an additional customer order can be accepted without violating existing commitments.

For example:

| Component | Quantity |
|---|---:|
| Current on-hand | 5,000 pcs |
| Existing customer commitments | 3,000 pcs |
| Confirmed receipt before next supply event | 2,000 pcs |
| ATP | 4,000 pcs |

\[
ATP=5,000+2,000-3,000
\]

\[
\boxed{ATP=4,000\text{ pcs}}
\]

This is an illustrative simplified ATP calculation. Actual ATP rules depend on the company's order promising method and whether ATP is calculated only at the time of a supply event or continuously.

**Important distinction:** ATP is intended for promising additional demand, while inventory position is a broader planning measure.

### E. Projected Available Balance (PAB)

PAB shows how much inventory is expected to remain after considering scheduled supply and demand during a particular planning period.

Example:

A company currently has 1,000 pcs.

During Week 1:

- Scheduled receipt: 500 pcs.
- Demand: 700 pcs.

\[
PAB_1=1,000+500-700
\]

\[
\boxed{PAB_1=800\text{ pcs}}
\]

During Week 2:

- Scheduled receipt: 300 pcs.
- Demand: 600 pcs.

\[
PAB_2=800+300-600
\]

\[
\boxed{PAB_2=500\text{ pcs}}
\]

PAB is time-phased. Meaning, it tells us how inventory changes across future periods.

### Comparison Summary

| Measure | Current or future? | Incoming supply included? | Demand considered? |
|---|---|---|---|
| On-hand | Current | No | No |
| Available | Current | Usually no | Yes, through reservations and allocations |
| Inventory Position | Planning snapshot | Yes, if qualified | Yes |
| ATP | Current/future promise | Yes, if eligible | Existing commitments |
| PAB | Future periods | Yes | Yes |

One key lesson:

**Never assume that On-hand, Available Inventory, ATP, PAB, and Inventory Position are interchangeable.**

---

## 4.3 How Inventory Position Changes Over Time

Inventory is not static.

Every time a company receives materials, consumes materials, produces finished goods, or fulfills customer orders, its inventory situation changes.

Let's examine the effects.

| Business transaction | Effect on inventory position |
|---|---|
| Receive purchase order | Increases on-hand, decreases open PO |
| Create new purchase order | Increases qualified open supply |
| Cancel purchase order | Decreases open supply |
| Complete production of monitored item | Increases on-hand, decreases open production supply |
| Consume raw materials | Decreases raw material on-hand |
| Create production material requirement | Increases outstanding material demand |
| Receive customer order | Increases outstanding demand |
| Fulfill customer order | Reduces on-hand and outstanding demand |
| Cancel customer order | Reduces outstanding demand |
| Create inventory reservation | Reduces uncommitted available stock |

Notice that some transactions change the components without necessarily changing the overall inventory position.

For example:

A company has:

- On-hand: 1,000 pcs.
- Open PO: 500 pcs.
- Outstanding demand: 300 pcs.

\[
IP=1,000+500-300=1,200
\]

Then the company receives the 500 pcs from its supplier.

New situation:

- On-hand: 1,500 pcs.
- Open PO: 0 pcs.
- Outstanding demand: 300 pcs.

\[
IP=1,500+0-300=1,200
\]

The inventory position remains unchanged.

Why?

Because the incoming supply was simply transferred from the open PO category to physical stock.

This is an example of an important inventory planning principle:

**A transaction can change the inventory classification without changing the total net supply position.**

### Timing Differences

Ito ang isa sa pinakamahalagang considerations sa supply chain planning.

Imagine:

- Current date: November 16.
- Supplier delivery: November 25.
- Production requirement: November 18.

May 1,000 kg ka ngayon at may 2,000 kg incoming on November 25.

Your total future supply is 3,000 kg.

But you cannot use the 2,000 kg on November 18 because it has not arrived yet.

Therefore, a positive inventory position does not automatically mean that every demand requirement can be fulfilled on time.

This is why we need time-phased inventory planning using PAB.

### Why Accurate Inventory Records Matter

Suppose the ERP system shows 5,000 kg of raw material.

However, a physical count reveals only 4,200 kg.

There is an 800 kg inventory discrepancy.

If the planning team continues using the 5,000 kg figure:

- Production may be scheduled without sufficient materials.
- Procurement may be delayed unnecessarily.
- Customer delivery commitments may be missed.
- Inventory reports may show misleading availability.

Accurate inventory records are essential for reliable supply planning.

---

# 5. Formulas and Calculations

Ito ang technical application part natin.

May limang calculations tayong pag-aaralan.

## 5.1 Basic Inventory Position

A commonly used simplified formula:

\[
\boxed{IP=OH+OS-OD}
\]

Where:

- \(IP\) = Inventory Position (units, kg, liters, etc.)
- \(OH\) = Usable On-hand Inventory
- \(OS\) = Qualified Open Supply
- \(OD\) = Outstanding Demand

Example:

| Component | Quantity |
|---|---:|
| Usable on-hand inventory | 5,000 kg |
| Open purchase orders | 2,000 kg |
| Expected production receipts | 1,000 kg |
| Outstanding demand | 4,500 kg |

Step 1: Calculate total supply.

\[
Total\ Supply=5,000+2,000+1,000
\]

\[
Total\ Supply=8,000\text{ kg}
\]

Step 2: Deduct outstanding demand.

\[
IP=8,000-4,500
\]

**Result:**

\[
\boxed{IP=3,500\text{ kg}}
\]

**Interpretation:** The company has a net inventory position of 3,500 kg after considering the specified incoming supply and demand commitments.

However, this does not mean 3,500 kg is physically available today.

The 2,000 kg purchase order and 1,000 kg production receipt may still be in transit or under production.

Also, ensure that the demand figure excludes requirements already deducted through reservations or other demand categories.

## 5.2 Available Inventory

Simplified formula:

\[
\boxed{Available=OH-R-H}
\]

Where:

- \(OH\) = On-hand inventory.
- \(R\) = Reserved or allocated inventory.
- \(H\) = Restricted or unavailable inventory.

Example:

| Component | Quantity |
|---|---:|
| On-hand | 10,000 pcs |
| Reserved | 2,000 pcs |
| Quality hold | 500 pcs |
| Blocked inventory | 300 pcs |

Step 1: Calculate unavailable inventory.

\[
2,000+500+300=2,800
\]

Step 2: Calculate available inventory.

\[
10,000-2,800
\]

\[
\boxed{Available=7,200\text{ pcs}}
\]

**Interpretation:** The company has 7,200 pcs of currently available inventory, assuming the categories are mutually exclusive and all remaining stock is usable.

## 5.3 Projected Inventory Balance

The simplified period-based formula is:

\[
\boxed{PAB_t=PAB_{t-1}+SR_t-GR_t}
\]

Where:

- \(PAB_t\) = Projected Available Balance for the current period.
- \(PAB_{t-1}\) = Previous period's projected balance.
- \(SR_t\) = Scheduled Receipts during the period.
- \(GR_t\) = Gross Requirements during the period.

Example:

A company starts with 2,000 pcs.

| Period | Beginning balance | Scheduled receipts | Gross requirements | Ending PAB |
|---|---:|---:|---:|---:|
| Week 1 | 2,000 | 500 | 800 | 1,700 |
| Week 2 | 1,700 | 1,000 | 1,200 | 1,500 |
| Week 3 | 1,500 | 300 | 1,000 | 800 |
| Week 4 | 800 | 500 | 1,100 | 200 |

Let's calculate Week 3.

\[
PAB_3=1,500+300-1,000
\]

\[
\boxed{PAB_3=800\text{ pcs}}
\]

The same process is repeated for each succeeding period.

**Illustrative example.** Assumes no additional inventory adjustments, scrap, or other movements.

Notice that the inventory balance continues decreasing.

If the company has a safety stock requirement of 500 pcs, the Week 4 balance of 200 pcs indicates a projected shortage against that inventory target.

This is a signal for the planning team to investigate additional supply.

## 5.4 Inventory Position Across Multiple Periods

Let's distinguish this from PAB.

Inventory Position is a net supply-demand measure. It can be recalculated at different planning snapshots or dates.

Example:

| Component | Week 1 | Week 2 | Week 3 |
|---|---:|---:|---:|
| On-hand | 5,000 | 4,000 | 3,500 |
| Open supply | 2,000 | 3,000 | 2,500 |
| Outstanding demand | 3,000 | 3,500 | 4,000 |

Using:

\[
IP_t=OH_t+OS_t-OD_t
\]

Week 1:

\[
5,000+2,000-3,000=4,000
\]

Week 2:

\[
4,000+3,000-3,500=3,500
\]

Week 3:

\[
3,500+2,500-4,000=2,000
\]

**Inventory Position Across Three Planning Snapshots**

| Planning snapshot | Inventory position |
|---|---:|
| Week 1 | 4,000 units |
| Week 2 | 3,500 units |
| Week 3 | 2,000 units |

**Interpretation:** Inventory position is declining because demand is increasing relative to available supply.

This may indicate a future replenishment requirement.

Important: These are planning snapshots, not automatically equivalent to the ending PAB of each week. Their dates and inclusion rules must be consistent.

## 5.5 Net Inventory Requirements

Now, let's answer an important procurement question:

**How much additional inventory do we need to obtain to satisfy demand and maintain our desired inventory level?**

A simplified formula:

\[
\boxed{
NR=\max(0,GR+SS-PAB)
}
\]

Where:

- \(NR\) = Net Requirement.
- \(GR\) = Gross Requirement.
- \(SS\) = Desired Safety Stock.
- \(PAB\) = Projected available inventory before the new replenishment.

Example:

A company has the following:

| Component | Quantity |
|---|---:|
| Gross requirement | 5,000 kg |
| Desired safety stock | 1,000 kg |
| Projected available inventory before replenishment | 4,000 kg |

Step 1: Add gross requirement and safety stock.

\[
5,000+1,000=6,000
\]

Step 2: Deduct projected available inventory.

\[
6,000-4,000
\]

**Net Requirement:**

\[
\boxed{NR=2,000\text{ kg}}
\]

Meaning:

The company needs an additional 2,000 kg of supply to fulfill the 5,000 kg requirement while maintaining its 1,000 kg safety stock target.

This is the quantity required before considering practical purchasing constraints such as minimum order quantities, lot sizes, supplier lead times, and delivery schedules.

**Important:** Gross requirements must be measured against the same planning horizon as the projected available inventory. This formula is a simplified netting calculation, not a substitute for a full MRP calculation.

---

# 6. Practical Manufacturing Application

Let's apply everything to a realistic manufacturing scenario.

## Scenario: Raw Material Inventory Planning

Imagine that you are an S&OP Analyst working for an electronics manufacturing company.

You are monitoring the inventory of a critical raw material used in production.

The material is BT Powder, measured in kilograms.

Your planning team provides the following information.

### 6.1 Current Inventory Situation

| Inventory component | Quantity |
|---|---:|
| Physical on-hand inventory | 5,000 kg |
| Quality hold | 200 kg |
| Reserved for existing production | 800 kg |
| Open purchase orders | 1,500 kg |
| Expected supplier delivery | November 20 |
| Outstanding production material requirements | 3,000 kg |
| Additional unreserved production requirements | 1,200 kg |

Assumptions:

- The 800 kg reserved quantity is already part of the 3,000 kg production requirements.
- The additional 1,200 kg is a separate, unreserved requirement.
- The 1,500 kg PO is confirmed and expected to arrive on November 20.
- All other physical stock is usable.
- No other incoming supply is expected.

### 6.2 Step 1: Determine Usable On-hand Inventory

\[
Usable\ OH=5,000-200
\]

\[
\boxed{Usable\ OH=4,800\text{ kg}}
\]

The 800 kg reservation remains included in usable physical inventory at this stage.

Why?

Because we will deduct its associated requirement in the demand calculation.

This prevents double counting.

### 6.3 Step 2: Determine Total Outstanding Demand

\[
Outstanding\ Demand=3,000+1,200
\]

\[
\boxed{Outstanding\ Demand=4,200\text{ kg}}
\]

The 800 kg reservation is already included in the 3,000 kg requirement. Therefore, we do not add it again.

### 6.4 Step 3: Calculate Inventory Position

\[
IP=OH+OS-OD
\]

\[
IP=4,800+1,500-4,200
\]

\[
\boxed{IP=2,100\text{ kg}}
\]

**Inventory Position Summary**

| Component | Quantity |
|---|---:|
| Usable on-hand | 4,800 kg |
| Incoming supply | +1,500 kg |
| Outstanding demand | −4,200 kg |
| **Net inventory position** | **2,100 kg** |

### 6.5 Step 4: Is the Company Sufficiently Supplied?

At first glance, yes.

The company has a positive inventory position of 2,100 kg.

However, let's examine the timing.

Assume the following production schedule:

| Date | Activity | Quantity |
|---|---|---:|
| November 17 | Production requirement | 2,500 kg |
| November 19 | Production requirement | 1,700 kg |
| November 20 | Supplier delivery | +1,500 kg |

Initial usable on-hand inventory:

4,800 kg.

November 17:

\[
4,800-2,500=2,300
\]

November 19:

\[
2,300-1,700=600
\]

November 20:

\[
600+1,500=2,100
\]

The company can fulfill both production requirements and still retain 2,100 kg after the scheduled supplier receipt.

But notice what would happen if the 1,500 kg supplier delivery were delayed until November 21.

The company would still have enough material for the November 17 and November 19 requirements in this example, but its inventory would fall to 600 kg before the delivery.

If the company has a safety stock requirement of 1,000 kg, it would breach that target temporarily.

This is why we need to distinguish:

- Total inventory position.
- Current available inventory.
- Projected inventory balance.
- Timing of incoming supply.

### 6.6 Step 5: What Should the S&OP Analyst Recommend?

Based on this information:

1. Confirm the November 20 delivery with the supplier.
2. Check whether the 600 kg projected balance before delivery is acceptable relative to safety stock.
3. Validate whether production requirements are final and approved.
4. Check for possible production schedule changes.
5. Evaluate whether additional procurement is necessary based on future demand and replenishment lead time.

The important lesson:

**A positive inventory position does not guarantee that the company can satisfy every requirement on time or maintain its desired safety stock.**

---

# 7. Inventory Position in S&OP

Now, let's connect the calculations to actual business decisions.

## 7.1 How an S&OP Analyst Uses Inventory Position

An S&OP Analyst uses inventory position to understand whether the company has enough supply to support its expected demand.

Typical questions include:

- Do we have enough raw materials for upcoming production?
- Are incoming purchase orders sufficient?
- Are we holding too much inventory?
- Will we encounter shortages in the next few weeks?
- Do we need to increase procurement?
- Should we adjust production priorities?
- Are customer commitments supported by actual supply?

Inventory position becomes one of the inputs for supply-demand reconciliation.

## 7.2 Impact on Different Business Functions

| Department | How inventory position helps |
|---|---|
| Procurement | Determines additional purchasing requirements. |
| Production Planning | Identifies material availability and possible shortages. |
| Warehouse | Supports inventory accuracy and stock monitoring. |
| Sales | Helps evaluate whether customer orders can be supported. |
| Finance | Provides visibility into inventory investment and working capital. |
| S&OP | Supports decisions involving supply, demand, inventory, and service levels. |

## 7.3 What Happens When Inventory Position Is Incorrect?

Let's examine three common situations.

**Situation A: Overstated Inventory**

ERP shows 10,000 kg, but physical inventory is only 8,000 kg.

Possible consequences:

- Production planning assumes sufficient materials.
- Procurement orders are delayed.
- Production shortages occur.
- Customer deliveries may be affected.

**Situation B: Understated Incoming Supply**

The company has a confirmed 3,000 kg purchase order, but the planning report does not include it.

Possible consequences:

- The company may unnecessarily place another purchase order.
- Excess inventory may accumulate.
- Working capital is tied up.

**Situation C: Double-counted Demand**

The planning team deducts reserved inventory and then deducts the same customer or production requirement again.

Possible consequences:

- Inventory position appears lower than reality.
- Procurement may overestimate material requirements.
- Unnecessary replenishment may occur.

## 7.4 Inventory Position as a Decision-Making Tool

A professional S&OP Analyst should not simply look at the final inventory position number.

They should investigate the underlying components.

For example:

| Indicator | Possible interpretation |
|---|---|
| High on-hand, low inventory position | Significant existing demand commitments. |
| Low on-hand, high inventory position | Significant incoming supply. |
| Positive inventory position, negative future PAB | Supply may arrive too late to support demand. |
| Negative inventory position | Total qualified supply is insufficient against included demand. |
| High inventory position over multiple periods | Possible excess inventory or declining demand. |

These are planning signals, not automatic conclusions. The analyst must validate dates, supply reliability, restrictions, and inventory targets before recommending action.

---

# 8. Key Takeaways

Ito ang mga concepts na kailangan mong ma-master bago tayo mag-proceed sa next topic.

## 8.1 Five Important Inventory Measures

| Term | Remember this |
|---|---|
| On-hand Inventory | Physical stock currently recorded. |
| Available Inventory | Stock currently free for use or allocation. |
| Inventory Position | Net supply position considering inventory, incoming supply, and demand commitments. |
| ATP | Quantity that can be promised to additional customers. |
| PAB | Expected remaining inventory during a future planning period. |

## 8.2 Important Formulas

| Calculation | Formula |
|---|---|
| Inventory Position | \(IP=OH+OS-OD\) |
| Available Inventory | \(Available=OH-R-H\) |
| Projected Available Balance | \(PAB_t=PAB_{t-1}+SR_t-GR_t\) |
| Net Inventory Requirement | \(NR=\max(0,GR+SS-PAB)\) |

Remember that these are simplified formulas. Actual company ERP and planning systems may apply different inclusion rules.

## 8.3 Five Critical Lessons

1. Physical inventory does not automatically mean available inventory.
2. Incoming supply must be considered when evaluating the overall inventory position.
3. Reservations and demand commitments must be accounted for without double counting.
4. Inventory position does not automatically guarantee that supply will arrive before demand is required.
5. Always examine the individual supply and demand components instead of relying exclusively on the final inventory position.

## 8.4 Professional Terminology to Remember

| Terminology | Meaning |
|---|---|
| On-hand | Existing physical inventory |
| Open PO | Outstanding purchase order quantity |
| Scheduled Receipt | Expected incoming supply |
| Allocation | Inventory assigned to a specific requirement |
| Reservation | Stock earmarked for a particular use |
| Outstanding Demand | Unfulfilled requirements |
| Backorder | Unfulfilled customer order |
| ATP | Available-to-Promise |
| PAB | Projected Available Balance |
| Net Requirement | Additional supply needed after netting existing supply |

---

# 9. Knowledge Check and Exercises

**Your turn: Apply what you learned.**

Now, let's test your understanding.

I will not provide the answers immediately. You need to attempt the questions first, then I will evaluate your answers and explain any mistakes.

We will use three learning levels.

## Level 1 – Understanding

**Question 1: Conceptual Understanding**

A manufacturing company has 10,000 pcs of finished goods in its warehouse.

Out of these:

- 2,000 pcs are reserved for Customer A.
- 1,500 pcs are reserved for Customer B.
- 500 pcs are under quality inspection.

How much is the available inventory?

Explain why.

**Question 2: Inventory Concepts**

Explain the difference between:

- On-hand Inventory
- Available Inventory
- Inventory Position
- Projected Available Balance

Use your own words. Hindi kailangang textbook definition.

**Question 3: Situational Analysis**

A company has:

- 2,000 units of physical inventory.
- 3,000 units of incoming purchase orders.
- 4,000 units of outstanding customer demand.

Is the company in a positive or negative inventory position?

What does the result mean?

## Level 2 – Technical Application

**Question 4: Inventory Position Calculation**

A manufacturing company has the following inventory:

| Component | Quantity |
|---|---:|
| On-hand inventory | 8,000 kg |
| Quality hold | 500 kg |
| Open purchase orders | 2,000 kg |
| Reserved production materials | 1,500 kg |
| Additional unreserved demand | 2,000 kg |

Assume the reserved production materials are already included in the total outstanding production requirements.

Calculate:

1. Usable on-hand inventory.
2. Total outstanding demand.
3. Inventory position.

Show your calculations.

**Question 5: Projected Available Balance**

A company has an initial inventory of 3,000 pcs.

| Period | Scheduled Receipts | Gross Requirements |
|---|---:|---:|
| Week 1 | 500 | 1,000 |
| Week 2 | 1,500 | 2,000 |
| Week 3 | 500 | 1,200 |
| Week 4 | 1,000 | 1,500 |

Calculate the ending PAB for each week.

Then answer:

- During which week does the company experience its lowest inventory balance?
- Is there any period where inventory becomes insufficient?

## Level 3 – Professional Analysis

**Question 6: Business Scenario**

You are an S&OP Analyst.

Your inventory report shows:

- On-hand inventory: 5,000 kg.
- Open purchase orders: 4,000 kg.
- Outstanding demand: 6,000 kg.
- Safety stock requirement: 1,000 kg.

However, the purchase order will arrive after the next production requirement.

The production requirement is 5,500 kg, due tomorrow.

Answer these questions:

1. What is the inventory position?
2. Is the inventory position positive or negative?
3. Can the company fulfill tomorrow's production requirement?
4. Why is looking at inventory position alone insufficient?
5. What actions would you recommend as an S&OP Analyst?

## How to Submit Your Answers

Take your time answering Questions 4–6. You can answer partially. We will evaluate your understanding, calculations, and business reasoning.

---

# 10. Connection to the Next Topic: Topic 5.4 – Average Daily Usage (ADU)

Before we close, let's establish why Inventory Position is an important prerequisite for Average Daily Usage.

Sa Topic 5.3, natutunan natin kung gaano karaming inventory ang mayroon tayo after considering supply and demand.

But there is another important question:

**How quickly are we consuming that inventory?**

For example:

- Company A has 10,000 kg of raw material.
- Company B has 5,000 kg of raw material.

Initially, mas marami ang inventory ni Company A.

But suppose:

- Company A consumes 100 kg per day.
- Company B consumes 500 kg per day.

Company A has more inventory in absolute quantity, but Company B may have a more critical replenishment situation because its consumption rate is higher.

This introduces our next concept:

**Average Daily Usage (ADU)**

| Topic | Main question |
|---|---|
| 5.3 Inventory Position | How much supply do we have relative to our commitments? |
| 5.4 Average Daily Usage | How quickly are we consuming inventory? |

Eventually, these concepts will help us understand Days of Supply (DOS), which tells us approximately how long our inventory can support consumption.

---

## Lesson Completion Checkpoint

**Module 5 – Topic 5.3**

| Item | Status |
|---|---|
| Lesson discussion | Completed |
| Knowledge check | Awaiting your answers |
| Next topic | 5.4 Average Daily Usage |

**My recommendation:** Take your time answering Questions 4–6. Those three exercises are particularly important because they test whether you can move beyond calculating inventory figures and actually interpret supply availability from an S&OP perspective.

Hindi lang natin gustong malaman kung paano mag-compute ng inventory position. Gusto nating matutunan kung paano gamitin ang result para makagawa ng tamang business decision.

We will proceed to Topic 5.4 only after you finish this lesson and confirm.
