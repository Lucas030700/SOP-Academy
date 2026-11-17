# Module 5 – Inventory Management
## Topic 5.11: Excess and Obsolete Inventory (E&O)

**Learning objective:** Understand how companies identify, measure, manage, and prevent excess and obsolete inventory, and how these conditions affect operational and financial performance.

---

# 1. Topic Overview

## What are we going to discuss?

Imagine a manufacturing company that produces electronic components.

Six months ago, Sales forecasted that customers would need 100,000 units. Because of that forecast, the company purchased raw materials and produced enough finished goods to support the expected demand.

However, actual customer orders turned out to be only 60,000 units.

Now the company has:
- Raw materials that are no longer needed.
- Work-in-Process (WIP) waiting for production completion.
- Finished goods that customers are not ordering.
- Materials that may no longer be compatible with the latest product revision.

The company has already spent money to acquire or produce these materials, but it cannot use all of them as originally intended.

This is where **Excess and Obsolete Inventory (E&O)** becomes important.

## Why is this topic important?

Inventory is not automatically an asset just because it is physically inside the warehouse.

Inventory should support future business requirements. Kapag mas marami ang inventory kaysa sa kailangan, or wala nang possibility na magamit ito, the company may experience:

1. Tied-up working capital.
2. Higher warehouse and storage costs.
3. Increased risk of material deterioration.
4. Lower inventory efficiency.
5. Financial losses from inventory write-downs or write-offs.
6. Reduced flexibility to respond to changing customer demand.

The objective is not simply to reduce inventory.

**The objective is to maintain the right inventory, in the right quantity, for the right future requirement.**

## Connection to previous topics

This topic brings together several concepts from Module 5.

| Previous topic | Connection to E&O |
|---|---|
| 5.3 Inventory Position | Establishes how much inventory is available or expected. |
| 5.4 Average Daily Usage (ADU) | Helps estimate inventory consumption. |
| 5.5 Days of Supply (DOS) | Measures how long inventory can support demand. |
| 5.8 Inventory Turnover | Helps identify inventory that moves slowly. |
| 5.9 ABC Classification | Prioritizes inventory according to consumption value. |
| 5.10 XYZ Classification | Helps understand demand variability and inventory predictability. |
| 5.11 Excess and Obsolete Inventory | Uses these concepts to identify inventory exposure and determine corrective actions. |

This is the concluding topic of Module 5 because it combines inventory measurement, classification, monitoring, and decision-making into one practical business problem.

---

# 2. Layman's Explanation

Let's start with a simple distinction.

Imagine you own a small grocery store.

You purchase 100 boxes of a particular product because you expect to sell 100 boxes within one month.

But after one month, you have sold only 30 boxes.

You still have 70 boxes.

Are those 70 boxes obsolete?

**Not necessarily.**

You might still sell them next month. However, you currently have more inventory than your expected requirement.

That is an example of **Excess Inventory**.

Now imagine the manufacturer announces that the product has been discontinued, and customers will no longer purchase it.

You still have 70 boxes, but there is no expected demand.

That is potentially **Obsolete Inventory**.

## The fundamental difference

| Excess inventory | Obsolete inventory |
|---|---|
| Too much inventory | No longer usable or needed |
| May still be consumed or sold in the future | No valid future requirement or usable alternative |
| Potentially recoverable | Potential financial loss |

An important distinction:

Excess inventory can eventually become obsolete if the company cannot consume, sell, transfer, or repurpose it before its useful life ends.

However, obsolete inventory is not necessarily caused by having too much inventory. An engineering revision can immediately make existing materials unusable even if their quantity was originally correct.

## 2.1 Slow-moving, Non-moving, and Dead Stock

These terms are related, but they do not mean exactly the same thing.

| Classification | Layman's meaning | Business interpretation |
|---|---|---|
| Slow-moving | Mabagal maubos | Inventory is consumed or sold, but at a low rate. |
| Non-moving | Walang recent movement | No recent consumption, sales, or inventory transactions. |
| Dead stock | Wala nang practical use | Inventory has no realistic recovery or future usage opportunity. |

### A. Slow-moving inventory

Example:

A factory consumes 100 kg of a particular chemical every month.

However, another chemical is now being used more frequently, so consumption drops to 10 kg per month.

The original material is still being consumed, but its movement has slowed down.

This inventory may become excess if its available quantity is much higher than future requirements.

### B. Non-moving inventory

Example:

A raw material has not been issued to production for six months.

Possible reasons:
- Production has been temporarily suspended.
- Customer demand has declined.
- The material is waiting for an upcoming production schedule.
- The product is being evaluated for discontinuation.

Important: No movement does not automatically mean obsolete.

The company must investigate whether future demand or production requirements still exist.

### C. Dead stock

Example:

A particular capacitor model was discontinued.

Its dedicated raw material cannot be used for other models, and there are no remaining customer orders.

The material has no realistic future consumption opportunity.

This is a strong candidate for obsolete inventory.

**Remember:** Slow-moving and non-moving describe inventory movement. Dead stock describes the lack of practical future value or usage.

---

# 3. Technical Explanation

Now let's introduce the professional terminology used in inventory management and S&OP.

## 3.1 Excess Inventory

**Definition:** Excess inventory refers to the quantity of inventory that exceeds the amount required to support valid future demand, production requirements, and the company's approved inventory targets.

In simple terms:

\[
\text{Excess Inventory} =
\text{Available Inventory} - \text{Required Inventory}
\]

However, this is a simplified representation. Actual excess inventory analysis must consider inventory commitments, future demand, safety stock, lead times, and inventory already allocated to production or customers.

Example:

| Description | Quantity |
|---|---:|
| Current usable inventory | 10,000 pcs |
| Future requirement | 6,000 pcs |
| Target safety stock | 1,000 pcs |
| Total requirement | 7,000 pcs |
| Potential excess | 3,000 pcs |

The company has 3,000 pieces beyond its expected requirement.

But that does not automatically mean the company should dispose of them. It should first determine whether those materials can support future production.

## 3.2 Obsolete Inventory

**Definition:** Obsolete inventory refers to inventory that has lost its intended economic or operational usefulness because it is no longer required, cannot be used, cannot be sold, or has become unsuitable for its intended purpose.

Common examples:

- Discontinued products.
- Materials incompatible with new engineering revisions.
- Expired chemicals.
- Damaged raw materials.
- Components that cannot meet updated product specifications.
- Finished goods without a realistic future market.

An important distinction is that inventory can be physically usable but commercially obsolete.

