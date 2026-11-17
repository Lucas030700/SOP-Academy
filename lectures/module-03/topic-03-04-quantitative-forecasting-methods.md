# MODULE 3 – DEMAND PLANNING
## Topic 3.4: Quantitative Forecasting Methods

**Learning Progression:** Level 1 – Understanding → Level 2 – Technical Application → Level 3 – Professional Analysis

**Main Focus:** Statistical Forecasting, Forecast Calculations, Method Selection, and Forecast Accuracy Evaluation

---

# 1. TOPIC OVERVIEW

### 1.1 What are we going to learn?

Sa previous topic, **Module 3 – Topic 3.3: Introduction to Demand Forecasting**, pinag-aralan natin kung ano ang demand forecasting, bakit kailangan itong gawin, at paano ginagamit ng businesses ang historical demand at iba pang information para mag-estimate ng future demand.

Ngayon, mas magiging technical tayo.

Instead of simply understanding what forecasting is, matututuhan natin kung paano talaga gumawa ng forecast gamit ang mathematical and statistical methods.

For example:

Imagine na nagtatrabaho ka bilang S&OP Analyst sa isang electronic components manufacturing company.

Mayroon kang historical customer demand:

| Month | Actual Demand |
|---|---:|
| January | 1,000 units |
| February | 1,050 units |
| March | 1,030 units |
| April | 1,080 units |
| May | 1,100 units |
| June | 1,120 units |

Your manager asks:

**"Based on our historical demand, how many units should we expect to sell next month?"**

Hindi sapat ang basta manghula.

Kailangan mong gumamit ng systematic approach para makabuo ng reasonable forecast.

Dito pumapasok ang quantitative forecasting methods.

### 1.2 Why is this topic important?

Ang quantitative forecasting ay nagbibigay ng mathematical foundation para sa demand planning.

Instead of relying entirely on intuition, ginagamit natin ang historical demand patterns para makabuo ng statistical forecast.

Mahalaga ito dahil ang forecast ay ginagamit bilang input sa:

| Business Function | How Forecasting Helps |
|---|---|
| Sales | Estimates expected customer demand. |
| Production | Determines how many units should be manufactured. |
| Procurement | Estimates future raw material requirements. |
| Inventory | Helps determine appropriate inventory levels. |
| Finance | Supports revenue and financial projections. |
| Capacity Planning | Helps determine future machine and labor requirements. |

### 1.3 Connection to the S&OP process

Sa S&OP, ang quantitative forecast ay karaniwang nagsisilbing starting point ng demand planning process.

Simplified workflow:

1. Collect historical demand.
2. Analyze demand patterns.
3. Select an appropriate forecasting method.
4. Generate a statistical forecast.
5. Evaluate forecast accuracy.
6. Review and adjust the forecast using relevant business information.
7. Present the demand plan during Demand Review.

**Important distinction:**

Ang statistical forecast ay hindi automatic na final demand plan.

It is a baseline forecast that can be reviewed and adjusted using additional information, such as customer orders, promotions, market conditions, and commercial intelligence.

---

# 2. LAYMAN'S EXPLANATION

## 2.1 Understanding Quantitative Forecasting

Let's start with a simple example.

Imagine na may maliit kang business na nagbebenta ng bottled water.

Napansin mo na:

- January: 100 bottles sold
- February: 110 bottles sold
- March: 120 bottles sold
- April: 130 bottles sold

Kung tatanungin ka kung ilan ang posibleng mabenta sa May, reasonable estimate na 140 bottles.

Bakit?

Dahil may pattern kang nakikita.

Every month, approximately 10 bottles ang nadadagdag sa demand.

That is the basic idea of quantitative forecasting.

**Quantitative Forecasting** is the process of using numerical historical data and mathematical methods to estimate future demand.

Ang keyword dito ay numerical data.

Hindi lang tayo basta tumitingin sa previous sales. Gumagamit tayo ng mathematical techniques para maintindihan ang historical pattern at i-project ito into the future.

## 2.2 Understanding Time-Series Data

Ano naman ang time-series data?

Simple lang.

Ito ay data na recorded according to time.

For example:

| Month | Demand |
|---|---:|
| January | 1,000 |
| February | 1,050 |
| March | 1,030 |
| April | 1,080 |
| May | 1,100 |

Notice na may dalawang importanteng information:

- Time: January, February, March, etc.
- Observation: 1,000, 1,050, 1,030, etc.

Ang bawat recorded demand value ay tinatawag na **historical observation**.

Kapag ginagamit natin ang historical observations para mag-estimate ng future demand, gumagawa tayo ng forecast.

For example:

| Month | Demand |
|---|---:|
| January | 1,000 |
| February | 1,050 |
| March | 1,030 |
| April | 1,080 |
| May | 1,100 |
| June | ? |

Ang June ang magiging forecast period.

### Important Terms

| Term | Meaning |
|---|---|
| Historical Data | Previously recorded demand information. |
| Historical Observation | Actual demand recorded during a specific period. |
| Time-Series Data | Numerical data organized chronologically. |
| Forecast Period | Future period for which demand is estimated. |
| Forecast Horizon | How far into the future we want to forecast. |
| Actual Demand | Realized customer demand. |
| Forecast Demand | Estimated future customer demand. |

## 2.3 Understanding Demand Patterns

Before using forecasting methods, kailangan muna nating maintindihan kung anong pattern ang mayroon sa historical demand.

Hindi lahat ng products ay pare-pareho ang demand behavior.

There are four fundamental demand patterns.

### A. Stable Demand

Stable demand means relatively consistent ang demand over time.

Example:

| Month | Demand |
|---|---:|
| January | 1,000 |
| February | 1,020 |
| March | 990 |
| April | 1,010 |
| May | 1,005 |

Mapapansin mo na halos pare-pareho ang demand.

May small fluctuations, pero walang obvious upward or downward direction.

**Business example:**

A manufacturer produces standard electronic components with relatively consistent monthly customer requirements.

Suitable forecasting methods may include:
- Naive Forecasting
- Simple Moving Average
- Simple Exponential Smoothing

### B. Trend

Trend means may consistent upward or downward movement ang demand over time.

Example:

| Month | Demand |
|---|---:|
| January | 1,000 |
| February | 1,100 |
| March | 1,200 |
| April | 1,300 |
| May | 1,400 |

Clearly, increasing ang demand.

This is an **upward trend**.

Kapag decreasing naman:

| Month | Demand |
|---|---:|
| January | 1,500 |
| February | 1,400 |
| March | 1,300 |
| April | 1,200 |
| May | 1,100 |

This is a **downward trend**.

**Business example:**

A newly launched electronic component is gaining customers every month.

Suitable forecasting methods may include:
- Linear Trend Projection
- Regression

### C. Seasonality

Seasonality means may recurring demand pattern during specific periods.

For example:

| Month | Demand |
|---|---:|
| January | 1,000 |
| February | 1,100 |
| March | 1,200 |
| April | 1,500 |
| May | 1,800 |
| June | 1,500 |
| July | 1,200 |
| August | 1,100 |
| September | 1,000 |
| October | 1,100 |
| November | 1,500 |
| December | 2,000 |

Notice na may recurring increases during certain periods.

Possible reasons:
- Seasonal customer requirements
- Holiday demand
- Weather conditions
- Annual production cycles
- Industry-specific purchasing patterns

**Business example:**

An electronic components supplier experiences higher demand during periods when customers prepare for major product launches.

Suitable forecasting methods include seasonal forecasting techniques.

### D. Variability

Variability refers to how much demand fluctuates over time.

Example:

| Month | Demand |
|---|---:|
| January | 1,000 |
| February | 1,500 |
| March | 900 |
| April | 1,800 |
| May | 1,100 |

Malaki ang fluctuations.

Walang obvious na stable pattern, trend, or recurring seasonal behavior.

Possible causes include:
- Irregular customer orders
- One-time bulk purchases
- Production shutdowns at customer facilities
- Market disruptions
- Unpredictable demand

**Important:** Variability is not necessarily a separate forecasting pattern like trend or seasonality. It describes the degree of fluctuation in demand.

### Summary: Four Demand Characteristics

| Demand Characteristic | Description |
|---|---|
| Stable | Relatively consistent demand. |
| Trend | Consistent upward or downward movement. |
| Seasonality | Recurring increases or decreases at predictable intervals. |
| Variability | Fluctuations in demand. |

**Remember:** Before selecting a forecasting method, understand the behavior of your historical demand.

Hindi magandang gumamit ng forecasting method without understanding the data first.

---

# 3. TECHNICAL EXPLANATION

Now that we understand the basic concepts, let's introduce the technical foundation.

## 3.1 Quantitative Forecasting and Time-Series Analysis

