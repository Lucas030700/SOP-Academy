# Module 4 – Supply Planning
## Topic 4.6: Bottleneck Analysis

**Level:** Beginner to Professional | Taglish

**Main Learning Objective:** Matutunan mong tukuyin kung aling production process ang naglilimita sa overall output ng manufacturing operation, paano ito susukatin, at paano magrerecommend ng practical solutions bilang isang S&OP Analyst.

## 1. Topic Overview

### What are we going to learn?

Imagine a manufacturing company with five production stages:

1. Raw Material Preparation
2. Mixing
3. Casting
4. Cutting
5. Final Inspection

Each process has a different production capacity.

For example:

| Production Stage | Daily Capacity |
|---|---:|
| Raw Material Preparation | 1,000 units |
| Mixing | 900 units |
| Casting | 600 units |
| Cutting | 850 units |
| Final Inspection | 950 units |

Kahit kayang gumawa ng 1,000 units ng Raw Material Preparation, 900 units ng Mixing, at 850 units ng Cutting, hindi pa rin makakapag-produce ang buong production line ng 850 or 1,000 units per day.

Bakit?

Because Casting can only process 600 units per day.

**Production flow: Where output gets restricted**

| Production Stage | Capacity |
|---|---:|
| Raw Material Preparation | 1,000 units/day |
| Mixing | 900 units/day |
| **Casting (BOTTLENECK)** | **600 units/day** |
| Cutting | 850 units/day |
| Final Inspection | 950 units/day |

**Maximum theoretical line output: 600 units/day.**

*Illustrative capacities, assuming continuous flow, compatible products, and no additional yield or material constraints.*

This is the central idea of Bottleneck Analysis: **The output of an interconnected production system is restricted by its limiting process.**

### Why is this topic important?

Sa manufacturing, hindi sapat na alam lang natin ang total machine capacity. We must understand whether the entire production system can meet the required demand.

For example:
- Sales forecast: 15,000 units/month.
- Available production days: 25 days.
- Required production rate: 600 units/day.
- Actual bottleneck capacity: 500 units/day.

Kahit may excess capacity ang ibang machines, may production gap pa rin na 100 units/day.

This information helps the company decide whether to:
- Improve existing equipment.
- Reduce downtime.
- Add overtime or another shift.
- Transfer production to another line.
- Invest in additional equipment.
- Reconsider customer delivery commitments.

### Why is this included in Module 4?

Module 4 focuses on understanding the resources and operational capabilities required to meet business demand.

Let's connect our previous topics:

| Previous Topic | Connection to Bottleneck Analysis |
|---|---|
| 4.3 Capacity Planning | Determines how much production capacity is available and required. Bottleneck Analysis identifies which process restricts that capacity. |
| 4.4 Resource Planning | Determines the machines, manpower, materials, and other resources needed. Bottleneck Analysis identifies which resource is limiting production. |
| 4.5 Lead Time Management | Explains how long activities take. Bottlenecks can increase waiting time, queues, and total production lead time. |
| **4.6 Bottleneck Analysis** | Identifies and manages the limiting factors affecting production output. |

The important distinction: Capacity Planning tells us whether capacity is sufficient. Bottleneck Analysis tells us where and why the production system is being restricted.

---

## 2. Layman's Explanation

### 2.1 What is a bottleneck?

Let's use a simple example.

Imagine five people working together to fill bottled water.

- Person A fills 100 bottles/hour.
- Person B seals 100 bottles/hour.
- Person C applies labels to 40 bottles/hour.
- Person D packs 100 bottles/hour.
- Person E inspects 100 bottles/hour.

Person C can only label 40 bottles/hour.

Even if everyone else can process 100 bottles/hour, the group cannot consistently complete more than 40 properly labeled bottles/hour.

That's a bottleneck.

In manufacturing, the same thing happens with machines, work centers, operators, production processes, and even material availability.

**A bottleneck is the process or resource that restricts the maximum achievable output of the overall production system.**

### 2.2 Why does a bottleneck affect the entire production line?

Three things usually happen:

**A. Work starts accumulating before the bottleneck.**

Halimbawa, Casting can only process 500 sheets/day, but Mixing produces 800 sheets/day.

The excess 300 sheets cannot immediately move forward.

They accumulate as Work-in-Process (WIP).

**B. Other processes may experience waiting time.**

Processes after Casting might not receive enough materials to operate continuously.

**C. Customer deliveries may be delayed.**

Kapag hindi makalabas ng sapat na finished goods, the company may fail to meet its delivery commitments.

This is why a bottleneck is not merely a machine-level problem. It can become a company-wide supply problem.

### 2.3 Important distinction: Bottleneck vs. Constraint vs. Capacity Shortage

These terms are related, but they are not exactly the same.

| Term | Simple Explanation |
|---|---|
| Bottleneck | The limiting point in a production flow. |
| Constraint | Anything that limits the system's ability to achieve its objective. |
| Capacity Shortage | A situation where available capacity is insufficient to meet required demand. |

Let's understand the differences.

**Bottleneck**

A particular machine can only produce 500 units/day while the other processes can produce 800 units/day.

**Constraint**

A machine can be a constraint, but constraints can also involve:
- Insufficient manpower.
- Limited raw materials.
- Supplier restrictions.
- Production policies.
- Budget limitations.
- Customer or regulatory requirements.

**Capacity Shortage**

The company requires 700 units/day, but the production system can only supply 500 units/day.

The difference is 200 units/day.

