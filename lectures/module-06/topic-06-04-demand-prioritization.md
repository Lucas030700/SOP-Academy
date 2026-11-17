# Module 6 – Topic 6.4: Demand Prioritization

**Main learning objective:** Understand how a company decides which customer orders should receive available supply first when there is not enough inventory or production capacity to satisfy everyone.

---

# 1. Topic Overview

## 1.1 What are we going to discuss?

Imagine that a manufacturing company receives orders from five different customers.

- Customer A needs 10,000 units.
- Customer B needs 8,000 units.
- Customer C needs 15,000 units.
- Customer D needs 5,000 units.
- Customer E needs 12,000 units.

Total customer demand:

\[
10,000+8,000+15,000+5,000+12,000=50,000
\]

However, the company only has 30,000 units available.

### The supply-demand situation

| Measure | Quantity |
|---|---:|
| Total customer demand | 50,000 units |
| Available supply | 30,000 units |
| Supply coverage | 60% |
| Shortage | 20,000 units |

The company cannot fulfill all customer orders.

Now, the important question:

**Who should receive the available 30,000 units?**

Should the company:
- Fulfill the earliest orders first?
- Prioritize its biggest customers?
- Prioritize customers generating the highest revenue?
- Distribute supply proportionally among everyone?
- Prioritize customers with contractual commitments?

This is where **Demand Prioritization** becomes important.

## 1.2 Why is this important in S&OP?

In actual manufacturing, supply is not always sufficient because of:

- Raw material shortages.
- Production equipment breakdowns.
- Insufficient production capacity.
- Unexpected increases in customer demand.
- Supplier delivery delays.
- Quality problems and production yield losses.
- Inventory shortages.

Kapag nangyari ang mga ito, hindi sapat na malaman lang ng company kung gaano kalaki ang shortage.

Kailangan din nitong magdesisyon kung paano gagamitin ang limited resources.

The company must balance three important considerations:

1. **Customer commitments:** Sino ang may pinakamahalagang delivery obligation?
2. **Business performance:** Aling allocation decision ang may pinakamagandang financial impact?
3. **Operational feasibility:** Kaya ba talagang gawin at i-deliver ng Operations ang napagkasunduang allocation?

## 1.3 Connection to previous and succeeding topics

Let's connect Topic 6.2, 6.3, 6.4, and 6.5.

| Topic | Focus | Main question |
|---|---|---|
| 6.2 – Identifying Supply Gaps | Identify the difference between demand and available supply | How much supply are we missing? |
| 6.3 – Supply-Demand Balancing Strategies | Identify possible solutions to address shortages or excess supply | How can we close the supply-demand gap? |
| **6.4 – Demand Prioritization** | Determine which customers, orders, and products should receive available supply | Given our limited supply, who gets what? |
| 6.5 – Scenario Planning | Evaluate alternative business scenarios and their possible outcomes | What happens if we choose a different allocation or supply strategy? |

**Important distinction:** Topic 6.3 identifies strategies to balance supply and demand. Topic 6.4 determines how available supply should be distributed when a shortage cannot immediately be eliminated.

---

# 2. Layman's Explanation

## 2.1 Understanding Demand Prioritization

Let's use a simple example.

Imagine you own a bakery.

Every morning, five customers order bread, but your bakery can only produce 100 pieces.

| Customer | Order quantity |
|---|---:|
| A | 40 |
| B | 30 |
| C | 25 |
| D | 20 |
| E | 15 |
| **Total** | **130** |

Your production capacity is only 100 pieces.

You are short by 30 pieces.

Now, how will you distribute the 100 pieces?

**Option A: First come, first served**

Unahin mo yung unang nag-order hanggang maubos ang available bread.

**Option B: Customer importance**

Unahin mo yung customers na may long-term contracts or strategic importance.

**Option C: Equal treatment**

Try mong bigyan lahat ng customers ng fair share based on their requested quantities.

**Option D: Financial priority**

Unahin mo yung customers na nagbibigay ng pinakamalaking contribution sa business.

Notice something?

The same 100 pieces can be distributed differently depending on the allocation rule.

Walang automatic na universally correct method. The best method depends on company policy, contractual obligations, operational realities, and business objectives.

## 2.2 Why can't all customers receive equal priority?

Sa ideal situation, gusto ng company na lahat ng customers ay satisfied.

But in reality, there are competing requirements.

For example:

- Customer A has a contractual delivery commitment tomorrow.
- Customer B generates 40% of the company's revenue.
- Customer C has a small order but requires the product for a critical application.
- Customer D is a new customer with strong growth potential.
- Customer E placed the earliest order.

All five customers have valid business reasons for requesting priority.

However, the company has limited supply.

Therefore, **demand prioritization is a decision-making process involving trade-offs.**

Kapag binigyan mo ng additional supply ang isang customer, maaaring mabawasan ang supply na available para sa iba.

This is called an *allocation trade-off*.

## 2.3 Three concepts you must distinguish

These three terms are related but have different purposes.

| Concept | Simple meaning | Main question |
|---|---|---|
| Demand Prioritization | Pagdedesisyon kung sino ang uunahin | Who gets priority? |
| Order Allocation | Pagdedesisyon kung gaano karaming units ang ibibigay | How much does each receive? |
| Demand Management | Pag-influence or adjustment of customer demand | Can demand be changed? |

Let's examine them.

**A. Demand Prioritization**

You decide that Customer A and Customer B should receive priority because of their contractual commitments.

**B. Order Allocation**

You decide that Customer A receives 8,000 units and Customer B receives 6,000 units.

**C. Demand Management**

You coordinate with Customer C to move its requested delivery date from this week to next week.

The three concepts can work together.

For example:

1. Prioritize Customer A because of a contractual obligation.
2. Allocate 8,000 units to Customer A.
3. Negotiate with Customer C to defer part of its order.

**Remember this distinction:**

Prioritization determines the order of importance.

Allocation determines the quantity distributed.

Demand management changes or influences the demand requirement.

---

# 3. Technical Explanation

## 3.1 Formal Definition

**Demand Prioritization** is the structured process of ranking customer demand, sales orders, products, or markets according to predefined business and operational criteria to determine how limited supply, inventory, and production capacity should be assigned.

