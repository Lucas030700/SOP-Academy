# Module 5 – Inventory Management
## Topic 5.6: Lead Time and Safety Stock

**Level 1 → Level 2 → Level 3**  
**S&OP Fundamentals**

**Learning objective:** Understand how companies determine how much inventory protection they need while waiting for replenishment, especially when customer demand fluctuates and suppliers experience delays.

---

# 1. Topic Overview

Sa previous topics, pinag-aralan natin kung paano sukatin ang inventory consumption at kung ilang araw kayang suportahan ng available inventory ang demand.

Let's connect those concepts:

| Previous topic | Main question |
|---|---|
| 5.4 Average Daily Usage (ADU) | Gaano karaming inventory ang nauubos kada araw? |
| 5.5 Days of Supply (DOS) | Ilang araw tatagal ang available inventory? |
| **5.6 Lead Time and Safety Stock** | Gaano karaming inventory ang kailangan nating protektahan habang naghihintay ng replenishment? |
| 5.7 Reorder Point (ROP) | Kailan tayo dapat mag-order ulit? |

Notice the progression.

- ADU measures consumption.
- DOS measures inventory coverage.
- Lead Time measures the waiting period for replenishment.
- Safety Stock provides protection against uncertainty.
- ROP combines demand during lead time and safety stock to determine when replenishment should happen.

### Why is this important in S&OP?

Imagine a manufacturing company that consumes 500 kg of raw material every day.

Its supplier needs 10 days to deliver a new order.

The company cannot simply wait until its inventory reaches zero before ordering. It must consider:

1. How much material will be consumed while waiting?
2. What if demand suddenly increases?
3. What if the supplier delivers late?
4. How much additional inventory should be maintained to protect production?

These are the problems that Lead Time and Safety Stock help solve.

**The central idea:** We need enough inventory to cover expected consumption during replenishment, plus an additional buffer to protect against uncertainty.

---

# 2. Layman's Explanation

Let's use a simple example.

Imagine that you own a small manufacturing business producing electrical components.

Your production line consumes 100 kg of a particular raw material every day.

You order from a supplier, but delivery takes 7 days.

You place an order today. However, hindi mo matatanggap agad ang material. You must continue production while waiting.

At 100 kg per day:

\[
100 \times 7 = 700\text{ kg}
\]

Therefore, you need approximately 700 kg to cover expected consumption during lead time.

But here's the problem.

What if your production suddenly consumes 120 kg per day instead of 100 kg?

What if the supplier experiences a transportation delay of another 2 days?

Your original 700 kg assumption may no longer be sufficient.

This is where Safety Stock comes in.

## 2.1 Understanding Lead Time

Lead Time is simply the time you wait between initiating an order or replenishment activity and receiving the material in a usable condition.

For example:

- Monday: Purchase order submitted.
- Tuesday: Supplier confirms the order.
- Wednesday to Friday: Supplier prepares the material.
- Saturday to Sunday: Material is transported.
- Monday: Material arrives and passes receiving inspection.

Your replenishment lead time is 7 days, assuming the starting and ending timestamps follow the same measurement convention.

## 2.2 Understanding Safety Stock

Safety Stock is additional inventory maintained to protect operations against unexpected changes in demand or supply.

Let's say:

- Expected consumption during lead time: 700 kg
- Additional protection: 200 kg

Your inventory protection requirement becomes:

\[
700 + 200 = 900\text{ kg}
\]

The additional 200 kg is your Safety Stock.

Think of it as an operational buffer.

Hindi ibig sabihin na kailangan mong gamitin agad ang additional 200 kg. Ideally, it remains available for situations where actual demand or delivery performance becomes worse than expected.

## 2.3 What happens without Safety Stock?

### Scenario A: Without Safety Stock

Expected consumption: 100 kg/day | Lead time: 7 days

Available protection: **700 kg**

If consumption increases or delivery is delayed, the company may run out of material before replenishment arrives.

### Scenario B: With Safety Stock

Expected consumption: 700 kg | Safety Stock: 200 kg

Available protection: **900 kg**

The additional buffer gives the company more time to absorb unexpected consumption or delivery delays.

**Important distinction:** Safety Stock does not eliminate stockout risk. It reduces the risk to an acceptable level, depending on how much protection the company chooses to maintain.

---

# 3. Technical Explanation

Now let's introduce the formal inventory management terminology.

## 3.1 Lead Time Fundamentals

**Lead Time** is the elapsed time between the initiation of a replenishment process and the point when the replenished inventory becomes available for its intended use.

In inventory planning, lead time is particularly important because it determines how long the company must rely on existing inventory before receiving new supply.

### A. Types of Lead Time

There are several types of lead time depending on the replenishment process.

| Type | Meaning | Example |
|---|---|---|
| Procurement Lead Time | Time required to purchase and receive materials from an external supplier | Purchasing raw materials |
| Production Lead Time | Time required to manufacture an item internally | Producing a component |
| Replenishment Lead Time | Total time required to replenish inventory | Ordering, manufacturing, transporting, and receiving |

Let's examine each.

**1. Procurement Lead Time**

Ito ang waiting period kapag bumili ka ng materials from an external supplier.

Example:

- PO processing: 1 day
- Supplier preparation: 4 days
- Transportation: 3 days
- Receiving inspection: 1 day

Total procurement lead time:

\[
1+4+3+1=9\text{ days}
\]

**2. Production Lead Time**

