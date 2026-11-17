---
module: 3
topic: "3.1"
title: "Understanding Demand"
language: "Taglish"
status: "complete"
---

# Module 3 – Demand Planning
## Topic 3.1: Understanding Demand

**Main learning goal:** Matutunan mong intindihin kung ano talaga ang demand ng isang business, saan ito nanggagaling, paano ito nagbabago over time, at paano ito ginagamit bilang foundation ng Demand Planning at S&OP.

> **A company should plan based on what customers are expected to need, not simply on what the company is currently capable of producing or selling.**

Ito ang isa sa pinakamahalagang distinctions sa Demand Planning.

# 1. Topic Overview

## 1.1 What are we going to learn?

Sa Module 2, pinag-aralan natin ang business operations, manufacturing strategies, at planning data. Ngayon, lilipat tayo sa demand side ng business.

Imagine na nagtatrabaho ka sa isang electronic components manufacturer. Gumagawa ang company ninyo ng MLCC (Multilayer Ceramic Capacitors).

May customer na nangangailangan ng:
- 100,000 units sa January.
- 120,000 units sa February.
- 150,000 units sa March.

Ang unang tanong ng business ay hindi agad: "How many units can our factory produce?"

Ang unang tanong ay:

**"How many units will our customers need?"**

Bakit? Dahil kailangan munang malaman ng company kung ano ang kailangan ng market bago magdesisyon kung gaano karaming materials ang bibilhin, gaano karaming products ang gagawin, at gaano karaming production capacity ang kakailanganin.

Dito pumapasok ang Demand Planning.

## 1.2 Why is understanding demand important?

Ang demand ang isa sa mga pangunahing inputs sa business planning.

| Misunderstood demand | Possible business consequence |
|---|---|
| Overestimated demand | Excess inventory |
| Underestimated demand | Stockouts and lost sales |
| Incorrect seasonality | Wrong production timing |
| Hidden demand due to shortages | Underestimated market requirements |
| Unrecognized customer cancellations | Excess production |
| Incorrect demand classification | Wrong material and production planning |

Hindi lang ito tungkol sa forecasting accuracy. Tungkol ito sa pag-unawa kung ano ang nangyayari sa actual market.

## 1.3 Connection to the S&OP process

1. **Customer and Market Requirements:** Ano ang kailangan ng customers?
2. **Understanding Demand:** Ano ang demand, saan nanggagaling, at paano ito nagbabago?
3. **Demand Planning:** Ano ang expected future customer requirements?
4. **Supply-Demand Reconciliation:** Kaya ba ng supply network na suportahan ang demand?

Ang Topic 3.1 ay nakatuon sa Understanding Demand. Hindi pa tayo papasok nang malalim sa forecasting methods. Ang goal muna natin ay matutong magbasa at mag-interpret ng demand.

# 2. Layman's Explanation

## 2.1 What is demand?

Sa simplest explanation:

**Demand is the quantity of products or services that customers want or need to purchase within a specific period.**

Sa Tagalog: Demand ang dami ng products na gustong bilhin o kailangan ng customers sa isang particular na panahon.

Halimbawa, may manufacturer ng electronic components. Ang customer nito ay isang manufacturer ng electronic devices. Para makagawa ang customer ng kanilang electronic devices, kailangan nila ng capacitors. Kung kailangan nila ng 50,000 capacitors sa December, may demand na 50,000 units para sa December.

Simple lang, tama? Pero may importanteng distinction. Hindi lahat ng gustong bilhin ng tao ay automatically actual market demand.

## 2.2 Customer needs vs. actual market demand

Imagine na gusto mong bumili ng bagong laptop.

| Situation | Meaning |
|---|---|
| Gusto mo ng laptop | Customer need or desire |
| May budget ka at willing kang bumili | Potential purchasing demand |
| Nag-place ka ng order at may actual purchasing commitment | Observable customer demand |

Sa business, mahalagang maintindihan na may difference ang:
- What customers want.
- What customers intend to purchase.
- What customers actually order.
- What the company can successfully deliver.

For example, may customer na nangangailangan ng 100,000 units, pero dahil sa budget restrictions, 70,000 units lang ang inorder niya. Ang company ay may nakikitang customer order na 70,000 units, pero maaaring may additional unmet requirement na 30,000 units.

Kung order data lang ang titingnan natin, baka isipin nating 70,000 units lang ang demand. Pero may additional market information na kailangan nating imbestigahan.

**Important lesson:** Demand is not always fully visible in sales or order records.

## 2.3 Why is demand the starting point?

Kung alam mong kailangan ng customers ng 100,000 units, maaari mong simulan ang pag-assess ng:
- Production requirements.
- Raw material requirements.
- Supplier capacity.
- Machine capacity.
- Labor requirements.
- Inventory requirements.

Pero kung hindi mo alam ang demand, paano mo malalaman kung gaano karaming products ang dapat gawin?

Parang pagluluto. Hindi ka bibili ng ingredients nang hindi mo alam kung ilang tao ang kakain. Similarly, hindi dapat basta mag-produce ang manufacturing company nang hindi naiintindihan ang expected customer requirements.

# 3. Technical Explanation

## 3.1 Technical definition of demand

In supply chain management, demand refers to the quantity of a product or service required by customers or the market over a specified period.

Usually, demand is measured using:
- Quantity (units, pieces, kilograms, tons).
- Time (daily, weekly, monthly, quarterly).
- Product identification (SKU, model, product family).
- Customer or market segment.

A complete demand statement should ideally identify four things:

| Component | Example |
|---|---|
| What product? | MLCC Model ABC |
| How much? | 100,000 units |
| When? | December 2026 |
| Who needs it? | Customer A |

Therefore, "100,000 units" alone is incomplete planning information. Mas meaningful ang: "Customer A requires 100,000 units of MLCC Model ABC in December 2026."

## 3.2 Demand is not the same as sales

Imagine na may customer na gustong bumili ng 100,000 units. Pero ang company ay may available inventory na 60,000 units lamang. Ang na-deliver at na-invoice ay 60,000 units.