In an S&OP environment, it ensures that constrained resources are directed toward demand with the highest overall business value while considering customer commitments, financial impact, and operational feasibility.

There are four important elements:

| Element | Explanation |
|---|---|
| Constrained resources | Limited inventory, materials, or production capacity |
| Demand requirements | Customer orders and forecast requirements |
| Prioritization criteria | Rules used to determine importance |
| Allocation decision | Final quantity assigned to each requirement |

## 3.2 Supply Constraints and Customer Commitments

A supply constraint occurs when the company cannot produce, procure, or deliver enough products to meet all expected demand within the required period.

For example, a factory receives orders for 50,000 units in November, but available supply is only 30,000 units.

The company has a 20,000-unit supply gap.

However, not every unit of demand has the same business implications.

Consider:

| Customer | Demand | Required delivery |
|---|---:|---|
| A | 10,000 | November 18 |
| B | 8,000 | November 20 |
| C | 15,000 | November 25 |
| D | 5,000 | November 28 |
| E | 12,000 | November 30 |

Suppose today is November 16.

Customer A has the earliest delivery requirement, but Customer B might have a more important contractual obligation.

This illustrates why requested delivery dates alone cannot always determine allocation priority.

The company must evaluate the complete business situation.

## 3.3 Different levels of prioritization

Demand can be prioritized at different levels.

**1. Customer-level prioritization**

Which customer receives priority?

Example: Strategic customers versus standard customers.

**2. Order-level prioritization**

Which specific sales orders should be fulfilled first?

Example: An order due tomorrow versus an order due next week.

**3. Product-level prioritization**

Which products should receive limited production capacity?

Example: High-demand products versus low-volume products.

**4. Market-level prioritization**

Which geographical markets or business segments should receive available supply?

Example: Domestic market versus export market.

These levels can interact. A company might prioritize a strategic customer, but only for a specific critical product or contractual order.

---

# 4. Detailed Discussion: Demand Prioritization Criteria

Hindi dapat basta pumili ang company ng customer na unang bibigyan ng supply. Kailangan may established criteria para consistent, transparent, and defensible ang decision.

Let's discuss seven major criteria.

## 4.1 Customer Importance and Strategic Value

Some customers are more strategically important to the company.

Examples:

- Long-term business partners.
- Customers with significant annual purchase volumes.
- Key accounts with long-term growth potential.
- Customers supporting important business relationships.
- Customers with significant influence in the market.

**Example:**

Customer A purchases 100,000 units annually, while Customer B purchases only 5,000 units.

If the company is experiencing a shortage, Customer A might receive higher priority because of its strategic importance.

However, this does not automatically mean Customer A should receive all available supply.

A smaller customer may have a critical contractual commitment that must also be considered.

## 4.2 Order Priority and Requested Delivery Dates

The company must consider when the customer needs the product.

Important information includes:

- Order creation date.
- Requested delivery date.
- Confirmed delivery date.
- Customer's required delivery window.
- Current order status.

Example:

| Customer | Order date | Requested delivery |
|---|---|---|
| A | Nov 10 | Nov 18 |
| B | Nov 12 | Nov 20 |
| C | Nov 8 | Nov 28 |

Customer C placed the order first, but Customer A requires earlier delivery.

This introduces an important distinction:

**Order age is not necessarily the same as delivery urgency.**

An old order may have a later requested delivery date, while a new order may have an urgent delivery requirement.

## 4.3 Revenue and Profitability

Not all orders contribute the same financial value.

Consider:

| Customer | Order quantity | Selling price/unit | Revenue |
|---|---:|---:|---:|
| A | 10,000 | ₱100 | ₱1,000,000 |
| B | 10,000 | ₱150 | ₱1,500,000 |

Both customers have the same order quantity.

However, Customer B generates higher revenue.

If supply is limited, the company may consider prioritizing Customer B.

But there is a catch.

**Revenue is not the same as profitability.**

Example:

| Customer | Selling price | Variable cost | Contribution/unit |
|---|---:|---:|---:|
| A | ₱100 | ₱60 | ₱40 |
| B | ₱150 | ₱125 | ₱25 |

Customer B generates more revenue per unit, but Customer A generates higher contribution per unit.

This is why Finance should help evaluate allocation decisions.

## 4.4 Customer Service Agreements and Contractual Obligations

Some customers have formal agreements specifying:

- Minimum supply quantities.
- Delivery schedules.
- Service-level requirements.
- Contractual lead times.
- Penalties for late delivery.
- Special allocation rights during supply shortages.

For example:

Customer A has a contract requiring delivery of at least 8,000 units every month.

If the company fails to fulfill this commitment, it may incur penalties or damage the business relationship.

Therefore, contractual obligations can be a strong prioritization criterion.

However, the company must review the actual contract. Hindi lahat ng customer agreement ay nagbibigay ng automatic priority during shortages.

## 4.5 Product Criticality and Market Requirements

Some products are more critical than others.

Examples:

- Products needed for essential customer operations.
- Components required to complete an entire assembly.
- Products supporting important market launches.
- Products with limited substitutes.
- Products required for safety-critical or regulated applications.

Imagine a customer needs 1,000 components to complete 1,000 finished products.

The manufacturer can only supply 800 components.

If it delivers 400 components each to two production lines, neither line may complete its intended production quantity.

If it supplies all 800 to one production line, that line may complete 800 finished products.

This illustrates why product criticality and downstream operational impact matter.

## 4.6 Order Size and Urgency

Large orders can have significant business impact.

But large orders should not automatically receive priority.

Consider:

- Customer A requests 20,000 units next month.
- Customer B requests 2,000 units tomorrow.

Customer B may deserve higher priority because its order is more urgent.

Likewise, a large order may need to be split across multiple deliveries.

The company must evaluate quantity, urgency, and delivery feasibility together.

## 4.7 Business Impact

This criterion looks at the consequences of fulfilling or not fulfilling an order.

Potential consequences include:

- Lost sales.
- Production stoppage at the customer's facility.
- Contractual penalties.
- Loss of market share.
- Customer dissatisfaction.
- Disruption of downstream operations.
- Excessive logistics costs.

For example, a customer might have an order worth only ₱100,000, but failing to deliver it could stop a production line worth millions of pesos.

