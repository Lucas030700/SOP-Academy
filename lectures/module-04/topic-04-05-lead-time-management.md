# Module 4 – Supply Planning
## Topic 4.5: Lead Time Management

**Level:** Beginner to Professional | Taglish

**Main learning objective:** Understand how companies measure, manage, and use lead times to determine when materials should arrive, when production should start, and when finished products can be delivered to customers.

Sa topic na ito, pag-aaralan natin ang isang importanteng tanong sa supply chain:

**"Kung kailangan ng customer ang product sa isang specific date, kailan dapat magsimula ang bawat activity para ma-deliver natin ito on time?"**

Hindi sapat na alam lang natin kung gaano katagal gumawa ng isang product. Kailangan din nating malaman kung gaano katagal bago dumating ang raw materials, gaano katagal ang waiting time bago makapasok sa production, gaano katagal ang inspection, at gaano katagal bago makarating ang finished goods sa customer.

Iyan ang purpose ng Lead Time Management.

---

# 1. Topic Overview

### 1.1 What is Lead Time Management?

Sa simplest explanation, ang **Lead Time** ay ang kabuuang oras na kailangan mula sa pagsisimula ng isang activity hanggang sa matapos ang expected output nito.

For example:

Nag-order ang isang manufacturing company ng raw materials sa supplier noong November 1.

- November 1: Purchase order submitted.
- November 3: Supplier confirms the order.
- November 8: Materials dispatched.
- November 12: Materials arrive at the factory.
- November 13: Materials pass receiving inspection.

Kung November 1 ang starting point at November 13 ang completion point, ang procurement lead time ay 12 calendar days, assuming na kasama sa measurement ang final receiving approval.

Ang **Lead Time Management** naman ay ang process of measuring, monitoring, analyzing, and improving these time requirements para masigurong realistic ang production and delivery plans.

### 1.2 Why is it important?

Imagine na may customer order ang company na kailangang ma-deliver within 30 days.

Pero:

- Raw material procurement: 15 days
- Production: 10 days
- Quality inspection: 3 days
- Shipment: 5 days

Total: 33 days.

May problema agad. Kahit efficient ang production department, hindi pa rin kayang matugunan ang customer commitment dahil mas mahaba ang total lead time kaysa sa available time.

Ito ang dahilan kung bakit importanteng maintindihan ang lead time bago gumawa ng supply plan.

### 1.3 Connection to Module 4

| Previous / Current Topic | Relationship to Lead Time |
|---|---|
| 4.3 Capacity Planning | Determines whether sufficient capacity is available within the required time. |
| 4.4 Resource Planning | Determines when manpower, machines, materials, and other resources must be available. |
| 4.5 Lead Time Management | Determines how much time is needed across the supply chain to execute the plan. |
| 4.6 Bottleneck Analysis | Identifies processes or resources that restrict flow and increase overall completion time. |

**Important connection:** Resource Planning answers, "What resources do we need?" Lead Time Management answers, "When do we need them, and how long will the activities take?"

Meanwhile, Bottleneck Analysis will help explain why certain activities take longer than expected.

---

# 2. Layman's Explanation

### 2.1 Understanding Lead Time Through a Simple Example

Imagine na bibili ka ng customized office desk.

Hindi ito available as finished inventory. Kailangan itong gawin after placing an order.

Ganito ang process:

| Activity | Time Required |
|---|---:|
| Order confirmation | 1 day |
| Wood procurement | 5 days |
| Waiting for production schedule | 2 days |
| Desk manufacturing | 3 days |
| Quality inspection | 1 day |
| Delivery | 2 days |
| **Total** | **14 days** |

Meaning, kahit 3 days lang ang actual manufacturing, 14 days ang total time bago mo matanggap ang desk.

Bakit?

Dahil hindi lang manufacturing ang bumubuo sa lead time. Kasama rin ang ordering, waiting, material availability, inspection, at delivery.

Ito ang isang importanteng realization:

**A product's lead time is not necessarily equal to its production time.**

Puwedeng mabilis gumawa ang isang factory, pero mabagal pa rin ang overall delivery dahil sa supplier delays, production queues, inspection, or transportation.

### 2.2 The Restaurant Analogy

Imagine na umorder ka sa restaurant.

- 2 minutes: Waiter takes your order.
- 5 minutes: Your order waits in the kitchen queue.
- 10 minutes: Chef prepares the food.
- 3 minutes: Food is plated and checked.
- 2 minutes: Waiter brings it to your table.

Total lead time: 22 minutes.

Pero 10 minutes lang ang actual food preparation.

The other 12 minutes are spent on order processing, waiting, and delivery.

Ganoon din sa manufacturing. Hindi lahat ng oras ay ginagamit sa actual production.

---

# 3. Technical Explanation

### 3.1 Formal Definition

In supply chain management, **Lead Time** refers to the elapsed time between a defined starting event and a defined completion event within a process or supply chain activity.

Importanteng tandaan ang phrase na *defined starting event and completion event*.

Bakit?

Dahil hindi pare-pareho ang measurement boundaries ng lahat ng companies.

For example:

- Procurement lead time may start from purchase requisition approval.
- Another company may start measuring from purchase order submission.
- Manufacturing lead time may start when materials are released to production.
- Another company may start when the production order is created.

Both can be valid, provided clearly defined ang measurement.

### 3.2 Lead Time vs. Cycle Time vs. Processing Time vs. Waiting Time

Ito ang isa sa pinakamahalagang distinctions sa topic.

| Term | Meaning | Example |
|---|---|---|
| Lead Time | Total elapsed time from defined start to completion | 14 days from order to delivery |
| Cycle Time | Time between completed units or successive outputs in a process | One unit completed every 5 minutes |
| Processing Time | Time actively spent performing an operation | 20 minutes machining a component |
| Waiting Time | Time spent waiting without active processing | 2 days waiting for machine availability |

Let's make the distinction clearer.

Suppose a production order enters a factory on Monday and finishes on Friday.

