# Module 4 – Supply Planning
## Topic 4.3: Capacity Planning

**Lesson 4.3 | Beginner to Professional | Taglish**

**Main learning objective:** Understand how a company determines whether its available production resources are sufficient to meet customer demand, and how capacity limitations influence production and supply planning decisions.

---

# 1. Topic Overview

## 1.1 What are we going to learn?

Sa previous topic, **Topic 4.2: Production Planning Fundamentals**, natutunan natin kung paano nagde-decide ang company kung:

- Ilang units ang kailangang i-produce?
- Kailan kailangang simulan at tapusin ang production?
- Ilang units ang kailangang gawin para matugunan ang demand?
- Paano ise-sequence ang production requirements?

Pero may isang importanteng tanong na kailangan nating sagutin:

**Kaya ba talaga ng factory na gawin ang required production quantity within the available time?**

Dito pumapasok ang Capacity Planning.

## 1.2 Simple example

Imagine na may manufacturing company na may customer demand na 10,000 units per week.

Ang production line nila ay kayang gumawa ng 2,000 units per day.

Kung five working days ang available:

\[
2,000 \times 5 = 10,000 \text{ units}
\]

On paper, sakto ang production capacity.

Pero paano kung:
- May machine breakdown?
- May scheduled maintenance?
- May changeover between products?
- May operator shortage?
- May rejected products?
- Hindi palaging tumatakbo ang machine at its maximum speed?

Possible na hindi pala talaga kayang ma-achieve ang 10,000 units.

**Ang purpose ng Capacity Planning ay malaman ang realistic production capability ng company bago pa magkaroon ng supply shortage.**

## 1.3 Why is this important in S&OP?

Sa S&OP, kailangan nating i-align ang tatlong importanteng bagay:

1. **Demand:** Ilang units ang kailangan ng customers?
2. **Supply:** Ilang units ang kayang i-produce at i-deliver ng company?
3. **Capacity:** May sapat bang production resources para makagawa ng required supply?

Hindi sapat na gumawa lang ng production plan. Kailangan din nating i-validate kung feasible ito.

## 1.4 Connection to other topics

| Topic | Main question |
|---|---|
| 4.1 Understanding Supply Planning | How do we ensure sufficient supply? |
| 4.2 Production Planning | How much and when should we produce? |
| **4.3 Capacity Planning** | **Can we produce the required quantity?** |
| 4.4 Resource Planning | What resources are needed to support the plan? |
| 4.6 Bottleneck Analysis | Which constrained operation limits production flow? |

Sa madaling salita:

- Production Planning determines the production requirement.
- Capacity Planning checks whether production is achievable.
- Resource Planning examines the resources needed to support the plan.

---

# 2. Layman's Explanation

## 2.1 Think of a restaurant kitchen

Imagine may restaurant na tumatanggap ng 100 orders per hour.

Pero ang kitchen nila ay may:
- 2 chefs
- 2 cooking stations
- 1 oven
- Limited preparation space

Kahit 100 orders ang gustong bilhin ng customers, hindi ibig sabihin na kayang ihanda ng kitchen ang lahat within one hour.

May limit ang production capability ng kitchen.

Ganito rin sa manufacturing.

Ang factory ay may limited:
- Machines
- Operators
- Production hours
- Working shifts

Kahit gaano kalaki ang customer demand, may maximum quantity lang na kayang gawin ng factory within a given period.

That maximum capability is related to **production capacity**.

## 2.2 Another manufacturing example

Imagine na may machine kang kayang mag-produce ng 100 units per hour.

Kung 8 hours ang shift:

\[
100 \times 8 = 800 \text{ units}
\]

Pero hindi naman palaging 8 hours ay productive ang machine.

May:
- 30 minutes setup
- 30 minutes downtime
- 30 minutes maintenance

Therefore, 6.5 hours na lang ang actual operating time.

\[
100 \times 6.5 = 650 \text{ units}
\]

Ang 800 units ay theoretical output, habang 650 units ang output based on the adjusted operating time.

At kung may defective products pa, mas mababa pa ang good output.

**Important lesson:** Production capacity is not simply about how fast a machine can operate. It is also about how much productive time is actually available.

---

# 3. Technical Explanation

## 3.1 What is Capacity Planning?

**Capacity Planning** is the process of determining, evaluating, and managing the production capability of an organization to ensure that available resources can meet expected demand within a specified period.

It evaluates whether the company has sufficient capacity in terms of:

- Equipment and machinery
- Labor and operators
- Available production hours
- Production shifts
- Manufacturing facilities
- Production rates
- Operational availability

Its main purpose is to ensure that the production plan is operationally feasible.

## 3.2 Three important planning questions

| Planning activity | Question |
|---|---|
| Demand Planning | How much do customers need? |
| Production Planning | How much should we produce? |
| Capacity Planning | Can we produce that quantity? |