Its operational importance may be greater than its direct revenue contribution.

### Why using only one criterion is dangerous

| Single criterion | Potential problem |
|---|---|
| Highest revenue | May ignore profitability |
| Largest customer | May neglect smaller contractual customers |
| Earliest order | May ignore urgent delivery requirements |
| Highest profit | May violate customer agreements |
| Largest order | May create excessive concentration of supply |
| Earliest delivery date | May ignore strategic or contractual importance |

**Professional principle:** Demand prioritization should use multiple criteria, with mandatory contractual and operational requirements considered before discretionary commercial preferences.

---

# 5. Demand Allocation Strategies

Now let's move from determining who is important to determining exactly how much supply each customer receives.

There are several allocation methodologies used in supply-constrained environments.

## 5.1 First-In, First-Out (FIFO)

FIFO means First-In, First-Out.

The earliest eligible order receives supply first.

Parang pila sa cashier. Kung sino ang naunang pumila, siya ang unang aasikasuhin.

**Example:**

Available supply = 10,000 units.

| Customer | Order quantity | Order date |
|---|---:|---|
| A | 6,000 | Nov 1 |
| B | 5,000 | Nov 3 |
| C | 4,000 | Nov 5 |

Allocation:

| Customer | Demand | Allocated | Unfulfilled |
|---|---:|---:|---:|
| A | 6,000 | 6,000 | 0 |
| B | 5,000 | 4,000 | 1,000 |
| C | 4,000 | 0 | 4,000 |
| **Total** | **15,000** | **10,000** | **5,000** |

**Advantages:**
- Simple and easy to implement.
- Transparent and objective.
- Suitable when order age is an accepted priority rule.

**Limitations:**
- Does not automatically consider profitability.
- May neglect urgent orders placed later.
- May disadvantage strategic customers.

**Appropriate when:** The company follows a first-come-first-served policy and orders have comparable business importance.

## 5.2 Customer-Based Allocation

This method distributes supply according to customer importance or customer-specific agreements.

For example, the company might establish these priority tiers:

| Tier | Customer classification | Allocation priority |
|---|---|---|
| Tier 1 | Strategic accounts | Highest |
| Tier 2 | Contractual accounts | High |
| Tier 3 | Standard accounts | Normal |
| Tier 4 | Spot-market customers | Lower |

Suppose available supply is 10,000 units.

- Tier 1 receives its approved requirement first.
- Tier 2 receives the remaining eligible supply.
- Lower tiers receive supply afterward.

**Advantages:**
- Protects strategic business relationships.
- Supports customer retention.
- Can honor negotiated customer agreements.

**Limitations:**
- Smaller customers may consistently receive less supply.
- Customer classifications may become outdated.
- Requires clear governance and management approval.

**Appropriate when:** The company has established strategic account classifications or customer-specific supply commitments.

## 5.3 Proportional Allocation

Proportional allocation distributes available supply based on each customer's share of total demand.

Instead of giving everything to one customer, everyone receives a portion.

**Formula:**

\[
Allocation_i =
\frac{Demand_i}{Total\ Demand}
\times Available\ Supply
\]

Example:

Available supply = 10,000 units.

| Customer | Demand | Demand share | Allocation |
|---|---:|---:|---:|
| A | 6,000 | 40% | 4,000 |
| B | 5,000 | 33.33% | 3,333 |
| C | 4,000 | 26.67% | 2,667 |
| **Total** | **15,000** | **100%** | **10,000** |

The allocation preserves each customer's relative share of total demand.

**Advantages:**
- Provides relatively balanced treatment.
- Reduces the risk of completely depriving customers.
- Easy to calculate and explain.

**Limitations:**
- May not satisfy any customer's complete requirement.
- May be unsuitable for customers needing minimum shipment quantities.
- May ignore contractual and strategic differences.

**Appropriate when:** Customers have comparable priority and the company wants to distribute shortages proportionally.

## 5.4 Priority-Based Allocation

This approach ranks orders using predefined priority rules or a weighted scoring system.

For example:

| Criteria | Weight |
|---|---:|
| Contractual obligation | 30% |
| Delivery urgency | 25% |
| Strategic importance | 20% |
| Contribution margin | 15% |
| Business impact | 10% |
| **Total** | **100%** |

Each customer receives a score from 1 to 5 for each criterion.

The weighted score is:

\[
Score_i = \sum (Weight_j \times Rating_{ij})
\]

Example:

Customer A has the following ratings:

| Criteria | Weight | Rating | Weighted score |
|---|---:|---:|---:|
| Contractual obligation | 30% | 5 | 1.50 |
| Delivery urgency | 25% | 4 | 1.00 |
| Strategic importance | 20% | 5 | 1.00 |
| Contribution margin | 15% | 3 | 0.45 |
| Business impact | 10% | 4 | 0.40 |
| **Total** | **100%** | | **4.35/5.00** |

A higher score indicates higher priority under this particular scoring model.

**Important:** These weights are illustrative assumptions, not universal industry standards.

Also, a scoring model should not override mandatory contractual commitments or other hard constraints. Those should be checked separately.

**Advantages:**
- Considers multiple business factors.
- Makes decisions more structured.
- Allows comparison between customers and orders.

**Limitations:**
- Weight selection can be subjective.
- Poor data can produce misleading rankings.
- Requires management agreement.

**Appropriate when:** Several competing business considerations must be evaluated systematically.

## 5.5 Product or Market-Based Allocation

This method prioritizes certain products, product families, or geographical markets.

Example:

A manufacturer produces three product families:

| Product | Demand | Business classification |
|---|---:|---|
| P1 | 10,000 | High-priority product |
| P2 | 8,000 | Standard product |
| P3 | 7,000 | Low-priority product |

If the company has only 15,000 units of available production capacity, it may prioritize P1 before P2 and P3.

A similar approach can be used for geographical markets.

For example:
- Domestic market.
- North American market.
- European market.
- Asia-Pacific market.

**Advantages:**
- Supports product and market strategies.
- Can protect critical product launches.
- Helps manage constrained manufacturing resources.

**Limitations:**
- Customer requirements within the same market may differ.
- May create shortages in lower-priority product families.
- Requires coordination between Sales, Product Management, and Operations.