These concepts can overlap, but they are not interchangeable. A constraint does not always create a production bottleneck, and a bottleneck does not automatically mean there is a shortage against demand.

### 2.4 Bottleneck does not always mean a broken or inefficient machine

This is an important concept.

A machine can be operating perfectly, with:
- No abnormal downtime.
- No equipment defects.
- Stable quality.
- High operating efficiency.

Yet it can still be the bottleneck because its designed or available processing capacity is lower than the requirements of the other processes.

For example:

| Machine | Actual Capacity |
|---|---:|
| Machine A | 1,000 units/day |
| Machine B | 1,000 units/day |
| Machine C | 600 units/day |

Machine C might be functioning exactly as intended.

The problem is not necessarily poor performance. Its available capacity is simply insufficient relative to the rest of the system.

**Key lesson:** A bottleneck is identified through its impact on the system, not simply through the condition of the equipment.

---

## 3. Technical Explanation

Now that we understand the basic concept, let's introduce the technical terminology used in manufacturing and supply chain planning.

### 3.1 Bottleneck in Production Systems

In Operations Management, a bottleneck is a resource or process whose available capacity limits the throughput of the overall production system.

There are three important concepts:

| Concept | Technical Meaning |
|---|---|
| Throughput | The rate at which the system produces completed output. |
| Process Capacity | The maximum output a particular process can produce within a given period. |
| System Capacity | The maximum output achievable by the interconnected production system. |

For a simple sequential production line, assuming one unit must pass through every stage and there are no alternative routes:

\[
\text{System Capacity}=\min(C_1,C_2,\ldots,C_n)
\]

Where:
- \(C_1,C_2,\ldots,C_n\) = Capacity of each production process.
- \(n\) = Number of production stages.

The lowest process capacity determines the theoretical maximum system output.

However, actual output can be lower because of downtime, material shortages, quality losses, changeovers, and other operational interruptions.

### 3.2 Types of Bottlenecks

Not all bottlenecks originate from machines.

| Type | Description | Manufacturing Example |
|---|---|---|
| Equipment Bottleneck | Machine capacity is insufficient. | One casting machine cannot meet production requirements. |
| Labor Bottleneck | Insufficient qualified operators. | Only one technician is qualified to operate a specialized machine. |
| Material Bottleneck | Material availability restricts production. | Delayed delivery of BT powder. |
| Process Bottleneck | A specific operation takes longer than others. | Firing requires significantly longer processing time. |
| Quality Bottleneck | Inspection or rework limits the flow. | Excessive NG units require additional inspection. |
| Policy Bottleneck | Internal rules restrict production. | Production is only permitted during one shift. |

A useful distinction: In Theory of Constraints, a constraint is broader than a physical bottleneck. A company can also have a market constraint, such as insufficient customer demand.

### 3.3 Bottleneck, Utilization, and Workload

Three measurements are especially useful.

**1. Utilization**

Measures how much of the available capacity is being used.

\[
\text{Utilization}=
\frac{\text{Actual Output}}{\text{Available Capacity}}\times100
\]

**2. Workload**

Measures how much production work is assigned to a resource relative to its available time or capacity.

For example:

- Required workload: 100 machine-hours.
- Available machine-hours: 80 hours.

\[
\text{Workload Ratio}=\frac{100}{80}\times100=125\%
\]

A workload ratio of 125% means the assigned work requires 25% more capacity than is available.

**3. Throughput**

Measures the actual rate of completed output.

For example, if a production line completes 450 units in 9 operating hours:

\[
\text{Throughput Rate}=\frac{450}{9}=50
\]

The throughput rate is 50 units/hour.

These measurements help distinguish a machine that is heavily loaded from a machine that is genuinely restricting the system.

---

## 4. Detailed Discussion

### 4.1 Identifying Bottlenecks

As an S&OP Analyst, you should not identify bottlenecks based on assumptions alone.

You need operational evidence.

Here are the major indicators.

**A. High Work-in-Process (WIP)**

WIP refers to materials or products that have entered production but have not yet become finished goods.

Example:

| Production Stage | Daily Output |
|---|---:|
| Mixing | 900 |
| Casting | 500 |
| Cutting | 800 |

If Mixing continuously produces 900 units while Casting processes only 500, WIP may accumulate before Casting.

This is a potential bottleneck indicator.

**B. Long Queues**

A queue occurs when products are waiting for the next production process.

For example:
- 200 sheets waiting for Casting.
- 50 sheets waiting for Cutting.
- 20 sheets waiting for Inspection.

A consistently large queue before a particular process can indicate a capacity imbalance.

**C. High Waiting Time**

Suppose:
- Actual processing time: 2 hours.
- Waiting time before processing: 10 hours.

The product spends much more time waiting than being processed.

This suggests that the process may be congested.

**D. Recurring Production Delays**

If production schedules repeatedly fail because one specific machine cannot complete its assigned workload, investigate its available capacity.

**E. High Utilization**

A machine operating at 98% utilization may have little remaining capacity to absorb:
- Additional orders.
- Unexpected downtime.
- Product changeovers.
- Quality-related rework.

However, high utilization alone does not prove that a machine is a bottleneck. You must also consider its impact on downstream throughput and system flow.

### 4.2 Process Cycle Time and Throughput Rate

These two terms are related but different.

**Process Cycle Time**

The time required to complete one unit or one processing cycle.

For example:

A machine processes one sheet every 30 seconds.

Its cycle time is 30 seconds/unit.

**Throughput Rate**