- Total lead time: 5 calendar days.
- Active processing time: 8 hours.
- Waiting time: 3 days.
- Inspection and handling: 1 day, depending on the defined boundaries.

Hindi ibig sabihin na 5 days nagtatrabaho ang machine.

The product spent 5 days moving through the process, but only a portion of that time involved actual work.

**Professional insight:** In many manufacturing environments, waiting and queue time can account for a significant portion of total lead time. Therefore, reducing processing time alone does not necessarily reduce overall lead time.

### 3.3 Why the Distinction Matters

Suppose dalawang production lines ang gumagawa ng identical products.

| Metric | Line A | Line B |
|---|---:|---:|
| Processing Time | 4 hours | 3 hours |
| Waiting Time | 20 hours | 5 hours |
| Total Elapsed Time | 24 hours | 8 hours |

Line B is clearly faster overall.

Pero notice na 1 hour lang ang difference sa processing time, while 15 hours ang difference sa waiting time.

Kung processing time lang ang imo-monitor ng management, baka hindi nila makita ang tunay na opportunity for improvement.

Ito ang reason why S&OP analysts should understand the entire flow, not just machine operating time.

---

# 4. Types of Lead Time

Hindi iisa ang lead time sa isang supply chain. May iba't ibang types depende sa activity na sinusukat natin.

## 4.1 Procurement Lead Time

**Procurement Lead Time** is the time required to obtain materials, components, or services from a supplier.

Usually, nagsisimula ito sa purchase order (PO) placement at nagtatapos kapag available na ang materials for use.

Example:

| Procurement Activity | Duration |
|---|---:|
| Purchase requisition approval | 1 day |
| Purchase order processing | 1 day |
| Supplier order confirmation | 1 day |
| Supplier material preparation | 4 days |
| Transportation | 3 days |
| Receiving inspection | 1 day |
| **Total** | **11 days** |

Why is this important?

Kapag 11 days ang procurement lead time, hindi puwedeng maghintay ang purchasing team hanggang kailangan na ng production ang material bago mag-order.

Kailangan nilang mag-order ahead of time.

**S&OP application:** Ginagamit ito para malaman kung kailan kailangang mag-release ng purchase orders based on the production requirements.

## 4.2 Manufacturing / Production Lead Time

**Manufacturing Lead Time** is the elapsed time required to convert raw materials into finished goods.

It may include:

- Material preparation
- Production queue
- Machine setup
- Actual processing
- Movement between workstations
- Inspection
- Rework, if applicable

Example:

| Manufacturing Activity | Duration |
|---|---:|
| Production queue | 1 day |
| Machine setup | 2 hours |
| Processing | 8 hours |
| Transfer between processes | 4 hours |
| Quality inspection | 4 hours |
| **Total** | **2.5 days** |

Assumption: 1 working day = 8 hours, and the activities are sequential.

Notice na 8 hours lang ang actual processing, pero 2.5 working days ang total manufacturing lead time.

**S&OP application:** Ginagamit ito para matukoy kung kailan dapat simulan ang production para makumpleto ang required quantity before the customer delivery date.

## 4.3 Order Processing Lead Time

**Order Processing Lead Time** is the time required to receive, validate, approve, and prepare a customer order for fulfillment.

Example:

1. Customer submits purchase order.
2. Sales validates the order.
3. Finance checks payment or credit status.
4. Order is entered into the ERP system.
5. Production or warehouse receives the order requirement.

Suppose these activities take 1.5 working days.

Even before production begins, may 1.5 days nang lumipas.

**Why does this matter?**

Kapag delayed ang order processing, delayed din ang downstream activities kahit available naman ang materials and production capacity.

## 4.4 Transportation and Delivery Lead Time

This refers to the time required to transport materials or finished products from one location to another.

Examples:

- Supplier warehouse to manufacturing plant.
- Manufacturing plant to distribution center.
- Distribution center to customer.

Factors affecting transportation lead time include:

- Distance
- Traffic conditions
- Shipping schedules
- Customs clearance
- Port congestion
- Weather conditions
- Carrier availability

Example:

A supplier may prepare materials within 4 days, but transportation takes another 6 days.

Therefore, the material is not available for production after 4 days. It becomes available only after transportation and receiving requirements are completed.

## 4.5 Cumulative Lead Time

**Cumulative Lead Time** is the total lead time across multiple sequential activities in a supply chain.

For example:

| Stage | Lead Time |
|---|---:|
| Procurement | 12 days |
| Manufacturing | 5 days |
| Quality inspection | 2 days |
| Finished goods preparation | 1 day |
| Transportation | 4 days |
| **Cumulative Lead Time** | **24 days** |

Assuming all activities happen sequentially and there are no overlapping activities.

This is particularly important because a company may have several departments involved in fulfilling one customer order.

Hindi sapat na alam ng production team na 5 days lang ang manufacturing lead time.

Kailangan din nilang maintindihan ang total time across the entire supply chain.

## 4.6 End-to-End Lead Time

**End-to-End Lead Time** measures the elapsed time from the initial demand or customer order event to final customer fulfillment.

For example:

Customer places order → Order validation → Material procurement → Manufacturing → Inspection → Shipment → Customer receives product.

It provides an overall view of supply chain responsiveness.

### Cumulative vs. End-to-End Lead Time

Magkaugnay ang dalawang concepts pero may distinction:

- Cumulative lead time commonly adds the durations of the relevant sequential activities.
- End-to-end lead time measures the actual elapsed time between the defined starting and ending events.

Hindi sila palaging equal.

For example, maaaring sabay na ginagawa ang procurement ng ibang components at preparation ng production schedule.

Kung 10 days ang procurement at 3 days ang production preparation, hindi automatic na 13 days ang elapsed time.

If the activities overlap completely, the elapsed time could be 10 days.

This brings us to an important planning concept: **parallel activities versus sequential activities.**

## 4.7 Internal vs. Supplier-Controlled Lead Time