**Appropriate when:** Product portfolio strategy or market-specific obligations influence business priorities.

## 5.6 Fair-Share Allocation

Fair-share allocation distributes limited supply according to an agreed fairness rule.

It is related to proportional allocation, but the basis of fairness may differ.

For example, a company may allocate supply based on each customer's historical average consumption instead of current orders.

Suppose:

| Customer | Historical average demand |
|---|---:|
| A | 40% |
| B | 35% |
| C | 25% |

Available supply = 10,000 units.

| Customer | Fair-share percentage | Allocation |
|---|---:|---:|
| A | 40% | 4,000 |
| B | 35% | 3,500 |
| C | 25% | 2,500 |
| **Total** | **100%** | **10,000** |

The difference is that proportional allocation generally uses current demand, while fair-share allocation may use historical consumption, agreed customer shares, or another fairness basis.

**Advantages:**
- Helps maintain stable customer relationships.
- Reduces sudden changes in customer supply shares.
- Useful when historical demand patterns are reliable.

**Limitations:**
- Historical consumption may not reflect current demand.
- New customers may receive little or no allocation.
- Historical shares can perpetuate outdated business priorities.

**Appropriate when:** The company wants to preserve agreed customer supply shares during a temporary shortage.

## 5.7 Comparison of allocation strategies

| Method | Main allocation basis | Main limitation |
|---|---|---|
| FIFO | Order arrival | Ignores business differences |
| Customer-based | Customer importance | Can disadvantage smaller accounts |
| Proportional | Current demand share | May not satisfy critical orders |
| Priority-based | Weighted criteria or ranking | Subjective scoring |
| Product/market-based | Product or market strategy | Can neglect individual customer needs |
| Fair-share | Historical or agreed share | May not reflect current demand |

**Very important:** A company does not necessarily use only one method.

In actual S&OP, companies often combine approaches.

For example:

1. Protect contractual commitments.
2. Reserve supply for critical products.
3. Allocate remaining supply proportionally among eligible customers.

This is called a hybrid allocation approach.

---

# 6. Demand Prioritization Process

Let's understand how an S&OP team actually performs demand prioritization.

## End-to-end allocation workflow

1. **Identify constrained supply.** Determine how much inventory and production capacity is available. Output: confirmed available supply.
2. **Consolidate customer and product requirements.** Collect open orders, forecast demand, requested delivery dates, and customer commitments. Output: consolidated demand requirements.
3. **Establish prioritization criteria.** Define customer importance, contractual obligations, urgency, profitability, and product criticality. Output: approved prioritization rules.
4. **Allocate available supply.** Apply the agreed allocation methodology and check operational feasibility. Output: customer-level allocation plan.
5. **Communicate allocation decisions.** Inform Sales, customers, Operations, and other relevant stakeholders. Output: confirmed delivery commitments.
6. **Manage deferred, delayed, and unfulfilled orders.** Track backlog, revised delivery dates, recovery plans, and future supply availability. Output: updated backlog and recovery plan.

## 6.1 Step 1: Identifying Constrained Supply

First, determine how much supply can actually be allocated.

Do not assume that total inventory equals available supply.

Some inventory may already be committed to existing orders or unavailable because of quality restrictions.

You need to distinguish:

- Physical inventory.
- Reserved inventory.
- Quality-hold inventory.
- Available-to-promise inventory.
- Expected production output.
- Expected receipts.

We will calculate this properly in Section 7.

## 6.2 Step 2: Consolidating Customer and Product Requirements

Collect all relevant demand information.

Typical data fields:

| Data field | Purpose |
|---|---|
| Customer name/ID | Identify customer |
| Sales order number | Identify specific order |
| Product/SKU | Identify requested product |
| Order quantity | Required units |
| Requested delivery date | Customer requirement |
| Confirmed delivery date | Existing commitment |
| Selling price | Revenue analysis |
| Contribution margin | Profitability analysis |
| Customer priority | Strategic classification |
| Order status | Open, partial, or fulfilled |

**Analyst's responsibility:** Make sure demand is not double-counted.

For example, an existing customer order may already be included in the demand forecast. The analyst must understand the company's demand data rules before consolidating orders and forecasts.

## 6.3 Step 3: Establishing Prioritization Criteria

The company must agree on its allocation rules before calculating customer allocations.

For example:

- Contractual obligations must be reviewed first.
- Critical customer orders receive special consideration.
- Remaining eligible supply is distributed proportionally.
- Orders that cannot be fulfilled are moved to the backlog.

The important part is consistency.

Hindi dapat binabago ang allocation rules just because one customer suddenly requests special treatment, unless there is an authorized business decision.

## 6.4 Step 4: Allocating Available Supply

The analyst prepares the allocation calculation.

This usually involves:

1. Determine total available supply.
2. Identify eligible demand.
3. Apply the approved allocation methodology.
4. Calculate customer allocation quantities.
5. Calculate remaining supply.
6. Calculate unfulfilled demand.
7. Check production and delivery feasibility.

## 6.5 Step 5: Communicating Allocation Decisions

The allocation decision must be communicated clearly.

For example:

| Customer | Original order | Allocated | Revised delivery |
|---|---:|---:|---|
| A | 10,000 | 10,000 | Nov 18 |
| B | 8,000 | 6,000 | Nov 20 |
| C | 15,000 | 8,000 | Nov 25 |
| D | 5,000 | 2,000 | Nov 28 |

The communication should explain:

- Original demand.
- Confirmed allocation.
- Unfulfilled quantity.
- Reason for allocation.
- Revised delivery commitment.
- Expected recovery date.
- Person responsible for follow-up.

## 6.6 Step 6: Managing Backlog

Orders that cannot be fulfilled do not simply disappear.

They become part of the company's outstanding demand or backlog, subject to the company's order and backlog definitions.

The company must determine:

- Which orders remain open?
- Which orders are partially fulfilled?
- Which orders need revised delivery dates?
- Which customers need immediate communication?
- When can the remaining demand be fulfilled?
- Will next month's supply be affected?

This connects directly to the next topic, Scenario Planning.

---

# 7. Formulas and Calculations

Now let's introduce the quantitative side.

For an S&OP analyst, the most important skill is not simply knowing formulas.

It is knowing **which quantities should be included, which should be excluded, and what business rule the calculation represents.**

