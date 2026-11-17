---
module: 9
topic: "9.3"
title: "Supply Planning KPIs"
language: "Taglish"
status: "complete"
---

# Module 9 – Topic 9.3: Supply Planning KPIs

**Main learning objective:** Understand how an organization measures its ability to produce, procure, and deliver the products required by customers, at the right quantity and at the right time.

Sa topic na ito, lilipat naman tayo sa kabilang side ng S&OP equation.

Sa Topic 9.2, pinag-aralan natin kung paano sinusukat kung gaano ka-reliable ang demand forecast. Ngayon, ang tanong naman natin ay:

**Kaya ba talaga ng company na i-supply ang quantity na hinihingi ng market?**

Hindi sapat na accurate ang forecast kung:
- Kulang ang production capacity.
- Madalas masira ang production machines.
- Mababa ang production yield.
- Hindi nasusunod ang production schedule.
- Late mag-deliver ang suppliers.
- Hindi available ang required raw materials.

Dito pumapasok ang Supply Planning KPIs.

---

# 1. Topic Overview

## 1.1 What are Supply Planning KPIs?

Sa simpleng explanation, ang Supply Planning KPIs ay mga measurements na ginagamit para malaman kung gaano kaepektibo at ka-reliable ang production, procurement, at supply operations ng isang organization.

Sinusukat nila kung:

1. Nakakagawa ba tayo ng required production quantity?
2. Nasusunod ba natin ang production schedule?
3. Sapat ba ang available production capacity?
4. Efficient ba ang paggamit natin ng machines?
5. Consistent ba ang quality ng production?
6. On time ba ang suppliers?
7. Nakakadeliver ba tayo according to customer requirements?
8. Kaya ba ng overall supply plan na suportahan ang demand forecast?

### Why are they important?

Imagine na ang Demand Planning team ay nag-forecast ng:

- January demand: 10,000 units
- February demand: 12,000 units
- March demand: 15,000 units

Maganda ang forecast accuracy at aligned ang Sales team sa numbers.

Pero paano kung ang production capacity ay 8,000 units lang per month?

May demand plan tayo, pero hindi feasible ang supply plan.

This creates a supply-demand imbalance.

Ang purpose ng Supply Planning KPIs ay makita ang ganitong problems bago pa sila maging customer shortages, missed deliveries, or lost sales.

## 1.2 Connection to Topics 9.1 and 9.2

Balikan natin ang relationship ng three topics.

| Topic | Main question | What it measures |
|---|---|---|
| 9.1 Introduction to KPIs | How do we measure performance? | KPI fundamentals |
| 9.2 Demand Planning KPIs | How accurately do we predict demand? | Forecast performance |
| 9.3 Supply Planning KPIs | Can we fulfill the predicted demand? | Supply capability and execution |
| 9.4 Inventory KPIs | Do we have the right inventory? | Inventory health and efficiency |

Notice the sequence:

**DEMAND PLANNING**  
What do customers need?

↓

**SUPPLY PLANNING**  
Can we produce or procure it?

↓

**INVENTORY MANAGEMENT**  
Do we have the right inventory to support fulfillment?

↓

**CUSTOMER FULFILLMENT**  
Can we deliver what customers need, when they need it?

These are interconnected activities, not isolated departments.

For example, a supplier delay can reduce material availability, which reduces production output, which causes inventory shortages, which eventually affects customer delivery.

That is why S&OP needs to evaluate the entire supply chain.

---

# 2. Layman's Explanation

## 2.1 Think of a manufacturing company as a restaurant

Imagine may restaurant na tumatanggap ng 500 customer orders per day.

The restaurant has:
- 5 cooking stations.
- 10 chefs.
- Limited ingredients.
- A supplier delivering ingredients every morning.
- A target of 500 meals per day.

Now, let's connect the restaurant's performance to manufacturing.

| Restaurant situation | Manufacturing equivalent |
|---|---|
| Number of meals ordered | Customer demand |
| Number of meals planned | Production plan |
| Number of meals actually prepared | Actual production |
| Number of cooking stations | Production capacity |
| Cooking station breakdown | Machine downtime |
| Ingredients unavailable | Raw material shortage |
| Meals rejected due to poor quality | Production yield loss |
| Supplier arrives late | Supplier delivery delay |
| Meals delivered to customers on time | On-Time Delivery |

Suppose the restaurant planned to prepare 500 meals, but only prepared 400.

That is a production performance issue.

Why?

Possible reasons:
- Two cooking stations broke down.
- Ingredients arrived late.
- Chefs were unavailable.
- Some meals had to be discarded due to quality problems.

Hindi sapat na sabihin nating 80% lang ang production performance.

We need to understand WHY it was only 80%.

That is the difference between simply reporting a KPI and actually using it for business analysis.

## 2.2 The five questions of Supply Planning

A supply planning analyst should be able to answer these questions:

| Question | Relevant KPI |
|---|---|
| Did we produce the planned quantity? | Production Plan Attainment |
| Did we follow the production schedule? | Schedule Adherence |
| Are we using our available capacity effectively? | Capacity Utilization |
| Are our machines performing effectively? | OEE |
| Are we delivering customer orders on time? | OTD |

Additional KPIs will help us investigate production quality, supplier reliability, and overall supply plan performance.

---

# 3. Technical Explanation

Before calculating the KPIs, we need to establish an important distinction.

**Not all supply KPIs measure the same thing.**

Some measure production output, others measure resource utilization, equipment performance, quality, or delivery reliability.

## 3.1 Supply Planning KPI Categories

| Category | What it evaluates | Example KPI |
|---|---|---|
| Production performance | Actual output vs. planned output | Production Plan Attainment |
| Production execution | Whether production follows the schedule | Schedule Adherence |
| Capacity performance | How much available capacity is being used | Capacity Utilization |
| Equipment performance | Equipment availability, speed, and quality | OEE |
| Quality performance | Acceptable output vs. total output | Production Yield |
| Customer fulfillment | Timeliness of customer deliveries | OTD |
| Supplier performance | Supplier delivery reliability | Supplier OTD |
| Procurement performance | Supplier lead time consistency | Supplier Lead Time Performance |
| Overall supply execution | Actual supply vs. supply plan | Supply Plan Attainment |

## 3.2 Planned Performance vs. Actual Execution

This is one of the most important concepts in supply planning.

There are two different things:

**Planned performance** refers to what the organization expects or intends to accomplish.

**Actual execution** refers to what the organization really accomplished.

Example:

| Metric | Quantity |
|---|---:|
| Planned production | 10,000 units |
| Actual production | 9,200 units |
| Production shortfall | 800 units |

The company planned to produce 10,000 units but only produced 9,200.

However, we should not immediately conclude that production failed.