Ito naman ang time required to manufacture an item.

For example:

- Material preparation: 1 day
- Processing: 2 days
- Quality inspection: 1 day

Total production lead time:

\[
1+2+1=4\text{ days}
\]

**3. Replenishment Lead Time**

Ito ang actual time na kailangang hintayin bago maging available ang inventory.

Depending on the supply chain, it may include multiple stages.

For example, if a material must be purchased, transported, and inspected:

\[
1+4+3+1=9\text{ days}
\]

If a component must first be manufactured internally before being delivered to another facility, its replenishment lead time may include both production and transportation.

**Important:** Do not automatically add every type of lead time together. Some activities happen simultaneously, while others happen sequentially. Only include the actual elapsed activities relevant to the replenishment process.

### B. Planned Lead Time vs. Actual Lead Time

This distinction is extremely important in supply chain planning.

| Planned Lead Time | Actual Lead Time |
|---|---|
| Expected or standard delivery duration | Actual elapsed delivery duration |
| Used in planning systems | Observed from actual transactions |
| Based on supplier agreements or planning assumptions | Based on actual supplier performance |
| May not reflect current operating conditions | Reflects what really happened |

Example:

A company sets its supplier lead time at 10 days.

However, actual deliveries are:

| Purchase Order | Actual Lead Time |
|---|---:|
| PO 001 | 9 days |
| PO 002 | 11 days |
| PO 003 | 13 days |
| PO 004 | 10 days |
| PO 005 | 15 days |

Average actual lead time:

\[
\frac{9+11+13+10+15}{5}=11.6\text{ days}
\]

The planned lead time is 10 days, but the observed average is 11.6 days.

This difference can create inventory planning problems.

If the company continues using an outdated 10-day assumption, it may consistently underestimate its replenishment requirements.

### C. Why Does Lead Time Affect Inventory Requirements?

The longer the lead time, the more inventory the company needs to cover expected consumption while waiting for replenishment.

Assume daily consumption is 100 kg.

| Lead Time | Expected Consumption |
|---:|---:|
| 3 days | 300 kg |
| 5 days | 500 kg |
| 7 days | 700 kg |
| 10 days | 1,000 kg |
| 15 days | 1,500 kg |

This demonstrates an important relationship:

**Longer lead time = Greater inventory exposure.**

However, hindi ibig sabihin na automatically dapat mataas ang safety stock kapag mahaba ang lead time.

There are two separate considerations:

- Expected inventory consumption during lead time.
- Additional inventory required to protect against uncertainty.

The first is normal demand coverage. The second is safety stock.

---

## 3.2 Safety Stock Fundamentals

### A. Technical Definition

**Safety Stock** is the additional inventory maintained above expected demand requirements to protect against uncertainty in demand, supply, or replenishment lead time.

Its primary purpose is to reduce the probability of inventory shortages and production interruptions.

In manufacturing, safety stock is particularly important for materials that:

- Have long supplier lead times.
- Experience unpredictable consumption.
- Have unreliable delivery schedules.
- Are critical to production.
- Have limited alternative suppliers.
- Cannot be easily substituted.

### B. Safety Stock vs. Cycle Stock vs. Excess Inventory

These three concepts are related, but they are not interchangeable.

| Inventory Type | Meaning | Purpose |
|---|---|---|
| Cycle Stock | Inventory used to satisfy normal demand between replenishment orders | Supports routine consumption |
| Safety Stock | Additional inventory maintained against uncertainty | Protects against unexpected events |
| Excess Inventory | Inventory above what is reasonably required based on current needs and policies | Often results from overstocking or poor planning |

Let's use an example.

A manufacturing facility has:

- Expected consumption during lead time: 4,000 kg
- Safety stock: 1,000 kg
- Actual inventory available: 6,500 kg

The inventory composition is:

| Component | Quantity |
|---|---:|
| Expected demand coverage | 4,000 kg |
| Safety stock | 1,000 kg |
| Inventory above calculated requirement | 1,500 kg |
| **Total inventory** | **6,500 kg** |

The additional 1,500 kg may be considered potential excess against this simplified requirement.

However, before classifying it as excess, the analyst must check other requirements such as:

- Open customer orders.
- Existing production schedules.
- Upcoming demand increases.
- Minimum order quantities.
- Other inventory policies.

**Important:** Safety stock is not automatically excess inventory. It is deliberately maintained for a defined operational purpose.

### C. How Safety Stock Protects Against Uncertainty

There are two major sources of uncertainty.

**1. Demand Variability**

This happens when actual material consumption differs from expected consumption.

Example:

| Day | Expected Consumption | Actual Consumption |
|---|---:|---:|
| Monday | 100 kg | 105 kg |
| Tuesday | 100 kg | 120 kg |
| Wednesday | 100 kg | 95 kg |
| Thursday | 100 kg | 130 kg |
| Friday | 100 kg | 110 kg |

Even if the average consumption is relatively stable, daily fluctuations can cause inventory to run out earlier than expected.

**2. Supply Variability**

This happens when replenishment does not arrive according to the planned schedule.

Example:

| Delivery | Planned Lead Time | Actual Lead Time |
|---|---:|---:|
| 1 | 10 days | 10 days |
| 2 | 10 days | 12 days |
| 3 | 10 days | 14 days |
| 4 | 10 days | 11 days |

A supplier may have a standard lead time of 10 days, but actual delivery sometimes takes 12 or 14 days.