## 7.1 Available Supply for Allocation

Available supply represents the quantity that can actually be distributed to customer requirements during a particular planning period.

A simplified formula is:

\[
\begin{aligned}
Available\ Supply = {}&
Opening\ Inventory\\
&+ Planned\ Production\\
&+ Confirmed\ Receipts\\
&- Existing\ Commitments\\
&- Unavailable\ Inventory
\end{aligned}
\]

Where:

| Variable | Meaning | Unit |
|---|---|---|
| Opening Inventory | Starting usable inventory | Units |
| Planned Production | Expected good production output | Units |
| Confirmed Receipts | Expected incoming supply | Units |
| Existing Commitments | Supply already reserved for other orders | Units |
| Unavailable Inventory | Quality hold, damaged, or restricted stock | Units |

**Example:**

A factory has the following November supply position:

| Item | Quantity |
|---|---:|
| Opening inventory | 8,000 |
| Planned production | 20,000 |
| Confirmed receipts | 5,000 |
| Existing commitments | (7,000) |
| Unavailable inventory | (2,000) |

Calculation:

\[
Available\ Supply=8,000+20,000+5,000-7,000-2,000
\]

**24,000 units**

The factory has 24,000 units available for allocation.

**Interpretation:** Although the factory has 33,000 units from opening inventory, planned production, and receipts, only 24,000 units remain available after considering existing commitments and unavailable stock.

*Assumption:* All quantities belong to the same planning period and are available by the required allocation dates. A real time-phased plan must consider when each receipt or production quantity becomes available.

## 7.2 Order Fulfillment Quantity

Order fulfillment quantity is the quantity actually assigned or supplied against a customer's order.

At the basic level:

\[
Fulfillment_i=\min(Demand_i,Allocation_i)
\]

Where:

- \(Demand_i\) = Customer's requested quantity.
- \(Allocation_i\) = Quantity assigned to the customer.

Example:

Customer A requests 10,000 units, but only 7,000 units are allocated.

\[
Fulfillment_A=\min(10,000,7,000)
\]

**7,000 units**

Remaining demand:

\[
10,000-7,000=3,000\ units
\]

**Important distinction:** Allocation is a planning decision. Physical fulfillment means the product has actually been shipped or delivered. These should not be treated as identical in operational reporting.

## 7.3 Remaining Supply After Allocation

This determines how much supply is still available after allocating a quantity.

\[
Remaining\ Supply =
Available\ Supply-Total\ Allocation
\]

Example:

- Available supply = 24,000 units.
- Total allocated = 18,000 units.

\[
24,000-18,000=6,000\ units
\]

The remaining 6,000 units can potentially be allocated to other eligible orders or retained as inventory, depending on the allocation plan.

## 7.4 Unfulfilled Demand and Backlog

Unfulfilled demand is the portion of customer demand that cannot be covered by the allocated quantity.

\[
Unfulfilled\ Demand_i =
\max(0,Demand_i-Allocation_i)
\]

Example:

| Customer | Demand | Allocation | Unfulfilled |
|---|---:|---:|---:|
| A | 10,000 | 10,000 | 0 |
| B | 8,000 | 6,000 | 2,000 |
| C | 15,000 | 8,000 | 7,000 |

Total unfulfilled demand:

\[
0+2,000+7,000=9,000
\]

**9,000 units**

This is the quantity that still needs a recovery or fulfillment plan.

For practical S&OP reporting, distinguish:

- **Unfulfilled demand:** Demand not covered by the allocation plan.
- **Open order backlog:** Outstanding customer orders not yet fulfilled, based on the company's backlog definition.
- **Delayed demand:** Demand whose fulfillment date has moved beyond its original requirement.

These measures may overlap, but they are not always interchangeable.

## 7.5 Proportional Allocation

This is one of the most useful calculations in demand prioritization.

Formula:

\[
Allocation_i =
\frac{Demand_i}{Total\ Eligible\ Demand}
\times Available\ Supply
\]

Example:

Available supply = 24,000 units.

Total eligible demand = 30,000 units.

| Customer | Demand |
|---|---:|
| A | 12,000 |
| B | 10,000 |
| C | 8,000 |
| **Total** | **30,000** |

Customer A:

\[
\frac{12,000}{30,000}\times24,000=9,600\ units
\]

Customer B:

\[
\frac{10,000}{30,000}\times24,000=8,000\ units
\]

Customer C:

\[
\frac{8,000}{30,000}\times24,000=6,400\ units
\]

### Final proportional allocation

| Customer | Demand | Allocation | Unfulfilled |
|---|---:|---:|---:|
| A | 12,000 | 9,600 | 2,400 |
| B | 10,000 | 8,000 | 2,000 |
| C | 8,000 | 6,400 | 1,600 |
| **Total** | **30,000** | **24,000** | **6,000** |

Supply allocated: **24,000 units**.

Remaining unfulfilled: **6,000 units**.

Notice that all customers receive 80% of their requested quantity.

\[
\frac{24,000}{30,000}\times100=80\%
\]

This is possible because the available supply is 80% of total demand.

**Practical consideration:** Real allocation quantities may need to be rounded to whole units, minimum order quantities, production batch sizes, or packaging multiples. Always reconcile rounding differences to ensure total allocation does not exceed available supply.

## 7.6 Demand Fulfillment Percentage

This KPI measures the proportion of requested demand that is covered by allocation or fulfillment.

\[
Fulfillment\ Rate_i =
\frac{Allocated\ Quantity_i}{Demand_i}
\times100
\]

Using our previous example:

Customer A:

\[
\frac{9,600}{12,000}\times100=80\%
\]

Customer B:

\[
\frac{8,000}{10,000}\times100=80\%
\]

Customer C:

\[
\frac{6,400}{8,000}\times100=80\%
\]

The total fulfillment rate is:

\[
\frac{24,000}{30,000}\times100=80\%
\]

**Important:** If you use shipped quantity instead of allocated quantity, you are measuring actual fulfillment rather than planned allocation coverage. Always label the KPI correctly.

## 7.7 Revenue Impact of Allocation Decisions

Now let's connect allocation to Finance.

Revenue is calculated as:

\[
Revenue_i=Fulfilled\ Quantity_i\times Selling\ Price_i
\]

