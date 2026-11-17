# Module 5 – Inventory Management
## Topic 5.4: Average Daily Usage (ADU)

**Level 1 → Level 2 → Level 3**  
**S&OP Fundamentals**

**Learning objective:** Understand how companies measure the average rate of inventory consumption and use that information to make better inventory, replenishment, and supply chain decisions.

In our previous topic, **Topic 5.3: Inventory Position**, we learned how to determine the actual inventory situation by considering:

- Inventory on hand
- Incoming supply
- Existing demand commitments

Now, we will introduce another important question:

**How quickly is the inventory being consumed?**

Knowing that a company has 10,000 kg of raw materials is useful. But knowing whether those 10,000 kg will last 10 days, 20 days, or 50 days is even more useful.

That is where Average Daily Usage (ADU) comes in.

---

# 1. Topic Overview

## 1.1 What is Average Daily Usage?

Average Daily Usage (ADU) measures the average quantity of inventory consumed per day over a selected period.

In simple terms:

**ADU tells us how much inventory a company normally uses every day.**

For example, imagine a manufacturing company that consumes 3,000 kg of resin over 30 calendar days.

Its average daily usage is:

\[
ADU=\frac{3,000\text{ kg}}{30\text{ days}}
\]

\[
\boxed{ADU=100\text{ kg/day}}
\]

This means the company consumes an average of 100 kg of resin per calendar day.

Take note: It does not necessarily mean the company consumes exactly 100 kg every day. Actual consumption may be 80 kg today, 120 kg tomorrow, and 95 kg the following day.

ADU simply represents the average consumption rate.

## 1.2 Why is ADU important?

Companies need to understand how quickly their inventory moves because inventory is constantly being consumed, replenished, and replenished again.

ADU helps companies:

1. Measure the rate of inventory consumption.
2. Estimate how long existing inventory will last.
3. Determine when replenishment may be necessary.
4. Identify unusual increases or decreases in material usage.
5. Support inventory planning and supply-demand alignment.
6. Estimate future material requirements.

## 1.3 Connection to S&OP

ADU connects inventory management with demand and supply planning.

Consider this relationship:

**Demand / Production Requirements**  
How much product do we need to produce or deliver?

↓  

**Average Daily Usage (ADU)**  
How much inventory do we consume per day?

↓

**Inventory Coverage / Days of Supply**  
How many days can our inventory support operations?

↓

**Replenishment and Supply Decisions**  
When and how much should we replenish?

ADU is especially important because it will become one of the main inputs for our next topic, **Days of Supply (DOS)**.

---

# 2. Layman's Explanation

## 2.1 Think of ADU as your daily rice consumption

Imagine that you have a 10 kg sack of rice.

You want to know how long it will last.

During the last 10 days, you consumed 5 kg of rice.

Your average daily consumption is:

\[
\frac{5\text{ kg}}{10\text{ days}}=0.5\text{ kg/day}
\]

Therefore, your rice consumption rate is 0.5 kg per day.

If your remaining rice is 10 kg, you can estimate:

\[
\frac{10\text{ kg}}{0.5\text{ kg/day}}=20\text{ days}
\]

Your rice supply can theoretically last 20 days if your consumption rate remains the same.

Now imagine applying the same concept to a manufacturing company.

Instead of rice, the company manages:

- Raw materials
- Chemicals
- Packaging materials
- Components
- Finished goods

Instead of household consumption, the company has manufacturing requirements and customer demand.

The principle remains the same:

**Inventory quantity tells us how much we have. ADU tells us how fast we use it.**

## 2.2 Understanding the difference between quantity and consumption rate

Let's compare two manufacturing companies.

| Information | Company A | Company B |
|---|---:|---:|
| Inventory available | 10,000 kg | 10,000 kg |
| Daily consumption | 500 kg | 250 kg |
| Estimated coverage | 20 days | 40 days |

Both companies have the same inventory.

However, Company A consumes materials twice as fast as Company B.

This means Company A has a greater replenishment urgency.

This is why inventory quantity alone is insufficient for inventory management.

---

# 3. Technical Explanation

## 3.1 Formal Definition

Average Daily Usage (ADU) is the average quantity of inventory consumed per day during a defined historical or projected period.

It is commonly expressed in units such as:

- kg/day
- liters/day
- pieces/day
- rolls/day
- units/day
- meters/day

The unit depends on the inventory being analyzed.

For example:

| Inventory | Possible ADU Unit |
|---|---|
| Resin | kg/day |
| Chemical solvent | liters/day |
| Electronic components | pieces/day |
| Packaging materials | rolls/day |
| Steel sheets | sheets/day |
| Finished goods | units/day |

**Important:** ADU must use a consistent unit of measurement.

For example, do not divide inventory consumption measured in kilograms by a quantity of days and then interpret the result as pieces per day.

## 3.2 Four important terms: Usage, Consumption, Demand, and Sales

These terms are related, but they do not mean exactly the same thing.