Safety stock provides additional protection during these delays.

---

# 4. Detailed Discussion: Factors Affecting Safety Stock

Safety stock is not a fixed quantity that companies should maintain forever.

It should be evaluated based on actual operating conditions.

Let's discuss the major factors.

## 4.1 Demand Variability

Demand variability refers to how much actual consumption changes over time.

Consider two materials:

| Metric | Material A | Material B |
|---|---:|---:|
| Average daily usage | 500 kg | 500 kg |
| Daily usage variability | Low | High |

Both materials have identical average daily usage.

However, Material B experiences unpredictable consumption.

Which material needs more protection?

Generally, Material B.

Why?

Because its actual consumption is more likely to exceed the expected consumption during lead time.

This is why ADU alone is insufficient for determining safety stock.

We also need to understand how much consumption fluctuates.

## 4.2 Lead Time Variability

Lead time variability refers to differences between actual replenishment durations.

Example:

- Supplier A consistently delivers within 8 days.
- Supplier B delivers anywhere between 7 and 15 days.

Even if both suppliers have similar average lead times, Supplier B introduces greater uncertainty.

A company using Supplier B may need a larger safety stock, assuming other conditions are equal.

## 4.3 Supplier Reliability

Supplier reliability measures how consistently a supplier fulfills its commitments.

Common indicators include:

- On-Time Delivery (OTD).
- Supplier delivery performance.
- Average actual lead time.
- Lead time standard deviation.
- Purchase order fulfillment rate.
- Quantity compliance.

Example:

| Metric | Supplier A | Supplier B |
|---|---:|---:|
| On-time delivery | 98% | 82% |
| Average lead time | 10 days | 10 days |
| Lead time variability | Low | High |

Although their average lead time is identical, Supplier B may require more inventory protection.

**Business implication:** Improving supplier reliability can reduce the need for safety stock, releasing working capital without necessarily reducing customer service.

## 4.4 Customer Service Level

Customer service level describes the level of demand or customer requirements that the company aims to satisfy.

In inventory planning, one commonly used measure is the **Cycle Service Level (CSL)**.

It represents the probability of completing a replenishment cycle without experiencing a stockout.

For example:

- 90% CSL: Target probability of no stockout in a replenishment cycle is 90%.
- 95% CSL: Target probability is 95%.
- 99% CSL: Target probability is 99%.

Higher service levels generally require more safety stock.

However, this comes with a cost.

| Target Service Level | General Inventory Implication |
|---|---|
| 90% | Lower safety stock requirement |
| 95% | Higher protection |
| 99% | Significantly higher protection |
| 99.9% | Very high protection |

These are illustrative targets, not universal company standards.

A critical raw material that can stop an entire production line may deserve a higher service target than a readily available, low-impact material.

## 4.5 Forecast Accuracy

Forecast accuracy influences the reliability of expected demand.

Imagine that your forecast predicts 500 kg of daily consumption.

But actual consumption frequently reaches 700 kg.

Your forecast consistently underestimates actual demand.

This can cause:

- Insufficient inventory.
- Repeated stockouts.
- Emergency purchases.
- Production interruptions.
- Higher transportation costs.

Safety stock can absorb some forecast errors, but it should not become a permanent solution for a fundamentally poor forecasting process.

A better approach is to improve the forecast itself and recalculate the appropriate inventory buffer.

## 4.6 Consumption Patterns

Not all materials are consumed in the same way.

Consider these patterns:

| Consumption Pattern | Example | Planning Consideration |
|---|---|---|
| Stable | 500 kg every day | More predictable |
| Seasonal | Higher consumption during certain months | Seasonal demand changes |
| Intermittent | Material used only for specific production orders | Irregular consumption |
| Highly variable | Consumption changes significantly each week | Greater uncertainty |

A material with intermittent demand may require specialized inventory methods rather than a simple average daily usage approach.

## 4.7 Risks of Outdated Assumptions

One common mistake in inventory management is using historical assumptions without checking whether they remain valid.

Example:

Last year:

- Supplier lead time: 7 days.
- Average consumption: 400 kg/day.

This year:

- Supplier lead time: 12 days.
- Average consumption: 550 kg/day.

If the company continues using last year's assumptions, its inventory policy may significantly underestimate actual requirements.

An S&OP analyst should periodically review:

1. Historical consumption.
2. Current demand forecasts.
3. Actual supplier lead times.
4. Lead time variability.
5. Current service-level targets.
6. Material criticality.

---

# 5. Safety Stock Calculation Methods

Now we move from understanding the concept to calculating actual inventory requirements.

There are different calculation methods depending on the available data and the level of planning accuracy required.

We'll start with the simplest methods before introducing statistical calculations.

## 5.1 Understanding the Basic Components

Before calculating safety stock, let's establish the variables.

| Variable | Meaning | Unit |
|---|---|---|
| ADU | Average Daily Usage | kg/day |
| LT | Lead Time | days |
| DDLT | Demand During Lead Time | kg |
| SS | Safety Stock | kg |
| Z | Service-level factor | No unit |
| σd | Standard deviation of daily demand | kg/day |
| σLT | Standard deviation of lead time | days |

Two concepts deserve special attention: Standard Deviation and Z-score.

### A. What is Standard Deviation?

Standard deviation measures how spread out or variable a set of numbers is relative to its average.

In simpler terms:

It tells us how much consumption typically fluctuates around its average.

Example:

Consider two materials with the same average daily usage of 100 kg.

**Material A: Stable consumption**

Daily usage: 98, 102, 100, 101, 99 kg.

Average = 100 kg/day; population standard deviation ≈ 1.41 kg/day.

**Material B: Variable consumption**

Daily usage: 70, 130, 90, 110, 100 kg.

Average = 100 kg/day; population standard deviation ≈ 20 kg/day.

Notice:

Both materials have the same average consumption.

But Material B has significantly greater variability.

Therefore, Material B generally needs more protection against unexpected consumption.

**Remember:**

- Average tells us the expected consumption.
- Standard deviation tells us how much consumption fluctuates.

For historical sample data, Excel's `STDEV.S` calculates sample standard deviation. `STDEV.P` calculates population standard deviation. We'll use the appropriate version depending on how the data is defined.

### B. What is a Z-score?

A Z-score is a statistical value that represents how many standard deviations we want to protect above the expected demand.

In safety stock calculations, Z-score is associated with the desired service level, assuming an appropriate probability distribution.

Common approximate values:

| Cycle Service Level | Z-score |
|---:|---:|
| 90% | 1.282 |
| 95% | 1.645 |
| 97.5% | 1.960 |
| 98% | 2.054 |
| 99% | 2.326 |
| 99.5% | 2.576 |

Let's interpret 1.645.

If we target a 95% cycle service level, the safety stock is approximately 1.645 standard deviations above the expected demand during the replenishment period.

It does not mean that 95% of your inventory is protected.

It means that, under the model assumptions, approximately 95% of replenishment cycles will avoid a stockout.

## 5.2 Method 1: Basic Safety Stock Using Buffer Days

This is one of the simplest methods used in inventory planning.

The company chooses an additional number of inventory coverage days.

**Formula:**

\[
SS=ADU\times Buffer\ Days
\]

Where:

- SS = Safety Stock (kg)
- ADU = Average Daily Usage (kg/day)
- Buffer Days = Additional days of inventory protection

Example:

- ADU = 500 kg/day
- Buffer days = 2 days

Step 1: Identify average daily consumption.

\[
ADU=500\text{ kg/day}
\]

Step 2: Identify buffer days.

\[
Buffer\ Days=2
\]

Step 3: Calculate safety stock.

\[
SS=500\times2
\]

<blockquote>**Calculated Safety Stock: 1,000 kg**</blockquote>

**Interpretation:** The company maintains an additional 1,000 kg to cover approximately two extra days of normal consumption.

Advantages:
- Simple to calculate.
- Easy to implement in Excel.
- Useful when statistical data is limited.
- Easy to communicate to operations teams.

Limitations:
- Does not directly account for actual demand variability.
- Does not directly account for lead time variability.
- Buffer days may be arbitrary if not supported by historical data.

This is a simplified policy-based method, not a statistically optimized safety stock calculation.

## 5.3 Method 2: Safety Stock Using Demand Variability

This method uses standard deviation to determine how much additional inventory is needed when daily consumption fluctuates.

Assumption:

- Daily demand is variable.
- Lead time is constant.
- Daily demand observations are independent.
- Demand is reasonably modeled by a normal distribution.

**Formula:**

\[
SS=Z\times\sigma_d\times\sqrt{LT}
\]

Where:

- Z = Service-level Z-score.
- σd = Standard deviation of daily demand (kg/day).
- LT = Constant lead time (days).

Why do we use the square root of lead time?

Because independent daily demand variations accumulate across multiple days. Their variances add, so the standard deviation of total demand increases with the square root of the number of days, not directly in proportion to the number of days.

### Step-by-step example

Assume:

- Average daily usage = 500 kg/day.
- Standard deviation of daily usage = 60 kg/day.
- Lead time = 8 days.
- Target service level = 95%.
- Z-score = 1.645.

Step 1: Identify the standard deviation.

\[
\sigma_d=60\text{ kg/day}
\]

Step 2: Identify the lead time.

\[
LT=8\text{ days}
\]

Step 3: Calculate the square root of lead time.

\[
\sqrt{8}=2.828
\]

Step 4: Calculate safety stock.

\[
SS=1.645\times60\times2.828
\]

\[
SS=279.6\text{ kg}
\]

<blockquote>**Statistical Safety Stock: Approximately 280 kg**</blockquote>

**Interpretation:**

The company needs approximately 280 kg of additional inventory to protect against demand variability over an 8-day replenishment period.

Notice that this calculation does not include lead time variability.

It assumes that the supplier consistently delivers within 8 days.

## 5.4 Method 3: Safety Stock Considering Variable Lead Time

Now let's introduce another situation.

What if daily consumption is relatively stable, but supplier delivery dates are unpredictable?

For example:

- Average daily usage = 500 kg/day.
- Average lead time = 8 days.
- Lead time standard deviation = 1.5 days.
- Target service level = 95%.

When lead time fluctuates, the company needs additional inventory to protect against longer-than-expected replenishment periods.

For this simplified model, assume demand is constant and only lead time varies.

**Formula:**

\[
SS=Z\times ADU\times\sigma_{LT}
\]

Where:

- Z = Service-level Z-score.
- ADU = Average daily usage (kg/day).
- σLT = Standard deviation of lead time (days).

Step 1: Identify the variables.

\[
ADU=500
\]

\[
\sigma_{LT}=1.5
\]

\[
Z=1.645
\]

Step 2: Substitute.

