# MODULE 5 – INVENTORY MANAGEMENT
## Topic 5.10: XYZ Classification

**Learning Objective:** Understand how companies classify inventory based on demand or consumption variability and use this information to improve forecasting, replenishment, and inventory control.

---

# 1. Topic Overview

## What is XYZ Classification?

Sa previous topic, **Topic 5.9: ABC Classification**, natutunan natin kung paano i-classify ang inventory based on its annual consumption value.

Ngayon, ibang characteristic naman ang susuriin natin: **How predictable is the demand or consumption of an inventory item?**

Imagine na may manufacturing company ka na gumagamit ng three raw materials:

- Material A: Almost 1,000 kg consumed every month.
- Material B: Consumption changes between 500 and 1,500 kg monthly.
- Material C: Some months, walang consumption. Other months, umaabot ng 2,000 kg.

Pare-pareho silang raw materials, pero magkaiba ang behavior ng consumption nila.

Material A is relatively predictable. Material B fluctuates. Material C is highly irregular.

Dito pumapasok ang XYZ Classification.

**XYZ Classification** is an inventory classification method that groups materials according to the variability and predictability of their demand or consumption.

## Why is this important?

Hindi sapat na alam natin kung gaano kahalaga ang isang inventory item financially.

Kailangan din nating malaman kung gaano kadaling i-predict ang future consumption nito.

For example:

- Kung stable ang consumption, mas madaling mag-forecast at mag-plan ng replenishment.
- Kung fluctuating ang consumption, kailangan nating bantayan ang changes sa demand.
- Kung irregular ang consumption, maaaring hindi effective ang traditional forecasting and replenishment methods.

## Connection to our S&OP curriculum

| Previous / Current / Next Topic | Connection |
|---|---|
| 5.8 Inventory Turnover | Measures how efficiently inventory is being used. |
| 5.9 ABC Classification | Identifies financially important inventory items. |
| **5.10 XYZ Classification** | Identifies inventory items based on demand predictability. |
| 5.11 Excess and Obsolete Inventory | Identifies inventory that is no longer needed or exceeds requirements. |

Ang ABC at XYZ ay complementary methods.

ABC answers:

**Which inventory items are financially important?**

XYZ answers:

**Which inventory items are difficult to predict?**

Kapag pinagsama natin ang dalawa, mas nagiging strategic ang inventory management.

---

# 2. Layman's Explanation

## 2.1 Understanding Demand Variability

Unahin muna natin ang isang simple concept: variability.

Ang variability ay tumutukoy sa kung gaano kalaki ang pagbabago ng isang value over time.

For inventory management, ang sinusuri natin ay kung gaano nagbabago ang consumption ng isang material from month to month.

Let's use three manufacturing materials.

**Illustrative monthly consumption data (kg)**

| Month | Material A | Material B | Material C |
|---|---:|---:|---:|
| January | 1,000 | 500 | 0 |
| February | 1,000 | 800 | 2,000 |
| March | 1,000 | 1,200 | 0 |
| April | 1,000 | 1,500 | 1,000 |
| May | 1,000 | 1,000 | 0 |
| June | 1,000 | 1,000 | 3,000 |

Observe the differences.

### Material A: Stable consumption

**1,000 kg every month**

Every month, exactly 1,000 kg ang consumption. Madali itong i-forecast dahil consistent ang historical behavior.

### Material B: Fluctuating consumption

**500–1,500 kg**

May changes every month. May pattern of variation, pero hindi consistent ang quantity.

### Material C: Irregular consumption

**0–3,000 kg**

May months na zero consumption, tapos biglang may significant demand.

Notice something important?

Hindi necessarily ibig sabihin na mas mataas ang average consumption ay mas unpredictable.

Ang sinusuri natin ay kung gaano kalaki ang variation relative to the average consumption.

That is the foundation of XYZ Classification.

## 2.2 The Three XYZ Categories

### X Items: Low Variability