| Term | Meaning | Manufacturing example |
|---|---|---|
| Usage | Quantity of inventory used for an activity | 500 kg of resin issued to production |
| Consumption | Quantity of inventory actually consumed or depleted | 480 kg of resin consumed |
| Demand | Quantity required by customers or internal operations | Production requires 600 kg |
| Sales | Quantity of products sold to customers | 1,000 finished units sold |

Let's understand the differences.

**A. Usage**

Usage refers to the utilization of a material or inventory item.

Example: Production receives 500 kg of resin from the warehouse.

**B. Consumption**

Consumption refers to the quantity actually used up.

Example: Production receives 500 kg but only consumes 480 kg. The remaining 20 kg is returned to the warehouse.

**C. Demand**

Demand represents the quantity required or requested.

Example: The production plan requires 600 kg of resin next week.

Demand is not automatically equal to actual consumption. There could be production delays, shortages, or changes in the production schedule.

**D. Sales**

Sales refer to products sold to customers.

Example: The company sells 10,000 electronic components.

Sales do not necessarily equal material consumption because production may manufacture products ahead of customer orders or use inventory already available.

### Why does this distinction matter?

Suppose a company has the following information:

| Metric | Quantity |
|---|---:|
| Customer demand | 10,000 units |
| Production output | 8,000 units |
| Material consumption | 2,400 kg |
| Finished goods shipments | 7,500 units |

These numbers describe different business activities.

If you want to calculate the ADU of raw materials, you should generally use the relevant raw material consumption data.

If you want to calculate the ADU of finished goods, you may use finished goods shipments or actual demand, depending on the planning purpose.

Using the wrong data source can produce an incorrect inventory coverage calculation.

---

# 4. Detailed Discussion

## 4.1 Types and Sources of Usage Data

Before calculating ADU, we need to identify where the usage data comes from.

Hindi lahat ng inventory pare-pareho ang source ng consumption data.

For example, raw materials are consumed during production, while finished goods are depleted when shipped to customers or otherwise issued.

### A. Historical Material Consumption

This is the actual quantity of materials consumed during a previous period.

Example:

A manufacturing company recorded the following resin consumption:

| Week | Actual consumption |
|---|---:|
| Week 1 | 2,500 kg |
| Week 2 | 2,700 kg |
| Week 3 | 2,600 kg |
| Week 4 | 2,800 kg |
| **Total** | **10,600 kg** |

This information can come from:
- ERP inventory transactions
- Material issue records
- Production consumption reports
- Warehouse transactions
- Manufacturing execution systems (MES)

**When to use it:** When analyzing the historical consumption rate of raw materials.

### B. Production-Related Material Usage

This approach uses production output and material requirements to estimate material usage.

For example:

A factory produces 5,000 units of an electronic component.

Each finished unit requires 0.2 kg of a particular raw material.

Expected material requirement:

\[
5,000\times0.2=1,000\text{ kg}
\]

This can help estimate consumption when actual transaction data is incomplete or when preparing a production-based forecast.

However, actual consumption may differ because of:
- Scrap
- Material yield
- Process losses
- Rework
- Production efficiency

### C. Finished Goods Demand or Shipments

For finished goods inventory, consumption is often represented by shipments, sales, or customer demand.

Example:

| Week | Finished goods shipments |
|---|---:|
| Week 1 | 1,000 units |
| Week 2 | 1,200 units |
| Week 3 | 1,100 units |
| Week 4 | 1,300 units |
| **Total** | **4,600 units** |

This data helps estimate how quickly finished goods inventory is being depleted to fulfill customer requirements.

However, shipments and demand are not always equal.

For example, if customers request 1,500 units but the company can only ship 1,000 units because of a shortage, shipment-based ADU may understate actual demand.

### D. Actual versus Forecasted Usage

There are two important ways to measure ADU.

| Basis | Description | Purpose |
|---|---|---|
| Actual ADU | Based on recorded historical consumption | Understand what actually happened |
| Forecasted ADU | Based on expected future requirements | Estimate future inventory needs |

Example:

- Actual ADU: 100 kg/day
- Forecasted ADU: 130 kg/day

This indicates that the company expects future consumption to increase.

Possible reasons include higher production volume, increased customer demand, or a change in product mix.

**Important distinction:** Historical ADU is backward-looking. Forecasted ADU is forward-looking.

An S&OP analyst should not automatically assume that historical consumption will continue at the same rate.

## 4.2 Choosing the Appropriate Data Source

The correct source depends on the type of inventory being analyzed.

| Inventory type | Preferred usage data | Alternative |
|---|---|---|
| Raw materials | Actual material consumption | Production-based material requirements |
| Work-in-process | Actual material or process movement, depending on item definition | Production transactions |
| Finished goods | Actual shipments or demand | Sales history |
| Packaging materials | Actual packaging consumption | Production output × packaging requirement |
| Spare parts | Actual maintenance issues | Forecasted maintenance requirements |

A practical rule:

**Use the data that best represents how the specific inventory is depleted or required.**

For example, using customer shipments to calculate raw material ADU can be misleading because raw material consumption also depends on production timing, yield, and inventory buffers.

## 4.3 ADU Calculation Methods