\[
SS=1.645\times500\times1.5
\]

Step 3: Calculate.

\[
SS=1,233.75\text{ kg}
\]

<blockquote>**Safety Stock for Lead Time Variability: Approximately 1,234 kg**</blockquote>

**Interpretation:**

The company needs approximately 1,234 kg of additional inventory to protect against uncertainty in supplier delivery duration.

Notice how much larger this is compared with our earlier demand-variability calculation.

That happens because the assumed lead time uncertainty represents a significant quantity of material consumption.

## 5.5 Method 4: Safety Stock Considering Both Demand and Lead Time Variability

This is a more comprehensive statistical method.

In actual manufacturing operations, both consumption and supplier delivery duration can fluctuate.

Therefore, considering only one source of variability may underestimate the inventory protection required.

Assuming demand and lead time are independent, a commonly used formula is:

\[
SS=Z\times\sqrt{
LT\sigma_d^2+
ADU^2\sigma_{LT}^2
}
\]

Where:

- Z = Service-level Z-score.
- LT = Average lead time (days).
- σd = Standard deviation of daily demand (kg/day).
- ADU = Average daily usage (kg/day).
- σLT = Standard deviation of lead time (days).

This formula combines two sources of uncertainty:

1. Demand variability.
2. Lead time variability.

### Step-by-step example

Use the following assumptions:

| Variable | Value |
|---|---:|
| Average daily usage | 500 kg/day |
| Average lead time | 8 days |
| Demand standard deviation | 60 kg/day |
| Lead time standard deviation | 1.5 days |
| Target service level | 95% |
| Z-score | 1.645 |

**Step 1: Calculate demand variability component.**

\[
LT\times\sigma_d^2
\]

\[
=8\times60^2
\]

\[
=8\times3,600
\]

\[
=28,800
\]

**Step 2: Calculate lead time variability component.**

\[
ADU^2\times\sigma_{LT}^2
\]

\[
=500^2\times1.5^2
\]

\[
=250,000\times2.25
\]

\[
=562,500
\]

**Step 3: Combine the two components.**

\[
28,800+562,500=591,300
\]

**Step 4: Calculate the square root.**

\[
\sqrt{591,300}=769.0
\]

**Step 5: Multiply by the Z-score.**

\[
SS=1.645\times769.0
\]

\[
SS\approx1,265\text{ kg}
\]

<blockquote>**Combined Statistical Safety Stock: Approximately 1,265 kg**</blockquote>

**Interpretation:**

The company should maintain approximately 1,265 kg of safety stock under these assumptions.

This protects against both unpredictable consumption and unpredictable supplier delivery durations.

### Important statistical assumptions

This formula is useful, but it is not universally appropriate.

It assumes:

- Demand variation can reasonably be modeled statistically.
- Lead time variation can reasonably be modeled statistically.
- Daily demand observations are independent.
- Demand and lead time are independent.
- The model uses a suitable normal approximation.
- The lead time and demand measurements represent the same replenishment process.

If demand and lead time are correlated, or if demand is intermittent or highly skewed, a more advanced method or simulation may be needed.

## 5.6 Comparing the Different Methods

Let's summarize the methods using our examples.

| Method | Safety Stock | What It Protects Against |
|---|---:|---|
| Buffer days (2 days) | 1,000 kg | Policy-based buffer |
| Demand variability | 280 kg | Demand fluctuations |
| Lead time variability | 1,234 kg | Supplier delays |
| Both variability factors | 1,265 kg | Demand and supplier uncertainty |

These numbers are based on different assumptions, so they should not be interpreted as competing answers to exactly the same statistical model.

The buffer-days method is policy-based. The other methods use statistical variability.

**Key lesson:** Choose the calculation method based on the quality of available data and the type of uncertainty you need to manage.

---

# 6. Formulas and Calculations: Total Inventory Requirement

Now let's combine what we have learned.

Safety stock is only one component of inventory requirements.

We also need to account for expected consumption during lead time.

## 6.1 Average Demand During Lead Time

Formula:

\[
DDLT=ADU\times LT
\]

Where:

- DDLT = Demand During Lead Time (kg).
- ADU = Average Daily Usage (kg/day).
- LT = Lead Time (days).

Example:

\[
ADU=500\text{ kg/day}
\]

\[
LT=8\text{ days}
\]

Therefore:

\[
DDLT=500\times8
\]

\[
\boxed{DDLT=4,000\text{ kg}}
\]

Interpretation:

The company is expected to consume 4,000 kg while waiting for its replenishment order.

## 6.2 Total Inventory Requirement

For a simplified replenishment planning model:

\[
\boxed{Total\ Requirement=DDLT+SS}
\]

Using our combined statistical example:

- Demand during lead time = 4,000 kg.
- Safety stock = 1,265 kg.

Therefore:

\[
Total\ Requirement=4,000+1,265
\]

\[
\boxed{5,265\text{ kg}}
\]

### Inventory requirement breakdown

| Component | Quantity |
|---|---:|
| Expected demand coverage | 4,000 kg |
| Safety stock | 1,265 kg |
| **Total requirement** | **5,265 kg** |

This is the inventory protection requirement for the modeled replenishment period.

However, an important distinction:

This does not necessarily mean that the company must purchase 5,265 kg every time.

Actual order quantities also depend on existing usable inventory, open purchase orders, scheduled receipts, reservations, and the replenishment policy.

---