These activities are interconnected.

For example:

A customer forecast indicates 50,000 units next month.

Production Planning determines that 52,000 units must be produced to cover demand and inventory requirements.

Capacity Planning evaluates whether the factory can actually produce 52,000 units within the available production hours.

If capacity is insufficient, the supply plan must be adjusted.

## 3.3 Capacity Planning vs. Production Planning vs. Production Scheduling

Magkakaugnay sila, pero magkakaiba ang purpose.

| Activity | Primary concern | Example |
|---|---|---|
| Production Planning | Quantity and timing | Produce 52,000 units next month |
| Capacity Planning | Production capability | Can available machines produce 52,000 units? |
| Production Scheduling | Specific execution sequence | Machine A produces Product X on Monday, then Product Y on Tuesday |

**Remember:**

- Planning determines what needs to happen.
- Capacity Planning validates whether it is possible.
- Scheduling determines how the work will be arranged and executed.

---

# 4. Detailed Discussion

## 4.1 Types of Production Capacity

Hindi lahat ng capacity figures ay pare-pareho. May iba't ibang levels ng capacity na ginagamit sa manufacturing.

### A. Design Capacity

Design Capacity refers to the maximum theoretical production capability of equipment or a production system under ideal operating conditions.

Example:

A machine is designed to produce 120 units per hour.

If it operates continuously for 24 hours:

\[
120 \times 24 = 2,880
\]

**Design Capacity: 2,880 units per day.**

This assumes ideal conditions, with no production interruptions.

In actual manufacturing, rarely natin naa-achieve ang design capacity consistently.

### B. Effective Capacity

Effective Capacity refers to the realistic production capability after considering normal operational limitations.

Examples:
- Scheduled maintenance
- Planned breaks
- Setup and changeover
- Normal operating interruptions
- Available working shifts

Example:

Design capacity = 120 units/hour.

Available productive time = 20 hours.

\[
120 \times 20 = 2,400
\]

**Effective Capacity: 2,400 units per day.**

Mas realistic ito kaysa design capacity dahil considered na ang planned operating limitations.

### C. Actual Output

Actual Output refers to the quantity actually produced during a specific period.

Example:

Effective capacity = 2,400 units.

Actual production = 2,100 units.

Possible reasons:
- Unexpected downtime
- Reduced machine speed
- Material shortages
- Operator inefficiency
- Quality issues

**Actual Output: 2,100 units.**

### Comparison

| Capacity type | Quantity |
|---|---:|
| Design Capacity | 2,880 |
| Effective Capacity | 2,400 |
| Actual Output | 2,100 |

*Illustrative figures only. All values are units per day.*

The important distinction:

- Design Capacity = What the equipment can theoretically do.
- Effective Capacity = What the operation can realistically support.
- Actual Output = What was actually produced.

## 4.2 Theoretical vs. Practical Available Capacity

These terms help us distinguish maximum possible production from realistic operational availability.

**Theoretical Available Capacity**

The maximum production time or output if the equipment operates continuously under ideal assumptions.

Example:

24 hours/day × 30 days = 720 hours/month.

**Practical Available Capacity**

The production time available after accounting for operating schedules and planned losses.

Example:

| Item | Hours |
|---|---:|
| Calendar hours (30 days × 24) | 720 |
| Planned non-operating days | (168) |
| Scheduled maintenance | (12) |
| Remaining available time | 540 |

Practical available time = 540 hours/month.

Notice that practical capacity is more useful when developing a realistic production plan.

One important distinction: companies may define planned downtime differently. Some exclude it when calculating available time, while others include it in a separate utilization or efficiency calculation. Consistency in the chosen definition is essential.

## 4.3 Capacity Measurement Units

Capacity can be measured in different units depending on the production environment.

| Measurement | Meaning | Example |
|---|---|---|
| Units/hour | Production rate | 500 units/hour |
| Machine-hours | Time consumed by machines | 100 machine-hours |
| Labor-hours | Total employee working hours | 200 labor-hours |
| Units/day | Daily production capability | 4,000 units/day |
| Tons/month | Production weight | 500 tons/month |
| Lots/week | Batch production capability | 25 lots/week |

### Machine-hours vs. Labor-hours

Important ito dahil hindi sila interchangeable.

**Machine-hours:** Total hours that equipment is required to operate.

**Labor-hours:** Total working hours consumed by employees.

Example:

A machine operates for 8 hours and requires 2 operators.

Machine-hours:

\[
8 \times 1 = 8
\]

Labor-hours:

\[
8 \times 2 = 16
\]

Therefore:
- 8 machine-hours
- 16 labor-hours

Kung machine capacity ang constraint, machine-hours ang mas relevant.

Kung manpower availability ang constraint, labor-hours ang mas relevant.

## 4.4 Factors Affecting Available Capacity

