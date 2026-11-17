# Module 3 – Demand Planning
## Topic 3.2: Types of Demand Information

**Main learning focus:** Understanding where demand information comes from, what each source tells us, how reliable it is, and how to combine different sources without double-counting.

---

# 1. Topic Overview

## 1.1 What will we discuss?

Sa previous topic, **Topic 3.1: Understanding Demand**, pinag-aralan natin kung ano ang demand, paano ito naiiba sa actual sales, customer orders, at customer requirements.

Ngayon, isang level deeper tayo.

Imagine na ikaw ang Demand Planning Analyst ng isang electronic components manufacturer.

Mayroon kang iba't ibang information:

- Last month's sales: 100,000 units.
- Confirmed customer orders: 85,000 units.
- Customer forecast: 120,000 units.
- Sales team's estimate: 135,000 units.
- New customer project: additional 20,000 units.
- Market intelligence: expected industry demand growth of 10%.

Ang tanong:

**Alin sa mga information na ito ang dapat gamitin para malaman kung gaano karaming products ang posibleng kailanganin ng customers next month?**

Hindi puwedeng basta pagsamahin lahat.

Bakit? Dahil maaaring overlapping ang information. Halimbawa, baka kasama na sa customer forecast ang 85,000 units na confirmed orders.

Dito pumapasok ang importance of understanding different types of demand information.

## 1.2 Why is this topic important?

Companies rarely have one perfect source of demand information.

Each source provides a different piece of the picture:

- Historical data tells us what happened.
- Customer orders tell us what customers have already ordered.
- Customer forecasts tell us what customers expect to purchase.
- Sales input tells us what the commercial team anticipates.
- Market intelligence tells us what is happening outside the company.
- Demand adjustments tell us about special events that may change future requirements.

Kapag pinagsama at na-validate nang maayos ang mga ito, mas nagiging reliable ang demand planning input.

## 1.3 Connection to S&OP

Ang relationship ay:

**Demand Information Sources**

Historical data • Orders • Customer forecasts • Sales input • Market intelligence • Special events

↓

**Data Validation and Consolidation**

Check accuracy • Identify overlaps • Validate assumptions • Apply adjustments

↓

**Demand Planning Input**

A consolidated view of expected customer demand

↓

**S&OP Demand Review**

Review assumptions, risks, opportunities, and business implications

**Important distinction:** Demand information is the raw material for planning. It is not automatically the final demand plan.

---

# 2. Layman's Explanation

## 2.1 What is demand information?

Let's use a simple example.

May bakery ka. Gusto mong malaman kung ilang loaves of bread ang dapat mong ihanda bukas.

Ano ang puwede mong tingnan?

| Information | What it tells you |
|---|---|
| Yesterday's sales | Ilan ang nabenta kahapon |
| Today's customer orders | Ilan ang naka-order na |
| Regular customers' requests | Ilan ang inaasahang bibilhin nila |
| Your sales estimate | Ilan ang tingin mong mabebenta |
| Upcoming town event | Posibleng dumami ang buyers |
| Special bulk order | May additional requirement na 500 loaves |

Lahat ng ito ay demand information.

Pero hindi ibig sabihin na lahat ng numbers ay dapat idagdag.

For example:

- 100 loaves from existing customer orders.
- 150 loaves from customer forecast.
- 120 loaves from your own sales estimate.

Hindi necessarily 370 loaves ang demand.

Possible na ang 100 existing orders ay kasama na sa 150 customer forecast, habang ang 120 sales estimate ay sarili mong prediction lamang.

Ang trabaho mo ay alamin kung ano ang unique information na dala ng bawat source.

## 2.2 Demand versus Demand Information

Magkaiba ang dalawang terms.

| Term | Simple meaning |
|---|---|
| Demand | Actual or expected customer requirement for a product |
| Demand information | Data, signals, records, and business insights that help us understand and estimate that requirement |

Think of it this way:

**Demand is what we want to understand. Demand information is what we use to understand it.**

Halimbawa:

- Demand: Customers may need 150,000 capacitors next month.
- Demand information: Historical purchases, current orders, customer forecasts, sales estimates, and market trends supporting that expectation.

## 2.3 Why do we need multiple sources?

Dahil may kanya-kanyang blind spots ang bawat source.

Imagine using only historical sales.

Last month, 100,000 units ang nabenta. Pero this month:

- A major customer plans to increase purchases.
- A new customer is entering the market.
- One existing customer is discontinuing a product.
- A competitor has experienced a supply disruption.

Kung historical sales lang ang titingnan mo, hindi mo makikita ang complete picture.

**The lesson: Past performance is useful, but future demand can change because of events that have not yet appeared in historical data.**

---

# 3. Technical Explanation

Now let's introduce the professional terminology.

## 3.1 Definition of Demand Information

In Demand Planning, demand information refers to the quantitative and qualitative inputs used to understand, estimate, validate, and anticipate customer requirements over a defined planning horizon.

There are two major forms:

**A. Quantitative information**

Numerical data that can be measured.

Examples:
- Historical monthly sales volume.
- Open customer orders.
- Customer forecast quantities.
- Statistical forecast.
- Order backlog.
- Promotional sales volume.

**B. Qualitative information**

Business insights that may not initially be expressed as numerical data.

Examples:
- A customer plans to expand its factory.
- A competitor is exiting a market.
- A new regulation may increase demand.
- A customer is considering switching suppliers.
- Sales expects a major project to proceed.

Qualitative information can eventually be translated into quantitative planning assumptions, provided that there is sufficient evidence.