Hindi lahat ng lead time ay directly controlled ng company.

| Type | Description | Examples |
|---|---|---|
| Internal Lead Time | Time consumed by activities within the company's control | Production scheduling, machine setup, internal inspection |
| Supplier-Controlled Lead Time | Time consumed by supplier-side activities | Material preparation, supplier production, dispatch |

Mayroon ding shared or externally influenced activities, such as transportation and customs clearance.

**Why is this distinction important?**

Kapag delayed ang supplier, hindi ibig sabihin na production department ang may problema.

Likewise, kapag mabilis ang supplier pero matagal ang internal approval process, hindi supplier improvement ang primary solution.

An S&OP analyst must identify where the delay originates before recommending corrective actions.

---

# 5. Lead Time Components

Ngayon, himayin natin kung saan talaga napupunta ang oras sa isang manufacturing process.

## 5.1 The Six Major Components

| Component | Explanation | Manufacturing Example |
|---|---|---|
| Order Preparation | Time needed to prepare and submit an order | Preparing purchase requisition |
| Queue / Waiting | Time spent waiting for the next activity | Waiting for machine availability |
| Setup | Time needed to prepare equipment | Machine adjustment and tooling |
| Processing | Actual work performed on materials | Casting, cutting, firing |
| Inspection / Approval | Time needed to verify quality and release materials | Incoming QC inspection |
| Transportation / Receiving | Time spent moving and receiving materials | Supplier delivery to factory |

Let's discuss each.

### A. Order Preparation and Processing

Ito ang administrative activities before execution.

Examples:
- Purchase requisition preparation
- PO approval
- Supplier confirmation
- Production order creation
- Customer order validation

Possible problem: Too many approval levels or manual processing.

Improvement: Standardized approval workflows and better ERP integration.

### B. Queue and Waiting Time

Ito ang oras na naghihintay ang materials or orders bago maproseso.

Examples:
- Waiting for machine availability.
- Waiting for production scheduling.
- Waiting for materials from another process.
- Waiting for quality inspection.

Important observation:

**Waiting time does not necessarily add value to the product.**

Pero it adds to total lead time.

This is why Lean Manufacturing focuses on identifying and reducing unnecessary waiting.

### C. Setup Time

Setup time is the time required to prepare equipment or a production line before processing begins.

Examples:
- Changing machine settings.
- Installing tooling.
- Adjusting temperature profiles.
- Cleaning equipment between batches.

A company may reduce setup time through standardized procedures and better changeover management.

### D. Processing Time

This is the actual time spent transforming materials into products.

Examples:
- Mixing
- Casting
- Cutting
- Firing
- Assembly

This is usually the most visible component of manufacturing time, but not necessarily the largest.

### E. Inspection and Quality Approval

After production, products may need to pass quality requirements.

Examples:
- Dimensional inspection
- Electrical testing
- Visual inspection
- Reliability testing
- Final quality release

Quality inspection can add lead time, particularly when testing equipment is limited or approval is delayed.

Important distinction: Reducing inspection time should not mean eliminating necessary quality controls.

### F. Transportation and Receiving

This includes movement between:
- Suppliers and factories.
- Production departments.
- Warehouses.
- Distribution centers.
- Customers.

It may also include receiving documentation and material verification.

### 5.2 Delays and Unexpected Disruptions

Not all lead time components are predictable.

Possible disruptions include:

- Supplier production breakdown.
- Machine downtime.
- Raw material shortages.
- Rejected incoming materials.
- Production rework.
- Port congestion.
- Natural disasters.
- Unexpected demand surges.

These events create lead time variability.

At this point, remember two different things:

1. **Lead time:** How long the process takes.
2. **Lead time variability:** How much the duration changes from one occurrence to another.

A supplier with a consistent 15-day lead time may be easier to plan around than a supplier whose deliveries range from 8 to 30 days, even if the second supplier sometimes delivers faster.

---

# 6. Lead Time Measurement and Management

This section introduces how companies actually measure and monitor lead time.

## 6.1 Planned vs. Actual Lead Time

**Planned Lead Time** is the expected duration used for planning purposes.

**Actual Lead Time** is the real elapsed time observed after the activity has been completed.

Example:

A supplier's agreed procurement lead time is 10 days.

However, actual delivery records show:

| Purchase Order | Planned Lead Time | Actual Lead Time |
|---|---:|---:|
| PO 001 | 10 days | 11 days |
| PO 002 | 10 days | 9 days |
| PO 003 | 10 days | 14 days |
| PO 004 | 10 days | 12 days |
| PO 005 | 10 days | 9 days |

The planned lead time is 10 days, but actual performance is inconsistent.

This creates a planning risk.

If the company always assumes 10 days, it may underestimate the time needed for some orders.

## 6.2 Average Lead Time

Average lead time tells us the typical duration of a process based on historical observations.

Using the previous example:

[
Average=rac{11+9+14+12+9}{5}
]

[
Average=11	ext{ days}
]

Interpretation:

Based on the five completed purchase orders, the average procurement lead time is 11 days.

Notice that the planned lead time is 10 days, but the historical average is 11 days.

This suggests that the planning assumption may need to be reviewed.

However, average alone is not enough.

Why?

Because two suppliers can have the same average but different delivery consistency.

## 6.3 Lead Time Variability

Lead time variability measures how much actual lead time fluctuates.

Consider two suppliers:

| Delivery | Supplier A | Supplier B |
|---|---:|---:|
| 1 | 10 days | 6 days |
| 2 | 11 days | 8 days |
| 3 | 10 days | 10 days |
| 4 | 9 days | 12 days |
| 5 | 10 days | 14 days |
| **Average** | **10 days** | **10 days** |

Both suppliers have the same average lead time.

But Supplier A is more consistent.

Supplier B has a wider range of delivery durations.

For supply planning, consistency matters because it helps determine how much protection is needed against delays.

This is why companies should monitor both:

- Average lead time.
- Lead time variability.

