# Module 3 – Demand Planning
## Topic 3.3: Introduction to Demand Forecasting

**Learning objective:** Understand how companies estimate future customer demand and use that information to prepare their manufacturing and supply chain operations.

For this lesson, isipin natin na ikaw ang isang S&OP Analyst sa isang electronic components manufacturing company. Every month, kailangan mong sagutin ang isang importanteng business question:

**"How many products should the company expect customers to need in the coming months?"**

Mukhang simple, pero malaking bahagi ng business decisions ang nakasalalay sa sagot dito.

---

# 1. TOPIC OVERVIEW

## 1.1 What is Demand Forecasting?

Let's connect this to our previous topics.

| Previous topic | What we learned | Connection to this topic |
|---|---|---|
| Topic 3.1: Understanding Demand | What demand is and what drives customer demand | We need to understand what we are trying to predict. |
| Topic 3.2: Types of Demand Information | Different sources and types of demand information | We need information that can help us estimate future demand. |
| Topic 3.3: Introduction to Demand Forecasting | How businesses estimate future demand | We use the available information to anticipate what customers may need. |

In simple terms:

**Demand forecasting is the process of estimating how much customers are likely to purchase or require in the future.**

For example:

A company manufactures electronic capacitors.

Based on historical demand, customer forecasts, current orders, market conditions, and sales information, the company estimates that customers will require:

- December: 100,000 units
- January: 115,000 units
- February: 120,000 units

These numbers represent the company's expected future demand.

Notice the word *expected*.

Hindi ibig sabihin na siguradong 100,000, 115,000, at 120,000 units ang actual orders. These are estimates based on available information and assumptions.

## 1.2 Why is Demand Forecasting Important?

Imagine na may manufacturing company na walang idea kung ilang products ang kakailanganin ng customers next month.

Ano ang possible mangyari?

- Too little inventory: Hindi makakapag-deliver kapag may orders.
- Too much inventory: Sobrang daming products na nakatengga sa warehouse.
- Insufficient raw materials: Hindi makapag-produce kahit may production equipment.
- Insufficient capacity: Hindi kayang habulin ang incoming demand.
- Poor financial planning: Hindi maayos ang estimate ng future revenue and expenses.

This is why companies need visibility of future demand.

Demand forecasting helps businesses prepare before the actual demand happens.

**Important principle:**

Demand forecasting does not guarantee what will happen. It helps the business prepare for what is reasonably expected to happen.

## 1.3 Why Is This Topic Included in Demand Planning?

Before a company can determine whether it has enough materials, inventory, and production capacity, it first needs an estimate of what customers will require.

The logical relationship is:

```
Demand Information
(Historical data, orders, customer forecasts, sales input, market information)
        ↓
Demand Forecasting
(Estimate future customer demand)
        ↓
Consensus Demand Plan
(Review and align the forecast with business knowledge)
        ↓
Supply Planning
(Determine how the business can meet expected demand)
```

This is one of the fundamental relationships in S&OP.

---

# 2. LAYMAN'S EXPLANATION

## 2.1 Imagine You Own a Small Bakery

May bakery ka. Every day, kailangan mong mag-decide kung ilang pandesal ang ibe-bake mo.

Hindi mo naman pwedeng hintayin muna na pumasok lahat ng customers bago ka gumawa ng pandesal.

Bakit?

Because baking takes time. Kailangan mo munang bumili ng flour, yeast, sugar, and other ingredients. Kailangan ding ihanda ang equipment at workers.

So paano mo malalaman kung ilang pandesal ang dapat mong gawin bukas?

You look at:

1. Ilang pandesal ang nabenta kahapon?
2. Ilang pandesal ang karaniwang nabibili tuwing weekdays?
3. Mas marami bang customers kapag weekends?
4. May upcoming holiday ba?
5. May school event ba nearby?
6. May malaking order ba mula sa isang customer?

Based on these information, you estimate tomorrow's demand.

For example:

| Information | Expected effect |
|---|---:|
| Normal weekday demand | 500 pieces |
| Upcoming school event | Additional 150 pieces |
| Expected rain | Possible reduction of 50 pieces |

Your initial estimate becomes:

[
500+150-50=600\text{ pieces}
]

Therefore, you plan to prepare approximately 600 pandesal.

Pero paano kung 700 ang dumating na customers?

Or paano kung 450 lang?

That's the reality of forecasting. You prepare based on the best available information, but actual demand can still be different.

## 2.2 Now Apply This to Manufacturing

Let's replace the bakery with an electronic components manufacturer.

Instead of pandesal, the company manufactures capacitors.

Instead of flour and yeast, the company needs:

- Barium titanate powder.
- Binders and other raw materials.
- PET film.
- Production equipment.
- Operators and technicians.
- Warehouse capacity.

And instead of preparing for tomorrow, the company may need to prepare for the next three, six, or twelve months.

Mas complicated because manufacturing has longer preparation times.

For example:

- Raw material procurement may take 60 days.
- Production may take 10 days.
- Quality inspection may take 5 days.
- Delivery may take another 5 days.

If the company waits for confirmed customer orders before preparing everything, it may already be too late.

This is where demand forecasting becomes important.

## 2.3 Forecasting vs. Guessing

May important distinction dito.

| Guessing | Demand forecasting |
|---|---|
| Based mainly on intuition | Based on available evidence and information |
| No clear methodology | Uses an established approach |
| Assumptions may be undocumented | Assumptions are identified and reviewed |
| May ignore historical behavior | Considers historical demand patterns |
| Difficult to evaluate | Can be compared with actual demand |

For example:

**Guess:** "I think customers will order 150,000 units next month."

**Forecast:** "Based on historical demand, current customer forecasts, open orders, and an expected increase in market demand, we estimate 150,000 units next month."

Both are estimates, but the second has a traceable basis.

Professional forecasting does not eliminate uncertainty. It makes the estimation process more systematic, explainable, and measurable.

---

# 3. TECHNICAL EXPLANATION

## 3.1 Formal Definition

In supply chain management, demand forecasting refers to the systematic process of estimating future demand for products or services over a defined period using historical data, customer information, market intelligence, statistical techniques, and business judgment.

Let's break down the important terms.

| Term | Meaning |
|---|---|
| Systematic process | May organized and repeatable procedure |
| Estimating | Calculating or assessing an expected quantity |
| Future demand | Expected customer requirements in a future period |
| Historical data | Previous demand or sales information |
| Market intelligence | Information about market conditions and customer behavior |
| Forecast horizon | How far into the future the forecast extends |
| Forecast period | The time interval represented by each forecast value |

## 3.2 Understanding Forecast Horizon

The forecast horizon tells us how far ahead we are estimating demand.

Example:

Today is November 2026.

A company prepares a forecast covering December 2026 through November 2027.

That is a 12-month forecast horizon.

**Illustration: 12-month forecast horizon**

