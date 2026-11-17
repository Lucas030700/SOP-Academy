# Module 5 – Inventory Management
## Topic 5.9: ABC Classification

**Learning objective:** Understand how companies classify inventory according to annual consumption value, determine which materials deserve greater management attention, and use ABC Classification to improve inventory control and S&OP decision-making.

# 1. Topic Overview

## What is ABC Classification?

Imagine that a manufacturing company has 1,000 different raw materials and components in its inventory.

Should the inventory team monitor all 1,000 materials with the same frequency and level of attention?

Not necessarily.

Some materials consume millions of pesos annually, while others consume only a few thousand pesos. Some materials have significant financial impact, while others have relatively small financial impact.

This is where **ABC Classification** becomes useful.

ABC Classification is an inventory management method that groups inventory items into three categories according to their annual consumption value:

- **Class A:** High-value inventory items.
- **Class B:** Medium-value inventory items.
- **Class C:** Low-value inventory items.

The main purpose is to help companies determine where to focus their inventory management resources.

## Why is this important?

Inventory management requires balancing two things:

1. Maintaining sufficient inventory to support production.
2. Avoiding excessive inventory that ties up company capital.

Hindi practical na pare-pareho ang attention na ibibigay sa lahat ng materials.

For example:

- A material worth ₱5 million in annual consumption deserves close financial monitoring.
- A material worth ₱5,000 annually may not require the same level of management attention.

Both materials are important, but their financial impact is different.

## Connection to Module 5

| Previous / Current Topic | Relationship |
|---|---|
| 5.7 Reorder Point | Determines when to replenish inventory. |
| 5.8 Inventory Turnover | Measures how efficiently inventory is being used. |
| 5.9 ABC Classification | Determines which inventory items deserve greater attention. |
| 5.10 XYZ Classification | Classifies inventory according to demand variability. |

Notice the difference:

- Inventory Turnover asks: **How efficiently are we using inventory?**
- ABC Classification asks: **Which inventory items have the greatest annual consumption value?**
- XYZ Classification asks: **How predictable or variable is the demand?**

These concepts complement one another.

# 2. Layman's Explanation

## 2.1 Understanding ABC Classification Through a Manufacturing Example

Let's imagine that you are managing the raw material inventory of an MLCC manufacturing company.

You have the following materials:

| Material | Annual Consumption Value |
|---|---:|
| BT Powder | ₱10,000,000 |
| PET Film | ₱4,000,000 |
| Binder | ₱2,000,000 |
| Ethanol | ₱500,000 |
| Packaging Materials | ₱100,000 |
| Labels | ₱20,000 |

Which materials should receive the most attention?

Obviously, BT Powder has the highest annual consumption value, followed by PET Film and Binder.

Even if the company has hundreds of other inventory items, these three materials account for a significant portion of its annual inventory consumption value.

Therefore, the company may classify them as Class A.

The remaining materials may fall under Class B or C, depending on their relative contribution.

## 2.2 The Pareto Principle (80/20 Rule)

ABC Classification is commonly associated with the **Pareto Principle**.

The Pareto Principle suggests that, in many situations, a relatively small number of items account for a disproportionately large share of the total value.

In inventory management, a common illustrative pattern is:

**Illustrative ABC distribution**

| Class | Approximate share of inventory items | Approximate share of annual consumption value |
|---|---:|---:|
| A | 10–20% | 80% |
| B | 20–30% | 15% |
| C | 50–70% | 5% |

*Illustrative proportions only. Actual distributions depend on the company's inventory profile and classification policy.*

**Important:** The 80/20 principle is not an exact mathematical requirement.

Hindi ibig sabihin na lahat ng companies ay dapat magkaroon ng exactly 20% Class A items and 80% of consumption value.

The actual distribution depends on the company's inventory characteristics.

## 2.3 Understanding the Three Categories

### Class A Inventory: High value

Materials with the greatest annual consumption value.

Example: BT Powder, expensive electronic components, specialized production materials.

**Management approach:** Close monitoring, frequent reviews, careful replenishment, and stronger management oversight.

### Class B Inventory: Medium value

Materials with moderate annual consumption value.