The number of completed units produced per unit of time.

If the machine produces one sheet every 30 seconds:

\[
\text{Throughput Rate}=\frac{3600}{30}
\]

\[
=120\text{ units/hour}
\]

Remember:

- Cycle time is expressed in time per unit.
- Throughput rate is expressed in units per time.

They are reciprocal measurements when production is continuous, stable, and measured on the same basis.

### 4.3 Process Capacity Comparison

Let's examine a production line with four stages.

| Process | Processing Rate |
|---|---:|
| Mixing | 100 units/hour |
| Casting | 60 units/hour |
| Cutting | 85 units/hour |
| Inspection | 90 units/hour |

The Casting process has the lowest processing rate.

Therefore:

\[
\text{Bottleneck Capacity}=60\text{ units/hour}
\]

Assuming sequential processing and compatible units, the maximum theoretical line output is 60 units/hour.

But here's an important analytical question:

What happens if we increase Mixing capacity from 100 to 150 units/hour?

Nothing changes in the theoretical maximum system output.

Casting still limits the line to 60 units/hour.

This is why improving a non-bottleneck process does not necessarily improve overall production output.

### 4.4 Understanding Bottleneck Utilization

Let's assume the following:

- Casting capacity: 600 units/day.
- Required production: 700 units/day.
- Actual output: 600 units/day.

The capacity utilization is:

\[
\frac{600}{600}\times100=100\%
\]

But the demand requirement exceeds available capacity.

\[
\text{Capacity Gap}=700-600
\]

\[
=100\text{ units/day}
\]

Notice the difference:

- Utilization tells us how much available capacity is being consumed.
- Capacity gap tells us how much additional capacity is needed to satisfy demand.

These are different measurements and should not be confused.

### 4.5 Bottleneck Behavior in a Multi-Process Production Line

One of the most important things to understand is that bottlenecks can move.

Consider:

| Process | Initial Capacity | Improved Capacity |
|---|---:|---:|
| Mixing | 1,000 | 1,000 |
| Casting | 500 | 750 |
| Cutting | 800 | 800 |
| Inspection | 900 | 900 |

Initially, Casting is the bottleneck at 500 units/day.

After improving Casting to 750 units/day, Cutting becomes the new bottleneck at 800? Not quite.

Casting at 750 is still lower than Cutting at 800 and Inspection at 900, so Casting remains the bottleneck.

If Casting is further improved to 850 units/day, Cutting becomes the bottleneck at 800 units/day.

**How the bottleneck moves**

- Before improvement: 500 units/day. Casting limits the system.
- After improvement: 750 units/day. Casting still limits the system.
- After further improvement: 800 units/day. Cutting becomes the new bottleneck.

The limiting process changes as capacity is improved. Bottleneck analysis is therefore a continuous activity, not a one-time exercise.

### 4.6 Theory of Constraints (TOC)

Now let's introduce one of the most important methodologies associated with bottleneck management.

The **Theory of Constraints (TOC)** is a management philosophy that focuses on identifying and managing the limiting factor that prevents a system from achieving its objective.

In manufacturing, the objective is commonly associated with generating sustainable throughput while controlling operating expenses and inventory.

Its central principle:

**Improving the constraint improves the performance of the entire system, provided the constraint is genuinely limiting system output.**

#### The Five Focusing Steps

**Step 1: Identify the Constraint**

Find the resource or process limiting the system.

Example: Casting consistently processes fewer sheets than the other production stages.

**Step 2: Exploit the Constraint**

Maximize the output of the existing constraint without immediately investing in additional capacity.

Examples:
- Minimize unnecessary downtime.
- Reduce setup losses.
- Ensure materials are available.
- Prioritize high-value production time.
- Prevent avoidable machine interruptions.

**Step 3: Subordinate Other Processes**

Align other production activities with the constraint's capacity.

Example: Do not produce 1,000 sheets upstream if Casting can only process 600 and there is no reason to build additional WIP.

The goal is to synchronize production flow.

**Step 4: Elevate the Constraint**

If existing improvement opportunities are insufficient, increase the actual capacity of the constraint.

Examples:
- Additional shifts.
- Overtime.
- Equipment upgrades.
- Additional machines.
- Outsourcing or alternative production lines.

**Step 5: Repeat the Process**

Once the constraint is improved, identify the next limiting factor.

Do not allow the previous bottleneck to become the permanent focus if the system constraint has already moved.

#### Understanding Exploit vs. Elevate

These two steps are frequently confused.

| Exploit | Elevate |
|---|---|
| Maximize existing capacity. | Increase available capacity. |
| Usually uses existing resources. | May require additional resources or investment. |
| Reduce downtime and setup time. | Add machines or shifts. |
| Improve scheduling and priorities. | Upgrade equipment or expand facilities. |
| Usually lower investment. | May involve higher investment. |

**Practical example:**

Casting has a capacity of 600 sheets/day.

- Exploit: Reduce cleaning and setup downtime to recover lost operating hours.
- Elevate: Install another casting machine to increase total capacity.

TOC recommends exhausting sensible opportunities to exploit the constraint before committing to expensive capacity expansion.

However, if the constraint cannot meet business requirements even after exploitation, elevation may be necessary.

### 4.7 Bottleneck Management Strategies

Let's examine the practical methods companies use to improve bottleneck performance.