## 3.2 Three important dimensions of demand information

When evaluating any demand information, ask three questions:

| Dimension | Question |
|---|---|
| Source | Where did the information come from? |
| Time orientation | Does it describe the past, present, or future? |
| Reliability | How much confidence can we place in it? |

For example:

A confirmed customer order has a different reliability profile from a salesperson's estimate.

But be careful: confirmed orders are not automatically guaranteed consumption. Customers can still cancel, reschedule, or fail to take delivery depending on their contractual arrangements.

## 3.3 Demand information versus demand forecast

These are also different.

- **Demand information:** The available evidence and inputs.
- **Demand forecast:** An estimate of future demand developed using selected information and forecasting methods.
- **Demand plan:** The reviewed and agreed planning view used to support business decisions.

The distinction matters because raw information still needs interpretation and validation.

---

# 4. Detailed Discussion

Let's discuss each demand information source individually. This is the most important part of the lesson.

## 4.1 Historical Demand and Actual Sales

### A. What is historical demand?

Historical demand refers to the record of customer requirements or demand observed during previous periods.

It helps answer:

- How much did customers need?
- Which products were frequently requested?
- When did demand increase or decrease?
- Are there recurring seasonal patterns?
- Is demand stable or volatile?

For example:

An electronic components manufacturer records the following monthly demand history:

| Month | Historical demand (units) |
|---|---:|
| January | 90,000 |
| February | 95,000 |
| March | 98,000 |
| April | 105,000 |
| May | 110,000 |
| June | 115,000 |

Makikita natin na may increasing demand pattern.

This is useful when establishing a baseline for future planning.

### B. What is historical sales data?

Historical sales data refers to recorded transactions representing products sold during previous periods.

Examples of information collected:
- Quantity sold.
- Sales revenue.
- Product number.
- Customer name or account.
- Sales transaction date.
- Shipment date.
- Invoice date.

**Important:** Historical demand and historical sales are related, but they are not always identical.

Consider this situation:

A customer needs 10,000 units, but the manufacturer only has 7,000 units available.

| Item | Quantity |
|---|---:|
| Customer requirement | 10,000 |
| Available inventory | 7,000 |
| Actual shipment | 7,000 |
| Unfulfilled requirement | 3,000 |

If the company records only actual shipments, its historical sales data will show 7,000 units.

But the actual customer requirement was 10,000 units.

This is called *censored demand* or demand obscured by supply constraints.

The historical sales record may understate actual demand.

### C. How companies collect historical demand information

Common sources include:

| Source | Information collected |
|---|---|
| ERP system | Sales orders, deliveries, invoices |
| CRM system | Customer interactions and opportunities |
| MES | Manufacturing and production records |
| Order management system | Customer order transactions |
| Shipment records | Actual shipped quantities |
| Sales reports | Sales volume and revenue |

ERP stands for Enterprise Resource Planning. It is a business system used to manage transactions and operational information across different departments.

### D. Limitations of historical sales

Historical sales may be affected by:

1. **Stockouts:** Customers wanted more than the company could supply.
2. **Lost sales:** Customers purchased from another supplier because of unavailability.
3. **Order cancellations:** Previously recorded demand was cancelled.
4. **Supply constraints:** Production capacity prevented the company from fulfilling requirements.
5. **Unusual events:** One-time projects or exceptional purchases distorted normal demand.

For example, imagine that monthly sales dropped from 100,000 to 70,000 units.

Does that automatically mean customer demand decreased by 30%?

Not necessarily.

Perhaps the company experienced a raw material shortage and could only supply 70,000 units.

An analyst should investigate the reason behind the decline before interpreting it as a demand decrease.

**Professional insight:** Historical sales data needs cleansing and contextual interpretation before it is used as a forecasting baseline.

---

## 4.2 Customer Orders and Order Backlog

Customer orders are among the most important demand information sources because they represent specific purchasing transactions.

### A. Confirmed customer orders

These are customer orders that have been formally accepted or confirmed by the supplier according to the company's order-processing rules.

Example:

Customer ABC submits an order for 20,000 capacitors with a requested delivery date of December 10.

The company validates and accepts the order.

That 20,000 units becomes part of the company's confirmed order information.

### B. Open customer orders

Open customer orders are accepted orders that have not yet been completely fulfilled or closed.

Example:

| Order | Ordered quantity | Delivered | Open quantity |
|---|---:|---:|---:|
| SO-001 | 20,000 | 10,000 | 10,000 |
| SO-002 | 15,000 | 0 | 15,000 |
| SO-003 | 25,000 | 15,000 | 10,000 |
| **Total** | **60,000** | **25,000** | **35,000** |

The company still has 35,000 units of open customer orders.

### C. What is order backlog?

Order backlog refers to customer orders that remain unfulfilled as of a particular reporting date.

It is important to understand that backlog is generally a subset of open customer orders, not an additional demand category that should automatically be added to them.

Example:

- Open orders: 35,000 units.
- Past-due orders: 10,000 units.
- Future-due orders: 25,000 units.

The total backlog remains 35,000 units.

Do not add 35,000 + 10,000 + 25,000.

That would double-count the orders.

### D. Unfulfilled orders

These are orders or portions of orders that have not yet been delivered or otherwise fulfilled.

Depending on company terminology, they may include:
- Orders awaiting production.
- Orders awaiting raw materials.
- Orders awaiting shipment.
- Past-due orders.
- Partially delivered orders.

### E. Customer order cancellations

