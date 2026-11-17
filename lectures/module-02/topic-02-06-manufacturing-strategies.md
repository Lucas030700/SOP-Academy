---
module: 2
topic: "2.6"
title: "Manufacturing Strategies"
language: "Taglish"
status: "complete"
---

# Module 2 – Supply Chain Management
## Topic 2.6: Manufacturing Strategies

**Main learning focus:** Understanding how companies decide whether to manufacture products before receiving customer orders, after receiving orders, or through a combination of both.

## 1. Topic Overview

### What are we going to learn?

Imagine that you are working for an electronic components manufacturer.

Your company produces thousands of different products. Some products are manufactured in large quantities and stored in warehouses. Others are manufactured only when customers place orders. Some products have standard components prepared in advance, while others require customized engineering before production can even begin.

The question is:

**Should the company manufacture products before customers order them, or should it wait until customers place an order?**

This is where Manufacturing Strategies come in.

A manufacturing strategy determines how and when a company produces its products in relation to customer demand.

There are four major manufacturing strategies we will study:

1. **Make-to-Stock (MTS):** Produce first, sell from available inventory.
2. **Make-to-Order (MTO):** Receive an order first, then manufacture.
3. **Assemble-to-Order (ATO):** Prepare components first, assemble after receiving an order.
4. **Engineer-to-Order (ETO):** Customer order triggers engineering and product-specific work.

### Why is this topic important in S&OP?

Manufacturing strategy determines what the company needs to prepare before customer demand arrives.

For example:

- MTS requires accurate demand forecasts and sufficient finished goods inventory.
- MTO requires available production capacity and materials when orders arrive.
- ATO requires sufficient component inventory and flexible assembly capacity.
- ETO requires coordination of engineering resources, procurement, and production schedules.

These differences affect how Demand Planning and Supply Planning work together.

**Connection to Topic 2.5: Product Classification and Product Families**

In Topic 2.5, we discussed how companies classify products and group similar products into product families.

Now, we take that understanding one step further.

Product classification helps the company understand WHAT it produces. Manufacturing strategy helps determine HOW and WHEN those products should be produced.

For example, two products might belong to the same product family but have different manufacturing strategies because one is a standard product and the other is customized.

---

## 2. Layman's Explanation

### Understanding manufacturing strategies through a simple example

Let's imagine that you own a business selling customized electronic devices.

You have four types of customers.

**Customer A: Wants a standard product immediately.**

You already manufacture the product every day and keep 5,000 units in your warehouse.

When a customer orders 100 units, you simply get them from your inventory.

This is MTS.

**Customer B: Wants a product with a specific technical specification.**

You don't manufacture it regularly. You wait until the customer confirms the order, then schedule production.

This is MTO.

**Customer C: Wants a product with a specific combination of standard components.**

You already have the components available, but you don't assemble the final product until the customer chooses the configuration.

This is ATO.

**Customer D: Wants a completely customized product.**

The customer provides technical requirements, and your engineering team must design or modify the product before manufacturing can start.

This is ETO.

### The easiest way to distinguish the four

Think about four different questions:

| Strategy | Main question |
|---|---|
| MTS | What should we produce in advance? |
| MTO | What should we produce after receiving an order? |
| ATO | What components should we prepare in advance? |
| ETO | What needs to be engineered for the customer? |

Notice something important:

The four strategies differ mainly in **when customer demand triggers the different activities of the manufacturing process.**

That timing determines how much inventory the company needs, how much flexibility it requires, and how long customers must wait.

---

## 3. Technical Explanation

Before discussing each strategy individually, let's establish the professional terminology.

### 3.1 What is a Manufacturing Strategy?

A **Manufacturing Strategy** is the approach a company uses to determine how its products will be designed, produced, assembled, and delivered based on customer requirements, market demand, operational capabilities, and business objectives.

In simpler terms:

It is the company's decision-making framework for determining when to manufacture, what to manufacture, how much to manufacture, and what resources to prepare.

Manufacturing strategy connects several business functions:

- Sales: What do customers want?
- Demand Planning: How much demand should we expect?
- Supply Planning: How can we fulfill the expected demand?
- Procurement: What materials should we purchase?
- Production: What should we manufacture and when?
- Inventory Management: What should we keep in stock?
- Finance: How much money will be invested in inventory, capacity, and production?

### 3.2 The Four Major Manufacturing Strategies

| Strategy | Technical definition |
|---|---|
| MTS | Production is based primarily on forecasted demand, with finished goods held in inventory before customer orders arrive. |
| MTO | Production is initiated in response to a confirmed customer order. |
| ATO | Components or subassemblies are prepared in advance, while final assembly is triggered by a customer order. |
| ETO | Customer orders trigger engineering or product design activities, followed by procurement and manufacturing. |

An important distinction:

**The strategies are not simply four different production methods. They represent different points in the process where customer demand influences or triggers business activities.**

Now let's examine each one.

---

## 4. Detailed Discussion

### 4.1 Make-to-Stock (MTS)

**Forecast-driven**

#### A. What is MTS?

Make-to-Stock is a manufacturing strategy where products are manufactured based on expected customer demand rather than waiting for actual customer orders.

The company forecasts how many units customers are likely to purchase, manufactures those products in advance, and stores them as finished goods inventory.

When customers place orders, the company fulfills them using available inventory.

#### B. How does MTS work?

Let's assume an electronic components manufacturer produces a standard capacitor.

The company expects customers to purchase 100,000 units next month.

Its planning process might look like this:

1. **Demand Forecast:** Expected demand is 100,000 units.
2. **Production Planning:** Determine production quantity and schedule.
3. **Manufacturing:** Produce 100,000 units before customer orders arrive.
4. **Finished Goods Inventory:** Store completed products in the warehouse.
5. **Customer Order:** Customer orders 10,000 units.
6. **Order Fulfillment:** Ship from existing finished goods inventory.