Maybe:
- Demand decreased.
- A customer order was cancelled.
- Production was intentionally reduced.
- Raw materials were unavailable.
- Equipment experienced unexpected downtime.

The context matters.

In S&OP, the objective is not simply to achieve 100% production against every original plan. The objective is to execute an appropriate, feasible, and agreed supply plan while responding to legitimate changes in business conditions.

---

# 4. Detailed Discussion: Key Supply Planning KPIs

Ito ang core ng Topic 9.3. We will study nine KPIs, including their formulas, interpretation, limitations, and business applications.

For consistency, gagamit tayo ng manufacturing company producing electronic components.

## 4.1 Production Plan Attainment

### A. What is it?

Production Plan Attainment measures how much of the planned production quantity was actually achieved.

Sa madaling salita:

**Did we produce the quantity that we committed to produce?**

For example:

- Production target: 10,000 units
- Actual production: 9,000 units

Meaning, 90% lang ng production target ang na-achieve.

### B. Formula

\[
\text{Production Plan Attainment} =
\frac{\text{Actual Production}}{\text{Planned Production}}\times100
\]

Where:

| Variable | Meaning | Unit |
|---|---|---|
| Actual Production | Actual quantity produced | Units |
| Planned Production | Target production quantity | Units |

### C. Step-by-step calculation

Assume:

- Planned production = 10,000 units
- Actual production = 9,200 units

Step 1: Divide actual production by planned production.

\[
=\frac{9,200}{10,000}
\]

Step 2: Multiply by 100.

\[
=92\%
\]

**Result: 92%**

Interpretation:

The manufacturing operation achieved 92% of its planned production target.

May production shortfall na:

\[
10,000-9,200=800\text{ units}
\]

The company must investigate why it failed to produce the remaining 800 units.

Possible causes:
- Equipment breakdown.
- Material shortage.
- Labor shortage.
- Unexpected production losses.
- Production scheduling issues.

### D. Important consideration: Gross production vs. good production

Ito ang isang common source of KPI misinterpretation.

Suppose:

| Production data | Quantity |
|---|---:|
| Planned good production | 10,000 |
| Actual gross production | 9,600 |
| Rejected units | 480 |
| Actual good production | 9,120 |

If we calculate using gross production:

\[
\frac{9,600}{10,000}\times100=96\%
\]

But if we use good production:

\[
\frac{9,120}{10,000}\times100=91.2\%
\]

Magkaiba ang results.

For an S&OP supply commitment, good output is generally more meaningful because rejected products cannot fulfill customer demand.

However, some manufacturing companies define production attainment using total completed quantity, regardless of quality. Always confirm the company's KPI definition.

**Business interpretation:** A high production attainment does not automatically mean the company achieved its customer-ready supply target.

---

## 4.2 Schedule Adherence

### A. What is it?

Schedule Adherence measures how consistently production follows the agreed production schedule.

May difference ito sa Production Plan Attainment.

Production Plan Attainment asks:

"Did we produce the planned quantity?"

Schedule Adherence asks:

"Did we produce the correct products at the scheduled time?"

Example:

The production plan requires:

| Day | Product | Scheduled quantity |
|---|---|---:|
| Monday | Product A | 1,000 |
| Tuesday | Product B | 1,000 |
| Wednesday | Product C | 1,000 |

Actual production:

| Day | Product | Actual production |
|---|---|---:|
| Monday | Product A | 1,000 |
| Tuesday | Product C | 1,000 |
| Wednesday | Product B | 1,000 |

Total production is still 3,000 units.

Therefore, the company might achieve 100% production plan attainment.

But it did not follow the scheduled sequence.

Product B was delayed, while Product C was produced earlier.

This can create:
- Customer order delays.
- Material allocation problems.
- Excess inventory of the wrong product.
- Production changeover costs.

### B. Formula

One commonly used order-based formula is:

\[
\text{Schedule Adherence}=
\frac{\text{Orders completed as scheduled}}
{\text{Total scheduled orders}}\times100
\]

Assume:

- Total scheduled production orders = 20
- Orders completed according to schedule = 17

\[
=\frac{17}{20}\times100
\]

\[
=85\%
\]

**Result: 85%**

Interpretation:

Only 85% of the scheduled production orders were completed according to the agreed schedule.

### C. Alternative calculation methods

Companies may measure schedule adherence using:

**Quantity-based method**

\[
\frac{\text{Quantity completed as scheduled}}
{\text{Total scheduled quantity}}\times100
\]

**Time-based method**

\[
\frac{\text{Production completed within schedule window}}
{\text{Total scheduled production events}}\times100
\]

These methods measure different things.

For example, an order might be completed on the correct day but produce only 50% of the required quantity.

An order-based method could count it as completed, while a quantity-based method would reflect the shortfall.

### D. Common mistakes

1. Counting an order as adherent even when it was completed late.
2. Ignoring production sequence changes.
3. Changing the production schedule after the fact to make adherence appear higher.
4. Using inconsistent time windows.

**Business interpretation:** Low schedule adherence indicates unstable production execution, even when total production volume appears satisfactory.

---

## 4.3 Capacity Utilization

### A. What is it?

Capacity Utilization measures how much of the available production capacity is actually being used.

Imagine that a factory can operate for 1,000 productive machine-hours in a month.

But the factory only uses 800 hours.

The capacity utilization is 80%.

In simple terms:

**How much of our available production resources are we using?**

### B. Formula

For a time-based calculation:

\[
\text{Capacity Utilization}=
\frac{\text{Actual Capacity Used}}
{\text{Available Production Capacity}}\times100
\]

Where:

- Actual Capacity Used = Actual machine-hours utilized.
- Available Production Capacity = Practical production hours available.

### C. Step-by-step calculation

Assume:

- Available production capacity = 1,000 machine-hours
- Actual operating time = 800 machine-hours

\[
=\frac{800}{1,000}\times100
\]

\[
=80\%
\]

**Result: 80%**

Interpretation:

The company used 80% of its available production time.

The remaining 20% represents unused available time.

However, hindi ibig sabihin na inefficient agad ang company.

Possible reasons for unused capacity:
- Lower customer demand.
- Planned maintenance.
- Production scheduling decisions.
- Lack of materials.
- Insufficient labor.
- Production intentionally held to avoid excess inventory.

### D. Capacity utilization can also be quantity-based

For example:

- Practical monthly capacity = 12,000 units
- Actual output = 9,600 units

\[
=\frac{9,600}{12,000}\times100
=80\%
\]

This is useful when comparing production volume against a defined capacity baseline.

### E. Important distinction: Design capacity vs. practical capacity

Consider a machine with a theoretical maximum output of 15,000 units per month.

But after considering:
- Planned maintenance.
- Scheduled working hours.
- Available labor.
- Normal operating restrictions.

The practical available capacity becomes 12,000 units.

If actual output is 9,600 units:

| Capacity baseline | Utilization |
|---|---:|
| Design capacity: 15,000 | 64% |
| Practical capacity: 12,000 | 80% |

The result changes depending on the denominator.

For S&OP, practical available capacity is often more useful because it reflects the capacity that can realistically be scheduled.

---

## 4.4 Overall Equipment Effectiveness (OEE)

### A. What is it?

OEE measures how effectively manufacturing equipment is performing during its planned production time.

It combines three important factors:

1. Availability
2. Performance
3. Quality

Think of it this way:

- Availability: Was the machine running when it was supposed to run?
- Performance: Was it running at the expected speed?
- Quality: Did it produce good products?

A machine can be operating for many hours but still perform poorly because of slow production speed or high defect rates.

OEE captures these three dimensions together.

### B. The OEE formula

\[
\text{OEE} = A\times P\times Q
\]

Where:

| Component | Formula | What it measures |
|---|---|---|
| Availability | Operating Time / Planned Production Time | Equipment uptime |
| Performance | Actual Output / Theoretical Output During Operating Time | Production speed |
| Quality | Good Output / Total Output | Quality rate |

All three components are expressed as percentages or decimals.

### C. Step-by-step manufacturing example

Assume a production machine has the following monthly performance:

| Variable | Value |
|---|---:|
| Planned production time | 1,000 hours |
| Downtime | 200 hours |
| Actual operating time | 800 hours |
| Standard production rate | 12 units/hour |
| Actual gross production | 8,640 units |
| Good production | 8,208 units |

**Step 1: Calculate Availability**

\[
A=\frac{800}{1,000}\times100
\]

\[
A=80\%
\]

The machine was available for production 80% of the planned production time.

**Step 2: Calculate Performance**

First, determine theoretical output during operating time:

\[
800\times12=9,600\text{ units}
\]

Then:

\[
P=\frac{8,640}{9,600}\times100
\]

\[
P=90\%
\]

Interpretation: The machine operated at 90% of its ideal production speed.

**Step 3: Calculate Quality**

\[
Q=\frac{8,208}{8,640}\times100
\]

\[
Q=95\%
\]

Interpretation: 95% of the total production output passed quality requirements.

**Step 4: Calculate OEE**

\[
OEE=0.80\times0.90\times0.95
\]

\[
OEE=0.684
\]

\[
\boxed{OEE=68.4\%}
\]

**Result: 68.4%**

### D. What does 68.4% OEE mean?

For every 100 units of theoretical production capacity during the planned production time, only 68.4 equivalent units of good output were achieved.

The losses came from three areas:

- 20% availability loss.
- 10% performance loss during operating time.
- 5% quality loss during actual production.

These percentages should not simply be added together. OEE uses multiplication because each factor affects the remaining productive output.

### E. Common OEE mistakes

- Including or excluding downtime inconsistently.
- Using different production time definitions between departments.
- Using an incorrect ideal cycle time.
- Counting rejected products as good output.
- Double-counting planned maintenance or setup time.
- Comparing OEE across different machines without considering their operating conditions.

OEE benchmarks also depend on the manufacturing environment. A particular percentage is not a universal target for every factory.

---

## 4.5 Production Yield

### A. What is it?

Production Yield measures the percentage of total production output that meets quality requirements.

In manufacturing, not everything produced becomes saleable or usable output.

Some units may be rejected due to:
- Dimensional defects.
- Electrical failures.
- Material contamination.
- Surface defects.
- Process abnormalities.

Yield tells us how much acceptable output we obtain from the total quantity produced.

### B. Formula

\[
\text{Production Yield}=
\frac{\text{Good Units Produced}}
{\text{Total Units Produced}}\times100
\]

### C. Example

Assume:

- Total production = 10,000 units
- Good units = 9,500 units
- Defective units = 500 units

\[
=\frac{9,500}{10,000}\times100
\]

\[
=95\%
\]

**Result: 95%**

Interpretation:

The factory successfully produced 9,500 acceptable units out of every 10,000 units manufactured.

The remaining 5% represents production quality losses.

### D. Why does yield matter in S&OP?

Suppose the customer requires 10,000 good units.

If the production yield is 95%, the company cannot simply plan to produce 10,000 gross units.

It needs to account for expected quality losses.

The required gross production quantity is:

\[
\text{Required Gross Production}=
\frac{\text{Required Good Output}}{\text{Expected Yield}}
\]

\[
=\frac{10,000}{0.95}
\]

\[
=10,526.32
\]

The company needs approximately 10,527 gross units to obtain 10,000 good units, assuming a stable 95% yield and no additional losses.

**Business interpretation:** Poor yield increases production requirements, material consumption, capacity requirements, and manufacturing costs.

---

## 4.6 On-Time Delivery (OTD)

### A. What is it?

On-Time Delivery measures how reliably a company delivers customer orders by the agreed delivery date.

It answers:

**Are we delivering products when our customers expect them?**

Example:

A customer orders 1,000 units and requests delivery on November 20.

The company delivers the complete order on November 20.

That order is considered on time under an agreed-date definition.

If it arrives on November 22, it is late.

### B. Formula

A common order-based calculation is:

\[
OTD=
\frac{\text{Orders Delivered On Time}}
{\text{Total Orders Due}}\times100
\]

### C. Example

Assume:

- Total orders due = 50
- Orders delivered on time = 45

\[
=\frac{45}{50}\times100
\]

\[
=90\%
\]

**Result: 90%**

Interpretation:

45 out of 50 customer orders were delivered on or before the agreed delivery date.

Five orders were late.

### D. Important distinction: Order-based vs. line-based OTD

Consider one customer order containing:

| Product | Ordered quantity | Delivered quantity |
|---|---:|---:|
| Product A | 500 | 500 |
| Product B | 300 | 200 |
| Product C | 200 | 200 |

The company delivered the order on time, but Product B was incomplete.

Depending on company policy:
- The order may be considered late or incomplete.
- The order may be considered on time if the KPI only checks dispatch date.
- The order lines may be measured separately.

Also distinguish between:
- On-time delivery: Was it delivered on time?
- In-full delivery: Was the complete quantity delivered?

Some companies combine both into OTIF (On-Time In-Full).

Do not automatically assume OTD means OTIF.

---

## 4.7 Supplier On-Time Delivery

### A. What is it?

Supplier On-Time Delivery measures the reliability of suppliers in delivering materials according to the agreed delivery dates.

This is the supplier-side equivalent of customer OTD.

For example:

Your factory needs 10,000 kg of raw material on November 10.

The supplier commits to deliver on November 10.

If the material arrives on November 12, it is late.

### B. Formula

\[
\text{Supplier OTD}=
\frac{\text{Supplier Deliveries On Time}}
{\text{Total Supplier Deliveries Due}}\times100
\]

### C. Example

Assume:

