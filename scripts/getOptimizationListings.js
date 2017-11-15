function getUserInput() {
	var latitude = $("#latitude").val();
	var longitude = $("#longitude").val();

	if (isNaN(latitude) & isNaN(longitude) | latitude == "" & longitude == "") {
		alert("You must enter a valid value for latitude & longitude.");
	}
	else {
		latitude = parseFloat(latitude);
		longitude = parseFloat(longitude);
		if (latitude < -90 | latitude > 90) {
			alert("Latitude must be between -90 and 90.")
		}
		else if (longitude < -180 | longitude > 180) {
			alert("Longitude must be between -180 and 180.")
		}
		else {
			var roomType = $("#room-type").find(":selected").text();
			var propertyType = $("#property-type").find(":selected").text();
			getListings(latitude, longitude, roomType, propertyType);
		}
	}
}

function getListings(userLat, userLong, roomType, propertyType)
{
	$.ajax({
		url: "https://data.applicant94.hasura-app.io/v1/query",
		contentType: "application/json",
		headers: {
			"Authorization": "Bearer 9c352ddeb00a0f3f79250e87d13afb699a06d4fd1210b4cc"
		},
		data: JSON.stringify({
			"type": "select",
			"args": {
				"table": "listings",
				"columns": [
					"latitude",
					"longitude",
					"room_type",
					"price"
				],
				"where": {
					"property_type": {
						"$eq": propertyType
					}
				}
			}
		}),
		type: "POST",
		dataType: "json"
	}).done(function(json) {
		var origData = json;
		var origDataLength = origData.length;
		var i = 0;
		var newData = [];
		while (i < origDataLength)
		{
			var currListing = origData[i];
			var currLat = parseFloat(currListing["latitude"]);
			var currLong = parseFloat(currListing["longitude"]);
			if (currListing.room_type == roomType) {
					origData[i]["distance"] = Math.sqrt((currLat - userLat)**2 + (currLong - userLong)**2);
					newData.push(origData[i]);
			}
			i++;
		}
		newData.sort(function(a, b) {
			return a.distance - b.distance;
		})

		var total = 0;
		for (var i = 0; i < 5; i++) {
			// console.log(newData[i].price);
			total += parseFloat(newData[i].price.replace('$',''));
		}
		var average = total / 5;
		// console.log(average);
		// console.log(newData);
		$("#estimated-price").text("$" + (average - 10).toFixed(2));
	}).fail(function(xhr, status, errorThrown) {
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	});
}