Customers may cancel orders because of:
- Reduced production requirements.
- Changes in business conditions.
- Excess inventory.
- Product redesign.
- Project cancellation.

Example:

A customer originally ordered 50,000 units but cancelled 10,000 units.

The remaining valid order quantity becomes 40,000 units, assuming the cancellation has been formally processed.

The analyst must ensure that cancelled quantities are not still included in the open order report.

### F. Order changes and rescheduling

Customers may change:
- Order quantity.
- Requested delivery date.
- Product configuration.
- Delivery location.
- Order priority.

Example:

| Original requirement | Revised requirement |
|---|---|
| 20,000 units in December | 10,000 units in December |
| | 10,000 units in January |

The total quantity remains unchanged, but the demand timing changes.

This is extremely important in S&OP.

A demand shift between months can create:
- Production schedule changes.
- Inventory buildup.
- Capacity pressure.
- Material availability problems.

### G. Requested versus confirmed delivery dates

These dates have different meanings.

| Date | Meaning |
|---|---|
| Requested delivery date | When the customer wants the product |
| Confirmed delivery date | When the supplier commits to delivering the product |

Example:

Customer requests 15,000 units on December 5, but the supplier confirms December 12.

The customer requirement still exists for December 5, but the supplier's current delivery commitment is December 12.

For demand planning, the analyst must understand both dates. The requested date helps reveal customer need, while the confirmed date helps establish the current fulfillment commitment.

---

## 4.3 Customer Forecasts and Demand Commitments

### A. What is a customer forecast?

A customer forecast is an estimate or projection provided by a customer regarding the quantity of products it expects to purchase or require in future periods.

Example:

A major electronics manufacturer sends its supplier a three-month forecast:

| Month | Customer forecast |
|---|---:|
| December | 100,000 |
| January | 120,000 |
| February | 140,000 |

This provides visibility into possible future requirements.

However, these quantities are not necessarily confirmed orders.

### B. Customer forecast versus confirmed customer order

This distinction is critical.

| Customer forecast | Confirmed customer order |
|---|---|
| Expected future purchasing requirement | Formally accepted purchasing transaction |
| May change frequently | Usually more specific and transaction-based |
| May cover longer planning horizons | Usually has defined quantities and dates |
| Not necessarily binding | Subject to agreed order terms |
| Useful for anticipating future demand | Useful for identifying known demand commitments |

Think of it this way:

A customer forecast says:

"I expect to need 100,000 units next month."

A confirmed customer order says:

"I am ordering 100,000 units under this purchase order."

They communicate different levels of purchasing visibility.

### C. Customer forecast visibility

Visibility refers to how much information the supplier receives about the customer's future requirements.

For example:

- Week 1: 10,000 units.
- Week 2: 15,000 units.
- Week 3: 20,000 units.
- Week 4: 25,000 units.

The customer provides a weekly forecast rather than only a monthly total.

This gives the supplier better visibility of expected demand timing.

### D. Customer forecast reliability

Not all customers provide equally reliable forecasts.

Consider:

| Customer | Forecast | Actual orders | Forecast error |
|---|---:|---:|---:|
| A | 100,000 | 95,000 | 5,000 |
| B | 100,000 | 65,000 | 35,000 |
| C | 100,000 | 110,000 | 10,000 |

Customer A has relatively accurate forecasting performance.

Customer B significantly overestimated its requirements.

Customer C underestimated its requirements.

Over time, a company can evaluate each customer's forecast reliability and use the findings when assessing forecast inputs.

### E. Forecast changes and revisions

Customer forecasts are not static.

For example:

| Forecast version | December requirement |
|---|---:|
| Version 1 | 100,000 |
| Version 2 | 115,000 |
| Version 3 | 95,000 |
| Version 4 | 120,000 |

This is why forecast version control matters.

The analyst should know:
- When the forecast was received.
- Which version is current.
- What changed.
- Why it changed.
- Whether the change is supported by customer information.

### F. Customer commitments versus expected purchasing behavior

A customer may communicate that it expects to purchase 100,000 units next month.

However, there are different levels of confidence:

1. Customer expressed interest.
2. Customer provided a preliminary forecast.
3. Customer provided an updated forecast.
4. Customer issued a purchase order.
5. Supplier accepted the order.

These are not interchangeable.

The closer the information is to an actual accepted transaction, the more specific the purchasing commitment generally becomes.

---

## 4.4 Internal Sales Forecasts and Sales Input

### A. What is a sales forecast?

A sales forecast is an estimate of future sales or customer purchasing requirements developed or contributed to by the Sales organization.

Sales teams often have information that is not yet visible in ERP transactions or historical sales reports.

Examples:
- A customer is planning to expand production.
- A new product will be introduced.
- A customer is considering increasing its monthly purchases.
- A major project may start next quarter.
- A competitor is experiencing supply problems.

### B. Sources of sales input

| Source | Example |
|---|---|
| Sales representatives | Expected customer volume increase |
| Account managers | Updated customer business plans |
| Sales pipeline | Potential new customer opportunities |
| CRM records | Customer opportunities and interactions |
| Commercial teams | Planned promotions and price changes |
| Customer meetings | Expected product requirements |

### C. What is a sales pipeline?

A sales pipeline is a collection of potential business opportunities being pursued by the Sales team.

Example:

| Opportunity | Potential volume | Current status |
|---|---:|---|
| Customer A expansion | 50,000 | Negotiation |
| Customer B new project | 80,000 | Technical evaluation |
| Customer C additional order | 30,000 | Verbal confirmation |