Now that we understand the data sources, let's discuss the different ways to calculate ADU.

There is more than one calculation method because companies have different planning requirements.

### Method 1: Basic Average Daily Usage

The simplest method divides total usage by the number of days in the selected period.

\[
\boxed{ADU=\frac{\text{Total Usage}}{\text{Number of Days}}}
\]

Example:

- Total consumption: 6,000 kg
- Period: 30 days

\[
ADU=\frac{6,000}{30}
\]

\[
\boxed{ADU=200\text{ kg/day}}
\]

Interpretation:

The company consumes an average of 200 kg of raw material per calendar day.

This is useful for basic inventory coverage calculations.

### Method 2: ADU Based on Historical Consumption

Instead of using one month's consumption, a company can analyze multiple historical periods.

Example:

| Month | Consumption |
|---|---:|
| January | 5,000 kg |
| February | 5,600 kg |
| March | 6,000 kg |

Assume each month has 30 calendar days for this illustration.

Total consumption:

\[
5,000+5,600+6,000=16,600\text{ kg}
\]

Total days:

\[
30+30+30=90\text{ days}
\]

Therefore:

\[
ADU=\frac{16,600}{90}
\]

\[
\boxed{ADU=184.44\text{ kg/day}}
\]

This method considers the complete historical period.

**Why is this useful?**

It reduces the influence of individual days or weeks with unusually high or low consumption.

However, it can also hide recent changes in demand.

For example, if consumption has been increasing every month, a three-month average may underestimate the current consumption rate.

### Method 3: Simple Average versus Weighted Average

This is an important distinction.

**A. Simple Average**

A simple average gives equal importance to each period.

Suppose the company has these monthly ADU values:

| Month | ADU |
|---|---:|
| January | 100 kg/day |
| February | 150 kg/day |
| March | 200 kg/day |

The simple average is:

\[
ADU=\frac{100+150+200}{3}
\]

\[
\boxed{ADU=150\text{ kg/day}}
\]

Each month contributes equally, regardless of the number of days or the volume consumed.

**B. Weighted Average**

A weighted average accounts for differences in the size or duration of each period.

For ADU, a common approach is to divide total consumption by total days across all selected periods.

\[
\boxed{Weighted\ ADU=
\frac{\sum Consumption}{\sum Days}}
\]

Let's use a different example:

| Month | Consumption | Days | Monthly ADU |
|---|---:|---:|---:|
| January | 3,000 kg | 30 | 100 kg/day |
| February | 5,600 kg | 28 | 200 kg/day |
| March | 6,200 kg | 31 | 200 kg/day |

Simple average:

\[
\frac{100+200+200}{3}
=166.67\text{ kg/day}
\]

Weighted average:

\[
\frac{3,000+5,600+6,200}{30+28+31}
\]

\[
=\frac{14,800}{89}
\]

\[
\boxed{166.29\text{ kg/day}}
\]

The results are slightly different because each month has a different number of days.

**When should we use each method?**

| Method | Best application |
|---|---|
| Simple average | When each period should receive equal importance |
| Weighted average | When calculating the actual average consumption rate across unequal periods |

For inventory planning, total consumption divided by total days is often more representative of the overall historical consumption rate.

But remember: a weighted average does not automatically make the result more predictive of future consumption.

### Method 4: Calendar Days versus Working Days

This is one of the most important decisions when calculating ADU.

Companies operate under different production schedules.

Some operate 24/7, while others operate five or six days per week.

Let's compare two approaches.

**A. Calendar-Day ADU**

Includes all days:
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
- Saturday
- Sunday

Formula:

\[
ADU_{calendar}=
\frac{\text{Total Consumption}}{\text{Calendar Days}}
\]

Example:

- Total consumption: 12,000 kg
- Period: 30 calendar days

\[
ADU=\frac{12,000}{30}
\]

\[
\boxed{400\text{ kg/day}}
\]

**B. Working-Day ADU**

Includes only the days when the relevant operation is scheduled to work.

Formula:

\[
ADU_{working}=
\frac{\text{Total Consumption}}{\text{Working Days}}
\]

Assume the company operated for 22 working days during the same 30-day period.

\[
ADU=\frac{12,000}{22}
\]

\[
\boxed{545.45\text{ kg/working day}}
\]

Notice the difference:

| Calculation | ADU |
|---|---:|
| Calendar days | 400 kg/day |
| Working days | 545.45 kg/day |

Same consumption, different denominator.

**Which one is correct?**

Neither is universally correct. It depends on what you are trying to measure.

- Calendar-day ADU is useful for inventory coverage across the entire calendar.
- Working-day ADU is useful for understanding consumption intensity during scheduled production days.

For example, if inventory must support a 10-calendar-day supplier lead time, calendar-day consumption may be more appropriate.

If the objective is to estimate how much material production will consume during 10 actual production days, working-day ADU may be more appropriate.

**Important planning reminder**

Never mix calendar-day ADU with working-day coverage without adjusting the assumptions.

Your consumption rate and the number of days must use compatible time bases.

### Method 5: Handling Zero Usage and Abnormal Consumption