In professional demand planning, quantitative forecasting commonly involves analyzing historical time-series data.

A time series can be represented as:

$$
Y_1,Y_2,Y_3,\ldots,Y_t
$$

Where:

- $Y$ = Observed demand
- $t$ = Time period

For example:

$$
Y_1=1000
$$

$$
Y_2=1050
$$

$$
Y_3=1030
$$

These represent demand observations for January, February, and March.

The objective is to estimate future demand:

$$
\hat{Y}_{t+1}
$$

Where:

- $\hat{Y}$ = Forecasted demand
- $t+1$ = Next forecasting period

The symbol above Y is called a hat, commonly used in statistics to indicate an estimated or predicted value.

## 3.2 Basic Mathematical Concepts

Before learning the actual forecasting methods, kailangan nating maintindihan ang ilang mathematical concepts.

### A. Average (Mean)

The average represents the central value of a group of observations.

Formula:

$$
\bar{Y}=\frac{\sum Y}{n}
$$

Where:

- $\bar{Y}$ = Average demand
- $\sum Y$ = Sum of all observations
- $n$ = Number of observations

Example:

Historical demand:

1,000, 1,100, 1,200

Step 1: Add all observations.

$$
1000+1100+1200=3300
$$

Step 2: Divide by the number of observations.

$$
\bar{Y}=\frac{3300}{3}
$$

$$
\boxed{\bar{Y}=1100}
$$

Average demand is 1,100 units.

**Business interpretation:**

Kung relatively stable ang demand, maaaring gamitin ang average as a reasonable representation of expected demand.

However, kapag may trend, maaaring hindi na representative ang historical average.

### B. Percentage

Percentage helps us understand the relative change between two values.

Formula:

$$
\%\ Change=\frac{New-Old}{Old}\times100
$$

Example:

January demand = 1,000 units

February demand = 1,100 units

$$
\frac{1100-1000}{1000}\times100
$$

$$
=10\%
$$

Demand increased by 10%.

### C. Difference

Difference is simply the numerical gap between two observations.

$$
Difference=New-Old
$$

Example:

$$
1100-1000=100
$$

Demand increased by 100 units.

These basic concepts will appear repeatedly in our forecasting calculations.

---

# 4. DETAILED DISCUSSION

This is the core of Topic 3.4.

We will discuss six quantitative forecasting methods.

1. Naive Forecasting
2. Simple Moving Average
3. Weighted Moving Average
4. Simple Exponential Smoothing
5. Linear Trend Projection / Regression
6. Basic Seasonal Forecasting

For consistency, we will use the same manufacturing demand dataset whenever applicable.

## 4.1 Naive Forecasting

### A. Definition

Naive forecasting is one of the simplest quantitative forecasting methods.

It assumes that the next period's demand will be equal to the most recent actual demand.

In simple terms:

**Kung 1,200 units ang demand last month, ang forecast natin for next month ay 1,200 units.**

No complicated calculations required.

### B. Formula

$$
F_{t+1}=A_t
$$

Where:

- $F_{t+1}$ = Forecast for the next period
- $A_t$ = Actual demand in the current period

### C. Numerical Example

Historical demand:

| Month | Actual Demand |
|---|---:|
| January | 1,000 |
| February | 1,100 |
| March | 1,200 |
| April | 1,300 |

Question:

What is the forecast for May?

Step 1: Identify the most recent actual demand.

April = 1,300 units.

Step 2: Apply the formula.

$$
F_{May}=A_{April}
$$

$$
\boxed{F_{May}=1300}
$$

Therefore, the forecast for May is 1,300 units.

### D. Advantages

- Very easy to calculate.
- Requires minimal historical data.
- Easy to understand and explain.
- Useful as a benchmark for comparing more sophisticated forecasting methods.

### E. Limitations

- Does not consider historical averages.
- Does not explicitly model trend.
- Does not account for seasonality.
- Can be affected by unusual demand fluctuations.

### F. Appropriate Demand Pattern

Naive forecasting can work reasonably well when demand is stable or when the latest observation is a useful predictor of the next period.

It is also useful as a baseline benchmark.

---

## 4.2 Simple Moving Average (SMA)

### A. Definition

Simple Moving Average calculates the average demand over a selected number of recent periods.

The word **moving** means that as new observations become available, the forecasting window moves forward.

For example, if we use a three-month moving average:

- First forecast uses January, February, and March.
- Next forecast uses February, March, and April.
- Next forecast uses March, April, and May.

The oldest observation is removed and the newest observation is added.

### B. Formula

$$
F_{t+1}=\frac{A_t+A_{t-1}+\cdots+A_{t-n+1}}{n}
$$

Where:

- $F_{t+1}$ = Forecast for the next period
- $A_t$ = Most recent actual demand
- $n$ = Number of historical periods included

### C. Numerical Example

Let's use a three-month moving average.

Historical demand:

| Month | Actual Demand |
|---|---:|
| January | 1,000 |
| February | 1,100 |
| March | 1,200 |
| April | 1,300 |

Question:

What is the forecast for April using a three-month moving average?

Step 1: Identify the three most recent available observations before April.

- January = 1,000
- February = 1,100
- March = 1,200

Step 2: Add the values.

$$
1000+1100+1200=3300
$$

Step 3: Divide by three.

$$
F_{April}=\frac{3300}{3}
$$

$$
\boxed{F_{April}=1100}
$$

Forecast for April = 1,100 units.

Notice something?

The actual demand for March was 1,200, but the forecast is only 1,100.

Why?

Because SMA considers all three observations equally.

The older, lower demand values pull the average down.

### D. Understanding the Forecasting Window

Suppose we want to forecast May.

Our three-month window moves forward.

| Month | Actual Demand | Included in Forecast? |
|---|---:|---|
| January | 1,000 | No |
| February | 1,100 | Yes |
| March | 1,200 | Yes |
| April | 1,300 | Yes |

$$
F_{May}=\frac{1100+1200+1300}{3}
$$

$$
\boxed{F_{May}=1200}
$$

This is why it is called a moving average.

### E. Choosing the Number of Periods

The number of periods used is an important decision.

Consider the difference:

| Moving Average | Characteristics |
|---|---|
| 2-month SMA | More responsive to recent demand changes. |
| 3-month SMA | Balances recent and older observations. |
| 6-month SMA | Smoother but slower to respond. |
| 12-month SMA | Considers a longer historical window. |

Generally:

**Shorter window = More responsive, but potentially more sensitive to fluctuations.**

**Longer window = Smoother forecast, but potentially slower to react to changes.**

### F. Advantages

- Easy to calculate.
- Smooths short-term fluctuations.
- Useful for relatively stable demand.
- Easy to implement in Excel.

### G. Limitations

- Gives equal importance to all observations in the selected window.
- Does not explicitly model trends.
- Does not automatically account for seasonality.
- May lag when demand changes quickly.

### H. Appropriate Demand Pattern

Best suited for relatively stable demand without strong trends or seasonal patterns.

---

## 4.3 Weighted Moving Average (WMA)

### A. Definition

Weighted Moving Average is similar to Simple Moving Average.

However, instead of giving equal importance to all historical observations, we assign different weights.

Usually, more recent observations receive higher weights.

Why?

Because recent demand may better represent current customer behavior.

For example:

Imagine na ang demand ng isang electronic component ay:

| Month | Demand |
|---|---:|
| January | 1,000 |
| February | 1,100 |
| March | 1,200 |

Using SMA, all three observations receive equal importance.

Using WMA, we can assign:

- January = 20%
- February = 30%
- March = 50%

Mas mataas ang importance ng March because it is the most recent observation.

### B. Formula

$$
F_{t+1}=\sum(A_i\times W_i)
$$

Where:

- $F_{t+1}$ = Forecast for the next period
- $A_i$ = Historical actual demand
- $W_i$ = Assigned weight

Important condition:

$$
\sum W_i=1
$$

Or:

$$
\sum W_i=100\%
$$

### C. Numerical Example

Historical demand:

| Month | Actual Demand | Weight |
|---|---:|---:|
| January | 1,000 | 20% |
| February | 1,100 | 30% |
| March | 1,200 | 50% |

Step 1: Multiply each actual demand by its corresponding weight.

January:

$$
1000\times0.20=200
$$

February:

$$
1100\times0.30=330
$$

March:

$$
1200\times0.50=600
$$

Step 2: Add the weighted values.

$$
200+330+600=1130
$$

Therefore:

$$
\boxed{F_{April}=1130}
$$

Forecast for April = 1,130 units.

### D. Comparing SMA and WMA

Using the same historical demand:

| Method | Forecast |
|---|---:|
| 3-month SMA | 1,100 |
| 3-month WMA | 1,130 |

Why is WMA higher?

Because the latest observation, March, has the highest weight.