| Strategy | How It Helps | Limitation / Trade-off |
|---|---|---|
| Reduce downtime | Recovers lost operating hours. | Requires reliable maintenance and downtime analysis. |
| Reduce setup time | Increases productive operating time. | May require process redesign or SMED initiatives. |
| Improve machine availability | Reduces unexpected interruptions. | Maintenance resources and spare parts may be needed. |
| Prioritize bottleneck workload | Protects capacity for critical orders. | Requires clear scheduling and prioritization rules. |
| Shift production to alternatives | Distributes workload. | Alternative machines may have different capabilities or quality risks. |
| Overtime | Adds available operating hours. | Higher labor cost and possible fatigue. |
| Additional shifts | Increases scheduled production time. | Requires manpower, supervision, and support resources. |
| Equipment investment | Permanently increases capacity. | Capital expenditure, installation, qualification, and ramp-up time. |

#### A. Reducing Downtime

Suppose a machine is scheduled for 16 hours/day.

However:
- Breakdown: 1 hour.
- Cleaning: 1 hour.
- Setup: 2 hours.

Actual productive time:

\[
16-1-1-2=12\text{ hours}
\]

If the company reduces setup time by one hour, productive time increases to 13 hours.

This creates additional production opportunity without purchasing another machine.

#### B. Prioritizing Bottleneck Workloads

Not all orders should automatically receive equal priority at a constrained resource.

For example:

| Order | Required Quantity | Customer Priority |
|---|---:|---|
| Order A | 2,000 | High |
| Order B | 3,000 | Medium |
| Order C | 1,000 | Critical |

The company may prioritize Order C because of its critical delivery commitment.

However, scheduling should also consider:
- Due dates.
- Processing compatibility.
- Changeover requirements.
- Customer importance.
- Profitability and contractual obligations.

The objective is to maximize business value while protecting customer commitments, not simply to run whichever order has the largest quantity.

#### C. Shifting Work to Alternative Machines

Suppose:
- Machine A: 500 units/day.
- Machine B: 300 units/day.

If both machines can process the same product with acceptable quality and specifications, workload can potentially be distributed between them.

But always check:
- Equipment capability.
- Process specifications.
- Product compatibility.
- Qualification requirements.
- Available labor.
- Material availability.

Do not assume that two machines are interchangeable just because they perform similar operations.

---

## 5. Practical Examples and Applications

Let's now use a manufacturing scenario closer to your technical background.

### 5.1 Manufacturing Scenario: MLCC Production

Imagine an MLCC manufacturing facility producing ceramic sheets through several interconnected processes.

For simplicity, assume the following production stages:

1. Slurry Preparation
2. Casting
3. Cutting
4. Firing
5. Electrical Inspection

The following data are illustrative, not actual Samsung or Emerson operating standards.

| Process | Available Capacity |
|---|---:|
| Slurry Preparation | 1,000 sheets/day |
| Casting | 700 sheets/day |
| Cutting | 850 sheets/day |
| Firing | 600 sheets/day |
| Electrical Inspection | 900 sheets/day |

**Question 1: Which process is the bottleneck?**

Firing, because it has the lowest available capacity at 600 sheets/day.

**Question 2: What is the maximum theoretical production output?**

\[
\text{System Capacity}=\min(1000,700,850,600,900)
\]

\[
=\boxed{600\text{ sheets/day}}
\]

**Question 3: What happens if Slurry Preparation increases its output to 1,200 sheets/day?**

The system output remains 600 sheets/day because Firing is still the bottleneck.

This illustrates an important business lesson:

Increasing production capacity in an unconstrained process may increase WIP without improving finished-goods output.

### 5.2 Evaluating a Bottleneck Improvement

Suppose the company investigates the Firing process.

Current condition:

| Parameter | Value |
|---|---:|
| Scheduled operating time | 16 hours/day |
| Actual productive time | 12 hours/day |
| Processing rate | 50 sheets/hour |
| Current output | 600 sheets/day |

The company identifies four hours of lost operating time.

Potential improvement:

Reduce downtime and setup losses by two hours.

New productive time:

\[
16-2=14\text{ hours/day}
\]

New Firing capacity:

\[
14\times50=700\text{ sheets/day}
\]

The new process capacities are:

| Process | Capacity After Improvement |
|---|---:|
| Slurry Preparation | 1,000 |
| Casting | 700 |
| Cutting | 850 |
| Firing | 700 |
| Electrical Inspection | 900 |

New theoretical system capacity:

\[
\min(1000,700,850,700,900)
\]

\[
=\boxed{700\text{ sheets/day}}
\]

**Production capacity improvement**

- Before: 600 sheets/day.
- After: 700 sheets/day.
- Additional capacity: +100 sheets/day.
- System improvement: 16.67%.

Assumes the improved Firing capacity can be sustained and no additional constraint reduces actual finished output.

Notice what happened: The company increased its overall system capacity without purchasing another machine.

But this is not necessarily the end of the analysis.

If Casting and Firing both have 700 sheets/day capacity, either could become the effective constraint depending on actual downtime, yield, product mix, and scheduling.

### 5.3 What if demand is higher than the improved capacity?

Suppose the monthly demand requirement is 18,000 sheets.

Available production days: 25 days.

Required daily output:

\[
\frac{18,000}{25}=720\text{ sheets/day}
\]

After the improvement, system capacity is 700 sheets/day.

Daily capacity gap:

\[
720-700=20\text{ sheets/day}
\]

Monthly capacity gap:

\[
20\times25=500\text{ sheets}
\]

The company still cannot meet the complete demand requirement using the current capacity assumptions.