Notice that manufacturing happens before the actual customer order.

#### C. Why do companies use MTS?

The main reason is speed.

Customers generally don't want to wait several weeks for standard products that they can purchase elsewhere.

By maintaining finished goods inventory, companies can fulfill orders quickly.

Other advantages include:

1. Faster customer delivery.
2. More stable production schedules.
3. Opportunities for economies of scale.
4. Better utilization of production equipment through longer production runs.
5. Potentially lower unit production costs.

#### D. Disadvantages and risks

The biggest weakness of MTS is dependence on forecast accuracy.

Imagine that you forecast 100,000 units, but actual demand is only 60,000 units.

You now have 40,000 units of excess inventory, assuming there was no beginning inventory and all produced units remain unsold.

Possible consequences:

- Higher inventory holding costs.
- Increased warehouse utilization.
- Cash tied up in unsold products.
- Risk of obsolescence.
- Potential price reductions to clear excess stocks.

Now consider the opposite.

You forecast 60,000 units, but customers actually order 100,000 units.

You have a 40,000-unit shortage.

Possible consequences:

- Lost sales.
- Backorders.
- Delayed deliveries.
- Lower customer satisfaction.
- Expedited production or transportation costs.

#### E. Important MTS terminology

| Term | Meaning |
|---|---|
| Finished Goods (FG) | Completed products ready for shipment. |
| Forecast Accuracy | How closely forecasts match actual demand. |
| Excess Inventory | Inventory exceeding what is required. |
| Stockout | Situation where available inventory is insufficient to fulfill demand. |
| Replenishment | Producing or acquiring inventory to restore stock levels. |

**Practical takeaway:** MTS works particularly well when demand is relatively predictable, products are standardized, and customers expect fast delivery.

---

### 4.2 Make-to-Order (MTO)

**Order-driven**

#### A. What is MTO?

Make-to-Order is a manufacturing strategy where production begins after receiving a confirmed customer order.

Unlike MTS, the company does not normally manufacture finished products in advance for general customer demand.

Instead, actual orders become the primary trigger for production.

#### B. How does MTO work?

Imagine that a customer orders 20,000 electronic components with a particular capacitance specification.

Your company does not regularly manufacture this particular configuration.

The process is:

1. **Customer Order:** Confirmed requirement of 20,000 units.
2. **Order Evaluation:** Check specifications, materials, and capacity.
3. **Production Planning:** Create a production schedule for the order.
4. **Manufacturing:** Produce the required 20,000 units.
5. **Delivery:** Ship the completed customer order.

Notice that production begins after the customer confirms the order.

#### C. Why do companies use MTO?

MTO is useful when customer demand is difficult to predict at the individual product level.

Instead of manufacturing products that might not sell, the company waits until a real order exists.

Advantages:

- Lower finished goods inventory.
- Reduced risk of unsold customized products.
- Better alignment between actual demand and production.
- Greater flexibility for customer-specific requirements.
- Reduced exposure to finished goods obsolescence.

#### D. Disadvantages and risks

The main disadvantage is customer waiting time.

Because manufacturing begins after the order arrives, customers must wait for:

1. Material preparation.
2. Production scheduling.
3. Manufacturing.
4. Quality inspection.
5. Shipment preparation.

Another important risk is insufficient production capacity.

Imagine receiving an order for 50,000 units, but your production line is already operating at full capacity.

You have actual customer demand, but you cannot immediately fulfill it.

This is a supply constraint, not a demand problem.

Similarly, if raw materials have a supplier lead time of eight weeks, even an available production line cannot solve the shortage immediately.

#### E. Important MTO terminology

| Term | Meaning |
|---|---|
| Confirmed Order | Actual customer commitment to purchase. |
| Backlog | Confirmed customer orders that have not yet been fulfilled. |
| Production Order | Formal instruction to manufacture a specified quantity. |
| Order Lead Time | Time required to fulfill an order. |
| Available Capacity | Production resources available for additional work. |

**Practical takeaway:** MTO reduces the need to stock completed products, but it requires reliable materials availability, sufficient production capacity, and acceptable customer delivery expectations.

---

### 4.3 Assemble-to-Order (ATO)

**Hybrid strategy**

#### A. What is ATO?

Assemble-to-Order is a manufacturing strategy where standard components or subassemblies are prepared and stocked in advance, but final assembly begins only after receiving a customer order.

This strategy combines the advantages of advance preparation and customer-specific fulfillment.

Let's use a simple example.

Imagine a company manufacturing customized desktop computers.

It already stocks:

- Motherboards.
- Processors.
- Memory modules.
- Storage devices.
- Power supplies.
- Computer cases.

However, it does not assemble every possible computer configuration in advance.

When a customer orders a specific configuration, the company selects the required components and assembles the final product.

#### B. How does ATO work?

1. **Forecasting:** Estimate demand for common components.
2. **Component Preparation:** Purchase or manufacture standard components.
3. **Component Inventory:** Maintain available components and subassemblies.
4. **Customer Order:** Customer selects a specific configuration.
5. **Final Assembly:** Combine the required components.
6. **Delivery:** Ship the completed configuration.

#### C. Why do companies use ATO?

ATO addresses a common business challenge:

Customers want customized products, but companies do not want to manufacture and store every possible finished product configuration.

Instead, companies stock common components and delay final assembly until they know exactly what customers want.

Advantages:

- Lower finished goods inventory across product configurations.
- Faster fulfillment than starting the entire manufacturing process from scratch.
- Greater customer customization.
- Better flexibility in final product configuration.
- Reduced risk of holding obsolete finished products.

#### D. Disadvantages and risks