Historical data is not always clean.

Consider this situation:

| Day | Consumption |
|---|---:|
| Monday | 100 kg |
| Tuesday | 110 kg |
| Wednesday | 0 kg |
| Thursday | 120 kg |
| Friday | 170 kg |

Should we include Wednesday's zero consumption?

It depends on what happened.

**Case A: Scheduled Shutdown**

If Wednesday was a planned shutdown, zero consumption is a valid historical observation.

If we are measuring calendar-day ADU, include that day.

If we are measuring working-day ADU for days when production actually operated, exclude it from the working-day denominator.

**Case B: Material Shortage**

If production was scheduled but could not operate because of insufficient material, zero consumption does not necessarily mean zero demand.

This is important because historical consumption may understate the actual requirement.

**Case C: Abnormal Consumption**

Suppose Thursday's actual consumption suddenly reaches 500 kg instead of the normal 100 to 120 kg.

Possible reasons:
- Material loss
- Process abnormality
- Scrap or rework
- Incorrect transaction
- One-time production requirement

An analyst should investigate the unusual value before deciding whether to include it.

Do not automatically delete unusual data points.

First determine whether they represent genuine consumption or data errors.

## 4.4 Factors Affecting ADU

ADU is not always constant. It changes as business and operational conditions change.

Let's examine the major factors.

### A. Demand Fluctuations and Seasonality

When customer demand increases, production requirements may also increase.

Example:

| Period | ADU |
|---|---:|
| January | 100 kg/day |
| February | 110 kg/day |
| March | 130 kg/day |
| April | 160 kg/day |

The increasing ADU may indicate growing demand.

However, we should investigate whether the increase is:
- Permanent growth
- Seasonal demand
- Temporary customer orders
- A one-time production requirement

Why does this matter?

If the increase is temporary, permanently increasing inventory targets could result in excess inventory after demand returns to normal.

### B. Production Volume and Product Mix

Different products consume different quantities of materials.

Suppose a factory manufactures two products:

| Product | Material requirement per unit |
|---|---:|
| Product A | 0.5 kg |
| Product B | 1.0 kg |

If the production mix changes from mostly Product A to mostly Product B, material consumption increases even if total production volume remains unchanged.

Example:

| Scenario | Product A | Product B | Total consumption |
|---|---:|---:|---:|
| Scenario 1 | 1,000 units | 1,000 units | 1,500 kg |
| Scenario 2 | 500 units | 1,500 units | 1,750 kg |

Both scenarios produce 2,000 units.

However, Scenario 2 consumes 250 kg more material because of the product mix.

This is why S&OP analysts should consider not only total production volume but also product mix.

### C. Material Yield, Scrap, and Process Losses

Manufacturing processes do not always convert 100% of raw materials into finished products.

Let's assume:

- Required good output: 1,000 units
- Material requirement per good unit: 0.5 kg
- Material yield: 95%

Theoretical material requirement before yield adjustment:

\[
1,000\times0.5=500\text{ kg}
\]

Actual material requirement after accounting for yield:

\[
\frac{500}{0.95}=526.32\text{ kg}
\]

The company needs approximately 526.32 kg instead of 500 kg.

This means lower yield increases material consumption for the same quantity of good output.

A sudden increase in ADU could therefore be caused by deteriorating manufacturing efficiency rather than higher customer demand.

### D. Business Growth or Decline

As business volume changes, material usage may also change.

- Business growth can increase ADU.
- Reduced customer orders can decrease ADU.
- Product discontinuation can reduce material requirements.
- New product introductions can increase material requirements.

An analyst should distinguish between a temporary fluctuation and a structural change in consumption.

### E. Promotions, Shutdowns, and Unusual Consumption

Special business events can affect ADU.

| Event | Potential effect |
|---|---|
| Customer promotion | Temporary increase in consumption |
| Plant shutdown | Decrease in actual consumption |
| Preventive maintenance | Possible temporary decrease |
| Large customer order | Temporary increase |
| Equipment malfunction | Increased scrap and material usage |
| New product launch | Change in material requirements |

**Key lesson:** ADU is a measurement, not an explanation.

Kapag tumaas ang ADU, hindi ibig sabihin na tumaas agad ang customer demand. Kailangan nating malaman kung ano ang dahilan ng pagbabago.

---

# 5. Formulas and Calculations

Now let's organize the formulas into a practical reference.

## 5.1 Basic Average Daily Usage

\[
\boxed{ADU=\frac{U}{D}}
\]

Where:

| Variable | Definition | Unit |
|---|---|---|
| ADU | Average Daily Usage | kg/day, units/day, etc. |
| U | Total inventory consumption | kg, units, etc. |
| D | Number of days | Days |

**Example:**

A factory consumed 9,000 kg of raw material over 30 days.

Step 1: Identify total consumption.

\[
U=9,000\text{ kg}
\]

Step 2: Identify the period.

\[
D=30\text{ days}
\]

Step 3: Calculate.

\[
ADU=\frac{9,000}{30}
\]

\[
\boxed{ADU=300\text{ kg/day}}
\]