For example, a finished electronic component might still pass its quality specifications, but its customer has permanently discontinued the product.

The inventory is physically functional, but there is no longer a valid customer requirement.

## 3.3 Inventory Status and Lifecycle

Inventory can move through different conditions over time.

### Typical inventory deterioration pathway

1. **Healthy Inventory:** Quantity aligned with future requirements.
2. **Excess Inventory:** Quantity exceeds projected requirements.
3. **Slow-moving / Non-moving:** Inventory is not being consumed as expected.
4. **Potentially Obsolete:** Future usage becomes unlikely or impossible.
5. **Write-down / Write-off / Disposal:** Financial recovery or removal from inventory records.

This is an illustrative progression, not a mandatory sequence. Inventory can become obsolete immediately following a discontinuation or engineering change.

## 3.4 Common Causes of Excess and Obsolete Inventory

Let's examine the common causes from an S&OP perspective.

| Cause | Explanation | Possible consequence |
|---|---|---|
| Overforecasting | Forecast is higher than actual demand. | Excess finished goods and raw materials. |
| Overproduction | Production exceeds actual requirements. | Excess WIP and finished goods. |
| Inaccurate planning | Incorrect demand, inventory, or production data. | Unnecessary procurement and production. |
| MOQ requirements | Supplier requires a minimum purchase quantity. | Excess raw materials. |
| Customer cancellation | Customer cancels an order after materials are purchased. | Unallocated inventory. |
| Engineering changes | Product specification or material changes. | Old revision materials become unusable. |
| Declining demand | Customer consumption decreases. | Slow-moving and excess inventory. |
| Product discontinuation | Product is permanently removed from the portfolio. | Potential obsolete inventory. |

### Important concept: MOQ

**MOQ (Minimum Order Quantity)** is the minimum quantity a supplier allows a company to purchase in a single order.

Example:

- Actual production requirement: 2,000 kg.
- Supplier MOQ: 5,000 kg.
- Required purchase: 5,000 kg.

The company purchases 3,000 kg more than its immediate requirement.

This does not necessarily mean the entire 3,000 kg is excess because it may support subsequent production.

However, if projected future consumption is only 500 kg, the company has a significant inventory exposure.

**S&OP lesson:** Procurement decisions must consider not only immediate requirements but also the entire demand and supply outlook.

---

# 4. Detailed Discussion

## 4.1 Identifying Excess Inventory

This is one of the most important parts of E&O management.

Hindi sapat na tingnan lang ang current inventory quantity.

We need to compare inventory against what the company actually expects to consume.

### Step 1: Determine current inventory position

Recall Topic 5.3.

Inventory position provides visibility into the company's inventory resources and commitments.

A common planning representation is:

\[
IP = OH + OO - BO
\]

Where:

- \(IP\) = Inventory Position (pcs)
- \(OH\) = On-hand inventory (pcs)
- \(OO\) = Open purchase orders (pcs)
- \(BO\) = Backorders or outstanding demand (pcs)

Example:

| Component | Quantity |
|---|---:|
| On-hand inventory | 10,000 |
| Open purchase orders | 3,000 |
| Backorders | 2,000 |
| Inventory position | 11,000 |

\[
IP = 10,000 + 3,000 - 2,000
\]

\[
IP = 11,000 \text{ pcs}
\]

This represents the net inventory position under the simplified convention.

**Important:** Inventory position is not the same as physically available inventory. Open POs are not yet on hand, and actual planning systems may separately account for allocated stock, quality holds, safety stock, and other commitments. Avoid double-counting demand or orders already reflected in the calculation.

### Step 2: Determine future demand

Now let's use Topic 5.4, Average Daily Usage (ADU).

Suppose:

- Average daily demand = 200 pcs.
- Planning horizon = 30 days.

Expected demand:

\[
200 \times 30 = 6,000 \text{ pcs}
\]

The company expects to consume 6,000 pieces over the next 30 days.

However, ADU should be treated carefully.

Historical ADU may not accurately represent future demand when:
- Customer orders are declining.
- A product is being discontinued.
- Demand is seasonal.
- A new product revision is replacing the old revision.

For E&O analysis, **validated future demand is generally more useful than blindly relying on historical consumption.**

### Step 3: Determine target inventory

The company must identify how much inventory it actually needs.

A simplified target inventory calculation:

\[
\text{Target Inventory}
=
\text{Expected Demand}
+
\text{Required Safety Stock}
\]

Example:

| Component | Quantity |
|---|---:|
| Expected demand | 6,000 pcs |
| Safety stock | 1,000 pcs |
| Target inventory | 7,000 pcs |

If inventory position is 11,000 pcs:

\[
\text{Potential Excess}=11,000-7,000
\]

\[
=4,000\text{ pcs}
\]

The company has a potential excess exposure of 4,000 pieces.

### Step 4: Validate future requirements

Before classifying those 4,000 pieces as excess, the planner must investigate:

- Are there confirmed customer orders beyond the 30-day horizon?
- Are there planned production requirements?
- Is there a supplier lead-time constraint?
- Are there future engineering or product changes?
- Is the inventory already reserved for another production order?
- Is the material usable for another model?

The objective is to avoid falsely identifying inventory as excess.

## 4.2 Inventory Coverage and Why High DOS Does Not Automatically Mean Excess

Recall Topic 5.5: Days of Supply.

\[
DOS = \frac{\text{Available Inventory}}{ADU}
\]

Suppose:

- Available inventory = 12,000 pcs.
- ADU = 200 pcs/day.

\[
DOS = \frac{12,000}{200}
=60\text{ days}
\]

The company has 60 days of inventory coverage.

Is this excess?

**We cannot conclude yet.**

Consider two situations:

| Situation | Inventory | ADU | DOS | Interpretation |
|---|---:|---:|---:|---|
| A | 12,000 | 200 | 60 days | May be reasonable if target coverage is 60 days. |
| B | 12,000 | 400 | 30 days | May be insufficient if target coverage is 45 days. |

The same quantity of inventory can represent different inventory conditions depending on demand and planning requirements.

### Why high DOS may be acceptable

Consider a company importing a specialized electronic component.

- Supplier lead time: 60 days.
- Target safety coverage: 15 days.
- Total desired coverage: approximately 75 days, depending on the replenishment policy.

Having 60 days of inventory might actually be insufficient.

Conversely, a material with a 5-day replenishment lead time might not need 60 days of coverage.

**The correct question is not simply, "How high is the DOS?"**

The correct question is:

"How does the current inventory coverage compare with the required inventory coverage, considering future demand and supply lead time?"

## 4.3 Projected Inventory Analysis

A stronger way to identify excess inventory is to examine how inventory will change over time.

The simplified projected inventory formula is:

\[
PI_t = PI_{t-1}+R_t-D_t
\]

Where:

- \(PI_t\) = Projected inventory at the end of period \(t\).
- \(PI_{t-1}\) = Projected inventory at the beginning of the period.
- \(R_t\) = Expected receipts or production completions.
- \(D_t\) = Expected demand or consumption.

Example:

| Week | Beginning Inventory | Receipts | Demand | Ending Inventory |
|---|---:|---:|---:|---:|
| 1 | 10,000 | 2,000 | 3,000 | 9,000 |
| 2 | 9,000 | 2,000 | 3,000 | 8,000 |
| 3 | 8,000 | 3,000 | 2,500 | 8,500 |
| 4 | 8,500 | 2,000 | 2,000 | 8,500 |

Notice that inventory remains at 8,500 pieces at the end of Week 4.

If the approved target inventory is only 5,000 pieces, there may be an excess of 3,500 pieces.

This is particularly useful in S&OP because it shows not only what the company currently has, but also what it expects to have after considering future receipts and demand.

## 4.4 Identifying Obsolete Inventory

Excess inventory requires quantity analysis.

Obsolete inventory requires both quantity analysis and usability validation.

Let's examine the major situations.

**A. Discontinued products**

Example:

A customer permanently discontinues Model A.

The company has:
- 2,000 finished goods.
- 5,000 dedicated raw material components.
- 1,000 WIP units.

If no other customer or production requirement exists, these inventories become potential obsolete stock.

**B. Engineering changes**

Example:

The company changes a component specification from Revision A to Revision B.

Revision A materials may no longer be accepted for new production.

However, not all Revision A materials automatically become obsolete.

Engineering must determine:
- Can Revision A still be used for existing orders?
- Can it be consumed under an approved deviation?
- Can it be converted or reworked?
- Can it be used in another product?
- Is it completely incompatible with Revision B?

**C. Expired materials**

Example:

A chemical has a shelf life of 12 months.

After its expiration date, the material may no longer meet the required specifications.

Depending on company policy and quality approval, it may require disposal or may undergo additional testing.

**D. Damaged or unusable materials**

Examples:
- Moisture-damaged electronic components.
- Contaminated chemicals.
- Damaged packaging.
- Material failing inspection.

These materials may be physically present in inventory records but unavailable for production.

**E. Temporarily inactive inventory**

This is where analysts must be careful.

Suppose a machine is temporarily stopped for maintenance.

The associated materials have no consumption for two months.

That does not automatically make the materials obsolete.

They may still be needed when the machine resumes production.

The analyst must distinguish between:

- Temporary inactivity.
- Low demand.
- No current production schedule.
- Permanent discontinuation.
- Genuine technical incompatibility.

## 4.5 Inventory Aging

Inventory aging identifies how long inventory has remained in stock.

Aging helps determine which materials are at risk of becoming slow-moving or obsolete.

Common aging categories include:

| Age bucket | Example classification |
|---|---|
| 0–30 days | Recent inventory |
| 31–60 days | Relatively recent |
| 61–90 days | Monitor movement |
| 91–180 days | Potential slow-moving |
| 181–365 days | Higher risk |
| More than 365 days | Requires investigation |

These are illustrative categories, not universal industry standards.

Companies establish aging thresholds based on material shelf life, product lifecycle, consumption patterns, and internal inventory policies.

**Important:** Inventory age and inventory movement are not always the same.

A material received 300 days ago might have been partially consumed several times.

Likewise, a material received yesterday may already be obsolete because of an immediate engineering change.

---

# 5. Measurement and Financial Impact

Now let's connect inventory conditions to financial performance.

## 5.1 Excess Inventory Quantity

The company must determine how many units exceed the approved inventory requirement.

\[
\text{Excess Quantity}
=
\max(0,\text{Inventory Position}-\text{Target Inventory})
\]

This is a simplified planning calculation. It assumes inventory position and target inventory are measured on a consistent basis.

Example:

- Inventory position = 15,000 pcs.
- Target inventory = 9,000 pcs.

\[
15,000-9,000=6,000\text{ pcs}
\]

Potential excess = 6,000 pieces.

## 5.2 Excess Inventory Value

Once the excess quantity is identified, we can determine its financial value.

\[
\text{Excess Inventory Value}
=
\text{Excess Quantity}\times\text{Unit Cost}
\]

Example:

- Excess quantity = 6,000 pcs.
- Unit cost = ₱25.

\[
6,000\times25
=
₱150,000
\]

The company has ₱150,000 worth of potential excess inventory.

Important: This is the inventory's cost value, not necessarily the amount of financial loss.

The company may still consume or sell the inventory.

## 5.3 Inventory Aging Value

Suppose the company has the following inventory:

| Age bucket | Quantity | Unit cost | Inventory value |
|---|---:|---:|---:|
| 0–30 days | 5,000 | ₱20 | ₱100,000 |
| 31–90 days | 3,000 | ₱20 | ₱60,000 |
| 91–180 days | 2,000 | ₱20 | ₱40,000 |
| 181–365 days | 1,000 | ₱20 | ₱20,000 |
| Over 365 days | 500 | ₱20 | ₱10,000 |
| **Total** | **11,500** | | **₱230,000** |

The company has ₱30,000 worth of inventory that is more than 365 days old.

This does not automatically mean the ₱30,000 must be written off.

It means the company should investigate the inventory's movement, demand, usability, and remaining shelf life.

## 5.4 Slow-Moving Inventory Percentage

A company may want to know what percentage of its inventory has slow-moving characteristics.

\[
\text{Slow-Moving Inventory \%}
=
\frac{\text{Slow-Moving Inventory Value}}
{\text{Total Inventory Value}}
\times100
\]

Example:

- Slow-moving inventory value = ₱120,000.
- Total inventory value = ₱800,000.

\[
=\frac{120,000}{800,000}\times100
\]

\[
=15\%
\]

Interpretation:

15% of the company's total inventory value is classified as slow-moving.

This KPI helps management monitor inventory quality and potential exposure.

The company must define what qualifies as slow-moving. For example, it could be based on no consumption within 90 days, low consumption relative to available stock, or an approved inventory policy.

## 5.5 Obsolete Inventory Value

\[
\text{Obsolete Inventory Value}
=
\text{Obsolete Quantity}\times\text{Unit Cost}
\]