- Consistent consumption.
- Relatively easy to forecast.
- More predictable replenishment requirements.

Example: A production material consumed at approximately 1,000 kg every month.

### Y Items: Medium Variability

- Consumption changes over time.
- May have seasonal or identifiable patterns.
- Requires more attention when forecasting.

Example: Packaging materials with increased consumption during peak production months.

### Z Items: High Variability

- Highly inconsistent consumption.
- Difficult to forecast using simple averages.
- May require specialized replenishment strategies.

Example: Special chemical additives used only for occasional production orders.

**Important:** X, Y, and Z are not rankings of financial importance. They describe demand behavior.

---

# 3. Technical Explanation

Now that we understand the basic concept, let's introduce the technical methodology.

XYZ Classification commonly uses a statistical measurement called the **Coefficient of Variation (CV)**.

Before we calculate CV, we need to understand three statistical concepts:

1. Mean
2. Standard Deviation
3. Coefficient of Variation

## 3.1 Mean (Average Demand)

Mean represents the average consumption over a specific period.

Suppose a material has monthly consumption of:

1,000, 1,100, 900, 1,000, 1,000 kg.

The average consumption is 1,000 kg/month.

This gives us an idea of the typical consumption level.

However, average alone does not tell us whether consumption is stable or fluctuating.

Consider these two materials:

| Month | Material A | Material B |
|---|---:|---:|
| January | 1,000 | 500 |
| February | 1,000 | 1,500 |
| March | 1,000 | 500 |
| April | 1,000 | 1,500 |
| **Average** | **1,000** | **1,000** |

Both have exactly the same average.

Pero obviously, magkaiba ang consumption behavior nila.

This is why we need another measurement.

## 3.2 Standard Deviation (SD)

Standard Deviation measures how spread out the data points are from the average.

In simpler terms:

**It tells us how much actual consumption typically deviates from the average consumption.**

For example:

- Material A has an SD of 0 kg.
- Material B has an SD of approximately 500 kg.

This tells us that Material A has no variation in our example, while Material B has considerable variation.

**Visual interpretation**

Both materials have an average of 1,000 kg.

- **Material A:** 1,000, 1,000, 1,000, 1,000, 1,000. All observations are equal. Zero standard deviation.
- **Material B:** 500, 1,500, 500, 1,500, 1,000. Observations are spread around the average. Higher standard deviation.

Mas mataas ang standard deviation, mas malaki ang absolute variation.

Pero may isang problem.

What if we compare two materials with very different average consumption?

For example:

- Material A: Average = 100 kg, SD = 20 kg.
- Material B: Average = 10,000 kg, SD = 500 kg.

Material B has a much higher standard deviation, but its variation relative to average consumption is smaller.

This is why we use CV.

## 3.3 Coefficient of Variation (CV)

The Coefficient of Variation measures the relative variability of demand.

It compares standard deviation against the mean.

In simple terms:

**CV tells us how large the variation is compared with the average consumption.**

Formula:

\[
CV=\frac{SD}{Mean}
\]

If expressed as a percentage:

\[
CV(\%)=\frac{SD}{Mean}\times100
\]

Example:

| Material | Mean | SD | CV |
|---|---:|---:|---:|
| A | 100 kg | 20 kg | 20% |
| B | 10,000 kg | 500 kg | 5% |

Interpretation:

- Material A: Variation is equivalent to 20% of average consumption.
- Material B: Variation is equivalent to only 5% of average consumption.

Therefore, Material B is relatively more stable even though its standard deviation is numerically higher.

**Key distinction:**

| Measurement | What it tells us |
|---|---|
| Mean | Typical consumption quantity |
| Standard Deviation | Absolute spread of consumption |
| CV | Relative spread compared with average |

CV is particularly useful when comparing materials with different consumption volumes.

---

# 4. Detailed Discussion: XYZ Classification Methodology

## 4.1 Understanding the Statistical Formulas

### A. Mean