## 6.4 Lead Time Reliability

Lead time reliability measures how consistently a supplier or internal process completes activities within the agreed lead time or delivery window.

For example:

A supplier receives 100 purchase orders.

- 92 orders arrive within the agreed delivery window.
- 8 orders arrive late.

Then:

[
Reliability=rac{92}{100}	imes100
]

[
Reliability=92%
]

Meaning, 92% of the orders met the defined lead time commitment.

**Important:** Lead time reliability is not automatically the same as supplier on-time delivery performance.

It depends on the measurement definition.

For example:
- On-time delivery may measure arrival by the promised date.
- Lead time reliability may measure whether actual elapsed time stayed within an agreed duration.

A good KPI must clearly define its start event, end event, and tolerance.

## 6.5 Factors That Increase or Reduce Lead Time

| Factor | Potential Effect |
|---|---|
| Supplier capacity shortage | Increases procurement lead time |
| Machine breakdown | Increases manufacturing lead time |
| Excessive approval steps | Increases administrative lead time |
| Poor production scheduling | Increases waiting time |
| Long transportation routes | Increases delivery lead time |
| Quality rejection | Adds inspection and replacement time |
| Better supplier coordination | Can reduce uncertainty and delays |
| Reduced setup time | Reduces production lead time |
| Improved scheduling | Reduces unnecessary queue time |
| Local or alternative sourcing | May reduce transportation or procurement time |

## 6.6 Why Outdated Lead Time Assumptions Are Dangerous

Imagine na naka-record sa ERP system ang procurement lead time ng isang critical raw material as 14 days.

Pero dahil sa supplier capacity problems, naging 25 days na ang actual lead time.

What happens if the company continues using 14 days?

1. Purchasing releases orders too late.
2. Raw materials arrive after their required production dates.
3. Production schedules are delayed.
4. Finished goods availability decreases.
5. Customer deliveries may become late.
6. The company may incur additional costs from expedited shipments or production rescheduling.

This is an example of how an inaccurate planning parameter can affect the entire supply chain.

**Professional terminology: Master Data Accuracy**

Lead time values maintained in ERP or planning systems are examples of planning master data.

These values must be reviewed and updated using actual operational performance.

Hindi dapat basta-basta gamitin ang historical standard forever.

At the same time, hindi rin dapat automatic na gawing average ang lahat ng planning assumptions. Consider supplier agreements, expected future changes, and operational constraints.

---

# 7. Lead Time in S&OP and Supply Planning

Now let's connect everything to actual S&OP decision-making.

## 7.1 How Lead Time Affects Production and Procurement

Suppose a company receives a customer requirement for 5,000 units on December 15.

The company needs to determine:

- When should procurement place the order?
- When should materials arrive?
- When should production begin?
- When should quality inspection be completed?
- When should finished goods be shipped?

Without lead time information, the company cannot reliably answer these questions.

Lead time essentially works backward from the required completion date.

This is called **Backward Scheduling**.

Example:

| Activity | Duration | Required Completion |
|---|---:|---|
| Customer delivery | December 15 | December 15 |
| Transportation | 3 days | December 12 |
| Finished goods preparation | 1 day | December 11 |
| Production and inspection | 5 days | December 10 |
| Material availability | 12 days | December 5 |
| Procurement start | | November 23 |

The company must initiate procurement by November 23, based on these illustrative assumptions.

In actual operations, the dates must account for weekends, holidays, working calendars, and overlapping activities.

## 7.2 Relationship Between Lead Time, Inventory, and Safety Stock

Lead time has a direct relationship with inventory planning.

Simple explanation:

Kung matagal bago dumating ang raw materials, kailangan ng company na mag-plan nang mas maaga.

Why?

Because the company cannot immediately replenish materials when stocks become low.

Example:

- Material consumption: 100 units per day.
- Procurement lead time: 10 days.

The company expects to consume 1,000 units while waiting for the replenishment to arrive.

[
100	imes10=1,000	ext{ units}
]

This is the expected demand during lead time, assuming constant daily consumption.

Kung tumaas ang lead time from 10 days to 15 days:

[
100	imes15=1,500	ext{ units}
]

An additional 500 units of demand must be covered during the longer replenishment period.

This illustrates why longer lead times can increase inventory requirements.

### Connection to Safety Stock

Safety stock provides additional inventory protection against uncertainty in demand and/or replenishment lead time.

For now, remember:

- Longer lead time can increase inventory exposure.
- More variable lead time can increase the need for protection.
- More reliable suppliers can reduce uncertainty.
- Excessively high inventory also creates holding costs and potential obsolescence.

We'll discuss the actual inventory formulas and safety stock calculations in Module 5.

## 7.3 Lead Time and Customer Service

Lead time influences how quickly a company can fulfill customer requirements.

Imagine two manufacturers:

| Metric | Company A | Company B |
|---|---:|---:|
| Production Lead Time | 5 days | 5 days |
| Procurement Lead Time | 20 days | 8 days |
| Delivery Lead Time | 5 days | 3 days |

Company B can potentially respond faster because its overall supply chain lead time is shorter.

This can improve:
- Delivery performance.
- Customer responsiveness.
- Order fulfillment flexibility.
- Ability to respond to urgent demand.

However, shorter lead time does not automatically guarantee better customer service. Capacity availability, inventory, quality, and scheduling also matter.

## 7.4 Lead Time and Planning Horizons

Lead time also determines how far ahead a company needs to plan.

For example:

A critical imported component requires 90 days to procure.

If the company plans only 30 days ahead, it may already be too late to respond to new demand changes.

Therefore, the company needs visibility beyond the immediate production schedule.

This is why S&OP considers medium-term demand and supply requirements.

**Important concept: Planning Horizon**

The planning horizon is the period into the future covered by a planning process.

The longer the lead time, the earlier the company may need to identify demand requirements and supply constraints.

## 7.5 Managing Long-Lead-Time Materials

Some materials require significantly longer procurement periods.