Maraming factors ang nakakaapekto sa actual production capability.

| Factor | Effect on capacity |
|---|---|
| Machine speed | Determines production rate |
| Number of machines | Determines equipment availability |
| Working days | Determines available operating days |
| Shifts | Determines operating hours |
| Downtime | Reduces productive time |
| Maintenance | Reduces scheduled availability |
| Setup/changeover | Consumes production time |
| Labor availability | Limits machine operation |
| Material availability | May prevent production |
| Production yield | Determines good output |
| Product mix | Different products may have different production rates |

### Example: Impact of Downtime

A machine can produce 100 units/hour.

Scheduled operating time = 20 hours.

Unexpected downtime = 2 hours.

Actual running time:

\[
20-2=18\text{ hours}
\]

Production output:

\[
100\times18=1,800\text{ units}
\]

Kung walang downtime, 2,000 units sana ang possible output.

The downtime reduced production capability by 200 units.

### Example: Impact of Production Yield

Suppose gross production is 2,000 units, but yield is 95%.

\[
2,000\times95\%=1,900
\]

Good output = 1,900 units.

This is important because customer demand is normally measured in good, saleable products, not necessarily total units processed.

## 4.5 Capacity Load vs. Available Capacity

Ito ang isa sa pinakamahalagang concepts sa Capacity Planning.

**Capacity Load** refers to the amount of production capacity required to complete the planned production quantity.

**Available Capacity** refers to the amount of production capability available within a specified period.

Imagine na mayroon kang 100 machine-hours available, pero kailangan mo ng 120 machine-hours para matapos ang production plan.

| Item | Machine-hours |
|---|---:|
| Available Capacity | 100 |
| Required Capacity / Capacity Load | 120 |
| Capacity Shortage | 20 |

Meaning, overloaded ang production system by 20 machine-hours.

### Three possible situations

| Situation | Required | Available | Interpretation |
|---|---:|---:|---|
| Underloaded | 70 hours | 100 hours | 30 machine-hours unused |
| Fully Loaded | 100 hours | 100 hours | No remaining capacity cushion |
| Overloaded | 120 hours | 100 hours | 20 machine-hours shortage |

**S&OP implication:** Kapag mas mataas ang required capacity kaysa available capacity, hindi feasible ang current supply plan unless magkaroon ng corrective action.

## 4.6 Capacity Performance Metrics

Ngayon naman, paano natin sinusukat kung gaano ka-efficient at ka-utilized ang production capacity?

May ilang importanteng metrics.

### A. Capacity Utilization

Capacity Utilization measures how much of the maximum available or defined capacity is being used.

A common manufacturing definition is:

\[
\text{Capacity Utilization}=
\frac{\text{Actual Output}}{\text{Design Capacity}}\times100
\]

Example:

- Design Capacity = 10,000 units
- Actual Output = 8,000 units

\[
=\frac{8,000}{10,000}\times100
\]

\[
=\boxed{80\%}
\]

Interpretation: Ginagamit ang production system at 80% of its design capacity.

May 20% difference between actual output and design capacity.

**Important:** Sa S&OP, ginagamit din ang term na capacity utilization para sa:

\[
\frac{\text{Required Capacity}}{\text{Available Capacity}}\times100
\]

Ito naman ang ginagamit para malaman kung gaano ka-loaded ang available capacity based on the production plan.

Magkaiba ang denominator ng dalawang calculation. Kaya kapag nagbabasa ng company reports, alamin muna kung ano ang definition na ginagamit.

### B. Capacity Efficiency

Capacity Efficiency measures how effectively the operation converts its effective capacity into actual output.

\[
\text{Capacity Efficiency}=
\frac{\text{Actual Output}}{\text{Effective Capacity}}\times100
\]

Example:

- Effective Capacity = 9,000 units
- Actual Output = 8,100 units

\[
=\frac{8,100}{9,000}\times100
\]

\[
=\boxed{90\%}
\]

Interpretation:

The operation achieved 90% of its effective capacity.

The remaining 10% represents the difference between effective capacity and actual output.

### C. Capacity Cushion

Capacity Cushion refers to the amount of unused capacity maintained to accommodate unexpected demand, operational disruptions, or fluctuations.

Formula:

\[
\text{Capacity Cushion}=
\frac{\text{Available Capacity}-\text{Required Capacity}}
{\text{Available Capacity}}\times100
\]

Example:

- Available Capacity = 10,000 units
- Required Capacity = 8,000 units

\[
=\frac{10,000-8,000}{10,000}\times100
\]

\[
=\boxed{20\%}
\]

Interpretation:

The company has 20% remaining capacity.

This provides flexibility to handle additional demand or unexpected production losses.

A higher cushion provides more flexibility, but it can also mean that the company is maintaining unused resources that cost money.