| Measurement | Quantity |
|---|---:|
| Customer requirement | 100,000 |
| Available supply | 60,000 |
| Actual sales/deliveries | 60,000 |
| Unfulfilled requirement | 40,000 |

Kung sales lang ang gagamitin natin, ang magiging conclusion natin ay 60,000 units ang demand. Pero ang actual customer requirement ay 100,000 units. May 40,000 units na hindi na-capture sa sales dahil sa supply limitation.

Ito ang dahilan kung bakit dangerous ang paggamit ng sales as a direct substitute for demand.

## 3.3 Important demand-related terminology

| Term | Technical meaning | Simple explanation |
|---|---|---|
| Customer demand | Customer's requirement for a product | Gaano karami ang kailangan ng customer |
| Actual demand | Demand observed or established for a specific period | Demand na talagang nangyari o na-identify |
| Actual sales | Quantity sold or recognized as sales | Dami ng produktong naibenta |
| Customer orders | Orders formally submitted by customers | Dami ng inorder |
| Open orders | Orders not yet fully fulfilled or closed | Orders na pending pa |
| Backlog | Unfulfilled customer commitments or past-due requirements, depending on company definition | Mga order na hindi pa natutupad |
| Historical demand | Recorded demand from previous periods | Past demand data |
| Forecasted demand | Estimated future demand | Inaasahang demand sa future |

**Important distinction:** Ang actual demand ay walang iisang universal data definition sa lahat ng companies. Some organizations measure it through orders, requested quantities, shipments, or adjusted demand history. Bilang S&OP analyst, kailangan mong malaman ang official company definition.

Sa actual business, hindi sapat na alam mo ang term. Dapat alam mo rin kung paano ito kino-compute at kinukuha ng company.

## 3.4 Numerical example: How demand, orders, sales, and backlog relate

A customer requires 10,000 units of an electronic component. The customer submits an order for 10,000 units, but the manufacturer can deliver only 7,000 units this month.

| Measurement | Quantity |
|---|---:|
| Customer order | 10,000 |
| Actual delivery | 7,000 |
| Open order | 3,000 |
| Backlog at month-end | 3,000 |

Assuming the customer does not cancel the remaining order and it remains unfulfilled at month-end, the 3,000 units become backlog.

- Customer orders = 10,000.
- Actual sales, assuming sales are recognized upon delivery = 7,000.
- Open orders = 3,000.
- Backlog = 3,000.

Hindi sila pare-pareho, kahit na iisang customer transaction lang ang pinag-uusapan.

### Another important distinction: Historical demand vs. historical sales

| Month | Customer demand | Actual sales |
|---|---:|---:|
| January | 10,000 | 10,000 |
| February | 12,000 | 12,000 |
| March | 15,000 | 11,000 |

If you analyze sales only, you might conclude that demand decreased from February to March. Pero actually, tumaas ang demand from 12,000 to 15,000. The company simply failed to fulfill the additional 4,000 units.

This is called **censored demand** in certain planning and statistical contexts: observed sales are limited by availability, so they do not reveal the full underlying demand.

This concept is especially important when analyzing historical data for demand planning.

# 4. Detailed Discussion

## 4.1 Types of Demand

Hindi lahat ng demand ay nanggagaling sa parehong source. May demand na direktang nanggagaling sa customers. May demand naman na kailangan nating i-compute dahil kailangan ang isang material para makagawa ng ibang product.

### A. Independent Demand

**Independent demand** refers to demand for products that originates directly from external customers or the market.

Sa madaling salita, hindi ito kinakalkula based on the demand of another item.

| Finished product | Customer demand |
|---|---:|
| MLCC Model A | 50,000 units |
| MLCC Model B | 30,000 units |
| MLCC Model C | 20,000 units |

Ang demand ng bawat model ay nanggagaling sa customer requirements. Hindi natin kailangan malaman muna ang demand ng ibang product para makuha ang 50,000 units na demand ng Model A.

**Why is it called independent?** Because the demand originates independently from an external requirement rather than being mathematically derived from another product's production requirement.

Typical examples:
- Finished goods.
- Products sold to distributors.
- Products sold directly to customers.
- Spare parts demanded by end users.

**S&OP application:** Independent demand is generally an important input to the finished-goods demand plan.

### B. Dependent Demand

**Dependent demand** refers to the demand for materials or components that is calculated based on the production requirements of another item.

Simple explanation: Kung kailangan mong gumawa ng 1,000 finished products, kailangan mo ring magkaroon ng sapat na raw materials para magawa ang 1,000 products. Hindi mo basta huhulaan ang material requirement. Kinukuha mo ito gamit ang product structure or Bill of Materials.

#### Understanding the Bill of Materials (BOM)

Ang BOM ay listahan ng lahat ng materials and components required to manufacture one unit of a finished product.

A finished electronic device requires:

| Component | Quantity per finished unit |
|---|---:|
| Capacitor A | 4 |
| Resistor B | 2 |
| Connector C | 1 |

If the production requirement is 1,000 finished devices:

| Component | BOM quantity | Total requirement |
|---|---:|---:|
| Capacitor A | 4 | 4,000 |
| Resistor B | 2 | 2,000 |
| Connector C | 1 | 1,000 |

Formula:

\[
\text{Component Demand} =
\text{Finished Goods Requirement}
\times
\text{BOM Quantity}
\]

For Capacitor A:

\[
1,000 \times 4 = 4,000
\]

Therefore, the manufacturer needs 4,000 Capacitor A units.

Notice the relationship:
- Demand for finished goods: 1,000 units.
- Dependent demand for Capacitor A: 4,000 units.

The component demand exists because of the finished-goods requirement.

**S&OP application:** Demand for finished goods helps establish the production requirements, which subsequently influence component and raw material requirements.

One important distinction: BOM calculations normally establish gross requirements. Actual net procurement or production requirements also depend on inventory, scheduled receipts, scrap assumptions, and other planning factors.

### C. Derived Demand