The combined potential volume is 160,000 units.

But should the demand plan automatically include all 160,000?

No.

The opportunities have different probabilities of becoming actual demand.

An opportunity under technical evaluation is less certain than an order that has already been accepted.

### D. How sales judgment complements historical data

Historical data shows what happened.

Sales input may reveal what is expected to happen.

For example:

Historical monthly demand: 100,000 units.

The Sales team reports that a customer is increasing production by 20% starting next month.

This information may justify an upward demand adjustment.

Without sales input, the planning model might continue projecting approximately 100,000 units.

### E. Risks of inaccurate sales input

**Overly optimistic sales estimates**

Example:
- Historical demand: 100,000.
- Sales estimate: 180,000.
- Actual demand: 105,000.

Possible consequences:
- Excess finished goods.
- Higher inventory carrying costs.
- Excess raw materials.
- Unnecessary production capacity allocation.

**Overly conservative sales estimates**

Example:
- Historical demand: 100,000.
- Sales estimate: 80,000.
- Actual demand: 130,000.

Possible consequences:
- Inventory shortages.
- Missed sales.
- Delayed customer deliveries.
- Emergency procurement.
- Overtime and production disruption.

Sales input should be supported by evidence, not merely optimism or pessimism.

---

## 4.5 Market Intelligence and External Demand Signals

Not all changes in demand originate from existing customers.

Sometimes the market itself changes.

This is where market intelligence becomes valuable.

### A. What is market intelligence?

Market intelligence is information gathered about external business conditions that may influence customer requirements and purchasing behavior.

Examples:

| External factor | Possible demand impact |
|---|---|
| Industry growth | Increased product requirements |
| Competitor shutdown | Potential increase in supplier demand |
| Economic slowdown | Reduced customer purchases |
| New technology | Increased demand for newer components |
| Regulatory changes | New product specifications or requirements |
| Seasonal activity | Periodic increases or decreases |
| Customer industry expansion | Increased purchasing requirements |

### B. Market research

Market research provides information about:
- Market size.
- Customer preferences.
- Industry growth.
- Product adoption.
- Regional demand.
- Market opportunities.

Example:

An electronic components manufacturer learns that the automotive electronics industry is expected to expand.

This may indicate an opportunity for increased capacitor demand.

However, market growth does not automatically translate into equivalent growth for the manufacturer.

The analyst must consider the company's customers, market share, product portfolio, and actual purchasing opportunities.

### C. Competitor activities

Suppose a major competitor experiences a factory shutdown.

Customers may transfer some of their purchases to alternative suppliers.

A manufacturer may therefore receive additional inquiries or orders.

This is an external demand signal.

But it should be distinguished from confirmed customer requirements.

### D. Economic conditions

Economic changes can influence purchasing behavior.

Examples:
- Higher interest rates may reduce capital investment.
- Inflation may increase product prices and affect purchasing volumes.
- Economic expansion may increase industrial production.
- Currency fluctuations may influence imported material and finished product costs.

### E. Customer purchasing behavior

Customers may change:
- Purchasing frequency.
- Order quantities.
- Inventory policies.
- Supplier allocation.
- Lead-time expectations.

For example, a customer may begin ordering in larger quantities because it wants to build safety stock.

This can temporarily increase orders without necessarily representing a permanent increase in end-user consumption.

### F. Why external signals matter

Market intelligence can reveal demand changes before those changes appear in the company's sales history.

This makes it a forward-looking information source.

However, external signals should be validated before they are converted into specific demand quantities.

---

## 4.6 Demand Adjustments and Special Events

Historical information and statistical projections may not capture every future event.

Companies therefore use demand adjustments to reflect known or expected changes.

### A. What is a demand adjustment?

A demand adjustment is a deliberate modification to an existing demand baseline or forecast to account for additional information that is not adequately represented in the original forecast.

Examples:

| Event | Possible adjustment |
|---|---:|
| New customer project | +20,000 units |
| Product discontinuation | -15,000 units |
| Promotion | +10,000 units |
| Customer production shutdown | -8,000 units |
| Seasonal demand increase | +12,000 units |

These are illustrative quantities, not universal adjustment standards.

### B. Common types of demand adjustments

**1. Product launches**

A new product has little or no historical sales data.

Example:

A manufacturer introduces a new capacitor model in January.

Expected demand:
- January: 5,000 units.
- February: 8,000 units.
- March: 12,000 units.

The initial estimate may come from customer commitments, market research, sales input, or product launch plans.

**2. Product discontinuations**

A product may be phased out or replaced by a new model.

The demand plan must reflect the expected decline in the old product.

**3. Promotions**

Commercial activities can temporarily increase demand.

Example:

A customer offers a promotional package that may increase product purchases by 15,000 units during a particular month.

The analyst must determine whether this is incremental demand or simply demand moved forward from a later period.

**4. Price changes**

A planned price increase may cause customers to purchase earlier than usual.

This can create a temporary demand increase followed by a decline.

**5. Customer projects**

A large project may generate demand beyond normal purchasing patterns.

Example:

A customer begins a new production line and requires an additional 50,000 units for initial production.

**6. Seasonal events**

Demand may increase or decrease because of recurring calendar patterns.

Examples:
- Holiday production schedules.
- Year-end inventory buildup.
- Seasonal consumer electronics demand.
- Annual customer maintenance shutdowns.

**7. Market disruptions**

Unexpected events can affect customer demand.

Examples:
- Natural disasters.
- Geopolitical disruptions.
- Competitor factory shutdowns.
- Major supply chain interruptions.