- Total supplier deliveries due = 20
- On-time deliveries = 18

\[
=\frac{18}{20}\times100
\]

\[
=90\%
\]

**Result: 90%**

Interpretation:

The supplier delivered 90% of its scheduled deliveries on time.

Two deliveries were late.

### D. Why is this important?

Suppose your production schedule requires raw material every Monday.

If your supplier frequently delivers on Wednesday, production may experience:
- Delayed production starts.
- Machine idle time.
- Rescheduling.
- Inventory shortages.
- Emergency procurement.

Supplier OTD is therefore an important early warning indicator for supply risk.

### E. Common limitations

A supplier can achieve 100% OTD but still perform poorly.

Example:

- Required delivery: 1,000 kg.
- Actual delivery: 500 kg.
- Delivery date: On time.

The supplier was on time, but the quantity was incomplete.

This is why supplier OTD should be monitored alongside supplier quantity fulfillment and material quality.

---

## 4.8 Supplier Lead Time Performance

### A. What is it?

Supplier Lead Time is the amount of time between placing an order and receiving the material.

Supplier Lead Time Performance evaluates whether suppliers can consistently deliver within the expected or agreed lead time.

Example:

- Purchase order date: November 1
- Agreed lead time: 10 calendar days
- Expected delivery: November 11
- Actual delivery: November 14

Actual lead time:

\[
14-1=13\text{ days}
\]

Lead time variance:

\[
13-10=3\text{ days}
\]

The supplier took three additional days compared with the agreed lead time.

### B. Two useful ways to measure performance

**Method 1: Lead Time Achievement Rate**

\[
\text{Lead Time Achievement}=
\frac{\text{Deliveries Within Agreed Lead Time}}
{\text{Total Deliveries}}\times100
\]

Example:

- Total deliveries = 20
- Deliveries within agreed lead time = 16

\[
=\frac{16}{20}\times100
\]

\[
=80\%
\]

**Result: 80%**

Interpretation:

Only 80% of supplier deliveries arrived within the agreed lead time.

**Method 2: Average Lead Time Variance**

\[
\text{Average Lead Time Variance}=
\text{Average Actual Lead Time}
-
\text{Average Agreed Lead Time}
\]

Suppose:

- Average actual lead time = 13 days
- Average agreed lead time = 10 days

\[
=13-10=3\text{ days}
\]

Interpretation:

The supplier takes an average of three additional days compared with its agreed lead time.

### C. Why is lead time consistency important?

Imagine that a supplier has an agreed lead time of 10 days.

But actual delivery history looks like this:

| Purchase order | Actual lead time |
|---|---:|
| PO 1 | 9 days |
| PO 2 | 10 days |
| PO 3 | 17 days |
| PO 4 | 12 days |
| PO 5 | 16 days |

Average lead time:

\[
\frac{9+10+17+12+16}{5}=12.8\text{ days}
\]

Even if the agreed lead time is 10 days, the actual average is 12.8 days.

This matters because procurement and inventory planning may be using outdated lead time assumptions.

**Business interpretation:** Inconsistent supplier lead times increase uncertainty and may require higher safety stock or alternative sourcing strategies.

---

## 4.9 Supply Plan Attainment

### A. What is it?

Supply Plan Attainment measures how much of the planned supply quantity was actually made available according to the supply plan.

Unlike Production Plan Attainment, this is broader.

It can include supply coming from:
- Internal manufacturing.
- External suppliers.
- Contract manufacturers.
- Other approved replenishment sources.

For S&OP, this KPI helps evaluate whether the organization delivered the total supply required to support the agreed demand plan.

### B. Formula

One practical definition is:

\[
\text{Supply Plan Attainment}=
\frac{\text{Actual Supply Available}}
{\text{Planned Supply}}\times100
\]

Where:
- Actual Supply Available = Supply received or completed and made available during the defined period.
- Planned Supply = Agreed supply quantity for that period.

The exact definition must specify whether beginning inventory, transfers, and other supply sources are included.

### C. Example

Assume:

| Supply source | Planned quantity | Actual available quantity |
|---|---:|---:|
| Internal production | 8,000 | 7,500 |
| Supplier deliveries | 2,000 | 1,500 |
| Total | 10,000 | 9,000 |

Calculation:

\[
=\frac{9,000}{10,000}\times100
\]

\[
=90\%
\]

**Result: 90%**

Interpretation:

The company achieved only 90% of its planned supply availability.

The total supply shortfall is:

\[
10,000-9,000=1,000\text{ units}
\]

Notice that the shortfall came from two sources:

- Internal production shortfall = 500 units.
- Supplier delivery shortfall = 500 units.

This is why Supply Plan Attainment is useful for S&OP. It combines different supply sources into one overall performance measurement.

### D. Important distinction

Supply Plan Attainment is not necessarily the same as customer fulfillment.

A company can achieve 100% of its supply plan but still fail to meet customer demand if:
- The supply plan itself was insufficient.
- Products were produced in the wrong locations.
- Inventory was allocated incorrectly.
- Demand was higher than the agreed plan.

Therefore, always evaluate supply attainment alongside demand requirements and inventory availability.

---

# 5. Production and Capacity Performance

Now that we understand the individual KPIs, let's connect them.

The important thing to remember is that production output is influenced by several operational factors.

## 5.1 Planned vs. Actual Production

Suppose the monthly production plan is 10,000 good units.

Actual production:

| Metric | Quantity |
|---|---:|
| Planned production | 10,000 |
| Actual gross production | 9,600 |
| Rejected production | 480 |
| Actual good production | 9,120 |
| Production shortfall | 880 |

Production Plan Attainment:

\[
=\frac{9,120}{10,000}\times100
=91.2\%
\]

The company has an 8.8% shortfall against its planned good output.

But what caused the shortfall?

We need to analyze production capacity, downtime, performance losses, and quality losses.

## 5.2 Understanding production losses

There are several major categories of production losses.

| Loss category | Explanation | Example |
|---|---|---|
| Availability loss | Machine cannot operate | Equipment breakdown |
| Performance loss | Machine runs slower than expected | Reduced line speed |
| Quality loss | Produced units fail inspection | Defective components |
| Material loss | Production cannot continue due to missing materials | Raw material shortage |
| Labor loss | Insufficient manpower | Operator absence |
| Scheduling loss | Production time is lost due to poor planning | Excessive changeovers |

These losses are related but not interchangeable.

For example, material shortage may cause machine downtime, which reduces availability.

A single underlying problem can therefore affect multiple KPIs.

## 5.3 Capacity Utilization vs. Production Efficiency vs. OEE

This distinction deserves special attention because these three metrics are frequently confused.

Let's compare them directly.