**Derived demand** refers to demand for a product, material, or service that arises because of demand for another product or activity.

Mas malawak ang concept nito kaysa dependent demand.

May increasing demand for electric vehicles. Because of that:
1. More electric vehicles need to be manufactured.
2. More batteries are needed.
3. More battery cells are needed.
4. More electronic components are needed.
5. More raw materials are needed.

The demand for raw materials and components is derived from the demand for electric vehicles.

#### Derived demand vs. dependent demand

| Aspect | Derived demand | Dependent demand |
|---|---|---|
| Meaning | Demand created by demand for another product or activity | Demand calculated from the requirement of another item |
| Scope | Broad supply chain concept | Specific material and production planning concept |
| Calculation | May be qualitative or quantitative | Often calculated using BOM and production quantities |
| Example | EV growth increases lithium demand | 1,000 devices × 4 capacitors = 4,000 capacitors |

**Remember:** Dependent demand is closely related to derived demand, but the two are not interchangeable. Derived demand describes the broader economic relationship. Dependent demand describes a more specific planning relationship.

### D. Unconstrained Demand

**Unconstrained demand** refers to the expected customer or market requirements without reducing them to match the company's supply limitations.

A company expects customers to require 150,000 units next month. However, the production capacity is only 120,000 units.

The unconstrained demand remains:

\[
150,000 \text{ units}
\]

Hindi natin dapat ibaba agad sa 120,000 ang demand dahil lamang iyon ang kayang gawin ng factory.

If we incorrectly report demand as 120,000, management might think there is no supply gap. But the real situation is:
- Expected demand: 150,000.
- Available production capacity: 120,000.
- Potential supply gap: 30,000.

Unconstrained demand allows management to understand the actual market opportunity and identify supply constraints.

### E. Constrained Demand

**Constrained demand** can refer to a demand plan adjusted to reflect an agreed business or market limitation, such as customer allocation, commercial restrictions, or other constraints.

However, important clarification: In S&OP, the term is not always used consistently. Some companies use *constrained demand* to mean the demand that can realistically be served, while others distinguish it from the unconstrained demand plan and call the resulting quantity the *constrained plan* or *feasible demand plan*.

| Item | Quantity |
|---|---:|
| Unconstrained expected demand | 150,000 |
| Supply available | 120,000 |
| Allocated customer quantity | 120,000 |
| Unfulfilled requirement | 30,000 |

The company may create a feasible customer fulfillment plan for 120,000 units. But the original expected demand is still 150,000 units.

**Critical lesson:** Never confuse a reduction in fulfillable quantity with a reduction in customer need.

### Comparing the five demand classifications

| Classification | Main idea | Example |
|---|---|---|
| Independent | Direct external demand | Customer orders 10,000 capacitors |
| Dependent | Calculated from another item's requirement | 4 capacitors per device |
| Derived | Demand caused by another product or activity | EV growth increases battery demand |
| Unconstrained | Demand before supply limitations | Market needs 150,000 units |
| Constrained | Demand or fulfillment plan reflecting limitations | Only 120,000 units can be served |

These classifications overlap because they describe different dimensions of demand. For example, demand for a finished capacitor may be both independent and unconstrained. Its component requirements may be dependent and derived.

## 4.2 Factors That Influence Demand

Demand does not remain constant forever. May mga factors na nakakaapekto sa quantity, timing, and distribution ng customer requirements.

### A. Internal Factors

These are factors that originate within the company or are directly influenced by its business decisions.

| Factor | How it affects demand | Example |
|---|---|---|
| Pricing decisions | Lower prices may increase demand; higher prices may reduce it | Price reduction attracts more orders |
| Promotions | Can temporarily increase demand | Special discount increases monthly orders |
| Sales strategies | Changes customer acquisition and order timing | Sales team targets new industrial customers |
| Product availability | Availability affects observable orders and realized sales | Stockouts delay or redirect orders |
| Product launches | Introduces new market requirements | New capacitor model attracts customers |
| Product discontinuation | Reduces or shifts demand to replacement products | Old model demand transfers to new model |
| Customer service | Poor service may reduce repeat purchases | Late deliveries cause customers to switch suppliers |

**Example 1: Promotion**

Normal monthly demand = 100,000 units. The company offers a promotional discount. Expected demand increases to 130,000 units.

The additional 30,000 units may not represent a permanent increase. It could simply be demand brought forward from future months. This is called *demand pull-forward*.

**Example 2: Product discontinuation**

The company discontinues Model A and introduces Model B.

Before discontinuation:
- Model A demand = 50,000.
- Model B demand = 0.

After the transition:
- Model A demand = 10,000.
- Model B demand = 45,000.

If you analyze only Model B, you might conclude that a new demand opportunity appeared. But at the product-family level, much of that demand may simply have transferred from Model A.

### B. External Factors

These originate outside the company and are generally less controllable.

| Factor | Possible demand impact | Example |
|---|---|---|
| Market conditions | Increase or decrease | Growth in electronics market |
| Customer behavior | Changes buying quantity or timing | Customers delay purchases |
| Seasonality | Recurring increases and decreases | Higher demand during holiday production |
| Economic conditions | Changes purchasing power and investment | Economic slowdown reduces orders |
| Competition | Shifts market share | Competitor offers lower prices |
| Industry trends | Creates new demand opportunities | Increasing EV adoption |
| Regulatory changes | Creates or eliminates requirements | New environmental compliance requirements |
| Technological developments | Changes product requirements | New devices require different component specifications |

### How to interpret these factors professionally

As an S&OP analyst, you should not simply say: "Demand increased by 20%."

You should ask:
- Was the increase caused by market growth?
- Was there a temporary promotion?
- Did customers place orders earlier than usual?
- Did a competitor experience supply problems?
- Was there a new customer launch?
- Was the increase caused by a one-time bulk purchase?

The objective is to identify the reason behind the numbers, because different causes require different business responses.

## 4.3 Understanding Demand Patterns

Historical demand data can show how customer requirements behave over time. There are several common patterns.

### A. Trend