ATO depends heavily on component availability.

Imagine that you have all components needed for 1,000 computers except for the memory modules.

Even if you have sufficient assembly capacity, you cannot complete the orders.

Other risks include:

- Excessive component inventory.
- Component shortages.
- Complex inventory coordination.
- Assembly capacity constraints.
- Incorrect component forecasting.

#### E. Important ATO terminology

| Term | Meaning |
|---|---|
| Component Inventory | Stock of individual parts used to make a finished product. |
| Subassembly | A partially assembled product or group of components. |
| Bill of Materials (BOM) | A structured list of materials and quantities required to produce a product. |
| Final Assembly | Combining components into the completed product. |
| Product Configuration | Specific combination of components selected for a customer. |

**Practical takeaway:** ATO is useful when products have multiple possible configurations but share common components.

---

### 4.4 Engineer-to-Order (ETO)

**Highly customized**

#### A. What is ETO?

Engineer-to-Order is a manufacturing strategy where customer requirements trigger engineering activities, product design, or significant design modifications before procurement and manufacturing.

Unlike MTS, MTO, and ATO, ETO may require the company to develop a product design specifically for an individual customer.

#### B. How does ETO work?

Imagine that an industrial customer wants a customized electronic power control system.

The customer has specific requirements involving:

- Operating voltage.
- Physical dimensions.
- Thermal performance.
- Electrical characteristics.
- Environmental operating conditions.
- Safety requirements.

Your company cannot simply take an existing standard product and manufacture it.

The engineering team must first evaluate the requirements and develop an acceptable design.

The process is:

1. **Customer Order / Requirements:** Customer provides technical specifications.
2. **Engineering and Design:** Develop or modify the product design.
3. **Design Validation:** Verify technical feasibility and customer requirements.
4. **Procurement:** Purchase required materials and components.
5. **Manufacturing:** Manufacture according to the approved design.
6. **Testing and Delivery:** Validate product performance and deliver.

#### C. Why do companies use ETO?

ETO is necessary when customers require products that cannot be fulfilled using standard manufacturing configurations.

Advantages:

- Very high customization.
- Ability to serve specialized markets.
- Products can meet unique technical requirements.
- Potential for differentiated, higher-value solutions.

#### D. Disadvantages and risks

ETO usually involves longer and less predictable lead times.

The company must manage several activities that may not be fully defined when the order is received.

Common challenges:

- Engineering design delays.
- Design revisions.
- Material specification changes.
- Long procurement lead times.
- Uncertain production schedules.
- Technical validation failures.
- Project cost overruns.

#### E. Important ETO terminology

| Term | Meaning |
|---|---|
| Engineering Lead Time | Time needed to complete engineering and design activities. |
| Design Validation | Checking whether the proposed design meets requirements. |
| Technical Specification | Detailed requirements that define product characteristics. |
| Engineering Change | Modification to an existing design or specification. |
| Project-Based Manufacturing | Manufacturing organized around individual customer projects. |

**Practical takeaway:** ETO requires more than production planning. It requires integrated project, engineering, procurement, and manufacturing planning.

---

### 4.5 Comparison of MTS, MTO, ATO, and ETO

Now let's put everything together.

| Criteria | MTS | MTO | ATO | ETO |
|---|---|---|---|---|
| Production begins | Based on forecast | After confirmed order | Final assembly after order | Engineering after order |
| Main planning input | Demand forecast | Customer orders | Component forecasts and customer orders | Customer requirements |
| Inventory | High FG inventory | Low FG inventory | Component/subassembly inventory | Usually limited standard inventory; project-specific materials |
| FG availability | Usually available | Produced after order | Assembled after order | Designed and manufactured after order |
| Customization | Low | Moderate to high | Moderate | Very high |
| Customer lead time | Short | Manufacturing lead time | Assembly lead time plus any shortages | Engineering + procurement + manufacturing |
| Forecasting | Important at FG level | Important for capacity and materials | Important at component level | Important for resources and long-lead materials |
| Capacity planning | Forecast-based production capacity | Order-based capacity | Component production and assembly capacity | Engineering, procurement, and production capacity |
| Main risk | Excess or shortage of FG | Long delivery time or capacity shortage | Component shortages | Engineering delays and project uncertainty |
| Typical applications | Standard electronics, common components | Specialized industrial products | Configurable computers, modular products | Custom machinery, specialized systems |

**An important clarification about inventory:**

ETO does not mean that the company maintains zero inventory. It may still hold common raw materials, standard components, and engineering resources. The key difference is that customer-specific design and production are triggered by the order.

### 4.6 Can one company use all four strategies?

Absolutely.

In fact, many manufacturers use different strategies for different product families or even different product configurations.

For example:

| Product | Manufacturing strategy |
|---|---|
| Standard capacitor, high-volume | MTS |
| Special-specification capacitor | MTO |
| Configurable electronic module | ATO |
| Custom-designed industrial power system | ETO |

This is called having a **mixed manufacturing strategy** or a **hybrid manufacturing environment**.

The company doesn't need to select only one strategy for its entire business.

The strategy should match the characteristics of each product, customer segment, and market.

---

### 4.7 Important Related Manufacturing Concepts

Now let's introduce concepts that frequently appear in professional S&OP discussions.

These concepts help explain how manufacturing strategies interact with production systems and customer demand.

#### A. Push System

A Push System is a production approach where manufacturing activities are initiated based on forecasts, planned quantities, or expected future demand.

In simple terms:

**Gumagawa ka dahil inaasahan mong may bibili.**

Example:

A company forecasts that it will sell 50,000 capacitors next month.

It schedules production of those capacitors before receiving customer orders.

This is commonly associated with MTS.

However, push production can also occur upstream in ATO and MTO environments.