Interpretation: The factory consumes an average of 300 kg per calendar day.

**Limitation:** This method assumes the selected historical period is reasonably representative of the consumption rate being analyzed.

## 5.2 Average Daily Consumption Using Working Days

\[
\boxed{ADU_{working}=
\frac{U}{D_w}}
\]

Where:

- \(U\) = Total consumption
- \(D_w\) = Actual working days

Example:

A factory consumed 9,000 kg over 22 production days.

\[
ADU_{working}=\frac{9,000}{22}
\]

\[
\boxed{409.09\text{ kg/working day}}
\]

Interpretation: During scheduled operating days, the factory consumes approximately 409.09 kg per day.

Limitation: This does not represent the average consumption across calendar days.

## 5.3 ADU Using Different Historical Periods

Companies can select different historical windows depending on the planning purpose.

Consider the following data:

| Period | Consumption | Calendar days |
|---|---:|---:|
| Last 30 days | 9,000 kg | 30 |
| Last 60 days | 17,000 kg | 60 |
| Last 90 days | 24,000 kg | 90 |

Calculate each ADU:

**Last 30 days:**

\[
ADU_{30}=\frac{9,000}{30}
=\boxed{300\text{ kg/day}}
\]

**Last 60 days:**

\[
ADU_{60}=\frac{17,000}{60}
=\boxed{283.33\text{ kg/day}}
\]

**Last 90 days:**

\[
ADU_{90}=\frac{24,000}{90}
=\boxed{266.67\text{ kg/day}}
\]

**ADU by Historical Period**

| Period | ADU |
|---|---:|
| 30 days | 300 kg/day |
| 60 days | 283.33 kg/day |
| 90 days | 266.67 kg/day |

### How do we interpret this?

The 30-day ADU is higher than the 60-day and 90-day ADUs.

This suggests that recent consumption has increased.

Possible explanations:
- Higher production volume
- Increased customer demand
- Change in product mix
- Higher material wastage

The shorter historical period reflects recent activity more strongly.

However, the 90-day period provides a broader historical perspective.

**Choosing the appropriate period:**

| Historical period | Advantage | Limitation |
|---|---|---|
| 30 days | More responsive to recent changes | More sensitive to abnormal activity |
| 60 days | Balances recent and historical behavior | May still lag sudden changes |
| 90 days | Provides broader historical perspective | May hide recent demand increases |

There is no universal rule that 30, 60, or 90 days is always correct.

The appropriate period depends on demand stability, seasonality, lead time, and company planning policy.

## 5.4 Weighted ADU

The general formula is:

\[
\boxed{Weighted\ ADU=
\frac{\sum U_i}{\sum D_i}}
\]

Where:

- \(U_i\) = Consumption during period \(i\)
- \(D_i\) = Number of days during period \(i\)

Example:

| Month | Consumption | Days |
|---|---:|---:|
| January | 2,000 kg | 20 |
| February | 3,600 kg | 24 |
| March | 4,500 kg | 30 |

Total consumption:

\[
2,000+3,600+4,500=10,100
\]

Total days:

\[
20+24+30=74
\]

Weighted ADU:

\[
\frac{10,100}{74}
\]

\[
\boxed{136.49\text{ kg/day}}
\]

For comparison, the simple average of the three monthly ADUs is:

\[
\frac{100+150+150}{3}=133.33
\]

**Technical note:** If all periods have exactly equal durations, the simple average of their ADUs and the weighted ADU will be identical.

## 5.5 Projected Usage Based on ADU

Once ADU is established, we can estimate future inventory consumption.

Formula:

\[
\boxed{Projected\ Usage=ADU\times T}
\]

Where:

- ADU = Average daily usage
- T = Future planning horizon in days

Example:

Assume:
- ADU = 300 kg/day
- Planning horizon = 15 days

\[
Projected\ Usage=300\times15
\]

\[
\boxed{4,500\text{ kg}}
\]

Interpretation:

If consumption remains at 300 kg/day, the company is expected to consume 4,500 kg over the next 15 calendar days.

### Important limitation

Projected usage is not automatically equal to actual future demand.

The calculation assumes:
- Consumption remains relatively stable.
- No major production changes occur.
- No significant change in product mix occurs.
- The material requirement per unit remains consistent.

If the production plan changes, projected usage should be adjusted accordingly.

## 5.6 Formula Reference Table

| Calculation | Formula |
|---|---|
| Basic ADU | \(U/D\) |
| Working-day ADU | \(U/D_w\) |
| Historical ADU | \(U_{period}/D_{period}\) |
| Weighted ADU | \(\sum U_i/\sum D_i\) |
| Projected usage | \(ADU\times T\) |

---

# 6. Practical Manufacturing Application

Let's apply everything to a realistic manufacturing situation.

## 6.1 Business Scenario

Imagine that you are an S&OP Analyst supporting a manufacturing facility that produces electronic components.

The company uses a raw material called **Material A**, measured in kilograms.

The supply chain team wants to understand its consumption rate because they have noticed that inventory is being depleted faster than expected.