\[
\bar{x}=\frac{\sum_{i=1}^{n}x_i}{n}
\]

Where:

- \(\bar{x}\) = Mean or average consumption.
- \(x_i\) = Consumption in each period.
- \(n\) = Number of observations.
- \(\sum\) = Sum of all observations.

Example:

Monthly consumption:

1,000, 1,100, 900, 1,000, 1,000 kg.

\[
\bar{x}=\frac{1000+1100+900+1000+1000}{5}
\]

\[
\bar{x}=\frac{5000}{5}=1000
\]

Result: 1,000 kg/month.

### B. Standard Deviation

For XYZ analysis, you may encounter two versions of standard deviation.

**Population Standard Deviation**

Used when the available dataset represents the entire period or population being analyzed.

\[
\sigma=\sqrt{\frac{\sum(x_i-\mu)^2}{N}}
\]

**Sample Standard Deviation**

Used when the available dataset is treated as a sample of a larger underlying demand process.

\[
s=\sqrt{\frac{\sum(x_i-\bar{x})^2}{n-1}}
\]

Difference:

| Population SD | Sample SD |
|---|---|
| Divides by N | Divides by n - 1 |
| Describes the complete dataset | Estimates variability of a larger population |
| Uses symbol σ | Uses symbol s |

For practical inventory analysis, companies need to establish a consistent methodology. Neither version should be selected randomly.

### C. Coefficient of Variation

\[
CV=\frac{\sigma}{\mu}
\]

Or:

\[
CV(\%)=\frac{\sigma}{\mu}\times100
\]

For the following calculations, gagamit tayo ng population standard deviation to keep the example consistent.

## 4.2 How XYZ Categories Are Assigned

After calculating CV, we assign each item to X, Y, or Z.

An illustrative classification policy might be:

| Category | CV Threshold | Interpretation |
|---|---:|---|
| X | CV ≤ 0.50 | Low variability |
| Y | 0.50 < CV ≤ 1.00 | Moderate variability |
| Z | CV > 1.00 | High variability |

**Illustrative thresholds only**

Important: These are not universal industry standards.

Some companies use different thresholds depending on:

- Industry and material characteristics.
- Historical demand behavior.
- Forecasting requirements.
- Number of observations.
- Inventory policies.
- Business risk tolerance.

Some organizations also use different methods beyond CV, especially when demand is intermittent.

### 4.3 Regular vs. Intermittent Consumption

This distinction is important.

**Regular consumption**

Material is consumed frequently, usually every month or every production period.

Example:

| Month | Consumption |
|---|---:|
| Jan | 1,000 |
| Feb | 1,100 |
| Mar | 950 |
| Apr | 1,050 |

**Intermittent consumption**

Material is consumed occasionally, with periods of zero demand.

Example:

| Month | Consumption |
|---|---:|
| Jan | 0 |
| Feb | 0 |
| Mar | 2,000 |
| Apr | 0 |
| May | 1,500 |
| Jun | 0 |

Intermittent demand can create difficulties when using CV alone.

Why?

Because zero-consumption periods can produce a very high CV, even when the material has a predictable usage pattern tied to specific production orders.

For intermittent demand, analysts may also examine:

- Demand frequency.
- Average interval between demand occurrences.
- Average demand quantity when demand occurs.
- Order or production schedule patterns.

### 4.4 Factors Influencing Demand Variability

| Factor | Possible Effect |
|---|---|
| Customer orders | Sudden changes in material requirements |
| Production schedule | Changes in planned consumption |
| Seasonality | Recurring increases or decreases |
| New product introduction | Uncertain initial consumption |
| Product mix | Different material requirements |
| Supplier issues | Can distort actual consumption |
| Quality losses | Additional material consumption |
| Engineering changes | Changes in material specifications |
| Minimum order quantities | Irregular purchasing patterns |

One important consideration:

**Historical consumption is not always equal to actual demand.**

