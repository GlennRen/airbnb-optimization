# Airbnb Optimization
Price &amp; bookings optimization tool for Airbnb. Submission for **Capital One Software Engineering Summit**.

[Live Preview!](https://glennren.github.io/airbnb-optimization/)

## Contents
- [Stack Outline](#stack-outline)
- [Strategy](#strategy)
- [Bonuses](#bonuses)

## Stack outline
**Front End**
* Deployed on Github Pages
* jQuery + AJAX
* Google Maps API
* [Chart.js](http://www.chartjs.org/)

**Back End**
* Endpoints created using [Hasura](https://hasura.io/)
* PostgreSQL database
* [Cleaned](https://github.com/GlennRen/airbnb-optimization/tree/master/data/cleaned), filtered, & [stored](https://imgur.com/a/EWXtK) given data

## Strategy
### 1. Visualize the data:
* **Nightly Prices vs. Location Review Score**
* **Nightly Price Heat Map**
* **Review/Month Heat Map**
	* If I was a host looking to buy a new house (to rent out), I would want to buy a house in high demand (assuming more reviews/month correlates to more customers).

### 2. Price estimation:
Estimate the weekly average income a homeowner could make w/ Airbnb.

**Inputs:** latitude, longitude, property type, room type

**Output:** weekly income

**Strategy:**
1. Get inputs from user.
2. Filter listings down to those of the same property and room type.
3. Find 5 nearest houses based on latitude & longitude (considered neighborhood name as well but might not be as good of a predictor).
4. Calculate nightly averages of those houses.
5. Multiply the nightly price x 7 to get the weekly income.

**Assumptions:**
* Income meant gross income (revenue), not net income (profit).
* Predicted weekly income is assuming that the listing is booked every day of the week. I attempted to figure out the average nights/week that a listing is booked based on the location and reviews per month (another possible assumption: more reviews correlates to more bookings). Possible improvement in future.

### 3. Booking Optimization:
Optimize the nightly price for maximum # of bookings.

**Inputs:** latitude, longitude, property type, room type

**Outputs:** optimum nightly price

**Strategy:**
Same as #2. However this time, instead of multiplying by 7 to get the the weekly income, I subtracted $15 from the the average cost/night. This should undercut the other hosts and is a simple way to optimize bookings.

**Assumptions:**
* Lower price will lead to more bookings.

## Bonuses
**Animate:** Add an animation to your visualization.
* First data visualization graph expands from the bottom up.
* Other data visualization maps are interactive.

**Popularity:** Can you identify the neighborhood that averages the most positive reviews?

**Investment:** If I have $100 million to invest, where in San Francisco should I buy properties so I can maximize my returns with Airbnb? When will I break even?