You are given the following historical consumption data.

### Historical Material Consumption

| Week | Production days | Consumption |
|---|---:|---:|
| Week 1 | 5 | 2,000 kg |
| Week 2 | 5 | 2,250 kg |
| Week 3 | 5 | 2,500 kg |
| Week 4 | 5 | 2,750 kg |
| **Total** | **20** | **9,500 kg** |

For this example, assume each week covers seven calendar days and there are no additional production days.

## 6.2 Calculate Calendar-Day ADU

Total consumption:

\[
U=9,500\text{ kg}
\]

Total calendar days:

\[
D=4\times7=28\text{ days}
\]

Therefore:

\[
ADU_{calendar}=\frac{9,500}{28}
\]

\[
\boxed{ADU_{calendar}=339.29\text{ kg/day}}
\]

Interpretation:

The company consumes an average of 339.29 kg of Material A per calendar day.

## 6.3 Calculate Working-Day ADU

Total production days:

\[
D_w=20
\]

\[
ADU_{working}=\frac{9,500}{20}
\]

\[
\boxed{ADU_{working}=475\text{ kg/working day}}
\]

Interpretation:

Whenever production operates, it consumes an average of 475 kg of Material A.

Notice that this is higher than the calendar-day ADU because weekends are included in the calendar-day denominator but excluded from the working-day denominator.

## 6.4 Calculate Weekly ADU

We can also calculate the consumption rate for each individual week.

| Week | Consumption | Production days | ADU |
|---|---:|---:|---:|
| Week 1 | 2,000 kg | 5 | 400 kg/day |
| Week 2 | 2,250 kg | 5 | 450 kg/day |
| Week 3 | 2,500 kg | 5 | 500 kg/day |
| Week 4 | 2,750 kg | 5 | 550 kg/day |

**Weekly Material Consumption Rate**

| Week | Working-day ADU |
|---|---:|
| Week 1 | 400 kg/day |
| Week 2 | 450 kg/day |
| Week 3 | 500 kg/day |
| Week 4 | 550 kg/day |

What do we observe?

The consumption rate increases every week.

- Week 1: 400 kg/day
- Week 2: 450 kg/day
- Week 3: 500 kg/day
- Week 4: 550 kg/day

This represents a 37.5% increase from Week 1 to Week 4.

Calculation:

\[
\frac{550-400}{400}\times100
=37.5\%
\]

This is a significant increase that an S&OP analyst should investigate.

## 6.5 Compare Different ADU Methods

Now let's compare the results.

| Method | Result |
|---|---:|
| 28-day calendar ADU | 339.29 kg/day |
| 20-day working ADU | 475 kg/day |
| Simple average of weekly working ADUs | 475 kg/day |
| Weighted average of weekly working ADUs | 475 kg/day |

Why are the simple and weighted working-day averages equal?

Because all four weeks have exactly five working days.

But notice that the calendar-day ADU is considerably lower.

This illustrates why selecting the correct time basis is important.

## 6.6 Which ADU Should the Company Use?

It depends on the intended decision.

| Planning situation | Recommended starting point |
|---|---|
| Inventory coverage across calendar days | Calendar-day ADU |
| Estimating consumption on operating days | Working-day ADU |
| Understanding recent consumption increases | Recent weekly ADU |
| Understanding broader historical consumption | Longer historical ADU |
| Estimating future material requirements | Forward-looking production-based usage |

For this particular scenario, I would not rely exclusively on the 28-day calendar average.

Why?

Because the weekly working-day consumption rate is steadily increasing.

The historical average of 475 kg per working day may already be lower than the latest consumption rate of 550 kg per working day.

For near-term planning, the analyst should investigate the latest production requirements and determine whether the higher consumption rate is expected to continue.

## 6.7 Project Future Material Consumption

Assume the latest working-day ADU is used as a temporary planning assumption.

- Working-day ADU = 550 kg
- Upcoming production days = 10

\[
Projected\ Usage=550\times10
\]

\[
\boxed{5,500\text{ kg}}
\]

The company should expect to consume approximately 5,500 kg during the next 10 production days if the latest consumption rate continues.

Compare this with the historical working-day average:

\[
475\times10=4,750\text{ kg}
\]

Difference:

\[
5,500-4,750=750\text{ kg}
\]

If the company uses the older average instead of the more recent consumption rate, it may underestimate the requirement by 750 kg.

That can contribute to an unexpected material shortage.

However, we must validate whether the latest increase is sustainable before using it as the new planning baseline.

---

# 7. ADU in Inventory and S&OP Decisions

Now let's connect ADU to actual inventory management decisions.

## 7.1 ADU and Days of Supply (DOS)

This is the most direct relationship between ADU and our next topic.

Days of Supply (DOS) estimates how many days the available inventory can support consumption.

The basic relationship is:

\[
\boxed{DOS=\frac{Available\ Inventory}{ADU}}
\]

Where:

- Available Inventory = Inventory quantity available for use
- ADU = Average daily usage

Let's assume:

- Available inventory = 10,000 kg
- ADU = 500 kg/day