For example, if production stopped because of a raw material shortage, recorded consumption may be zero.

But that does not mean customer demand was zero.

As an S&OP analyst, kailangan mong i-investigate kung bakit nagkaroon ng zero consumption.

---

# 5. Formulas and Calculations

Let's work through an actual calculation.

## 5.1 Step 1: Calculate the Mean

Suppose monthly consumption is:

800, 900, 1,000, 1,100, 1,200 kg.

\[
Mean=\frac{800+900+1000+1100+1200}{5}
\]

\[
Mean=\frac{5000}{5}
\]

**Mean = 1,000 kg/month**

## 5.2 Step 2: Calculate Standard Deviation

First, subtract the mean from each observation.

| Month | Actual (kg) | Actual - Mean | Squared Deviation |
|---|---:|---:|---:|
| Jan | 800 | -200 | 40,000 |
| Feb | 900 | -100 | 10,000 |
| Mar | 1,000 | 0 | 0 |
| Apr | 1,100 | 100 | 10,000 |
| May | 1,200 | 200 | 40,000 |
| **Total** | **5,000** | **0** | **100,000** |

Now calculate population variance:

\[
Variance=\frac{100000}{5}=20000
\]

Then take the square root:

\[
SD=\sqrt{20000}
\]

\[
SD=141.42\text{ kg}
\]

**SD = 141.42 kg/month**

## 5.3 Step 3: Calculate CV

\[
CV=\frac{141.42}{1000}
\]

\[
CV=0.14142
\]

Convert to percentage:

\[
CV=0.14142\times100
\]

**CV = 14.14%**

## 5.4 Step 4: Assign XYZ Category

Using our illustrative thresholds:

| Category | Threshold |
|---|---:|
| X | ≤ 50% |
| Y | 50% to 100% |
| Z | Greater than 100% |

Since the calculated CV is 14.14%:

**Classification = X**

Interpretation:

The material has relatively stable consumption. It may be suitable for straightforward forecasting and regular replenishment planning.

## 5.5 Population vs. Sample: Numerical Difference

Using the same dataset:

- Sum of squared deviations = 100,000.
- Number of observations = 5.

Population SD:

\[
\sigma=\sqrt{\frac{100000}{5}}=141.42
\]

Sample SD:

\[
s=\sqrt{\frac{100000}{4}}=158.11
\]

The sample SD is higher because it divides by a smaller number.

Consequently:

| Measurement | Population | Sample |
|---|---:|---:|
| Mean | 1,000 | 1,000 |
| SD | 141.42 | 158.11 |
| CV | 14.14% | 15.81% |

Both still fall under X using our example thresholds.

---

# 6. Practical Manufacturing Application

Now let's apply the complete methodology to a manufacturing environment.

Imagine an MLCC manufacturing company that uses several raw materials for its production process.

We will evaluate five materials using six months of historical consumption.

## 6.1 Historical Consumption Data

**Illustrative data | Monthly consumption**

| Material | Jan | Feb | Mar | Apr | May | Jun |
|---|---:|---:|---:|---:|---:|---:|
| BT Powder (kg) | 1,000 | 1,050 | 950 | 1,000 | 1,050 | 950 |
| Binder (kg) | 500 | 600 | 700 | 500 | 600 | 700 |
| Plasticizer (L) | 100 | 150 | 200 | 100 | 150 | 200 |
| Special Additive (kg) | 0 | 0 | 1,000 | 0 | 0 | 2,000 |
| Cleaning Chemical (L) | 100 | 300 | 50 | 400 | 100 | 250 |

These are illustrative values, not actual Samsung or Emerson operational data.

## 6.2 Calculate Mean, SD, and CV

Using population standard deviation:

| Material | Mean | SD | CV |
|---|---:|---:|---:|
| BT Powder | 1,000 kg | 40.82 kg | 4.08% |
| Binder | 600 kg | 81.65 kg | 13.61% |
| Plasticizer | 150 L | 40.82 L | 27.22% |
| Special Additive | 500 kg | 763.76 kg | 152.75% |
| Cleaning Chemical | 200 L | 124.72 L | 62.36% |