A lower cushion means higher capacity loading and potentially higher risk of missed production targets.

### D. Capacity Gap

Capacity Gap measures the difference between available capacity and required capacity.

\[
\text{Capacity Gap}=
\text{Available Capacity}-\text{Required Capacity}
\]

Example:

- Available Capacity = 10,000 units
- Required Capacity = 12,000 units

\[
=10,000-12,000
\]

\[
=\boxed{-2,000\text{ units}}
\]

Interpretation:

The company has a capacity shortage of 2,000 units.

Positive result = Excess capacity.

Negative result = Capacity shortage.

Zero = Fully loaded capacity.

### E. Excess Capacity

Excess Capacity refers to the production capability that remains unused after satisfying the required production quantity.

\[
\text{Excess Capacity}=
\text{Available Capacity}-\text{Required Capacity}
\]

Example:

- Available Capacity = 15,000 units
- Required Capacity = 12,000 units

\[
=15,000-12,000
\]

\[
=\boxed{3,000\text{ units}}
\]

The company has 3,000 units of excess capacity.

This can be used for:
- Additional customer orders
- Inventory build-ahead
- Recovery from previous production shortages
- Planned maintenance without affecting customer commitments

### Summary of Capacity Metrics

| Metric | What it measures |
|---|---|
| Utilization | How much of defined capacity is being used |
| Efficiency | How effectively effective capacity is converted into output |
| Cushion | Remaining capacity as a percentage |
| Capacity Gap | Difference between available and required capacity |
| Excess Capacity | Unused capacity after requirements |

## 4.7 Capacity Planning in S&OP

Punta na tayo sa actual S&OP application.

Sa S&OP, hindi lang natin tinitingnan kung ilan ang forecasted demand. Kailangan nating i-evaluate kung kaya ba itong suportahan ng production system.

### How Capacity Planning works in S&OP

1. **Demand Plan:** Expected customer demand and forecast.
2. **Supply / Production Plan:** Required production quantities and timing.
3. **Capacity Evaluation:** Compare required capacity against available capacity.
4. **S&OP Decision:** Agree on a feasible supply plan and communicate its implications.

If capacity is sufficient, the team can proceed with the proposed supply plan, subject to other feasibility checks.

If capacity is insufficient, the team identifies capacity solutions and evaluates their business impact.

### Introduction to Rough-Cut Capacity Planning (RCCP)

**Rough-Cut Capacity Planning (RCCP)** is a high-level method used to evaluate whether the available production capacity can support the proposed production plan.

Ang keyword dito ay *rough-cut*.

Hindi pa nito sinusuri ang every detailed production activity or individual machine schedule.

Instead, it evaluates capacity at an aggregated level.

Example:

| Month | Required Production | Available Capacity | Status |
|---|---:|---:|---|
| January | 8,000 | 10,000 | Sufficient |
| February | 9,500 | 10,000 | Sufficient |
| March | 12,000 | 10,000 | Shortage |
| April | 9,000 | 10,000 | Sufficient |

Makikita natin na March ang may capacity problem.

This allows the S&OP team to identify the issue before the actual production period.

### Why is RCCP important?

Without RCCP, possible na:
- Mag-commit ang Sales ng orders na hindi kayang gawin ng factory.
- Gumawa ang Production ng unrealistic production targets.
- Magkaroon ng emergency overtime.
- Ma-delay ang customer deliveries.
- Magkaroon ng unnecessary inventory build-up sa ibang months habang may shortages sa peak periods.

**Important distinction:** RCCP is a planning-level capacity check. Detailed resource and machine-level validation may require more detailed planning methods, which we will discuss in the succeeding topics.

---

# 5. Practical Manufacturing Application

Now let's apply everything in a realistic manufacturing environment.

Gagamit tayo ng example ng factory producing electronic components.

## Scenario: Production Capacity Evaluation

A manufacturing company receives a forecast requiring 50,000 good units per week.

The company operates under these conditions:

**Machine information**

| Parameter | Value |
|---|---:|
| Number of machines | 2 |
| Production rate per machine | 500 units/hour |
| Shifts per day | 2 |
| Hours per shift | 8 hours |
| Working days per week | 5 days |
| Planned downtime per machine/day | 1 hour |
| Production yield | 95% |

Assume:
- Both machines have the same production rate.
- Planned downtime is already deducted from the scheduled operating hours.
- No additional unexpected downtime is considered initially.
- The production rate refers to gross units processed, not good units.
- Both machines can operate simultaneously.

### Step 1: Calculate Scheduled Operating Hours

Each machine operates:

\[
2\text{ shifts}\times8\text{ hours}=16\text{ hours/day}
\]

For five days:

\[
16\times5=80\text{ hours/week}
\]

### Step 2: Deduct Planned Downtime

Planned downtime:

\[
1\text{ hour/day}\times5=5\text{ hours}
\]