# 7. Practical Manufacturing Application

Let's apply everything to a realistic manufacturing scenario.

## 7.1 Business Scenario: Raw Material Replenishment

Imagine that you are an S&OP Analyst supporting a manufacturing facility producing electronic components.

One critical raw material is required continuously for production.

The material is sourced from an external supplier.

The purchasing and operations teams report the following information:

### Material Information

**Illustrative manufacturing case**

| Parameter | Value |
|---|---:|
| Material | Raw Material A |
| Average Daily Usage | 500 kg |
| Daily Demand Standard Deviation | 60 kg |
| Average Supplier Lead Time | 8 days |
| Lead Time Standard Deviation | 1.5 days |
| Target Cycle Service Level | 95% |
| Z-score | 1.645 |
| Current Usable Inventory | 5,000 kg |

The supplier's delivery performance is inconsistent.

Sometimes the material arrives in 8 days, but other times it takes 10 or even 12 days.

Meanwhile, production consumption also fluctuates depending on the manufacturing schedule.

Your responsibility is to evaluate whether the current inventory policy provides sufficient protection.

## 7.2 Step 1: Calculate Expected Demand During Lead Time

\[
DDLT=500\times8
\]

\[
\boxed{4,000\text{ kg}}
\]

The company needs approximately 4,000 kg for expected consumption during the average 8-day lead time.

## 7.3 Step 2: Calculate Safety Stock Using Buffer Days

Assume the current company policy maintains 2 additional days of inventory.

\[
SS=500\times2
\]

\[
\boxed{1,000\text{ kg}}
\]

Total inventory requirement:

\[
4,000+1,000=5,000\text{ kg}
\]

## 7.4 Step 3: Calculate Safety Stock Using Demand Variability

\[
SS=1.645\times60\times\sqrt{8}
\]

\[
\boxed{SS\approx280\text{ kg}}
\]

Total requirement:

\[
4,000+280=4,280\text{ kg}
\]

## 7.5 Step 4: Calculate Safety Stock Using Both Variability Factors

Using the combined formula:

\[
SS=1.645\sqrt{
8(60^2)+500^2(1.5^2)
}
\]

\[
\boxed{SS\approx1,265\text{ kg}}
\]

Total requirement:

\[
4,000+1,265=5,265\text{ kg}
\]

## 7.6 Step 5: Compare the Results

| Calculation Method | Safety Stock | Total Requirement |
|---|---:|---:|
| 2 buffer days | 1,000 kg | 5,000 kg |
| Demand variability | 280 kg | 4,280 kg |
| Both variability factors | 1,265 kg | 5,265 kg |

Now compare these requirements with the available inventory.

Current usable inventory:

\[
5,000\text{ kg}
\]

### Inventory coverage assessment

| Method | Result | Interpretation |
|---|---|---|
| Buffer-days policy | Sufficient | Meets the 5,000 kg requirement |
| Demand variability | Sufficient | Exceeds the 4,280 kg requirement by 720 kg |
| Combined variability | Insufficient | Below the 5,265 kg requirement by 265 kg |

This is where an S&OP analyst must think beyond the calculation.

The same inventory position can appear sufficient under one method but insufficient under another.

The difference comes from the assumptions used to determine inventory protection.

## 7.7 Step 6: What Happens When the Supplier Is Delayed?

Let's simulate an actual delivery delay.

The company expects the supplier to deliver after 8 days.

However, the delivery arrives after 11 days.

Assume actual consumption averages 500 kg/day during this particular period.

Expected consumption:

\[
500\times8=4,000\text{ kg}
\]

Actual consumption:

\[
500\times11=5,500\text{ kg}
\]

Additional consumption due to the delay:

\[
5,500-4,000=1,500\text{ kg}
\]

The additional 1,500 kg must be supplied by inventory already available beyond the original expected lead-time consumption.

This illustrates why supplier lead time variability matters.

If the company only maintains 280 kg of safety stock based on demand variability, it may not have enough protection against a significant delivery delay.

If it maintains 1,265 kg, it has more protection, but even that buffer is not guaranteed to cover every possible delay.

**Operational lesson:** Safety stock is a risk-management decision, not a guarantee against all supply disruptions.

---

# 8. Business Perspective and S&OP Decision-Making

Now let's shift from calculating inventory to making business decisions.

An S&OP analyst should not simply calculate safety stock and automatically recommend increasing inventory.

The analyst must understand the business consequences.

## 8.1 How Do Companies Determine Appropriate Safety Stock?

A practical evaluation should consider five areas.

| Consideration | Question to Ask |
|---|---|
| Demand | How predictable is material consumption? |
| Supply | How reliable is the supplier? |
| Lead Time | How long does replenishment take, and how much does it fluctuate? |
| Service Level | How much stockout risk can the business tolerate? |
| Cost | How much inventory investment is justified? |

For example, a material that can stop an entire production line may justify higher inventory protection.

However, a material with several alternative suppliers and short replenishment lead time may need less.

## 8.2 Inventory Cost vs. Customer Service

There is a fundamental trade-off.

### Lower Safety Stock

Advantages:
- Lower inventory holding costs.
- Less warehouse space required.
- Lower risk of obsolescence.
- More available working capital.

Risks:
- Greater stockout exposure.
- Higher chance of production interruptions.
- More emergency purchases.

### Higher Safety Stock

Advantages:
- Greater protection against uncertainty.
- Lower stockout exposure.
- More stable production operations.
- Better ability to absorb delivery delays.