Let's interpret each result.

### BT Powder

**CV = 4.08% | X**

Very stable consumption. Production planning can use historical average consumption as a reasonable starting point.

### Binder

**CV = 13.61% | X**

Relatively stable consumption, although there is some month-to-month variation.

### Plasticizer

**CV = 27.22% | X**

Still classified as X under our example thresholds. However, its variability is higher than BT Powder and Binder.

### Special Additive

**CV = 152.75% | Z**

Extremely irregular consumption, with several months of zero consumption followed by significant usage.

### Cleaning Chemical

**CV = 62.36% | Y**

Moderate variability. Historical average alone may not adequately represent future consumption.

## 6.3 Comparison of Inventory Planning Implications

| Material | XYZ | Suggested Planning Approach |
|---|---|---|
| BT Powder | X | Regular forecasting and scheduled replenishment |
| Binder | X | Standard forecast review and monitoring |
| Plasticizer | X | Regular replenishment with variation monitoring |
| Special Additive | Z | Check production orders and actual requirements before replenishment |
| Cleaning Chemical | Y | Review usage trends and adjust forecasts periodically |

Notice that the Special Additive has the highest variability.

Does that automatically mean we should maintain the highest inventory?

**No.**

This is one of the most important lessons in XYZ Classification.

A Z item may be consumed only occasionally. If we simply increase safety stock because of its high CV, we might create unnecessary excess inventory.

Instead, we should investigate:

- Is it required for a specific production order?
- Does it have a long supplier lead time?
- Is it critical to production?
- Is it available locally?
- Does it have a short shelf life?
- Can it be purchased only when required?

The correct inventory strategy depends on the material's business and operational characteristics, not CV alone.

---

# 7. Inventory Planning Implications

Now let's connect classification to actual inventory management.

## 7.1 X Items: Stable Demand

Characteristics:

- Relatively consistent consumption.
- High demand predictability.
- Easier forecasting.

Possible planning strategies:

| Area | Planning Approach |
|---|---|
| Forecasting | Historical average or time-series methods |
| Safety Stock | Statistical calculations may work well if assumptions are appropriate |
| Replenishment | Regular and potentially automated |
| Monitoring | Standard periodic review |

Example:

If BT Powder consumption averages 1,000 kg/month, and the production plan remains relatively stable, we can use this information as a baseline for future material requirements.

However, we still need to consider production volume, BOM changes, and planned downtime.

## 7.2 Y Items: Fluctuating Demand

Characteristics:

- Moderate variability.
- Possible seasonal or production-related patterns.
- More difficult to forecast than X items.

Possible strategies:

| Area | Planning Approach |
|---|---|
| Forecasting | Consider seasonality and production plans |
| Safety Stock | Evaluate forecast errors and lead-time uncertainty |
| Replenishment | More frequent adjustments may be necessary |
| Monitoring | Regular trend and variance reviews |

Example:

Plasticizer consumption increases during high-volume production months.

If we only use a six-month average, we might underestimate consumption during peak production.

## 7.3 Z Items: Highly Irregular Demand

Characteristics:

- High demand variability.
- Possible intermittent consumption.
- Difficult to predict through simple averages.

Possible strategies:

| Area | Planning Approach |
|---|---|
| Forecasting | Use production orders or event-based requirements where appropriate |
| Safety Stock | Evaluate item-specific risks instead of automatically increasing stock |
| Replenishment | Consider order-based or demand-triggered purchasing |
| Monitoring | Closely review upcoming requirements and supplier availability |

Example:

A special additive is only needed for a particular product model.

Instead of maintaining a large quantity every month, the company may procure it according to the approved production schedule.

### Important distinction: High CV does not automatically mean high safety stock.

Safety stock should consider several factors:

- Demand uncertainty.
- Supplier lead-time variability.
- Desired service level.
- Material criticality.
- Stockout consequences.
- Shelf life and obsolescence risk.

XYZ classification helps identify uncertainty, but it does not independently determine the correct safety stock quantity.

---

# 8. ABC-XYZ Combined Classification

This is where the methodology becomes more powerful.

Remember:

- ABC = Financial importance.
- XYZ = Demand predictability.

When combined, companies can classify inventory into nine categories.

## 8.1 The Nine Combinations

**ABC-XYZ Classification Matrix**

Rows represent financial importance. Columns represent demand variability.

| ABC / XYZ | X | Y | Z |
|---|---|---|---|
| A | AX | AY | AZ |
| B | BX | BY | BZ |
| C | CX | CY | CZ |

## 8.2 Understanding Each Combination

| Classification | Interpretation | Possible Management Approach |
|---|---|---|
| AX | High-value, stable demand | Close financial control and systematic replenishment |
| AY | High-value, fluctuating demand | Frequent forecast review and careful inventory planning |
| AZ | High-value, irregular demand | Detailed order review and strong management attention |
| BX | Medium-value, stable demand | Standard replenishment controls |
| BY | Medium-value, fluctuating demand | Periodic forecast adjustment |
| BZ | Medium-value, irregular demand | Demand-triggered planning where appropriate |
| CX | Low-value, stable demand | Simple, efficient replenishment |
| CY | Low-value, fluctuating demand | Practical periodic review |
| CZ | Low-value, highly irregular demand | Minimize unnecessary stock while protecting critical requirements |

### 8.3 Why AZ Is Particularly Important

Imagine a raw material with:

- High annual consumption value.
- Very irregular consumption.
- Long supplier lead time.

This is an AZ item.

Why is it challenging?

Because the material is financially significant, but its demand is difficult to predict.

If we overstock, we tie up substantial working capital.

If we understock, we may interrupt production.

Therefore, AZ items often require closer coordination between:

- Demand Planning.
- Supply Planning.
- Procurement.
- Production Planning.
- Finance.

This is an excellent example of why ABC and XYZ should be used together.

### 8.4 Important Difference Between the Two Methods

Let's compare two materials:

| Characteristic | Material A | Material B |
|---|---|---|
| ABC | A | C |
| XYZ | X | Z |
| Combined | AX | CZ |
| Financial Value | High | Low |
| Demand Behavior | Stable | Irregular |

Material A is financially important and relatively predictable.

Material B has low financial importance but highly irregular consumption.

They should not necessarily receive the same level of management attention.

---

# 9. XYZ Classification in S&OP Decisions

Now let's look at this from the perspective of an S&OP analyst.

Hindi lang objective ng S&OP na malaman kung gaano karaming inventory ang available.

We also need to understand whether the inventory is sufficient to support future demand.

XYZ classification provides an additional layer of information for that decision.

## 9.1 Forecasting Decisions

| Category | Forecasting Considerations |
|---|---|
| X | Historical patterns may provide a reliable baseline |
| Y | Consider seasonality, production changes, and demand trends |
| Z | Investigate specific orders, intermittent demand, and unusual consumption events |

For X items, historical consumption may be useful.

For Y items, we need to investigate what drives the fluctuations.

For Z items, a simple average may produce misleading forecasts.

## 9.2 Replenishment Decisions

XYZ classification can influence how frequently materials are reviewed and replenished.

For example:

- X: Regular replenishment based on established consumption patterns.
- Y: Adjust replenishment based on changing production requirements.
- Z: Consider order-based purchasing or specific demand triggers.

But remember, supplier lead time and minimum order quantity must also be considered.

## 9.3 Safety Stock Decisions

Consider two materials:

| Factor | Material A | Material B |
|---|---:|---:|
| Mean monthly consumption | 1,000 kg | 500 kg |
| CV | 10% | 150% |
| XYZ | X | Z |

Material B has greater relative variability.