Since demand is increasing, the higher weight assigned to March increases the forecast.

### E. Advantages

- More importance can be given to recent demand.
- More flexible than SMA.
- Can respond faster to demand changes.
- Easy to implement in Excel.

### F. Limitations

- Weights must be selected.
- Incorrect weights may produce poor forecasts.
- Does not automatically identify trend or seasonality.
- Can still lag when demand changes significantly.

### G. Appropriate Demand Pattern

WMA is useful when demand is relatively stable or when recent observations should receive greater importance.

It can also be useful when demand is changing gradually.

---

## 4.4 Simple Exponential Smoothing (SES)

This is an important forecasting method used in many demand planning applications.

### A. Definition

Simple Exponential Smoothing is a forecasting method that updates the forecast using the latest actual demand and the previous forecast.

Unlike SMA, SES does not simply calculate the average of a fixed number of observations.

Instead, it continuously updates the forecast.

The method gives greater weight to recent observations, while older observations receive progressively smaller weights.

### B. Understanding Alpha (α)

The most important concept in exponential smoothing is the **smoothing constant**, represented by:

$$
\alpha
$$

Alpha determines how much importance is given to the latest actual demand.

Its value ranges from:

$$
0<\alpha<1
$$

For example:

| Alpha | General Behavior |
|---|---|
| 0.10 | More stable, slower response. |
| 0.30 | Moderate responsiveness. |
| 0.50 | Greater responsiveness. |
| 0.80 | Highly responsive to recent demand. |

Let's understand this using an analogy.

Imagine na may forecast ka na 1,000 units.

Then suddenly, the actual demand becomes 1,200 units.

Should your next forecast immediately become 1,200?

Not necessarily.

Depending on how much importance you want to give the latest actual demand, you adjust the forecast using Alpha.

A higher Alpha means mas malaki ang adjustment based on the latest actual demand.

A lower Alpha means mas conservative ang adjustment.

### C. Formula

$$
F_{t+1}=\alpha A_t+(1-\alpha)F_t
$$

Where:

- $F_{t+1}$ = Next period's forecast
- $A_t$ = Current period's actual demand
- $F_t$ = Current period's forecast
- $\alpha$ = Smoothing constant

### D. Numerical Example

Given:

Previous forecast = 1,000 units

Actual demand = 1,200 units

Alpha = 0.30

Step 1: Identify the formula.

$$
F_{t+1}=\alpha A_t+(1-\alpha)F_t
$$

Step 2: Substitute the values.

$$
F_{t+1}=0.30(1200)+(1-0.30)(1000)
$$

Step 3: Calculate each component.

$$
0.30(1200)=360
$$

$$
0.70(1000)=700
$$

Step 4: Add the values.

$$
F_{t+1}=360+700
$$

$$
\boxed{F_{t+1}=1060}
$$

The next forecast is 1,060 units.

Notice that the actual demand was 1,200, but the new forecast is only 1,060.

Why?

Because SES does not completely replace the previous forecast with the latest actual demand.

It adjusts the previous forecast based on Alpha.

### E. What Happens When Alpha Changes?

Using the same example:

Previous forecast = 1,000

Actual demand = 1,200

| Alpha | Calculation | New Forecast |
|---|---|---:|
| 0.10 | 0.10(1,200) + 0.90(1,000) | 1,020 |
| 0.30 | 0.30(1,200) + 0.70(1,000) | 1,060 |
| 0.50 | 0.50(1,200) + 0.50(1,000) | 1,100 |
| 0.80 | 0.80(1,200) + 0.20(1,000) | 1,160 |

Interpretation:

Higher Alpha means greater responsiveness to recent demand.

Lower Alpha means greater smoothing.

### F. Advantages

- Gives greater importance to recent observations.
- Easy to update every period.
- Does not require maintaining a fixed moving-average window.
- Useful for stable demand with random fluctuations.

### G. Limitations

- Requires selection of Alpha.
- Basic SES does not explicitly model trends.
- Basic SES does not account for seasonality.
- Results depend on the initial forecast.

### H. Appropriate Demand Pattern

Best suited for relatively stable demand without significant trend or seasonality.

**Important:** When demand has a strong trend, consider more advanced exponential smoothing methods, such as Holt's trend-adjusted exponential smoothing. That is beyond the scope of our current basic SES discussion.

---

## 4.5 Linear Trend Projection / Regression

Now let's discuss a method that is particularly useful when historical demand shows an upward or downward trend.

### A. Definition

Linear Trend Projection uses a mathematical relationship between time and demand to estimate future demand.

In simple terms:

Instead of averaging historical demand, we identify the general direction of demand and extend that pattern into the future.

For example:

| Month | Demand |
|---|---:|
| January | 1,000 |
| February | 1,100 |
| March | 1,200 |
| April | 1,300 |
| May | 1,400 |

We can observe that demand increases by 100 units every month.

A linear trend model attempts to represent this relationship mathematically.

### B. Formula

$$
Y=a+bt
$$

Where:

- $Y$ = Forecasted demand
- $a$ = Intercept
- $b$ = Slope
- $t$ = Time period

Let's understand the two important components.

### C. Understanding the Slope (b)

The slope represents the expected change in demand for every one-unit increase in time.

Example:

If:

$$
b=100
$$

It means demand increases by approximately 100 units per month.

If:

$$
b=-50
$$

It means demand decreases by approximately 50 units per month.

### D. Understanding the Intercept (a)

The intercept represents the estimated demand when:

$$
t=0
$$

It serves as the starting point of the mathematical trend line.

Important:

The intercept does not necessarily represent actual demand in January.

It is a mathematical component used to construct the regression equation.

### E. Understanding Linear Regression

In actual historical data, demand does not always increase by exactly the same amount.

For example:

| Month | Time (t) | Actual Demand |
|---|---:|---:|
| January | 1 | 1,000 |
| February | 2 | 1,050 |
| March | 3 | 1,100 |
| April | 4 | 1,160 |
| May | 5 | 1,190 |

The increases are not identical.

Regression calculates the line that best represents the overall relationship between time and demand using the least-squares method.

This is called **Ordinary Least Squares (OLS)**.

The objective is to minimize the sum of squared differences between actual demand and the estimated trend line.

### F. Regression Formulas

Slope:

$$
b=\frac{n\sum tY-(\sum t)(\sum Y)}
{n\sum t^2-(\sum t)^2}
$$

Intercept:

$$
a=\bar{Y}-b\bar{t}
$$

Where:

- $n$ = Number of observations
- $t$ = Time period
- $Y$ = Actual demand
- $\bar{t}$ = Average time period
- $\bar{Y}$ = Average demand
- $b$ = Slope
- $a$ = Intercept

### G. Numerical Example

Let's use simpler data.

| Month | Time (t) | Actual Demand (Y) |
|---|---:|---:|
| January | 1 | 1,000 |
| February | 2 | 1,100 |
| March | 3 | 1,200 |
| April | 4 | 1,300 |
| May | 5 | 1,400 |

First, prepare the calculation table.

| t | Y | t² | tY |
|---:|---:|---:|---:|
| 1 | 1,000 | 1 | 1,000 |
| 2 | 1,100 | 4 | 2,200 |
| 3 | 1,200 | 9 | 3,600 |
| 4 | 1,300 | 16 | 5,200 |
| 5 | 1,400 | 25 | 7,000 |
| **15** | **6,000** | **55** | **19,000** |

Step 1: Calculate the slope.

$$
b=\frac{n\sum tY-(\sum t)(\sum Y)}
{n\sum t^2-(\sum t)^2}
$$

Substitute:

$$
b=\frac{5(19000)-(15)(6000)}
{5(55)-(15)^2}
$$

Numerator:

$$
95000-90000=5000
$$

Denominator:

$$
275-225=50
$$

Therefore:

$$
b=\frac{5000}{50}
$$

$$
\boxed{b=100}
$$

Interpretation:

Demand increases by 100 units per month.

Step 2: Calculate the intercept.

$$
a=\bar{Y}-b\bar{t}
$$

Calculate the averages:

$$
\bar{Y}=\frac{6000}{5}=1200
$$

$$
\bar{t}=\frac{15}{5}=3
$$

Substitute:

$$
a=1200-100(3)
$$

$$
\boxed{a=900}
$$

Step 3: Construct the regression equation.

$$
\boxed{Y=900+100t}
$$

Step 4: Forecast June.

Since June is period 6:

$$
Y=900+100(6)
$$

$$
Y=900+600
$$

$$
\boxed{Y=1500}
$$

The forecast for June is 1,500 units.

### H. Advantages

- Explicitly models upward or downward trends.
- Uses all historical observations included in the model.
- Provides a mathematical relationship between time and demand.
- Can estimate future demand beyond the latest observation.

### I. Limitations

