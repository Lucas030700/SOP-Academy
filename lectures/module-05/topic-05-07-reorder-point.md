# Module 5 – Inventory Management
## Topic 5.7: Reorder Point (ROP)

**Learning Objective:** Understand how companies determine the right time to replenish inventory so that sufficient stock remains available while waiting for incoming materials.

---

# 1. Topic Overview

Imagine na nagtatrabaho ka sa isang manufacturing company. May raw material kayong ginagamit araw-araw sa production.

For example:

- Daily consumption: 100 kg
- Supplier lead time: 10 days
- Safety stock: 300 kg
- Current inventory: 1,500 kg

May tanong ang Procurement team:

**At what inventory level should we place a new purchase order?**

Hindi puwedeng hintayin na maubos ang material bago mag-order. Bakit? Dahil kahit mag-place ka ngayon ng purchase order, hindi naman agad darating ang material. Kailangan mo pang maghintay ng 10 days.

Dito pumapasok ang **Reorder Point (ROP).**

### What will we discuss?

Sa topic na ito, pag-aaralan natin kung paano kinakalkula ang inventory level kung saan dapat nang mag-trigger ng replenishment.

Pag-uusapan natin kung paano pinagsasama ang:

1. Average Daily Usage (ADU)
2. Replenishment Lead Time
3. Safety Stock
4. Inventory Position
5. Replenishment Quantity

### Why is ROP important in S&OP?

Ang ROP ay isang inventory planning parameter na tumutulong sa company na malaman kung kailan kailangang mag-replenish ng raw materials, components, or other inventory items.

Kapag mali ang ROP:

- Too low: Higher risk of stockouts and production interruptions.
- Too high: Excess inventory, higher carrying costs, and tied-up working capital.

Sa S&OP, mahalaga ito dahil kailangan nating i-align ang material availability sa production requirements at expected demand.

### Connection to previous topics

| Previous topic | Connection to ROP |
|---|---|
| 5.4 – ADU | Provides the average daily consumption rate. |
| 5.5 – DOS | Tells us how long current inventory can support consumption. |
| 5.6 – Lead Time and Safety Stock | Provides the replenishment waiting period and inventory buffer. |
| **5.7 – ROP** | Combines these elements to determine when to replenish. |
| 5.8 – Inventory Turnover | Evaluates how efficiently inventory is being consumed and replenished over time. |

**Main idea:** ADU tells us how fast we consume inventory. Lead time tells us how long we wait for replenishment. Safety stock protects us from uncertainty. ROP combines them to determine when to order.

---

# 2. Layman's Explanation

## 2.1 Understanding ROP through a simple example

Imagine may tubig kang iniimbak sa bahay.

- You consume 2 gallons of water every day.
- Your water supplier takes 5 days to deliver.
- You want to maintain an emergency reserve of 3 gallons.

Kung mag-order ka lang kapag wala ka nang tubig, magiging problema iyon dahil 5 days ka pang maghihintay.

So, kailangan mong mag-order habang may natitira pang tubig.

Let's calculate:

| Requirement | Quantity |
|---|---:|
| Daily consumption | 2 gallons |
| Delivery lead time | 5 days |
| Safety stock | 3 gallons |

During the 5-day waiting period:

\[
2 \times 5 = 10 \text{ gallons}
\]

Kailangan mo ng 10 gallons para masuportahan ang consumption habang naghihintay.

Pero gusto mo ring may 3 gallons na reserve.

Therefore:

\[
ROP = 10 + 3
\]

<box border radius="lg" padding={3} gap={2}>
  <text color="secondary" weight="medium" size="sm">REORDER POINT</text>
  <title size="2xl" color="success" tabularNums>13 gallons</title>
  Kapag bumaba na sa 13 gallons ang relevant inventory position, kailangan nang mag-trigger ng replenishment.
</box>

Bakit 13?

- 10 gallons: Expected consumption during delivery.
- 3 gallons: Emergency reserve.

Hindi natin hinihintay na maubos ang 13 gallons. In fact, iyon ang signal na kailangan na nating umorder.

## 2.2 What happens after reaching ROP?

Let's visualize the sequence.

<box border radius="lg" padding={3} gap={3}>
  <title size="lg">Inventory replenishment cycle</title>
  <list connector="solid" marker="number" gap={3}>
    <list-item>
      **Inventory is available**

      May stock pa para sa regular consumption.
    </list-item>
    <list-item>
      **Inventory reaches ROP**

      Naabot na ang predetermined replenishment trigger.
    </list-item>
    <list-item>
      **Purchase order is released**

      Nag-order na sa supplier.
    </list-item>
    <list-item>
      **Waiting during lead time**

      Patuloy ang consumption habang hinihintay ang delivery.
    </list-item>
    <list-item>
      **New material arrives**

      Nadadagdagan ulit ang available inventory.
    </list-item>
    <list-item>
      **Inventory cycle continues**

      Uulit ang process habang may demand.
    </list-item>
  </list>