| Dec 2026 | Jan 2027 | Feb 2027 |
|---|---|---|
| Mar 2027 | Apr 2027 | May 2027 |
| Jun 2027 | Jul 2027 | Aug 2027 |
| Sep 2027 | Oct 2027 | Nov 2027 |

Each month represents one forecast period. Together, they form a 12-month forecast horizon.

Why is this important?

Because different departments need different levels of future visibility.

- Procurement needs time to secure raw materials.
- Production needs time to allocate manufacturing capacity.
- Finance needs visibility of future revenue and expenses.
- Sales needs to understand whether customer demand can be supported.

## 3.3 What Makes a Forecast Reliable?

A reliable forecast does not necessarily mean that it will be perfectly accurate.

Instead, it should have:

1. Relevant information.
2. Appropriate forecasting approach.
3. Reasonable assumptions.
4. Consistent methodology.
5. Business review.
6. Regular monitoring.
7. Performance evaluation.

A forecast should be explainable.

If a manager asks, "Why are we forecasting 120,000 units next month?", the planner should be able to explain where that number came from.

---

# 4. DETAILED DISCUSSION

## 4.1 Purpose and Business Importance of Forecasting

Demand forecasting affects nearly every major supply chain activity.

Let's discuss each one.

### A. Production Planning

**Question:** How many units should the factory prepare to manufacture?

Example:

The forecast indicates that customers are expected to require 120,000 capacitors next month.

The production planning team uses this information to determine:

- Required production quantity.
- Production schedule.
- Machine allocation.
- Available production hours.
- Production priorities.

Without a reasonable forecast, production may be too low or too high.

### B. Raw Material Procurement

**Question:** How much raw material should we purchase, and when should we purchase it?

Suppose producing 1,000 capacitors requires 2 kg of a particular raw material.

Expected demand:

120,000 capacitors.

Required material:

[
120,000 \times \frac{2}{1,000}=240\text{ kg}
]

The procurement team can use this information as an input when preparing purchasing requirements.

However, actual purchasing quantities must also consider existing inventory, material yield, scrap, safety stock, and supplier lead time.

### C. Inventory Management

Forecasting helps determine the appropriate inventory levels.

Two major problems:

- **Stockout:** Insufficient inventory to fulfill demand.
- **Excess inventory:** More inventory than the business reasonably needs.

Good forecasting supports inventory decisions, although inventory optimization requires additional considerations.

### D. Capacity Planning

The company needs to know whether its existing resources can support expected demand.

Consider:

| Item | Quantity |
|---|---:|
| Expected demand | 120,000 units |
| Production capacity | 100,000 units |
| Capacity shortage | 20,000 units |

The company must investigate possible actions:

- Overtime.
- Additional shifts.
- Equipment improvement.
- Outsourcing.
- Production transfers.
- Demand prioritization.

Without a forecast, capacity problems may only become visible when orders are already arriving.

### E. Workforce Planning

If production demand increases, the company may need:

- Additional operators.
- More technicians.
- Additional quality inspectors.
- Additional warehouse personnel.

Workforce planning takes time, especially when recruitment and training are involved.

### F. Supplier Coordination

Suppliers also need visibility of future requirements.

For example, if your company expects a significant increase in raw material consumption, the supplier may need to:

- Increase its own production.
- Secure additional materials.
- Allocate manufacturing capacity.
- Adjust delivery schedules.

Forecast sharing helps coordinate the supply chain beyond the company's own facilities.

### G. Warehouse Planning

Higher demand may require more:

- Raw material storage.
- Work-in-process storage.
- Finished goods storage.
- Handling equipment.
- Warehouse labor.

### H. Financial and Revenue Planning

Forecasts help finance estimate:

- Expected sales revenue.
- Production expenses.
- Material costs.
- Labor costs.
- Working capital requirements.
- Cash flow requirements.

For example:

If expected sales volume is 120,000 units and the average selling price is ₱10:

[
120,000 \times ₱10 = ₱1,200,000
]

Expected revenue is ₱1.2 million, assuming all 120,000 units are sold at that price.

This is a revenue estimate, not a guarantee of actual revenue.

### I. Customer Service

If the company anticipates demand early enough, it can prepare inventory and production capacity to support customer delivery commitments.

The result may be:

- Better product availability.
- Fewer delayed deliveries.
- Reduced stockouts.
- Improved customer satisfaction.

## 4.2 What Happens When Forecasting Is Poor?

Let's compare two hypothetical manufacturing companies.

| Business condition | Company A | Company B |
|---|---|---|
| Forecasting | Poor | Systematic |
| Material preparation | Reactive | Based on expected requirements |
| Production | Frequent schedule changes | Better forward planning |
| Inventory | Frequent shortages and excess | More controlled |
| Capacity | Last-minute overtime | Earlier capacity evaluation |
| Supplier coordination | Mostly reactive | Advance communication |

Important: Good forecasting does not automatically guarantee good operational performance. Execution, supplier reliability, inventory policies, and capacity management still matter.

But poor forecasting makes these activities much harder.

## 4.3 Forecast vs. Other Business Planning Concepts

This is one of the most important sections of Topic 3.3.

Sa maraming companies, ginagamit ang terms na forecast, target, budget, orders, and demand plan. Minsan nagiging confusing dahil magkakaugnay sila, pero hindi sila interchangeable.

Let's establish the differences.

### A. Demand Forecast

**Definition:** An estimate of how much demand the company expects to receive in the future.

- Purpose: Anticipate future customer requirements.
- Source: Historical demand, customer information, sales input, and market information.
- Responsible functions: Demand Planning, Sales, and relevant commercial teams.
- S&OP use: Starting point for developing the demand plan.

Example: The company expects 120,000 units of demand next month.

### B. Customer Forecast

**Definition:** A customer's estimate of the quantities it expects to purchase from a supplier.

- Purpose: Give the supplier visibility of potential future requirements.
- Source: Customer planning systems and purchasing forecasts.
- Responsible function: Customer's planning or procurement organization.
- S&OP use: Input to the supplier's demand forecasting process.

Example: Customer A tells the manufacturer it expects to purchase 50,000 units in December.

Important: A customer forecast is not necessarily a confirmed purchase order.

### C. Sales Forecast

**Definition:** An estimate of expected future sales, often expressed in units, revenue, or both.

- Purpose: Estimate future commercial performance.
- Source: Sales pipeline, historical sales, customer opportunities, and commercial assumptions.
- Responsible function: Sales and commercial teams.
- S&OP use: Commercial input to demand planning and financial planning.

Example: Sales expects to sell 120,000 units worth ₱1.2 million.

Depending on company practices, sales forecast and demand forecast may overlap significantly, but they are not always identical.

### D. Sales Target

**Definition:** A quantity or revenue objective that the company wants or expects its sales organization to achieve as a performance goal.