A trend is a long-term upward or downward movement in demand.

| Month | Demand |
|---|---:|
| January | 10,000 |
| February | 11,000 |
| March | 12,000 |
| April | 13,000 |
| May | 14,000 |
| June | 15,000 |

The illustrative demand steadily increases over six months.

What do we observe? Demand increases consistently.

Possible explanations:
- Market expansion.
- More customers.
- Increased product adoption.
- Higher customer production requirements.

There are two basic trend directions:
- Upward trend: demand generally increases.
- Downward trend: demand generally decreases.

**Important:** One month of higher demand does not automatically mean an upward trend. You need to examine the broader movement over time.

### B. Seasonality

Seasonality refers to recurring demand patterns that occur at relatively predictable intervals.

A manufacturer supplies electronic components to consumer electronics manufacturers. Demand increases before major holiday production periods.

| Month | Demand |
|---|---:|
| January | 80,000 |
| February | 85,000 |
| March | 90,000 |
| April | 100,000 |
| May | 120,000 |
| June | 150,000 |
| July | 140,000 |
| August | 110,000 |
| September | 90,000 |
| October | 85,000 |
| November | 80,000 |
| December | 75,000 |

The pattern suggests a seasonal increase around May to July.

But one year of data is not enough to establish recurring seasonality confidently. We should compare several years.

Examples of seasonal drivers:
- Holidays.
- Weather conditions.
- School calendars.
- Agricultural seasons.
- Industry production cycles.

### C. Cyclical Variation

Cyclical variation refers to longer-term fluctuations in demand associated with broader economic or industry cycles.

Unlike seasonality, cycles do not necessarily repeat at fixed intervals.

The electronics industry experiences:
1. Strong market growth.
2. High customer demand.
3. Market saturation.
4. Economic slowdown.
5. Market recovery.

A simplified illustration:

| Year | Market demand |
|---|---:|
| 2022 | 100,000 |
| 2023 | 130,000 |
| 2024 | 150,000 |
| 2025 | 110,000 |
| 2026 | 90,000 |
| 2027 | 105,000 |

This is an illustrative economic cycle, not a predictable annual seasonal pattern.

### D. Random Variation

Random variation refers to unpredictable fluctuations in demand that do not show a consistent trend or recurring pattern.

| Week | Demand |
|---|---:|
| Week 1 | 10,000 |
| Week 2 | 10,500 |
| Week 3 | 9,800 |
| Week 4 | 10,200 |
| Week 5 | 9,700 |
| Week 6 | 10,300 |

The demand moves slightly up and down without a clear direction.

Possible causes:
- Minor customer order changes.
- Unpredictable purchases.
- Small operational fluctuations.
- Normal variation in market behavior.

Random variation is not necessarily a problem. The important thing is to distinguish normal fluctuations from unusual demand events.

### E. Intermittent Demand

Intermittent demand occurs when demand happens irregularly, with periods of zero or very low demand between orders.

| Month | Demand |
|---|---:|
| January | 0 |
| February | 0 |
| March | 500 |
| April | 0 |
| May | 0 |
| June | 1,200 |
| July | 0 |
| August | 300 |

This is common in:
- Spare parts.
- Maintenance materials.
- Specialized industrial components.
- Low-volume products.
- Replacement components.

A product can have low average demand but still create significant supply risk when a customer suddenly needs a large quantity.

### F. Stable Demand

Stable demand refers to demand that remains relatively consistent over time, with only minor fluctuations.

| Month | Demand |
|---|---:|
| January | 10,000 |
| February | 10,200 |
| March | 9,900 |
| April | 10,100 |
| May | 10,050 |
| June | 9,950 |

Stable does not mean exactly the same quantity every month. It means the fluctuations are relatively small and there is no significant directional or recurring movement.

### Comparing demand patterns

| Pattern | Main characteristic | Recognition |
|---|---|---|
| Trend | Long-term increase or decrease | Consistent directional movement |
| Seasonality | Repeating pattern | Similar timing of peaks and lows |
| Cyclical | Long-term market fluctuations | Broad economic or industry cycles |
| Random | Irregular changes | No consistent pattern |
| Intermittent | Occasional demand | Many periods with zero demand |
| Stable | Relatively consistent | Small fluctuations around a normal level |

### Important distinction: Trend vs. seasonality vs. random variation

- Trend: Sales of an electronic product increase over several years because market adoption is growing.
- Seasonality: Orders increase every year before the holiday manufacturing season.
- Random variation: Orders increase unexpectedly in one particular week without a clear explanation.

These are different phenomena. A company that mistakes random variation for a trend may overreact and increase production unnecessarily. A company that ignores seasonality may fail to prepare sufficient materials and capacity before peak demand.

## 4.4 Understanding Demand at Different Planning Levels

Demand can be viewed at different levels of detail. This is important because management and operational planners do not always need the same level of information.

### A. SKU-Level Demand

SKU means Stock Keeping Unit. It is a unique identifier for a specific product or inventory item.

Example:
- Model ABC, 10 µF, 16 V.
- Model ABC, 22 µF, 25 V.
- Model XYZ, 10 µF, 16 V.

Even if products belong to the same family, their demand can be different. SKU-level demand is important for inventory management, production scheduling, and material planning.

### B. Product Model Demand

Demand is grouped according to a particular model or product designation.

| Model | Monthly demand |
|---|---:|
| Model A | 50,000 |
| Model B | 30,000 |
| Model C | 20,000 |

Useful when comparing demand between models.

### C. Product-Family Demand

Related products are grouped into a larger category.

| Product family | Demand |
|---|---:|
| Standard MLCC | 200,000 |
| Automotive MLCC | 150,000 |
| High-voltage MLCC | 100,000 |

This is useful for higher-level S&OP discussions. Management may not need to review every SKU individually during an executive meeting. Instead, it may review total demand by product family.

### D. Customer-Level Demand

Demand is analyzed based on the customer.

| Customer | Monthly demand |
|---|---:|
| Customer A | 100,000 |
| Customer B | 80,000 |
| Customer C | 50,000 |