</box>

Ang mahalagang concept dito: **ROP is a trigger, not an order quantity.**

Hindi ibig sabihin na kapag ROP mo ay 13 gallons, 13 gallons din ang o-orderin mo.

Ang ROP ang nagsasabi kung KAILAN mag-order. Ang order quantity naman ang nagsasabi kung GAANO KARAMI ang o-orderin.

---

# 3. Technical Explanation

## 3.1 Formal Definition

**Reorder Point (ROP)** is the predetermined inventory position at which a replenishment order should be initiated to maintain sufficient inventory during the replenishment lead time while accounting for expected demand and, when applicable, safety stock.

In simpler technical terms:

ROP is the inventory threshold used to trigger replenishment before inventory becomes insufficient to support demand.

The standard formula is:

\[
\boxed{ROP=(ADU \times LT)+SS}
\]

Where:

| Variable | Definition | Unit |
|---|---|---|
| ROP | Reorder Point | Units, kg, liters, etc. |
| ADU | Average Daily Usage | Units/day |
| LT | Replenishment Lead Time | Days |
| SS | Safety Stock | Units |

The formula has two major components:

\[
ROP = \underbrace{ADU \times LT}_{\text{Lead Time Demand}} + \underbrace{SS}_{\text{Protection Buffer}}
\]

Let's examine each component in detail.

## 3.2 Difference Between ROP, Safety Stock, and Minimum Stock

These terms are related, but they are not interchangeable.

| Concept | Meaning | Purpose |
|---|---|---|
| Reorder Point | Inventory level that triggers replenishment | Determines when to order |
| Safety Stock | Additional inventory maintained as a buffer | Protects against uncertainty |
| Minimum Stock | Lowest inventory level permitted under a company's inventory policy | Defines an inventory limit or control threshold |

Important distinction:

**Safety stock is a component of ROP, not the same thing as ROP.**

For example:

- Lead time demand = 1,000 kg
- Safety stock = 300 kg
- ROP = 1,300 kg

If your inventory position reaches 1,300 kg, replenishment should be triggered.

The 300 kg is the reserve you intend to protect, while the 1,300 kg is the trigger level.

Also, minimum stock is a company-defined parameter. Its exact meaning can differ between organizations and ERP systems. It should not automatically be assumed to equal safety stock.

---

# 4. Detailed Discussion

## 4.1 ROP Components

### A. Average Daily Usage (ADU)

ADU represents the average quantity of inventory consumed per day.

For example:

A manufacturing company consumes 3,000 kg of ceramic powder over 30 production days.

\[
ADU=\frac{3,000}{30}=100\text{ kg/day}
\]

Interpretation:

The company consumes an average of 100 kg of ceramic powder per production day.

**Important consideration:** The denominator matters.

If the material is consumed only during operating days, using calendar days without adjustment can produce an incorrect ADU.

For example:

- 3,000 kg consumed over 30 operating days = 100 kg/operating day.
- 3,000 kg consumed over 30 calendar days = 100 kg/calendar day.

These are different demand rates if the company does not operate every calendar day.

Choose a demand rate and lead-time unit that are consistent.

### B. Replenishment Lead Time

Replenishment lead time refers to the time between initiating a replenishment order and having the material available for use.

It may include:

| Lead time component | Example |
|---|---|
| Purchase order processing | 1 day |
| Supplier processing | 3 days |
| Material preparation | 2 days |
| Transportation | 4 days |
| Receiving and inspection | 1 day |
| **Total** | **11 days** |

In this example:

\[
LT=1+3+2+4+1=11\text{ days}
\]

Why is this important?

Because the company must have enough inventory to support consumption throughout the entire replenishment period.

If the actual lead time is 15 days but the ROP calculation assumes 10 days, the company may order too late.

**Professional consideration:** Use the lead time that represents the actual elapsed time from order release until usable inventory becomes available. Include receiving, inspection, and quality release where applicable.

### C. Safety Stock

Safety stock is additional inventory maintained to protect against uncertainty in demand and/or replenishment lead time.

Imagine:

Your average consumption is 100 kg/day, and your supplier normally delivers in 10 days.

Expected consumption:

\[
100\times10=1,000\text{ kg}
\]

But what if:

- Production increases unexpectedly?
- A customer order is accelerated?
- Supplier delivery is delayed?
- Incoming material fails inspection?

You may need additional inventory.

Suppose safety stock is 300 kg.

That 300 kg serves as a protection buffer against unexpected situations.

Safety stock is particularly important when demand and lead time are not perfectly predictable.