However, we cannot immediately conclude that Material B requires more safety stock.

We still need to determine:

1. How frequently is the material required?
2. How long does the supplier take to deliver?
3. What happens if it becomes unavailable?
4. Is the material interchangeable?
5. Can it be purchased when a production order is released?

The objective is to balance inventory availability against inventory carrying costs.

## 9.4 Inventory Risk Prioritization

A useful way to approach inventory risk is to combine:

- Financial importance (ABC).
- Demand variability (XYZ).
- Supplier lead time.
- Material criticality.
- Shelf life.
- Current inventory position.

For example:

An AZ material with a long lead time and high production criticality deserves more attention than a CZ material with a short lead time and readily available alternative.

This is where classification becomes a practical decision-making tool rather than just a spreadsheet exercise.

---

# 10. Important Calculation Considerations and Common Errors

Before we proceed to exercises, let's review common mistakes.

| Common Mistake | Why It Is Wrong | Correct Approach |
|---|---|---|
| Using SD alone to compare materials | Ignores differences in average consumption | Use CV for relative variability |
| Treating CV thresholds as universal | Companies have different demand characteristics | Establish documented classification policies |
| Ignoring zero-consumption periods | Can distort the interpretation of demand | Investigate intermittent consumption |
| Using too little historical data | May not capture normal demand patterns | Select a suitable historical period |
| Mixing units | Creates invalid comparisons | Use consistent units for each material |
| Automatically increasing Z-item safety stock | May create excess inventory | Evaluate actual demand and supply risks |
| Confusing consumption with demand | Stockouts can suppress recorded consumption | Investigate lost or constrained demand |

### Special Case 1: Zero Average Demand

Consider a material with:

0, 0, 0, 0, 0 kg.

Mean = 0.

Therefore:

\[
CV=\frac{SD}{0}
\]

The calculation is undefined.

We cannot assign a meaningful CV using this formula.

The item requires separate investigation.

### Special Case 2: Very Low Average Demand

Consider:

0, 0, 0, 0, 100 kg.

Mean = 20 kg.

The variability relative to the average will be extremely high.

This may classify the item as Z.

However, it might simply represent a material consumed for one special production order.

This is why CV should not be interpreted without understanding the business context.

### Special Case 3: Too Little Historical Data

Suppose we only have two months of consumption data.

A CV calculated from two observations may not represent the item's long-term demand behavior.

The analyst should consider whether the observation period is sufficient and representative.

---

# 11. Business Perspective: How an S&OP Analyst Uses XYZ

Let's bring everything together.

Imagine that you are preparing the monthly S&OP inventory review.

You have hundreds of raw materials.

Hindi practical na isa-isahin mo ang lahat ng materials without prioritization.

XYZ classification helps you organize the inventory according to demand behavior.

Your analysis might look like this:

| Item | ABC | XYZ | Main Concern | Recommended Focus |
|---|---|---|---|---|
| BT Powder | A | X | High financial exposure | Maintain reliable supply and control inventory value |
| Binder | B | X | Regular consumption | Standard replenishment |
| Plasticizer | B | Y | Consumption fluctuations | Review production mix and forecasts |
| Special Additive | A | Z | High value, intermittent use | Coordinate procurement with production orders |
| Cleaning Chemical | C | Y | Variable consumption | Monitor usage and avoid unnecessary purchases |

An S&OP analyst can use this information to identify:

- Which materials need closer forecasting attention.
- Which materials are suitable for regular replenishment.
- Which materials require order-based purchasing.
- Which materials may be exposed to excess inventory.
- Which materials could create production interruptions.
- Which inventory items deserve management attention.

**The ultimate objective is not to maximize inventory or minimize inventory blindly.**

It is to maintain the appropriate inventory level based on demand behavior, supply constraints, business importance, and customer requirements.

---

# 12. Key Takeaways

Let's consolidate the most important concepts.