| KPI | Main question | Typical formula |
|---|---|---|
| Capacity Utilization | How much available capacity did we use? | Actual capacity used / Available capacity |
| Production Efficiency | How fast did we produce relative to the standard rate? | Actual output / Theoretical output during operating time |
| OEE | How effectively did we use planned production time to produce good units? | Availability × Performance × Quality |

Let's use the same machine.

Assumptions:

- Available production time = 1,000 hours.
- Actual operating time = 800 hours.
- Ideal production rate = 12 units/hour.
- Actual production = 8,640 units.
- Good production = 8,208 units.

**Capacity Utilization: 80%**

800 actual operating hours ÷ 1,000 available hours.

**Production Efficiency: 90%**

8,640 actual units ÷ 9,600 theoretical units.

**OEE: 68.4%**

80% availability × 90% performance × 95% quality.

### Why are the results different?

Because they answer different questions.

**Capacity Utilization = 80%**

We used 80% of our available machine time.

**Production Efficiency = 90%**

During the time the machine was operating, it produced at 90% of its ideal speed.

**OEE = 68.4%**

After accounting for downtime, reduced speed, and quality losses, we achieved 68.4% of the theoretical good-output potential during planned production time.

One important clarification: Production Efficiency is not a universally standardized KPI name. Some companies use it to refer to labor productivity, standard hours earned versus actual hours, or other efficiency calculations. Here, we specifically use the production-rate definition.

## 5.4 How capacity constraints affect supply commitments

Let's assume:

Customer demand requires 12,000 good units next month.

The production department has:
- Available capacity: 1,000 hours.
- Ideal production rate: 12 units/hour.
- Expected yield: 95%.

Maximum expected good output:

\[
1,000\times12\times0.95
\]

\[
=11,400\text{ good units}
\]

But customer demand is 12,000 units.

Supply gap:

\[
12,000-11,400=600\text{ units}
\]

The company has a capacity-related supply gap of 600 units under these assumptions.

Possible solutions:

1. Introduce overtime.
2. Add another production shift.
3. Improve machine efficiency.
4. Increase yield.
5. Outsource production.
6. Transfer inventory from another facility.
7. Negotiate delivery schedules with customers.

The important point is that S&OP should not simply accept the 12,000-unit demand forecast.

It must determine whether the organization has the capacity and resources to fulfill it.

---

# 6. Supplier and Material Performance

Production capacity alone does not guarantee supply availability.

A factory can have enough machines and operators but still fail to produce because raw materials are unavailable.

## 6.1 Supplier Delivery Reliability

Supplier reliability is important because manufacturing depends on a continuous flow of materials.

Consider this situation:

- Production requirement: 10,000 units.
- Required raw material: 5,000 kg.
- Supplier commitment: 5,000 kg by November 10.
- Actual delivery: 4,000 kg on November 12.

There are two problems:

1. The delivery was late.
2. The delivered quantity was incomplete.

The supplier may therefore have poor OTD and poor quantity fulfillment.

These are different measurements.

## 6.2 Material Availability

Material Availability measures whether the required materials are available when production needs them.

A common measurement is:

\[
\text{Material Availability}=
\frac{\text{Available Required Materials}}
{\text{Total Required Materials}}\times100
\]

Example:

- Total material requirement = 5,000 kg.
- Available material = 4,500 kg.

\[
=\frac{4,500}{5,000}\times100
\]

\[
=90\%
\]

The factory has only 90% of its required material.

This does not necessarily mean production will decrease by exactly 10%. The impact depends on the material's usage, product mix, production sequence, and whether alternative materials are available.

For example, a shortage of one critical component may stop an entire production line even if all other materials are available.

## 6.3 Lead Time Variability

Another important concept is lead time variability.

Suppose Supplier A and Supplier B have the same average lead time.

| Delivery | Supplier A | Supplier B |
|---|---:|---:|
| 1 | 10 days | 6 days |
| 2 | 10 days | 10 days |
| 3 | 10 days | 14 days |
| 4 | 10 days | 10 days |
| 5 | 10 days | 10 days |
| Average | 10 days | 10 days |

Both suppliers have an average lead time of 10 days.

But Supplier A is more consistent.

Supplier B has greater variation.

Why does this matter?

Because inventory planning needs to account not only for average lead time but also for uncertainty.

A supplier with highly variable lead times may require:
- Higher safety stock.
- Earlier purchasing.
- More frequent supplier monitoring.
- Alternative sourcing arrangements.

This will connect directly to Topic 9.4: Inventory KPIs.

---

# 7. KPI Interpretation and Analysis

This is where we move beyond simply calculating percentages.

An S&OP analyst must understand the relationships between KPIs.

## 7.1 Actual vs. Target Comparison

A KPI result is more meaningful when compared against an established target.

For example:

| KPI | Actual | Target | Assessment |
|---|---:|---:|---|
| Production Plan Attainment | 92% | 98% | Below target |
| Schedule Adherence | 85% | 95% | Below target |
| Capacity Utilization | 80% | 85% | Below reference target |
| OEE | 68.4% | 75% | Below target |
| Production Yield | 95% | 98% | Below target |
| Customer OTD | 90% | 95% | Below target |
| Supplier OTD | 90% | 95% | Below target |

*Illustrative targets only. Actual company targets depend on industry, equipment, product mix, and business requirements.*

Notice that capacity utilization is not always a KPI where higher is automatically better.

For example:
- 50% utilization may indicate excess capacity.
- 95% utilization may indicate insufficient flexibility.
- 100% utilization may leave no room for unexpected demand or maintenance.

The correct target depends on the company's operating strategy.

## 7.2 Understanding KPI Relationships

Let's examine five important relationships.

**Relationship 1: Supplier OTD → Material Availability → Production Plan Attainment**

A supplier frequently delivers late.

Consequences:
1. Raw materials become unavailable.
2. Production starts are delayed.
3. Production quantity decreases.
4. Production attainment declines.
5. Finished goods inventory becomes insufficient.
6. Customer OTD decreases.

**Relationship 2: OEE → Production Capacity → Supply Plan Attainment**

A machine experiences frequent breakdowns.

Consequences:
1. Availability decreases.
2. OEE decreases.
3. Actual production capacity decreases.
4. Planned production becomes difficult to achieve.
5. Supply Plan Attainment declines.

**Relationship 3: Production Yield → Good Output → Inventory Availability**

Production yield decreases.

Consequences:
1. More units are rejected.
2. Fewer good units become available.
3. More production is required to achieve the same demand.
4. Raw material consumption increases.
5. Production costs increase.

**Relationship 4: Schedule Adherence → Production Stability → Customer OTD**

Production schedules frequently change.

Consequences:
1. Product sequencing becomes unstable.
2. Changeovers may increase.
3. Orders may be delayed.
4. Finished goods may become available at the wrong time.
5. Customer delivery performance may decline.

**Relationship 5: Capacity Utilization → Flexibility → Supply Responsiveness**