### C. Documenting demand adjustments

Every adjustment should have a clear explanation.

A good adjustment record should include:

| Field | Example |
|---|---|
| Adjustment reason | New customer project |
| Product | Capacitor Model A |
| Customer | Customer ABC |
| Quantity | +20,000 units |
| Timing | January |
| Duration | January only |
| Source | Customer project confirmation |
| Owner | Sales account manager |
| Status | Validated |
| Assumption | Customer production starts January 10 |

Why is this important?

Because without documentation, demand adjustments become arbitrary numbers.

The Demand Review team should be able to understand where each adjustment came from and whether it remains valid.

---

## 4.7 Understanding Different Demand Information Categories

Now let's consolidate what we have discussed.

This is an important reference table. Balikan mo ito whenever you need to distinguish the different sources.

| Demand information | Definition and source | Time orientation | Reliability considerations | Main planning use and limitation |
|---|---|---|---|---|
| Historical demand | Previous customer requirements; ERP, CRM, order history | Historical | Depends on data completeness | Establishes demand patterns; may contain distorted or incomplete demand |
| Actual sales | Recorded sales transactions; invoices and sales records | Historical | Usually reliable for recorded transactions | Measures realized sales; may understate true demand during stockouts |
| Customer orders | Accepted customer purchase orders; ERP/order management | Current/future | Depends on order validity and cancellation risk | Identifies known purchasing requirements; does not show all future demand |
| Open order backlog | Unfulfilled portion of customer orders | Current/future | Depends on order status and delivery records | Shows outstanding obligations; already included in open orders |
| Customer forecasts | Customer-provided future purchasing estimates | Future | Depends on customer forecasting accuracy | Provides forward visibility; may overlap with confirmed orders |
| Internal sales forecasts | Estimates from Sales and commercial teams | Future | Depends on evidence and judgment | Captures customer intelligence; may be biased |
| Statistical forecasts | Projections generated from historical demand using mathematical methods | Future | Depends on data quality and model suitability | Provides a consistent baseline; may miss new events |
| Market intelligence | Industry, competitor, economic, and regulatory information | Current/future | Depends on source credibility | Identifies external demand changes; may be difficult to quantify |
| Promotional demand | Expected requirements related to promotional activities | Future | Depends on promotion plans and customer response | Captures temporary increases; may shift demand from other periods |
| New product demand | Expected requirements for newly introduced products | Future | Depends on launch assumptions and customer commitments | Supports initial planning; usually lacks historical sales |
| Demand adjustments | Documented additions or reductions to the baseline | Future | Depends on validation and supporting evidence | Reflects exceptional events; risks double-counting or unsupported assumptions |

### Important distinction: Statistical forecast versus sales forecast

These two are frequently confused.

| Statistical forecast | Sales forecast |
|---|---|
| Generated using mathematical models | Generated or contributed to by commercial teams |
| Primarily uses historical data | Uses customer knowledge and business judgment |
| Usually follows a consistent methodology | May include subjective assessments |
| Can miss new market developments | Can identify changes before they appear in historical data |
| Provides a quantitative baseline | Provides additional business context |

Both are useful.

Neither is automatically correct.

---

# 5. Practical Examples and Applications

This section moves from understanding individual sources to using them in a real manufacturing planning situation.

## 5.1 Manufacturing business scenario

Imagine that you are working as an S&OP Analyst for an electronic components manufacturer.

The company manufactures MLCCs (Multilayer Ceramic Capacitors).

You are preparing the demand planning inputs for December 2026.

The product being analyzed is Model A.

**Illustrative business dataset only. These are assumed figures for learning purposes.**

### A. Historical monthly sales

| Month | Actual sales |
|---|---:|
| July | 90,000 |
| August | 95,000 |
| September | 100,000 |
| October | 105,000 |
| November | 110,000 |

The historical trend indicates increasing sales.

The November actual sales of 110,000 units may be considered as one reference point for December planning.

However, we still need to investigate whether November sales represented actual customer demand or were affected by supply constraints.

### B. Current customer orders

As of November 30:

| Customer | Open orders | Requested delivery |
|---|---:|---|
| Customer A | 30,000 | December |
| Customer B | 25,000 | December |
| Customer C | 15,000 | December |
| **Total** | **70,000** | |

These are known open customer requirements for December.

### C. Customer forecast

The customers submit their expected December requirements:

| Customer | Customer forecast |
|---|---:|
| Customer A | 50,000 |
| Customer B | 40,000 |
| Customer C | 25,000 |
| **Total** | **115,000** |

Notice something important.

The company already has 70,000 units of open customer orders.

The customer forecast totals 115,000 units.

Should we add them?

Not automatically.

The customer forecasts may already include the existing orders.

### D. Internal sales estimate

The Sales team provides its own December estimate:

| Customer | Sales estimate |
|---|---:|
| Customer A | 55,000 |
| Customer B | 45,000 |
| Customer C | 30,000 |
| **Total** | **130,000** |

This estimate is higher than the customer forecast.

The analyst needs to understand why.

Possible explanations:
- Customers may increase production.
- New customer opportunities may be developing.
- Sales may have received information not reflected in the customer forecast.
- Sales may be overly optimistic.

### E. New customer demand

A new customer is planning to start purchasing Model A in December.

Expected volume: 20,000 units.

However, the customer has not yet issued a purchase order.

This is an opportunity or expected demand input, not confirmed order demand.

### F. Promotional or special project demand