- Purpose: Set business expectations and performance objectives.
- Source: Management strategy, growth objectives, and business targets.
- Responsible function: Sales leadership and management.
- S&OP use: Helps establish business ambitions and evaluate commercial performance.

Example: Management wants the sales team to achieve 150,000 units next month.

Remember:

**Forecast = What we expect to happen.**

**Target = What we want to achieve.**

The business may target 150,000 units while realistically forecasting only 120,000 units.

Hindi dapat basta itaas ang forecast to 150,000 just to match the target.

Why? Because doing so can lead to unnecessary inventory, raw material purchases, and production capacity commitments.

### E. Budget

**Definition:** A financial plan that establishes expected or authorized financial resources, expenses, and business results for a defined period.

- Purpose: Plan and control financial performance.
- Source: Financial assumptions, management targets, operating plans, and business forecasts.
- Responsible function: Finance, with input from other departments.
- S&OP use: Financial reference for evaluating the financial implications of the demand and supply plans.

Example: The company has an annual revenue budget of ₱15 million.

A budget may be based on sales volume, pricing, product mix, and cost assumptions.

### F. Customer Order

**Definition:** A formal request or commitment from a customer to purchase a specified product quantity under agreed commercial terms.

- Purpose: Initiate or support actual order fulfillment.
- Source: Customer purchase order or order submission.
- Responsible functions: Customer, Sales, and Order Management.
- S&OP use: Provides visibility of committed demand and near-term fulfillment requirements.

Example: Customer A submits a confirmed purchase order for 10,000 units.

Unlike a forecast, a purchase order represents an actual order commitment, subject to its contractual terms and the company's order acceptance process.

### G. Demand Plan

**Definition:** A reviewed and agreed representation of expected future demand that incorporates the initial forecast, customer information, commercial inputs, and approved business adjustments.

- Purpose: Establish the demand picture that the organization will use for planning.
- Source: Initial forecast, customer forecasts, open orders, sales input, market intelligence, and business review.
- Responsible functions: Demand Planning, Sales, and cross-functional stakeholders.
- S&OP use: Main demand-side input to supply-demand reconciliation.

Example:

- Initial forecast: 120,000 units.
- Approved new customer opportunity: +10,000 units.
- Expected customer phase-out: -5,000 units.

Revised demand plan: 125,000 units.

The adjustments must be justified and validated.

### H. Supply Plan

**Definition:** A plan describing how the company intends to provide the materials, resources, and supply needed to meet the demand plan.

- Purpose: Evaluate and organize supply capability.
- Source: Demand plan, inventory, capacity, material availability, and supplier information.
- Responsible functions: Supply Planning, Procurement, Manufacturing, and Logistics.
- S&OP use: Determines whether expected demand can be supported.

Example: Demand plan is 125,000 units, but available production capacity is only 110,000 units.

The supply team must evaluate alternatives.

### I. Production Plan

**Definition:** A plan that specifies the products, quantities, and timing of manufacturing activities.

- Purpose: Translate supply requirements into manufacturing activities.
- Source: Supply plan, production capacity, inventory, and production constraints.
- Responsible function: Production Planning and Manufacturing.
- S&OP use: Converts the agreed supply direction into operational manufacturing requirements.

Example: The company plans to manufacture 115,000 units next month, while the remaining 10,000 units will be covered by available finished goods inventory.

### Summary Comparison

| Concept | Main question it answers |
|---|---|
| Demand forecast | What demand do we expect? |
| Customer forecast | What does the customer expect to purchase? |
| Sales forecast | How much do we expect to sell? |
| Sales target | How much do we want to achieve? |
| Budget | What financial results and resources are planned? |
| Customer order | What has the customer formally ordered? |
| Demand plan | What demand have we agreed to plan for? |
| Supply plan | How will we provide the required supply? |
| Production plan | What will we manufacture and when? |

### The Relationship Between These Concepts

```
Demand Forecast
(Initial estimate of future demand)
        ↓
Demand Review
(Customer orders, customer forecasts, sales input, market changes)
        ↓
Consensus Demand Plan
(Agreed demand outlook)
        ↓
 ┌──────────────────┬──────────────────┐
 │ Supply Plan      │ Financial Plan   │
 │ Resources and    │ Revenue, cost,   │
 │ supply capability│ and financial impact
 └──────────────────┴──────────────────┘
        ↓
Integrated S&OP Plan
(Aligned business decisions)
```

The sales target and budget should be considered during business review, but they should not automatically override the evidence-based demand forecast.

## 4.4 Inputs Required for Demand Forecasting

Now that we understand what a forecast is, the next question is:

**Where do the numbers in a demand forecast come from?**

Hindi basta naglalagay ang Demand Planner ng quantity sa Excel. Kailangan may supporting information kung bakit iyon ang expected demand.

There are five major categories of forecasting inputs.

### A. Historical Demand Information

Historical demand refers to information about previous customer requirements or purchasing activity.

Examples:

- Previous monthly sales.
- Previous customer orders.
- Historical shipment quantities.
- Previous demand patterns.
- Historical trends.
- Seasonal demand changes.

Consider this example:

| Month | Historical demand |
|---|---:|
| January | 80,000 |
| February | 85,000 |
| March | 90,000 |
| April | 88,000 |
| May | 95,000 |
| June | 100,000 |

Makikita natin na generally increasing ang demand.

This historical pattern can help us understand whether demand is growing, declining, or remaining relatively stable.

**Why is this important?**

Past demand provides evidence of how customers have behaved.

However, historical demand does not automatically represent future demand.

For example, kung may major customer na nag-stop purchasing, hindi magandang assumption na gagamitin pa rin natin ang previous year's demand without adjustment.

Also, remember the distinction between sales and demand.

Historical sales can be lower than actual demand if the company experienced stockouts. In that situation, sales data may underestimate what customers actually needed.

### B. Customer Information

Customer information provides direct visibility into potential and committed customer requirements.

| Input | Explanation | Forecasting relevance |
|---|---|---|
| Confirmed customer orders | Formal orders submitted by customers | Provides visibility of committed requirements |
| Customer forecasts | Expected future purchasing quantities provided by customers | Provides advance demand visibility |
| Open order backlog | Orders received but not yet fulfilled | Shows outstanding requirements |
| Purchasing behavior | How customers typically order and consume products | Helps identify customer-specific patterns |

**Example:**

Customer A provides the following information:

| Month | Customer forecast |
|---|---:|
| December | 30,000 |
| January | 35,000 |
| February | 40,000 |

Customer B has an open order backlog of 15,000 units scheduled for delivery next month.

The planner needs to understand whether the customer forecast already includes the open orders.

This is important because adding the same quantities twice creates **double counting**.

Double counting occurs when the same demand is included more than once in the forecast.

### C. Commercial Information

Commercial information comes from activities that may influence customer purchasing behavior.