- Assumes the relationship between time and demand is approximately linear.
- May perform poorly when demand is highly irregular.
- Basic linear regression does not automatically account for seasonality.
- Historical trends may not continue indefinitely.

### J. Appropriate Demand Pattern

Useful for products with relatively consistent upward or downward trends.

---

## 4.6 Basic Seasonal Forecasting

### A. Definition

Seasonal forecasting is used when demand follows recurring patterns over predictable intervals.

For example:

A company may experience higher demand every December because customers prepare for holiday production and distribution requirements.

Unlike a simple trend, seasonality involves recurring demand behavior.

### B. Understanding Seasonal Index

One common basic technique is the **Seasonal Index**.

It measures how much a particular period's demand is above or below the average demand.

Formula:

$$
SI=\frac{\text{Average Demand for a Season}}
{\text{Overall Average Demand}}
$$

Where:

- $SI$ = Seasonal Index

Interpretation:

| Seasonal Index | Meaning |
|---|---|
| 1.00 | Demand is equal to the average. |
| 1.10 | Demand is 10% above average. |
| 0.90 | Demand is 10% below average. |
| 1.25 | Demand is 25% above average. |
| 0.75 | Demand is 25% below average. |

### C. Numerical Example

Imagine an electronic components manufacturer experiences different demand levels depending on the quarter.

Historical average quarterly demand:

| Quarter | Average Demand |
|---|---:|
| Q1 | 1,000 |
| Q2 | 1,200 |
| Q3 | 1,500 |
| Q4 | 1,300 |

Step 1: Calculate the overall average.

$$
Overall\ Average=\frac{1000+1200+1500+1300}{4}
$$

$$
=\frac{5000}{4}
$$

$$
=1250
$$

Step 2: Calculate the seasonal index.

For Q1:

$$
SI_{Q1}=\frac{1000}{1250}
$$

$$
\boxed{SI_{Q1}=0.80}
$$

For Q2:

$$
SI_{Q2}=\frac{1200}{1250}
$$

$$
\boxed{SI_{Q2}=0.96}
$$

For Q3:

$$
SI_{Q3}=\frac{1500}{1250}
$$

$$
\boxed{SI_{Q3}=1.20}
$$

For Q4:

$$
SI_{Q4}=\frac{1300}{1250}
$$

$$
\boxed{SI_{Q4}=1.04}
$$

Our results:

| Quarter | Average Demand | Seasonal Index |
|---|---:|---:|
| Q1 | 1,000 | 0.80 |
| Q2 | 1,200 | 0.96 |
| Q3 | 1,500 | 1.20 |
| Q4 | 1,300 | 1.04 |

Interpretation:

Q3 demand is approximately 20% above the overall average.

Q1 demand is approximately 20% below the overall average.

### D. Forecasting Using Seasonal Index

Suppose the baseline forecast for next year's Q3 is 1,600 units.

The seasonal index for Q3 is 1.20.

Then:

$$
Seasonal\ Forecast=Baseline\ Forecast\times SI
$$

$$
=1600\times1.20
$$

$$
\boxed{1920\ units}
$$

Therefore, the seasonal forecast for Q3 is 1,920 units.

### E. Important Consideration

The example above assumes that the baseline forecast has not yet incorporated the seasonal effect.

If the baseline forecast already contains seasonality, multiplying it by the seasonal index again would double-count the seasonal effect.

Also, reliable seasonal analysis generally requires multiple years of historical data.

A single year may not be enough to establish that a pattern is genuinely recurring.

### F. Advantages

- Captures recurring demand patterns.
- Helps prepare for predictable high-demand and low-demand periods.
- Supports production and inventory preparation.
- Useful for products with identifiable seasonal behavior.

### G. Limitations

- Requires sufficient historical data.
- Seasonal patterns may change over time.
- Unusual events can distort seasonal indices.
- Basic seasonal indices alone do not capture changing trends.

---

# 5. PRACTICAL EXAMPLES AND APPLICATIONS

Now let's combine what we learned.

We will use a realistic manufacturing scenario.

## 5.1 Manufacturing Scenario

Imagine that you are an S&OP Analyst working for an electronic components manufacturer.

The company manufactures electronic components supplied to different customers.

One particular product, **Product A**, has the following historical monthly demand.

For this exercise, assume that:

- All demand values represent customer demand in units.
- Data is monthly.
- No stockout-related demand suppression occurred.
- No major product discontinuation or launch occurred.
- All numbers are illustrative, not actual industry data.

### Historical Demand Dataset

| Month | Period | Actual Demand |
|---|---:|---:|
| January | 1 | 1,000 |
| February | 2 | 1,050 |
| March | 3 | 1,030 |
| April | 4 | 1,080 |
| May | 5 | 1,100 |
| June | 6 | 1,120 |
| July | 7 | 1,150 |
| August | 8 | 1,140 |
| September | 9 | 1,180 |
| October | 10 | 1,210 |
| November | 11 | 1,250 |
| December | 12 | 1,300 |

### Initial Observations

Before calculating anything, let's examine the data.

**Observation 1: Demand is generally increasing.**

January demand = 1,000 units.

December demand = 1,300 units.

**Observation 2: There are small fluctuations.**

For example:

July = 1,150

August = 1,140

Demand decreased slightly.

**Observation 3: There is no obvious seasonal pattern.**

The data generally shows an upward movement rather than a recurring seasonal pattern.

**Initial conclusion:**

Product A appears to have an upward trend with relatively small fluctuations.

This observation will be important when selecting our forecasting methods.

---

## 5.2 Forecasting Method 1: Naive Forecasting

We want to forecast January of the following year.

The most recent actual demand is December = 1,300.

Formula:

$$
F_{January}=A_{December}
$$

$$
\boxed{F_{January}=1300}
$$

Forecast = 1,300 units.

**Business interpretation:**

If the company follows naive forecasting, it expects January demand to remain at December's level.

However, since our dataset shows an upward trend, this method may underestimate future demand.

---

## 5.3 Forecasting Method 2: Simple Moving Average

Let's use a three-month moving average.

Our latest three observations are:

| Month | Actual Demand |
|---|---:|
| October | 1,210 |
| November | 1,250 |
| December | 1,300 |

Formula:

$$
F_{January}=\frac{A_{Oct}+A_{Nov}+A_{Dec}}{3}
$$

Substitute:

$$
F_{January}=\frac{1210+1250+1300}{3}
$$

Add:

$$
1210+1250+1300=3760
$$

Divide:

$$
F_{January}=\frac{3760}{3}
$$

$$
\boxed{F_{January}=1253.33}
$$

Rounded:

**1,253 units.**

Business interpretation:

The three-month average is lower than December's actual demand because October and November have lower demand values.

This illustrates an important characteristic of SMA:

It smooths demand fluctuations but can lag behind an upward trend.

---

## 5.4 Forecasting Method 3: Weighted Moving Average

Let's use these weights:

| Month | Actual Demand | Weight |
|---|---:|---:|
| October | 1,210 | 20% |
| November | 1,250 | 30% |
| December | 1,300 | 50% |

Check:

$$
20\%+30\%+50\%=100\%
$$

Formula:

$$
F_{January}=\sum(A_i\times W_i)
$$

Step 1: Multiply each demand by its weight.

October:

$$
1210\times0.20=242
$$

November:

$$
1250\times0.30=375
$$

December:

$$
1300\times0.50=650
$$

Step 2: Add the results.

$$
242+375+650=1267
$$

Therefore:

$$
\boxed{F_{January}=1267}
$$

Forecast = 1,267 units.

Business interpretation:

WMA produces a higher forecast than SMA because greater importance is assigned to the latest observation.

However, it still does not fully capture the underlying upward trend.

---

## 5.5 Forecasting Method 4: Simple Exponential Smoothing

Let's use:

$$
\alpha=0.30
$$

For illustration, we will initialize the February forecast using January's actual demand:

$$
F_{Feb}=1000
$$

Then update the forecast every month using:

$$
F_{t+1}=0.30A_t+0.70F_t
$$

Let's calculate sequentially.

### Step 1: Forecast March

February actual = 1,050

February forecast = 1,000

$$
F_{Mar}=0.30(1050)+0.70(1000)
$$

$$
=315+700
$$

$$
\boxed{F_{Mar}=1015}
$$

### Step 2: Forecast April

March actual = 1,030

March forecast = 1,015

$$
F_{Apr}=0.30(1030)+0.70(1015)
$$

$$
=309+710.50
$$

$$
\boxed{F_{Apr}=1019.50}
$$

### Step 3: Continue the calculation