This helps identify:
- Major customers.
- Customer concentration.
- Changes in customer purchasing behavior.
- New business opportunities.
- Risks from losing major customers.

### E. Market-Level Demand

This is demand across a broader market or industry. Example: total demand for automotive electronic components in a specific market. Useful for understanding overall industry growth and market opportunities.

### F. Monthly vs. Weekly Demand

The same demand can look different depending on the time bucket.

| Week | Demand |
|---|---:|
| Week 1 | 20,000 |
| Week 2 | 25,000 |
| Week 3 | 30,000 |
| Week 4 | 25,000 |
| **Monthly total** | **100,000** |

At the monthly level, demand is 100,000 units. At the weekly level, you can see how demand is distributed.

Why does this matter? Because S&OP usually focuses on aggregated planning over broader time horizons, while operational planning needs more detailed information.

### Aggregation in S&OP

Imagine the company manufactures 500 different SKUs. It may be impractical for senior management to discuss all 500 items individually.

Instead, the company can aggregate them into:
- Product families.
- Business units.
- Customer segments.
- Monthly demand buckets.

But aggregation should not eliminate visibility of important SKU-level risks. For example, two SKUs may have the same family total, but one could have a major customer shortage while the other has excess inventory.

**Professional principle:** Use aggregated information for strategic decisions and detailed information for operational execution.

## 4.5 Demand Variability and Uncertainty

These two terms are related but not identical.

### Demand Variability

Demand variability refers to the degree to which actual demand changes over time.

| Month | Demand |
|---|---:|
| January | 10,000 |
| February | 10,500 |
| March | 9,800 |
| April | 15,000 |
| May | 8,000 |

The demand is fluctuating significantly.

### Demand Uncertainty

Demand uncertainty refers to how difficult it is to know or predict future demand accurately.

For example, a customer is launching a new electronic product. The manufacturer knows that the customer may require between 50,000 and 100,000 units, but the exact quantity is not yet confirmed. There is uncertainty about the future requirement.

### Variability vs. uncertainty

| Aspect | Variability | Uncertainty |
|---|---|---|
| Main idea | How much demand changes | How difficult future demand is to know |
| Focus | Observed fluctuations | Lack of certainty |
| Example | Demand changes from 10k to 15k | Future demand may be 10k–15k |
| Can coexist? | Yes | Yes |

A product may have high variability but relatively predictable seasonal behavior. Another product may have low historical variability but high uncertainty because of a new customer launch.

### Normal vs. unusual demand changes

| Situation | Interpretation |
|---|---|
| Demand increases slightly every week | Potential normal variation |
| Demand increases every December | Potential seasonality |
| Demand suddenly doubles after a promotion | Event-driven increase |
| Demand suddenly falls because a major customer cancels an order | Unusual demand event |
| Demand increases because a new customer starts production | Structural demand change |

The analyst must determine whether the change is:
1. Normal variation.
2. Recurring seasonal behavior.
3. Temporary event.
4. Permanent change in demand level.
5. Data or reporting issue.

### How demand variability affects operations

| Business area | Effect of high demand variability |
|---|---|
| Inventory | Higher risk of excess or insufficient stock |
| Production | Frequent production changes |
| Procurement | Difficult supplier scheduling |
| Capacity | Overtime, idle capacity, or bottlenecks |
| Customer service | Higher risk of late delivery |
| Finance | Unpredictable revenue and working capital |

### Why do companies need flexibility and planning buffers?

Imagine that average weekly demand is 10,000 units, but actual demand sometimes reaches 13,000 units. If the company plans exactly 10,000 units every week, it may struggle during higher-demand periods.

Companies may therefore use:
- Safety stock.
- Capacity buffers.
- Supplier flexibility.
- Additional lead-time protection.
- Inventory positioning.
- Flexible production schedules.

These buffers are not meant to eliminate uncertainty completely. They help the business manage it.

# 5. Practical Examples and Applications

Now let's put everything together using a manufacturing scenario. This is where we move from simply knowing the definitions to interpreting actual business information.

## 5.1 Business Scenario: Electronic Components Manufacturer

Imagine you are working as an S&OP Analyst for an electronic components manufacturer. The company produces MLCCs and supplies several electronics manufacturers.

You are assigned to analyze the demand performance of Model ABC.

Your manager asks:

"Why did our sales decrease last month? Is market demand declining, or are we experiencing supply problems?"

To answer this, you need more than sales data. You need to examine customer orders, deliveries, cancellations, new requirements, and inventory availability.

## 5.2 Monthly demand dataset

*All quantities are illustrative and expressed in units.*

| Month | Customer orders received | Actual sales | New requirements not yet ordered | Cancellations |
|---|---:|---:|---:|---:|
| January | 100,000 | 100,000 | 0 | 0 |
| February | 110,000 | 110,000 | 0 | 0 |
| March | 120,000 | 120,000 | 5,000 | 0 |
| April | 130,000 | 120,000 | 10,000 | 0 |
| May | 150,000 | 125,000 | 15,000 | 5,000 |
| June | 140,000 | 130,000 | 5,000 | 10,000 |

For this example, assume:
- Orders received are gross new orders during each month.
- Actual sales are deliveries recognized as sales during the month.
- New requirements are additional customer needs not yet formally ordered.
- Cancellations are orders withdrawn during the month.
- The table does not yet include opening backlog or the exact timing of each order.

### What can we observe?

**Observation 1: Customer orders increased.**

From January to May: 100,000 → 150,000 units. This indicates increasing order activity.

**Observation 2: Actual sales did not increase at the same rate.**

Sales increased from 100,000 to 125,000 units. This could indicate that the company is not fulfilling all incoming customer requirements.

**Observation 3: Additional requirements exist.**

In May, customers communicated another 15,000 units of requirements that were not yet formally ordered. This information is relevant to the demand picture, even though it is not included in formal customer orders.

**Observation 4: Cancellations increased.**

There were 5,000 cancellations in May and 10,000 in June. The analyst needs to investigate why.