### D. Demand During Lead Time

This represents the expected quantity consumed while waiting for replenishment.

Formula:

\[
\boxed{DLT=ADU\times LT}
\]

Where:

- DLT = Demand During Lead Time
- ADU = Average Daily Usage
- LT = Replenishment Lead Time

Example:

- ADU = 100 kg/day
- LT = 10 days

\[
DLT=100\times10
\]

\[
\boxed{DLT=1,000\text{ kg}}
\]

Interpretation:

The company expects to consume 1,000 kg while waiting for the supplier's delivery.

This is the fundamental quantity that ROP must cover before adding any safety buffer.

---

## 4.2 ROP Calculation Methods

There are different methods depending on the level of uncertainty and the available data.

### Method 1: Basic ROP Without Safety Stock

This is the simplest approach.

\[
\boxed{ROP=ADU\times LT}
\]

Example:

| Parameter | Value |
|---|---:|
| ADU | 150 kg/day |
| Lead time | 8 days |
| Safety stock | 0 kg |

Calculation:

\[
ROP=150\times8
\]

\[
\boxed{ROP=1,200\text{ kg}}
\]

Meaning:

The company should trigger replenishment when inventory position reaches 1,200 kg.

**When is this method appropriate?**

- Demand is relatively stable.
- Supplier lead time is reliable.
- Inventory risk is low.
- The company intentionally does not maintain safety stock.

However, this method provides no additional protection against demand increases or delivery delays.

It is generally more vulnerable to stockouts when uncertainty exists.

### Method 2: ROP With Safety Stock

This is the commonly used approach for inventory planning.

\[
\boxed{ROP=(ADU\times LT)+SS}
\]

Example:

| Parameter | Value |
|---|---:|
| ADU | 150 kg/day |
| Lead time | 8 days |
| Safety stock | 400 kg |

Step 1: Calculate demand during lead time.

\[
150\times8=1,200\text{ kg}
\]

Step 2: Add safety stock.

\[
ROP=1,200+400
\]

<box border radius="lg" padding={3} gap={1}>
  <text color="secondary" weight="medium" size="sm">ROP WITH SAFETY STOCK</text>
  <title size="2xl" color="success" tabularNums>1,600 kg</title>
  <text color="secondary" size="xs">1,200 kg lead-time demand + 400 kg safety stock</text>
</box>

Interpretation:

Kapag ang inventory position ay bumaba sa 1,600 kg or below, dapat nang i-evaluate at i-trigger ang replenishment according to the company's ordering policy.

Why add safety stock?

Because the company does not want to consume its entire expected lead-time demand without any protection against uncertainty.

### Method 3: ROP Using Variable Demand and Variable Lead Time

Ito naman ang mas advanced na approach.

Sa basic calculation, assumed natin na:

- Demand is constant.
- Lead time is constant.

Pero sa actual manufacturing operations, hindi palaging ganoon.

Example:

| Situation | Daily demand | Lead time |
|---|---:|---:|
| Normal condition | 100 kg/day | 10 days |
| High-demand condition | 130 kg/day | 12 days |
| Low-demand condition | 90 kg/day | 8 days |

Kapag nagbabago ang demand at lead time, mas nagiging unpredictable ang inventory consumption.

There are two common approaches.

**Approach A: Statistical safety stock**

For independent demand and lead-time variability, a commonly used statistical model is:

\[
\boxed{ROP=\bar d\bar L+SS}
\]

Where:

\[
SS=Z\sqrt{\bar L\sigma_d^2+\bar d^2\sigma_L^2}
\]

Definitions:

| Variable | Meaning |
|---|---|
| \(\bar d\) | Average demand per day |
| \(\bar L\) | Average lead time in days |
| \(\sigma_d\) | Standard deviation of daily demand |
| \(\sigma_L\) | Standard deviation of lead time |
| \(Z\) | Service-level factor |
| SS | Statistical safety stock |

The formula assumes daily demand variability and lead-time variability are independent, and uses an appropriate demand distribution approximation.

Illustrative example:

- Average daily demand = 100 kg/day
- Average lead time = 10 days
- Demand standard deviation = 15 kg/day
- Lead-time standard deviation = 2 days
- Z = 1.65

Step 1: Calculate average lead-time demand.

\[
100\times10=1,000\text{ kg}
\]

Step 2: Calculate safety stock.

\[
SS=1.65\sqrt{10(15^2)+100^2(2^2)}
\]

\[
SS=1.65\sqrt{2,250+40,000}
\]

\[
SS=1.65\sqrt{42,250}
\]

\[
SS=1.65(205.55)
\]

\[
SS\approx339.16\text{ kg}
\]

Step 3: Calculate ROP.

\[
ROP=1,000+339.16
\]