| Forecast Month | Previous Actual | Previous Forecast | New Forecast |
|---|---:|---:|---:|
| March | 1,050 | 1,000.00 | 1,015.00 |
| April | 1,030 | 1,015.00 | 1,019.50 |
| May | 1,080 | 1,019.50 | 1,037.65 |
| June | 1,100 | 1,037.65 | 1,056.36 |
| July | 1,120 | 1,056.36 | 1,075.45 |
| August | 1,150 | 1,075.45 | 1,097.81 |
| September | 1,140 | 1,097.81 | 1,110.47 |
| October | 1,180 | 1,110.47 | 1,131.33 |
| November | 1,210 | 1,131.33 | 1,154.93 |
| December | 1,250 | 1,154.93 | 1,183.45 |
| January (Next Year) | 1,300 | 1,183.45 | 1,218.42 |

Let's calculate the final forecast explicitly.

$$
F_{Jan}=0.30(1300)+0.70(1183.45)
$$

$$
=390+828.42
$$

$$
\boxed{F_{Jan}=1218.42}
$$

Forecast = approximately 1,218 units.

### Business Interpretation

Notice something interesting.

The actual demand has increased to 1,300 units, but our forecast is only 1,218 units.

Why?

Because basic SES is designed to smooth demand.

Since our dataset contains a consistent upward trend, SES continuously adjusts the forecast but struggles to catch up.

This is one of the reasons why basic SES is not ideal for strong trending demand.

---

## 5.6 Forecasting Method 5: Linear Trend Projection / Regression

Now let's use regression to identify the upward trend.

For this example, we will use January to September as our historical training data.

This means October to December will not be included when calculating the regression coefficients.

### Step 1: Prepare the data

| Month | Time (t) | Demand (Y) |
|---|---:|---:|
| January | 1 | 1,000 |
| February | 2 | 1,050 |
| March | 3 | 1,030 |
| April | 4 | 1,080 |
| May | 5 | 1,100 |
| June | 6 | 1,120 |
| July | 7 | 1,150 |
| August | 8 | 1,140 |
| September | 9 | 1,180 |

### Step 2: Calculate the required values

| t | Y | t² | tY |
|---:|---:|---:|---:|
| 1 | 1,000 | 1 | 1,000 |
| 2 | 1,050 | 4 | 2,100 |
| 3 | 1,030 | 9 | 3,090 |
| 4 | 1,080 | 16 | 4,320 |
| 5 | 1,100 | 25 | 5,500 |
| 6 | 1,120 | 36 | 6,720 |
| 7 | 1,150 | 49 | 8,050 |
| 8 | 1,140 | 64 | 9,120 |
| 9 | 1,180 | 81 | 10,620 |
| **45** | **9,850** | **285** | **50,520** |

### Step 3: Calculate the slope

$$
b=\frac{n\sum tY-(\sum t)(\sum Y)}
{n\sum t^2-(\sum t)^2}
$$

Substitute:

$$
b=\frac{9(50520)-(45)(9850)}
{9(285)-(45)^2}
$$

Numerator:

$$
454680-443250=11430
$$

Denominator:

$$
2565-2025=540
$$

Therefore:

$$
b=\frac{11430}{540}
$$

$$
\boxed{b=21.17}
$$

Interpretation:

The estimated demand increases by approximately 21.17 units per month.

### Step 4: Calculate the intercept

$$
a=\bar{Y}-b\bar{t}
$$

Average demand:

$$
\bar{Y}=\frac{9850}{9}=1094.44
$$

Average time:

$$
\bar{t}=\frac{45}{9}=5
$$

Substitute:

$$
a=1094.44-21.17(5)
$$

$$
\boxed{a=988.61}
$$

### Step 5: Construct the regression equation

$$
\boxed{Y=988.61+21.17t}
$$

### Step 6: Forecast January of the following year

January next year corresponds to period 13.

$$
Y=988.61+21.17(13)
$$

$$
Y=988.61+275.21
$$

$$
\boxed{Y=1263.82}
$$

Forecast = approximately 1,264 units.

**Business interpretation:**

Regression identifies the overall upward movement and extends it into the future.

Unlike SMA and basic SES, it does not simply smooth the historical observations.

It explicitly models the trend.

---

## 5.7 Forecasting Method 6: Seasonal Forecasting

Let's examine whether we should use seasonal forecasting for Product A.

Our historical dataset:

January = 1,000

February = 1,050

March = 1,030

...

December = 1,300

Although demand increases throughout the year, we only have one year of historical observations.

We cannot confidently conclude that January is always a low-demand month or December is always a high-demand month.

Why?

Because we don't have previous years to establish recurring seasonal behavior.

For example, we would ideally want:

| Month | 2024 Demand | 2025 Demand |
|---|---:|---:|
| January | 950 | 1,000 |
| February | 1,000 | 1,050 |
| March | 980 | 1,030 |
| ... | ... | ... |
| December | 1,250 | 1,300 |

Then we could investigate whether particular months consistently exhibit higher or lower demand after accounting for the underlying trend.

**Conclusion:**

For Product A, basic seasonal forecasting is not yet justified by the available dataset.

This is an important professional decision.

Hindi porket may historical data tayo ay kailangan nating gamitin lahat ng forecasting methods.

We should only use a method when the data supports its underlying assumptions.

---

# 6. FORMULAS AND CALCULATIONS: FORECAST ACCURACY AND ERROR MEASUREMENT

Now that we know how to generate forecasts, the next question is:

**How do we know whether our forecast is good?**

Imagine na gumawa ka ng forecast na 1,200 units.

Pero ang actual demand ay 1,300 units.

How far was your forecast from reality?

This is where forecast error measurement becomes important.

There are four key measurements we will discuss:

1. Forecast Error
2. MAD
3. MAPE
4. MSE

## 6.1 Forecast Error

### A. Definition

Forecast Error measures the difference between actual demand and forecast demand.

Formula:

$$
Error=Actual-Forecast
$$

Or:

$$
e_t=A_t-F_t
$$

Where:

- $e_t$ = Forecast error
- $A_t$ = Actual demand
- $F_t$ = Forecast demand

### B. Numerical Example

Actual demand = 1,300 units.

Forecast demand = 1,200 units.

$$
Error=1300-1200
$$

$$
\boxed{Error=+100}
$$

Interpretation:

The forecast underestimated actual demand by 100 units.

Now consider another situation.

Actual demand = 1,200 units.

Forecast demand = 1,300 units.

$$
Error=1200-1300
$$

$$
\boxed{Error=-100}
$$

Interpretation:

The forecast overestimated actual demand by 100 units.

### C. Understanding the Error Sign

| Forecast Error | Meaning |
|---|---|
| Positive | Underforecasting |
| Negative | Overforecasting |
| Zero | Perfect forecast for that period |

Important: We are using the convention Actual minus Forecast. Some companies use the opposite convention, so always check the definition in your reporting system.

---

## 6.2 MAD – Mean Absolute Deviation

### A. Definition

MAD measures the average absolute forecast error.

In simple terms:

It tells us how many units, on average, our forecast differs from actual demand.

The word **absolute** means that we ignore whether the error is positive or negative.

Why?

Because we want to measure the magnitude of the error, regardless of whether we overforecasted or underforecasted.

### B. Formula

$$
MAD=\frac{\sum|A_t-F_t|}{n}
$$

Where:

- $MAD$ = Mean Absolute Deviation
- $A_t$ = Actual demand
- $F_t$ = Forecast demand
- $n$ = Number of observations
- $| |$ = Absolute value

### C. Numerical Example

Suppose we have:

| Month | Actual | Forecast | Error | Absolute Error |
|---|---:|---:|---:|---:|
| January | 1,000 | 950 | +50 | 50 |
| February | 1,100 | 1,150 | -50 | 50 |
| March | 1,200 | 1,100 | +100 | 100 |
| April | 1,300 | 1,250 | +50 | 50 |

Step 1: Calculate absolute errors.

50, 50, 100, 50

Step 2: Add all absolute errors.

$$
50+50+100+50=250
$$

Step 3: Divide by the number of observations.

$$
MAD=\frac{250}{4}
$$

$$
\boxed{MAD=62.5}
$$

### D. Interpretation

MAD = 62.5 units.

This means the forecast differs from actual demand by an average of 62.5 units per month.

**Business meaning:**

If production planning relies heavily on this forecast, the company should understand that its average absolute forecast deviation is approximately 62.5 units per month for the evaluated periods.

### E. Advantages

- Easy to calculate.
- Expressed in the same unit as demand.
- Easy to communicate to production and supply planning teams.

### F. Limitations

- Does not distinguish between overforecasting and underforecasting.
- Does not indicate relative error as a percentage.
- Cannot be directly compared across products with very different demand scales.

---

## 6.3 MAPE – Mean Absolute Percentage Error

### A. Definition

MAPE measures the average absolute forecast error expressed as a percentage of actual demand.

In simple terms:

Instead of asking how many units we missed, we ask:

**How large was our forecasting error relative to actual demand?**

### B. Formula

$$
MAPE=\frac{1}{n}\sum\left|\frac{A_t-F_t}{A_t}\right|\times100
$$

Where:

- $MAPE$ = Mean Absolute Percentage Error
- $A_t$ = Actual demand
- $F_t$ = Forecast demand
- $n$ = Number of observations

### C. Numerical Example

Using the same dataset:

| Month | Actual | Forecast | Absolute Error |
|---|---:|---:|---:|
| January | 1,000 | 950 | 50 |
| February | 1,100 | 1,150 | 50 |
| March | 1,200 | 1,100 | 100 |
| April | 1,300 | 1,250 | 50 |

Step 1: Calculate the percentage error for each month.

January:

$$
\frac{50}{1000}\times100=5\%
$$

February:

$$
\frac{50}{1100}\times100=4.55\%
$$

March:

$$
\frac{100}{1200}\times100=8.33\%
$$

April:

$$
\frac{50}{1300}\times100=3.85\%
$$

Step 2: Add the percentage errors.

$$
5+4.55+8.33+3.85=21.73
$$

Step 3: Divide by four.

$$
MAPE=\frac{21.73}{4}
$$

$$
\boxed{MAPE=5.43\%}
$$

### D. Interpretation

MAPE = 5.43%.

This means the average absolute percentage error across the evaluated periods is approximately 5.43%.

**Business meaning:**

A MAPE of 5.43% indicates that the forecasts were relatively close to actual demand in this particular evaluation.

However, whether this is considered good depends on the product, demand behavior, business requirements, and company-defined performance targets.

There is no universal MAPE threshold that applies to every product.

### E. Advantages

- Easy to communicate.
- Expressed as a percentage.
- Useful when comparing products with different demand volumes.

### F. Limitations

MAPE has an important weakness.

When actual demand is zero:

$$
\frac{Actual-Forecast}{Actual}
$$

becomes undefined.

It can also become misleading when actual demand is very small because the percentage error can become extremely large.

Therefore, MAPE is not appropriate for every demand profile.

---

## 6.4 MSE – Mean Squared Error

### A. Definition

MSE measures the average squared forecast error.

Unlike MAD, which uses absolute errors, MSE squares the errors.

Why square the errors?

Because squaring gives significantly greater importance to large forecasting errors.

For example:

Error of 10 units:

$$
10^2=100
$$

Error of 100 units:

$$
100^2=10000
$$

A 100-unit error contributes 100 times more to squared error than a 10-unit error.

### B. Formula

$$
MSE=\frac{\sum(A_t-F_t)^2}{n}
$$

Where:

- $MSE$ = Mean Squared Error
- $A_t$ = Actual demand
- $F_t$ = Forecast demand
- $n$ = Number of observations

### C. Numerical Example

Using our previous dataset:

| Month | Actual | Forecast | Error | Squared Error |
|---|---:|---:|---:|---:|
| January | 1,000 | 950 | 50 | 2,500 |
| February | 1,100 | 1,150 | -50 | 2,500 |
| March | 1,200 | 1,100 | 100 | 10,000 |
| April | 1,300 | 1,250 | 50 | 2,500 |

Step 1: Calculate the squared errors.

January:

$$
50^2=2500
$$

February:

$$
(-50)^2=2500
$$

March:

$$
100^2=10000
$$

April:

$$
50^2=2500
$$

Step 2: Add all squared errors.

$$
2500+2500+10000+2500=17500
$$

Step 3: Divide by four.

$$
MSE=\frac{17500}{4}
$$

$$
\boxed{MSE=4375}
$$

### D. Interpretation

MSE = 4,375 units².

The unit is squared because we squared the original demand errors.

Unlike MAD, MSE is not directly interpretable as an average number of units missed.

Its primary purpose is to evaluate and compare forecast performance.

A lower MSE generally indicates better performance when comparing forecasts using the same dataset and evaluation periods.

### E. Advantages

- Penalizes large forecast errors.
- Useful for statistical model evaluation.
- Helps identify forecasting methods that produce unusually large errors.

### F. Limitations

- Difficult to interpret operationally because of squared units.
- Sensitive to outliers.
- Large errors can dominate the metric.

---

## 6.5 Forecast Accuracy vs. Forecast Bias

These two concepts are related, but they are not the same.

### Forecast Accuracy

Forecast accuracy measures how close the forecast is to actual demand.

For example:

Actual demand = 1,000

Forecast = 980

The forecast error is only 20 units.

This indicates relatively close forecasting performance.

### Forecast Bias

Forecast bias measures whether the forecasting process consistently overestimates or underestimates demand.

For example:

| Month | Actual | Forecast | Error |
|---|---:|---:|---:|
| January | 1,000 | 900 | +100 |
| February | 1,100 | 1,000 | +100 |
| March | 1,200 | 1,100 | +100 |

The forecast consistently underestimates demand.

This indicates positive bias under our Actual minus Forecast convention.

A simple way to calculate average forecast error is:

$$
Mean\ Error=\frac{\sum(A_t-F_t)}{n}
$$

Using our example:

$$
ME=\frac{100+100+100}{3}
$$

$$
\boxed{ME=100}
$$

The forecast underestimates demand by an average of 100 units.

### Important Difference

| Forecast Accuracy | Forecast Bias |
|---|---|
| Measures closeness to actual demand. | Measures directional tendency of errors. |
| Focuses on error magnitude. | Focuses on whether errors are consistently positive or negative. |
| Evaluated using MAD, MAPE, MSE, etc. | Evaluated using Mean Error or other bias measures. |

**A forecast can have reasonable accuracy but still exhibit bias.**

For example, consistently underestimating demand by 20 units may produce relatively small errors, but it is still a systematic forecasting problem.

In manufacturing, this can result in repeated production shortages and inventory problems.

---

# 5.7 COMPARING THE FORECASTING METHODS

Let's summarize all six methods.

| Method | Required Historical Data | Forecasting Approach | Responsiveness | Best Suited For |
|---|---|---|---|---|
| Naive | Latest actual observation | Uses latest actual demand | Very responsive | Stable or short-term demand |
| SMA | Selected number of recent observations | Equal-weight average | Depends on window size | Stable demand |
| WMA | Selected historical observations and weights | Weighted average | Depends on weights | Stable demand with preference for recent data |
| SES | Previous forecast and latest actual | Exponential smoothing | Depends on Alpha | Stable demand |
| Linear Regression | Multiple historical observations with time periods | Estimates trend equation | Captures underlying trend | Trending demand |
| Seasonal Forecasting | Sufficient historical observations across recurring seasons | Uses seasonal indices or factors | Captures recurring patterns | Seasonal demand |

### Why is there no single best forecasting method?

Imagine that your company manufactures three products.

| Product | Demand Pattern |
|---|---|
| Product A | Stable |
| Product B | Increasing every month |
| Product C | High demand every December |

Would it make sense to use the same forecasting method for all three?

Not necessarily.

For example:

- Product A may perform well using SMA or SES.
- Product B may require regression or a trend-adjusted smoothing method.
- Product C may benefit from seasonal forecasting.

The appropriate forecasting method depends on the demand characteristics.

**Professional principle:**

The objective is not to find the most complicated forecasting method.

The objective is to find a method that produces reliable forecasts for the specific product and planning situation.

---

## 5.8 Comparing Forecast Performance Using Our Manufacturing Dataset

Now let's evaluate the methods using a common historical evaluation period.

We will use October, November, and December as our test periods.

Important distinction:

These three months are used to evaluate the forecasting methods. We are not using their actual demand to fit the regression model.

For regression, we use January to September to estimate the trend.

For the other methods, we generate forecasts sequentially using the available historical observations.

### A. Actual vs. Forecast

| Month | Actual | Naive | SMA | WMA | SES | Regression |
|---|---:|---:|---:|---:|---:|---:|
| October | 1,210 | 1,180 | 1,156.67 | 1,162 | 1,131.33 | 1,200.28 |
| November | 1,250 | 1,210 | 1,176.67 | 1,187 | 1,154.93 | 1,221.44 |
| December | 1,300 | 1,250 | 1,213.33 | 1,224 | 1,183.45 | 1,242.61 |

Notice that all methods underestimate actual demand.

Why?

Because actual demand continues increasing.

Some methods are slower to respond to the upward trend.

### B. Calculate the Forecast Errors

Using:

$$
Error=Actual-Forecast
$$

| Month | Naive | SMA | WMA | SES | Regression |
|---|---:|---:|---:|---:|---:|
| October | 30.00 | 53.33 | 48.00 | 78.67 | 9.72 |
| November | 40.00 | 73.33 | 63.00 | 95.07 | 28.56 |
| December | 50.00 | 86.67 | 76.00 | 116.55 | 57.39 |

