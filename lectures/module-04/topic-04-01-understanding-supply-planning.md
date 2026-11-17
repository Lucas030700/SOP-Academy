# Module 4 – Supply Planning
## Topic 4.1: Understanding Supply Planning

**Main learning objective:** Understand how a company determines whether it has enough materials, production capacity, people, equipment, and time to satisfy customer demand.

Sa Module 3, pinag-aralan natin kung paano naiintindihan at kino-convert ng company ang customer demand into a demand forecast and consensus demand plan.

Ngayon, papasok tayo sa kabilang side ng S&OP equation: **Supply Planning.**

May isang importanteng business question tayong sasagutin:

> "We know how much our customers are expected to buy. But can our company actually produce and deliver that quantity, at the right time, using the resources available?"

Dito nagsisimula ang Supply Planning.

---

# 1. Topic Overview

### 1.1 What will we learn?

Sa topic na ito, pag-aaralan natin kung paano kino-convert ng company ang expected customer demand into an operationally achievable supply plan.

Hindi sapat na malaman lang natin na kailangan ng customers ng 100,000 units next month.

Kailangan din nating malaman:

- Mayroon ba tayong enough raw materials?
- Sapat ba ang production capacity?
- Available ba ang machines?
- Sapat ba ang manpower?
- Kaya ba ng suppliers na mag-deliver on time?
- Mayroon ba tayong enough inventory?
- Kaya ba nating ma-deliver ang products according to customer requirements?

These questions determine whether a supply plan is realistic.

### 1.2 Why is Supply Planning important?

Imagine na ang Sales Department ay nangako sa customers ng 100,000 units next month.

Pero ang Manufacturing Department ay may capacity lang na 75,000 units.

At ang Procurement Department naman ay may raw materials lang para sa 80,000 units.

May problem.

Kung hindi ito ma-identify before production starts, possible na magkaroon ng:

- Missed customer deliveries
- Production delays
- Material shortages
- Emergency purchases
- Overtime expenses
- Excessive inventory in other products
- Customer dissatisfaction

Supply Planning helps the company identify these problems before they become actual operational failures.

### 1.3 Connection to S&OP

Sa Module 3, pinag-aralan natin ang Demand Planning. Ngayon, ikokonekta natin iyon sa Supply Planning.

**Demand Planning:** What do customers need, and how much?

Illustrative demand: **100,000 units**

**Supply Planning:** Can we produce and deliver it?

Illustrative feasible production capacity: **75,000 units**

**S&OP Reconciliation:** How do we address the difference?

Illustrative supply gap: **25,000 units**

Important distinction: Hindi automatic na 75,000 units ang final supply plan. Puwedeng may additional inventory, overtime, additional shifts, supplier expediting, or other alternatives.

Ang objective ay makabuo ng plan na parehong achievable at financially reasonable.

### 1.4 Why is this included in Module 4?

Ang Module 4 focuses on the supply side of S&OP.

After understanding demand planning, kailangan naman nating maintindihan kung paano tumutugon ang organization sa demand using its available resources.

The succeeding topics will build on this foundation, particularly the detailed planning of materials, production, capacity, and supply constraints.

---

# 2. Layman's Explanation

## 2.1 What is Supply Planning?

Let's use a simple example.

Imagine na may sarili kang small bakery.

May customer na nag-order ng 1,000 pieces of bread for delivery next Monday.

As the bakery owner, hindi puwedeng sabihin mo agad:

"Okay, 1,000 pieces. No problem!"

Kailangan mong i-check muna:

| Requirement | Available |
|---|---:|
| Flour | 50 kg |
| Sugar | 10 kg |
| Yeast | 2 kg |
| Baking machines | 2 |
| Bakers | 3 |
| Available production hours | 8 hours |

Suppose your ingredients are sufficient, pero ang maximum production capacity ng bakery mo ay 700 pieces per day.

Then you have a problem.

Kahit may customer demand ka na 1,000 pieces, hindi ibig sabihin na kaya mong gumawa ng 1,000 pieces.

You need to evaluate your available resources.

**Ito ang Supply Planning: determining how much the company can supply, when it can supply it, and what resources are needed to fulfill the expected demand.**

In simple terms:

- Demand Planning tells you what customers want.
- Supply Planning tells you how the company will fulfill those requirements.

## 2.2 Demand Planning vs. Supply Planning

Ito ang isa sa pinakamahalagang distinctions sa S&OP.

| Demand Planning | Supply Planning |
|---|---|
| Focuses on customer demand | Focuses on fulfilling demand |
| Determines expected sales | Determines achievable supply |
| Uses historical sales, forecasts, and market information | Uses inventory, materials, capacity, and resources |
| Answers "How much do customers need?" | Answers "How much can we supply?" |
| Primarily demand-oriented | Primarily resource-oriented |

Let's use an electronic components manufacturer.

**Example: Monthly customer demand**

| Item | Quantity |
|---|---:|
| Expected customer demand | 100,000 units |
| Existing finished goods | 10,000 units |
| Production capacity | 75,000 units |
| Available raw materials | Sufficient for 80,000 units |

Potential total supply:

\[
10,000+75,000=85,000\]

**Potential supply: 85,000 units**

**Potential shortfall: 15,000 units**

Assuming all 10,000 finished goods units are usable and available for the same demand period, with no other inventory movements.

Dito natin makikita na kahit 100,000 units ang expected demand, 85,000 units lang ang potential available supply under the given assumptions.

The company must now determine how to address the remaining 15,000 units.

## 2.3 What is a Feasible Supply Plan?

Ang feasible ay nangangahulugang **realistically achievable**.