Examples:
- Imported electronic components.
- Specialized industrial equipment.
- Custom tooling.
- Rare or specialized raw materials.
- Components with limited supplier availability.

These are called **Long-Lead-Time Items**.

Common management strategies include:

1. Early procurement: Place orders before the material is urgently needed.
2. Forecast sharing: Provide suppliers with advance visibility of expected demand.
3. Supplier capacity reservation: Secure production or supply allocation in advance.
4. Alternative sourcing: Qualify another supplier where feasible.
5. Strategic inventory: Hold selected materials as protection against supply interruptions.
6. Regular monitoring: Track order confirmations, production progress, and shipment status.

The objective is not simply to buy earlier.

The objective is to make supply availability more predictable while controlling cost and inventory exposure.

---

# 8. Formulas and Calculations

This is where we start moving from understanding to technical application.

For an S&OP analyst, hindi sapat na sabihin na "matagal ang supplier." Kailangan nating i-quantify kung gaano katagal, gaano kalaki ang delay, gaano ka-consistent, at kailan talaga magiging available ang materials.

We'll use calendar days for most examples, then distinguish working days where necessary.

## 8.1 Total and Cumulative Lead Time

**Formula:**

[
LT_{total}=sum_{i=1}^{n}LT_i
]

Where:

- (LT_{total}) = Total lead time
- (LT_i) = Duration of each activity
- (n) = Number of activities

Example:

A manufacturing company has the following supply chain activities:

| Activity | Duration |
|---|---:|
| Order processing | 2 days |
| Procurement | 10 days |
| Manufacturing | 4 days |
| Quality inspection | 2 days |
| Shipment | 3 days |

Calculation:

[
LT_{total}=2+10+4+2+3
]

**Total cumulative lead time = 21 days**

Assuming sequential activities and calendar-day durations.

Interpretation:

The company needs 21 calendar days from order processing to customer delivery.

**Important limitation:** Hindi puwedeng basta i-add lahat kung may overlapping activities.

For example, if procurement and production preparation happen simultaneously, the total elapsed time may be shorter than the sum of their individual durations.

For parallel activities, the critical path determines the minimum completion time, assuming no resource conflicts.

## 8.2 Average Lead Time

**Formula:**

[
ar{LT}=rac{sum LT_i}{n}
]

Where:

- (ar{LT}) = Average lead time
- (LT_i) = Actual lead time for each completed order
- (n) = Number of observations

Example:

Suppose five supplier deliveries have these actual lead times:

12, 10, 14, 11, and 13 days.

Step 1: Add all observations.

[
12+10+14+11+13=60
]

Step 2: Divide by the number of observations.

[
ar{LT}=rac{60}{5}
]

**Average lead time = 12 days**

Interpretation:

The supplier's average delivery lead time is 12 days.

**Limitation:** Average lead time does not tell us how consistent the supplier is. We need variability measures for that.

## 8.3 Lead Time Variance

May dalawang useful meanings ang lead time variance, kaya kailangan nating paghiwalayin.

### A. Lead Time Deviation

This measures the difference between actual and planned lead time.

[
Deviation=Actual LT-Planned LT
]

Example:

- Planned lead time = 10 days.
- Actual lead time = 13 days.

[
Deviation=13-10=+3	ext{ days}
]

Interpretation: The delivery took 3 days longer than planned.

Other possible results:

| Result | Meaning |
|---|---|
| Positive | Actual lead time is longer than planned |
| Zero | Actual matches planned |
| Negative | Actual is shorter than planned |

### B. Statistical Variance

This measures how spread out the observed lead times are around their average.

Population variance formula:

[
sigma^2=rac{sum(LT_i-ar{LT})^2}{N}
]

Where:

- (sigma^2) = Population variance
- (LT_i) = Individual lead time observation
- (ar{LT}) = Average lead time
- (N) = Number of observations

Example:

Actual lead times: 8, 10, 12 days.

Step 1: Calculate the average.

[
ar{LT}=rac{8+10+12}{3}=10
]

Step 2: Calculate the deviations from the average and square them.

| Actual LT | Deviation | Squared Deviation |
|---:|---:|---:|
| 8 | -2 | 4 |
| 10 | 0 | 0 |
| 12 | +2 | 4 |
| **Total** | | **8** |

Step 3: Divide by the number of observations.

[
sigma^2=rac{8}{3}=2.67
]

Population variance = **2.67 days²**

Population standard deviation:

[
sigma=sqrt{2.67}=1.63
]

Interpretation:

The observed lead times have a standard deviation of approximately 1.63 days around their average of 10 days.

**Important:** If you're analyzing a sample of historical deliveries to estimate a larger population, use sample variance, which divides by (n-1), rather than population variance.

Standard deviation is often easier to interpret because its unit is days, not days squared.

## 8.4 Lead Time Reliability

**Formula:**

[
Reliability=rac{	ext{Orders meeting lead time target}}{	ext{Total completed orders}}	imes100
]

Example:

A supplier receives 100 purchase orders.

- 92 orders arrive within the agreed delivery window.
- 8 orders arrive late.

[
Reliability=rac{92}{100}	imes100
]

**Lead time reliability = 92%**

Interpretation:

92% of the orders met the defined lead time commitment.

**Important:** Lead time reliability is not automatically the same as supplier on-time delivery performance.

It depends on the measurement definition.

For example:
- On-time delivery may measure arrival by the promised date.
- Lead time reliability may measure whether actual elapsed time stayed within an agreed duration.

A good KPI must clearly define its start event, end event, and tolerance.

## 8.5 Estimated Completion Date

**Formula:**

[
Completion Date=Start Date+Lead Time
]

Example:

A production activity starts on November 16, 2026.

Its expected duration is 7 calendar days.

[
November 16+7 days=November 23
]

**Expected completion date: November 23, 2026**

Assuming elapsed calendar-day counting, with November 16 as the starting date.

There is an important distinction between elapsed-day arithmetic and counting the start date as Day 1.