Customer B has a special production project requiring an additional 10,000 units.

Sales has confirmed that this project is not included in the regular customer forecast.

This is a potentially valid incremental demand adjustment, subject to confirmation of its timing and quantity.

### G. Cancelled orders

Customer C previously had 5,000 units of orders that were cancelled.

These orders were already included in the original order records but have now been formally cancelled.

Therefore, they should not remain in the current valid open order quantity.

For this scenario, assume that the 70,000 units of open orders shown earlier already exclude those cancellations.

This assumption is important because otherwise we might deduct the cancelled quantity twice.

## 5.2 Consolidating the information

Now we will approach the data as an S&OP analyst.

### Step 1: Establish the historical baseline

November actual sales:

110,000 units

For this example, we will use 110,000 as the reference baseline.

But remember: a proper statistical forecast may consider multiple months, seasonality, unusual events, and other factors.

### Step 2: Identify known customer orders

Open orders:

30,000 + 25,000 + 15,000

= 70,000 units

These are known outstanding requirements.

### Step 3: Compare customer forecasts with existing orders

| Customer | Forecast | Open orders | Remaining forecast after orders |
|---|---:|---:|---:|
| A | 50,000 | 30,000 | 20,000 |
| B | 40,000 | 25,000 | 15,000 |
| C | 25,000 | 15,000 | 10,000 |
| **Total** | **115,000** | **70,000** | **45,000** |

For this calculation, we assume that each customer's forecast includes its existing December orders.

Therefore:

**Remaining Forecast = Customer Forecast − Open Orders**

= 115,000 − 70,000

= **45,000**

This gives us the expected additional requirement beyond existing orders.

**Important:** This subtraction is valid only after confirming that the forecast and order quantities have matching product, customer, and time-period definitions, and that the forecast actually includes those orders.

### Step 4: Evaluate the internal Sales estimate

Internal Sales estimate:

130,000 units

Customer forecast:

115,000 units

Difference:

130,000 − 115,000 = 15,000

Sales is expecting 15,000 more units than the customer forecast.

Before adding that difference, we must ask:

- Which customers account for the additional 15,000?
- Is there evidence supporting the increase?
- Is it already included in the new customer project?
- Is it already included in the special project?
- Is the increase expected in December?

Suppose Sales confirms that the 15,000-unit increase is already represented by its updated estimate of Customer A and is not an additional separate opportunity.

Then we should not add another 15,000 units.

### Step 5: Evaluate the new customer demand

New customer expected demand:

20,000 units

We must check whether it is already included in the internal Sales estimate.

For this example, assume it is not included.

It can therefore be considered as a separate potential demand adjustment, subject to validation.

### Step 6: Evaluate the special project demand

Additional special project:

10,000 units

Sales confirms that this is not included in Customer B's regular forecast or open orders.

Therefore, it is a separate incremental requirement.

### Step 7: Prepare a consolidated planning view

For illustration, assume the following:

- The 115,000-unit customer forecast includes the 70,000 open orders.
- The Sales estimate of 130,000 includes the same regular customer requirements and is an alternative estimate, not an additional demand quantity.
- The new customer demand of 20,000 is not included in either existing customer forecast or orders.
- The special project of 10,000 is not included in the regular forecast.
- Cancelled orders have already been removed from the open order records.

Our planning calculation becomes:

| Component | Quantity |
|---|---:|
| Existing customer forecast, including orders | 115,000 |
| New customer demand | +20,000 |
| Special project demand | +10,000 |
| **Illustrative consolidated demand input** | **145,000** |

**145,000 units**

Illustrative consolidated December demand input

Notice that we did NOT calculate:

110,000 + 70,000 + 115,000 + 130,000 + 20,000 + 10,000

That would produce a severely inflated number because it combines historical data, overlapping forecasts, and alternative estimates.

### Step 8: Document the planning assumptions

| Item | Treatment | Reason |
|---|---|---|
| November actual sales: 110,000 | Historical reference | Used to understand recent demand |
| Open orders: 70,000 | Included in customer forecast | Avoid double-counting |
| Customer forecast: 115,000 | Included in baseline | Represents regular customer requirements |
| Internal Sales estimate: 130,000 | Used for challenge and validation | Alternative view of regular demand |
| New customer: 20,000 | Added separately | Not included in regular forecast |
| Special project: 10,000 | Added separately | Confirmed as incremental |
| Cancelled orders: 5,000 | Excluded | Already cancelled and removed from valid open orders |

This is the type of documentation that makes a demand plan explainable and auditable.

## 5.3 A critical distinction: Demand versus shipment planning

May isa pang importanteng concept.

The consolidated demand input of 145,000 units is not automatically the quantity that must be shipped in December.

Why?

Because demand information may include:
- Customer requirements.
- Existing orders.
- Expected future purchases.
- Potential new business.
- Special projects.

The actual fulfillment plan must also consider delivery timing, existing inventory, production capacity, and other operational constraints.

For this lesson, remember:

**Demand information tells us what customers may require. It does not automatically tell us what the company can deliver.**

## 5.4 Common mistakes when consolidating demand information

| Mistake | Why it is wrong | Possible consequence |
|---|---|---|
| Adding customer orders to customer forecasts automatically | Orders may already be included | Inflated demand |
| Adding Sales forecast to customer forecast | Both may describe the same requirements | Double-counting |
| Treating all pipeline opportunities as confirmed demand | Opportunities have varying probabilities | Excess inventory |
| Using actual sales without checking stockouts | Sales may understate demand | Underforecasting |
| Ignoring order cancellations | Cancelled quantities may remain in reports | Overforecasting |
| Ignoring requested delivery dates | Demand may be placed in the wrong period | Poor production scheduling |
| Adding special projects without validation | Project demand may already be included | Inflated demand |
| Using outdated customer forecast versions | Information may no longer be valid | Incorrect planning assumptions |