For example, a company may produce standard components based on forecasts even though final assembly is order-driven.

#### B. Pull System

A Pull System is an approach where production or replenishment is triggered by actual consumption or customer demand.

In simple terms:

**Gagawa ka dahil may actual requirement na.**

Example:

A customer places an order for 10,000 customized capacitors.

The company initiates production based on that confirmed order.

This is commonly associated with MTO.

ATO also has a pull element because the final assembly is triggered by an actual customer order.

#### C. Decoupling Point

A **Decoupling Point** is the point in the supply chain where forecast-driven activities transition to order-driven activities.

Imagine a manufacturing process with these stages:

Raw Materials → Component Production → Subassembly → Final Assembly → Finished Goods → Customer

The decoupling point determines where the company begins waiting for actual customer orders instead of relying only on forecasts.

This is important because it separates two different planning environments:

- Upstream: Activities may be driven by forecasts.
- Downstream: Activities are driven by actual customer orders.

#### D. Customer Order Decoupling Point (CODP)

The Customer Order Decoupling Point, or CODP, is the specific point in the production or supply chain where a customer order enters and triggers the remaining fulfillment activities.

This is one of the most important concepts in understanding MTS, MTO, ATO, and ETO.

Let's compare:

**MTS: CODP near finished goods**

Forecast-driven production → Finished Goods

Customer order triggers fulfillment from FG.

**ATO: CODP at final assembly**

Forecast-driven components → Final assembly

Customer order triggers assembly.

**MTO: CODP before manufacturing**

Common materials may be forecasted → Manufacturing

Customer order triggers production.

**ETO: CODP before engineering**

General capabilities and resources → Engineering and design

Customer order triggers engineering.

*Simplified conceptual illustration. Actual CODP placement depends on the company's process and product design.*

The CODP is useful because it tells planners where they need to rely on forecasts and where they can rely on actual customer orders.

#### E. Forecast-driven Production

This means production activities are planned using anticipated future demand.

It is especially important in MTS and in the upstream portions of ATO.

#### F. Order-driven Production

This means production activities are triggered by actual customer orders.

It is especially important in MTO, ATO final assembly, and ETO.

#### G. Postponement

Postponement is a strategy where a company delays final product differentiation, configuration, or completion until more information about actual customer demand becomes available.

Example:

A company manufactures a common electronic module and stores it as a semi-finished product.

It only performs the final configuration when the customer orders a particular version.

Why is this useful?

Because the company does not need to predict the exact demand for every possible configuration.

It only needs to forecast the demand for common components or semi-finished products.

Postponement is strongly associated with ATO, although it can also be used in other hybrid manufacturing arrangements.

### 4.8 How the Concepts Connect

| Concept | Common relationship |
|---|---|
| Push | Strongly associated with forecast-driven MTS production |
| Pull | Strongly associated with order-driven MTO activities |
| Decoupling Point | Separates forecast-driven and order-driven activities |
| CODP | Identifies where customer orders enter the fulfillment process |
| Forecast-driven production | Used for MTS and upstream ATO activities |
| Order-driven production | Used for MTO, ATO final assembly, and ETO |
| Postponement | Delays final customization or configuration |

**Important:** Push and pull are production control concepts, while MTS, MTO, ATO, and ETO are manufacturing strategies. They are related, but they are not interchangeable terms.

---

### 4.9 Factors Influencing Manufacturing Strategy Selection

How does a company decide which manufacturing strategy to use?

There is no universal answer. The company must consider its customers, products, suppliers, production capabilities, and financial objectives.

Let's examine the factors.

| Factor | Business consideration | Possible implication |
|---|---|---|
| Demand predictability | Can demand be forecast accurately? | Predictable demand may support MTS |
| Customer delivery expectations | Does the customer expect immediate delivery? | Short delivery expectations may favor MTS or ATO |
| Customization | How unique are customer requirements? | Greater customization may favor MTO or ETO |
| Product complexity | Is engineering required? | Complex custom designs may require ETO |
| Production lead time | How long does manufacturing take? | Long lead times may require advance preparation |
| Supplier lead time | How long before materials arrive? | Long lead times may require strategic component inventory |
| Inventory holding costs | Is finished goods inventory expensive? | High holding costs may favor MTO or ATO |
| Production capacity | Can production respond quickly to orders? | Limited capacity may require advance planning |
| Product shelf life | Can the product expire or become obsolete? | Short shelf life increases MTS inventory risk |
| Competition | How quickly must the company deliver? | Competitive delivery requirements influence CODP placement |

#### Let's examine some important trade-offs.

**Scenario 1: Predictable demand, short customer delivery expectation**

A standard electronic component sells consistently every month.

Customers expect delivery within two days.

MTS may be appropriate because demand is relatively predictable and finished goods availability is important.

**Scenario 2: Unpredictable demand, highly customized product**

A customer orders a specialized electronic component only once every few months.

Manufacturing the product in advance would create a high risk of unsold inventory.

MTO may be more appropriate.

**Scenario 3: Multiple product configurations, shared components**

A company sells 20 different product configurations using the same 10 standard components.

ATO may be suitable because it can maintain common components and assemble specific configurations after receiving orders.

**Scenario 4: Unique technical requirements**

A customer requests a product that requires a new design and validation process.

ETO may be necessary.

The key principle:

**The best manufacturing strategy is the one that balances customer responsiveness, operational feasibility, inventory investment, and profitability.**

---

## 5. Practical Examples and Applications

Let's now bring these concepts into a realistic electronic components manufacturing environment.

### 5.1 Illustrative electronic components manufacturer

Imagine a company called ABC Electronics.

It manufactures four product types.