\[
\boxed{ROP\approx1,340\text{ kg}}
\]

Interpretation:

The company should use approximately 1,340 kg as its reorder point under these assumptions.

The Z value of 1.65 corresponds approximately to a 95% one-sided cycle service level under the normal-distribution assumption.

It does not mean a 95% probability of never experiencing a stockout over the entire year.

**Approach B: Historical lead-time demand**

Another method is to analyze actual historical consumption during actual replenishment lead times.

For example:

| Replenishment cycle | Actual demand during lead time |
|---|---:|
| Cycle 1 | 1,150 kg |
| Cycle 2 | 1,280 kg |
| Cycle 3 | 1,100 kg |
| Cycle 4 | 1,350 kg |
| Cycle 5 | 1,200 kg |

A company may analyze the distribution of these observations and select a suitable percentile based on its desired service level.

This approach can capture actual combined demand and lead-time variability, provided the historical data is representative of future operations.

**Which method should be used?**

| Situation | Suitable method |
|---|---|
| Stable demand and lead time | Basic ROP |
| Some uncertainty with a defined buffer | ROP with safety stock |
| Demand and lead time variability can be measured | Statistical ROP |
| Reliable historical lead-time demand data | Historical percentile approach |

Important: Huwag basta mag-average ng demand at lead time kung may significant variability. The average may hide periods of unusually high consumption or long supplier delays.

---

## 4.3 Matching Units of Measurement

One of the most common calculation mistakes is using inconsistent time units.

Remember:

\[
ADU\times LT
\]

The time unit of ADU must match the time unit of lead time.

Example 1: ADU in kg/day and lead time in days.

- ADU = 100 kg/day
- LT = 12 days

\[
100\times12=1,200\text{ kg}
\]

Example 2: ADU in kg/day and lead time in hours.

- ADU = 100 kg/day
- LT = 72 hours

Convert hours to days:

\[
72/24=3\text{ days}
\]

Then:

\[
100\times3=300\text{ kg}
\]

Example 3: ADU in kg/production day and lead time in calendar days.

- ADU = 100 kg/production day
- Lead time = 14 calendar days
- Company operates 5 days/week.

For a simplified illustration, 14 calendar days represent approximately 10 operating days if there are no holidays or unusual shutdowns.

\[
100\times10=1,000\text{ kg}
\]

This calculation assumes consumption occurs only on operating days and that the 14-day period contains 10 operating days.

In an actual company, use the production calendar to determine the expected consumption over the lead-time period.

**Rule:** Do not multiply kg per production day by calendar days without checking the operating schedule.

---

## 4.4 Inventory on Hand vs. Inventory Position

Ito ang isa sa pinakamahalagang concepts sa ROP.

Maraming beginners ang iniisip na kapag bumaba na ang physical inventory sa ROP, saka lang dapat umorder.

Pero may problema rito.

What if may existing purchase order na paparating?

Kung hindi mo isasama iyon sa calculation, baka mag-order ka ulit kahit may sufficient incoming inventory na.

### A. Inventory on Hand

This is the actual physical inventory currently available in the warehouse or storage location.

Example:

- Physical inventory = 1,000 kg

That is your on-hand quantity.

### B. Inventory Position

Inventory position considers more than physical inventory.

A commonly used formula is:

\[
\boxed{IP=OH+OO-AL-BO}
\]

Where:

| Variable | Meaning |
|---|---|
| IP | Inventory Position |
| OH | On-Hand Inventory |
| OO | On-Order Inventory |
| AL | Allocated Inventory |
| BO | Backorders |

Depending on the company's inventory policy and ERP configuration, reservations and commitments may be represented differently. Avoid double-counting allocations and backorders.

Example:

| Inventory component | Quantity |
|---|---:|
| On-hand inventory | 1,000 kg |
| Open purchase orders | 800 kg |
| Allocated inventory | 200 kg |
| Backorders | 100 kg |

Calculation:

\[
IP=1,000+800-200-100
\]

\[
\boxed{IP=1,500\text{ kg}}
\]

Notice:

- Physical inventory = 1,000 kg
- Inventory position = 1,500 kg

Magkaiba sila.

Why?

Because the company already has 800 kg of incoming material, but 300 kg is needed to cover existing allocations and backorders.

### C. Comparing Inventory Position with ROP

Suppose:

- ROP = 1,300 kg
- Inventory position = 1,500 kg

Since:

\[
1,500>1,300
\]

No new replenishment trigger is indicated by the basic ROP rule.

Now imagine physical inventory decreases to 800 kg, while the open purchase order remains 800 kg.

\[
IP=800+800-200-100
\]

\[
IP=1,300\text{ kg}
\]

Now:

\[
IP=ROP
\]

The reorder trigger has been reached.