Risks:
- Higher carrying costs.
- More warehouse space.
- Greater risk of expiration or obsolescence.
- More working capital tied up in inventory.

The objective is not to maintain the highest possible inventory.

The objective is to maintain an appropriate level of inventory protection while balancing cost and service requirements.

## 8.3 How S&OP Analysts Identify Insufficient Safety Stock

An analyst can compare actual inventory positions against calculated requirements.

For example:

| Material | Available Inventory | Required Inventory | Gap |
|---|---:|---:|---:|
| RM-A | 5,000 kg | 5,265 kg | -265 kg |
| RM-B | 8,000 kg | 7,500 kg | +500 kg |
| RM-C | 2,000 kg | 3,000 kg | -1,000 kg |
| RM-D | 6,500 kg | 5,000 kg | +1,500 kg |

Formula:

\[
Inventory\ Gap=Available-Required
\]

Interpretation:

- Negative gap: Inventory is below the modeled requirement.
- Positive gap: Inventory is above the modeled requirement.
- Zero gap: Inventory exactly meets the requirement.

But remember: This is a simplified inventory comparison. A real inventory assessment must consider usable on-hand stock, committed demand, open supply, scheduled receipts, and time-phased inventory projections.

### Practical Excel Application

If:

- Column B = Available Inventory.
- Column C = Required Inventory.

You can use:

```excel
=B2-C2
```

To classify the inventory:

```excel
=IF(B2<C2,"Insufficient",IF(B2>C2,"Above Requirement","At Requirement"))
```

These are simple Excel formulas that can help create an inventory monitoring report.

## 8.4 What Happens When Demand Changes?

Let's assume:

Original ADU = 500 kg/day.

New ADU = 600 kg/day.

Lead time remains 8 days.

Original demand during lead time:

\[
500\times8=4,000\text{ kg}
\]

New demand during lead time:

\[
600\times8=4,800\text{ kg}
\]

Even without considering safety stock, the company needs an additional 800 kg to cover expected consumption.

If demand variability also increases, safety stock may need to increase as well.

**Important distinction:** An increase in average demand increases expected demand coverage. An increase in demand variability increases the safety stock requirement.

They are related but different effects.

## 8.5 What Happens When Supplier Lead Time Changes?

Assume:

Original lead time = 8 days.

New lead time = 12 days.

ADU remains 500 kg/day.

Original demand coverage:

\[
500\times8=4,000\text{ kg}
\]

New demand coverage:

\[
500\times12=6,000\text{ kg}
\]

An additional 2,000 kg is now required to cover the longer expected replenishment period.

Additionally, if lead time variability increases, safety stock may also need to increase.

This is why supplier performance should be regularly reviewed during S&OP.

## 8.6 What Should an S&OP Analyst Recommend?

Consider this situation:

A supplier's lead time increases from 8 to 12 days.

The procurement team proposes increasing safety stock.

However, before recommending that action, an analyst should investigate:

1. Is the lead time increase temporary or permanent?
2. Is the supplier experiencing a capacity problem?
3. Is transportation causing the delay?
4. Can the supplier improve its delivery performance?
5. Is an alternative supplier available?
6. Can the company adjust production schedules?
7. Is current inventory sufficient to cover the transition?
8. What is the financial impact of maintaining additional inventory?

Possible recommendations include:

- Temporarily increasing inventory protection.
- Revising the planning lead time.
- Working with procurement to improve supplier performance.
- Finding alternative sources of supply.
- Adjusting production schedules.
- Revising demand forecasts.
- Prioritizing critical materials.

The best decision is not always to purchase more material.

Sometimes, improving the supply process is a better long-term solution.

---

# 9. Key Takeaways

Before proceeding, let's consolidate the most important concepts.

## 9.1 Important Terminology

| Term | What You Should Remember |
|---|---|
| Lead Time | Time required to replenish inventory |
| Planned Lead Time | Expected replenishment duration |
| Actual Lead Time | Observed replenishment duration |
| Safety Stock | Additional inventory against uncertainty |
| Cycle Stock | Inventory for normal consumption |
| Excess Inventory | Inventory above justified requirements |
| Demand Variability | Fluctuation in actual consumption |
| Lead Time Variability | Fluctuation in replenishment duration |
| Standard Deviation | Measure of data variability |
| Z-score | Statistical factor associated with a target service level |
| Cycle Service Level | Probability of avoiding a stockout during a replenishment cycle |

## 9.2 Formulas to Remember

**1. Average Demand During Lead Time**

\[
DDLT=ADU\times LT
\]

**2. Safety Stock Using Buffer Days**

\[
SS=ADU\times Buffer\ Days
\]

**3. Safety Stock Using Demand Variability**

\[
SS=Z\sigma_d\sqrt{LT}
\]

**4. Safety Stock Using Lead Time Variability**

\[
SS=Z\times ADU\times\sigma_{LT}
\]

**5. Safety Stock Using Both Variability Factors**

\[
SS=Z\sqrt{LT\sigma_d^2+ADU^2\sigma_{LT}^2}
\]

**6. Total Inventory Requirement**

\[
Total\ Requirement=DDLT+SS
\]

**7. Inventory Gap**

\[
Gap=Available-Required
\]

## 9.3 Five Things You Must Understand

1. Lead time determines how long the company must support operations before replenishment arrives.