Capacity utilization becomes very high.

Consequences:
1. Less unused capacity remains.
2. Unexpected demand becomes harder to accommodate.
3. Maintenance opportunities become more difficult to schedule.
4. Overtime or additional shifts may become necessary.

## 7.3 Symptoms vs. Root Causes

This is one of the most important analytical skills in supply planning.

Suppose customer OTD decreases from 96% to 85%.

The KPI tells us there is a problem.

But it does not automatically tell us why.

Consider the following investigation:

| Observation | Possible explanation | What to investigate |
|---|---|---|
| Low production attainment | Insufficient output | Production losses |
| Low OEE | Poor equipment performance | Downtime and speed losses |
| Low yield | High rejection rate | Process conditions and quality |
| Low supplier OTD | Supplier delays | Supplier delivery history |
| Low schedule adherence | Unstable execution | Schedule changes and material readiness |
| Low material availability | Insufficient materials | Inventory and procurement |

Let's take an example.

**Symptom:** Production Plan Attainment is 85%.

Initial assumption: Production capacity is insufficient.

But after investigation:
- Available machine capacity is sufficient.
- OEE is satisfactory.
- Production operators are available.
- Raw materials arrived three days late.

The actual root cause is supplier delivery performance, not production capacity.

This distinction is important because the corrective action must address the actual problem.

Increasing machine capacity will not solve a raw material shortage.

---

# 8. Practical Manufacturing Case Study

**Integrated S&OP Case Study**

Now let's apply everything in one realistic manufacturing scenario.

## 8.1 Business Situation

Imagine that you are working as an S&OP Analyst for an electronic components manufacturer.

The company produces MLCC components.

For November, the agreed supply plan requires 10,000 good units.

However, during the month, several operational issues occur.

**Production information**

| Variable | Value |
|---|---:|
| Planned good production | 10,000 units |
| Available production time | 1,000 hours |
| Downtime | 200 hours |
| Actual operating time | 800 hours |
| Standard production rate | 12 units/hour |
| Actual gross production | 8,640 units |
| Good production | 8,208 units |

**Production schedule information**

| Variable | Value |
|---|---:|
| Scheduled production orders | 20 |
| Orders completed on schedule | 17 |

**Supplier information**

| Variable | Value |
|---|---:|
| Supplier deliveries due | 20 |
| On-time supplier deliveries | 18 |
| Deliveries within agreed lead time | 16 |

**Supply and customer information**

| Variable | Value |
|---|---:|
| Planned total supply | 10,000 units |
| Actual internal good production | 8,208 units |
| Actual supplier supply contribution | 792 units |
| Total actual supply | 9,000 units |
| Customer orders due | 50 |
| Customer orders delivered on time | 45 |

For this case, assume all supply quantities are comparable finished-product units and were made available within the measurement period.

## 8.2 Calculate the Supply Planning KPIs

### KPI 1: Production Plan Attainment

\[
=\frac{8,208}{10,000}\times100
\]

\[
=\boxed{82.08\%}
\]

Interpretation:

The factory achieved only 82.08% of its planned good production.

Production shortfall:

\[
10,000-8,208=1,792\text{ units}
\]

### KPI 2: Schedule Adherence

\[
=\frac{17}{20}\times100
\]

\[
=\boxed{85\%}
\]

Interpretation:

Three production orders were not completed according to schedule.

### KPI 3: Capacity Utilization

\[
=\frac{800}{1,000}\times100
\]

\[
=\boxed{80\%}
\]

Interpretation:

The factory used 80% of its available production time.

### KPI 4: OEE

Availability:

\[
=\frac{800}{1,000}=80\%
\]

Performance:

\[
=\frac{8,640}{800\times12}=90\%
\]

Quality:

\[
=\frac{8,208}{8,640}=95\%
\]

OEE:

\[
=0.80\times0.90\times0.95
\]

\[
=\boxed{68.4\%}
\]

Interpretation:

The machine delivered only 68.4% of its theoretical good-output potential during planned production time.

### KPI 5: Production Yield

\[
=\frac{8,208}{8,640}\times100
\]

\[
=\boxed{95\%}
\]

Interpretation:

Five percent of the gross production was rejected.

### KPI 6: Customer OTD

\[
=\frac{45}{50}\times100
\]

\[
=\boxed{90\%}
\]

Interpretation:

Five customer orders were delivered late.

### KPI 7: Supplier OTD

\[
=\frac{18}{20}\times100
\]

\[
=\boxed{90\%}
\]

Interpretation:

Two supplier deliveries arrived late.

### KPI 8: Supplier Lead Time Performance

\[
=\frac{16}{20}\times100
\]

\[
=\boxed{80\%}
\]

Interpretation:

Only 80% of deliveries met the agreed lead time.

### KPI 9: Supply Plan Attainment

\[
=\frac{9,000}{10,000}\times100
\]

\[
=\boxed{90\%}
\]

Interpretation:

The company achieved 90% of its total planned supply.

The supply shortfall was:

\[
10,000-9,000=1,000\text{ units}
\]

## 8.3 Consolidated KPI Dashboard

**ILLUSTRATIVE NOVEMBER PERFORMANCE**

| Supply KPI | Actual result |
|---|---:|
| Production Plan Attainment | 82.08% |
| Schedule Adherence | 85.00% |
| Capacity Utilization | 80.00% |
| OEE | 68.40% |
| Production Yield | 95.00% |
| Customer OTD | 90.00% |
| Supplier OTD | 90.00% |
| Supplier Lead Time Performance | 80.00% |
| Supply Plan Attainment | 90.00% |

## 8.4 Analytical Interpretation

Now, let's analyze what happened.

**Finding 1: Production output is below plan.**

Production attainment is only 82.08%.

There is a 1,792-unit production shortfall.

**Finding 2: Equipment performance needs investigation.**

OEE is 68.4%.

Availability is only 80%, indicating significant downtime.

Performance is 90%, suggesting the machine also operates below its ideal production rate.

Quality is 95%, indicating an additional opportunity to reduce rejection losses.

**Finding 3: Supplier performance is affecting supply reliability.**

Supplier OTD is 90%, while lead time performance is 80%.

This suggests that supplier delivery reliability and lead time consistency require attention.

**Finding 4: Production schedule execution is unstable.**

Schedule adherence is 85%.

This may indicate frequent production disruptions, rescheduling, or resource availability problems.

**Finding 5: Customer service is affected.**

Customer OTD is 90%.

Five customer orders were delivered late.

The combination of production and supplier problems may be contributing to the delivery shortfall, although order-level investigation is required to confirm the causes.

## 8.5 Recommended Business Actions