<box border radius="lg" padding={3} gap={2}>
  **Inventory position decision rule**
  <row align="center" justify="between">
    <text color="secondary" size="sm">IP greater than ROP</text>
    <badge color="success">Above trigger</badge>
  </row>
  <text size="sm">Normally, no additional replenishment is triggered.</text>
  <divider color="subtle"/>
  <row align="center" justify="between">
    <text color="secondary" size="sm">IP equal to ROP</text>
    <badge color="warning">Trigger reached</badge>
  </row>
  <text size="sm">Evaluate and initiate replenishment.</text>
  <divider color="subtle"/>
  <row align="center" justify="between">
    <text color="secondary" size="sm">IP below ROP</text>
    <badge color="danger">Below trigger</badge>
  </row>
  <text size="sm">Replenishment is already due under the basic policy. Assess urgency and supply risk.</text>
</box>

**Professional insight:** ROP is generally evaluated against inventory position, not merely physical on-hand stock.

However, timing matters. A purchase order that will arrive too late to prevent a shortage cannot automatically be treated as effective protection. Always review its expected delivery date and whether it is usable.

---

## 4.5 How Open Purchase Orders and Commitments Affect ROP

Let's clarify the components.

| Item | Effect on inventory position |
|---|---|
| Available on-hand stock | Increases IP |
| Open purchase order | Increases IP |
| Open production order expected to produce stock | May increase projected supply, depending on planning policy |
| Customer or production allocation | Reduces available inventory position |
| Backorders | Reduce IP |
| Cancelled purchase order | Should not be counted as incoming supply |

Important distinction:

An open purchase order is not yet physical inventory.

It is expected incoming supply.

That means you should consider:

- Is the PO confirmed by the supplier?
- Is the delivery date reliable?
- Is the material already shipped?
- Is the material subject to inspection?
- Will it arrive before the inventory becomes insufficient?

An overdue or unreliable purchase order should not be blindly treated as available protection.

For S&OP and material planning, it is useful to review both inventory position and time-phased projected inventory.

---

## 4.6 Replenishment Quantity vs. Reorder Point

As mentioned earlier:

- ROP determines WHEN to replenish.
- Replenishment quantity determines HOW MUCH to replenish.

Suppose:

- Current inventory position = 1,300 kg
- ROP = 1,300 kg
- Target inventory position after replenishment = 3,000 kg

The replenishment quantity is:

\[
Q=Target\ Inventory\ Position-IP
\]

\[
Q=3,000-1,300
\]

\[
\boxed{Q=1,700\text{ kg}}
\]

So the company needs to replenish 1,700 kg to reach its target.

But remember that actual order quantity may also be affected by:

- Minimum Order Quantity (MOQ)
- Supplier packaging requirements
- Lot size
- Storage capacity
- Purchase order constraints
- Existing scheduled receipts
- Shelf life and obsolescence risk

For example, if the supplier requires orders in multiples of 500 kg, a calculated requirement of 1,700 kg may need to be rounded to 2,000 kg, subject to company policy.

---

# 5. Practical Examples and Applications

## 5.1 Manufacturing Scenario: Raw Material Replenishment

Let's apply everything to a realistic manufacturing environment.

Imagine a company manufacturing MLCC products. One of its critical raw materials is ceramic powder.

The material is consumed continuously to support production.

### Given Information

<box border radius="lg" padding={3} gap={2}>
  <title size="lg">Ceramic Powder Inventory Profile</title>
  | Parameter | Value |
  |---|---:|
  | Average daily usage | 500 kg/day |
  | Supplier lead time | 12 days |
  | Safety stock | 1,000 kg |
  | Current on-hand inventory | 5,000 kg |
  | Open purchase order | 2,000 kg |
  | Allocated inventory | 500 kg |
  | Backorders | 0 kg |
  | Target inventory position | 10,000 kg |
</box>

We will determine:

1. What is the ROP?
2. What is the inventory position?
3. Should the company place another purchase order?
4. If replenishment is triggered, how much should it order?

### Step 1: Calculate Demand During Lead Time

Given:

\[
ADU=500\text{ kg/day}
\]

\[
LT=12\text{ days}
\]

Formula:

\[
DLT=ADU\times LT
\]

Substitute:

\[
DLT=500\times12
\]

\[
\boxed{DLT=6,000\text{ kg}}
\]

Interpretation:

The company expects to consume 6,000 kg during the supplier's 12-day replenishment period.

### Step 2: Calculate ROP

Formula:

\[
ROP=DLT+SS
\]

Substitute:

\[
ROP=6,000+1,000
\]

\[
\boxed{ROP=7,000\text{ kg}}
\]

Interpretation:

The company should initiate replenishment when its inventory position reaches 7,000 kg.