Example:

- Obsolete quantity = 2,000 pcs.
- Unit cost = ₱50.

\[
2,000\times50=₱100,000
\]

The company has ₱100,000 in obsolete inventory at recorded cost.

## 5.6 Inventory Write-down and Write-off

These are important financial accounting concepts.

### Inventory write-down

A write-down happens when the recorded inventory value must be reduced because its recoverable value has fallen.

For example:

- Original inventory cost = ₱100,000.
- Estimated net realizable value (NRV) = ₱40,000.

\[
\text{Write-down}=100,000-40,000
\]

\[
=₱60,000
\]

The inventory is still worth something, but its recorded value must be reduced.

Under IAS 2, inventories are generally measured at the lower of cost and net realizable value.

NRV is the estimated selling price in the ordinary course of business, less estimated completion costs and costs necessary to make the sale.

### Inventory write-off

A write-off happens when inventory is removed from the accounting records because it has no recoverable value or is otherwise no longer recognized as an asset under the applicable accounting policy.

Example:

- Obsolete material cost = ₱80,000.
- Recoverable value = ₱0.

Potential write-off = ₱80,000.

### Difference

| Write-down | Write-off |
|---|---|
| Reduces inventory's recorded value. | Removes the inventory's recognized value. |
| Some recoverable value remains. | No recognized recoverable value remains. |
| Example: ₱100,000 reduced to ₱40,000. | Example: ₱80,000 reduced to ₱0. |

The actual accounting treatment and timing should be determined by Finance under the company's applicable accounting standards and policies.

## 5.7 Working Capital Impact

Inventory consumes cash.

When a company purchases raw materials, cash is converted into inventory.

That inventory remains tied up until it is consumed, sold, and ultimately converted back into cash through customer collection.

Excess inventory increases the amount of working capital tied up in operations.

Example:

A company purchases ₱5 million worth of additional raw materials that it does not need for the next six months.

That ₱5 million could potentially have been used for:
- Supplier payments.
- Equipment investment.
- Operating expenses.
- Debt reduction.
- Other production requirements.

The company has not necessarily lost ₱5 million, but it has reduced its financial flexibility.

## 5.8 Other Financial Consequences

| Financial impact | Explanation |
|---|---|
| Storage costs | More warehouse space, utilities, and handling. |
| Carrying costs | Cost of holding inventory over time. |
| Insurance | Higher value of stored assets may increase insurance costs. |
| Deterioration | Materials may expire, corrode, or degrade. |
| Write-downs | Inventory value may need to be reduced. |
| Disposal costs | Company may need to pay for disposal or treatment. |
| Opportunity cost | Cash remains tied up instead of being used elsewhere. |

**Business insight:** Excess inventory is not just a warehouse problem. It is also a cash-flow, profitability, and business-planning problem.

---

# 6. Formulas and Calculations

Let's consolidate the important formulas.

| Measurement | Formula |
|---|---|
| Excess quantity | \(\max(0,IP-Target)\) |
| Excess value | Excess Quantity × Unit Cost |
| Inventory aging | Analysis date − Inventory receipt date |
| Inventory coverage | Available usable inventory ÷ ADU |
| Slow-moving inventory % | Slow-moving inventory value ÷ Total inventory value × 100 |
| Obsolete inventory value | Obsolete quantity × Unit cost |
| Potential inventory reduction | Current inventory − Planned ending inventory |

Now let's discuss each formula in more detail.

## 6.1 Excess Inventory Quantity

\[
EI_Q=\max(0,IP-TI)
\]

Where:

- \(EI_Q\) = Excess inventory quantity (pcs).
- \(IP\) = Inventory position (pcs).
- \(TI\) = Target inventory (pcs).

Example:

- Inventory position = 20,000 pcs.
- Target inventory = 12,000 pcs.

\[
EI_Q=\max(0,20,000-12,000)
\]

\[
=8,000\text{ pcs}
\]

## 6.2 Excess Inventory Value

\[
EI_V=EI_Q\times UC
\]

Where:

- \(EI_V\) = Excess inventory value (₱).
- \(EI_Q\) = Excess quantity (pcs).
- \(UC\) = Unit cost (₱/pc).

Example:

\[
8,000\times ₱30=₱240,000
\]

Potential excess value = ₱240,000.

## 6.3 Inventory Aging

\[
\text{Inventory Age}=
\text{Analysis Date}-\text{Receipt Date}
\]

Example:

- Receipt date: January 1, 2026.
- Analysis date: November 16, 2026.

Inventory age is 319 days.

For manufacturing materials, a company may also use:
- Last consumption date.
- Last issue date.
- Manufacturing date.
- Expiration date.

These dates answer different questions.

For example, receipt date measures how long the company has held the material, while last consumption date helps measure how long it has been inactive.

## 6.4 Inventory Coverage

\[
\text{Coverage}=\frac{\text{Available Usable Inventory}}{ADU}
\]

Where:

- Available usable inventory = usable quantity in pcs.
- ADU = average daily usage in pcs/day.

Example:

\[
\frac{9,000}{300}=30\text{ days}
\]

The inventory can support approximately 30 days of consumption.

For future-demand planning, a time-phased demand calculation is more appropriate when demand changes significantly over time.

## 6.5 Slow-Moving Inventory Percentage

\[
SM\%=\frac{SMV}{TIV}\times100
\]

Where:

- \(SMV\) = Slow-moving inventory value (₱).
- \(TIV\) = Total inventory value (₱).

Example:

\[
\frac{₱250,000}{₱2,000,000}\times100
=12.5\%
\]

## 6.6 Obsolete Inventory Value

\[
OIV=OQ\times UC
\]

Where:

- \(OIV\) = Obsolete inventory value (₱).
- \(OQ\) = Obsolete quantity (pcs).
- \(UC\) = Unit cost (₱/pc).

Example:

\[
3,000\times ₱40=₱120,000
\]

## 6.7 Potential Inventory Reduction

\[
IR=CI-PI
\]

Where:

- \(IR\) = Inventory reduction (pcs).
- \(CI\) = Current inventory (pcs).
- \(PI\) = Planned ending inventory (pcs).

Example:

- Current inventory = 15,000 pcs.
- Planned ending inventory = 9,000 pcs.

\[
IR=15,000-9,000
\]

\[
=6,000\text{ pcs}
\]

Potential inventory reduction = 6,000 pieces.

This is a planned reduction, not necessarily a guaranteed disposal or cash recovery.