Hindi lang siya magandang number sa Excel spreadsheet. Dapat kaya talaga siyang i-execute ng Manufacturing, Procurement, and other departments.

For example:

| Requirement | Available | Required |
|---|---:|---:|
| Production capacity | 80,000 | 100,000 |
| Raw materials | 110,000 | 100,000 |
| Workforce capacity | 100,000 | 100,000 |
| Finished goods inventory | 5,000 | 5,000 |

In this example, sufficient ang raw materials and workforce, pero insufficient ang production capacity.

Therefore, hindi feasible ang 100,000-unit production plan under the current conditions.

Possible alternatives:

1. Add overtime.
2. Introduce another production shift.
3. Transfer production to another facility.
4. Subcontract some production.
5. Adjust delivery schedules with customers.

The company needs to determine which alternative is practical.

## 2.4 Why can't customer demand automatically become production requirements?

Ito ang common misunderstanding.

For example:

- Customer demand: 100,000 units
- Finished goods inventory: 20,000 units

Does the company need to produce 100,000 units?

No.

If the inventory is usable and available for the same demand period, the initial production requirement is only 80,000 units.

But may additional considerations pa:

- Safety stock requirements
- Existing customer commitments
- Inventory already allocated to other orders
- Expected scrap and production yield
- Inventory quality or hold status

So, customer demand is the starting point, not automatically the final production quantity.

---

# 3. Technical Explanation

Now let's introduce the professional terminology.

## 3.1 Formal Definition of Supply Planning

**Supply Planning** is the process of determining how an organization will meet its expected demand by coordinating production, procurement, inventory, capacity, workforce, and other operational resources over a defined planning horizon.

Its purpose is to develop a supply plan that balances:

- Customer requirements
- Resource availability
- Operational constraints
- Inventory objectives
- Financial considerations

In professional S&OP environments, Supply Planning is not simply calculating production quantities.

It involves evaluating the entire supply network to determine whether demand can be fulfilled.

## 3.2 Important Technical Terms

| Term | Meaning |
|---|---|
| Supply Plan | The planned quantities of products or materials to be supplied over time |
| Supply Requirement | Quantity of supply needed to support demand and inventory objectives |
| Available Supply | Inventory and expected receipts available to fulfill requirements |
| Supply Constraint | A limitation that prevents the company from supplying the required quantity |
| Capacity | Maximum output that a resource or production system can achieve under defined conditions |
| Feasible Plan | A plan that can realistically be executed using available or approved resources |
| Supply Gap | Difference between required supply and available or achievable supply |
| Planning Horizon | Future period covered by the supply plan |
| Planning Bucket | Time interval used for planning, such as daily, weekly, or monthly |
| Lead Time | Time required to complete a process, such as purchasing or manufacturing |
| Resource Utilization | Degree to which available resources are being used |

## 3.3 Main Objectives of Supply Planning

There are six major objectives.

**1. Meeting customer demand**

The company wants to fulfill customer orders within the required quantity and delivery schedule.

**2. Ensuring material availability**

Production cannot proceed without the necessary raw materials and components.

**3. Managing production capacity**

The company must ensure that its machines, production lines, and facilities can handle the required output.

**4. Maintaining appropriate inventory**

Too little inventory can cause shortages. Too much inventory can increase storage costs and working capital requirements.

**5. Optimizing resources and operational costs**

The company must balance labor, machines, procurement expenses, overtime, and other costs.

**6. Supporting customer delivery commitments**

Supply Planning must consider not only how much can be produced, but also when the finished products can be delivered.

## 3.4 The trade-off between cost, capacity, inventory, and service

These objectives sometimes conflict.

For example:

| Decision | Potential benefit | Potential disadvantage |
|---|---|---|
| Increase inventory | Better product availability | Higher holding costs |
| Add overtime | More production output | Higher labor costs |
| Add production shifts | Increased capacity | Additional operating expenses |
| Buy materials early | Reduced shortage risk | More working capital tied up |
| Use expedited shipping | Faster material availability | Higher logistics costs |
| Reduce production | Lower operating costs | Possible customer shortages |

This is why Supply Planning requires business judgment.

The cheapest option is not necessarily the best option.

Likewise, maximizing production is not always the best strategy if it creates excessive inventory.

**The objective is to find the right balance between customer service, operational capability, and total business cost.**

---

# 4. Detailed Discussion

Dito natin himayin ang actual components ng Supply Planning at kung paano sila nagtutulungan.

## 4.1 Major Components of Supply Planning

Hindi isolated activity ang Supply Planning. Connected ang iba't ibang departments dahil bawat isa ay may responsibility sa pagbuo at fulfillment ng supply.

### A. Production Planning

**Question: How much should we produce, and when should we produce it?**

Production Planning determines the quantity and timing of products to be manufactured.

For example:

Ang demand plan ay 100,000 electronic components for November.

Pero mayroon nang 15,000 units sa finished goods inventory.

If the company wants to maintain 5,000 units of ending inventory:

\[
Production = 100,000+5,000-15,000
\]

\[
Production = 90,000\ units
\]

So, 90,000 units ang initial production requirement.

Production Planning determines how to distribute this requirement across production lines, machines, and weeks.

**Important considerations:**
- Production schedule
- Machine availability
- Production sequence
- Manufacturing lead time
- Production efficiency
- Planned downtime

### B. Procurement Planning

**Question: Do we have enough materials to manufacture the required products?**

Procurement Planning determines what materials need to be purchased, how much is needed, and when they should arrive.

Example:

To manufacture one electronic component, the company needs:

| Material | Quantity per finished unit |
|---|---:|
| Ceramic powder | 10 grams |
| Electrode material | 2 grams |
| Packaging material | 1 set |

If the company needs to manufacture 90,000 units:

