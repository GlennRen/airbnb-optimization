import csv, re

NB_INDEX = 14 # neighborhood index
NIGHTLY_PRICE_INDEX = 28
LOC_SCORE_INDEX = 50 # location review score index

nb_count = {} # neighborhood count
nb_total = {} # neighborhood total
nb_average = {} # neighborhood $/night averages

nb_loc_count = {} # nb count for listings w/ location reviews (not all do)
nb_loc_total = {} # total location score/neighborhood
nb_loc_average = {} # average location score/neighborhood

with open('../data/cleaned/listings_utf8.csv', newline='') as csvfile:
	listing_reader = csv.reader(csvfile, delimiter=',')
	for row in listing_reader:
		current_nb = row[NB_INDEX]
		current_loc_score = row[LOC_SCORE_INDEX]
		current_n_price = row[NIGHTLY_PRICE_INDEX] # current nightly price
		current_n_price = float(re.sub('[$,]', '', current_n_price))

		if (current_nb not in list(nb_count.keys())):
			nb_count[current_nb] = 0
			nb_total[current_nb] = 0
		else:
			nb_count[current_nb] += 1
			nb_total[current_nb] += current_n_price

		if (current_nb not in list(nb_loc_count.keys())):
			nb_loc_count[current_nb] = 0
			nb_loc_total[current_nb] = 0
		# check to make sure location score exists
		elif (current_loc_score != ''):
			nb_loc_count[current_nb] += 1
			nb_loc_total[current_nb] += int(current_loc_score)

# display neighborhood averages
for nb in list(nb_count.keys()):
	price = round(nb_total[nb] / nb_count[nb], 2)
	nb_average[nb] = price
	# print (nb + ": " + str(price))
# print (nb_average)

# display location review averages
for nb in list(nb_loc_count.keys()):
	location_score = round(float(nb_loc_total[nb]) / nb_loc_count[nb], 3)
	nb_loc_average[nb] = location_score
# print (nb_loc_average)

# creates .csv w/ neighborhood, price & score
with open('price_to_location.csv', 'w', newline='') as csvfile:
	nb_writer = csv.writer(csvfile, delimiter=',')
	for nb in list(nb_count.keys()):
		nb_writer.writerow([nb, nb_average[nb], nb_loc_average[nb]])
