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
				"price"
			]
		}
	}),
	type: "POST",
	dataType: "json"
}).done(function(json) {
	console.log(json)
}).fail(function(xhr, status, errorThrown) {
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
});