- Ceramic powder = 900,000 grams
- Electrode material = 180,000 grams
- Packaging material = 90,000 sets

Pero hindi ibig sabihin na kailangan bumili ng lahat ng ito.

Kailangan munang ibawas ang available raw materials and consider existing purchase orders.

Procurement Planning also considers supplier lead time.

For example, if ceramic powder requires six weeks to arrive, hindi puwedeng mag-order today at asahan na available na siya next week.

### C. Inventory Planning

**Question: How much inventory do we currently have, and how much should we maintain?**

Inventory Planning determines the appropriate inventory levels to support customer demand and production requirements.

There are different inventory categories:

| Inventory type | Purpose |
|---|---|
| Raw Materials (RM) | Materials used in manufacturing |
| Work-in-Process (WIP) | Products currently undergoing production |
| Finished Goods (FG) | Completed products ready for shipment |
| Safety Stock | Additional inventory maintained to protect against uncertainty |
| Pipeline Inventory | Materials or products currently in transit |

Why is inventory planning important?

Imagine na may 100,000 units na demand pero mayroon nang 20,000 usable finished goods.

Hindi kailangang gumawa agad ng 100,000 units.

However, the company must also consider whether those 20,000 units are already allocated to other customers or whether some units are defective or on quality hold.

**Inventory on hand is not automatically available inventory.**

### D. Capacity Planning

**Question: Can our production resources handle the required workload?**

Capacity Planning determines whether the available production resources can accommodate the required production volume.

Resources may include:

- Machines
- Production lines
- Equipment
- Production hours
- Available shifts
- Operators
- Manufacturing facilities

Example:

A machine can produce 500 units per hour.

If it operates for 8 hours per day for 20 working days:

\[
Capacity = 500 \times 8 \times 20
\]

\[
Capacity = 80,000\ units/month
\]

If the production requirement is 90,000 units, then:

\[
Capacity\ Gap = 90,000-80,000
\]

\[
Capacity\ Gap = 10,000\ units
\]

The company must evaluate whether it can increase capacity through overtime, additional shifts, or other alternatives.

### E. Workforce and Resource Planning

**Question: Do we have enough people and operational resources?**

Even if machines are available, production cannot operate without qualified personnel.

For example:

- Required operators: 20
- Available operators: 15
- Shortage: 5 operators

The company may need to:
- Hire additional personnel.
- Transfer employees from another production line.
- Provide overtime.
- Cross-train existing employees.

Workforce planning also considers employee skills and qualifications.

Hindi lahat ng operators ay interchangeable, especially when specialized equipment or processes are involved.

### F. Supplier Coordination

**Question: Can suppliers deliver the required materials at the required time?**

Supply Planning requires coordination with Procurement and suppliers.

For example:

A supplier has a six-week lead time.

If the company needs materials in the first week of December, the purchasing team must consider ordering sufficiently early.

Important supplier considerations:

- Supplier production capacity
- Purchase order status
- Delivery schedules
- Supplier reliability
- Material quality
- Transportation time
- Minimum order quantities

A supplier's commitment is important, but the company must distinguish between a requested delivery date and a confirmed delivery date.

### G. Distribution and Fulfillment Considerations

**Question: Once products are manufactured, can we deliver them to customers?**

Producing finished goods does not automatically mean that customer demand has been fulfilled.

The company must also consider:

- Warehouse capacity
- Available transportation
- Distribution center inventory
- Shipping schedules
- Customer delivery locations
- Export and customs requirements, when applicable

For example, the factory may produce 100,000 units, but transportation capacity may only support shipping 80,000 units within the required delivery window.

This creates a fulfillment constraint even when manufacturing capacity is sufficient.

## 4.2 How the Components Interact

Let's connect the seven components.

1. **Demand Plan:** Expected customer requirements.
2. **Inventory Planning:** Check existing inventory and inventory targets.
3. **Production Planning:** Determine production quantity and timing.
4. **Procurement Planning:** Ensure material availability.
5. **Capacity Planning:** Check machines, labor, and production hours.
6. **Supplier and Workforce Coordination:** Confirm external and internal resource availability.
7. **Distribution and Fulfillment:** Deliver products to customers.

Take note: Hindi ito strictly one-directional na process. Iterative ang actual Supply Planning.

For example:

1. Production Planning determines that 90,000 units are needed.
2. Procurement discovers that materials are only sufficient for 75,000 units.
3. Manufacturing checks whether another material source is available.
4. Capacity Planning discovers that production is limited to 80,000 units.
5. Supply Planning evaluates the combined constraints and develops alternatives.

Every component can affect the others.

## 4.3 Information Required for Supply Planning

Bago makagawa ng reliable supply plan, kailangan ng company ng accurate operational information.

| Required information | Why it is needed |
|---|---|
| Demand Plan | Determines expected customer requirements |
| Current Inventory | Identifies available materials and finished goods |
| Open Purchase Orders | Identifies incoming materials and expected receipts |
| Supplier Lead Time | Determines when materials can become available |
| Raw Material Availability | Identifies materials available for production |
| Bill of Materials (BOM) | Determines materials needed per product |
| Production Capacity | Determines maximum achievable output |
| Production Rates | Determines how quickly products can be manufactured |
| Workforce Availability | Determines available labor resources |
| Equipment Availability | Determines usable machines and equipment |
| Manufacturing Lead Time | Determines how long production takes |
| Production Yield | Determines how much good output results from production |
| Scrap Assumptions | Accounts for expected material and production losses |

Let's understand some particularly important information.

### A. Bill of Materials (BOM)

A **Bill of Materials** is a structured list of all materials and components required to manufacture a product.

Think of it as a manufacturing recipe.

Example:

| Material | Required quantity per unit |
|---|---:|
| Ceramic powder | 10 g |
| Electrode paste | 2 g |
| Packaging | 1 set |

For 10,000 finished units:

\[
Ceramic\ Powder = 10,000 \times 10g
\]

\[
=100,000g=100kg
\]

The BOM allows Supply Planning and Procurement to translate finished product requirements into material requirements.

Without an accurate BOM, incorrect ang material purchasing plan.

### B. Lead Time

**Lead Time** refers to the time required to complete a process.

Different activities have different lead times.

| Type | Example |
|---|---|
| Supplier Lead Time | 6 weeks to receive ceramic powder |
| Manufacturing Lead Time | 5 days to manufacture finished goods |
| Transportation Lead Time | 3 days to deliver to customer |

Important: Lead time affects when an activity must begin, not just how much quantity is needed.

If materials require six weeks to arrive, a shortage identified only one week before production may already be difficult to resolve.

### C. Production Yield

Production Yield measures the proportion of input or produced units that become acceptable output.

For example:

- Total units processed: 10,000
- Good units: 9,500
- Defective units: 500

\[
Yield=\frac{Good\ Output}{Total\ Input}\times100
\]

\[
Yield=\frac{9,500}{10,000}\times100
\]

\[
Yield=95\%
\]

If the customer requires 10,000 good units, producing only 10,000 units of input is insufficient when the expected yield is 95%.

Required production input:

\[
\frac{10,000}{0.95}=10,526.32
\]

Approximately 10,527 units must be processed, assuming the yield is achieved.

This is particularly important in electronic component manufacturing, where production losses and process yields can significantly affect supply availability.

### D. Current Inventory vs. Available Inventory

These are not necessarily the same.

Example:

| Inventory status | Quantity |
|---|---:|
| Physical inventory | 20,000 |
| Quality hold | 2,000 |
| Allocated to existing orders | 3,000 |
| Available inventory | 15,000 |

\[
Available\ Inventory=20,000-2,000-3,000
\]

\[
=15,000\ units
\]

This distinction is essential. Using physical inventory without considering allocation and quality status can create an unrealistic supply plan.

### E. Open Purchase Orders

An open purchase order represents materials ordered but not yet fully received.

However, hindi lahat ng open PO ay dapat ituring na immediately available supply.

Example:

| PO | Quantity | Expected arrival |
|---|---:|---|
| PO-001 | 10,000 | November 20 |
| PO-002 | 15,000 | December 15 |
| PO-003 | 8,000 | January 10 |

If the production requirement is for November, only the materials expected to arrive in November may be considered, subject to confirmed delivery and receiving requirements.

A December receipt cannot solve a November material shortage.

## 4.4 How Supply Planning Works: Step-by-Step Process

Now let's follow the actual process.

**Step 1: Review the Demand Plan**

Start with the approved or agreed demand plan.

Example:

| Product | November demand |
|---|---:|
| Product A | 50,000 |
| Product B | 30,000 |
| Product C | 20,000 |
| **Total** | **100,000** |

Determine what quantities customers are expected to require and when.

**Step 2: Check Current Inventory and Available Supply**

Review:
- Finished goods inventory
- Raw materials
- Work-in-process
- Incoming purchase orders
- Existing customer allocations

The goal is to understand what supply already exists or is expected to become available.

**Step 3: Determine Production Requirements**

Calculate how much additional production is required after accounting for beginning inventory, scheduled receipts, and desired ending inventory.

**Step 4: Evaluate Material Availability**

Check the BOM and determine whether available materials are sufficient.

Identify:
- Material shortages
- Delayed purchase orders
- Supplier constraints
- Minimum order quantities

**Step 5: Evaluate Production Capacity**

Compare required production with available capacity.

Check:
- Machine hours
- Available shifts
- Production rates
- Planned maintenance
- Labor availability
- Production yield

**Step 6: Identify Supply Constraints and Gaps**

Identify which resources prevent the company from meeting demand.

Examples:
- Insufficient raw materials
- Machine capacity shortage
- Workforce shortage
- Supplier delays

**Step 7: Develop Supply Alternatives**

Evaluate possible solutions.

For example:
- Overtime
- Additional shifts
- Alternative suppliers
- Material substitutions, if technically approved
- Outsourcing
- Inventory redistribution
- Production rescheduling

**Step 8: Prepare a Feasible Supply Plan**

Consolidate the approved production, procurement, inventory, and capacity decisions.

The plan should indicate what can be supplied, when, and using which resources.

**Step 9: Communicate Constraints and Recommendations**

Present the supply position to relevant stakeholders and management.

Do not simply report that there is a shortage.

Explain:
- What is the shortage?
- What caused it?
- What is the business impact?
- What alternatives are available?
- What decision or support is required?

## 4.5 Supply Planning Strategies

Different companies use different strategies depending on their products, demand patterns, production capabilities, and customer requirements.

### A. Make-to-Stock (MTS)

**Produce products in advance based on forecasted demand.**

Example:

An electronic components manufacturer expects demand of 100,000 units next month.

The company produces these units ahead of actual customer orders and stores them as finished goods.

Advantages:
- Faster customer fulfillment
- Products are readily available
- Production can be scheduled more efficiently

Disadvantages:
- Risk of excess inventory
- Risk of obsolete products
- Inventory holding costs

Commonly used when demand is relatively predictable and customers expect immediate availability.

### B. Make-to-Order (MTO)

**Produce products only after receiving actual customer orders.**

Example:

A customer orders 5,000 customized electronic components with specific technical requirements.

The manufacturer starts production after receiving and confirming the order.

Advantages:
- Lower finished goods inventory
- Less risk of producing unwanted products
- Better customization