---

# 6. Formulas and Calculations

For this topic, we do not need a complicated mathematical forecasting model.

However, several simple calculations are useful when analyzing demand information.

## 6.1 Open Order Quantity

**Open Order Quantity = Ordered Quantity − Delivered Quantity − Cancelled Quantity**

Example:

- Original order: 50,000 units.
- Delivered: 20,000 units.
- Cancelled: 5,000 units.

= 50,000 − 20,000 − 5,000

= **25,000 units**

The remaining valid order quantity is 25,000 units.

Note: This assumes that cancelled quantities were not already removed from the reported ordered quantity.

## 6.2 Forecast Incremental Requirement

When customer forecasts include existing orders:

**Incremental Requirement = Customer Forecast − Open Orders**

Example:

120,000 − 80,000 = 40,000

The customer expects an additional 40,000 units beyond the existing orders.

This is not a universal consolidation formula. It is applicable only when the forecast and order data have compatible scopes and the forecast includes those orders.

## 6.3 Forecast Error

Forecast error measures the difference between forecasted and actual demand.

**Forecast Error = Actual Demand − Forecast**

Example:

- Forecast: 100,000 units.
- Actual demand: 110,000 units.

= 110,000 − 100,000

= **+10,000**

The forecast underestimated demand by 10,000 units.

A negative result means the forecast exceeded actual demand.

## 6.4 Forecast Accuracy using Absolute Percentage Error

A basic measure is:

**Absolute Percentage Error = |Actual − Forecast| / Actual × 100**

Example:

- Actual demand: 100,000.
- Forecast: 90,000.

= |100,000 − 90,000| / 100,000 × 100

= **10%**

This means the forecast missed actual demand by 10%.

For multiple periods, companies often use aggregate measures such as WAPE (Weighted Absolute Percentage Error), which we can study in the appropriate forecasting and KPI topics.

---

# 7. Business Perspective and Decision-Making

Now let's look at this from the perspective of an actual S&OP Analyst.

Your responsibility is not simply to collect numbers from different departments.

Your responsibility is to understand what those numbers mean and how they affect business planning.

## 7.1 How demand information supports business decisions

| Demand information | Business question | Possible decision impact |
|---|---|---|
| Historical sales | What has been happening? | Establish demand baseline |
| Customer orders | What has already been ordered? | Understand existing requirements |
| Order backlog | What remains unfulfilled? | Identify outstanding customer commitments |
| Customer forecasts | What do customers expect to purchase? | Prepare future supply requirements |
| Sales input | What new business or changes are expected? | Evaluate potential demand opportunities |
| Market intelligence | What is changing in the market? | Identify risks and opportunities |
| Special adjustments | What unusual events may affect demand? | Modify planning assumptions |

## 7.2 How an analyst prepares for Demand Review

A good analyst should be able to explain:

1. What is the current demand expectation?
2. How does it compare with historical demand?
3. How much is already supported by customer orders?
4. What additional demand is expected?
5. Which customer forecasts have questionable reliability?
6. What are the major demand increases or decreases?
7. Which assumptions need management validation?
8. What are the risks if demand is higher or lower than expected?

The important skill here is not merely reporting the numbers.

It is explaining the business reasons behind the numbers.

## 7.3 Quantitative data versus business knowledge

A statistical forecast might indicate 100,000 units next month.

But Sales reports that a major customer is opening a new production line.

Should the analyst ignore the statistical forecast?

No.

Should the analyst automatically increase the forecast?

Also no.

Instead, investigate:

- When will the production line start?
- What is its expected production volume?
- How many components are needed per finished product?
- What share of the customer's requirements will come from your company?
- Is the new demand already reflected in customer forecasts?
- When will purchasing actually begin?

This is how quantitative information and business knowledge complement one another.

## 7.4 Three levels of professional thinking

### Level 1: Understanding

"Customer A has forecasted 100,000 units for December."

You can identify the information and explain what it represents.

### Level 2: Technical Application

"Customer A has 60,000 open orders, and its 100,000-unit forecast includes those orders. Therefore, the remaining forecast requirement is 40,000 units."

You can reconcile information and calculate the incremental quantity.

### Level 3: Professional Analysis

"Customer A's forecast increased by 25% compared with the previous version. However, only 60% of the increase is supported by confirmed orders. We need Sales to validate the remaining increase before incorporating it into the agreed demand plan."

You can challenge assumptions, assess risks, and recommend actions.

This is the progression we want to develop throughout the S&OP learning program.

---

# 8. Key Takeaways

Let's consolidate the most important concepts from Topic 3.2.

## 8.1 The 11 demand information sources you should remember

| Information | Remember this |
|---|---|
| 1. Historical demand | What customers needed in the past |
| 2. Actual sales | What the company actually sold |
| 3. Customer orders | What customers have formally ordered |
| 4. Open order backlog | What remains unfulfilled |
| 5. Customer forecasts | What customers expect to purchase |
| 6. Internal Sales forecasts | What the Sales team expects customers to purchase |
| 7. Statistical forecasts | What mathematical models project based on historical patterns |
| 8. Market intelligence | What external market conditions indicate |
| 9. Promotional demand | What additional or shifted demand may result from promotions |
| 10. New product demand | What customers may require for newly introduced products |
| 11. Demand adjustments | Documented changes to the existing demand baseline |