Possible reasons:
- Customers reduced their production.
- Orders were duplicated.
- Customers transferred orders to another supplier.
- Delivery dates were no longer acceptable.
- Customers changed product specifications.

We should not automatically assume that every cancellation means market demand has disappeared permanently.

## 5.3 Calculating a demand view

For this simplified example, let's establish an illustrative measure:

\[
\text{Net Order Demand}
=
\text{Gross Customer Orders}
-
\text{Cancellations}
\]

For May:

\[
150,000-5,000=145,000
\]

Then we can identify a broader requirement view:

\[
\text{Identified Requirement}
=
\text{Net Order Demand}
+
\text{Additional Unordered Requirements}
\]

For May:

\[
145,000+15,000=160,000
\]

**May 2026: Demand analysis**

| Component | Units |
|---|---:|
| Gross customer orders | 150,000 |
| Less: cancellations | (5,000) |
| Net order demand | 145,000 |
| Additional requirements | 15,000 |
| **Identified requirement** | **160,000** |

*This is an analytical measure for the example, not a universal accounting or S&OP formula. Ensure additional requirements are not already included in the order data to avoid double-counting.*

Why is this useful? Because it helps the analyst understand customer requirements beyond the transactions already recorded in the order system. However, you should keep the different demand components visible instead of combining everything into one number without explanation.

## 5.4 How supply shortages can hide actual demand

Now let's introduce production capacity. Suppose the company can deliver only the following quantities:

| Month | Identified requirement | Actual sales |
|---|---:|---:|
| January | 100,000 | 100,000 |
| February | 110,000 | 110,000 |
| March | 125,000 | 120,000 |
| April | 140,000 | 120,000 |
| May | 160,000 | 125,000 |
| June | 135,000 | 130,000 |

Look at May:
- Identified requirement: 160,000.
- Actual sales: 125,000.
- Difference: 35,000.

This is a potential fulfillment gap.

But be careful: the difference is not automatically equal to backlog. Some requirements may not have become firm orders. Some may have been cancelled or postponed. Some may have been fulfilled in another period.

The analyst must reconcile the actual order status and requested delivery dates.

**Professional insight:** A decrease in actual sales does not automatically mean a decrease in demand.

This is one of the most important things to remember when analyzing manufacturing performance.

## 5.5 Understanding the demand pattern

Let's examine the identified requirements:

| Month | Identified requirement |
|---|---:|
| January | 100,000 |
| February | 110,000 |
| March | 125,000 |
| April | 140,000 |
| May | 160,000 |
| June | 135,000 |

What can we say?
1. January to May shows an upward movement.
2. June shows a decrease.
3. The June decrease may be temporary or may indicate a genuine demand slowdown.
4. More historical data is needed to determine whether there is a recurring seasonal pattern.

A professional analyst should avoid immediately labeling this as a permanent downward trend. You need to investigate the business events behind the change.

## 5.6 Historical demand vs. forecasted demand

Historical demand tells us what happened in previous periods. Forecasted demand represents what the business currently expects to happen in future periods.

| Month | Historical demand | Forecasted demand |
|---|---:|---:|
| January | 100,000 | 105,000 |
| February | 110,000 | 110,000 |
| March | 120,000 | 125,000 |
| April | 130,000 | 135,000 |
| May | 145,000 | 150,000 |
| June | 135,000 | 140,000 |
| July | Not yet available | 145,000 |
| August | Not yet available | 150,000 |
| September | Not yet available | 155,000 |

The first six months contain historical information. The last three months contain expected future requirements.

The forecast is not an actual customer order, and it is not a guarantee of future sales. It is a planning estimate based on available information and business assumptions.

This distinction will become important when we discuss the role of forecasts in the broader Demand Planning process.

## 5.7 How an S&OP analyst should investigate the scenario

Let's assume your manager asks: "Should we increase production because demand is increasing?"

You should not immediately answer yes. Instead, investigate:

| Investigation | Questions to ask |
|---|---|
| Order trends | Are customers consistently increasing orders? |
| Cancellations | Are customers withdrawing previous requirements? |
| New requirements | Are these firm commitments or preliminary indications? |
| Supply performance | Are shortages suppressing actual sales? |
| Seasonality | Is this a recurring peak period? |
| Customer behavior | Are major customers increasing their production? |
| Product changes | Is demand shifting from an older model to a newer one? |
| Market conditions | Is the overall industry growing? |

Then you can present a more meaningful conclusion:

"Model ABC shows an upward movement in customer requirements from January to May. However, actual sales have not increased proportionally. This suggests a possible supply fulfillment gap. Before increasing production capacity, we should validate open orders, cancellations, customer commitments, and the sustainability of the demand increase."

Notice the difference? Instead of simply reporting numbers, you are explaining what the numbers mean and what the business should investigate.

That's the transition from data reporting to professional S&OP analysis.

# 6. Formulas and Calculations

This topic is primarily conceptual, but there are a few basic calculations worth understanding. We will not discuss forecasting algorithms here.

## 6.1 Net Order Demand

\[
\text{Net Order Demand}
=
\text{Gross Orders}
-
\text{Cancellations}
\]

Example:
- Gross orders = 150,000 units.
- Cancellations = 5,000 units.

\[
150,000-5,000=145,000
\]

Result: 145,000 net order units.

Use this only when orders and cancellations refer to the same relevant order population and time basis.

## 6.2 Demand Fulfillment Gap

A simplified measure:

\[
\text{Fulfillment Gap}
=
\text{Identified Requirement}
-
\text{Quantity Fulfilled}
\]

Example:

\[
160,000-125,000=35,000
\]

Result: 35,000 units of identified requirements not yet reflected in fulfilled quantity.

Again, this does not automatically mean 35,000 units of backlog. You must reconcile the underlying orders and requirements.

## 6.3 Demand Fulfillment Rate

\[
\text{Fulfillment Rate}
=
\frac{\text{Quantity Fulfilled}}
{\text{Eligible Customer Requirement}}
\times 100
\]

Example:

\[
\frac{125,000}{160,000}\times100
=78.125\%
\]

**Illustrative fulfillment rate: 78.13%**

125,000 units fulfilled out of 160,000 identified requirements.

This calculation is illustrative. In an actual company, the denominator should follow the official KPI definition, including its treatment of requested dates, cancellations, and partial deliveries.

## 6.4 Demand Growth Rate

A simple way to compare demand between two periods:

\[
\text{Demand Growth Rate}
=
\frac{\text{Current Demand}-\text{Previous Demand}}
{\text{Previous Demand}}
\times100
\]

Example: Previous month = 100,000 units. Current month = 120,000 units.

\[
\frac{120,000-100,000}{100,000}
\times100=20\%
\]

Demand increased by 20%.

But remember: A 20% increase does not automatically mean a permanent upward trend. It may be caused by a one-time order, promotion, or timing adjustment.

# 7. Business Perspective and Decision-Making

Now let's look at this from the perspective of an actual S&OP Analyst. Your responsibility is not simply to collect customer orders and summarize sales. You must help the business understand what customers are likely to require and what that means for the organization.

## 7.1 How demand understanding affects business decisions

| Business area | How demand understanding helps |
|---|---|
| Sales | Identifies customer purchasing behavior and opportunities |
| Production | Helps determine expected production requirements |
| Procurement | Helps anticipate raw material requirements |
| Inventory | Helps manage excess and shortage risks |
| Capacity | Helps identify whether existing resources are sufficient |
| Finance | Supports revenue expectations and financial planning |
| Customer service | Helps identify potential fulfillment risks |

### Example: Demand increases by 30%

Suppose a major customer announces that its monthly requirement will increase from 100,000 to 130,000 units.

An S&OP analyst should investigate the following:

**Demand side**
- Is the increase confirmed?
- Is it temporary or permanent?
- Is it related to a new product launch?
- Is the increase applicable to one SKU or the entire product family?

**Supply side**
- Do we have sufficient raw materials?
- Can the factory increase production?
- Are there machine or labor constraints?
- Can suppliers support the additional requirement?

**Financial side**
- What additional revenue could this generate?
- Will additional overtime increase manufacturing costs?
- Will higher inventory requirements increase working capital?

This demonstrates why understanding demand must come before supply-demand reconciliation.

## 7.2 Why Demand Planning and Sales must collaborate

Sales teams interact directly with customers. They may know information that does not immediately appear in the ERP or order management system.

For example:
- A customer is planning to increase production.
- A customer will launch a new product.
- A customer is considering changing suppliers.
- A customer is planning to reduce purchases.
- A customer has requested a delivery schedule adjustment.

Demand Planning provides the analytical perspective. Sales provides customer and market intelligence. Both are necessary.

| Sales contribution | Demand Planning contribution |
|---|---|
| Customer information | Historical demand analysis |
| Commercial opportunities | Demand data validation |
| Customer expectations | Demand pattern identification |
| New product opportunities | Demand consolidation |
| Customer changes | Demand assessment |

Neither team should operate independently when developing the demand picture.

## 7.3 Why the demand plan should not be limited by production capacity

Imagine:
- Expected customer demand = 200,000 units.
- Factory capacity = 150,000 units.

If the demand plan is immediately reduced to 150,000, the business loses visibility of the remaining 50,000-unit requirement. Management might never recognize the actual supply problem.

Instead, maintain visibility of:

| Planning information | Quantity |
|---|---:|
| Unconstrained demand | 200,000 |
| Available supply capacity | 150,000 |
| Potential supply gap | 50,000 |

Then management can consider:
- Overtime.
- Additional shifts.
- Outsourcing.
- Alternative production facilities.
- Customer allocation.
- Delivery rescheduling.
- Additional supplier capacity.

The objective of S&OP is not to hide the imbalance. It is to make the imbalance visible so management can make informed decisions.

## 7.4 How demand understanding supports supply-demand reconciliation

At a high level, the relationship looks like this:

1. Understand historical and current customer demand.
2. Identify demand patterns and influencing factors.
3. Establish the expected customer requirements.
4. Assess the available supply resources.
5. Identify shortages, excesses, and capacity constraints.
6. Evaluate alternatives.
7. Align the organization on an achievable business plan.

The key distinction:

**Demand describes what the market requires. Supply describes what the business can provide.**

S&OP brings these two perspectives together.

# 8. Key Takeaways

Ito ang mga concepts na gusto kong maging solid ang understanding mo bago tayo mag-move forward.

## 8.1 The most important concepts

| Concept | What you should remember |
|---|---|
| Demand | Quantity of products customers require over a specified period |
| Customer needs | What customers want or need, which may not yet become actual purchasing requirements |
| Actual demand | Observed or established demand, based on the company's defined measurement |
| Actual sales | Quantity actually sold or recognized as sales |
| Customer orders | Formal customer requests or commitments |
| Open orders | Orders that remain unfulfilled or incomplete |
| Backlog | Unfulfilled customer commitments, based on company definition |
| Historical demand | Demand information from previous periods |
| Forecasted demand | Expected future customer requirements |
| Independent demand | Demand originating from external customers or the market |
| Dependent demand | Demand calculated from another item's requirements |
| Derived demand | Demand created by demand for another product or activity |
| Unconstrained demand | Expected demand before supply limitations |
| Constrained demand | Demand or fulfillment planning reflecting relevant constraints |
| Demand variability | Degree of fluctuation in demand |
| Demand uncertainty | Difficulty of knowing future demand accurately |

## 8.2 Six principles to remember

**1. Demand is not the same as sales.**

Sales can be limited by inventory shortages, production capacity, or delivery constraints.

**2. Customer orders do not always represent the complete demand picture.**

Additional requirements, cancellations, postponed orders, and customer forecasts may provide important information.

**3. Not all demand behaves the same way.**

Some products have stable demand, while others experience trends, seasonality, cycles, or intermittent demand.

**4. Demand can exist at different planning levels.**

SKU, model, product family, customer, market, weekly, and monthly levels all provide different perspectives.