Disadvantages:
- Longer customer waiting time
- Greater dependence on material availability
- Production schedule may fluctuate

Commonly used for customized products or products with highly variable demand.

### C. Level Production Strategy

**Maintain a relatively stable production rate even when demand changes.**

Example:

| Month | Demand | Planned production |
|---|---:|---:|
| January | 80,000 | 100,000 |
| February | 120,000 | 100,000 |
| March | 100,000 | 100,000 |

The company produces approximately the same quantity every month.

During January, excess production increases inventory.

During February, inventory helps cover demand exceeding current production.

Advantages:
- Stable workforce
- Predictable machine utilization
- More consistent production schedules

Disadvantages:
- Inventory may increase
- Storage costs may rise
- Requires sufficient inventory to absorb demand fluctuations

### D. Chase Demand Strategy

**Adjust production capacity to follow changes in demand.**

Example:

| Month | Demand | Planned production |
|---|---:|---:|
| January | 80,000 | 80,000 |
| February | 120,000 | 120,000 |
| March | 100,000 | 100,000 |

Production increases or decreases according to expected demand.

Advantages:
- Lower inventory accumulation
- Production aligns with demand
- Reduced risk of excess finished goods

Disadvantages:
- Requires flexible production capacity
- Workforce scheduling becomes more difficult
- Overtime and hiring costs may increase

### E. Hybrid Planning Strategy

**Combine elements of different planning strategies.**

For example:

An electronics manufacturer maintains stable base production but uses overtime during peak demand periods.

| Month | Demand | Regular production | Overtime production |
|---|---:|---:|---:|
| January | 80,000 | 90,000 | 0 |
| February | 120,000 | 90,000 | 20,000 |
| March | 100,000 | 90,000 | 10,000 |

This approach balances production stability and demand flexibility.

### Comparison of Supply Planning Strategies

| Strategy | Production approach | Inventory tendency |
|---|---|---|
| Make-to-Stock | Based on forecast | Higher FG inventory |
| Make-to-Order | Based on actual orders | Lower FG inventory |
| Level Production | Stable output | Inventory absorbs demand changes |
| Chase Demand | Output follows demand | Lower inventory, more capacity variation |
| Hybrid | Combination | Depends on the mix |

**Important distinction:** MTS and MTO describe production and fulfillment approaches, while Level, Chase, and Hybrid describe how production output is managed over time. They are related but not identical classifications.

---

# 5. Practical Examples and Applications

Now let's put everything together using a manufacturing scenario.

## 5.1 Manufacturing Scenario: Electronic Components Manufacturer

Imagine a company manufacturing multilayer ceramic capacitors (MLCC).

The company receives a monthly demand forecast from its customers.

For November, the expected customer demand is 100,000 units.

The company must determine whether it can meet this requirement.

All figures below are illustrative assumptions, not actual industry standards.

### A. Demand and Inventory Information

| Item | Quantity |
|---|---:|
| November demand | 100,000 units |
| Beginning finished goods inventory | 15,000 units |
| Scheduled finished goods receipts | 0 |
| Target ending inventory | 5,000 units |

First, calculate the required production quantity.

\[
Required\ Production =
Demand+Target\ Ending\ Inventory
-Beginning\ Inventory
\]

\[
=100,000+5,000-15,000
\]

**90,000 units required**

The company needs to produce 90,000 additional units to satisfy demand while maintaining its target ending inventory.

### B. Raw Material Availability

Assume the BOM requires the following materials per finished unit.

| Material | Requirement per unit | Available material |
|---|---:|---:|
| Ceramic powder | 10 g | 950 kg |
| Electrode material | 2 g | 190 kg |
| Packaging | 1 set | 90,000 sets |

Let's calculate whether the materials are sufficient.

For 90,000 units:

| Material | Required | Available | Result |
|---|---:|---:|---|
| Ceramic powder | 900 kg | 950 kg | Sufficient |
| Electrode material | 180 kg | 190 kg | Sufficient |
| Packaging | 90,000 sets | 90,000 sets | Sufficient |

Raw materials can support the 90,000-unit production requirement, assuming the quantities are usable, properly allocated, and available before production.

### C. Production Capacity

The company has two production lines.

| Production resource | Monthly capacity |
|---|---:|
| Production Line 1 | 45,000 units |
| Production Line 2 | 35,000 units |
| **Total capacity** | **80,000 units** |

Required production is 90,000 units.

Available capacity is only 80,000 units.

\[
Capacity\ Gap=90,000-80,000
\]

\[
=10,000\ units
\]

**10,000-unit capacity shortage**

This is the first identified constraint.

### D. Supplier Lead Time

Assume:

| Material | Supplier lead time |
|---|---:|
| Ceramic powder | 6 weeks |
| Electrode material | 4 weeks |
| Packaging | 2 weeks |

The current raw materials are sufficient for 90,000 units, but replenishment requires advance planning.

If the company discovers additional material requirements late in the planning cycle, it may not be possible to receive them before the required production date.

This is why supply planning must consider time, not just quantity.

## 5.2 Consolidated Supply Assessment

Let's summarize the situation.

| Planning factor | Required | Available | Assessment |
|---|---:|---:|---|
| Customer demand | 100,000 | 100,000 | Demand requirement |
| Beginning FG inventory | 15,000 | 15,000 | Available |
| Production requirement | 90,000 | 90,000 | Required output |
| Raw material support | 90,000 | 90,000 | Sufficient |
| Production capacity | 90,000 | 80,000 | Insufficient |

The company can produce only 80,000 units because of its production capacity constraint.

Therefore:

\[
Total\ Available\ Supply=15,000+80,000
\]

\[
=95,000\ units
\]