Example: Binder, plasticizer, and certain chemical additives.

**Management approach:** Regular monitoring and moderate inventory controls.

### Class C Inventory: Low value

Materials with relatively small annual consumption value.

Example: Labels, low-cost packaging materials, and ordinary consumables.

**Management approach:** Simpler controls, less frequent reviews, and efficient replenishment.

### Why not manage all materials equally?

Consider two materials:

- Material A: ₱2 million annual consumption value.
- Material B: ₱2,000 annual consumption value.

If both require the same amount of administrative effort, the company may be spending too much time managing a low-value item while neglecting a material with a much greater financial impact.

ABC Classification helps allocate limited management resources more intelligently.

However, remember that low financial value does not automatically mean low operational importance. We will discuss this limitation later.

# 3. Technical Explanation

Now that we understand the concept, let's introduce the formal methodology.

## 3.1 Annual Consumption Value (ACV)

The foundation of ABC Classification is **Annual Consumption Value (ACV)**.

ACV represents the total monetary value of the inventory consumed or used by a company over a one-year period.

The calculation considers two factors:

1. Annual Usage: How many units of a material are consumed annually?
2. Unit Cost: How much does one unit cost?

For example:

A manufacturing company consumes 10,000 kg of BT Powder annually.

The purchase cost is ₱500 per kilogram.

Its annual consumption value is:

\[
10,000 \times ₱500 = ₱5,000,000
\]

Therefore, the company's annual consumption value for BT Powder is ₱5 million.

**Important distinction:**

Annual Consumption Value is not the same as the current inventory value.

- Annual Consumption Value measures the value of materials consumed over a year.
- Inventory Value measures the monetary value of materials currently held in stock.

For example, a company might consume ₱5 million worth of BT Powder annually but currently have only ₱1 million worth of BT Powder in inventory.

Magkaiba ang dalawang measurements.

## 3.2 Classification Methodology

The general ABC Classification process follows six steps:

1. **Identify inventory items.** Collect the list of raw materials, components, and other inventory items.
2. **Determine annual usage and unit cost.** Obtain each material's annual consumption quantity and unit cost.
3. **Calculate Annual Consumption Value.** Multiply annual usage by unit cost.
4. **Rank materials by ACV.** Arrange materials from highest to lowest annual consumption value.
5. **Calculate percentage and cumulative percentage.** Determine each material's contribution to total consumption value.
6. **Assign ABC categories.** Classify materials according to the company's established thresholds.

The next section will demonstrate the entire process using actual numbers from an illustrative manufacturing scenario.

# 4. Detailed Discussion: ABC Classification Methodology

Let's now perform the complete classification process.

## 4.1 Step 1: Identify Inventory Items

Assume that an MLCC manufacturing company wants to classify eight raw materials used in its production process.

The company gathers the following information:

| Material | Annual Usage | Unit Cost |
|---|---:|---:|
| BT Powder | 5,000 kg | ₱400/kg |
| Cu Electrode | 2,000 kg | ₱300/kg |
| Ni Powder | 1,000 kg | ₱250/kg |
| Binder | 3,000 kg | ₱50/kg |
| Plasticizer | 2,000 kg | ₱40/kg |
| Ethanol | 10,000 L | ₱5/L |
| PET Film | 500 rolls | ₱60/roll |
| Labels | 10,000 pcs | ₱1/pc |

These numbers are illustrative assumptions for our exercise.

Our objective is to determine which materials contribute most to the company's total annual consumption value.

## 4.2 Step 2: Calculate Annual Consumption Value

The formula is:

\[
\boxed{ACV = AU \times UC}
\]

Where:

| Variable | Meaning | Unit |
|---|---|---|
| ACV | Annual Consumption Value | Currency/year |
| AU | Annual Usage | Units/year |
| UC | Unit Cost | Currency/unit |

Let's calculate each material.

**Example 1: BT Powder**

- Annual Usage = 5,000 kg
- Unit Cost = ₱400/kg

\[
ACV = 5,000 \times 400
\]

\[
\boxed{ACV = ₱2,000,000}
\]

This means the company consumes ₱2 million worth of BT Powder annually.

