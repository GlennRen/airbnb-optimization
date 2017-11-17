var map, heatmap;

function initMap() {
	console.log("RUN");
	map = new google.maps.Map(document.getElementById('density-map'), {
		zoom: 12,
		center: {lat: 37.775, lng: -122.434},
		mapTypeId: 'roadmap'
	});
	getAllListings();
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
					"longitude"
				]
			}
		}),
		type: "POST",
		dataType: "json"
	}).done(function(allListings) {
		var heatMapData = [];

		for (var i = 0; i < allListings.length; i++) {
			var listing = allListings[i];
			console.log(listing["latitude"]);
			console.log(listing["longitude"])

			var latLong = new google.maps.LatLng(listing["latitude"], listing["longitude"]);
			heatMapData.push(latLong);
		}

		heatmap = new google.maps.visualization.HeatmapLayer({
			data: heatMapData,
			map: map
		});
	}).fail(function(xhr, status, errorThrown) {
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	});
}