\[
DOS=\frac{10,000}{500}
\]

\[
\boxed{DOS=20\text{ days}}
\]

Interpretation:

At a consumption rate of 500 kg/day, the company has approximately 20 days of inventory coverage.

We will discuss the full DOS methodology, inventory definitions, and planning applications in Topic 5.5.

## 7.2 How ADU Supports Material Replenishment

ADU helps companies estimate the quantity of material required during a particular period.

For example:

- ADU = 500 kg/day
- Supplier lead time = 10 calendar days

Estimated consumption during lead time:

\[
500\times10=5,000\text{ kg}
\]

The company expects to consume approximately 5,000 kg while waiting for replenishment.

This is important when determining whether current inventory can support operations until the next delivery.

However, this 5,000 kg is only the expected consumption during lead time. It is not automatically the reorder point because a company may also need safety stock and must consider incoming supply and demand commitments.

## 7.3 How Changes in ADU Affect Inventory Coverage

Let's see what happens when consumption increases while inventory remains constant.

Assume available inventory is 10,000 kg.

| ADU | Inventory coverage |
|---:|---:|
| 200 kg/day | 50 days |
| 250 kg/day | 40 days |
| 400 kg/day | 25 days |
| 500 kg/day | 20 days |
| 625 kg/day | 16 days |

**Impact of ADU on Inventory Coverage**

| ADU | Days of Supply |
|---:|---:|
| 200 kg/day | 50 days |
| 250 kg/day | 40 days |
| 400 kg/day | 25 days |
| 500 kg/day | 20 days |
| 625 kg/day | 16 days |

The relationship is inversely proportional.

- Higher ADU = Lower inventory coverage.
- Lower ADU = Higher inventory coverage.

This means that even if the physical inventory quantity does not change, the inventory risk can change significantly.

## 7.4 How an S&OP Analyst Interprets Unusual ADU Changes

Imagine that the monthly ADU of a raw material increases from 300 kg/day to 450 kg/day.

That is a 50% increase.

Should the analyst immediately request more inventory?

Not necessarily.

The analyst should investigate the underlying reasons.

A useful analysis framework:

| Investigation area | Questions to ask |
|---|---|
| Demand | Did customer demand increase? |
| Production | Did the production schedule change? |
| Product mix | Are we producing more material-intensive products? |
| Yield | Did scrap or material losses increase? |
| Inventory transactions | Are there duplicate or incorrect material issues? |
| Operations | Was there a one-time production requirement? |
| Forecast | Is the higher usage expected to continue? |

### Example: Two different causes, same ADU increase

**Situation A: Demand-driven increase**

ADU increases because customer demand increases.

Possible response:
- Adjust material requirements.
- Coordinate with procurement.
- Review supplier capacity.
- Assess inventory coverage.
- Align production and demand plans.

**Situation B: Process-efficiency issue**

ADU increases because material yield deteriorates.

Possible response:
- Investigate process losses.
- Review scrap rates.
- Coordinate with manufacturing engineering.
- Correct material usage assumptions.
- Avoid automatically increasing the inventory target.

Notice the difference?

Both situations produce higher ADU, but the appropriate business response is different.

This is where an S&OP analyst adds value: not merely calculating numbers, but understanding what is driving them.

## 7.5 ADU and the Inventory Position from Topic 5.3

Let's connect the previous topic with our current discussion.

Suppose the company has:

| Inventory information | Quantity |
|---|---:|
| Inventory on hand | 12,000 kg |
| Incoming supply | 3,000 kg |
| Existing demand commitments | 2,000 kg |

Simplified inventory position:

\[
12,000+3,000-2,000
\]

\[
\boxed{13,000\text{ kg}}
\]

Now assume:

\[
ADU=500\text{ kg/day}
\]

The inventory position represents approximately:

\[
\frac{13,000}{500}=26\text{ days}
\]

This is an illustrative coverage calculation using inventory position.

It is not necessarily the same as DOS based on available inventory. For operational coverage, we must carefully consider whether incoming supply is confirmed and whether commitments have already been deducted.

**The connection is important:**

- Inventory Position tells us where inventory stands after considering supply and demand.
- ADU tells us how quickly inventory is consumed.
- DOS tells us how long the inventory can support consumption.

Together, they provide a more complete picture of inventory health.

---

# 8. Key Takeaways

Let's consolidate the most important concepts.

## 8.1 Core Concepts

| Concept | What to remember |
|---|---|
| ADU | Average quantity consumed per day |
| Historical ADU | Calculated using actual past consumption |
| Forecasted usage | Estimated future consumption |
| Calendar-day ADU | Includes all calendar days |
| Working-day ADU | Includes scheduled operating days |
| Simple average | Gives equal weight to each period |
| Weighted ADU | Accounts for differences in period duration or weights |
| Projected usage | ADU multiplied by future planning days |

## 8.2 Five Important Principles