| Input | Possible demand impact |
|---|---|
| Sales team input | Identifies expected customer opportunities |
| Promotions | May temporarily increase purchasing |
| Price increases | Customers may purchase earlier before prices increase |
| Price reductions | May encourage additional purchases |
| Marketing campaigns | May generate new customer interest |
| New customer opportunities | May create additional future demand |

Example:

A manufacturer expects a new customer to purchase 20,000 units monthly starting in March.

However, the customer has not yet submitted a purchase order.

Should we include the 20,000 units in the forecast?

Potentially, yes, but we need to evaluate:

- Is the customer opportunity confirmed?
- Has the product qualification been completed?
- Is there an agreed commercial arrangement?
- When will purchasing actually begin?
- Is the estimated quantity realistic?

The planner should not treat every sales opportunity as guaranteed demand.

### D. Product Information

Product lifecycle information is another important forecasting input.

Products do not remain in the same market condition forever.

They may be introduced, grow in demand, reach maturity, and eventually decline.

**Product lifecycle**

```
Demand
  ^
  |              ______
  |           __/      \__
  |        __/             \__
  |_______/____________________\____> Time
      Introduction  Growth  Maturity  Decline
```

Illustrative lifecycle curve. Actual product demand patterns vary.

Important product-related inputs include:

1. **Product launch:** A new product may create demand that does not exist in historical data.
2. **Product lifecycle:** Demand may increase, stabilize, or decline as the product matures.
3. **Product discontinuation:** Demand may gradually stop when a product is phased out.
4. **Product substitution:** Customers may transfer their purchases from an old product to a replacement.
5. **Product cannibalization:** A new product may reduce demand for another product within the same portfolio.

Example:

An electronic component manufacturer introduces Model B as a replacement for Model A.

| Month | Model A | Model B |
|---|---:|---:|
| January | 50,000 | 0 |
| February | 40,000 | 10,000 |
| March | 25,000 | 25,000 |
| April | 10,000 | 40,000 |

If the planner forecasts Model A and Model B independently without considering substitution, the total product-family demand could be overestimated.

### E. External Information

External factors can influence customer demand even when the company itself does not change anything.

| External factor | Possible impact |
|---|---|
| Economic conditions | Changes in purchasing power and business spending |
| Market trends | Changes in industry demand |
| Competition | Customers may shift to competing products |
| Industry developments | New technologies may increase or reduce demand |
| Seasonal factors | Demand may increase during particular periods |
| Government regulations | May change product requirements or purchasing behavior |

Example:

A manufacturer supplies electronic components to consumer electronics companies.

If demand for smartphones increases because of a new technology trend, demand for certain electronic components may also increase.

However, the relationship should be validated. Not every increase in smartphone sales translates directly into an equal increase in demand for a particular component.

### 4.4.1 Evaluating the Reliability of Forecast Inputs

Not all information has the same reliability.

Consider the following:

| Information | Reliability consideration |
|---|---|
| Confirmed purchase order | Strong evidence of an actual order, subject to order status and terms |
| Customer forecast | Depends on customer forecasting accuracy and commitment |
| Historical demand | Depends on data quality and whether past conditions remain relevant |
| Sales opportunity | Depends on probability of conversion |
| Market research | Depends on research quality and relevance |
| Management target | Business objective, not direct evidence of demand |

A professional Demand Planner should ask:

- Where did the information come from?
- When was it last updated?
- Is it confirmed or estimated?
- Does it overlap with another input?
- What assumptions support the quantity?
- How much confidence should we place in it?

This is called **input validation**.

The objective is not simply to collect more information. It is to collect useful, relevant, and reliable information.

## 4.5 Forecasting Approaches: Qualitative vs. Quantitative

May dalawang major approaches sa demand forecasting.

1. Qualitative forecasting.
2. Quantitative forecasting.

Ang simplest distinction:

- Qualitative: Based primarily on human knowledge, judgment, and business insights.
- Quantitative: Based primarily on numerical data and mathematical or statistical analysis.

### A. Qualitative Forecasting

Qualitative forecasting uses judgment, experience, expertise, and non-numerical information to estimate future demand.

Useful ito kapag kulang ang historical data or may upcoming business changes na hindi pa reflected sa historical numbers.

Let's discuss the major approaches.

**1. Expert Judgment**

Uses the knowledge and experience of individuals who understand the product, customers, or market.

Example:

A product manager knows that one major customer is preparing to expand its production next quarter.

Based on this information, the manager expects component demand to increase.

**2. Sales Team Estimates**

Sales representatives provide estimates based on their customer relationships and commercial pipeline.

Example:

The sales team expects Customer A to increase purchases by 15% because of an upcoming product launch.

**3. Customer Insights**

Uses direct information from customers about their purchasing plans, expected consumption, and market outlook.

Example:

A customer informs its supplier that it plans to increase monthly requirements from 30,000 to 45,000 units.

**4. Market Research**

Uses surveys, interviews, industry reports, and other market intelligence to understand potential demand.

Example:

Market research indicates that demand for a particular electronic component category is expected to grow because of increasing adoption of electric vehicles.

**5. Delphi Method**

The Delphi method is a structured forecasting approach that gathers opinions from several experts through multiple rounds of feedback.

Typical process:

1. Select experts.
2. Collect their individual forecasts or opinions.
3. Summarize the responses anonymously.
4. Share the summarized results with the experts.
5. Allow experts to reconsider their estimates.
6. Repeat until a reasonable level of agreement is achieved or the process reaches its stopping point.

Why anonymous?

To reduce the influence of seniority, authority, or dominant personalities.

For example, a junior market analyst should be able to disagree with a senior manager based on evidence without feeling pressured.

#### Advantages and Limitations of Qualitative Forecasting

| Advantages | Limitations |
|---|---|
| Useful for new products | Can be subjective |
| Captures market intelligence | May be influenced by personal bias |
| Considers future business events | Different experts may disagree |
| Useful when historical data is limited | Difficult to measure consistency |
| Can incorporate customer knowledge | May overestimate opportunities |

**When should a company use qualitative forecasting?**

- New product introduction.
- New customer acquisition.
- Major market changes.
- Product discontinuation.
- Significant promotions.
- Situations with insufficient historical data.

### B. Quantitative Forecasting

Quantitative forecasting uses historical numerical data and mathematical or statistical techniques to estimate future demand.

Example:

A manufacturer has historical monthly demand data for the past three years.

The company analyzes the data to identify:

- Increasing demand.
- Decreasing demand.
- Stable demand.
- Seasonal patterns.
- Repeating demand behavior.

The forecasting process uses these observed patterns as a basis for estimating future demand.

We will discuss the actual mathematical forecasting methods in Topic 3.4.

For now, remember that quantitative forecasting relies on measurable information rather than judgment alone.

#### Advantages and Limitations of Quantitative Forecasting

| Advantages | Limitations |
|---|---|
| More systematic and repeatable | Requires reliable historical data |
| Can analyze large datasets | May fail when market conditions change |
| Reduces dependence on individual judgment | Historical patterns may not continue |
| Can be evaluated using forecast accuracy measures | Unusual events can distort results |
| Supports consistent forecasting | May not capture unrecorded business changes |