Net available operating time per machine:

\[
80-5=75\text{ hours/week}
\]

For two machines:

\[
75\times2=150\text{ machine-hours}
\]

### Step 3: Calculate Gross Production Capacity

Production rate:

\[
500\text{ units/hour/machine}
\]

Total gross production:

\[
500\times150
\]

\[
=75,000\text{ units}
\]

### Step 4: Calculate Good Production Capacity

Production yield = 95%.

\[
75,000\times0.95
\]

\[
=\boxed{71,250\text{ good units}}
\]

Therefore, the effective weekly good-output capacity is 71,250 units under the stated assumptions.

### Step 5: Compare Against Demand

Required demand = 50,000 good units.

Available good-output capacity = 71,250 units.

Capacity gap:

\[
71,250-50,000=21,250
\]

**Result: Sufficient Capacity.**

The company has 21,250 units of excess good-output capacity.

### Step 6: Calculate Capacity Utilization

Using planned good production divided by available good-output capacity:

\[
\frac{50,000}{71,250}\times100
\]

\[
=\boxed{70.18\%}
\]

Interpretation:

The production plan consumes approximately 70.18% of the available good-output capacity.

### Step 7: Calculate Capacity Cushion

\[
\frac{71,250-50,000}{71,250}\times100
\]

\[
=\boxed{29.82\%}
\]

The factory retains approximately 29.82% of its available capacity.

### Overall Result

| Parameter | Result |
|---|---:|
| Weekly demand | 50,000 units |
| Available machine-hours | 150 hours |
| Gross production capacity | 75,000 units |
| Yield | 95% |
| Good-output capacity | 71,250 units |
| Required capacity utilization | 70.18% |
| Capacity cushion | 29.82% |
| Excess capacity | 21,250 units |

### Step 8: What if demand increases?

Suppose next month, demand increases from 50,000 to 80,000 good units per week.

Available good-output capacity remains 71,250.

Capacity gap:

\[
71,250-80,000=-8,750
\]

**Result: Capacity Shortage.**

The company is short by 8,750 good units per week.

The current supply plan is no longer feasible using the existing operating arrangement.

This is where capacity management decisions become important.

---

# 6. Formulas and Calculations: Complete Reference

Let's consolidate the formulas so you can use them independently.

## 6.1 Available Production Capacity

For a machine-based production system:

\[
\boxed{C=N\times R\times H}
\]

Where:

- \(C\) = Gross production capacity (units)
- \(N\) = Number of machines
- \(R\) = Production rate (units/machine-hour)
- \(H\) = Available operating hours per machine

If accounting for production yield:

\[
\boxed{C_g=N\times R\times H\times Y}
\]

Where:
- \(C_g\) = Good-output capacity
- \(Y\) = Production yield expressed as a decimal

**Purpose:** Determine how much saleable output the factory can produce.

## 6.2 Required Production Capacity

First, determine the production quantity required.

\[
\text{Required Production}=
\text{Demand}+\text{Target Ending Inventory}
-\text{Beginning Inventory}
\]

This is a simplified inventory-based production calculation, assuming no other inventory adjustments.

Then calculate the required machine-hours:

\[
\boxed{H_r=\frac{Q}{R\times Y}}
\]

Where:

- \(H_r\) = Required machine-hours
- \(Q\) = Required good-output quantity
- \(R\) = Gross production rate per machine-hour
- \(Y\) = Production yield

**Purpose:** Determine how many machine-hours are needed to produce the required good units.

Example:

Required good production = 10,000 units.

Production rate = 500 units/hour.

Yield = 95%.

\[
H_r=\frac{10,000}{500\times0.95}
\]

\[
=\frac{10,000}{475}
\]

\[
=\boxed{21.05\text{ machine-hours}}
\]

## 6.3 Capacity Utilization

\[
\boxed{\text{Utilization}=
\frac{\text{Required Capacity}}{\text{Available Capacity}}\times100}
\]

Use consistent units for the numerator and denominator.

For planning, required capacity may be expressed in machine-hours, or as required output divided by available good-output capacity.

**Purpose:** Determine how much of the available capacity is needed to support the production plan.

## 6.4 Capacity Efficiency

\[
\boxed{\text{Efficiency}=
\frac{\text{Actual Output}}{\text{Effective Capacity}}\times100}
\]

**Purpose:** Determine how much of the effective production capability was actually achieved.

## 6.5 Capacity Gap

\[
\boxed{\text{Capacity Gap}=
\text{Available Capacity}-\text{Required Capacity}}
\]

**Purpose:** Identify whether capacity is sufficient or insufficient.

## 6.6 Capacity Cushion

\[
\boxed{\text{Capacity Cushion}=
\frac{\text{Available Capacity}-\text{Required Capacity}}
{\text{Available Capacity}}\times100}
\]