### Step 3: Calculate Inventory Position

Formula:

\[
IP=OH+OO-AL-BO
\]

Substitute:

\[
IP=5,000+2,000-500-0
\]

\[
\boxed{IP=6,500\text{ kg}}
\]

### Step 4: Compare Inventory Position with ROP

| Parameter | Quantity |
|---|---:|
| ROP | 7,000 kg |
| Inventory position | 6,500 kg |
| Difference | -500 kg |

Since:

\[
6,500<7,000
\]

<badge color="danger">Replenishment trigger reached</badge>

The company should initiate or expedite replenishment according to its purchasing policy.

Why?

Because the inventory position is already 500 kg below the reorder point.

### Step 5: Calculate Replenishment Quantity

Given:

- Target inventory position = 10,000 kg
- Current inventory position = 6,500 kg

\[
Q=10,000-6,500
\]

\[
\boxed{Q=3,500\text{ kg}}
\]

Therefore, the calculated replenishment quantity is 3,500 kg.

This is before applying MOQ, order multiples, and other purchasing constraints.

### Step 6: Interpret the Business Situation

Let's understand what this means operationally.

The company currently has 5,000 kg physically available.

It also has 2,000 kg coming from an existing purchase order.

However, after accounting for allocated inventory, the inventory position is only 6,500 kg.

The required ROP is 7,000 kg.

Therefore, replenishment is already due.

But there is another important question:

**Will the existing 2,000 kg purchase order arrive before the company runs out of usable material?**

Suppose the PO is scheduled to arrive in 5 days.

Expected consumption over 5 days:

\[
500\times5=2,500\text{ kg}
\]

Projected on-hand inventory before receipt:

\[
5,000-2,500=2,500\text{ kg}
\]

After receiving 2,000 kg:

\[
2,500+2,000=4,500\text{ kg}
\]

The company can continue production, assuming no other changes in demand, allocations, or material availability.

However, it still needs to replenish because its inventory position is below ROP.

This illustrates why ROP monitoring and time-phased inventory monitoring should work together.

---

## 5.2 Correct vs. Incorrect ROP Monitoring

| Incorrect approach | Correct approach |
|---|---|
| Wait until physical stock reaches zero. | Trigger replenishment before stock becomes insufficient. |
| Compare only on-hand inventory with ROP. | Generally compare inventory position with ROP. |
| Ignore open purchase orders. | Include valid incoming supply. |
| Assume supplier lead time never changes. | Monitor actual lead-time performance. |
| Use historical ADU without reviewing demand changes. | Use an appropriate demand rate or forecast. |
| Use safety stock as the order quantity. | Separate the reorder trigger from order quantity. |
| Ignore allocations and commitments. | Account for existing requirements. |

A common mistake is assuming that a high on-hand balance automatically means sufficient inventory.

Hindi palaging ganoon.

For example, you may have 10,000 kg physically available, but 9,000 kg is already committed to production.

Your available inventory is effectively much lower.

---

# 6. Formulas and Calculations: Complete Reference

Let's consolidate the formulas you should know as an S&OP analyst.

## 6.1 Formula Summary

| Calculation | Formula |
|---|---|
| Average Daily Usage | \(ADU=\frac{Total\ Usage}{Number\ of\ Days}\) |
| Demand During Lead Time | \(DLT=ADU\times LT\) |
| ROP without Safety Stock | \(ROP=ADU\times LT\) |
| ROP with Safety Stock | \(ROP=(ADU\times LT)+SS\) |
| Inventory Position | \(IP=OH+OO-AL-BO\) |
| Replenishment Quantity | \(Q=Target\ IP-Current\ IP\) |
| Statistical Safety Stock | \(SS=Z\sqrt{L\sigma_d^2+d^2\sigma_L^2}\) |

## 6.2 Additional Calculation: Inventory Coverage Before Replenishment

Useful rin malaman kung ilang days ang remaining inventory coverage.

Basic formula:

\[
DOS=\frac{On-Hand\ Inventory}{ADU}
\]

Example:

- On-hand inventory = 5,000 kg
- ADU = 500 kg/day

\[
DOS=\frac{5,000}{500}=10\text{ days}
\]

Interpretation:

May approximately 10 days of inventory coverage ang company based on the assumed daily consumption.

If supplier lead time is 12 days:

\[
10<12
\]

May potential shortage risk bago dumating ang replenishment, assuming walang ibang usable incoming inventory.

This is where ROP and DOS complement each other:

- ROP tells us when to order.
- DOS tells us how long inventory can support consumption.

## 6.3 Common Calculation Errors