Potential customer fulfillment:

\[
100,000-95,000=5,000
\]

The company faces a potential 5,000-unit customer shortage.

It will also finish with zero inventory, which is below its desired 5,000-unit ending inventory.

The total gap against the plan is therefore:

\[
5,000\ Customer\ Shortage+5,000\ Inventory\ Shortfall
\]

\[
=10,000\ units
\]

This distinction is important.

**A company can meet customer demand but still fail to achieve its inventory target. Conversely, it can have an inventory target shortfall and a customer service shortfall at the same time.**

## 5.3 What Can the Company Do?

Let's evaluate possible alternatives.

| Alternative | Potential solution | Consideration |
|---|---|---|
| Overtime | Produce additional 10,000 units | Higher labor and operating costs |
| Additional shift | Increase production hours | Workforce and machine availability |
| Transfer production | Use another facility | Logistics and coordination |
| Subcontracting | Outsource some production | Quality and supplier capability |
| Reallocate inventory | Move available stock from another location | May affect other customers |
| Reschedule demand | Negotiate later delivery for some orders | Customer service impact |

Suppose the company approves 10,000 additional units through overtime.

The revised production plan becomes:

| Production source | Quantity |
|---|---:|
| Regular production | 80,000 |
| Overtime production | 10,000 |
| **Total production** | **90,000** |

The revised total supply:

\[
15,000+90,000=105,000
\]

After fulfilling 100,000 units of demand:

\[
Ending\ Inventory=105,000-100,000
\]

\[
=5,000\ units
\]

**Target achieved**

Now the supply plan can meet both customer demand and the ending inventory target.

However, it is only feasible if:
- Overtime is approved.
- Equipment can support the additional output.
- Operators are available.
- Materials are sufficient.
- The additional production can be completed before the required dates.

This is the essence of Supply Planning: identifying what is needed, determining what is possible, and evaluating how to close the gap.

---

# 6. Formulas and Calculations

Now let's organize the important calculations that an S&OP Analyst may encounter when evaluating a supply plan.

Hindi lahat ng calculations ay required sa bawat company. Depende ito sa planning system, manufacturing process, and level of planning.

But these are useful fundamentals.

## 6.1 Net Production Requirement

Determines how much additional production is required after considering existing inventory and incoming supply.

\[
NPR=D+EI-BI-SR
\]

Where:

| Variable | Meaning | Unit |
|---|---|---|
| NPR | Net Production Requirement | Units |
| D | Demand | Units |
| EI | Target Ending Inventory | Units |
| BI | Beginning Inventory | Units |
| SR | Scheduled Receipts | Units |

**Example:**

- Demand = 50,000
- Target ending inventory = 5,000
- Beginning inventory = 10,000
- Scheduled receipts = 5,000

\[
NPR=50,000+5,000-10,000-5,000
\]

\[
\boxed{NPR=40,000\ units}
\]

Interpretation: The company needs to produce 40,000 additional units to satisfy demand and achieve its inventory target.

Note: Scheduled receipts must be valid, usable, and available within the relevant planning period.

## 6.2 Available Supply

Determines the quantity of supply potentially available to fulfill demand.

\[
Available\ Supply=Beginning\ Inventory+Receipts+Production
\]

Example:

- Beginning inventory = 10,000
- Scheduled receipts = 5,000
- Planned production = 40,000

\[
Available\ Supply=10,000+5,000+40,000
\]

\[
\boxed{55,000\ units}
\]

If demand is 50,000 units:

\[
Ending\ Inventory=55,000-50,000
\]

\[
=5,000\ units
\]

## 6.3 Supply Gap

Measures the difference between the required supply and achievable supply.

\[
Supply\ Gap=Required\ Supply-Available\ Supply
\]

Example:

- Required supply = 100,000 units
- Available supply = 85,000 units

\[
Supply\ Gap=100,000-85,000
\]

\[
\boxed{15,000\ units}
\]

A positive result indicates a shortage.

A negative result indicates that available supply exceeds the requirement, assuming both figures use the same definition and planning period.

## 6.4 Capacity Utilization

Measures how much of the available production capacity is being used.

\[
Capacity\ Utilization=
\frac{Planned\ Production}{Available\ Capacity}\times100
\]

Example:

- Planned production = 75,000
- Available capacity = 100,000

\[
=\frac{75,000}{100,000}\times100
\]

\[
\boxed{75\%}
\]

Interpretation:

The company plans to use 75% of its available capacity.

If planned production is 110,000 and capacity is 100,000:

\[
Utilization=110\%
\]

This indicates that the production plan exceeds the available capacity by 10%.

The company must investigate whether additional capacity is possible.

## 6.5 Production Yield and Required Input

As discussed earlier, production yield affects the quantity of input needed to achieve the required good output.

\[
Yield=\frac{Good\ Output}{Total\ Input}\times100
\]

To calculate required input:

\[
Required\ Input=\frac{Required\ Good\ Output}{Yield}
\]

*Use yield as a decimal in the second formula.*

Example:

- Required good output = 20,000 units
- Expected yield = 95%

\[
Required\ Input=\frac{20,000}{0.95}
\]

\[
\boxed{21,052.63\ units}
\]

Approximately 21,053 units must be processed.

## 6.6 Material Requirements Using BOM

For a basic single-level BOM:

\[
Material\ Requirement=
Production\ Quantity\times BOM\ Usage
\]

Example:

- Production requirement = 50,000 units
- Ceramic powder requirement = 10 grams per unit

\[
=50,000\times10
\]

\[
=500,000g=500kg
\]

If there is an allowance for scrap or material loss, the calculation may need to account for that separately.

## 6.7 Production Capacity

A basic capacity formula is:

\[
Capacity=Production\ Rate\times Available\ Hours
\]

Example:

- Production rate = 500 units/hour
- Operating time = 8 hours/day
- Working days = 20

\[
Capacity=500\times8\times20
\]

\[
\boxed{80,000\ units}
\]

For real manufacturing operations, usable capacity may need to account for downtime, changeovers, maintenance, and operating efficiency.

### Important: The formulas are connected.

Let's look at the complete calculation sequence:

1. **Determine demand:** Customer requirement = 100,000 units.
2. **Calculate net production requirement:** Demand + target ending inventory - beginning inventory - scheduled receipts.
3. **Calculate material requirements:** Production quantity × BOM usage, adjusted for applicable yield and scrap assumptions.
4. **Check available materials:** Compare required materials against available and scheduled receipts.
5. **Calculate production capacity:** Production rate × available operating hours.
6. **Determine supply gap:** Compare required supply with achievable supply.
7. **Evaluate alternatives:** Overtime, additional shifts, procurement changes, or rescheduling.

---

# 7. Business Perspective and Decision-Making

Now let's move beyond calculations.

An S&OP Analyst must understand what the numbers mean and how they affect business decisions.

## 7.1 What does an S&OP Analyst actually do in Supply Planning?

Hindi necessarily ikaw ang magde-decide kung ilang machines ang gagamitin or kung ilang operators ang kailangan.

Your responsibility is to analyze the information, identify inconsistencies, evaluate risks, and support decision-making.

Here are the important activities.

### A. Review Supply Information

You collect and analyze information from different departments.

| Department | Information |
|---|---|
| Sales | Demand forecast and customer requirements |
| Manufacturing | Production plan and capacity |
| Procurement | Material availability and supplier commitments |
| Warehouse | Inventory levels |
| Engineering | BOM and product specifications |
| Finance | Production costs and financial implications |
| Logistics | Transportation and delivery constraints |

Your responsibility is to ensure that these inputs are consistent.

### B. Identify Supply Gaps

Suppose the demand plan shows:

| Month | Demand | Supply |
|---|---:|---:|
| November | 100,000 | 100,000 |
| December | 130,000 | 110,000 |
| January | 120,000 | 120,000 |

December has a 20,000-unit supply gap.

Your job is not simply to report the gap.

You should investigate:

- Why is supply insufficient?
- Is it a material constraint?
- Is it a capacity constraint?
- Is it caused by supplier lead time?
- Is the demand increase temporary or sustained?
- What happens if the gap is not resolved?

### C. Question Unrealistic Assumptions

For example, Manufacturing submits a plan indicating 120,000 units of production.

However:

- Available capacity = 100,000 units
- Available raw materials = 110,000 units
- Available workforce = 105,000-unit equivalent capacity

You should question the 120,000-unit production assumption.

A plan should not be accepted simply because it appears in a spreadsheet.

You need supporting operational evidence.

### D. Evaluate Supply Alternatives

Suppose there is a 20,000-unit capacity shortage.

You evaluate:

| Alternative | Additional capacity | Estimated impact |
|---|---:|---|
| Overtime | 5,000 | Higher labor costs |
| Additional shift | 10,000 | Additional operating costs |
| Subcontracting | 10,000 | External manufacturing cost |
| Rescheduling | Depends on available time | Possible delivery delays |

These are illustrative alternatives. Actual quantities and costs must be validated with the relevant departments.

### E. Communicate Recommendations

An effective S&OP Analyst presents information in a decision-oriented manner.

**Weak reporting:**

"December has a production shortage of 20,000 units."

**Better reporting:**

"December demand is projected at 130,000 units, while the current feasible supply plan supports only 110,000 units. The 20,000-unit gap is primarily driven by production capacity limitations. Manufacturing has identified 10,000 units of potential additional output through an extra shift, while the remaining 10,000 units may require overtime or subcontracting. Management approval is required to determine the preferred solution."

Notice the difference.

The second statement provides:
- The problem
- The magnitude
- The cause
- The alternatives
- The required decision

This is the kind of thinking expected from an S&OP Analyst.

## 7.2 Supply Planning and the S&OP Process

Let's connect everything to the broader S&OP cycle.

Supply Planning contributes primarily to the **Supply Review**.

The Supply Review evaluates whether the organization can fulfill the demand plan.

Typical activities include:

1. Review the demand plan.
2. Evaluate inventory and production plans.
3. Review material availability.
4. Assess capacity and resource constraints.
5. Identify supply risks.
6. Develop alternatives.
7. Prepare recommendations for the next stage of S&OP.

The output is a proposed supply plan and a clear understanding of the constraints.

### How Demand and Supply Are Reconciled

Imagine this situation:

| Item | Quantity |
|---|---:|
| Consensus demand | 100,000 |
| Available supply | 85,000 |
| Supply gap | 15,000 |

The Supply Review identifies a 15,000-unit gap.

The organization evaluates several options:

- Can Manufacturing increase output?
- Can Procurement expedite materials?
- Can another facility support production?
- Can inventory be transferred?
- Can some customer deliveries be rescheduled?

These alternatives are evaluated based on operational and financial impact.

The results are then brought into the broader management discussion, commonly through the Pre-S&OP and Executive S&OP stages, depending on the company's process.

## 7.3 Operational Feasibility vs. Financial Feasibility

This is an important professional distinction.

**Operational feasibility:** Can the company physically execute the plan?

**Financial feasibility:** Does the plan make reasonable business and financial sense?

Example:

The company can produce an additional 20,000 units by implementing three additional shifts.

Operationally, possible siya.

However, suppose the additional production cost is ₱500,000, while the potential contribution from the additional sales is only ₱300,000.