2. Safety stock protects inventory availability against unexpected demand and supply changes.

3. Average daily usage measures expected consumption, while standard deviation measures consumption variability.

4. Higher service-level targets generally require more safety stock and greater inventory investment.

5. Safety stock should be reviewed whenever demand patterns, supplier performance, or replenishment lead times change.

---

# 10. Knowledge Check and Exercises

Now let's test whether you can apply the concepts.

We will use three progressive learning levels.

**Do not worry about getting everything correct.** The objective is to develop your ability to interpret inventory information and make appropriate business decisions.

I will evaluate your answers after you submit them. Hindi ko muna ilalagay ang solutions.

## Level 1: Understanding

**Question 1. Lead Time**

A manufacturing company orders raw materials from a supplier.

The activities take:

- PO processing: 1 day
- Supplier preparation: 4 days
- Transportation: 3 days
- Receiving inspection: 1 day

How many days is the procurement lead time if these activities happen sequentially?

**Question 2. Safety Stock**

What is the primary purpose of safety stock?

A. To increase total inventory regardless of demand.

B. To protect against unexpected demand and supply variations.

C. To eliminate the need for replenishment orders.

D. To ensure that all inventory remains unused.

**Question 3. Inventory Classification**

Explain the difference between:

- Cycle Stock
- Safety Stock
- Excess Inventory

Give one manufacturing example for each.

**Question 4. Demand Variability**

Two raw materials have identical average daily usage of 500 kg.

However:

- Material A has a standard deviation of 20 kg/day.
- Material B has a standard deviation of 80 kg/day.

Which material generally requires more safety stock, assuming the other conditions are identical? Explain why.

## Level 2: Technical Application

**Question 5. Average Demand During Lead Time**

A manufacturing facility consumes 350 kg of raw material daily.

Its supplier has a lead time of 12 days.

Calculate:

1. Average Daily Usage.
2. Lead Time.
3. Demand During Lead Time.

**Question 6. Safety Stock Using Buffer Days**

Using the information from Question 5, the company maintains 3 additional buffer days.

Calculate:

1. Safety Stock.
2. Total Inventory Requirement.

**Question 7. Safety Stock Using Demand Variability**

Given:

| Parameter | Value |
|---|---:|
| Average Daily Usage | 400 kg |
| Daily Demand Standard Deviation | 50 kg |
| Lead Time | 9 days |
| Z-score | 1.645 |

Calculate the safety stock using demand variability.

Show your solution step by step.

**Question 8. Combined Variability**

Given:

| Parameter | Value |
|---|---:|
| ADU | 300 kg/day |
| Lead Time | 10 days |
| Demand Standard Deviation | 40 kg/day |
| Lead Time Standard Deviation | 2 days |
| Z-score | 1.645 |

Calculate:

1. Demand variability component.
2. Lead time variability component.
3. Combined standard deviation of demand during lead time.
4. Safety stock.

## Level 3: Professional Analysis

**Question 9. Inventory Assessment**

You are an S&OP Analyst responsible for monitoring raw material inventory.

The following information is available:

| Parameter | Value |
|---|---:|
| Available Inventory | 8,000 kg |
| ADU | 600 kg/day |
| Average Lead Time | 10 days |
| Safety Stock | 1,500 kg |

Answer:

1. Calculate demand during lead time.
2. Calculate total inventory requirement.
3. Determine whether inventory is sufficient.
4. Calculate the inventory gap.
5. What would you recommend to the supply planning team?

**Question 10. Business Decision-Making**

A supplier consistently delivers late.

The company has two possible options:

- Option A: Increase safety stock by 30%.
- Option B: Work with procurement to improve supplier delivery performance and reduce lead time variability.

Which option would you recommend?

Would you choose only one, or would you combine both?

Explain your reasoning from the perspectives of:

- Production continuity.
- Inventory investment.
- Customer service.
- Long-term supply chain performance.

---

## How to Submit Your Answers

You can answer all 10 questions together or in batches.

During evaluation, I will:

- Check your conceptual understanding.
- Verify your calculations.
- Identify mistakes and explain their causes.
- Assess your business reasoning.
- Identify which concepts need additional practice.

---

# 11. Connection to the Next Topic: Reorder Point (ROP)

We are now ready to establish the foundation for Topic 5.7.

So far, we have learned two important things:

1. How much inventory is expected to be consumed during lead time.
2. How much additional inventory should be maintained as protection.

The next question is:

**At what inventory level should the company trigger a new replenishment order?**

This is where Reorder Point (ROP) comes in.

Its basic formula is:

\[
\boxed{ROP=ADU\times LT+SS}
\]

Notice something?

This is the same structure as our total inventory requirement.

However, ROP has a different purpose: it identifies the inventory position at which replenishment should be triggered.

### Our learning progression

1. **5.4 Average Daily Usage**  
   Determine how much inventory is consumed daily.

2. **5.5 Days of Supply**  
   Determine how long inventory can support consumption.

3. **5.6 Lead Time and Safety Stock**  
   Determine expected replenishment coverage and inventory protection.

4. **5.7 Reorder Point**  
   Determine when to replenish inventory.

**For now, let's stay on Topic 5.6.** Complete the knowledge check first. Once you've demonstrated your understanding, we can proceed to Reorder Point.

The goal is not just to memorize inventory formulas. It's to understand why a manufacturing company needs each inventory component and how an S&OP analyst uses them to prevent production disruptions while controlling working capital.
