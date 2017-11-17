var map, heatmap;

function initMap() {
	map = new google.maps.Map(document.getElementById('density-map'), {
		zoom: 12,
		center: {lat: 37.775, lng: -122.434},
		mapTypeId: 'roadmap'
	});
	getAllListings();
	map2 = new google.maps.Map(document.getElementById('reviews-map'), {
		zoom: 12,
		center: {lat: 37.775, lng: -122.434},
		mapTypeId: 'roadmap'
	});
}

function getAllListings() {
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
					"reviews_per_month"
				]
			}
		}),
		type: "POST",
		dataType: "json"
	}).done(function(allListings) {
		var heatMapData = [];
		var reviewsMapData = [];

		for (var i = 0; i < allListings.length; i++) {
			var listing = allListings[i];
			var latLong = new google.maps.LatLng(listing["latitude"], listing["longitude"]);

			var reviewLatLong = {}
			reviewLatLong.location = new google.maps.LatLng(listing["latitude"], listing["longitude"]);
			reviewLatLong.weight = parseFloat(listing["reviews_per_month"]);

			heatMapData.push(latLong);
			reviewsMapData.push(reviewLatLong);
		}

		heatmap = new google.maps.visualization.HeatmapLayer({
			data: heatMapData,
			map: map
		});

		heatmap2 = new google.maps.visualization.HeatmapLayer({
			data: reviewsMapData,
			map: map2
		});
	}).fail(function(xhr, status, errorThrown) {
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	});
}