**Purpose:** Determine the percentage of capacity remaining after satisfying production requirements.

### Formula Cheat Sheet

| Metric | Formula |
|---|---|
| Available capacity | Machines × Rate × Hours |
| Good-output capacity | Gross capacity × Yield |
| Required machine-hours | Required good units ÷ (Rate × Yield) |
| Utilization | Required capacity ÷ Available capacity × 100 |
| Efficiency | Actual output ÷ Effective capacity × 100 |
| Capacity gap | Available − Required |
| Capacity cushion | (Available − Required) ÷ Available × 100 |

### Important Calculation Reminders

1. Always use consistent units. Do not compare machine-hours with labor-hours.
2. Account for yield when customer demand refers to good units.
3. Avoid deducting downtime twice.
4. Make sure production rates and operating hours cover the same period.
5. Distinguish between theoretical, effective, and actual capacity.
6. State your capacity definitions when presenting calculations in an S&OP report.

---

# 7. Capacity Management Decisions

Kapag nakita ng S&OP team na insufficient ang available capacity, hindi automatic na kailangan bumili ng bagong machine.

Maraming possible solutions, and each has different operational and financial implications.

## 7.1 Overtime

**Meaning:** Extend the existing working hours beyond the regular production schedule.

Example:

Normal operating hours = 8 hours/day.

Additional overtime = 2 hours/day.

New operating hours = 10 hours/day.

**Advantages:**
- Quick way to increase production.
- No need to purchase additional equipment.
- Uses existing production facilities.

**Disadvantages:**
- Additional labor costs.
- Possible employee fatigue.
- Higher maintenance requirements.
- Potential increase in quality issues.

**S&OP consideration:** Useful for short-term capacity shortages, but may not be sustainable if demand remains high for several months.

## 7.2 Additional Shifts

**Meaning:** Add another production shift to extend machine operating time.

Example:

Current schedule:
- Shift 1: 7 AM–3 PM
- Shift 2: 3 PM–11 PM

Proposed:
- Shift 1: 7 AM–3 PM
- Shift 2: 3 PM–11 PM
- Shift 3: 11 PM–7 AM

This increases the available operating hours.

**Advantages:**
- Increases production capacity.
- Better utilization of existing equipment.
- Can accommodate sustained demand increases.

**Disadvantages:**
- Additional manpower requirements.
- Higher utility and operating costs.
- Requires sufficient maintenance and operational support.

## 7.3 Subcontracting / Outsourcing

**Meaning:** Transfer some production requirements to an external manufacturing partner.

Example:

Required production = 100,000 units.

Internal capacity = 80,000 units.

Shortage = 20,000 units.

The company can outsource the remaining 20,000 units.

**Advantages:**
- Immediate access to external production capacity.
- Avoids large capital investments.
- Useful for temporary demand spikes.

**Disadvantages:**
- Higher unit production cost may apply.
- Less direct control over quality.
- Supplier dependency.
- Additional logistics and coordination.

## 7.4 Alternate Production Lines

**Meaning:** Transfer some production requirements to another available production line or machine.

Example:

| Production line | Available capacity | Current load |
|---|---:|---:|
| Line A | 50,000 | 55,000 |
| Line B | 40,000 | 25,000 |

Line A has a shortage of 5,000 units.

Line B has 15,000 units of unused capacity.

If both lines are capable of producing the same product, transferring 5,000 units from Line A to Line B can resolve the overload.

**Advantages:**
- Better utilization of existing facilities.
- No immediate capital investment.
- Can balance production requirements.

**Disadvantages:**
- Not all products are compatible with every line.
- Different production rates may apply.
- Additional setup and qualification may be required.

## 7.5 Rescheduling Production

**Meaning:** Adjust the timing of production to balance capacity requirements across different periods.

Example:

| Month | Required production | Available capacity |
|---|---:|---:|
| January | 8,000 | 10,000 |
| February | 13,000 | 10,000 |
| March | 7,000 | 10,000 |

February has a shortage of 3,000 units.

The company may produce some February requirements in January and hold the finished goods as inventory.

For example:

- January production: 10,000 units
- February production: 10,000 units
- March production: 10,000 units

If 3,000 units of February demand are produced ahead in January, February's capacity requirement can be reduced.

**Advantages:**
- Reduces peak-period capacity pressure.
- Makes better use of available production time.
- May prevent overtime and emergency production.

**Disadvantages:**
- Higher inventory holding costs.
- Additional warehouse requirements.
- Risk of obsolescence.
- Requires accurate demand forecasts.

## 7.6 Inventory Build-Ahead

**Meaning:** Produce inventory ahead of the period when demand is expected to occur.

This is closely related to rescheduling.

Example:

The company expects high customer demand in December.

However, production capacity in December is limited because of holidays and maintenance.

The company starts building finished goods inventory in October and November.