**When should a company use quantitative forecasting?**

- Products with sufficient historical demand.
- Stable customer purchasing behavior.
- Repeating seasonal patterns.
- Large product portfolios.
- Regular monthly or weekly demand planning.

### C. Combining Qualitative and Quantitative Approaches

In actual businesses, companies often combine both approaches.

For example:

A statistical forecast estimates 100,000 units next month.

However, the sales team reports that a major customer is launching a new product and expects an additional 20,000 units.

The company reviews the opportunity and validates the customer information.

If the increase is considered reasonable, the forecast may be adjusted.

**Illustrative combined forecasting approach**

| Component | Quantity |
|---|---:|
| Initial statistical forecast | 100,000 |
| Validated additional customer opportunity | +20,000 |
| **Adjusted demand estimate** | **120,000** |

Important: Hindi lahat ng sales input ay automatic na idinadagdag sa statistical forecast. Kailangan muna itong i-validate to avoid double counting or unsupported adjustments.

## 4.6 Understanding Forecast Levels and Time Horizons

A company may forecast demand at different levels of detail.

This is important because hindi pare-pareho ang information requirement ng bawat department.

### A. Forecasting Levels

**1. SKU-Level Forecast**

SKU means Stock Keeping Unit.

It is a distinct product or inventory item identified separately for planning and inventory purposes.

Example:

| SKU | Product | Monthly forecast |
|---|---|---:|
| CAP-001 | Capacitor A, 10µF | 30,000 |
| CAP-002 | Capacitor B, 22µF | 40,000 |
| CAP-003 | Capacitor C, 47µF | 30,000 |

Total: 100,000 units.

This level is useful for detailed inventory management, procurement, and production planning.

**2. Product Model Forecast**

Demand is estimated for an entire model, which may contain multiple SKUs or configurations.

Example:

| Product model | Forecast |
|---|---:|
| Model A | 70,000 |
| Model B | 30,000 |

**3. Product-Family Forecast**

Several related products are grouped together.

Example:

| Product family | Forecast |
|---|---:|
| Automotive capacitors | 150,000 |
| Consumer electronics capacitors | 200,000 |
| Industrial capacitors | 100,000 |

Useful ito for higher-level capacity and business planning.

**4. Customer-Level Forecast**

Forecasting is organized according to the customer.

| Customer | Forecast |
|---|---:|
| Customer A | 80,000 |
| Customer B | 50,000 |
| Customer C | 70,000 |

Useful for customer account planning, customer service, and commercial review.

**5. Market-Level Forecast**

Demand is estimated for a broader market or industry.

Example:

| Market | Estimated demand |
|---|---:|
| Automotive electronics | 500,000 |
| Consumer electronics | 800,000 |
| Industrial electronics | 300,000 |

Useful for strategic business planning and long-term market analysis.

### B. Forecast Time Periods

| Time period | Typical application |
|---|---|
| Daily | Short-term scheduling and immediate operational visibility |
| Weekly | Near-term production and material coordination |
| Monthly | Demand Planning and S&OP |
| Quarterly | Business and capacity planning |
| Annual | Strategic and financial planning |

These are examples, not universal rules. Actual planning periods depend on the industry, product, supplier lead times, and company processes.

### C. Forecast Granularity

**Forecast granularity** refers to the level of detail used to represent demand.

It has two major dimensions:

1. Product granularity: SKU, model, family, customer, or market.
2. Time granularity: Daily, weekly, monthly, quarterly, or annual.

Example:

A forecast of 100,000 units for the entire product family in December has relatively low product detail.

A forecast showing the exact expected demand of each SKU every week has much higher detail.

### D. Forecast Aggregation

Forecast aggregation means combining demand information from smaller units into a larger group.

Example:

| SKU | January forecast |
|---|---:|
| SKU A | 30,000 |
| SKU B | 40,000 |
| SKU C | 20,000 |
| SKU D | 10,000 |
| **Product-family total** | **100,000** |

The company has converted four SKU forecasts into one product-family forecast.

Why is this useful?

Because management may not need to review every SKU during an executive-level S&OP meeting.

Instead, it can review the overall product-family demand and focus on major business risks.

### E. Why Aggregated Forecasts Can Be More Stable

Imagine that three SKUs have the following forecast errors:

| SKU | Forecast error |
|---|---:|
| A | +10,000 |
| B | -8,000 |
| C | -2,000 |
| **Total** | **0** |

The errors offset each other.

At individual SKU level, may forecast errors. But at the aggregated level, the total forecast happens to match actual demand.

This is why aggregated forecasts can appear more accurate or stable.

However, be careful.

**An accurate product-family forecast does not automatically mean that every individual SKU forecast is accurate.**

You may have 100,000 units of total demand but the wrong product mix.

For manufacturing, that can still create material shortages, excess inventory, and production problems.

## 4.7 Forecasting Process: From Data to Demand Forecast

Now let's examine how a Demand Planner actually develops a forecast.

The following is a simplified but practical forecasting workflow.

### The 10-step forecasting workflow

1. **Define the forecasting objective.** Determine what the company needs to estimate and why. Example: Estimate monthly demand for the next 12 months.
2. **Identify the product and planning level.** Determine whether the forecast will be prepared by SKU, product model, family, or customer.
3. **Select the forecast horizon.** Determine how far into the future the forecast should extend.
4. **Gather demand information.** Collect historical sales, customer forecasts, orders, commercial inputs, and market information.
5. **Review and prepare the data.** Check missing information, duplicate records, unusual values, and data inconsistencies.
6. **Identify demand patterns.** Understand whether demand is stable, increasing, declining, seasonal, or irregular.
7. **Select the forecasting approach.** Determine whether qualitative, quantitative, or a combination of approaches is appropriate.
8. **Generate the initial forecast.** Produce the first demand estimate based on the selected approach.
9. **Review business assumptions and adjustments.** Incorporate validated information about promotions, new customers, product changes, and other business events.
10. **Validate and communicate the forecast.** Review the final numbers, document assumptions, and communicate the forecast to relevant departments.

Let's emphasize three important steps.

**Step 5: Data preparation**

This is especially important for an analyst.

Imagine your historical sales data contains:

- Duplicate orders.
- Cancelled orders.
- Missing months.
- Incorrect SKU classifications.
- One-time abnormal sales.
- Sales affected by product shortages.

If these problems are not reviewed, the forecast may be misleading.

**Step 6: Pattern identification**

Before forecasting, understand what happened historically.

For example:

- Trend: Demand generally increases over time.
- Seasonality: Demand regularly increases during particular periods.
- Level: Demand remains relatively stable.
- Irregular variation: Demand changes unpredictably.

**Step 9: Business adjustments**

This is where collaboration matters.

The statistical or initial forecast may not reflect upcoming events.