For example:

- November 16: Day 0, activity begins.
- November 17: 1 elapsed day.
- November 23: 7 elapsed days.

This convention avoids off-by-one errors.

## 8.6 Estimated Delivery Date

If manufacturing and transportation are sequential:

[
Delivery Date=Production Completion Date+Delivery LT
]

Example:

- Production completion: December 10.
- Shipment lead time: 3 calendar days.

[
December 10+3=December 13
]

Expected customer delivery: December 13.

However, if there are additional activities such as final inspection, packing, or warehouse staging, include those before calculating the delivery date.

## 8.7 Calendar Days vs. Working Days

Ito ang critical detail sa lead time calculations.

**Calendar Days** include:
- Mondays to Sundays.
- Holidays.
- Weekends.

**Working Days** typically include scheduled operating days, excluding nonworking days based on the company's calendar.

Example:

A procurement process takes 5 working days.

It starts on Monday.

Assuming Saturday and Sunday are nonworking days:

| Day | Status |
|---|---|
| Monday | Day 1 |
| Tuesday | Day 2 |
| Wednesday | Day 3 |
| Thursday | Day 4 |
| Friday | Day 5 |

Completion: Friday.

But if the same duration is expressed as 5 calendar days, the completion date is different.

### Comparison

| Lead Time | Starting Date | Expected Completion |
|---|---|---|
| 5 calendar days | Monday | Saturday |
| 5 working days | Monday | Friday |

These are illustrative elapsed-date conventions. Actual completion may depend on start time, cutoff times, weekends, and holidays.

**Professional reminder:** Always check whether the lead time in your ERP system is expressed in calendar days or working days.

Never combine them without converting them using the applicable operating calendar.

---

# 9. Practical Manufacturing Application

Let's combine everything in a realistic manufacturing scenario.

## 9.1 Business Scenario

Imagine that a manufacturing company produces electronic components.

A customer places an order for **10,000 finished units**.

The required customer delivery date is December 18, 2026.

To fulfill the order, the company needs to procure raw materials, complete manufacturing, conduct quality inspection, and ship the finished products.

The following are illustrative planning assumptions.

### Supply Chain Requirements

| Activity | Duration | Responsible Department |
|---|---:|---|
| Purchase order processing | 2 working days | Purchasing |
| Supplier material preparation | 8 calendar days | Supplier |
| Transportation | 3 calendar days | Logistics |
| Receiving inspection | 1 working day | Quality |
| Production scheduling and queue | 2 working days | Production Planning |
| Manufacturing | 3 working days | Production |
| Final inspection | 1 working day | Quality |
| Packing and shipment preparation | 1 working day | Warehouse |
| Transportation to customer | 3 calendar days | Logistics |

Assumptions:

- Monday to Friday are working days.
- No holidays are considered.
- Each internal activity starts after the previous activity finishes.
- Supplier preparation and transportation use calendar days.
- No additional waiting time or disruption occurs.

## 9.2 Step 1: Calculate Total Lead Time

First, convert the internal working-day activities and supplier calendar-day activities into their respective durations.

Working-day activities:

[
2+1+2+3+1+1=10 working days
]

Calendar-day activities:

[
8+3+3=14 calendar days
]

Notice that we cannot simply add these numbers and call the result 24 calendar days.

Why?

Because 10 working days are not necessarily equal to 10 calendar days.

We need to schedule the activities against an actual calendar.

## 9.3 Step 2: Work Backward from Customer Delivery

Required delivery: December 18, 2026.

Let's schedule the process backward.

| Activity | Planned Date |
|---|---|
| Customer delivery | December 18 |
| Shipment preparation completed | December 15 |
| Final inspection completed | December 14 |
| Manufacturing completed | December 11 |
| Production queue completed | December 8 |
| Receiving inspection completed | December 4 |
| Supplier transportation completed | December 3 |
| Supplier preparation completed | November 25 |
| Purchase order processing begins | November 23 |

The dates above assume the defined activity sequence, with supplier preparation and transport measured in calendar days, and internal activities measured in working days.

Let's examine the result.

The company must initiate purchasing activities on November 23 to support the December 18 delivery commitment.

Kung November 30 pa mag-start ang purchasing, may risk na hindi na ma-meet ang delivery schedule.

## 9.4 Step 3: What If the Supplier Is Delayed?

Suppose the supplier informs the company that material preparation will take 12 calendar days instead of 8 days.

Additional delay:

[
12-8=4 days
]

The material arrives 4 days later, assuming no other changes.

Possible consequences:

1. Receiving inspection starts later.
2. Production start is pushed back.
3. Manufacturing completion is delayed.
4. Final inspection is delayed.
5. Customer delivery commitment may be missed.

This is a classic supply constraint.

The S&OP team now needs to evaluate alternatives.

| Possible Action | Business Consideration |
|---|---|
| Expedite supplier production | May involve additional supplier costs |
| Use available raw material inventory | May reduce inventory available for other orders |
| Transfer materials from another facility | Transportation and coordination costs |
| Use an alternative qualified supplier | Qualification and cost considerations |
| Reschedule production | May affect other customer orders |
| Negotiate a revised delivery date | May affect customer satisfaction |

The decision should not be made by purchasing alone.

It may require coordination among supply planning, production, procurement, logistics, sales, and finance.

## 9.5 Step 4: What Should the S&OP Analyst Recommend?

An S&OP analyst should investigate:

**Demand perspective**
- Is the customer delivery date fixed?
- Is the order urgent?
- Are there other customer orders competing for the same material?

**Supply perspective**
- Is the supplier delay confirmed?
- Is there an alternative source?
- Is there enough material inventory?

**Production perspective**
- Is there available capacity?
- Can production be resequenced?
- Can the company prioritize this order without disrupting other commitments?

**Financial perspective**
- How much will expediting cost?
- What is the potential cost of late delivery?
- Would alternative sourcing be financially justified?

The goal is not simply to shorten the lead time.