**5. Demand changes have causes.**

A good analyst investigates the reasons behind the numbers instead of simply reporting increases or decreases.

**6. Demand should be understood before supply is evaluated.**

Never confuse what the customer needs with what the factory can produce.

## 8.3 The complete mental model

**Understanding the demand picture**

1. **Identify the demand:** Who needs the product, what product, how much, and when?
2. **Understand its source:** Customer orders, market requirements, product relationships, and other demand signals.
3. **Understand its behavior:** Trend, seasonality, cyclical variation, random variation, and intermittent demand.
4. **Understand what influences it:** Internal decisions, customer behavior, competition, market conditions, and industry developments.
5. **Assess its reliability:** Identify variability, uncertainty, cancellations, shortages, and data limitations.
6. **Translate it into business information:** Establish a clear picture of customer requirements that can support S&OP decisions.

# 9. Knowledge Check and Exercises

**Assessment – Level 1 → Level 3**

Now let's test whether you can apply the concepts. Hindi ko muna ibibigay ang answers. Gusto kong makita kung paano ka mag-isip bilang isang future S&OP Analyst.

You can answer in Taglish. Hindi kailangang perfect ang grammar. Mas importante ang reasoning mo.

## Part A. Conceptual Understanding

**Question 1.** What is the difference between customer needs and actual market demand?

Explain using your own example.

**Question 2.** A manufacturing company received customer orders worth 100,000 units but only delivered 70,000 units because of insufficient inventory.

Can the company conclude that its actual demand was only 70,000 units?

Why or why not?

**Question 3.** Differentiate the following:
- Customer orders
- Actual sales
- Open orders
- Backlog
- Historical demand
- Forecasted demand

Explain how they relate to each other.

**Question 4.** What is the difference between dependent demand and derived demand?

Give one manufacturing example for each.

## Part B. Situational Analysis

**Question 5. Demand vs. Sales**

A company reports:

| Month | Customer orders | Actual sales |
|---|---:|---:|
| January | 100,000 | 100,000 |
| February | 120,000 | 110,000 |
| March | 150,000 | 100,000 |

The production department says:

"Demand is decreasing because actual sales decreased in March."

Do you agree?

Explain your assessment and what additional information you would request.

**Question 6. Demand Classification**

Classify each situation:

A. Customers order 50,000 units of a finished capacitor.

B. Each electronic device requires four capacitors.

C. Increasing EV production creates additional demand for battery components.

D. Customers are expected to require 200,000 units, but the company has capacity for only 150,000.

E. The business develops a fulfillment plan based on an available supply of 150,000 units.

Identify the appropriate demand classification or planning concept for each.

**Question 7. Demand Patterns**

Identify the most appropriate demand pattern:

A. Demand increases consistently from 10,000 to 15,000 units over six months.

B. Demand increases every December and decreases every January.

C. Demand fluctuates between 9,800 and 10,200 units without a clear direction.

D. A spare part has zero demand for several months, followed by a sudden order of 500 units.

E. Demand increases during an industry expansion, decreases during an economic slowdown, and recovers afterward.

Explain your answers.

## Part C. Numerical Exercises

**Question 8. Order and Demand Analysis**

A customer submits the following orders:

| Description | Quantity |
|---|---:|
| Gross customer orders | 80,000 |
| Cancelled orders | 5,000 |
| Actual deliveries | 60,000 |

Assuming all figures refer to the same order population and period:

1. Calculate net order demand.
2. Calculate the remaining unfulfilled order quantity.
3. What is the actual sales quantity?
4. Can you automatically conclude that the unfulfilled quantity is backlog? Explain your assumptions.

**Question 9. Dependent Demand Calculation**

A company manufactures 5,000 electronic devices.

Each device requires:
- 4 capacitors.
- 2 resistors.
- 1 connector.

Calculate the total component requirements for each material.

Explain why these are examples of dependent demand.

## Part D. Professional S&OP Analysis

**Question 10. Management Decision**

Your company manufactures electronic components.

The latest information shows:
- Customer demand increased by 25%.
- Actual sales increased by only 5%.
- Customer cancellations also increased.
- Production capacity is already at 95%.
- A major customer announced a new product launch next quarter.

Your manager asks:

"Should we increase production capacity immediately?"

As an S&OP Analyst:

1. What information would you investigate first?
2. What possible explanations could account for the difference between demand and sales?
3. What risks do you see?
4. What would you recommend to management?

There is no single predetermined recommendation. I want to see how you connect demand information to business decisions.

### Assessment submission

**Write your answers here.**

You can answer all questions or submit one section at a time. I will evaluate only what you submit.

- Q1–Q4: Conceptual understanding
- Q5–Q7: Situational analysis
- Q8–Q9: Numerical exercises
- Q10: Professional S&OP analysis

### How I will evaluate your answers

I will assess them based on:

1. **Conceptual understanding:** Tama ba ang pagkaintindi mo sa terminology?
2. **Technical accuracy:** Correct ba ang distinctions and calculations?
3. **Analytical thinking:** Naiintindihan mo ba kung bakit nangyayari ang business situation?
4. **Business application:** Kaya mo bang mag-connect ng demand information sa operational decisions?

Hindi lang natin iche-check kung tama o mali. Ipapaliwanag ko rin kung paano mas magiging professional ang reasoning mo.

---

## Lesson completion checkpoint

**Module 3 – Topic 3.1**
- Lesson discussion: Completed
- Knowledge assessment: Awaiting your answers

Before moving forward:
- Understand what demand represents.
- Distinguish demand from sales and orders.
- Recognize different demand classifications.
- Identify demand drivers and patterns.
- Understand demand variability and uncertainty.
- Explain why demand is the foundation of S&OP planning.

**My recommendation:** Take your time with Questions 5 and 10. Those two questions are particularly important because they test whether you can move beyond reporting numbers and start thinking like an S&OP Analyst.

We will remain in **Module 3 – Topic 3.1** until we have evaluated your answers. Hindi pa tayo lilipat sa next topic without your confirmation.