### Additional metric: Inventory reduction value

\[
IR_V=IR\times UC
\]

If unit cost is ₱50:

\[
6,000\times ₱50=₱300,000
\]

The company aims to reduce inventory exposure by ₱300,000 at cost.

### Critical calculation limitations

Before using these formulas in actual business reporting, remember:

1. Use valid and updated inventory records.
2. Exclude unusable or quality-held materials from available usable inventory.
3. Avoid counting open purchase orders as physical inventory.
4. Use future demand that reflects current customer requirements.
5. Consider safety stock and replenishment lead times.
6. Match inventory quantities to the correct material number and revision.
7. Use consistent units of measurement.
8. Confirm unit costs with Finance.
9. Avoid counting the same inventory as both excess and obsolete in separate financial totals without reconciliation.

A formula is only as reliable as the data and assumptions behind it.

---

# 7. Practical Manufacturing Application

Let's apply everything to a realistic manufacturing scenario.

Imagine you are an S&OP Analyst in an electronics manufacturing company producing MLCC components.

The company manufactures three product families:

- Model A: Standard capacitor.
- Model B: High-capacitance capacitor.
- Model C: Specialized capacitor for a particular customer.

The company experiences three major changes:

1. Customer demand for Model A decreases.
2. Production for Model B increases.
3. Model C undergoes an engineering revision, making some old materials incompatible with the new specification.

The inventory team discovers that the company is holding excess raw materials, WIP, and finished goods.

## 7.1 Current Inventory Situation

*Illustrative manufacturing data as of November 16, 2026. All amounts and planning assumptions are hypothetical.*

| Inventory | Current quantity | Unit cost | Inventory value |
|---|---:|---:|---:|
| Raw Material A | 10,000 kg | ₱100 | ₱1,000,000 |
| Raw Material B | 5,000 kg | ₱200 | ₱1,000,000 |
| Raw Material C, Rev. A | 2,000 kg | ₱150 | ₱300,000 |
| WIP Model A | 8,000 pcs | ₱12 | ₱96,000 |
| WIP Model B | 4,000 pcs | ₱18 | ₱72,000 |
| Finished Goods A | 15,000 pcs | ₱20 | ₱300,000 |
| Finished Goods B | 8,000 pcs | ₱30 | ₱240,000 |
| Finished Goods C, Rev. A | 3,000 pcs | ₱50 | ₱150,000 |
| **Total** | | | **₱3,158,000** |

The total inventory value is ₱3,158,000.

But we still don't know whether all of this inventory is healthy, excess, or obsolete.

We need to compare each item against its future requirements.

## 7.2 Scenario A: Declining Customer Demand for Model A

The company originally expected demand of 10,000 units per month.

However, the latest customer forecast indicates that demand has decreased to 4,000 units per month.

The company currently has:

- Finished goods = 15,000 pcs.
- WIP = 8,000 pcs.
- Raw Material A = 10,000 kg.

For simplicity, assume:
- 1 kg of Raw Material A supports 1 finished unit.
- Existing WIP will produce 8,000 finished units.
- No additional production is required beyond the projected demand.
- Target finished-goods safety stock = 2,000 pcs.
- There are no other confirmed customer requirements beyond the forecast horizon.

### Step 1: Calculate finished-goods requirement

Demand for the next month:

\[
4,000\text{ pcs}
\]

Target safety stock:

\[
2,000\text{ pcs}
\]

Total target inventory:

\[
4,000+2,000=6,000\text{ pcs}
\]

### Step 2: Calculate potential excess finished goods

\[
15,000-6,000=9,000\text{ pcs}
\]

Potential excess finished goods = 9,000 pcs.

### Step 3: Investigate WIP

The company also has 8,000 WIP units.

These units may become additional finished goods.

If all 8,000 units are completed without considering the declining demand, the company could create even more excess inventory.

Therefore, Production and Planning must evaluate whether:
- Production can be reduced.
- Existing WIP can be rescheduled.
- WIP can be completed and used for confirmed orders.
- Production can be stopped without creating quality or operational issues.

### Business recommendation

Do not automatically complete all WIP.

First, align the production plan with the updated demand forecast.

This is a good example of why demand and supply must be reviewed together.

## 7.3 Scenario B: Increased Demand for Model B

Now let's examine Model B.

The company expects demand to increase from 5,000 to 8,000 units per month.

Current inventory:
- Finished goods = 8,000 pcs.
- WIP = 4,000 pcs.
- Raw Material B = 5,000 kg.

Assume:
- 1 kg supports 1 finished unit.
- The 4,000 WIP units are scheduled to be completed.
- Demand for the next month is 8,000 units.
- Required safety stock is 1,000 units.

Total requirement:

\[
8,000+1,000=9,000\text{ pcs}
\]

Potential supply after WIP completion:

\[
8,000+4,000=12,000\text{ pcs}
\]

Potential excess:

\[
12,000-9,000=3,000\text{ pcs}
\]

Even though Model B demand is increasing, the company may still have excess inventory.

This demonstrates an important principle:

**Increasing demand does not automatically eliminate excess inventory.**

The company must consider existing finished goods, WIP, scheduled production, and future receipts.

Raw Material B also needs to be assessed separately against future production requirements and its replenishment lead time.

## 7.4 Scenario C: Engineering Revision for Model C

Now the most interesting case.

Model C undergoes an engineering change from Revision A to Revision B.

Engineering confirms that Raw Material C, Revision A, cannot be used in Revision B.

The customer has also confirmed that no further Revision A orders will be placed.

Current inventory:

| Inventory | Quantity | Unit cost | Value |
|---|---:|---:|---:|
| Raw Material C, Rev. A | 2,000 kg | ₱150 | ₱300,000 |
| WIP Model C, Rev. A | 0 pcs | ₱50 | ₱0 |
| Finished Goods C, Rev. A | 3,000 pcs | ₱50 | ₱150,000 |
| **Total** | | | **₱450,000** |

Engineering confirms:
- No approved alternative usage.
- No conversion process.
- No remaining customer demand.
- No possibility of using the old material in Revision B.

The entire ₱450,000 is now a potential obsolete inventory exposure.

Finance must determine the appropriate valuation and write-down or write-off treatment.

## 7.5 Consolidated E&O Analysis

Let's summarize the three situations.

| Product | Finding | Potential exposure |
|---|---|---:|
| Model A | Excess finished goods | ₱180,000 |
| Model B | Excess finished goods | ₱90,000 |
| Model C | Obsolete inventory | ₱450,000 |
| **Total identified exposure** | | **₱720,000** |