Example:

| Customer | Allocated quantity | Selling price | Revenue |
|---|---:|---:|---:|
| A | 9,600 | ₱100 | ₱960,000 |
| B | 8,000 | ₱150 | ₱1,200,000 |
| C | 6,400 | ₱120 | ₱768,000 |
| **Total** | **24,000** | | **₱2,928,000** |

Total revenue from allocated supply:

\[
960,000+1,200,000+768,000=₱2,928,000
\]

Now compare this with the revenue that would have been generated if all orders had been fulfilled.

| Customer | Total demand | Selling price | Potential revenue |
|---|---:|---:|---:|
| A | 12,000 | ₱100 | ₱1,200,000 |
| B | 10,000 | ₱150 | ₱1,500,000 |
| C | 8,000 | ₱120 | ₱960,000 |
| **Total** | **30,000** | | **₱3,660,000** |

Potential revenue not covered by allocation:

\[
3,660,000-2,928,000=₱732,000
\]

This represents revenue associated with unfulfilled demand, not necessarily realized or permanently lost revenue. Some orders may be fulfilled in a later period.

## 7.8 Contribution Impact of Allocation Decisions

Revenue alone is not enough.

We also need to consider contribution margin.

\[
Contribution =
Fulfilled\ Quantity\times Contribution\ per\ Unit
\]

Suppose:

| Customer | Contribution/unit |
|---|---:|
| A | ₱40 |
| B | ₱25 |
| C | ₱50 |

Using the proportional allocation:

| Customer | Allocation | Contribution/unit | Total contribution |
|---|---:|---:|---:|
| A | 9,600 | ₱40 | ₱384,000 |
| B | 8,000 | ₱25 | ₱200,000 |
| C | 6,400 | ₱50 | ₱320,000 |
| **Total** | **24,000** | | **₱904,000** |

The company generates ₱904,000 contribution from the allocated supply.

This gives management another way to evaluate alternative allocation decisions.

**Caution:** Contribution margin is not necessarily the same as net profit. It normally represents revenue less variable costs under the company's accounting definition. Fixed costs and other expenses may still need to be considered.

---

# 8. Practical Manufacturing Application

Now let's combine everything into one realistic manufacturing scenario.

Imagine that you are an S&OP Analyst working for a company manufacturing industrial electronic components.

The company experiences a raw material shortage. As a result, it cannot produce enough finished goods to fulfill all November customer orders.

Management asks your team:

**"We only have 30,000 units available. How should we distribute these units among our customers?"**

## 8.1 Business Scenario

The company has five customers.

| Customer | Demand | Delivery date | Selling price/unit | Contribution/unit |
|---|---:|---|---:|---:|
| A | 10,000 | Nov 18 | ₱120 | ₱45 |
| B | 8,000 | Nov 20 | ₱150 | ₱50 |
| C | 15,000 | Nov 25 | ₱100 | ₱35 |
| D | 5,000 | Nov 22 | ₱180 | ₱70 |
| E | 12,000 | Nov 30 | ₱110 | ₱40 |
| **Total** | **50,000** | | | |

Additional business information:

| Customer | Business importance |
|---|---|
| A | Strategic customer |
| B | Contractual minimum of 6,000 units |
| C | Largest customer by order volume |
| D | Highest contribution per unit |
| E | Standard customer |

Available supply:

| Measure | Quantity |
|---|---:|
| Confirmed supply available for November allocation | 30,000 units |
| Total demand | 50,000 units |
| Supply shortage | 20,000 units |
| Supply coverage | 60% |

We will compare three allocation approaches.

## 8.2 Approach 1: FIFO Allocation

Rule: The earliest requested delivery date receives supply first.

Delivery priority:

1. Customer A: November 18.
2. Customer B: November 20.
3. Customer D: November 22.
4. Customer C: November 25.
5. Customer E: November 30.

Allocation:

| Customer | Demand | Allocation | Unfulfilled |
|---|---:|---:|---:|
| A | 10,000 | 10,000 | 0 |
| B | 8,000 | 8,000 | 0 |
| D | 5,000 | 5,000 | 0 |
| C | 15,000 | 7,000 | 8,000 |
| E | 12,000 | 0 | 12,000 |
| **Total** | **50,000** | **30,000** | **20,000** |

Notice that Customer E receives nothing.

This happens because the earlier delivery requirements consume all available supply.

**Financial impact:**

| Customer | Allocation | Contribution/unit | Contribution |
|---|---:|---:|---:|
| A | 10,000 | ₱45 | ₱450,000 |
| B | 8,000 | ₱50 | ₱400,000 |
| D | 5,000 | ₱70 | ₱350,000 |
| C | 7,000 | ₱35 | ₱245,000 |
| E | 0 | ₱40 | ₱0 |
| **Total** | **30,000** | | **₱1,445,000** |

**Business interpretation:**

- Earlier customer requirements are protected.
- Customer D receives its complete order.
- Customer E receives no supply despite having a valid order.
- The company generates ₱1.445 million in contribution.

This method is straightforward, but it does not consider strategic importance or profitability.

## 8.3 Approach 2: Priority-Based Allocation

Now let's introduce business priorities.

Assume management approves the following allocation rules:

1. Customer B receives its contractual minimum of 6,000 units.
2. Customer A receives its complete strategic customer requirement of 10,000 units.
3. Customer D receives its complete requirement because of its high contribution and urgent delivery requirement.
4. Remaining supply is allocated to Customer C.
5. Customer E receives no supply in this allocation cycle.

Allocation:

| Customer | Demand | Allocation | Unfulfilled |
|---|---:|---:|---:|
| A | 10,000 | 10,000 | 0 |
| B | 8,000 | 6,000 | 2,000 |
| C | 15,000 | 0 | 15,000 |
| D | 5,000 | 5,000 | 0 |
| E | 12,000 | 9,000 | 3,000 |
| **Total** | **50,000** | **30,000** | **20,000** |

Wait, why did Customer E receive 9,000 units?

After allocating to A, B, and D:

\[
30,000-10,000-6,000-5,000=9,000
\]

Management then decides to give the remaining supply to E rather than C.

This illustrates an important point: prioritization rules must specify not only who receives priority but also how the remaining supply is distributed.