This is where bottleneck analysis becomes valuable for S&OP.

The analyst can quantify the gap and present alternatives:

- Further improve Firing.
- Improve Casting.
- Add overtime.
- Evaluate another qualified production line.
- Review demand priorities and delivery commitments.

The important point is that S&OP should not merely report that production capacity is insufficient. It should identify the constraint, quantify the shortage, and present possible business responses.

---

## 6. Formulas and Calculations

This section is especially important because bottleneck analysis requires translating operational data into measurable capacity.

Let's establish the formulas one by one.

### 6.1 Process Capacity

Determines how many units a process can theoretically produce within a specified period.

\[
\boxed{C=\frac{T}{CT}}
\]

Where:

- \(C\) = Process capacity (units).
- \(T\) = Available productive time (minutes or hours).
- \(CT\) = Cycle time (time/unit).

**Example:**

A machine has:
- Available productive time = 12 hours/day.
- Cycle time = 0.02 hours/sheet.

Step 1: Identify available time.

\[
T=12\text{ hours/day}
\]

Step 2: Divide by cycle time.

\[
C=\frac{12}{0.02}
\]

\[
\boxed{C=600\text{ sheets/day}}
\]

Interpretation: The machine can theoretically process 600 sheets/day.

Important: Use actual productive time, not automatically the total scheduled time.

### 6.2 Throughput Rate

Measures the actual production output over a specified period.

\[
\boxed{TR=\frac{Q}{T}}
\]

Where:

- \(TR\) = Throughput rate (units/hour).
- \(Q\) = Actual completed output (units).
- \(T\) = Actual operating time (hours).

**Example:**

A machine produces 540 sheets in 12 operating hours.

\[
TR=\frac{540}{12}
\]

\[
\boxed{TR=45\text{ sheets/hour}}
\]

Interpretation: The actual production rate is 45 sheets/hour.

Note the difference between theoretical processing capacity and actual throughput. Actual throughput may be lower because of interruptions, quality losses, or other factors.

### 6.3 Cycle Time

Measures the average time required to produce one unit.

\[
\boxed{CT=\frac{T}{Q}}
\]

Where:

- \(CT\) = Cycle time (minutes/unit or hours/unit).
- \(T\) = Total measured production time.
- \(Q\) = Number of completed units.

**Example:**

A machine produces 600 sheets in 12 hours.

Convert hours into minutes:

\[
12\times60=720\text{ minutes}
\]

Calculate:

\[
CT=\frac{720}{600}
\]

\[
\boxed{CT=1.2\text{ minutes/sheet}}
\]

Interpretation: On average, one completed sheet is produced every 1.2 minutes.

### 6.4 Bottleneck Capacity

For a simple sequential production line:

\[
\boxed{C_B=\min(C_1,C_2,\ldots,C_n)}
\]

Where:

- \(C_B\) = Bottleneck capacity.
- \(C_1,C_2,\ldots,C_n\) = Individual process capacities.

**Example:**

| Process | Capacity |
|---|---:|
| A | 1,000 units/day |
| B | 800 units/day |
| C | 550 units/day |
| D | 900 units/day |

\[
C_B=\min(1000,800,550,900)
\]

\[
\boxed{C_B=550\text{ units/day}}
\]

Process C is the bottleneck.

### 6.5 Production Line Capacity

For a simple sequential line without alternative routes, the theoretical maximum line capacity is equal to the bottleneck capacity.

\[
\boxed{C_L=\min(C_1,C_2,\ldots,C_n)}
\]

However, be careful when dealing with:
- Parallel machines.
- Different product routes.
- Different production yields.
- Batch processes.
- Shared equipment.
- Different units of measurement.

For example, if two compatible machines operate in parallel:

\[
C_{\text{parallel}}=C_A+C_B
\]

If Machine A processes 400 units/day and Machine B processes 300 units/day:

\[
C_{\text{parallel}}=400+300=700
\]

Their combined capacity is 700 units/day, assuming both can process the required workload without additional shared-resource restrictions.

### 6.6 Capacity Utilization

Measures the percentage of available capacity being used.

\[
\boxed{CU=\frac{Q_A}{C_A}\times100}
\]

Where:

- \(CU\) = Capacity utilization (%).
- \(Q_A\) = Actual output (units).
- \(C_A\) = Available capacity (units).

**Example:**

- Available capacity = 800 units/day.
- Actual output = 680 units/day.

\[
CU=\frac{680}{800}\times100
\]

\[
\boxed{CU=85\%}
\]

Interpretation: The process is using 85% of its available capacity.

### 6.7 Output Improvement After Bottleneck Reduction

Measures how much production output improves after a bottleneck is addressed.

\[
\boxed{\%\text{ Improvement}=
\frac{Q_{\text{New}}-Q_{\text{Old}}}{Q_{\text{Old}}}\times100}
\]

Where:

- \(Q_{\text{New}}\) = New system output.
- \(Q_{\text{Old}}\) = Previous system output.

**Example:**

Previous output = 600 sheets/day.

New output = 700 sheets/day.

\[
\%\text{ Improvement}=
\frac{700-600}{600}\times100
\]

\[
\boxed{16.67\%}
\]

Interpretation: The production system improved its output capacity by 16.67%.

### 6.8 Additional Useful Formula: Capacity Gap

This is especially useful for S&OP.

\[
\boxed{\text{Capacity Gap}=D-C}
\]

Where:

- \(D\) = Required production quantity.
- \(C\) = Available production capacity.

Example:

Required production = 900 units/day.