The option may not be financially attractive, although the exact decision would also consider customer commitments, penalties, strategic accounts, and other business impacts.

Therefore, the company must evaluate both dimensions.

A supply plan should not simply maximize production. It should support the overall business objectives.

---

# 8. Key Takeaways

Let's consolidate the most important concepts from Topic 4.1.

## 8.1 Fundamental Understanding

1. **Supply Planning** determines how a company will meet expected customer demand using available and planned resources.
2. **Demand Planning** identifies what customers are expected to require.
3. **Supply Planning** determines how the company can fulfill those requirements.
4. Customer demand is not automatically equal to production requirements because existing inventory, scheduled receipts, and inventory targets must be considered.
5. A feasible supply plan must account for materials, capacity, workforce, equipment, timing, and other operational constraints.

## 8.2 Technical Understanding

| Concept | What you should remember |
|---|---|
| Production Planning | Determines production quantities and timing |
| Procurement Planning | Ensures materials are available |
| Inventory Planning | Balances inventory availability and targets |
| Capacity Planning | Evaluates production capability |
| BOM | Identifies materials required per product |
| Lead Time | Determines when materials or products become available |
| Yield | Accounts for the proportion of good output |
| Supply Gap | Identifies the difference between required and achievable supply |
| Feasible Supply Plan | A plan that can realistically be executed |

## 8.3 Professional Understanding

As an S&OP Analyst, remember these three principles:

**Principle 1: Demand is a requirement, not a guarantee of supply.**

The demand plan tells you what is expected. It does not prove that the company can deliver it.

**Principle 2: Supply planning is cross-functional.**

Manufacturing, Procurement, Warehouse, Engineering, Logistics, and Finance must provide aligned information.

**Principle 3: Identifying a problem is not enough.**

You must quantify the impact, understand the root cause, evaluate alternatives, and communicate recommendations.

---

# 9. Knowledge Check and Exercises

**Your turn: Apply what you learned**

Now let's test your understanding.

We will progress through three learning levels. Huwag munang mag-research or tingnan ang previous explanations habang sumasagot. I want to see how you understand the concepts in your own words.

You don't need perfect professional terminology yet. Mas importante ang reasoning mo.

## Level 1 – Understanding

**Question 1.** Explain the difference between Demand Planning and Supply Planning using your own words. Give a manufacturing example.

**Question 2.** A company receives a forecast of 50,000 units for next month. Does this automatically mean that Manufacturing must produce 50,000 units? Explain why or why not.

**Question 3.** What does it mean when a supply plan is feasible?

**Question 4.** Why is Supply Planning considered a cross-functional activity rather than the responsibility of Manufacturing alone?

## Level 2 – Technical Application

### Exercise 1: Production Requirement

A manufacturer has the following information:

| Item | Quantity |
|---|---:|
| Monthly demand | 80,000 units |
| Beginning inventory | 15,000 units |
| Scheduled receipts | 5,000 units |
| Target ending inventory | 10,000 units |

Calculate:

1. Net production requirement.
2. Total supply after production.
3. Expected ending inventory.

Show your calculations.

### Exercise 2: Capacity Assessment

A production line has:

- Production rate: 400 units/hour
- Operating hours: 8 hours/day
- Working days: 22 days/month
- Required production: 80,000 units

Calculate:

1. Monthly production capacity.
2. Capacity utilization.
3. Is the production requirement achievable under the stated capacity assumptions?
4. How many additional units of capacity would be required, if any?

### Exercise 3: Material Availability

A company needs to produce 50,000 units.

Its BOM requires 12 grams of ceramic powder per finished unit.

Available ceramic powder is 550 kg.

Calculate:

1. Total material requirement.
2. Material surplus or shortage.
3. Can the company manufacture the required quantity based on ceramic powder availability alone?

Assume 100% usable material for this exercise.

## Level 3 – Professional Analysis

### Exercise 4: Supply Planning Business Case

You are an S&OP Analyst supporting an electronic components manufacturer.

The December demand plan is 120,000 units.

The supply information is:

| Planning factor | Quantity |
|---|---:|
| Customer demand | 120,000 |
| Beginning finished goods inventory | 20,000 |
| Target ending inventory | 10,000 |
| Scheduled finished goods receipts | 0 |
| Production capacity | 85,000 |
| Raw materials available | Sufficient for 100,000 units of production |

Answer the following:

1. How much production is required?
2. What is the maximum achievable production under the current constraints?
3. What is the total available supply?
4. Can the company meet the customer demand?
5. Can the company achieve its target ending inventory?
6. What is the primary supply constraint?
7. Recommend at least two alternatives to address the shortage.
8. Which alternative would you recommend, and why?

### Exercise 5: Management Communication

Imagine that you need to present the situation from Exercise 4 to your management team.

Write a short business update containing:

- Demand situation
- Supply capability
- Identified gap
- Root cause
- Recommended action

Think of this as a real S&OP Supply Review presentation.

## How I will evaluate your answers

| Assessment area | What I will look for |
|---|---|
| Conceptual understanding | Correct understanding of Supply Planning |
| Technical accuracy | Correct formulas and calculations |
| Analytical reasoning | Ability to identify constraints and implications |
| Business judgment | Practicality of recommendations |
| Communication | Clear, structured, decision-oriented explanation |

I will identify which parts you understood correctly, correct any misconceptions, and explain how to improve your answers using professional S&OP terminology.

**My recommendation:** Answer the exercises in sequence, starting with Level 1. Hindi kailangang sagutan lahat in one sitting.

Once we finish evaluating your answers, we can consolidate your learning before moving to Topic 4.2. We will stay within Topic 4.1 until you confirm that you're ready to proceed.