The goal is to determine the most feasible and financially reasonable plan to fulfill customer demand.

---

# 10. Lead Time Improvement Strategies

Now that we understand how to measure lead time, let's discuss how companies improve it.

Important: Shorter is not always better if the improvement creates excessive costs, quality problems, or operational instability.

## 10.1 Supplier Coordination

Companies can improve supplier lead time through:

- Sharing demand forecasts.
- Providing advance purchase requirements.
- Monitoring supplier production status.
- Establishing clear delivery commitments.
- Conducting regular supplier performance reviews.

**Example:**

Instead of informing a supplier only when a purchase order is released, the company provides a rolling 3-month forecast.

This allows the supplier to prepare materials and capacity ahead of time.

Potential benefit: Reduced uncertainty and fewer last-minute supply shortages.

## 10.2 Process Improvement

Identify activities that consume time without adding meaningful value.

Examples:

- Unnecessary approvals.
- Repeated data entry.
- Excessive movement of materials.
- Long inspection queues.
- Unnecessary production transfers.

Lean tools can help identify these problems.

One useful concept is **Value Stream Mapping (VSM)**.

It visualizes the flow of materials and information and identifies where time is spent.

## 10.3 Reduce Waiting Time

Suppose a production process has:

- Processing time: 4 hours.
- Waiting time: 20 hours.

Total elapsed time: 24 hours.

If better scheduling reduces waiting time to 8 hours:

[
New LT=4+8=12 hours
]

Lead time reduction:

[
24-12=12 hours
]

[
Reduction=rac{12}{24}	imes100=50%
]

The company reduced total lead time by 50% without changing the actual processing time.

This demonstrates why waiting-time reduction can be a powerful improvement strategy.

## 10.4 Better Production Scheduling

Poor scheduling creates unnecessary queues.

For example:

- A machine is scheduled for multiple products without considering setup requirements.
- Materials arrive but the required machine is unavailable.
- Production orders are frequently rearranged.
- Urgent orders continuously interrupt planned production.

Improved scheduling can reduce unnecessary waiting and changeovers.

This is also where Resource Planning and Bottleneck Analysis become important.

## 10.5 Inventory Positioning

Companies may strategically position inventory closer to where it is needed.

Examples:

- Holding critical raw materials at the factory.
- Maintaining semi-finished goods for products with unpredictable demand.
- Positioning finished goods at distribution centers closer to customers.

This can reduce customer-facing delivery lead time.

However, inventory positioning has trade-offs:
- Higher inventory holding costs.
- Risk of obsolescence.
- Additional storage requirements.
- Working capital utilization.

## 10.6 Alternative Sourcing

If one supplier consistently has long or unreliable lead times, companies may qualify alternative suppliers.

Example:

| Supplier | Average Lead Time | Reliability |
|---|---:|---:|
| Supplier A | 20 days | 90% |
| Supplier B | 12 days | 96% |

Supplier B appears more attractive based on these illustrative figures.

However, management should also evaluate:
- Material quality.
- Price differences.
- Production capacity.
- Supplier financial stability.
- Minimum order quantities.
- Geographic risks.
- Qualification requirements.

The fastest supplier is not automatically the best supplier.

## 10.7 Improvement Strategy Summary

| Strategy | Primary Target | Potential Benefit |
|---|---|---|
| Supplier coordination | Procurement | More predictable supply |
| Process improvement | Internal processes | Reduced unnecessary activities |
| Queue reduction | Waiting time | Faster material flow |
| Better scheduling | Production | Reduced delays and idle time |
| Inventory positioning | Supply availability | Faster fulfillment |
| Alternative sourcing | Supplier dependency | Improved supply flexibility |

---

# 11. Business Perspective and S&OP Decision-Making

At this point, let's look at Lead Time Management from the perspective of an S&OP analyst rather than simply a production or purchasing employee.

## 11.1 What Should an S&OP Analyst Monitor?

These are useful lead time KPIs:

| KPI | What It Measures |
|---|---|
| Average Procurement Lead Time | Average time required to obtain materials |
| Average Manufacturing Lead Time | Average time required to complete production |
| Supplier Lead Time Reliability | Percentage of orders meeting agreed lead time |
| Lead Time Variability | Consistency of supplier or process duration |
| Order Fulfillment Lead Time | Time from customer order to fulfillment |
| Production Schedule Adherence | Whether production follows the agreed schedule |
| On-Time Delivery (OTD) | Percentage of customer orders delivered on time |

These KPIs should have clearly defined measurement boundaries.

For example, supplier lead time reliability and customer OTD measure different things. A supplier may deliver materials on time, but the manufacturer can still deliver finished goods late due to internal production constraints.

## 11.2 How Lead Time Affects Business Performance

| Business Area | Impact of Long or Unreliable Lead Time |
|---|---|
| Demand Planning | Requires earlier visibility of demand |
| Procurement | Requires earlier purchasing decisions |
| Production | Creates scheduling challenges |
| Inventory | Increases inventory exposure and potential buffer requirements |
| Customer Service | Reduces responsiveness and may cause late deliveries |
| Finance | Can increase working capital and expediting costs |
| Capacity | Makes future resource requirements harder to adjust |

## 11.3 The Most Important S&OP Perspective

Consider this situation:

Sales forecasts an increase in customer demand next month.

However, procurement informs the S&OP team that a critical raw material requires 60 days to procure.

What should happen?

The S&OP team must recognize that the company cannot immediately increase production simply because demand has increased.

It needs to evaluate:

1. Whether materials can be secured ahead of time.
2. Whether supplier capacity can support the increase.
3. Whether existing inventory can cover the demand.
4. Whether production capacity is available.
5. Whether alternative materials or suppliers are qualified.
6. Whether customer demand needs to be prioritized.

This is the purpose of integrating demand and supply planning.

**A demand forecast tells us what we expect to sell. Lead time tells us how early we must act to make that demand achievable.**

---

# 12. Key Takeaways