## 8.2 Five principles you must remember

**Principle 1: Historical sales is not always equal to actual demand.**

Stockouts, lost sales, and supply constraints can cause historical sales to understate customer requirements.

**Principle 2: Customer forecasts are not confirmed orders.**

They provide visibility, but customers can revise their expectations.

**Principle 3: Customer orders and backlog are not separate quantities to add automatically.**

Backlog generally represents the unfulfilled portion of existing orders.

**Principle 4: Sales input and market intelligence provide additional business context.**

They help identify demand changes that may not yet appear in historical records.

**Principle 5: Never combine demand information without checking for overlaps.**

This is one of the most important skills in demand planning.

## 8.3 The most important concept of this lesson

I want you to remember this statement:

> Demand planning is not about adding every available demand number. It is about identifying the unique customer requirements represented by each information source, validating them, and consolidating them into one consistent planning view.

---

# 9. Knowledge Check and Exercises

**Assessment: Level 1–3**

Now let's test your understanding.

I will not provide the answers yet. Sagutan mo muna, then I will evaluate each answer, identify misunderstandings, explain the correct reasoning, and assess your current learning level.

## Part A: Conceptual Understanding

**1.** Explain the difference between demand and demand information using your own words.

**2.** Why is historical sales data not always a reliable representation of actual customer demand?

**3.** Differentiate the following:

- Historical demand
- Actual sales
- Customer orders
- Open order backlog
- Customer forecast
- Internal Sales forecast

**4.** Why should a company not automatically treat customer forecasts as guaranteed orders?

**5.** What is the difference between a statistical forecast and an internal Sales forecast? Why are both useful?

## Part B: Situational Analysis

**6.** An electronic components manufacturer recorded the following:

- Historical monthly sales: 100,000 units.
- Customer orders: 80,000 units.
- Customer forecast: 120,000 units.

The customer confirms that its 120,000-unit forecast already includes the 80,000 units of existing orders.

Should the analyst report 200,000 units as demand? Explain your reasoning.

**7.** A company's historical sales decreased from 150,000 to 100,000 units.

However, the production department reports that the company experienced a raw material shortage during the same period.

What should the S&OP Analyst investigate before concluding that demand decreased?

**8.** The Sales team reports an expected additional demand of 50,000 units from a new customer. However, the customer has not issued a purchase order.

How should this information be classified and evaluated?

**9.** A customer originally requested 30,000 units in December but moved 15,000 units to January.

What happens to the monthly demand profile? Does the total two-month requirement necessarily change?

## Part C: Numerical Exercises

**10. Open Order Calculation**

A customer originally ordered 80,000 units.

- Delivered quantity: 35,000 units.
- Cancelled quantity: 10,000 units.

Calculate the remaining valid open order quantity.

**11. Forecast Consolidation**

A customer provides the following:

| Information | Quantity |
|---|---:|
| Customer forecast | 150,000 |
| Existing open orders | 90,000 |
| New project demand | 20,000 |

Additional information:

- The customer forecast already includes the existing open orders.
- The new project demand is not included in the customer forecast.

Calculate the consolidated demand input.

Explain why you treated the quantities that way.

**12. Identifying Double-Counting**

An analyst prepares this demand summary:

| Information source | Quantity |
|---|---:|
| Customer forecast | 200,000 |
| Open orders | 120,000 |
| Sales forecast | 220,000 |
| Special project | 30,000 |

Further investigation reveals:

- Open orders are already included in the customer forecast.
- The Sales forecast is an alternative estimate of the same regular customer demand.
- Special project demand is confirmed as incremental and excluded from all other figures.

What is the correct consolidated demand input based on these assumptions?

## Part D: Professional Analysis

**13.** You are preparing for a Demand Review.

The statistical forecast indicates 100,000 units, while the Sales team expects 150,000 units.

What questions would you ask before deciding which quantity should be used?

**14.** A major competitor has temporarily shut down its factory. Your company expects that some of its customers may transfer their purchases to your company.

How should this market intelligence be evaluated before including additional demand in the plan?

**15.** You discover that a customer forecast increased by 40% compared with the previous month.

What information would you investigate to determine whether the increase is legitimate?

## Assessment guide

| Performance | What I will evaluate |
|---|---|
| Level 1: Understanding | Can you distinguish the different demand information sources? |
| Level 2: Technical Application | Can you calculate open orders and consolidate overlapping information? |
| Level 3: Professional Analysis | Can you validate assumptions, challenge demand inputs, and explain business implications? |

## Your assessment workspace

You can answer directly here or answer by question number in your next message. You do not need to complete everything in one sitting.

---

## Before we close Topic 3.2

Here is the conceptual connection between our first two Module 3 topics:

| Topic | Main question |
|---|---|
| 3.1 Understanding Demand | What is demand, and how does it behave? |
| 3.2 Types of Demand Information | What information helps us understand and anticipate demand? |

The next step in the curriculum will build on these foundations, but we will not proceed until you confirm that you are ready.

**My recommendation:** Pay particular attention to the difference between customer forecasts, open orders, and internal Sales forecasts. These distinctions are especially important when working with ERP reports and customer forecast files in an actual S&OP environment.

Take your time with the exercises. We want to develop the ability to think like an S&OP Analyst, not simply memorize definitions.

**Topic 3.2 is complete. We will wait for your assessment and confirmation before moving forward.**