1. **Incorrect time units:** Multiplying kg/day by hours without conversion.
2. **Incorrect ADU:** Using calendar days when demand occurs only on operating days.
3. **Ignoring lead-time variability:** Assuming suppliers always deliver on schedule.
4. **Double-counting incoming inventory:** Counting the same PO multiple times.
5. **Ignoring commitments:** Treating allocated stock as freely available.
6. **Incorrect safety stock:** Adding an arbitrary buffer without considering demand and supply uncertainty.
7. **Confusing ROP with order quantity:** Ordering an amount equal to the ROP.
8. **Ignoring time-phased supply:** Counting an incoming PO even when it arrives too late to prevent a shortage.

One more important point: ROP is not automatically recalculated every time inventory changes. Inventory changes trigger replenishment decisions, while the ROP parameter itself is reviewed and updated when demand, lead time, service-level requirements, or planning assumptions change.

---

# 7. Business Perspective and S&OP Decision-Making

Now let's move from calculation to actual business decisions.

## 7.1 How an S&OP Analyst Uses ROP

An S&OP analyst does not simply calculate ROP and send it to Procurement.

The analyst uses ROP as one of the indicators for identifying potential material replenishment requirements.

Typical responsibilities include:

**1. Monitor material availability**

Identify materials approaching or falling below their ROP.

**2. Review demand changes**

Check whether the ADU or future demand has increased or decreased.

**3. Review supplier performance**

Determine whether actual supplier lead time differs from the planning assumption.

**4. Evaluate existing supply**

Review open POs, scheduled receipts, and production supply.

**5. Identify supply risks**

Determine whether available inventory can support future production requirements.

**6. Coordinate replenishment decisions**

Work with Procurement, Production Planning, and other stakeholders to address potential shortages.

## 7.2 How Changes in Business Conditions Affect ROP

Let's examine four scenarios.

| Business situation | Effect on ROP | Business implication |
|---|---|---|
| Demand increases | ROP increases | Earlier replenishment trigger |
| Demand decreases | ROP decreases | Potentially lower inventory requirement |
| Lead time increases | ROP increases | More inventory needed while waiting |
| Safety stock increases | ROP increases | Higher protection against uncertainty |

### Scenario A: Demand increases

Original:

- ADU = 100 kg/day
- LT = 10 days
- SS = 200 kg

\[
ROP=(100\times10)+200
\]

\[
ROP=1,200\text{ kg}
\]

New ADU = 150 kg/day.

\[
ROP=(150\times10)+200
\]

\[
ROP=1,700\text{ kg}
\]

The ROP increased by 500 kg.

Business implication:

If production requirements increase, the company needs to replenish earlier to support the higher consumption rate.

### Scenario B: Supplier lead time increases

Original:

- ADU = 100 kg/day
- LT = 10 days
- SS = 200 kg

\[
ROP=1,200\text{ kg}
\]

New lead time = 15 days.

\[
ROP=(100\times15)+200
\]

\[
ROP=1,700\text{ kg}
\]

The company now needs an additional 500 kg at its reorder trigger.

Business implication:

Longer supplier lead times increase inventory exposure and may require earlier purchasing decisions.

### Scenario C: Safety stock increases

Original safety stock = 200 kg.

New safety stock = 500 kg.

\[
ROP=(100\times10)+500
\]

\[
ROP=1,500\text{ kg}
\]

Business implication:

The company is increasing its protection against uncertainty, but it also needs to consider the additional working capital and storage requirements.

## 7.3 Risks of Incorrect ROP Settings

| Incorrect ROP setting | Possible consequence |
|---|---|
| ROP too low | Material shortage and production interruption |
| ROP too high | Excess inventory and increased carrying costs |
| Outdated ADU | Incorrect replenishment timing |
| Incorrect lead time | Premature or delayed replenishment |
| Excessive safety stock | Unnecessary inventory investment |
| Insufficient safety stock | Higher stockout risk |
| Incorrect inventory position | Duplicate orders or missed replenishment |

### A professional S&OP perspective

Imagine two materials:

| Parameter | Material A | Material B |
|---|---:|---:|
| ADU | 500 kg/day | 100 kg/day |
| Lead time | 10 days | 30 days |
| Safety stock | 1,000 kg | 500 kg |
| ROP | 6,000 kg | 3,500 kg |

Material A has a higher ROP, but Material B has a much longer supplier lead time.

Hindi ibig sabihin na mas important ang Material A simply because it has a higher ROP.

An S&OP analyst should also consider:

- Material criticality
- Production dependency
- Supplier reliability
- Substitution availability
- Inventory value
- Customer delivery commitments
- Potential production downtime

**ROP is an inventory control parameter, not a complete material risk assessment.**

A material with a low ROP can still be extremely critical if it is required for production and has no substitute.

---

# 8. Key Takeaways

Ito ang mga concepts na dapat mong talagang maintindihan bago tayo mag-move forward.