Positive errors mean underforecasting.

### C. Calculate MAD

Recall:

$$
MAD=\frac{\sum|Error|}{n}
$$

For Naive:

$$
MAD=\frac{30+40+50}{3}
$$

$$
\boxed{MAD=40}
$$

For SMA:

$$
MAD=\frac{53.33+73.33+86.67}{3}
$$

$$
\boxed{MAD=71.11}
$$

For WMA:

$$
MAD=\frac{48+63+76}{3}
$$

$$
\boxed{MAD=62.33}
$$

For SES:

$$
MAD=\frac{78.67+95.07+116.55}{3}
$$

$$
\boxed{MAD=96.76}
$$

For Regression:

$$
MAD=\frac{9.72+28.56+57.39}{3}
$$

$$
\boxed{MAD=31.89}
$$

### D. Calculate MAPE and MSE

Applying the same formulas to all three evaluation periods:

| Method | MAD (Units) | MAPE | MSE (Units²) |
|---|---:|---:|---:|
| Naive | 40.00 | 3.18% | 1,666.67 |
| SMA | 71.11 | 5.65% | 5,244.44 |
| WMA | 62.33 | 4.95% | 4,016.33 |
| SES | 96.76 | 7.69% | 9,603.69 |
| Regression | 31.89 | 2.50% | 1,401.14 |

### E. Interpret the Results

Let's rank the methods based on their MAD.

| Rank | Method | MAD |
|---:|---|---:|
| 1 | Regression | 31.89 |
| 2 | Naive | 40.00 |
| 3 | WMA | 62.33 |
| 4 | SMA | 71.11 |
| 5 | SES | 96.76 |

For this particular dataset and evaluation period, regression performed best among the five methods.

Why?

Because the dataset contains an upward trend, and regression explicitly models the relationship between time and demand.

Naive forecasting also performed reasonably well because the latest actual demand was a useful indicator of the next period.

SMA and WMA lagged behind the upward trend.

SES also lagged because we used a relatively low Alpha of 0.30.

### F. Does This Mean Regression Is Always the Best?

Absolutely not.

Remember our dataset.

It contains an upward trend with relatively small fluctuations.

If the demand were stable, SMA or SES might perform better.

If demand were seasonal, seasonal forecasting might outperform basic regression.

Also, we only evaluated three months.

A professional analyst should evaluate models over a longer and more representative historical period whenever possible.

**Important analytical lesson:**

The best-performing method in one evaluation period is not automatically the best method for future demand.

Forecast performance should be monitored continuously.

---

# 7. BUSINESS PERSPECTIVE AND DECISION-MAKING

Now let's connect everything to the actual responsibilities of an S&OP Analyst.

Imagine that you are preparing the demand forecast for Product A.

You have historical demand, several forecasting methods, and forecast accuracy results.

What should you actually do with this information?

## 7.1 Selecting an Appropriate Forecasting Method

An S&OP Analyst should not immediately select a forecasting method based on personal preference.

Instead, follow a structured approach.

**Step 1: Understand the product.**

Determine whether the product has:

- Stable demand
- Upward or downward trend
- Seasonal demand
- Irregular fluctuations

**Step 2: Examine historical data.**

Check whether the data is:

- Complete
- Accurate
- Consistent
- Representative of normal demand

**Step 3: Identify unusual observations.**

For example:

Suppose a product normally has monthly demand of 1,000 units.

Suddenly, demand reaches 5,000 units.

You should investigate whether this was:

- A genuine increase in customer demand
- A one-time bulk order
- A data entry error
- A temporary customer requirement

Do not automatically assume that the 5,000-unit observation represents the new normal demand level.

**Step 4: Test suitable forecasting methods.**

Generate forecasts using appropriate methods.

**Step 5: Compare forecast accuracy.**

Use MAD, MAPE, MSE, and bias measurements.

**Step 6: Select and monitor the forecasting method.**

Choose the method that performs appropriately for the product and business requirements.

---

## 7.2 Developing a Statistical Baseline Forecast

The statistical baseline forecast is the initial forecast generated using historical demand and a selected forecasting method.

For example:

| Product | Selected Method | Baseline Forecast |
|---|---|---:|
| Product A | Linear Regression | 1,264 |
| Product B | SMA | 2,500 |
| Product C | Seasonal Forecasting | 3,200 |

These are illustrative values.

The baseline forecast provides a starting point for the Demand Review process.

However, it may not include all future business information.

For example:

- A customer announces a new product launch.
- A major customer reduces its purchase commitment.
- A competitor exits the market.
- A customer schedules a plant shutdown.
- A new sales promotion is planned.

These events may require reviewing the statistical baseline.

---

## 7.3 Evaluating Forecast Performance

An S&OP Analyst should regularly monitor forecast accuracy.

For example:

| Product | MAD | MAPE | Bias |
|---|---:|---:|---|
| Product A | 40 | 3.2% | Underforecast |
| Product B | 250 | 8.5% | Overforecast |
| Product C | 100 | 12.0% | Underforecast |

The analyst should investigate:

- Why is Product B consistently overforecasted?
- Why is Product C difficult to predict?
- Is Product A's low MAPE representative of its normal performance?
- Are forecast errors increasing over time?

The purpose is not simply to report forecast accuracy.

The purpose is to understand why the forecast is performing the way it does.

---

## 7.4 Impact on Production Planning

Let's return to Product A.

January statistical baseline forecast:

1,264 units.

Suppose production planning uses this forecast as an initial input.

The production team can use it to estimate:

- Required production quantity
- Machine loading
- Labor requirements
- Production schedules
- Capacity utilization

However, the production plan must also consider:

- Existing finished goods inventory
- Open customer orders
- Available production capacity
- Production yield
- Manufacturing lead time

A forecast of 1,264 units does not automatically mean that the company should manufacture 1,264 units.

Why?

Because some demand may already be covered by available inventory or scheduled production.

---

## 7.5 Impact on Procurement Planning

Forecasting also affects raw material purchasing.

Imagine:

Forecasted demand = 1,264 finished units.

Each finished unit requires two pieces of a particular raw material.

Then the initial material requirement is:

$$
Material\ Requirement=1264\times2
$$

$$
\boxed{2528\ pieces}
$$

But procurement must also consider:

- Existing raw material inventory
- Open purchase orders
- Supplier lead time
- Material scrap or yield loss
- Safety stock
- Minimum order quantities

The forecast becomes one of the inputs for material planning.

---

## 7.6 Impact on Inventory Planning

An inaccurate forecast can create two major problems.

**Underforecasting**

Forecast is lower than actual demand.

Possible consequences:

- Inventory shortages
- Missed customer deliveries
- Expedited procurement
- Emergency production
- Additional logistics costs

**Overforecasting**

Forecast is higher than actual demand.

Possible consequences:

- Excess inventory
- Increased inventory holding costs
- Obsolete materials
- Unnecessary production
- Increased working capital requirements

This is why forecast accuracy matters beyond statistical reporting.

It has direct operational and financial consequences.

---

## 7.7 Communicating Forecast Assumptions and Risks

During Demand Review, an S&OP Analyst should be able to explain the forecast.

For example:

**Product A – January Demand Forecast**

| Item | Information |
|---|---|
| Historical Data | January to December |
| Observed Pattern | Upward trend |
| Selected Method | Linear Regression |
| Baseline Forecast | Approximately 1,264 units |
| Evaluation Method | MAD, MAPE, MSE |
| Historical MAD | 31.89 units |
| Main Assumption | Historical trend continues |
| Main Risk | Demand may change due to customer requirements |

A good analyst does not simply present a forecast number.

The analyst explains:

1. Where the number came from.
2. What assumptions were used.
3. How reliable the forecast has been.
4. What risks could affect future demand.
5. What decisions may be required.

That is the difference between merely calculating a forecast and professionally managing a demand plan.

---

# 8. KEY TAKEAWAYS

Let's consolidate everything from Topic 3.4.

## 8.1 Quantitative Forecasting Fundamentals

| Concept | What You Should Remember |
|---|---|
| Quantitative Forecasting | Uses numerical historical data and mathematical methods to estimate future demand. |
| Time-Series Data | Historical observations organized by time. |
| Historical Observation | Actual demand recorded during a specific period. |
| Forecast Period | The future period being estimated. |
| Stable Demand | Relatively consistent demand. |
| Trend | Long-term upward or downward movement. |
| Seasonality | Recurring demand patterns. |
| Variability | Degree of demand fluctuation. |

## 8.2 Forecasting Methods