**Financial impact:**

| Customer | Allocation | Contribution/unit | Contribution |
|---|---:|---:|---:|
| A | 10,000 | ₱45 | ₱450,000 |
| B | 6,000 | ₱50 | ₱300,000 |
| D | 5,000 | ₱70 | ₱350,000 |
| E | 9,000 | ₱40 | ₱360,000 |
| **Total** | **30,000** | | **₱1,460,000** |

Contribution:

\[
₱450,000+₱300,000+₱350,000+₱360,000=₱1,460,000
\]

**Business interpretation:**

- Strategic and contractual customers receive protected supply.
- Customer D receives its complete requirement.
- Customer E receives partial supply.
- Customer C receives nothing.
- Contribution is ₱15,000 higher than the FIFO approach.

However, this is not automatically the best approach. Customer C is the largest customer, and receiving zero supply may create significant commercial consequences.

## 8.4 Approach 3: Proportional Allocation

Now suppose management wants to distribute the shortage more evenly.

Each customer receives the same percentage of its demand.

Available supply:

\[
30,000
\]

Total demand:

\[
50,000
\]

Allocation percentage:

\[
\frac{30,000}{50,000}\times100=60\%
\]

Therefore, each customer receives 60% of its demand.

| Customer | Demand | Allocation | Unfulfilled |
|---|---:|---:|---:|
| A | 10,000 | 6,000 | 4,000 |
| B | 8,000 | 4,800 | 3,200 |
| C | 15,000 | 9,000 | 6,000 |
| D | 5,000 | 3,000 | 2,000 |
| E | 12,000 | 7,200 | 4,800 |
| **Total** | **50,000** | **30,000** | **20,000** |

**Financial impact:**

| Customer | Allocation | Contribution/unit | Contribution |
|---|---:|---:|---:|
| A | 6,000 | ₱45 | ₱270,000 |
| B | 4,800 | ₱50 | ₱240,000 |
| C | 9,000 | ₱35 | ₱315,000 |
| D | 3,000 | ₱70 | ₱210,000 |
| E | 7,200 | ₱40 | ₱288,000 |
| **Total** | **30,000** | | **₱1,323,000** |

**Business interpretation:**

- All customers receive some supply.
- No customer is completely deprived.
- Customer B receives less than its contractual minimum of 6,000 units.
- Customer D receives only 60% despite its higher contribution margin.
- Total contribution is lower than both previous approaches.

This is an important limitation of proportional allocation: fairness based on demand share does not necessarily mean fairness based on contractual obligations or business impact.

## 8.5 Comparing the Three Approaches

### Allocation comparison

| Measure | FIFO | Priority-based | Proportional |
|---|---:|---:|---:|
| Contribution | ₱1.445M | ₱1.460M | ₱1.323M |
| Total supply allocated | 30,000 | 30,000 | 30,000 |
| Supply shortage | 20,000 | 20,000 | 20,000 |

### Contribution comparison

| Method | Contribution |
|---|---:|
| FIFO | ₱1,445,000 |
| Priority-based | ₱1,460,000 |
| Proportional | ₱1,323,000 |

### What does this tell us?

The three methods distribute exactly the same 30,000 units.

But they produce different business outcomes.

| Evaluation | FIFO | Priority-based | Proportional |
|---|---|---|---|
| Contract protection | Yes, in this scenario | Yes | No |
| Strategic customer protection | Partial consideration | Yes | No |
| All customers receive supply | No | No | Yes |
| Contribution | ₱1.445M | ₱1.460M | ₱1.323M |
| Allocation simplicity | High | Medium | High |
| Main concern | Customers with later dates | Customers excluded from priority | Contractual requirements |

**My analytical observation:**

Priority-based allocation produces the highest contribution in this particular scenario while protecting the specified strategic and contractual commitments.

However, this result does not prove that priority-based allocation is always superior.

We still need to evaluate:
- Whether all customer agreements are respected.
- Whether the allocation creates customer relationship risks.
- Whether the allocation is operationally feasible.
- Whether the remaining backlog can be recovered next month.
- Whether the financial benefit justifies the customer service trade-offs.

This is the difference between simply calculating allocations and performing actual S&OP analysis.

---

# 9. Business Perspective and S&OP Decision-Making

## 9.1 How an S&OP Analyst Recommends Demand Priorities

An S&OP analyst should not independently decide which customer deserves supply based on personal judgment.

Your responsibility is to provide a structured, data-driven recommendation.

A typical analysis should contain:

**A. Supply situation**
- Total demand.
- Available supply.
- Supply shortage.
- Expected recovery quantity.

**B. Customer requirements**
- Customer orders.
- Requested delivery dates.
- Contractual obligations.
- Strategic importance.

**C. Financial analysis**
- Revenue by customer.
- Contribution margin.
- Potential revenue impact.
- Contribution at risk.

**D. Allocation scenarios**
- FIFO allocation.
- Priority-based allocation.
- Proportional allocation.
- Hybrid allocation.

**E. Recommendation**
- Proposed allocation.
- Expected customer impact.
- Financial consequences.
- Operational feasibility.
- Required management approvals.

Your role is to make the trade-offs visible so management can make an informed decision.

## 9.2 Roles of Different Departments

Demand prioritization is a cross-functional decision.

| Department | Main responsibility |
|---|---|
| Sales | Customer importance, commitments, negotiations |
| Operations | Production capacity and manufacturing feasibility |
| Supply Chain | Inventory availability, material constraints, logistics |
| Finance | Revenue, profitability, financial impact |
| S&OP Analyst | Data consolidation, calculations, scenario comparison |
| Management | Final business priorities and approval |

For example:

Sales might recommend protecting Customer A.

Operations might explain that only 30,000 units can be produced.

Finance might recommend prioritizing higher-contribution orders.

Supply Chain might identify additional inventory arriving next week.

The S&OP process brings all these perspectives together.

## 9.3 Impact on Business Performance

Demand prioritization influences several business KPIs.

| KPI | Potential impact |
|---|---|
| Customer service level | Percentage of demand fulfilled |
| On-time delivery | Delivery performance against commitments |
| Backlog | Outstanding customer orders |
| Revenue | Sales generated from allocated supply |
| Contribution margin | Financial contribution from fulfilled supply |
| Inventory | Remaining stock and allocation coverage |
| Capacity utilization | How constrained production resources are used |