**Example 2: Cu Electrode**

- Annual Usage = 2,000 kg
- Unit Cost = ₱300/kg

\[
ACV = 2,000 \times 300
\]

\[
\boxed{ACV = ₱600,000}
\]

Applying the same calculation to all materials:

| Material | Annual Usage | Unit Cost | Annual Consumption Value |
|---|---:|---:|---:|
| BT Powder | 5,000 | ₱400 | ₱2,000,000 |
| Cu Electrode | 2,000 | ₱300 | ₱600,000 |
| Ni Powder | 1,000 | ₱250 | ₱250,000 |
| Binder | 3,000 | ₱50 | ₱150,000 |
| Plasticizer | 2,000 | ₱40 | ₱80,000 |
| Ethanol | 10,000 | ₱5 | ₱50,000 |
| PET Film | 500 | ₱60 | ₱30,000 |
| Labels | 10,000 | ₱1 | ₱10,000 |
| **TOTAL** | | | **₱3,170,000** |

The company's total annual consumption value is ₱3,170,000.

This becomes our denominator when calculating each material's percentage contribution.

## 4.3 Step 3: Rank Materials by Annual Consumption Value

Next, arrange all inventory items from the highest ACV to the lowest ACV.

This is called **descending ranking**.

| Rank | Material | Annual Consumption Value |
|---:|---|---:|
| 1 | BT Powder | ₱2,000,000 |
| 2 | Cu Electrode | ₱600,000 |
| 3 | Ni Powder | ₱250,000 |
| 4 | Binder | ₱150,000 |
| 5 | Plasticizer | ₱80,000 |
| 6 | Ethanol | ₱50,000 |
| 7 | PET Film | ₱30,000 |
| 8 | Labels | ₱10,000 |
| | **Total** | **₱3,170,000** |

Why do we need to rank the materials?

Because ABC Classification is based on the relative contribution of each material to the company's total annual consumption value.

We need to identify which materials contribute the largest portions first.

## 4.4 Step 4: Calculate Percentage of Total Consumption Value

Now, determine how much each material contributes to the total annual consumption value.

Formula:

\[
\boxed{
\text{Value \%} =
\frac{\text{Item ACV}}{\text{Total ACV}}\times100
}
\]

Where:

- Item ACV = Annual Consumption Value of a particular material.
- Total ACV = Combined annual consumption value of all inventory items.

**Example: BT Powder**

\[
\text{Value \%} =
\frac{2,000,000}{3,170,000}\times100
\]

\[
\boxed{63.09\%}
\]

Interpretation:

BT Powder alone accounts for approximately 63.09% of the company's total annual consumption value.

This is a significant contribution considering that it is only one of eight inventory items.

Let's calculate the remaining materials.

| Material | Annual Consumption Value | % of Total |
|---|---:|---:|
| BT Powder | ₱2,000,000 | 63.09% |
| Cu Electrode | ₱600,000 | 18.93% |
| Ni Powder | ₱250,000 | 7.89% |
| Binder | ₱150,000 | 4.73% |
| Plasticizer | ₱80,000 | 2.52% |
| Ethanol | ₱50,000 | 1.58% |
| PET Film | ₱30,000 | 0.95% |
| Labels | ₱10,000 | 0.32% |
| **Total** | **₱3,170,000** | **100.00%** |

Notice something interesting:

BT Powder and Cu Electrode represent only 2 out of 8 inventory items, but together they account for approximately 82.02% of the total annual consumption value.

This demonstrates the Pareto concept.

## 4.5 Step 5: Calculate Cumulative Consumption Value

This is where the classification becomes more interesting.

**Cumulative Consumption Value** means the running total of annual consumption value as we move down the ranked inventory list.

In simpler terms, iniipon natin ang ACV ng bawat material, starting from the highest-ranked item.

Formula:

\[
CCV_n = \sum_{i=1}^{n} ACV_i
\]

Where:

- CCV = Cumulative Consumption Value.
- ACV = Annual Consumption Value.
- \(n\) = Current position in the ranked list.

Let's calculate:

| Material | Annual Consumption Value | Cumulative Consumption Value |
|---|---:|---:|
| BT Powder | ₱2,000,000 | ₱2,000,000 |
| Cu Electrode | ₱600,000 | ₱2,600,000 |
| Ni Powder | ₱250,000 | ₱2,850,000 |
| Binder | ₱150,000 | ₱3,000,000 |
| Plasticizer | ₱80,000 | ₱3,080,000 |
| Ethanol | ₱50,000 | ₱3,130,000 |
| PET Film | ₱30,000 | ₱3,160,000 |
| Labels | ₱10,000 | ₱3,170,000 |

Let's examine the first four rows:

1. BT Powder: ₱2,000,000
2. Cu Electrode: ₱2,000,000 + ₱600,000 = ₱2,600,000
3. Ni Powder: ₱2,600,000 + ₱250,000 = ₱2,850,000
4. Binder: ₱2,850,000 + ₱150,000 = ₱3,000,000

By the last row, the cumulative consumption value should equal the total annual consumption value of all materials.

That is our calculation check.

## 4.6 Step 6: Calculate Cumulative Percentage

The next step is converting the cumulative consumption value into a cumulative percentage.

Formula:

\[
\boxed{
Cumulative\ \% =
\frac{CCV}{Total\ ACV}\times100
}
\]

**Example: BT Powder**

\[
=\frac{2,000,000}{3,170,000}\times100
\]

\[
=63.09\%
\]

**Example: Cu Electrode**

\[
=\frac{2,600,000}{3,170,000}\times100
\]

\[
=82.02\%
\]

Interpretation:

BT Powder and Cu Electrode together represent approximately 82.02% of total annual consumption value.

Complete results:

| Rank | Material | ACV | Cumulative ACV | Cumulative % |
|---:|---|---:|---:|---:|
| 1 | BT Powder | ₱2,000,000 | ₱2,000,000 | 63.09% |
| 2 | Cu Electrode | ₱600,000 | ₱2,600,000 | 82.02% |
| 3 | Ni Powder | ₱250,000 | ₱2,850,000 | 89.91% |
| 4 | Binder | ₱150,000 | ₱3,000,000 | 94.64% |
| 5 | Plasticizer | ₱80,000 | ₱3,080,000 | 97.16% |
| 6 | Ethanol | ₱50,000 | ₱3,130,000 | 98.74% |
| 7 | PET Film | ₱30,000 | ₱3,160,000 | 99.68% |
| 8 | Labels | ₱10,000 | ₱3,170,000 | 100.00% |

## 4.7 Step 7: Assign ABC Categories

Now we can finally classify the materials.

For this example, let's use the following illustrative company policy:

| Classification | Cumulative Consumption Value |
|---|---:|
| A | First approximately 80% |
| B | Next approximately 15% |
| C | Remaining approximately 5% |

These are guidelines, not universal industry requirements.

**How do we assign the categories?**

We follow the ranked list and examine its cumulative percentage.

### ABC classification of our manufacturing inventory

**A: BT Powder and Cu Electrode: 82.02%**

2 of 8 items. These materials reach and cross the approximately 80% threshold.

**B: Ni Powder and Binder: 12.62%**

2 of 8 items. Their combined contribution brings cumulative value from 82.02% to 94.64%.

**C: Remaining four materials: 5.36%**

Plasticizer, Ethanol, PET Film, and Labels.

Our final classification:

| Material | Cumulative % | ABC Category |
|---|---:|:---:|
| BT Powder | 63.09% | **A** |
| Cu Electrode | 82.02% | **A** |
| Ni Powder | 89.91% | **B** |
| Binder | 94.64% | **B** |
| Plasticizer | 97.16% | **C** |
| Ethanol | 98.74% | **C** |
| PET Film | 99.68% | **C** |
| Labels | 100.00% | **C** |

**Important boundary rule:**

In this example, we assign the item that crosses the 80% threshold to Class A. Similarly, the item that crosses the 95% threshold is assigned to Class B.

This is one practical convention. Some companies use slightly different threshold assignment methods, so the classification policy must be clearly defined and consistently applied.

## 4.8 Summary of All Formulas

These are the formulas you should remember when performing ABC Classification.