Available capacity = 750 units/day.

\[
900-750=150
\]

The company has a capacity shortage of 150 units/day.

If the result is negative, available capacity exceeds the required production quantity.

### 6.9 Formula Reference Table

| Measurement | Formula | Unit |
|---|---|---|
| Process Capacity | \(T/CT\) | Units/time period |
| Throughput Rate | \(Q/T\) | Units/hour |
| Cycle Time | \(T/Q\) | Time/unit |
| Bottleneck Capacity | \(\min(C_1,\ldots,C_n)\) | Units/time period |
| Line Capacity | Lowest effective stage capacity | Units/time period |
| Capacity Utilization | \(Q_A/C_A \times 100\) | % |
| Output Improvement | \((Q_N-Q_O)/Q_O \times 100\) | % |
| Capacity Gap | \(D-C\) | Units/time period |

### 6.10 Common Calculation Errors

These are important to remember when working with actual manufacturing data.

| Common Error | Why It Is Wrong |
|---|---|
| Using scheduled time instead of productive time | Overestimates actual available capacity. |
| Mixing minutes and hours | Produces incorrect capacity calculations. |
| Using input quantity instead of completed output | Can overestimate throughput. |
| Ignoring downtime | Underestimates capacity losses. |
| Ignoring yield and rejects | Overestimates good output. |
| Assuming every process has identical units | Makes capacity comparisons invalid. |
| Improving a non-bottleneck process and claiming system improvement | Confuses local efficiency with total system output. |
| Assuming the bottleneck never changes | Ignores the effect of capacity improvements. |

**An additional professional consideration:**

If a machine processes 1,000 sheets but only 950 pass quality inspection, distinguish between gross production capacity and good-output capacity.

\[
\text{Good Output}=\text{Gross Output}\times\text{Yield}
\]

\[
=1000\times0.95=950
\]

For S&OP, good-output capacity is often more useful than gross processing capacity because customers require conforming products, not simply processed units.

---

## 7. Practical Manufacturing Application: Complete Bottleneck Analysis

Let's combine the concepts into one complete business case.

### 7.1 Business Situation

A manufacturing facility produces MLCC ceramic sheets.

Management is planning to increase monthly production to satisfy growing customer demand.

The production line has five processes:

| Process | Operating Time | Processing Rate |
|---|---:|---:|
| Slurry Preparation | 16 hrs/day | 70 sheets/hr |
| Casting | 14 hrs/day | 50 sheets/hr |
| Cutting | 15 hrs/day | 55 sheets/hr |
| Firing | 16 hrs/day | 40 sheets/hr |
| Inspection | 14 hrs/day | 60 sheets/hr |

Assume these processing rates are sustainable rates during productive operating time.

### 7.2 Calculate Each Process Capacity

Formula:

\[
C=T\times R
\]

Where:

- \(C\) = Process capacity (sheets/day).
- \(T\) = Productive operating time (hours/day).
- \(R\) = Processing rate (sheets/hour).

Calculations:

| Process | Calculation | Capacity |
|---|---|---:|
| Slurry Preparation | 16 × 70 | 1,120 |
| Casting | 14 × 50 | 700 |
| Cutting | 15 × 55 | 825 |
| Firing | 16 × 40 | 640 |
| Inspection | 14 × 60 | 840 |

### 7.3 Identify the Bottleneck

\[
C_B=\min(1120,700,825,640,840)
\]

\[
\boxed{C_B=640\text{ sheets/day}}
\]

**Identified constraint:** Firing is the bottleneck.

Why?

It has the lowest effective daily processing capacity.

### 7.4 Determine the Required Capacity

Assume:

- Monthly demand = 18,000 sheets.
- Available production days = 25 days.

\[
D=\frac{18000}{25}
\]

\[
D=720\text{ sheets/day}
\]

Capacity gap:

\[
720-640=80\text{ sheets/day}
\]

Monthly shortage:

\[
80\times25=2000\text{ sheets/month}
\]

The company is short by 2,000 sheets/month based on the assumed production requirements and capacity.

### 7.5 Evaluate Improvement Alternatives

Management is considering three possible actions.

**Alternative A: Reduce Firing downtime**

Current Firing capacity:

\[
16\times40=640
\]

If productive time increases from 16 to 18 hours/day through additional scheduled operating time:

\[
18\times40=720
\]

New Firing capacity is 720 sheets/day.

However, Casting can only process 700 sheets/day.

Therefore:

\[
C_L=\min(1120,700,825,720,840)
\]

\[
\boxed{C_L=700}
\]

The system can only reach 700 sheets/day.

This is an important point: Increasing Firing capacity to 720 does not mean the entire system can produce 720 sheets/day.

Casting now becomes the bottleneck.

**Alternative B: Improve Casting and Firing**

Suppose management increases:
- Casting capacity from 700 to 750 sheets/day.
- Firing capacity from 640 to 750 sheets/day.

New system capacity:

\[
\min(1120,750,825,750,840)
\]

\[
\boxed{750\text{ sheets/day}}
\]

The company now has sufficient theoretical capacity to meet the 720 sheets/day requirement.

Capacity buffer:

\[
750-720=30\text{ sheets/day}
\]

**Alternative C: Purchase Additional Firing Equipment**

Suppose a new qualified Firing machine adds 300 sheets/day of parallel capacity.

Combined Firing capacity:

\[
640+300=940\text{ sheets/day}
\]

However, Casting remains at 700 sheets/day.

New system capacity:

\[
\min(1120,700,825,940,840)
\]

\[
\boxed{700\text{ sheets/day}}
\]

The new equipment does not allow the line to reach the 720-sheet daily target because Casting is now the constraint.

This is a valuable investment lesson: Purchasing additional equipment for the current bottleneck may simply move the bottleneck somewhere else.

### 7.6 Compare the Alternatives

| Alternative | System Capacity | Meets 720/day? |
|---|---:|---|
| Current condition | 640 | No |
| A: Improve Firing only | 700 | No |
| B: Improve Casting and Firing | 750 | Yes |
| C: Add Firing equipment | 700 | No |

Alternative B meets the requirement based on the assumptions.

But that does not automatically mean it is the best business decision.

Management must also consider:
- Implementation cost.
- Time required to implement.
- Additional labor requirements.
- Maintenance expenses.
- Product quality.
- Equipment qualification.
- Reliability of the improvement.
- Whether the additional capacity will actually be needed in future periods.

This is where operational analysis becomes business decision-making.

---

## 8. Bottleneck Analysis in S&OP

Now let's connect everything to your actual responsibility as an S&OP professional.

Remember that S&OP aligns demand, supply, inventory, and business objectives.

Bottleneck Analysis helps the Supply Planning team understand whether available production resources can support the demand plan.

### 8.1 How Bottleneck Information Supports Supply Planning

Consider this situation:

| Item | Monthly Quantity |
|---|---:|
| Demand Forecast | 18,000 |
| Available Capacity | 16,000 |
| Capacity Gap | 2,000 |

A basic report tells management that there is a 2,000-unit shortage.

But a good S&OP analysis goes further.

It identifies:
1. Which process is limiting production?
2. What is the available capacity of that process?
3. What is causing the capacity restriction?
4. Can the restriction be reduced?
5. What alternatives are available?
6. What are the operational and financial consequences?

This transforms a simple capacity report into actionable business intelligence.

### 8.2 Bottleneck Analysis During Supply Review

During Supply Review, the team evaluates whether the supply plan can support the demand plan.

Typical bottleneck information includes:

| Information | Why It Matters |
|---|---|
| Required production quantity | Determines the workload. |
| Available capacity per process | Identifies resource limitations. |
| Bottleneck process | Identifies the limiting operation. |
| Capacity utilization | Measures resource loading. |
| Capacity gap | Quantifies the shortage. |
| Expected recovery date | Helps determine when capacity may improve. |
| Improvement alternatives | Supports supply decisions. |
| Implementation cost | Supports financial evaluation. |

The Supply Planning team may recommend:
- Overtime.
- Additional shifts.
- Production transfer.
- Capacity improvement.
- Alternative sourcing.
- Revised production schedules.

### 8.3 Bottleneck Analysis During Pre-S&OP

Pre-S&OP is where cross-functional teams review major demand and supply imbalances and develop recommendations before executive decision-making.

Imagine:

- Sales proposes an increase in monthly demand.
- Production identifies Firing as the capacity constraint.
- Procurement confirms that additional materials are available.
- Finance evaluates the cost of overtime and equipment investment.

The team must agree on a realistic supply response.

The important point is that the demand forecast should not automatically become the production commitment.

Demand must be evaluated against actual operational capabilities.

### 8.4 How Bottlenecks Affect Other Business Areas

| Business Area | Potential Impact |
|---|---|
| Demand | May require prioritization of customer orders. |
| Production | Limits achievable production output. |
| Inventory | Can create WIP accumulation before the bottleneck and shortages of finished goods. |
| Lead Time | Can increase waiting time and overall production lead time. |
| Customer Service | Can cause delayed or incomplete deliveries. |
| Costs | May increase overtime, maintenance, and production expenses. |
| Finance | May require additional operating or capital expenditure. |
| Procurement | May require adjustments in material purchasing and delivery schedules. |

### 8.5 How to Communicate Bottlenecks as an S&OP Analyst

This is a particularly important professional skill.

Avoid reporting only:

"Firing capacity is insufficient."

Instead, structure your analysis like this:

| Reporting Element | Example |
|---|---|
| Identified constraint | Firing |
| Current capacity | 640 sheets/day |
| Required output | 720 sheets/day |
| Capacity gap | 80 sheets/day |
| Monthly impact | 2,000 sheets |
| Root cause | Illustrative assumption: operating-time losses |
| Proposed action | Recover productive time and improve Casting capacity |
| Expected result | 750 sheets/day |
| Business impact | Ability to support forecasted demand, subject to execution and quality assumptions |

A professional S&OP analyst should be able to explain not only what the shortage is, but also why it exists, how significant it is, and what management can do about it.

**Remember this distinction:**

- Production Engineering identifies and improves technical process constraints.
- Production Planning evaluates achievable production schedules.
- Supply Planning evaluates whether supply can meet demand.
- S&OP integrates the operational implications with customer, financial, and business decisions.

These functions collaborate. Bottleneck analysis provides a common factual foundation.

---

## 9. Key Takeaways

Before moving to the exercises, let's consolidate the most important concepts.

### 9.1 Concepts You Must Understand

| Concept | What You Should Remember |
|---|---|
| Bottleneck | The process that limits overall production output. |
| Constraint | Any factor restricting the system from achieving its objective. |
| Capacity Shortage | Available capacity is insufficient to satisfy required demand. |
| Throughput | Actual completed output per unit of time. |
| Cycle Time | Time required to produce one unit. |
| WIP | Products that are still undergoing production. |
| Utilization | Percentage of available capacity being consumed. |
| TOC | Methodology focused on identifying and managing constraints. |
| Exploit | Maximize existing constraint capacity. |
| Subordinate | Align other processes with the constraint. |
| Elevate | Increase the constraint's capacity. |