| Product | Characteristics | Strategy |
|---|---|---|
| Product A | Standard capacitor, high-volume demand | MTS |
| Product B | Customer-specific electrical specifications | MTO |
| Product C | Modular electronic assembly using standard components | ATO |
| Product D | Custom-designed industrial electronic system | ETO |

These are illustrative examples, not claims about a particular company's actual production system.

### 5.2 Product A: Standard High-Volume Capacitor (MTS)

**Demand generation**

Sales provides historical demand, customer forecasts, and market projections.

Demand Planning consolidates this information and creates a forecast.

**When production begins**

Production is scheduled before confirmed customer orders arrive.

**Inventory maintained**

The company maintains:

- Raw materials.
- Work-in-process inventory.
- Finished goods inventory.

**Required resources**

- Production lines.
- Raw materials.
- Labor.
- Equipment.
- Warehouse capacity.

**Main planning challenges**

- Forecast accuracy.
- Production quantity.
- Finished goods inventory levels.
- Excess inventory.
- Stockout prevention.

**How S&OP supports it**

S&OP compares forecasted demand against production capacity and inventory availability.

If the forecast increases, the company evaluates whether additional production is needed.

If the forecast decreases, it evaluates whether production should be reduced to avoid excess inventory.

### 5.3 Product B: Customer-Specific Capacitor (MTO)

**Demand generation**

Demand primarily comes from confirmed customer orders.

Customer forecasts may still help with material and capacity preparation.

**When production begins**

Production begins after the customer confirms the required specification and order.

**Inventory maintained**

The company may maintain common raw materials but generally avoids building finished goods for uncertain orders.

**Required resources**

- Production capacity.
- Raw materials.
- Technical support.
- Quality inspection.
- Production scheduling.

**Main planning challenges**

- Order backlog.
- Material availability.
- Production lead time.
- Capacity allocation.
- Delivery commitments.

**How S&OP supports it**

S&OP evaluates whether forecasted and confirmed order volumes can be fulfilled using available resources.

It also evaluates whether additional production capacity or supplier commitments are necessary.

### 5.4 Product C: Modular Electronic Assembly (ATO)

**Demand generation**

Demand comes from customer orders specifying different combinations of standard components.

**When production begins**

Component preparation may be forecast-driven, while final assembly begins after customer orders arrive.

**Inventory maintained**

- Common raw materials.
- Standard components.
- Subassemblies.
- Limited finished goods, if applicable.

**Required resources**

- Component manufacturing.
- Procurement.
- Assembly stations.
- Skilled assembly personnel.
- Quality inspection.

**Main planning challenges**

- Component-level forecast accuracy.
- BOM accuracy.
- Component shortages.
- Assembly capacity.
- Product configuration.

**How S&OP supports it**

S&OP reviews demand across configurations and translates it into requirements for shared components.

For example, 10 different finished products may use the same electronic component.

Instead of planning each product independently, the company consolidates the component requirements.

This can significantly improve material planning.

### 5.5 Product D: Custom Industrial Electronic System (ETO)

**Demand generation**

Demand comes from customer projects and technical requirements.

**When production begins**

Engineering starts after the customer order or project commitment, followed by procurement and manufacturing according to the approved design.

**Inventory maintained**

- Standard raw materials.
- Common components.
- Project-specific materials when appropriate.

**Required resources**

- Engineering personnel.
- Design software and technical resources.
- Procurement.
- Specialized production equipment.
- Testing and validation teams.

**Main planning challenges**

- Engineering workload.
- Design completion dates.
- Supplier lead times.
- Project scheduling.
- Technical changes.
- Cost and delivery uncertainty.

**How S&OP supports it**

S&OP considers not only production capacity but also engineering and procurement constraints.

For example, the company may have enough manufacturing capacity but insufficient engineering resources to complete the required designs on time.

That is still a supply constraint.

### 5.6 What happens when demand suddenly increases?

Now let's examine an important S&OP scenario.

ABC Electronics receives a sudden increase in customer demand.

Assume that monthly demand increases by 30%.

The implications will differ depending on the manufacturing strategy.

| Strategy | Immediate impact | Main planning response |
|---|---|---|
| MTS | Finished goods inventory may be depleted faster than expected | Review inventory, increase replenishment, and assess capacity |
| MTO | Confirmed orders and backlog increase | Check production capacity, material availability, and delivery commitments |
| ATO | Demand for common components and final assembly increases | Recalculate component requirements and assembly capacity |
| ETO | More customer projects or design requirements may arrive | Review engineering workload, procurement lead times, and project schedules |

Let's make this more concrete.

**MTS example**

Beginning finished goods inventory: 20,000 units.

Expected demand: 100,000 units.

Actual demand increases to 130,000 units.

Assuming there are no replenishment receipts during the period:

\[
FG_{\text{ending}}=20,000+100,000-130,000
\]

\[
FG_{\text{ending}}=-10,000
\]

The negative result indicates an inventory shortfall of 10,000 units.

The company must evaluate additional production, order prioritization, or alternative fulfillment arrangements.

**MTO example**

Original confirmed orders: 50,000 units.

New confirmed orders: 65,000 units.

Additional orders: 15,000 units.

The company must determine whether production capacity can accommodate the additional 15,000 units without delaying existing commitments.

**ATO example**

Suppose the additional demand requires:

- 15,000 electronic modules.
- Each module requires two capacitors.
- Each module requires one controller.

Additional requirements:

\[
15,000 \times 2 = 30,000
\]

The company needs an additional 30,000 capacitors and 15,000 controllers.

The key question is whether component inventory and replenishment capacity are sufficient.

**ETO example**

Suppose three additional customer projects arrive.

Each project requires:

- 120 engineering hours.
- 200 procurement hours of coordination and processing.
- 500 manufacturing hours.

Additional resource requirements:

| Resource | Additional requirement |
|---|---:|
| Engineering | 360 hours |
| Procurement | 600 hours |
| Manufacturing | 1,500 hours |

The company must evaluate whether these resources can support the new projects and whether customer delivery commitments need adjustment.

**Important S&OP lesson:**

An increase in customer demand does not automatically mean that production can immediately increase.

The company must evaluate the constraints associated with its manufacturing strategy.

MTS may be constrained by inventory replenishment and production capacity.

MTO may be constrained by order backlog, materials, and available production capacity.

ATO may be constrained by component supply and assembly capacity.

ETO may be constrained by engineering workload, specialized procurement, and project execution.

---

## 6. Formulas and Calculations

Manufacturing strategies are primarily operational concepts, but several calculations help planners understand their impact.

Let's focus on four useful calculations.

### 6.1 Finished Goods Inventory Projection

This is particularly important for MTS.

**Formula:**

\[
FG_{\text{Ending}}=FG_{\text{Beginning}}+Production-Demand
\]

Where:

- Beginning FG = Initial finished goods inventory (units).
- Production = Quantity manufactured (units).
- Demand = Customer demand (units).
- Ending FG = Remaining inventory (units).

**Example:**

A company has:

| Item | Quantity |
|---|---:|
| Beginning inventory | 20,000 |
| Planned production | 100,000 |
| Forecasted demand | 110,000 |

Calculation:

\[
20,000+100,000-110,000
\]

\[
\boxed{10,000\text{ units}}
\]

Interpretation:

The company expects to finish the period with 10,000 units of inventory.

If actual demand increases to 125,000 units:

\[
20,000+100,000-125,000=-5,000
\]

This means the company faces a potential shortage of 5,000 units, assuming no other inventory receipts.

### 6.2 Material Requirements Calculation

This is particularly useful in ATO and MTO.

**Formula:**

\[
Material\ Requirement=Product\ Demand\times Material\ per\ Product
\]

Example:

A company receives an order for 12,000 electronic modules.

Each module requires:

- 2 capacitors.
- 1 controller.
- 3 resistors.

Calculate the required materials.

| Material | Requirement per unit | Total requirement |
|---|---:|---:|
| Capacitor | 2 | 24,000 |
| Controller | 1 | 12,000 |
| Resistor | 3 | 36,000 |

This is the basic logic behind a Bill of Materials (BOM) explosion.

**But remember:** Gross material requirements are not necessarily the quantity that must be purchased.

The planner must account for existing inventory, open purchase orders, allocated stock, and expected material losses.

A simplified net requirement calculation is:

\[
Net\ Requirement=Gross\ Requirement-Available\ Supply
\]

Suppose the company needs 24,000 capacitors and has 8,000 usable units available.

\[
24,000-8,000=16,000
\]

It needs an additional 16,000 capacitors, assuming no other scheduled receipts.

### 6.3 Production Capacity Requirement

This is important across all four strategies.

**Formula:**

\[
Required\ Production\ Hours=\frac{Required\ Quantity}{Production\ Rate}
\]

Example:

A company needs to manufacture 50,000 units.

Its production line can produce 2,500 units per hour.

\[
\frac{50,000}{2,500}=20\text{ hours}
\]

The production requirement is 20 operating hours.

Now assume the company has only 15 available production hours.

\[
Capacity\ Shortfall=20-15=5\text{ hours}
\]

The company must evaluate overtime, additional shifts, improved productivity, or other feasible alternatives.

In an MTO environment, this calculation helps determine whether new orders can be accepted without affecting existing orders.

In an MTS environment, it helps determine whether the forecasted replenishment plan is feasible.

### 6.4 Total Customer Lead Time

This is particularly important when comparing MTS, MTO, ATO, and ETO.

Customer lead time depends on the activities that remain after the customer order is received.

For simplified planning purposes:

**MTS:**

\[
LT_{\text{Customer}}\approx Order\ Processing+Delivery
\]

**MTO:**

\[
LT_{\text{Customer}}=Material\ Preparation+Production+Delivery
\]

**ATO:**

\[
LT_{\text{Customer}}=Component\ Availability+Assembly+Delivery
\]

**ETO:**

\[
LT_{\text{Customer}}=Engineering+Procurement+Production+Testing+Delivery
\]

These are simplified additive models. Actual elapsed lead time depends on parallel activities, queues, waiting time, and overlapping operations.

**Illustrative comparison:**

| Activity | MTS | MTO | ATO | ETO |
|---|---:|---:|---:|---:|
| Engineering | 0 days | 0 days | 0 days | 20 days |
| Material preparation | 0 days | 10 days | 0 days | 30 days |
| Manufacturing / Assembly | 0 days | 15 days | 3 days | 20 days |
| Order processing and delivery | 3 days | 3 days | 3 days | 5 days |
| Total | 3 days | 28 days | 6 days | 75 days |

*Illustrative assumptions only. The table assumes the listed activities are sequential and that MTS and ATO inventory is available when required.*

The business implication is straightforward:

The later the customer order enters the production process, the more work may remain before delivery.

This is why the placement of the CODP has a major influence on customer lead time.

---

## 7. Business Perspective and Decision-Making

Let's now look at manufacturing strategies from the perspective of an S&OP Analyst.

At this stage, hindi ka lang nagtatanong kung ilang units ang kailangan gawin.

You need to understand how the company's chosen manufacturing strategy affects its ability to fulfill demand profitably.

### 7.1 Impact on Demand Planning

Demand Planning must consider how demand is generated and what information is available.

| Strategy | Demand Planning responsibility |
|---|---|
| MTS | Develop accurate finished goods demand forecasts. |
| MTO | Analyze customer orders, order pipeline, and demand signals for materials and capacity. |
| ATO | Forecast common components across multiple configurations. |
| ETO | Analyze customer projects, expected opportunities, and engineering workload requirements. |