| Calculation | Formula |
|---|---|
| Annual Consumption Value | \(AU \times UC\) |
| Percentage of Total Value | \(\frac{ACV}{Total\ ACV}\times100\) |
| Cumulative Consumption Value | Previous CCV + Current ACV |
| Cumulative Percentage | \(\frac{CCV}{Total\ ACV}\times100\) |
| ABC Assignment | Based on cumulative percentage thresholds |

### Common Calculation Errors

1. **Using current inventory quantity instead of annual usage.** ABC is generally based on annual consumption, not merely how much stock is currently available.
2. **Ranking by quantity instead of monetary value.** A material with lower annual usage may have a higher ACV because its unit cost is higher.
3. **Using inventory balance instead of consumption value.** These are different measurements.
4. **Failing to rank before calculating cumulative percentages.** The items must be arranged from highest to lowest ACV first.
5. **Incorrect cumulative calculation.** Cumulative values must continuously increase and eventually reach the total ACV.
6. **Rounding too early.** Retain the underlying precision during calculations and round only for presentation. Otherwise, small differences may affect threshold assignments.
7. **Ignoring boundary rules.** Clearly establish how the company handles an item that crosses an A/B or B/C threshold.

# 5. Practical Manufacturing Application

Let's move beyond calculations and understand how this affects actual manufacturing operations.

## 5.1 Why Physical Quantity Does Not Determine ABC Priority

Consider the following two materials:

| Material | Annual Usage | Unit Cost | Annual Consumption Value |
|---|---:|---:|---:|
| BT Powder | 5,000 kg | ₱400 | ₱2,000,000 |
| Labels | 10,000 pcs | ₱1 | ₱10,000 |

Notice that Labels have a higher annual usage quantity.

However, BT Powder has a much higher annual consumption value.

Why?

Because ABC Classification considers both quantity and unit cost.

\[
ACV = Annual\ Usage \times Unit\ Cost
\]

The BT Powder has a significantly greater financial impact despite having a lower physical consumption quantity.

This is why we cannot classify inventory based on quantity alone.

## 5.2 How Companies Apply Different Inventory Controls

ABC Classification allows companies to establish different inventory management policies.

The following are illustrative practices, not mandatory rules.

| Control Area | Class A | Class B | Class C |
|---|---|---|---|
| Monitoring | Very close | Moderate | Basic |
| Review frequency | Weekly or more often | Monthly | Quarterly or periodic |
| Inventory reporting | Detailed | Regular | Simplified |
| Purchasing control | Strict | Moderate | Simplified |
| Replenishment | Carefully planned | Periodically reviewed | Efficient bulk or routine replenishment |
| Management attention | High | Medium | Lower |

Let's understand the reasoning.

### Class A: Tighter Control

For high-value materials, companies may:

- Review inventory positions more frequently.
- Closely monitor consumption and forecast changes.
- Coordinate with procurement regarding supplier lead times.
- Investigate excess and obsolete inventory.
- Monitor open purchase orders and incoming deliveries.
- Carefully evaluate purchase quantities.

For example:

If BT Powder has an annual consumption value of ₱2 million, holding excessive inventory could tie up a significant amount of working capital.

A small improvement in its inventory level may generate meaningful financial benefits.

### Class B: Moderate Control

For medium-value materials:

- Conduct regular inventory reviews.
- Monitor consumption and replenishment requirements.
- Evaluate stock levels against production plans.
- Investigate significant inventory deviations.

Hindi kailangan ng same intensity ng monitoring as Class A, but these materials should not be ignored.

### Class C: Simplified Control

For low-value materials:

- Use simpler purchasing procedures where appropriate.
- Consider periodic replenishment.
- Reduce administrative effort.
- Consider bulk purchasing when economically justified.

For example, ordinary labels may be purchased in larger batches if storage space, shelf life, and obsolescence risks permit.

However, a C classification does not automatically justify buying huge quantities.

## 5.3 Does Class A Automatically Need Lower Safety Stock?

No.

This is an important distinction.

ABC Classification determines the financial priority of an inventory item. It does not directly determine the correct safety stock quantity.