| Concept | What you should remember |
|---|---|
| Reorder Point | Determines WHEN to replenish inventory. |
| ADU | Measures average daily material consumption. |
| Lead Time | Determines how long the company waits for replenishment. |
| Demand During Lead Time | Expected consumption while waiting for incoming supply. |
| Safety Stock | Additional inventory that protects against uncertainty. |
| ROP with Safety Stock | Lead-time demand plus safety stock. |
| Inventory on Hand | Physical inventory currently available. |
| Inventory Position | On-hand plus incoming supply minus relevant commitments. |
| Replenishment Quantity | Determines HOW MUCH to order. |
| DOS | Indicates how long inventory can support consumption. |

### Five important principles

1. ROP is a replenishment trigger, not an order quantity.
2. Safety stock is a component of ROP, not the same as ROP.
3. Inventory position is generally more appropriate than physical on-hand inventory when evaluating the reorder trigger.
4. Demand and lead-time variability must be considered when setting an appropriate safety buffer.
5. ROP must be reviewed when business conditions change.

### Connection to Topic 5.8: Inventory Turnover

Now that you understand how companies determine when to replenish inventory, the next logical question is:

**How efficiently does the company use and replenish its inventory over time?**

That is where Inventory Turnover comes in.

For example:

- ROP tells us when to order.
- Inventory Turnover tells us how frequently inventory is sold or consumed relative to average inventory over a period.

These two metrics complement each other.

A company may have a properly configured ROP but still maintain inefficiently high inventory levels.

That is why we need both replenishment control and inventory efficiency analysis.

---

# 9. Knowledge Check and Exercises

<badge color="success">Assessment: Topic 5.7</badge>

Let's test your understanding. Hindi muna natin ilalagay ang answers. I want you to solve them first so we can identify which concepts you already understand and which ones need reinforcement.

## Exercise 1: Conceptual Understanding

**Question 1.** What is the primary purpose of Reorder Point?

A. Determine how much inventory should be ordered.

B. Determine when inventory replenishment should be triggered.

C. Determine how much inventory is consumed annually.

D. Determine the total value of inventory.

**Question 2.** What is the difference between ROP and safety stock?

**Question 3.** Why is inventory position generally preferred over physical on-hand inventory when evaluating ROP?

## Exercise 2: Numerical Calculations

A manufacturing company has the following information:

| Parameter | Value |
|---|---:|
| ADU | 250 kg/day |
| Supplier lead time | 8 days |
| Safety stock | 500 kg |
| On-hand inventory | 3,000 kg |
| Open purchase orders | 1,000 kg |
| Allocated inventory | 300 kg |
| Backorders | 200 kg |

**Question 4.** Calculate demand during lead time.

**Question 5.** Calculate ROP.

**Question 6.** Calculate inventory position.

**Question 7.** Should the company trigger replenishment? Explain your decision by comparing inventory position with ROP.

## Exercise 3: Business Scenario Analysis

A supplier suddenly informs the Procurement team that its delivery lead time will increase from 10 days to 15 days.

The material's ADU remains at 200 kg/day, and safety stock remains at 500 kg.

**Question 8.**

- Calculate the original ROP.
- Calculate the new ROP.
- How much additional inventory is needed at the reorder trigger?
- What business risks might occur if the company does not update its ROP?

## Exercise 4: Professional-Level Thinking

**Question 9.**

A company has:

- ROP = 5,000 kg
- On-hand inventory = 3,000 kg
- Open purchase orders = 3,000 kg
- Allocated inventory = 500 kg
- Backorders = 0 kg

The purchasing team decides not to place another order because physical inventory has not yet reached zero.

Do you agree with this decision? Explain what the inventory position tells you and what additional information you would check before making the final replenishment decision.

**Question 10.**

A company experiences frequent stockouts even though its inventory position rarely falls below ROP.

As an S&OP analyst, what possible causes would you investigate?

Consider demand, lead time, safety stock, inventory accuracy, and incoming supply.

---

## How to submit your answers

You can answer one question at a time or submit all ten together.

I will evaluate your answers using three learning levels:

| Level | Evaluation focus |
|---|---|
| Level 1 – Understanding | Do you understand the fundamental concepts? |
| Level 2 – Technical Application | Can you calculate ROP and interpret inventory data correctly? |
| Level 3 – Professional Analysis | Can you identify risks and recommend appropriate business actions? |

I will explain your mistakes, correct incomplete reasoning, and provide the proper calculations after you attempt each question.

**Completion target:** You should be able to independently calculate ROP, evaluate inventory position, identify replenishment triggers, and explain the business implications of changing demand and supplier lead times.

*We will stay on Topic 5.7 until you are comfortable with the concepts and exercises. Topic 5.8 will only begin when you confirm.*