### 9.2 Five Important Principles

1. **The lowest effective capacity limits a simple sequential production line.** More capacity in other processes does not automatically increase total output.

2. **High utilization does not automatically mean poor performance.** A machine operating at high utilization may simply be the system's limiting resource.

3. **WIP accumulation can indicate a bottleneck.** Look for recurring queues and waiting time, not just machine output.

4. **Improving the bottleneck can improve total system throughput.** Improving an unconstrained process may only increase WIP.

5. **Bottlenecks can move.** Once one constraint is improved, another process may become the new limiting factor.

### 9.3 What You Should Be Able to Do as an S&OP Analyst

By the end of this topic, you should be able to:

- Identify potential bottlenecks using production data.
- Compare process capacities.
- Calculate throughput, cycle time, and utilization.
- Quantify production capacity gaps.
- Understand the Five Focusing Steps of TOC.
- Evaluate alternative capacity improvement actions.
- Explain the effect of bottlenecks on supply plans.
- Communicate operational constraints during Supply Review and Pre-S&OP.

---

# 10. Knowledge Check and Exercises

**Your turn: Apply what you've learned.**

We'll evaluate your understanding progressively through three learning levels.

**Important:** Hindi ko muna ibibigay ang answers. Sagutan mo muna, then I'll check your calculations, reasoning, and business recommendations.

## Level 1 – Understanding

**Question 1.** A manufacturing line has the following daily capacities:

| Process | Capacity |
|---|---:|
| Mixing | 1,000 |
| Casting | 700 |
| Cutting | 900 |
| Inspection | 850 |

Which process is the bottleneck, and what is the maximum theoretical output of the production line?

**Question 2.** Explain the difference between a bottleneck, a constraint, and a capacity shortage. Give one manufacturing example for each.

**Question 3.** A machine is operating at 95% utilization, but it has no abnormal downtime and produces according to its specifications.

Does this automatically mean that the machine is inefficient? Explain your answer.

**Question 4.** Why can increasing the capacity of a non-bottleneck machine fail to increase total production output?

## Level 2 – Technical Application

**Question 5. Process Capacity**

A casting machine has:
- Available productive time: 14 hours/day.
- Cycle time: 1.5 minutes/sheet.

Calculate its theoretical daily capacity.

**Question 6. Throughput and Cycle Time**

A machine completes 720 sheets in 12 operating hours.

Calculate:

a. Throughput rate in sheets/hour.

b. Average cycle time in minutes/sheet.

**Question 7. Capacity Utilization**

A production process has an available capacity of 1,000 units/day. Actual output is 850 units/day.

Calculate its capacity utilization.

**Question 8. Bottleneck Identification**

A production line has the following capacities:

| Process | Capacity |
|---|---:|
| A | 1,200 units/day |
| B | 900 units/day |
| C | 650 units/day |
| D | 800 units/day |
| E | 1,000 units/day |

Answer:

a. Identify the bottleneck.

b. Determine the maximum theoretical production output.

c. If Process C improves to 850 units/day, which process becomes the new bottleneck?

## Level 3 – Professional Analysis

**Question 9. Manufacturing Situation**

An MLCC production line has the following characteristics:

| Process | Capacity |
|---|---:|
| Slurry Preparation | 1,000 sheets/day |
| Casting | 750 sheets/day |
| Cutting | 850 sheets/day |
| Firing | 600 sheets/day |
| Inspection | 900 sheets/day |

Monthly demand is 17,500 sheets, with 25 available production days.

Management wants to know whether the production line can support the demand.

Answer:

a. Identify the bottleneck.

b. Calculate the maximum daily output.

c. Calculate the required daily production rate.

d. Determine the daily and monthly capacity gap.

e. Recommend at least two possible improvement actions.

f. Explain the potential consequences of increasing Slurry Preparation capacity without improving the bottleneck.

**Question 10. S&OP Business Decision**

Management proposes purchasing an additional Firing machine to address the production shortage.

However, the equipment requires substantial capital investment.

As an S&OP Analyst:

- What information would you request before recommending the investment?
- What alternative actions would you evaluate?
- How would you communicate the capacity constraint during Pre-S&OP?
- How would you determine whether the investment is justified?

## How we'll evaluate your answers

| Assessment Area | What I'll Evaluate |
|---|---|
| Conceptual Understanding | Whether you understand the underlying principles. |
| Technical Accuracy | Correct formulas, calculations, and units. |
| Operational Reasoning | Whether your interpretation makes sense in manufacturing. |
| Business Analysis | Whether your recommendations consider costs, capacity, and customer demand. |

We'll also identify which areas need reinforcement before progressing to more advanced applications.

**Suggested approach:** Sagutan muna ang Questions 1–4. Once we establish your conceptual understanding, proceed tayo sa calculations (5–8), then the professional case studies (9–10).

Hindi natin kailangang madaliin. The goal is not just to memorize bottleneck formulas, but to develop the ability to look at production data and explain what is actually restricting business performance.

**End of Module 4 – Topic 4.6: Bottleneck Analysis.**

I'll wait for your answers before evaluating them. Hindi pa tayo lilipat sa Topic 4.7: Supply Planning Strategies until you confirm.