Safety stock should consider factors such as:

- Demand variability.
- Supplier lead-time variability.
- Desired service level.
- Consequences of stockouts.
- Replenishment flexibility.

A Class A material may require a carefully optimized safety stock rather than simply maintaining a very high quantity.

Similarly, a Class C material may require substantial safety stock if its supplier has unreliable deliveries.

**Key principle:** ABC determines management attention based on value, while safety stock requires additional demand and supply information.

# 6. Limitations and Important Considerations

ABC Classification is useful, but relying on it alone can create operational risks.

## 6.1 High Financial Value Does Not Always Mean High Operational Criticality

Imagine two materials:

| Material | ABC Category | Annual Consumption Value |
|---|---|---:|
| BT Powder | A | ₱2,000,000 |
| Specialized Machine Seal | C | ₱5,000 |

The BT Powder has a much higher annual consumption value.

However, suppose the machine seal is required for a critical production machine and has no available substitute.

If the seal becomes unavailable, the production line may stop.

Therefore:

- BT Powder has high financial importance.
- The machine seal has high operational criticality.

These are two different dimensions of inventory management.

**A low-value material can still create a major production disruption.**

## 6.2 Why ABC Alone Is Not Enough

ABC Classification primarily evaluates annual consumption value.

It does not independently measure:

- Demand predictability.
- Supplier reliability.
- Lead-time variability.
- Stockout consequences.
- Production criticality.
- Material substitutability.
- Shelf-life restrictions.

Therefore, companies often combine ABC with other classification approaches.

## 6.3 Introduction to Combined Inventory Classification

One useful approach is combining ABC with XYZ Classification.

Let's introduce the difference before our next topic.

| Classification | Primary Basis | Main Question |
|---|---|---|
| ABC | Annual Consumption Value | How financially significant is this material? |
| XYZ | Demand Variability | How predictable or variable is this material's demand? |

For example:

- **AX:** High-value material with relatively stable demand.
- **AY:** High-value material with moderately variable demand.
- **AZ:** High-value material with highly variable demand.

Why is this useful?

Because two materials may both belong to Class A, but their demand patterns may be completely different.

One may have stable monthly consumption, while another may experience unpredictable demand spikes.

Their inventory strategies should therefore differ.

We will study this in detail in Topic 5.10.

# 7. ABC Classification in S&OP Decisions

Now let's connect everything to your responsibilities as an S&OP analyst.

ABC Classification is not simply an inventory labeling exercise.

Its real business value comes from helping the organization prioritize decisions.

## 7.1 Prioritizing Inventory Reviews

Suppose the company has 2,000 active inventory items.

Reviewing every item with the same level of detail may consume significant time.

An S&OP analyst can use ABC Classification to prioritize:

- High-value materials with excessive inventory.
- High-value materials approaching stockout.
- Materials with significant forecast changes.
- Materials with long procurement lead times.
- Materials with large inventory value deviations.

For example, if BT Powder is Class A and its inventory value has increased significantly, the analyst should investigate the reason.

Possible explanations include:

1. Higher forecast demand.
2. Increased procurement quantities.
3. Longer supplier lead times.
4. Reduced production consumption.
5. Accumulation of excess inventory.

The analyst should identify the actual driver rather than immediately recommending a purchasing reduction.

## 7.2 Supporting Procurement Decisions

ABC Classification helps procurement teams prioritize sourcing activities.

For Class A materials, procurement may focus on:

- Supplier performance.
- Contract negotiations.
- Purchase price changes.
- Delivery reliability.
- Alternative suppliers.
- Procurement risk exposure.

For Class C materials, procurement may focus more on reducing administrative costs and simplifying purchasing activities.

## 7.3 Supporting Working Capital Management

This is particularly important from a financial perspective.

**Working capital** refers to funds used to support normal business operations.

Inventory consumes working capital because the company spends money purchasing materials before those materials generate revenue through production and sales.

Suppose:

- Class A inventory has a current stock value of ₱5 million.
- The company identifies ₱500,000 of unnecessary excess inventory.
- The company can safely reduce that excess without affecting production or customer service.

The potential working capital released is ₱500,000.