The calculations:

Model A:

\[
9,000\times ₱20=₱180,000
\]

Model B:

\[
3,000\times ₱30=₱90,000
\]

Model C:

\[
₱300,000+₱150,000=₱450,000
\]

Total:

\[
180,000+90,000+450,000
=₱720,000
\]

### Illustrative inventory exposure

**₱720,000** identified potential excess and obsolete inventory value.

- Excess: ₱270,000 (37.5%).
- Obsolete: ₱450,000 (62.5%).

Important: This is an identified exposure under the scenario assumptions, not automatically the amount of the accounting loss.

The excess inventory may still be recovered through future consumption or other actions. The obsolete inventory may have salvage value, and its actual write-down depends on the recoverable value determined by Finance.

## 7.6 What Should the Company Do?

Let's develop an action plan.

| Inventory | Recommended action | Responsible team |
|---|---|---|
| Model A finished goods | Reduce future production and prioritize existing stock for orders. | Sales and Operations |
| Model A WIP | Review production completion and rescheduling. | Production Planning |
| Model A raw material | Reduce procurement and validate future consumption. | Procurement and Planning |
| Model B finished goods | Align inventory with increasing demand and avoid unnecessary production. | Sales and Planning |
| Model B WIP | Complete against approved production requirements. | Operations |
| Model C Rev. A raw material | Investigate supplier return, alternative use, or disposal. | Engineering and Procurement |
| Model C Rev. A finished goods | Check remaining customer demand, transfer opportunities, or liquidation. | Sales and Finance |

Notice that each inventory condition requires a different response.

That is why E&O management is not simply a matter of identifying old inventory and disposing of it.

---

# 8. Inventory Reduction and Prevention Strategies

Once excess and obsolete inventory have been identified, the company needs two approaches:

1. Recover or reduce existing inventory exposure.
2. Prevent the same problem from happening again.

## 8.1 Demand and Supply Plan Alignment

This is one of the most important S&OP activities.

Suppose Sales reduces the forecast from 10,000 to 4,000 units.

The information must be communicated to:
- Production Planning.
- Procurement.
- Warehouse.
- Finance.
- Inventory Control.

The company must update the supply plan accordingly.

If Sales updates the forecast but Procurement continues ordering based on the old forecast, excess inventory will continue to accumulate.

**Key lesson:** Demand changes must trigger corresponding supply-plan adjustments.

## 8.2 Production Adjustments

Possible actions:

- Reduce production quantities.
- Reschedule production orders.
- Delay non-urgent production.
- Prioritize existing inventory.
- Avoid producing additional finished goods when sufficient stocks exist.

For example:

If the company has 15,000 finished goods and only 6,000 units are required, producing another 5,000 units would worsen the inventory position.

Unless there are valid additional requirements, production should be reconsidered.

## 8.3 Procurement Adjustments

Procurement can help reduce exposure by:

- Cancelling unnecessary purchase orders.
- Reducing order quantities.
- Negotiating smaller delivery batches.
- Rescheduling supplier deliveries.
- Requesting supplier returns.
- Negotiating MOQ flexibility.

Example:

A supplier has an open purchase order of 10,000 kg.

However, updated production requirements show that only 4,000 kg will be needed.

If the supplier has not yet shipped the materials, the company may negotiate a cancellation or delivery reduction.

This prevents additional inventory from entering the warehouse.

## 8.4 Material Substitution and Alternative Usage

Sometimes a material is excess for one product but can still be used for another.

Example:

A company has 2,000 kg of an additive that is no longer required for Product A.

Engineering confirms that it is compatible with Product B.

The material may be transferred to Product B's production requirements.

However, substitution must be approved by:
- Engineering.
- Quality.
- Production.
- Relevant product or customer authorities, where required.

Never assume materials are interchangeable simply because they have similar descriptions.

## 8.5 Inventory Transfers

Excess inventory at one plant may be required at another.

Example:

| Plant | Inventory | Requirement |
|---|---:|---:|
| Plant A | 10,000 pcs | 3,000 pcs |
| Plant B | 2,000 pcs | 8,000 pcs |

Plant A has 7,000 pcs above its requirement.

Plant B has a shortage of 6,000 pcs.

A transfer of 6,000 pcs may reduce excess at Plant A while preventing additional procurement at Plant B.

This is an excellent example of inventory optimization across a supply network.

## 8.6 Liquidation and Alternative Sales

If finished goods are no longer required by the original customer, the company may investigate:

- Other customers.
- Secondary markets.
- Approved discount sales.
- Product bundles.
- Alternative distribution channels.

However, technical specifications, contractual restrictions, and quality requirements must still be respected.

## 8.7 Engineering and Product Lifecycle Coordination

Engineering changes can create major inventory exposure.

Therefore, inventory must be considered before implementing a product revision.

A proper engineering change process should evaluate:

1. Existing raw materials.
2. Existing WIP.
3. Finished goods.
4. Open purchase orders.
5. Supplier commitments.
6. Remaining demand for the old revision.
7. Possible material conversion or substitution.

This is sometimes referred to as **ECO (Engineering Change Order) inventory impact assessment**.

An ECO should not be treated as an engineering-only activity.

It can have substantial operational and financial consequences.

## 8.8 Disposal or Write-off

When inventory cannot be recovered, the company may need to dispose of it.

Possible reasons:
- Expired materials.
- Irreparably damaged materials.
- Discontinued materials without alternative usage.
- Finished goods with no realistic market.

Before disposal, the company should:
- Confirm the material status.
- Obtain required approvals.
- Determine recoverable or salvage value.
- Coordinate accounting treatment with Finance.
- Follow environmental and regulatory disposal requirements.

## 8.9 Prevention Strategies Summary

| Prevention area | Recommended practice |
|---|---|
| Forecasting | Regularly review forecast accuracy and bias. |
| Production | Align production quantities with actual demand. |
| Procurement | Evaluate MOQ, lead times, and open POs. |
| Inventory | Monitor ADU, DOS, turnover, and aging. |
| Engineering | Assess inventory impact before product revisions. |
| Sales | Communicate customer cancellations and demand changes. |
| Finance | Monitor inventory exposure and financial provisions. |
| S&OP | Integrate demand, supply, and financial reviews. |

---

# 9. Excess and Obsolete Inventory in S&OP Decisions

Now let's move from inventory calculations to actual business decision-making.

This is where your role as an S&OP Analyst becomes particularly important.

You are not simply reporting that inventory is high.

You are helping management understand:

- Why inventory is high.
- How much inventory is at risk.
- Whether it can still be recovered.
- What actions are available.
- What financial consequences each action creates.

## 9.1 Role of the S&OP Analyst

A typical E&O analysis workflow looks like this:

1. **Collect inventory data:** Obtain on-hand inventory, WIP, open POs, material status, inventory costs, and aging.
2. **Validate future requirements:** Review forecasts, confirmed customer orders, production plans, and material consumption.
3. **Identify inventory exposure:** Determine excess, slow-moving, non-moving, and obsolete inventory.
4. **Quantify financial impact:** Calculate exposure value, aging value, potential write-downs, and working capital impact.
5. **Coordinate corrective actions:** Work with Sales, Operations, Procurement, Engineering, Warehouse, and Finance.
6. **Present management recommendations:** Show the problem, financial exposure, recovery opportunities, action owners, and deadlines.
7. **Monitor action effectiveness:** Track whether inventory is being consumed, transferred, returned, liquidated, or written off.

## 9.2 Cross-Functional Responsibilities

E&O management requires several departments because no single department controls the entire inventory lifecycle.

| Department | Primary responsibility |
|---|---|
| Sales | Validate customer demand, cancellations, and remaining orders. |
| Operations | Review production plans, WIP, and material consumption. |
| Procurement | Review supplier commitments, MOQ, returns, and cancellations. |
| Engineering | Validate material compatibility and engineering changes. |
| Warehouse | Verify physical inventory, aging, and material condition. |
| Finance | Validate inventory cost, valuation, and financial treatment. |
| S&OP | Consolidate information and facilitate business decisions. |

### Example of a management discussion

Imagine you are presenting the following:

"The company currently has ₱2 million in potential excess inventory and ₱500,000 in obsolete inventory."

A weak presentation would stop there.

A stronger S&OP presentation would explain:

- ₱800,000 can be consumed through the next three months.
- ₱400,000 can potentially be transferred to another plant.
- ₱300,000 may be returned to suppliers.
- ₱500,000 requires engineering validation.
- ₱500,000 is confirmed obsolete and requires financial evaluation.

This gives management actionable information rather than simply reporting a large number.

## 9.3 Recovery Versus Write-off Decisions

Management must determine whether recovering inventory is financially and operationally worthwhile.

Consider this example:

The company has ₱100,000 worth of excess raw material.

There are two possible options.

| Option | Financial impact |
|---|---:|
| Return material to supplier | Recover ₱70,000, with ₱5,000 return costs |
| Keep material and use it later | Estimated holding cost ₱15,000, with risk of no future usage |

Option 1 provides:

\[
70,000-5,000=₱65,000
\]

Potential net recovery = ₱65,000.

Option 2 may be better if future consumption is highly certain and the cost of holding inventory is acceptable.

However, if future consumption is uncertain, the company may be better off recovering ₱65,000 now.

Management should compare:

- Expected recovery value.
- Future consumption probability.
- Storage and carrying costs.
- Expiration or deterioration risk.
- Return and transportation costs.
- Disposal costs.
- Potential customer or production impact.

**Important:** Inventory reduction is not always the same as financial recovery. The best decision minimizes total business loss while protecting customer service and operational continuity.

## 9.4 E&O as a Management KPI

Companies may monitor:

| KPI | What it tells management |
|---|---|
| Total E&O value | Total financial exposure. |
| Excess inventory value | Inventory above approved requirements. |
| Obsolete inventory value | Inventory with no valid future usage or recovery. |
| Slow-moving inventory % | Portion of inventory with low movement. |
| Inventory aging | How long materials have remained in stock. |
| E&O recovery rate | Portion of identified exposure recovered or mitigated. |
| E&O write-off value | Financial value written off during the reporting period. |

One possible recovery metric:

\[
\text{Recovery Rate}
=
\frac{\text{Recovered Inventory Value}}
{\text{Identified E\&O Value}}\times100
\]

Example:

- Identified E&O = ₱1,000,000.
- Recovered value = ₱600,000.

\[
=\frac{600,000}{1,000,000}\times100
\]

\[
=60\%
\]

The company recovered or mitigated 60% of its identified E&O exposure, based on the defined recovery measure.

The company must establish a consistent definition of recovery, especially when consumption, transfers, supplier returns, and liquidation are combined.

---

# 10. Module 5 Integration: How All Inventory Concepts Work Together

This is the final and most important connection.

Throughout Module 5, we have learned several inventory management concepts.

Each one answers a different business question.

## The complete inventory management framework

1. **Inventory Position (5.3):** How much inventory do we have, including relevant incoming supply and outstanding commitments?
2. **Average Daily Usage (5.4):** How quickly are we consuming inventory?
3. **Days of Supply (5.5):** How long can the inventory support consumption?
4. **Inventory Turnover (5.8):** How efficiently is inventory being converted into sales or consumption?
5. **ABC Classification (5.9):** Which inventory items deserve priority based on annual consumption value?
6. **XYZ Classification (5.10):** Which materials have stable or unpredictable demand?
7. **Excess and Obsolete Inventory (5.11):** Which inventory items are beyond requirements, at risk, or no longer useful, and what should the company do?

### Let's combine them in one manufacturing example.

A company produces electronic components.

Its inventory data shows:

| Metric | Result |
|---|---:|
| Inventory Position | 50,000 pcs |
| ADU | 1,000 pcs/day |
| DOS | 50 days |
| Target coverage | 30 days |
| Inventory Turnover | 4 times/year |
| ABC classification | A |
| XYZ classification | Z |

What does this tell us?

**Step 1: Inventory Position**

The company has a net inventory position of 50,000 pieces.

**Step 2: ADU**

It consumes approximately 1,000 pieces per day.

**Step 3: DOS**

\[
DOS=\frac{50,000}{1,000}=50\text{ days}
\]

**Step 4: Compare with target coverage**

Target coverage is 30 days.

Simplified target quantity:

\[
1,000\times30=30,000\text{ pcs}
\]

Potential excess:

\[
50,000-30,000=20,000\text{ pcs}
\]

**Step 5: Inventory Turnover**

The turnover of 4 times per year indicates that the inventory is being replenished and consumed at a relatively slower rate than an item with higher turnover, but the correct assessment depends on the product and industry.

**Step 6: ABC Classification**

The material is classified as A, so it represents a high-priority inventory item based on annual consumption value.

**Step 7: XYZ Classification**

The material is classified as Z, indicating highly variable or difficult-to-predict demand under the company's classification rules.