This allows the company to satisfy December demand without producing everything during December.

**Important:** Inventory build-ahead does not increase the factory's total capacity. It shifts production into periods when capacity is available.

## 7.7 Capacity Investment

**Meaning:** Increase long-term production capability through capital expenditure (CAPEX).

Examples:
- Purchase additional machines.
- Install another production line.
- Expand manufacturing facilities.
- Automate manual operations.
- Upgrade existing equipment to increase production rates.

**Advantages:**
- Sustainable capacity expansion.
- Can reduce long-term dependence on overtime and outsourcing.
- May improve productivity and operational efficiency.

**Disadvantages:**
- High initial investment.
- Long equipment procurement and installation lead times.
- Additional maintenance costs.
- Risk of excess capacity if demand declines.

### Comparison of Capacity Management Strategies

| Strategy | Typical application | Main trade-off |
|---|---|---|
| Overtime | Short-term shortage | Higher labor cost |
| Additional shifts | Medium-term demand increase | Additional operating costs |
| Subcontracting | Temporary capacity shortage | Supplier cost and quality control |
| Alternate lines | Uneven line loading | Product compatibility |
| Rescheduling | Uneven demand across periods | Scheduling complexity |
| Inventory build-ahead | Predictable future peak demand | Inventory carrying cost |
| Capacity investment | Long-term structural shortage | High CAPEX |

### How should an S&OP analyst evaluate these options?

Hindi sapat na sabihin na kailangan ng overtime or additional machines.

An S&OP analyst should evaluate:

1. How large is the capacity shortage?
2. How long will the shortage last?
3. Is the demand increase temporary or permanent?
4. What is the cost of each possible solution?
5. What is the impact on customer service?
6. How much additional capacity can each option provide?
7. What are the implementation lead times?

The objective is to identify the most feasible and financially reasonable solution.

---

# 8. Business Perspective and Decision-Making

Dito natin pagsasamahin ang concepts bilang isang S&OP analyst.

Imagine na nasa monthly S&OP meeting ka.

Nag-present ang Sales team ng updated forecast.

| Month | Forecast Demand |
|---|---:|
| January | 40,000 |
| February | 45,000 |
| March | 65,000 |
| April | 70,000 |

Ang current weekly production capacity ng factory ay equivalent to 50,000 units per month for this simplified example.

*All quantities below are illustrative monthly good-output units.*

## Step 1: Identify the Capacity Problem

| Month | Demand | Available Capacity | Gap |
|---|---:|---:|---:|
| January | 40,000 | 50,000 | +10,000 |
| February | 45,000 | 50,000 | +5,000 |
| March | 65,000 | 50,000 | -15,000 |
| April | 70,000 | 50,000 | -20,000 |

January and February have excess capacity.

March and April have capacity shortages.

## Step 2: Evaluate Possible Solutions

The S&OP team may consider producing additional inventory during January and February.

However, the combined excess capacity is only:

\[
10,000+5,000=15,000
\]

Combined shortages:

\[
15,000+20,000=35,000
\]

Remaining shortage:

\[
35,000-15,000=20,000
\]

Therefore, inventory build-ahead alone cannot solve the entire problem.

The company needs additional capacity or another supply solution.

## Step 3: Evaluate Business Implications

| Business area | Potential impact |
|---|---|
| Customer service | Risk of delayed deliveries |
| Inventory | Build-ahead inventory may increase |
| Production | Higher machine loading |
| Labor | Additional shifts or overtime |
| Cost | Higher manufacturing expenses |
| Procurement | Increased material requirements |
| Finance | Potential CAPEX or outsourcing costs |

## Step 4: Make a Recommendation

An S&OP analyst should not simply report:

"March and April have insufficient capacity."

A more useful recommendation would be:

"The current production capacity is insufficient to support the March and April demand forecast. Available capacity can be partially utilized during January and February to build finished goods inventory ahead of peak demand. However, this will only cover part of the projected shortage. Additional production capacity through overtime, alternate production lines, or subcontracting should be evaluated to support the remaining requirements."

Notice the difference?

The first statement identifies a problem.

The second statement provides an analysis and possible business actions.

**That is the difference between reporting capacity data and using capacity data for S&OP decision-making.**

---

# 9. Key Takeaways

Ito ang mga concepts na kailangan mong maintindihan bago tayo mag-proceed sa exercises.

| Concept | What you should remember |
|---|---|
| Capacity Planning | Determines whether production resources can support expected demand |
| Design Capacity | Maximum theoretical production capability |
| Effective Capacity | Realistic capacity after normal operational limitations |
| Actual Output | Quantity actually produced |
| Available Capacity | Production capability available within a period |
| Required Capacity | Capacity needed to complete planned production |
| Capacity Utilization | Percentage of defined capacity being used |
| Capacity Efficiency | Actual output relative to effective capacity |
| Capacity Cushion | Remaining capacity available for flexibility |
| Capacity Gap | Difference between available and required capacity |
| RCCP | High-level evaluation of capacity against the proposed production plan |