For example, a new customer launch may increase expected demand. The planner needs to validate this information before incorporating it.

## 4.8 Understanding Forecast Uncertainty

This is one of the most important concepts in professional demand planning.

**A forecast is not a promise that actual demand will match the estimated quantity.**

Why?

Because customer behavior and market conditions can change.

### A. Expected Demand vs. Actual Demand

Suppose the company forecasts 100,000 units for December.

At the end of December, actual demand reaches 115,000 units.

| Metric | Quantity |
|---|---:|
| Forecast demand | 100,000 |
| Actual demand | 115,000 |
| Difference | +15,000 |

The actual demand exceeded the forecast by 15,000 units.

This is a forecast error.

A positive difference here means actual demand was higher than forecast.

### B. Sources of Forecast Uncertainty

| Source | Example |
|---|---|
| Customer behavior | Customer suddenly increases or reduces purchases |
| Market changes | Industry demand changes unexpectedly |
| Competition | Customer shifts to another supplier |
| Economic conditions | Economic slowdown reduces purchasing |
| Supply disruption | A shortage may prevent customers from ordering normally |
| Product changes | A new product replaces an existing product |
| Forecast input errors | Incorrect customer information or duplicate data |

### C. Forecast Assumptions

A forecast is developed using assumptions.

Example:

- Customer A will continue ordering 30,000 units monthly.
- No major price change is expected.
- No major supply disruption is anticipated.
- The product will remain commercially active.
- The expected market growth will continue.

These assumptions should be documented.

Why?

Because if actual demand changes, the planner can investigate which assumptions were no longer valid.

### D. Forecast Horizon and Uncertainty

Generally, the farther into the future we forecast, the more uncertainty we face.

Example:

| Forecast horizon | General uncertainty |
|---|---|
| Next week | Usually lower |
| Next month | Higher |
| Next quarter | Potentially higher |
| Next 12 months | Generally much higher |

Why?

Because more things can change over a longer period.

However, this is not an absolute rule.

A product with stable contractual demand may have relatively predictable long-term demand, while a newly launched consumer product may have highly uncertain demand even in the next few weeks.

### E. Why Forecasts Must Be Updated

A forecast should not be treated as a permanent number.

It must be reviewed when new information becomes available.

Example:

November forecast for January: 100,000 units.

During December, a customer announces a product launch that will increase its component requirements.

The January forecast may need to be updated.

This process is commonly called **forecast revision** or **forecast updating**.

### F. Forecast Is Not a Guaranteed Order

This distinction is critical.

| Forecast | Customer order |
|---|---|
| Expected future requirement | Actual submitted order |
| May change | Has a defined order status and terms |
| Based on estimates and assumptions | Based on a customer's purchasing request |
| Supports advance planning | Supports order fulfillment |

A company may forecast 100,000 units even if only 30,000 units have been formally ordered.

The remaining 70,000 units represent expected demand, not confirmed purchase orders.

This is precisely why forecasting is necessary.

---

# 5. PRACTICAL EXAMPLES AND APPLICATIONS

Let's now combine the concepts into one manufacturing scenario.

## 5.1 Business Scenario: Electronic Components Manufacturer

Imagine that you work as a Demand Planning Analyst for an electronic components manufacturer.

The company produces MLCC-related electronic components for several customers.

You are assigned to prepare the December 2026 demand forecast.

The planning team provides the following information.

### A. Historical Monthly Demand

*Illustrative data.*

| Month | Actual demand |
|---|---:|
| July | 80,000 |
| August | 85,000 |
| September | 90,000 |
| October | 95,000 |
| November | 100,000 |

The historical demand shows a general upward trend.

### B. Current Customer Orders

| Customer | Confirmed orders for December |
|---|---:|
| Customer A | 25,000 |
| Customer B | 20,000 |
| Customer C | 15,000 |
| **Total** | **60,000** |

These are already submitted orders.

### C. Customer Forecasts

| Customer | Expected December demand |
|---|---:|
| Customer A | 40,000 |
| Customer B | 35,000 |
| Customer C | 25,000 |
| **Total** | **100,000** |

Important: Assume that these customer forecasts represent total expected December demand, including the quantities already ordered.

Therefore, we should not add the 60,000 confirmed orders to the 100,000 customer forecast.

Doing so would double-count demand.

### D. Sales Team Input

The Sales team provides the following information:

- Customer A expects to launch a new product.
- The launch may generate an additional 10,000 units of demand.
- Customer B expects stable purchasing.
- Customer C may reduce purchases because of a product transition.

The Sales team estimates that Customer C's demand may decrease by 5,000 units.

### E. Product Information

The company also has a product phase-out:

- Existing Model X demand is expected to decrease by 5,000 units.
- Replacement Model Y is expected to receive additional demand.

For simplicity, assume the phase-out adjustment is already included in the customer-level estimates above. We should not subtract it again.

### F. External Information

Market research indicates that the industry may grow by approximately 3%.

However, the research is broad and does not necessarily apply equally to all customers.

The planner records it as supporting market information rather than automatically applying a 3% increase to every forecast.

## 5.2 Developing the Initial Forecast

Let's organize the information.

| Input | Quantity | Treatment |
|---|---:|---|
| Historical November demand | 100,000 | Historical reference |
| Customer A forecast | 40,000 | Include |
| Customer B forecast | 35,000 | Include |
| Customer C forecast | 25,000 | Include |
| Confirmed orders | 60,000 | Already included in customer forecasts |
| New product opportunity | +10,000 | Potential adjustment, subject to validation |
| Customer C reduction | -5,000 | Already reflected in its 25,000 forecast |
| Market growth | +3% | Contextual input, not automatically added |

Initial customer-based forecast:

[
40,000+35,000+25,000=100,000
]

Validated new product opportunity:

[
100,000+10,000=110,000
]

**Illustrative December demand estimate**

| Component | Quantity |
|---|---:|
| Customer-based forecast | 100,000 |
| Validated opportunity | +10,000 |
| **Revised forecast** | **110,000** |

Assuming the additional 10,000-unit opportunity is validated and is not already included in the customer forecasts.

Notice how we did not simply add every available number.

We checked for overlapping information and avoided double counting.

This is a fundamental skill in demand planning.

## 5.3 What Happens Next?

The forecast is not the end of the process.

It becomes an input to other planning activities.

### Production Planning

Assume:

- December demand plan: 110,000 units.
- Available finished goods inventory: 20,000 units.

Assuming all inventory is usable and available for customer fulfillment:

[
110,000-20,000=90,000
]

The company needs to consider producing 90,000 additional units.

### Raw Material Planning

Assume:

- Each 1,000 units requires 2 kg of a particular raw material.
- Required production: 90,000 units.

[
\frac{90,000}{1,000}\times2=180\text{ kg}
]

The production-related material requirement is 180 kg, before considering yield losses, scrap, safety stock, and existing raw material inventory.