| Identified problem | Recommended action | Expected impact |
|---|---|---|
| Low machine availability | Investigate downtime and implement corrective maintenance | Improve OEE |
| Low production speed | Review operating parameters and cycle time | Improve production efficiency |
| Low production yield | Investigate major defect contributors | Increase good output |
| Low supplier OTD | Conduct supplier performance review | Improve material availability |
| Low lead time performance | Revalidate supplier lead times | Improve procurement planning |
| Low schedule adherence | Improve material readiness and production sequencing | Improve schedule stability |
| Low customer OTD | Prioritize overdue customer orders and review allocation | Improve customer service |

### Important analytical observation

Notice something interesting.

Capacity Utilization is 80%, but Production Plan Attainment is only 82.08%.

This tells us that simply having available machine time does not guarantee that production targets will be achieved.

The organization must also consider:
- Equipment reliability.
- Production speed.
- Product quality.
- Material availability.
- Production scheduling.

**Capacity availability and effective production capability are not the same thing.**

That is one of the most valuable lessons in supply planning.

---

# 9. Business Perspective and Decision-Making

## 9.1 How does an S&OP Analyst use Supply Planning KPIs?

An S&OP Analyst does not necessarily manage the production machines or negotiate directly with suppliers.

However, the analyst consolidates operational information and translates it into business implications.

For example:

The Production Manager reports:

"We can produce 10,000 units next month."

The S&OP Analyst should ask:

- Is that based on available capacity?
- What is the expected OEE?
- What is the expected yield?
- Are materials available?
- Are suppliers reliable?
- Are there maintenance activities?
- Can we meet the required production schedule?

The goal is to validate whether the supply plan is realistic.

## 9.2 Supply KPIs and Business Decisions

| Business area | KPI information | Possible decision |
|---|---|---|
| Production | Low plan attainment | Adjust production plan |
| Capacity | High utilization | Add shifts or outsource |
| Equipment | Low OEE | Maintenance or process improvement |
| Quality | Low yield | Corrective quality actions |
| Procurement | Low supplier OTD | Supplier escalation or alternative sourcing |
| Inventory | Material shortages | Adjust replenishment and safety stock |
| Customer service | Low OTD | Prioritize critical customer orders |
| Finance | High production losses | Review manufacturing costs |

## 9.3 Impact on Customer Service

Poor supply performance can result in:
- Delayed customer orders.
- Backorders.
- Lost sales.
- Customer dissatisfaction.
- Contractual penalties.

Even if the demand forecast is accurate, customers will not receive their orders if supply cannot meet demand.

## 9.4 Impact on Inventory

Supply performance and inventory are closely related.

Consider two situations.

**Situation A: Poor supplier reliability**

Suppliers frequently deliver late.

Possible response:
- Increase safety stock.
- Order earlier.
- Qualify alternative suppliers.

**Situation B: Poor production yield**

The factory produces fewer good units than expected.

Possible response:
- Adjust gross production requirements.
- Improve process yield.
- Recalculate expected replenishment quantities.

However, increasing inventory is not always the correct solution.

If the real problem is poor production execution, simply holding more inventory may increase working capital without fixing the underlying issue.

## 9.5 Impact on Cost and Profitability

Supply planning performance affects several cost components:

| Problem | Potential financial impact |
|---|---|
| Low OEE | Higher manufacturing cost per good unit |
| Low yield | More material consumption and scrap |
| High downtime | Lost production opportunity |
| Supplier delays | Expedite and emergency procurement costs |
| Low schedule adherence | Additional setup and changeover costs |
| Low OTD | Lost sales and customer penalties |
| Excessive capacity | Higher fixed cost per unit |

Ultimately, effective supply planning aims to balance:

**Customer Service + Operational Efficiency + Inventory + Cost + Profitability**

## 9.6 How to Present Supply Performance in an S&OP Meeting

An effective supply planning report should not simply display KPI percentages.

It should communicate:

1. What was planned?
2. What actually happened?
3. What is the performance gap?
4. What caused the gap?
5. What is the impact on future supply?
6. What actions are required?
7. What decisions need management approval?

Example:

| Discussion item | Business update |
|---|---|
| Supply plan | 10,000 units |
| Actual supply | 9,000 units |
| Supply attainment | 90% |
| Main concerns | Equipment downtime and supplier delays |
| Business impact | 1,000-unit supply shortfall |
| Proposed actions | Recovery production, supplier escalation |
| Management decision | Approve overtime or alternative sourcing |

This is the difference between KPI reporting and S&OP decision support.

---

# 10. Key Takeaways

Before moving to the exercises, let's consolidate the most important concepts.

## 10.1 Nine Supply Planning KPIs to Remember

| KPI | What it measures | Main question |
|---|---|---|
| 1. Production Plan Attainment | Actual vs. planned production | Did we produce enough? |
| 2. Schedule Adherence | Execution against production schedule | Did we produce as scheduled? |
| 3. Capacity Utilization | Used vs. available capacity | How much capacity did we use? |
| 4. OEE | Availability × Performance × Quality | How effectively did equipment operate? |
| 5. Production Yield | Good output vs. total output | How much production passed quality? |
| 6. Customer OTD | Customer delivery timeliness | Did we deliver on time? |
| 7. Supplier OTD | Supplier delivery timeliness | Did suppliers deliver on time? |
| 8. Supplier Lead Time Performance | Actual vs. agreed lead time | Are suppliers meeting expected lead times? |
| 9. Supply Plan Attainment | Actual vs. planned supply | Did we make the required supply available? |

## 10.2 The Five Most Important Distinctions

These are particularly important for your development as an S&OP Analyst.

**1. Production Plan Attainment vs. Schedule Adherence**

- Plan Attainment = Did we achieve the planned quantity?
- Schedule Adherence = Did we follow the agreed production schedule?

**2. Capacity Utilization vs. Production Efficiency**

- Capacity Utilization = How much available capacity did we use?
- Production Efficiency = How fast did we produce relative to the ideal production rate?

**3. Production Efficiency vs. OEE**

- Production Efficiency = Actual speed compared with standard speed.
- OEE = Availability, speed, and quality combined.

**4. Production Plan Attainment vs. Supply Plan Attainment**

- Production Plan Attainment = Internal production performance.
- Supply Plan Attainment = Overall supply performance, potentially including internal production and external supply sources.

**5. Customer OTD vs. Supplier OTD**

- Customer OTD = Our delivery performance to customers.
- Supplier OTD = Supplier delivery performance to our organization.

## 10.3 Formula Reference Sheet

Keep these formulas as your quick reference.