This does not automatically mean ₱500,000 becomes profit.

It means the company can reduce cash tied up in inventory and potentially improve its cash position.

## 7.4 Connecting ABC to Inventory Turnover (Topic 5.8)

Let's revisit Inventory Turnover.

Inventory Turnover measures how frequently inventory is consumed or sold relative to the inventory investment over a period.

A common formula is:

\[
Inventory\ Turnover =
\frac{Annual\ COGS}{Average\ Inventory}
\]

ABC Classification complements this measurement.

Consider:

| Material | ABC Category | Inventory Turnover |
|---|---|---:|
| BT Powder | A | 2.0 |
| Cu Electrode | A | 8.0 |
| Ni Powder | B | 5.0 |
| Labels | C | 12.0 |

These turnover figures are illustrative.

An analyst can identify that BT Powder is a high-value material with relatively low inventory turnover.

This may indicate an opportunity to investigate:

- Excess inventory.
- Over-purchasing.
- Longer holding periods.
- Forecast inaccuracies.
- Changes in production consumption.

However, low turnover is not automatically a problem. Strategic stock, long replenishment lead times, and supply risks may justify holding additional inventory.

**The important connection:**

- ABC identifies which items deserve greater financial attention.
- Inventory Turnover identifies how efficiently those inventory investments are being used.

Combining both creates a more useful inventory analysis.

## 7.5 How an S&OP Analyst Uses ABC in a Review Meeting

Imagine you are preparing for an S&OP supply review.

You have the following observations:

| Material | ABC | Inventory Situation |
|---|---|---|
| BT Powder | A | Excess inventory |
| Cu Electrode | A | Approaching stockout |
| Ni Powder | B | Normal inventory |
| Binder | B | Increasing consumption |
| Labels | C | High stock level |

Your analysis should not treat these five materials equally.

Instead:

**BT Powder:** Investigate excess inventory and determine whether procurement can be reduced or rescheduled.

**Cu Electrode:** Prioritize replenishment and supplier coordination because of its high financial value and potential supply exposure.

**Ni Powder:** Continue normal monitoring.

**Binder:** Review the increased consumption and determine whether future production requirements have changed.

**Labels:** Evaluate whether inventory can be managed through simpler replenishment procedures, while confirming that sufficient stock remains available.

This is how ABC Classification supports practical decision-making.

## 7.6 Management-Level Perspective

During an S&OP meeting, you should be able to communicate not only the classification but also its business implications.

For example:

Instead of reporting:

"BT Powder is classified as Class A."

A stronger business statement would be:

"BT Powder represents approximately 63% of the total annual consumption value in the reviewed material portfolio. Given its significant financial exposure, we recommend prioritizing its inventory review, monitoring forecast changes, and evaluating procurement quantities to prevent unnecessary working capital accumulation."

That is the difference between simply reporting data and providing business analysis.

# 8. Key Takeaways

Before moving to the knowledge check, let's consolidate the important concepts.

## 8.1 Concepts You Must Understand

| Concept | What You Should Remember |
|---|---|
| ABC Classification | Groups inventory according to annual consumption value. |
| Pareto Principle | A relatively small number of items may account for a large portion of total value. |
| Annual Usage | Total quantity consumed during a year. |
| Unit Cost | Cost of one unit of material. |
| Annual Consumption Value | Annual Usage × Unit Cost. |
| Ranking | Arrange items from highest to lowest ACV. |
| Cumulative Value | Running total of ranked ACVs. |
| Cumulative Percentage | Cumulative value divided by total ACV. |
| Class A | Highest-value inventory items. |
| Class B | Medium-value inventory items. |
| Class C | Lowest-value inventory items. |

## 8.2 Five Important Principles

1. **ABC classification is based on monetary value, not physical quantity.**
2. **Class A items deserve greater financial and management attention**, but this does not mean that Class B and C materials can be ignored.
3. **ABC thresholds are company-specific.** The commonly used 80/15/5 distribution is an illustrative guideline.
4. **High financial value does not automatically mean high operational criticality.** A low-cost component can still stop an entire production line.
5. **ABC should be combined with other inventory management methods**, particularly demand variability and operational criticality analysis.