One important distinction:

**Allocation fulfillment rate is not necessarily the same as customer service level or OTIF.**

OTIF (On-Time In-Full) measures whether an order is delivered on time and in the required quantity. A customer may receive 100% allocation on paper but still experience late delivery.

## 9.4 Communicating Difficult Allocation Decisions

Imagine Customer C originally ordered 15,000 units, but the company can only allocate 7,000.

You should avoid communicating:

"We cannot supply your complete order because we have a shortage."

Instead, the company should communicate professionally and provide an actionable recovery plan.

Example:

**Subject: November Supply Allocation and Revised Delivery Commitment**

Dear Customer,

Due to a temporary supply constraint affecting our production availability, we have reviewed the November allocation requirements and available supply.

For your current order of 15,000 units, we can confirm an initial allocation of 7,000 units for the November delivery schedule.

The remaining 8,000 units are currently under recovery planning, and we are coordinating with our Operations and Supply Chain teams to determine the earliest feasible delivery schedule.

We understand the importance of meeting your requirements and are working to minimize the impact on your operations.

We will provide an updated delivery commitment once the recovery schedule has been confirmed.

Thank you for your understanding and continued partnership.

Best regards,

Sales and Operations Team

The important communication principles are:

1. Be transparent about the constraint.
2. Clearly state the confirmed quantity.
3. Identify the unfulfilled quantity.
4. Provide a realistic recovery plan.
5. Avoid promising delivery dates that Operations cannot support.

---

# 10. Key Takeaways

Before we move to the exercises, let's consolidate the most important concepts.

| Concept | What you should remember |
|---|---|
| Demand prioritization | Determines which customers or orders receive priority |
| Order allocation | Determines how much supply each customer receives |
| Demand management | Influences or adjusts demand requirements |
| FIFO | Earliest eligible order receives supply first |
| Customer-based | Prioritizes strategic or contractual customers |
| Proportional | Distributes supply based on demand share |
| Priority-based | Uses established business criteria or scoring |
| Product/market-based | Prioritizes selected products or markets |
| Fair-share | Uses historical or agreed allocation shares |
| Backlog | Outstanding demand or orders requiring future fulfillment |

### Five professional principles

1. **Always establish allocation rules before performing calculations.** Otherwise, your results may be mathematically correct but commercially inappropriate.
2. **Protect mandatory commitments.** Contractual and regulatory requirements should not be casually overridden by discretionary allocation rules.
3. **Do not evaluate revenue alone.** Contribution margin, customer impact, and operational consequences also matter.
4. **Allocation decisions must be operationally feasible.** A plan is useless if production cannot execute it or logistics cannot deliver it.
5. **Every unfulfilled order needs a recovery strategy.** Allocation is not the end of the process.

---

# 11. Knowledge Check and Exercises

**Your turn: Level 2 Application**

Now I want to check whether you can apply the concepts instead of simply remembering definitions.

Do not worry about making mistakes. I will evaluate your answers and explain the reasoning.

## Exercise 1: Conceptual Understanding

**Question 1.**

A company has 20,000 units available but receives 35,000 units of customer orders.

Explain the difference between:

- Demand prioritization.
- Order allocation.
- Demand management.

**Question 2.**

Why might prioritizing customers based only on revenue be a poor business decision?

Give at least two reasons.

**Question 3.**

What is the difference between proportional allocation and fair-share allocation?

## Exercise 2: Allocation Calculation

A manufacturing company has 18,000 units available.

It receives the following orders:

| Customer | Demand | Order date |
|---|---:|---|
| A | 8,000 | November 1 |
| B | 6,000 | November 3 |
| C | 10,000 | November 5 |
| D | 6,000 | November 8 |

**Question 4. FIFO allocation**

Calculate the allocation for each customer using FIFO.

Determine:
- Allocated quantity.
- Unfulfilled demand.
- Remaining supply.

**Question 5. Proportional allocation**

Calculate each customer's allocation using proportional allocation.

Show your calculations.

**Question 6. Business interpretation**

Compare your FIFO and proportional allocation results.

Which customers benefit more from FIFO? Which benefit more from proportional allocation?

## Exercise 3: Financial Analysis

Use the following information:

| Customer | Demand | Contribution/unit |
|---|---:|---:|
| A | 8,000 | ₱40 |
| B | 6,000 | ₱60 |
| C | 10,000 | ₱30 |
| D | 6,000 | ₱50 |

Available supply = 18,000 units.

**Question 7.**

Using your proportional allocation from Question 5, calculate the total contribution generated by each customer and the combined contribution.

**Question 8.**

Would you recommend allocating supply based purely on the highest contribution per unit?

Explain your reasoning, considering customer commitments and business relationships.

## Exercise 4: Professional S&OP Analysis

**Question 9. Case study**

You are the S&OP Analyst.

Your company has only enough supply to fulfill 60% of total demand.

Sales wants to prioritize its largest customer.

Finance wants to prioritize customers with the highest contribution margin.

Operations wants to prioritize products that can be manufactured efficiently.

How would you approach this disagreement?

Explain:

1. What data would you collect?
2. What criteria would you establish?
3. What allocation scenarios would you prepare?
4. How would you present your recommendation to management?

---

## How we will evaluate your answers

I will assess your responses based on four areas:

| Evaluation area | What I will look for |
|---|---|
| Conceptual understanding | Correct understanding of S&OP terminology |
| Calculation accuracy | Correct formulas and results |
| Business reasoning | Ability to explain trade-offs |
| Professional analysis | Ability to develop defensible recommendations |

## Learning checkpoint

**Topic 6.4 – Demand Prioritization**

- Lesson discussion: Completed.
- Knowledge check: Awaiting your answers.
- Topic 6.5 – Scenario Planning: Not started.

**My recommendation:** Sagutan mo muna ang Questions 1–9. You can answer them in batches if needed. I'll check your calculations, challenge your business reasoning where necessary, and help you develop the mindset of an actual S&OP Analyst.

Hindi tayo lilipat sa Topic 6.5 hangga't hindi natin na-e-establish na kaya mong mag-analyze ng demand allocation independently.