Before moving to the exercises, make sure you understand these fundamental concepts.

| Concept | What You Should Remember |
|---|---|
| Lead Time | Total elapsed time from a defined starting point to completion |
| Processing Time | Time spent performing actual work |
| Waiting Time | Time spent waiting for the next activity |
| Cycle Time | Time between successive completed outputs |
| Procurement Lead Time | Time needed to obtain materials from suppliers |
| Manufacturing Lead Time | Time required to complete manufacturing activities |
| Cumulative Lead Time | Combined duration of sequential activities |
| End-to-End Lead Time | Total elapsed time across the defined supply chain journey |
| Lead Time Variability | How much lead time fluctuates |
| Lead Time Reliability | How consistently lead time commitments are achieved |
| Backward Scheduling | Planning activities backward from a required completion date |
| Long-Lead-Time Item | Material or component requiring a relatively long replenishment period |

### Five Important Principles

1. Lead time is not the same as processing time. Waiting, setup, inspection, and transportation also consume time.
2. Actual lead time must be monitored against planned lead time.
3. Average lead time alone is insufficient. Variability and reliability must also be considered.
4. Longer or unreliable lead times can create supply shortages, inventory exposure, and customer delivery problems.
5. Lead time management requires coordination across purchasing, production, logistics, sales, and finance.

### Connection to the Next Topic: 4.6 Bottleneck Analysis

We've established that lead time includes processing and waiting time.

But what causes excessive waiting?

One possible reason is that a particular machine, department, or process cannot handle the required workload.

This is where **Bottleneck Analysis** comes in.

For example:

- Casting can process 1,000 units per day.
- Cutting can process 800 units per day.
- Firing can process 500 units per day.
- Sorting can process 900 units per day.

Firing has the lowest processing capacity.

It may become the bottleneck, causing work-in-process inventory to accumulate before that stage.

This can increase manufacturing lead time.

In Topic 4.6, we'll examine how to identify these constraints and understand their effects on production flow.

---

# 13. Knowledge Check and Exercises

Now let's test your understanding.

I'll evaluate your answers after you submit them. Hindi ko muna ibibigay ang solutions para ma-practice mo ang independent analysis.

## Part A: Conceptual Understanding

**Question 1.** A manufacturing company reports that its actual machine processing time is only 6 hours, but its manufacturing lead time is 3 days.

Why is this possible? Explain the difference between processing time and lead time.

**Question 2.** What is the difference between cumulative lead time and end-to-end lead time? Can they produce different values? Explain why.

**Question 3.** Supplier A has an average procurement lead time of 10 days. Supplier B also has an average procurement lead time of 10 days.

However, Supplier A consistently delivers within 9–11 days, while Supplier B delivers anywhere between 5–20 days.

Which supplier would be easier to plan around, and why?

## Part B: Numerical Exercises

**Question 4. Average Lead Time**

A supplier has the following actual delivery records:

| Purchase Order | Actual Lead Time |
|---|---:|
| PO 001 | 12 days |
| PO 002 | 15 days |
| PO 003 | 10 days |
| PO 004 | 13 days |
| PO 005 | 10 days |

Calculate:

a. Average lead time.

b. If the planned lead time is 11 days, what is the difference between actual average and planned lead time?

c. What does the result tell you about the supplier's planning assumption?

**Question 5. Lead Time Reliability**

A supplier completed 80 purchase orders.

- 68 orders arrived within the agreed lead time.
- 12 orders arrived beyond the agreed lead time.

Calculate the supplier's lead time reliability.

Interpret your result from a procurement planning perspective.

**Question 6. Cumulative Lead Time**

A manufacturing company has the following sequential activities:

| Activity | Duration |
|---|---:|
| Procurement | 15 calendar days |
| Receiving inspection | 2 working days |
| Production | 4 working days |
| Final inspection | 1 working day |
| Delivery | 3 calendar days |

Assuming Monday to Friday are working days, calculate the total elapsed time in calendar days.

State your assumptions.

## Part C: Situational Analysis

**Question 7. Supplier Delay**

A company normally receives a critical raw material within 12 days.

Recently, actual supplier deliveries have increased to 20 days.

The production plan still uses the original 12-day lead time.

Identify at least three possible consequences and recommend two corrective actions.

**Question 8. Manufacturing Lead Time Improvement**

A production line has the following time distribution:

| Activity | Duration |
|---|---:|
| Waiting time | 18 hours |
| Setup time | 2 hours |
| Processing time | 6 hours |
| Inspection time | 4 hours |

Management wants to reduce total manufacturing lead time without purchasing additional machines.

What activities would you investigate first? Explain your reasoning and propose possible improvements.

## Part D: Professional S&OP Analysis

**Question 9. Integrated Business Decision**

Sales forecasts a 30% increase in demand next month.

However:

- A critical raw material has a procurement lead time of 45 days.
- Current inventory can support only 20 days of production.
- The supplier cannot guarantee an earlier delivery.
- Production capacity is currently sufficient.

As an S&OP analyst:

a. What is the primary supply risk?

b. Why is available production capacity not enough to solve the problem?

c. What information would you request from purchasing, production, and sales?

d. What actions would you recommend to management?

---

## Your Learning Progress

**Module 4 Progress: 5 of 6 topics completed**

- 4.1 Supply Planning Fundamentals
- 4.2 Production Planning
- 4.3 Capacity Planning
- 4.4 Resource Planning
- 4.5 Lead Time Management
- 4.6 Bottleneck Analysis

**Recommended approach:** Sagutan muna natin ang Questions 1–9. You can answer them all at once or in batches.

I'll evaluate each answer based on:
- Conceptual understanding
- Calculation accuracy
- Business interpretation
- Quality of S&OP recommendations

I'll also identify whether your understanding is at Level 1 (Understanding), Level 2 (Technical Application), or Level 3 (Professional Analysis).

Hindi muna tayo lilipat sa Topic 4.6. We will complete and validate your understanding of Lead Time Management first.