## 8.3 The Bigger Picture: ABC and XYZ

Remember this distinction as we prepare for Topic 5.10.

| Classification | Primary Dimension | Main Question |
|---|---|---|
| ABC | Inventory Value | Which materials have the greatest financial significance? |
| XYZ | Demand Variability | Which materials have stable or unpredictable demand? |

**Combined application:**

A Class A material with stable demand may require a different replenishment strategy from a Class A material with highly unpredictable demand.

# 9. Knowledge Check and Exercises

**Assessment: Level 1–3**

Time to test whether you can apply ABC Classification, not just memorize its formulas.

**Instructions:** Answer the questions using your own understanding. I will evaluate your answers, identify any misconceptions, and explain the correct reasoning afterward.

Do not worry about getting everything correct on your first attempt.

## Part A – Conceptual Understanding

**1.** What is the primary purpose of ABC Classification in inventory management?

**2.** Explain the relationship between the Pareto Principle and ABC Classification.

**3.** Why can a material with a lower annual consumption quantity be classified as Class A while another material with a higher consumption quantity is classified as Class C?

**4.** What is the difference between Annual Consumption Value and Current Inventory Value?

**5.** Does Class A automatically mean that a material needs the highest safety stock? Explain your answer.

## Part B – Situational Analysis

**6.** A manufacturing company has two inventory items:

| Material | Annual Usage | Unit Cost |
|---|---:|---:|
| Material X | 1,000 kg | ₱1,000/kg |
| Material Y | 20,000 kg | ₱10/kg |

Which material has the higher annual consumption value? Explain why.

**7.** A production machine requires a specialized seal worth only ₱500 annually. However, without this seal, production cannot continue.

The seal is classified as Class C based on annual consumption value.

Should the company treat it as a low-priority material? Why or why not?

**8.** Your inventory report shows that a Class A material has high inventory levels and low inventory turnover.

What possible issues would you investigate before recommending a reduction in procurement?

## Part C – Numerical Exercise

Use the following inventory data.

A manufacturing company has five raw materials:

| Material | Annual Usage | Unit Cost |
|---|---:|---:|
| A | 1,000 units | ₱500 |
| B | 2,000 units | ₱100 |
| C | 500 units | ₱200 |
| D | 5,000 units | ₱10 |
| E | 1,000 units | ₱20 |

Assume the company uses these classification thresholds:

- Class A: First approximately 80%.
- Class B: Next approximately 15%.
- Class C: Remaining value.

**9. Complete the ABC Classification.**

Calculate the following:

a. Annual Consumption Value of each material.

b. Total Annual Consumption Value.

c. Rank the materials from highest to lowest ACV.

d. Percentage of Total Consumption Value.

e. Cumulative Consumption Value.

f. Cumulative Percentage.

g. Final ABC Classification.

You may use this table as your working format:

| Material | ACV | Value % | Cumulative ACV | Cumulative % | Class |
|---|---:|---:|---:|---:|:---:|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Part D – Professional S&OP Analysis

**10.** You are preparing an inventory review for a manufacturing company.

Your analysis reveals:

- Class A materials represent 82% of total annual consumption value.
- Two Class A materials have excess inventory.
- One Class C material has a high risk of stockout.
- Demand for one Class A material has become unpredictable.

As an S&OP analyst:

a. Which materials or issues would you prioritize?

b. What additional information would you request?

c. What recommendations would you present during the Supply Review?

d. Why is ABC Classification alone insufficient to make all these decisions?

---

## Learning Progress

**Module 5 – Inventory Management**

**Topic 5.9: ABC Classification**  
Lesson coverage: Complete.

**Next: Topic 5.10 – XYZ Classification**  
Understanding inventory according to demand variability, predictability, and consumption patterns.

**My recommendation:** Sagutan mo muna ang Parts A and B, then proceed to the numerical exercise. Pay particular attention to Part D because this is where we start developing your professional S&OP analytical skills.

Hindi pa tayo lilipat sa Topic 5.10 hangga't hindi natin natatapos ang assessment at na-establish ang understanding mo sa ABC Classification.