For example, an ATO company may sell ten different finished products.

All ten products use the same capacitor.

Demand Planning should not simply forecast each finished product independently and stop there.

It should also translate the expected product mix into total capacitor requirements.

This allows Supply Planning to prepare the correct component quantities.

### 7.2 Impact on Supply Planning

Supply Planning determines whether the company can meet demand.

But the planning requirements depend on the manufacturing strategy.

- MTS: Can we produce enough finished goods to replenish inventory?
- MTO: Can we manufacture confirmed customer orders on time?
- ATO: Do we have the right components to assemble the requested configurations?
- ETO: Can Engineering, Procurement, and Production execute the customer project?

The distinction is important because a company may have sufficient total inventory but still lack the specific material required to fulfill customer demand.

### 7.3 Impact on Production Planning

Production Planning must determine when and how much to manufacture.

| Strategy | Production planning focus |
|---|---|
| MTS | Production quantities based on forecasts and inventory targets |
| MTO | Production schedules based on confirmed orders |
| ATO | Component production plus final assembly scheduling |
| ETO | Project-based schedules incorporating engineering and manufacturing |

MTS generally requires careful replenishment planning.

MTO requires effective order prioritization and scheduling.

ATO requires coordination between component availability and assembly.

ETO requires coordination of multiple interdependent project activities.

### 7.4 Impact on Capacity Planning

Capacity Planning evaluates whether available resources can support the required production workload.

Consider the following:

| Strategy | Important capacity considerations |
|---|---|
| MTS | Capacity to support forecasted production volumes |
| MTO | Capacity available when customer orders arrive |
| ATO | Component manufacturing and assembly capacity |
| ETO | Engineering, procurement coordination, and specialized production capacity |

A common mistake is to evaluate only machine capacity.

For ETO, the company may have enough machines but insufficient engineering resources.

For ATO, it may have enough components but insufficient assembly stations.

For MTO, it may have enough total monthly capacity but insufficient capacity during the required delivery window.

**Capacity must be evaluated at the resource and time-period level, not just as a monthly total.**

### 7.5 Impact on Procurement

Procurement requirements also differ.

- MTS: Purchase materials to support forecasted production.
- MTO: Secure materials for confirmed orders and anticipated requirements.
- ATO: Maintain sufficient common components for multiple configurations.
- ETO: Purchase customer-specific materials according to approved engineering specifications.

An important consideration is supplier lead time.

Suppose a component requires 60 days to arrive from a supplier, but the customer expects delivery within 30 days.

Even if production takes only five days, the company cannot meet the requested delivery date unless it has available inventory or another feasible sourcing arrangement.

### 7.6 Impact on Inventory Management

This is one of the most important differences.

**Typical inventory emphasis by strategy:**

| Strategy | Typical inventory emphasis |
|---|---|
| MTS | Finished goods |
| MTO | Common materials / WIP |
| ATO | Components / subassemblies |
| ETO | Common and project-specific materials |

*Conceptual illustration of typical inventory emphasis, not measured inventory quantities or universal industry benchmarks.*

Remember:

- MTS holds completed products.
- MTO generally avoids stocking customer-specific finished goods.
- ATO holds components and subassemblies.
- ETO may hold common materials but often manages project-specific requirements.

### 7.7 Impact on Customer Service

Customer service is influenced by how quickly the company can fulfill orders.

| Strategy | Typical customer experience |
|---|---|
| MTS | Fast delivery if inventory is available |
| MTO | Customer waits for manufacturing |
| ATO | Customer waits for final assembly |
| ETO | Customer waits for engineering and full project execution |

A company may offer a customized product but must communicate realistic delivery commitments.

Promising a five-day delivery for an ETO product that requires 75 days of engineering and manufacturing work creates an obvious business problem.

### 7.8 Impact on Financial Planning

Manufacturing strategies influence working capital, operating expenses, and revenue timing.

**MTS financial considerations:**

- Higher finished goods inventory investment.
- Potential warehouse and holding costs.
- Risk of obsolete inventory.
- Faster fulfillment and potentially faster revenue realization.

**MTO financial considerations:**

- Generally lower finished goods inventory investment.
- Possible longer order fulfillment cycles.
- Risk of idle or overloaded production resources.

**ATO financial considerations:**

- Investment in common components.
- Potential inventory efficiency through shared parts.
- Need for flexible assembly operations.

**ETO financial considerations:**

- Engineering and project development costs.
- Specialized procurement expenses.
- Potential cost overruns.
- Project-specific working capital requirements.

### 7.9 How S&OP Brings Everything Together

This is the central lesson of the topic.

S&OP should not simply look at total demand and total production capacity.

It must understand the company's manufacturing strategy because the strategy determines how demand translates into supply requirements.

Consider this simplified S&OP review:

| S&OP area | Key question |
|---|---|
| Demand Review | What are customers expected to order? |
| Supply Review | Can we support the demand using our manufacturing strategy? |
| Inventory Review | What inventory should we maintain and at what stage? |
| Capacity Review | Do we have sufficient machines, people, and engineering resources? |
| Financial Review | What are the financial consequences of the proposed plan? |
| Executive S&OP | Which trade-offs and actions require management decisions? |

**Example of an S&OP decision:**

Sales forecasts a 25% increase in Product A demand.

The product follows MTS.

Supply Planning identifies that the existing production plan cannot support the increase.

The company has three possible options:

1. Increase production through additional shifts.
2. Use existing inventory temporarily while increasing replenishment.
3. Allocate available inventory to the most important customer requirements.

Finance then evaluates the additional production costs, inventory investment, and potential revenue.

Management agrees on the appropriate response.

That is S&OP in action.