1. **ADU is a consumption rate, not an inventory quantity.** It measures how quickly inventory is used.
2. **The correct data source matters.** Raw material consumption should not automatically be based on finished goods shipments.
3. **The denominator matters.** Calendar-day ADU and working-day ADU can produce very different results.
4. **Historical ADU is not automatically future demand.** Changes in production, product mix, yield, and customer demand can affect future consumption.
5. **Investigate unusual changes.** Higher ADU does not always mean higher customer demand. It could indicate manufacturing inefficiency, scrap, or transaction errors.

## 8.3 Professional Terminology to Remember

- Average Daily Usage (ADU)
- Historical Consumption
- Material Requirements
- Working Days
- Calendar Days
- Weighted Average
- Material Yield
- Scrap Rate
- Product Mix
- Consumption Rate
- Projected Usage
- Inventory Coverage
- Days of Supply (DOS)

---

# 9. Knowledge Check and Exercises

**Your turn: Apply what you learned.**

We will test your understanding through three learning levels.

Don't worry about getting everything correct. The objective is to develop your ability to explain, calculate, and interpret ADU like an actual S&OP Analyst.

**I will not reveal the answers yet.** Submit your answers first, then I will evaluate each one and explain any mistakes.

## Level 1 – Understanding

**Question 1.** In your own words, what is Average Daily Usage (ADU), and why is it important in inventory management?

**Question 2.** Explain the difference between the following:

- Inventory usage
- Actual consumption
- Demand
- Sales

Give a manufacturing example for at least two of them.

**Question 3.** A company has 10,000 kg of raw material inventory.

Which information would be more useful in determining how long the inventory will last?

A. Total inventory value

B. Average daily consumption

C. Total number of employees

D. Total production equipment

Explain your answer.

## Level 2 – Technical Application

**Question 4. Basic ADU Calculation**

A manufacturing company consumed 15,000 kg of raw material over 30 calendar days.

Calculate:
1. Average Daily Usage.
2. Projected consumption for the next 15 calendar days, assuming the same ADU.

**Question 5. Calendar Days vs. Working Days**

A factory consumed 12,000 kg of material over a 30-calendar-day period. During that period, it operated for 22 working days.

Calculate:
1. Calendar-day ADU.
2. Working-day ADU.
3. Explain why the results are different.

**Question 6. Weighted ADU**

A company recorded the following consumption:

| Month | Consumption | Calendar days |
|---|---:|---:|
| January | 3,000 kg | 30 |
| February | 4,000 kg | 28 |
| March | 6,000 kg | 31 |

Calculate:
1. Monthly ADU for each month.
2. Simple average ADU.
3. Weighted ADU.

Which calculation better represents the actual average consumption rate across the entire three-month period?

## Level 3 – Professional Analysis

**Question 7. Investigating an ADU Increase**

An S&OP Analyst observes the following:

| Month | ADU |
|---|---:|
| January | 200 kg/day |
| February | 220 kg/day |
| March | 250 kg/day |
| April | 350 kg/day |

The manufacturing manager says that customer demand did not significantly increase.

Identify at least three possible reasons for the sudden increase in ADU and explain how you would investigate them.

**Question 8. Inventory Planning Decision**

A company has the following information:

| Metric | Value |
|---|---:|
| Available inventory | 12,000 kg |
| Historical ADU | 400 kg/day |
| Latest ADU | 600 kg/day |
| Supplier lead time | 20 calendar days |

Answer:

1. Calculate inventory coverage using historical ADU.
2. Calculate inventory coverage using latest ADU.
3. Calculate expected consumption during the 20-day lead time using latest ADU.
4. Is there a potential inventory shortage?
5. What actions would you recommend as an S&OP Analyst?

**Question 9. Critical Thinking**

A company experienced a significant increase in raw material ADU because of higher scrap and material losses.

Should the company simply increase its inventory target to accommodate the higher ADU?

Explain your reasoning from both:
- Inventory management perspective
- Manufacturing efficiency perspective

## Answer Submission

You can answer directly using this structure:

1. Q1 – ADU Fundamentals
2. Q2 – Usage vs. Consumption vs. Demand vs. Sales
3. Q3 – Inventory Management
4. Q4 – Basic ADU Calculation
5. Q5 – Calendar vs. Working Days
6. Q6 – Weighted ADU
7. Q7 – Investigating ADU Changes
8. Q8 – Inventory Planning Decision
9. Q9 – Professional Analysis

You can answer in your own words. Show your calculations for numerical questions.

Once you submit your answers, I will:

1. Evaluate each answer individually.
2. Correct incorrect calculations and explain the proper methodology.
3. Identify concepts you understand and areas that need improvement.
4. Assess your progress across the three learning levels.
5. Give you additional exercises if necessary.

---

# 10. Connection to the Next Topic: Topic 5.5 – Days of Supply (DOS)

Our next lesson will be **Module 5 – Topic 5.5: Days of Supply (DOS).**

There, we will combine what we learned about inventory quantities and ADU to determine how many days a company's inventory can support its operations.

For now, focus on mastering ADU. Hindi lang dapat marunong mag-compute. Dapat kaya mo ring ipaliwanag kung bakit nagbago ang consumption rate at kung anong business decision ang dapat gawin based on that change.