### Capacity Planning

Assume:

- Required production: 90,000 units.
- Available monthly production capacity: 80,000 units.

[
90,000-80,000=10,000
]

The company has a potential capacity shortage of 10,000 units.

Possible actions:

- Overtime.
- Additional production shifts.
- Capacity reallocation.
- Outsourcing.
- Inventory utilization.
- Customer delivery prioritization.

The important point is that the demand forecast reveals a potential problem before the company encounters it operationally.

---

# 6. FORMULAS AND CALCULATIONS

Although this topic focuses on forecasting fundamentals rather than forecasting algorithms, there are a few basic calculations worth understanding.

These help us interpret the relationship between forecast and actual demand.

## 6.1 Forecast Difference

The simplest comparison is:

[
\text{Forecast Difference}=\text{Actual Demand}-\text{Forecast}
]

Example:

- Forecast: 100,000 units.
- Actual demand: 115,000 units.

[
115,000-100,000=15,000
]

Interpretation: Actual demand exceeded the forecast by 15,000 units.

## 6.2 Forecast Error Percentage

For a basic comparison:

[
\text{Absolute Error \%}=
\frac{|\text{Actual}-\text{Forecast}|}{\text{Actual}}\times100
]

Using the same example:

[
\frac{|115,000-100,000|}{115,000}\times100
]

[
=13.04\%
]

The absolute forecast error is 13.04% of actual demand.

This is a simplified error calculation. Other forecasting performance metrics and their proper applications will be discussed when we reach the relevant forecasting topics.

## 6.3 Demand Coverage from Existing Inventory

A simple planning calculation:

[
\text{Net Requirement}=
\text{Expected Demand}-\text{Available Inventory}
]

Example:

| Variable | Quantity |
|---|---:|
| Expected demand | 110,000 |
| Available inventory | 20,000 |
| Net requirement | 90,000 |

This gives an initial indication of the additional quantity that needs to be supplied.

However, a complete production or supply requirement calculation must also consider scheduled receipts, inventory policies, production yield, and timing.

## 6.4 Important Distinction: Forecast Accuracy vs. Forecast Value

A forecast may be statistically accurate but still have limited business usefulness if it is not communicated on time.

For example:

- A highly accurate forecast received after the supplier's procurement deadline may not help procurement.
- A slightly less accurate forecast received early may provide valuable preparation time.

Therefore, professional demand planning considers both:

- Forecast quality.
- Forecast availability and timing.

---

# 7. BUSINESS PERSPECTIVE AND DECISION-MAKING

Now let's move from understanding forecasting to thinking like an S&OP professional.

## 7.1 What Does a Demand Planning Analyst Actually Do?

A Demand Planning Analyst does not simply collect numbers and enter them into Excel.

The analyst needs to understand the business meaning behind those numbers.

Typical responsibilities include:

| Activity | Analyst's responsibility |
|---|---|
| Historical data analysis | Identify demand trends and unusual behavior |
| Customer forecast review | Evaluate customer-provided estimates |
| Order analysis | Identify confirmed and outstanding requirements |
| Sales collaboration | Understand commercial opportunities and changes |
| Product lifecycle review | Account for launches and phase-outs |
| Forecast preparation | Develop the initial demand estimate |
| Forecast adjustment | Review and document justified changes |
| Forecast validation | Check whether the numbers are reasonable |
| Reporting | Communicate forecast changes and risks |
| Performance monitoring | Compare actual demand against previous forecasts |

## 7.2 Questions an S&OP Analyst Should Ask

Let's say you receive a demand forecast showing a 30% increase next month.

Instead of immediately accepting the number, ask:

**Demand behavior**
- Why is demand increasing?
- Is this a normal trend or an unusual event?
- Is the increase supported by historical data?

**Customer information**
- Which customers are driving the increase?
- Are these confirmed orders or customer estimates?
- Have customers previously provided reliable forecasts?

**Commercial information**
- Is there a new customer?
- Is there a product launch?
- Is there a promotion or price change?

**Product information**
- Is the increase associated with a new product?
- Is another product being phased out?
- Is the forecast correctly reflecting product substitution?

**Operational implications**
- Can production support the increase?
- Are raw materials available?
- Will additional supplier capacity be required?
- Is there a potential inventory or capacity risk?

This is how an analyst moves from simply reporting numbers to supporting business decisions.

## 7.3 Forecast Changes Must Be Communicated

Imagine the demand forecast changes from 100,000 to 130,000 units.

If this information is not communicated:

- Procurement may purchase insufficient raw materials.
- Production may retain an outdated schedule.
- Warehouse planning may underestimate storage requirements.
- Finance may use outdated revenue assumptions.
- Customer Service may provide unrealistic delivery commitments.

Forecasting is not an isolated activity.

It requires cross-functional communication.

## 7.4 The Importance of Forecast Ownership

Different departments contribute different information.

| Department | Main contribution |
|---|---|
| Sales | Customer opportunities and commercial insights |
| Demand Planning | Forecast preparation, analysis, and coordination |
| Marketing | Promotions and market activities |
| Product Management | Product launches, lifecycle, and phase-outs |
| Customer Service | Customer orders and demand changes |
| Finance | Revenue and financial implications |
| Supply Planning | Supply feasibility and constraints |
| Procurement | Supplier capacity and material availability |
| Manufacturing | Production capability and operational constraints |

Demand Planning helps consolidate these perspectives into a consistent demand outlook.

The exact responsibilities and approval structure vary by organization.

## 7.5 Why the Demand Forecast Must Be Evaluated Before Supply Planning

This is an important S&OP principle.

Supply Planning needs to know what demand the business is preparing to support.

Consider two possible situations:

**Scenario A:**

The company forecasts 100,000 units.

Production capacity is 120,000 units.

Potentially, the company has sufficient capacity.

**Scenario B:**

The company forecasts 150,000 units.

Production capacity is 120,000 units.

There is a potential shortage of 30,000 units.

The supply team can now evaluate alternatives.

If the demand forecast is inaccurate or incomplete, supply planning decisions may also be inappropriate.

However, this does not mean supply planning must wait until every demand number is perfectly finalized. In actual S&OP cycles, demand and supply teams may work iteratively and exchange information while plans are being developed.

## 7.6 Initial Statistical Forecast vs. Consensus Demand Plan

Let's make another important distinction.

**Initial statistical forecast**

The first forecast generated using historical demand patterns and an appropriate quantitative approach.

**Consensus demand plan**

The demand outlook reviewed and aligned by relevant business stakeholders after considering additional information and justified adjustments.

Example:

| Item | Quantity |
|---|---:|
| Initial statistical forecast | 100,000 |
| Validated customer launch | +15,000 |
| Expected phase-out impact | -5,000 |
| **Consensus demand plan** | **110,000** |

The consensus demand plan represents the agreed planning view, based on the information and assumptions available during the review.