The objective is not simply to produce more. It is to agree on a feasible and financially sensible plan that balances demand and supply.

---

## 8. Key Takeaways

Let's consolidate the most important lessons.

### 8.1 The four manufacturing strategies

| Strategy | Remember this |
|---|---|
| MTS | Produce based on forecast; stock finished goods. |
| MTO | Produce after confirmed order. |
| ATO | Stock components; assemble after order. |
| ETO | Engineer and design based on customer requirements. |

### 8.2 The most important relationships

1. Manufacturing strategy determines when customer demand triggers production-related activities.
2. MTS depends heavily on forecast accuracy.
3. MTO depends on production capacity, material availability, and order management.
4. ATO depends on component availability and flexible assembly.
5. ETO depends on engineering, procurement, and production coordination.
6. CODP identifies where customer orders enter the fulfillment process.
7. Push and pull are related production control concepts, not alternative names for the four strategies.
8. A company can use multiple manufacturing strategies across its product portfolio.
9. S&OP must evaluate demand, supply, inventory, capacity, and financial implications according to each manufacturing strategy.

### 8.3 The most important concept to remember

**Manufacturing strategy is fundamentally about balancing three things:**

- Inventory investment.
- Customer delivery lead time.
- Customer requirements and flexibility.

The company must decide how much work to complete before actual customer demand becomes known.

---

## 9. Knowledge Check and Exercises

**Assessment: Module 2 – Topic 2.6**

Now let's test your understanding.

Don't worry about getting everything correct. The objective is to develop your ability to explain and apply these concepts, not memorize definitions.

I will evaluate your answers, identify what you understood correctly, correct misconceptions, and explain the business reasoning.

**Do not look for perfect textbook definitions. Explain using your own understanding.**

### Part A. Conceptual Understanding

**Question 1.** What is the fundamental difference between MTS, MTO, ATO, and ETO?

Explain what triggers the production or manufacturing activities in each strategy.

**Question 2.** Why would a company choose MTS instead of MTO even though MTS requires maintaining finished goods inventory?

**Question 3.** In ATO, why does the company maintain component inventory instead of manufacturing every possible finished product configuration in advance?

**Question 4.** Why is ETO generally associated with longer customer lead times compared with MTS and ATO?

**Question 5.** Explain the difference between Push and Pull systems. Why should we not treat them as exactly the same concepts as MTS and MTO?

### Part B. Situational Analysis

**Question 6.**

An electronic components manufacturer produces a standard capacitor with predictable monthly demand.

Customers expect delivery within two days.

Which manufacturing strategy would you recommend?

Explain why.

**Question 7.**

A customer requests a capacitor with a unique technical specification that the company does not regularly manufacture.

The company has the necessary production equipment and materials, but production must be scheduled after the customer confirms the order.

Which strategy is appropriate?

**Question 8.**

A manufacturer produces 15 different electronic modules using the same standard components.

Customers can choose different configurations.

The company wants to avoid stocking all 15 finished product configurations.

Which strategy would you recommend, and why?

**Question 9.**

A customer requests a specialized industrial electronic system that requires a new product design, engineering validation, and customized materials.

What manufacturing strategy is appropriate?

Which departments must coordinate?

### Part C. Numerical Exercises

**Question 10. MTS Inventory Calculation**

A manufacturer has:

| Item | Quantity |
|---|---:|
| Beginning inventory | 15,000 units |
| Planned production | 80,000 units |
| Actual demand | 85,000 units |

Calculate:

a. Ending inventory.

b. Is there excess inventory or a shortage?

c. What action should Supply Planning consider?

**Question 11. ATO Material Requirements**

A company receives an order for 8,000 electronic modules.

Each module requires:

- 2 capacitors.
- 1 controller.
- 4 resistors.

Calculate the gross material requirements for each component.

Then explain why the planner should check available component inventory before issuing purchase orders.

### Part D. Professional S&OP Analysis

**Question 12.**

An electronic components manufacturer uses MTS for its standard products.

During the S&OP Demand Review, Sales reports that customer demand will increase by 30% next month.

However, Supply Planning reports that:

- Production capacity is already at 95%.
- Raw materials are sufficient for the original forecast.
- Finished goods inventory is relatively low.
- Additional production requires overtime.

As an S&OP Analyst:

1. What potential supply risks do you see?
2. What information would you request from Supply Planning?
3. What alternatives should management evaluate?
4. What financial implications should Finance consider?
5. What would you recommend to management?

### Part E. Critical Thinking

**Question 13.**

Can one manufacturing company use MTS, MTO, ATO, and ETO simultaneously?

Explain your answer using an electronic components manufacturing example.

**Question 14.**

A company wants to reduce finished goods inventory but still maintain fast customer delivery.

Which manufacturing strategy or combination of strategies might help?

Explain the trade-offs involved.

### How to submit your answers

You can answer Questions 1–14 in one response. You may also answer Part A first, then proceed to the other sections.

When evaluating your answers, I'll use three learning levels:

| Level | What I'll evaluate |
|---|---|
| Level 1: Understanding | Do you understand the concepts and differences? |
| Level 2: Technical Application | Can you apply the concepts and perform calculations? |
| Level 3: Professional Analysis | Can you analyze business situations and recommend decisions? |

I'll also identify:

- Correct answers and reasoning.
- Partially correct answers.
- Misconceptions and technical errors.
- Areas that need further explanation.
- How your answers relate to actual S&OP responsibilities.

**Our stopping point:** Module 2 – Topic 2.6: Manufacturing Strategies.

We will not proceed to Topic 2.7 until you confirm that you're ready.

Take your time. Ang importante ay naiintindihan mo kung bakit ginagamit ng isang company ang particular manufacturing strategy, hindi lang kung ano ang ibig sabihin ng acronym nito.