| Method | Main Concept | Important Consideration |
|---|---|---|
| Naive | Next forecast equals latest actual demand. | Simple benchmark. |
| SMA | Average of recent observations. | All selected observations have equal weights. |
| WMA | Average using assigned weights. | Recent periods can receive greater importance. |
| SES | Updates forecasts using actual demand and previous forecast. | Alpha controls responsiveness. |
| Regression | Estimates a mathematical demand trend. | Uses slope and intercept. |
| Seasonal Forecasting | Adjusts forecasts based on recurring seasonal patterns. | Requires reliable seasonal history. |

## 8.3 Forecast Accuracy Metrics

| Metric | What It Measures | Interpretation |
|---|---|---|
| Forecast Error | Difference between actual and forecast. | Shows underforecasting or overforecasting. |
| MAD | Average absolute error. | Average deviation in demand units. |
| MAPE | Average absolute percentage error. | Relative forecast error in percentage. |
| MSE | Average squared error. | Gives greater penalty to large errors. |
| Mean Error | Average signed forecast error. | Helps identify directional bias. |

## 8.4 Important Formulas

These are the formulas you should be familiar with.

**Naive Forecasting**

$$
F_{t+1}=A_t
$$

**Simple Moving Average**

$$
F_{t+1}=\frac{\sum A}{n}
$$

**Weighted Moving Average**

$$
F_{t+1}=\sum(A_iW_i)
$$

**Simple Exponential Smoothing**

$$
F_{t+1}=\alpha A_t+(1-\alpha)F_t
$$

**Linear Regression**

$$
Y=a+bt
$$

**Seasonal Index**

$$
SI=\frac{Seasonal\ Average}{Overall\ Average}
$$

**Forecast Error**

$$
Error=Actual-Forecast
$$

**MAD**

$$
MAD=\frac{\sum|Error|}{n}
$$

**MAPE**

$$
MAPE=\frac{1}{n}\sum\left|\frac{Error}{Actual}\right|\times100
$$

**MSE**

$$
MSE=\frac{\sum(Error)^2}{n}
$$

### What should you be able to do after this lesson?

By the end of Topic 3.4, you should be able to:

1. Recognize basic historical demand patterns.
2. Explain the six quantitative forecasting methods.
3. Calculate forecasts using SMA, WMA, SES, and regression.
4. Understand how Alpha affects exponential smoothing.
5. Calculate seasonal indices.
6. Calculate MAD, MAPE, and MSE.
7. Distinguish forecast accuracy from forecast bias.
8. Compare forecasting methods using historical performance.
9. Select an appropriate forecasting method based on demand characteristics.
10. Explain how forecasts support production, procurement, and inventory planning.

---

# 9. KNOWLEDGE CHECK AND EXERCISES

We will now move from understanding to application.

I prepared three levels of exercises.

**Important:** Hindi ko muna ibibigay ang answers. Sagutan mo muna, then I will check your calculations, reasoning, and business interpretation.

I will evaluate not only whether your final answer is correct, but also whether you understand why you used that method.

## LEVEL 1 – UNDERSTANDING

### Question 1: Forecasting Fundamentals

Explain the difference between the following:

A. Stable Demand

B. Trend

C. Seasonality

D. Variability

Provide one manufacturing example for each.

### Question 2: Method Selection

Identify the most appropriate initial forecasting method for each situation.

| Situation | Your Selected Method |
|---|---|
| A. Demand remains relatively consistent every month. | ? |
| B. Demand increases consistently over time. | ? |
| C. Demand increases every December and decreases every January. | ? |
| D. The company wants to give more importance to the latest three months. | ? |
| E. The company wants to update its forecast using the previous forecast and latest actual demand. | ? |

Explain why you selected each method.

### Question 3: Understanding Alpha

A company uses Simple Exponential Smoothing.

It increases its Alpha from 0.20 to 0.80.

What happens to the responsiveness of its forecast?

Explain the advantages and possible disadvantages of increasing Alpha.

---

## LEVEL 2 – TECHNICAL APPLICATION

### Exercise 1: Simple Moving Average

An electronic components manufacturer recorded the following demand:

| Month | Actual Demand |
|---|---:|
| January | 800 |
| February | 850 |
| March | 900 |
| April | 950 |
| May | 1,000 |
| June | 1,050 |

Calculate:

1. July forecast using a three-month SMA.
2. July forecast using a six-month SMA.

Then answer:

- Why are the two forecasts different?
- Which forecast is more responsive to recent demand?
- What happens when we increase the moving-average window?

### Exercise 2: Weighted Moving Average

Using the same dataset, calculate July demand using these weights:

| Month | Actual Demand | Weight |
|---|---:|---:|
| April | 950 | 20% |
| May | 1,000 | 30% |
| June | 1,050 | 50% |

Calculate the weighted forecast.

Then explain why the result is different from the three-month SMA.

### Exercise 3: Simple Exponential Smoothing

Given:

- Previous forecast = 1,000 units
- Actual demand = 1,200 units
- Alpha = 0.40

Calculate:

1. The next forecast.
2. The next forecast if Alpha becomes 0.80.
3. The difference between the two results.

Explain which Alpha is more responsive and why.

### Exercise 4: Linear Regression

Given the following historical demand:

| Month | Time (t) | Demand (Y) |
|---|---:|---:|
| January | 1 | 500 |
| February | 2 | 550 |
| March | 3 | 600 |
| April | 4 | 650 |
| May | 5 | 700 |

Calculate:

1. Slope (b).
2. Intercept (a).
3. Regression equation.
4. Forecast for June.
5. Forecast for July.

Explain the business meaning of your slope.

### Exercise 5: Forecast Error Measurement

A company has the following actual and forecast demand:

| Month | Actual Demand | Forecast Demand |
|---|---:|---:|
| January | 1,000 | 950 |
| February | 1,200 | 1,250 |
| March | 1,500 | 1,400 |
| April | 1,300 | 1,350 |

Calculate:

1. Forecast Error for each month.
2. Absolute Error.
3. MAD.
4. MAPE.
5. MSE.
6. Mean Error.

Then answer:

- Is the company generally overforecasting or underforecasting?
- Is its forecast consistently biased in one direction?
- What does its MAD tell you?

---

## LEVEL 3 – PROFESSIONAL ANALYSIS

This section simulates a simplified S&OP Analyst assignment.

### Business Scenario

You are responsible for preparing the statistical demand forecast for an electronic component manufactured by your company.

Your historical demand is:

| Month | Actual Demand |
|---|---:|
| January | 2,000 |
| February | 2,050 |
| March | 2,100 |
| April | 2,080 |
| May | 2,150 |
| June | 2,200 |
| July | 2,250 |
| August | 2,300 |
| September | 2,280 |
| October | 2,350 |
| November | 2,400 |
| December | 2,500 |

Your manager asks you to recommend a forecasting method for the next planning period.

Answer the following:

**1. Demand Pattern Analysis**

What demand pattern do you observe?

Is it stable, trending, seasonal, or highly variable?

Explain your assessment.

**2. Forecasting Method Selection**

Which forecasting method would you initially recommend?

Why?

Would you recommend SMA, WMA, SES, or Regression?

**3. Forecast Reliability**

Suppose your selected method produces a MAPE of 4%.

How would you explain this result to your manager?

Would you automatically conclude that the forecast is reliable?

Why or why not?

**4. Operational Impact**

Suppose your forecast is consistently 10% lower than actual customer demand.

What possible problems could occur in:

- Production planning?
- Procurement?
- Inventory management?
- Customer service?

**5. Professional Recommendation**

Your manager asks:

"Why should we use your recommended forecasting method instead of simply using last month's actual demand?"

Prepare a short professional explanation.

---

## How We Will Evaluate Your Answers

For your exercises, I will assess:

| Evaluation Area | What I Will Check |
|---|---|
| Conceptual Understanding | Do you understand the forecasting concepts? |
| Mathematical Accuracy | Are your formulas and calculations correct? |
| Method Selection | Did you choose an appropriate forecasting method? |
| Data Interpretation | Can you explain what the numerical results mean? |
| Business Application | Can you connect the forecast to actual S&OP decisions? |

Hindi kailangang perfect agad ang answers.

Ang objective natin ay maintindihan mo ang mathematical process, malaman kung kailan appropriate gamitin ang bawat method, at matutong mag-interpret ng results from a business perspective.

---

### END OF MODULE 3 – TOPIC 3.4

**Topic 3.4: Quantitative Forecasting Methods**

You have now covered the fundamental statistical methods used to develop demand forecasts, together with their calculations, limitations, and business applications.

**Recommended learning sequence:** Sagutan muna natin ang Level 1, then Level 2, bago pumunta sa Level 3. This will help establish your foundation before moving into professional forecasting analysis.

We will remain on **Topic 3.4** until you are comfortable with the concepts and exercises. Hindi muna tayo lilipat sa Topic 3.5.
