import csv, re

PROPERTY_TYPE_INDEX = 21
ROOM_TYPE_INDEX = 22

property_types = []
room_types = []

with open('../data/cleaned/listings_utf8.csv') as csvfile:
	listing_reader = csv.reader(csvfile, delimiter=',')
	for row in listing_reader:
		if (row[PROPERTY_TYPE_INDEX] not in property_types):
			property_types.append(row[PROPERTY_TYPE_INDEX])
		if (row[ROOM_TYPE_INDEX] not in room_types):
			room_types.append(row[ROOM_TYPE_INDEX])

print (property_types)
print (room_types)