| KPI | Formula |
|---|---|
| Production Plan Attainment | Actual Production / Planned Production × 100 |
| Schedule Adherence | Orders completed as scheduled / Total scheduled orders × 100 |
| Capacity Utilization | Actual Capacity Used / Available Capacity × 100 |
| Availability | Operating Time / Planned Production Time × 100 |
| Performance | Actual Output / Theoretical Output × 100 |
| Quality | Good Output / Total Output × 100 |
| OEE | Availability × Performance × Quality |
| Production Yield | Good Units / Total Units Produced × 100 |
| Customer OTD | Customer Orders Delivered On Time / Total Orders Due × 100 |
| Supplier OTD | Supplier Deliveries On Time / Total Deliveries Due × 100 |
| Supplier Lead Time Achievement | Deliveries Within Agreed Lead Time / Total Deliveries × 100 |
| Supply Plan Attainment | Actual Supply Available / Planned Supply × 100 |

*These are the calculation conventions used in this lesson. Actual company KPI definitions may differ.*

---

# 11. Knowledge Check and Exercises

**Your turn: Apply what you learned**

Now we move to the assessment portion.

I will not provide the answers yet. You will attempt the questions first, and I will evaluate your answers, correct any misunderstandings, and explain the calculations.

## Exercise 1: Conceptual Understanding

**Level 1 – Understanding**

Answer in your own words.

**1.** What is the main purpose of Supply Planning KPIs in an S&OP process?

**2.** A company achieved 100% Production Plan Attainment but only 80% Schedule Adherence.

Is this possible? Explain how.

**3.** What is the difference between Capacity Utilization and OEE?

**4.** A company has 100% Supplier OTD, but production still experiences material shortages.

How is this possible?

**5.** Why is Production Yield important when determining the required production quantity?

## Exercise 2: Numerical Calculations

**Level 2 – Technical Application**

Show your formulas and step-by-step calculations.

### Problem 1: Production Plan Attainment

A manufacturing company has the following monthly results:

- Planned production: 15,000 units.
- Actual gross production: 14,000 units.
- Defective units: 700 units.

Calculate:

a. Actual good production.

b. Production Plan Attainment using good production.

c. Production shortfall.

### Problem 2: Schedule Adherence

The production department scheduled 40 production orders.

Only 34 orders were completed within their agreed production schedules.

Calculate:

a. Schedule Adherence.

b. Number of non-adherent orders.

c. What does the result indicate about production execution?

### Problem 3: Capacity Utilization

A factory has 1,200 available production hours per month.

Actual machine operating time was 960 hours.

Calculate:

a. Capacity Utilization.

b. Unused available capacity in hours.

c. Give two possible reasons for unused capacity.

### Problem 4: OEE

A manufacturing machine has the following data:

| Variable | Value |
|---|---:|
| Planned production time | 500 hours |
| Downtime | 75 hours |
| Ideal production rate | 20 units/hour |
| Actual production | 7,650 units |
| Good production | 7,344 units |

Calculate:

a. Operating time.

b. Availability.

c. Theoretical output during operating time.

d. Performance.

e. Quality.

f. OEE.

### Problem 5: Supplier Performance

A supplier has 30 scheduled deliveries.

- 27 deliveries arrived on time.
- 24 deliveries arrived within the agreed lead time.

Calculate:

a. Supplier OTD.

b. Supplier Lead Time Achievement.

c. Number of late deliveries.

d. Number of deliveries that exceeded the agreed lead time.

Explain why Supplier OTD and Lead Time Achievement may produce different results.

## Exercise 3: Manufacturing Business Analysis

**Level 3 – Professional Analysis**

This section is especially important because it simulates the type of analysis you may perform in an actual S&OP role.

### Scenario A: Production Performance

Your company reports the following monthly results:

| KPI | Previous month | Current month |
|---|---:|---:|
| Production Plan Attainment | 98% | 88% |
| Schedule Adherence | 96% | 85% |
| Capacity Utilization | 82% | 94% |
| OEE | 78% | 65% |
| Production Yield | 97% | 94% |

Answer the following:

1. Which KPIs deteriorated?
2. Why might Capacity Utilization increase while Production Plan Attainment decreases?
3. What does the decline in OEE suggest?
4. What additional operational data would you request to investigate the problem?
5. What are your three recommended actions?

### Scenario B: Supplier and Customer Performance

The company reports:

| KPI | Previous month | Current month |
|---|---:|---:|
| Supplier OTD | 96% | 82% |
| Supplier Lead Time Achievement | 94% | 78% |
| Material Availability | 98% | 87% |
| Production Plan Attainment | 97% | 89% |
| Customer OTD | 95% | 86% |

Answer:

1. What relationship do you observe between supplier performance and production performance?
2. How might supplier delays affect customer OTD?
3. Should the company immediately increase safety stock? Why or why not?
4. What information would you request from Procurement?
5. What would you present during the S&OP meeting?

## Exercise 4: S&OP Analyst Challenge

Imagine that you are presenting the November supply performance to the Supply Chain Manager.

The manager asks:

> "Our demand forecast is accurate, but we still cannot fulfill customer orders. What exactly is happening, and what should we do?"

You have the following information:

- Demand forecast: 12,000 units.
- Planned supply: 12,000 units.
- Actual available supply: 10,500 units.
- Production OEE: 65%.
- Production Yield: 94%.
- Supplier OTD: 80%.
- Customer OTD: 85%.

Prepare a short business assessment covering:

1. What is the main supply problem?
2. Which KPIs support your assessment?
3. What are the possible root causes?
4. What immediate actions would you recommend?
5. What long-term improvements would you propose?

---

## How we will evaluate your answers

I will assess your responses based on four dimensions:

| Assessment area | What I will evaluate |
|---|---|
| Conceptual understanding | Do you understand what each KPI measures? |
| Calculation accuracy | Are your formulas and numerical results correct? |
| Interpretation | Can you explain what the results mean operationally? |
| Business judgment | Can you recommend appropriate S&OP actions? |

Hindi kailangang perfect ang first attempt. Ang goal natin ay matutunan mong mag-isip bilang isang Supply Planning Analyst, hindi lang maging mahusay sa pag-compute ng percentages.

---

# 12. Connection to the Next Topic

**Curriculum connection**

**Module 9 – Topic 9.4: Inventory KPIs**

We have now studied two important sides of supply chain performance:

- Demand Planning KPIs: Are we predicting customer requirements accurately?
- Supply Planning KPIs: Can we produce and procure what the business requires?

But there is another important question:

**Even if demand and supply plans are aligned, are we maintaining the right amount of inventory?**

For example:
- Can we have high production attainment but still experience inventory shortages?
- Can we have excellent supplier OTD but excessive raw material inventory?
- Can we have sufficient total inventory but still lack the specific products customers need?
- How do we determine whether inventory is too high or too low?

These are the questions that Inventory KPIs will address.

We will cover those in Topic 9.4, but only after completing this lesson.

---

## Your learning checkpoint

I recommend answering the exercises in order, starting with Exercise 1 and Exercise 2.

You can submit your answers together or one exercise at a time. I will check your calculations, explain mistakes, and challenge your business interpretation before we consider Topic 9.3 complete.