### Five things I want you to remember

**1. Demand does not automatically equal production capability.**

Just because customers need 100,000 units does not mean the factory can produce 100,000 units.

**2. Capacity is time-dependent.**

A factory may have sufficient monthly capacity but insufficient capacity in a particular week.

**3. Yield matters.**

Gross production output and good finished goods output are not necessarily equal.

**4. Capacity shortages require decisions.**

Overtime, additional shifts, outsourcing, inventory build-ahead, and capital investment are possible solutions.

**5. Capacity Planning supports feasible S&OP decisions.**

The objective is not simply to maximize machine utilization. It is to balance demand, supply, capacity, inventory, cost, and customer service.

---

# 10. Knowledge Check and Exercises

**Your turn: Apply what you learned.**

Now let's test your understanding. Hindi ko muna ibibigay ang answers. I-evaluate natin pagkatapos mong sumagot.

I arranged these exercises progressively, from basic understanding to S&OP analysis.

## Exercise A: Conceptual Understanding

**Question 1.** What is the main difference between Design Capacity, Effective Capacity, and Actual Output?

**Question 2.** A factory has sufficient machines to produce 100,000 units per month, but it only operates one shift instead of three.

Which capacity-related factor is limiting its production capability?

**Question 3.** What is the difference between Capacity Planning and Production Planning?

**Question 4.** Why is it dangerous for a company to plan production based only on Design Capacity?

## Exercise B: Situational Analysis

**Question 5.**

A factory has the following conditions:

- Available capacity: 20,000 units/month
- Required production: 18,000 units/month
- Unexpected demand increase: 3,000 units

Answer:

1. Is the original production plan feasible?
2. How much excess capacity is available?
3. Can the factory accommodate the additional demand?
4. What would you recommend?

**Question 6.**

A manufacturing company consistently operates at 98% capacity utilization.

What potential operational risks should the S&OP team consider?

## Exercise C: Numerical Calculations

**Question 7. Available Capacity**

A factory operates under these conditions:

| Parameter | Value |
|---|---:|
| Machines | 3 |
| Production rate | 200 units/hour/machine |
| Shifts | 2 |
| Hours per shift | 8 |
| Working days | 5 |
| Downtime | 1 hour/machine/day |
| Yield | 96% |

Calculate:

1. Total scheduled operating hours per machine.
2. Available operating hours per machine.
3. Total available machine-hours.
4. Gross production capacity.
5. Good-output capacity.

**Question 8. Capacity Metrics**

Using your answer from Question 7, assume the required production is 35,000 good units.

Calculate:

1. Capacity utilization.
2. Capacity gap.
3. Capacity cushion.

## Exercise D: Professional S&OP Analysis

**Question 9.**

You are an S&OP analyst. During the monthly planning meeting, you receive this information:

| Month | Demand | Available Capacity |
|---|---:|---:|
| January | 40,000 | 50,000 |
| February | 45,000 | 50,000 |
| March | 65,000 | 50,000 |
| April | 70,000 | 50,000 |

The management team asks you:

1. Which months have capacity shortages?
2. What is the total capacity shortage?
3. Can inventory build-ahead help resolve the problem?
4. What additional information would you request before recommending overtime or additional equipment?
5. What would you present as your recommendation during the S&OP meeting?

---


## Learning Progress Tracker

Use this checklist to track your progress through Topic 4.3:

- [ ] Understand the purpose of Capacity Planning
- [ ] Differentiate Design, Effective, and Actual Capacity
- [ ] Understand capacity load and availability
- [ ] Understand capacity performance metrics
- [ ] Calculate available and required capacity
- [ ] Understand RCCP and its role in S&OP
- [ ] Evaluate capacity shortages and management options

## Instructor's Closing Note

May isang importanteng distinction na gusto kong baunin mo mula sa lesson na ito:

**A production plan tells us what the factory needs to produce. Capacity Planning tells us whether the factory can actually produce it.**

As an S&OP analyst, hindi mo kailangang ikaw mismo ang mag-decide ng machine settings or detailed production sequence. Your responsibility is to understand the capacity data, identify supply constraints, quantify the impact, and provide information that supports management decisions.

Given your manufacturing background, magandang i-connect mo ito sa actual production experience mo: machine running hours, line speed, downtime, yield, and production output. These are all relevant inputs to capacity analysis.

**Our next step:** Sagutan mo muna ang Knowledge Check. I-evaluate ko ang answers mo, itatama natin ang calculations kung may errors, at tutulungan kitang ma-develop ang analytical reasoning expected from an S&OP analyst.

Hindi muna tayo lilipat sa Topic 4.4 until you confirm that you're ready.