### What is the S&OP recommendation?

The company should not immediately reduce the inventory by 20,000 pieces.

It should investigate:

1. Why the demand is highly variable.
2. Whether the latest forecast reflects confirmed customer requirements.
3. Whether the target coverage is appropriate.
4. Whether there are upcoming demand peaks.
5. Whether the material has long replenishment lead times.
6. Whether there are existing purchase orders that should be adjusted.
7. Whether the excess inventory can be used for other production requirements.

Because this is an A-Z item, the financial exposure and demand uncertainty both deserve close attention.

This is how inventory management concepts become useful in real S&OP decisions.

## 10.1 The Bigger Picture: Inventory Management Is About Balance

The company must balance three competing objectives:

- **Availability:** Enough inventory to serve demand.
- **Efficiency:** Avoid unnecessary capital investment.
- **Resilience:** Protect against supply and demand uncertainty.

Too little inventory can cause production interruptions and missed customer deliveries.

Too much inventory can increase carrying costs and create E&O exposure.

The goal of inventory management is to find the appropriate balance based on demand, supply constraints, risk, and financial objectives.

---

# 11. Key Takeaways

Before we proceed to the knowledge check, make sure you understand these concepts.

1. **Excess inventory** means inventory beyond valid future requirements and approved inventory targets.
2. **Obsolete inventory** means inventory that no longer has a valid operational or commercial use, or has lost its recoverable value.
3. **Slow-moving, non-moving, and dead stock** describe different inventory conditions. They should not automatically be classified as obsolete.
4. **High DOS does not automatically mean excess inventory.** Always compare it against future demand, replenishment lead time, and target coverage.
5. **Future demand is critical.** Historical ADU alone may not be sufficient when demand is changing.
6. **Inventory aging is a warning indicator, not proof of obsolescence.**
7. **Inventory value is not necessarily financial loss.** Excess inventory may still be consumed, transferred, returned, or sold.
8. **Engineering changes and product discontinuations** can immediately create E&O exposure.
9. **S&OP provides the cross-functional process** for identifying, evaluating, recovering, and preventing excess and obsolete inventory.
10. **The ultimate objective is not zero inventory.** It is the right inventory level that supports customer service, operational continuity, and financial performance.

---

# 12. Knowledge Check and Exercises

## Module 5 Final Assessment

Now let's test whether you can apply the concepts, not just memorize the definitions.

We'll use three progressive levels.

- **Level 1 – Understanding:** Identify and explain concepts.
- **Level 2 – Technical Application:** Perform calculations and interpret inventory data.
- **Level 3 – Professional Analysis:** Evaluate business situations and recommend actions.

Don't worry about getting everything correct. Mas importante na makita natin kung paano ka mag-isip as an S&OP Analyst.

## Exercise 1: Conceptual Understanding

Answer in your own words.

**1.** What is the main difference between excess inventory and obsolete inventory?

**2.** A material has not been consumed for 120 days. Can you immediately classify it as obsolete? Explain.

**3.** Why does high DOS not automatically mean excess inventory?

**4.** What is the difference between inventory aging and slow-moving inventory?

**5.** How can an engineering change create obsolete inventory even when the material is physically usable?

## Exercise 2: Numerical Application

A manufacturing company provides the following inventory information:

| Parameter | Value |
|---|---:|
| On-hand inventory | 20,000 pcs |
| Open purchase orders | 5,000 pcs |
| Backorders | 3,000 pcs |
| ADU | 400 pcs/day |
| Target coverage | 30 days |
| Safety stock | Included in target coverage |
| Unit cost | ₱25/pc |

Calculate the following:

**6. Inventory Position**

Determine the company's inventory position.

**7. Target Inventory**

Calculate the target inventory using the ADU and target coverage.

**8. Potential Excess Inventory**

Calculate the potential excess quantity and explain your assumptions.

**9. Excess Inventory Value**

Determine the potential excess inventory value.

**10. Inventory Coverage**

Calculate the inventory coverage using physical on-hand inventory, excluding open purchase orders and backorders.

## Exercise 3: Business Scenario

You are an S&OP Analyst.

Your company is experiencing the following:

- Customer demand decreased by 40%.
- Production is still following the previous forecast.
- Procurement has already released purchase orders based on the old demand.
- Finished goods are accumulating.
- Some raw materials are approaching expiration.
- Engineering is introducing a new product revision.

Answer the following:

**11.** Identify at least five potential causes of excess or obsolete inventory.

**12.** Which departments should you coordinate with, and what information would you request from each?

**13.** What immediate actions would you recommend to prevent additional inventory accumulation?

**14.** How would you distinguish between materials that are still recoverable and materials that are already obsolete?

## Exercise 4: Professional Analysis

A company reports the following:

| Inventory category | Value |
|---|---:|
| Total inventory | ₱10,000,000 |
| Slow-moving inventory | ₱2,000,000 |
| Confirmed obsolete inventory | ₱800,000 |
| Recoverable excess inventory | ₱1,200,000 |

**15.** Calculate the slow-moving inventory percentage.

**16.** Calculate the percentage of confirmed obsolete inventory relative to total inventory.

**17.** Management wants to reduce inventory by ₱1 million. Would you recommend immediately writing off ₱1 million worth of inventory? Why or why not?

**18.** Develop a short recommendation to management explaining how the company should address the inventory exposure.

## How to submit your answers

You can answer all 18 questions at once or divide them into exercises.

When evaluating your answers, I'll assess:
- Conceptual understanding.
- Formula selection and calculation accuracy.
- Interpretation of results.
- Practical business judgment.
- Quality of your S&OP recommendations.

I'll explain incorrect answers and help you improve your reasoning before we proceed.

---

# Module 5 Completion

## Module 5: Inventory Management

You have reached the concluding lesson of the inventory management module.

**Your learning progression**
- Inventory fundamentals and inventory position
- Average Daily Usage and Days of Supply
- Safety stock and replenishment concepts
- Inventory turnover
- ABC and XYZ classification
- Excess and obsolete inventory

**Next milestone:** Module 6

We will only begin Module 6 after you confirm.

**Instructor's closing thought:**

One of the most important skills of an S&OP Analyst is recognizing that inventory is not simply a number in an ERP report.

Every inventory quantity represents a business decision that has already been made, whether it was a purchasing decision, production decision, forecasting assumption, or customer commitment.

Your job is to understand whether those decisions still make sense based on the company's current and future requirements.

That is the difference between simply monitoring inventory and actually managing inventory through S&OP.