| Concept | What You Should Remember |
|---|---|
| XYZ Classification | Classifies inventory based on demand variability |
| X | Low variability, relatively predictable |
| Y | Moderate variability, fluctuating |
| Z | High variability, irregular |
| Mean | Average consumption |
| Standard Deviation | Absolute spread of consumption |
| CV | Relative variability compared with average |
| ABC | Financial importance |
| ABC-XYZ | Combines financial importance and demand predictability |

**Three formulas to remember:**

Mean:

\[
\bar{x}=\frac{\sum x_i}{n}
\]

Population Standard Deviation:

\[
\sigma=\sqrt{\frac{\sum(x_i-\mu)^2}{N}}
\]

Coefficient of Variation:

\[
CV=\frac{\sigma}{\mu}\times100
\]

And three important principles:

1. High standard deviation does not automatically mean high relative variability.
2. High CV does not automatically mean more safety stock.
3. High variability requires investigation, not simply more inventory.

---

# 13. Knowledge Check and Exercises

**Your turn: Apply what you've learned**

Now let's check whether you can apply XYZ Classification independently.

I will not reveal the answers yet. Sagutan mo muna, then I will evaluate your answers, explain any mistakes, and help you develop the correct analytical approach.

## Exercise 1: Conceptual Understanding

**Question 1.** What is the main difference between ABC Classification and XYZ Classification?

**Question 2.** Why is Material A with a standard deviation of 100 kg potentially more stable than Material B with a standard deviation of 50 kg?

**Question 3.** Why can a material with intermittent consumption be classified as Z even if it is only required occasionally?

**Question 4.** Why should an S&OP analyst investigate zero consumption before concluding that a material has no demand?

## Exercise 2: XYZ Calculation

A manufacturing company recorded the following monthly consumption for three materials.

**Illustrative data | kg per month**

| Month | Material A | Material B | Material C |
|---|---:|---:|---:|
| January | 900 | 500 | 0 |
| February | 1,000 | 1,000 | 2,000 |
| March | 1,100 | 1,500 | 0 |
| April | 1,000 | 1,000 | 1,000 |
| May | 1,000 | 500 | 0 |
| June | 1,000 | 1,500 | 3,000 |

Using population standard deviation and the illustrative thresholds:

- X: CV ≤ 50%
- Y: 50% less than CV ≤ 100%
- Z: CV greater than 100%

Calculate the following:

1. Mean consumption of each material.
2. Population standard deviation of each material.
3. Coefficient of Variation of each material.
4. XYZ classification of each material.

You can use this table as your answer sheet:

| Material | Mean (kg) | SD (kg) | CV (%) | XYZ |
|---|---:|---:|---:|---|
| A | | | | |
| B | | | | |
| C | | | | |

## Exercise 3: Business Analysis

A company has two inventory items:

| Characteristic | Material X | Material Z |
|---|---|---|
| ABC Classification | A | C |
| XYZ Classification | X | Z |
| Supplier Lead Time | 60 days | 7 days |
| Material Criticality | High | Low |
| Consumption | Stable | Intermittent |

Answer the following:

1. Which material should receive greater management attention? Explain your reasoning.
2. Should Material Z automatically have higher safety stock because it is classified as Z?
3. What replenishment strategy would you recommend for each material?
4. What additional information would you request before finalizing the inventory strategy?

---

## Before We Proceed to Topic 5.11

You should now be comfortable with these three layers of inventory analysis:

### ABC Classification
Financial importance of inventory.

### XYZ Classification
Demand variability and predictability.

### Excess and Obsolete Inventory
Identifying and managing unnecessary, excess, or unusable inventory.

The next topic will connect directly to what we learned here.

For example, an item with irregular consumption, poor demand forecasting, and excessive purchasing may eventually become excess inventory or even obsolete stock.

**But we will not proceed yet.** Unahin muna natin ang knowledge check. Once you submit your answers, I will evaluate them and help you strengthen your understanding of XYZ Classification before moving forward.