It is not necessarily the same as the sales target or the original statistical forecast.

---

# 8. KEY TAKEAWAYS

Before proceeding to the exercises, let's consolidate the important concepts.

## 8.1 Fundamental Concepts

| Concept | What you should remember |
|---|---|
| Demand forecasting | Estimating future customer demand |
| Forecast horizon | How far into the future we estimate demand |
| Forecast period | The time interval represented by a forecast |
| Forecast granularity | The level of detail in the forecast |
| Forecast aggregation | Combining smaller demand quantities into larger groups |
| Qualitative forecasting | Forecasting based on judgment and business knowledge |
| Quantitative forecasting | Forecasting based on numerical data and statistical approaches |
| Forecast uncertainty | The possibility that actual demand will differ from the estimate |
| Forecast adjustment | A justified change to an initial forecast |
| Consensus demand plan | The reviewed and agreed demand outlook |

## 8.2 Five Important Principles to Remember

1. **A forecast is an estimate, not a guarantee.** Actual demand can be higher or lower.
2. **Forecasting is evidence-based.** It uses historical information, customer insights, commercial activities, and market information.
3. **Forecast and target are different.** A forecast estimates what is expected to happen; a target represents what the business wants to achieve.
4. **Qualitative and quantitative approaches complement each other.** Historical data provides a foundation, while business knowledge helps explain future changes.
5. **Forecasting supports integrated business decisions.** Its value extends beyond Sales and Demand Planning into procurement, manufacturing, inventory, finance, and customer service.

## 8.3 The Big Picture

If you remember only one relationship from this lesson, remember this:

```
Demand Information
(What do we know about customers and the market?)
        ↓
Demand Forecast
(What do we expect customers to require?)
        ↓
Consensus Demand Plan
(What demand outlook have we agreed to use?)
        ↓
Supply and Financial Planning
(Can we support the expected demand, and what will it mean for the business?)
```

---

# 9. KNOWLEDGE CHECK AND EXERCISES

**Assessment: Topic 3.3**

Now let's test whether you can apply what you learned, not just memorize definitions.

We'll use three progressive levels.

- Level 1: Understanding
- Level 2: Technical Application
- Level 3: Professional Analysis

**Instructions:** Answer in your own words. You can use Taglish. For numerical exercises, show your calculations and reasoning.

I will evaluate your answers, identify what you understood correctly, correct misconceptions, and explain the professional reasoning behind each answer.

Do not worry about getting everything correct on your first attempt.

## Exercise A: Level 1 – Understanding

**1.** What is demand forecasting? Explain it in your own words. Why do manufacturing companies need to estimate future demand instead of simply waiting for customer orders?

**2.** Explain the difference between the following:

- Demand forecast
- Customer order
- Sales target
- Demand plan

Provide one example for each.

**3.** A company's management wants to sell 150,000 units next month. However, based on available information, the Demand Planner estimates that customers will only require 120,000 units.

Should the Demand Planner change the forecast to 150,000 units to match management's target? Explain why or why not.

**4.** What is the difference between qualitative and quantitative forecasting? Give one business situation where each approach would be useful.

**5.** Why does forecast uncertainty generally increase as the forecast horizon becomes longer?

## Exercise B: Level 2 – Technical Application

**6. Forecast Input Evaluation**

An electronic components manufacturer has the following information:

| Information | Quantity |
|---|---:|
| Historical November demand | 100,000 |
| Confirmed customer orders | 50,000 |
| Customer forecast | 90,000 |
| Additional sales opportunity | 15,000 |

Assume the customer forecast already includes the confirmed orders.

The sales opportunity is still subject to customer approval.

Answer:

a. Which information should be considered when developing the initial forecast?

b. Should you add the confirmed orders to the customer forecast? Why?

c. Should the additional 15,000 units automatically be included in the forecast?

d. What additional information would you request before accepting the sales opportunity?

**7. Forecast Level and Granularity**

A company manufactures five different capacitor SKUs under one product family.

Management wants to understand total demand for the next quarter, while Procurement needs to understand the demand for each individual SKU.

What forecast levels would you recommend for each department? Explain why.

**8. Forecast Calculation**

A company has the following information:

| Item | Quantity |
|---|---:|
| Forecast demand | 120,000 |
| Actual demand | 135,000 |
| Available finished goods inventory | 25,000 |
| Available production capacity | 100,000 |

Calculate:

a. Forecast difference.

b. Absolute forecast error percentage, using actual demand as the denominator.

c. Initial net demand requirement after available finished goods inventory.

d. Potential production capacity shortage if the entire net requirement must be produced.

e. What operational actions would you recommend?

## Exercise C: Level 3 – Professional Analysis

**9. Business Scenario**

You are a Demand Planning Analyst.

Your company forecasts 200,000 units for January.

However, the following developments occur:

- Sales expects a new customer opportunity worth 30,000 units.
- One existing customer announces a possible 20% reduction in purchases.
- A major product is scheduled for phase-out.
- Market research indicates a potential increase in industry demand.
- The production team reports limited capacity.

As the Demand Planning Analyst:

a. What information would you validate first?

b. Which departments would you coordinate with?

c. How would you determine whether the new customer opportunity should be incorporated?

d. Should the production team's capacity limitation automatically reduce the demand forecast? Explain.

e. What would you communicate during the Demand Review meeting?

**10. Professional Judgment Question**

Imagine that you have two forecasts:

- Forecast A: 100,000 units, generated using historical data.
- Forecast B: 140,000 units, provided by the Sales team based on expected customer growth.

Which forecast should the company use?

Explain how you would investigate the difference and arrive at a reasonable demand plan.

---

## How we will evaluate your answers

| Assessment area | Weight |
|---|---:|
| Conceptual understanding | 25% |
| Technical application | 30% |
| Numerical accuracy | 20% |
| Business reasoning | 25% |
| **Total** | **100%** |

The objective is to develop your ability to explain, calculate, analyze, and defend demand planning decisions.

You don't need to answer all ten questions in one message. You can answer Exercises A, B, and C separately.

---

## Topic 3.3 Completion Checklist

- [ ] I understand what demand forecasting means and why companies need it.
- [ ] I can distinguish forecasts, orders, targets, budgets, and demand plans.
- [ ] I understand the major inputs used in forecasting.
- [ ] I can explain qualitative versus quantitative forecasting.
- [ ] I understand forecast levels, granularity, and aggregation.
- [ ] I understand the basic forecasting workflow.
- [ ] I recognize forecast uncertainty and its business implications.
- [ ] I can explain how forecasting supports S&OP decisions.

**Our next step:** Complete the knowledge check first. I will assess your answers and help strengthen any areas that need improvement.

Once you are comfortable with Topic 3.3, we can proceed to **Module 3 – Topic 3.4: Demand Forecasting Methods and Techniques**, where we will start exploring the actual statistical forecasting methods and their calculations.

For now, we stay on Topic 3.3.
