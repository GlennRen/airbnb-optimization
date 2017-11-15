var data = [
	{
		label: 'Mission',
		strokeColor: '#FF4F54',
		data: [{x: 212.18, y: 9.556}]
	},
	{
		label: 'West of Twin Peaks',
		strokeColor: '#FF4F54',
		data: [{x: 201.74, y:9.624}]
	},
	{
		label: 'Inner Richmond',
		strokeColor: '#FF4F54',
		data: [{x: 230.97, y:9.661}]
	},
	{
		label: 'Marina',
		strokeColor: '#FF4F54',
		data: [{x: 321.35, y: 9.902}]
	},
	{
		label: 'Bayview',
		strokeColor: '#FF4F54',
		data: [{x: 126.14, y: 8.161}]
	},
	{
		label: 'Visitacion Valley',
		strokeColor: '#FF4F54',
		data: [{x: 126.89, y: 9.0}]
	},
	{
		label: 'Pacific Heights',
		strokeColor: '#FF4F54',
		data: [{x: 331.81, y: 9.885}]
	},
	{
		label: 'Presidio Heights',
		strokeColor: '#FF4F54',
		data: [{x: 551.16, y: 9.667}]
	},
	{
		label: 'South of Market',
		strokeColor: '#FF4F54',
		data: [{x: 350.52, y: 9.239}]
	},
	{
		label: 'Glen Park',
		strokeColor: '#FF4F54',
		data: [{x: 233.14, y: 9.706}]
	},
	{
		label: 'Potrero Hill',
		strokeColor: '#FF4F54',
		data: [{x: 320.21, y: 9.545}]
	},
	{
		label: 'Castro/Upper Market',
		strokeColor: '#FF4F54',
		data: [{x: 249.48, y: 9.881}]
	},
	{
		label: 'Twin Peaks',
		strokeColor: '#FF4F54',
		data: [{x: 210.41, y: 9.558}]
	},
	{
		label: 'Bernal Heights',
		strokeColor: '#FF4F54',
		data: [{x: 201.02, y: 9.533}]
	},
	{
		label: 'Chinatown',
		strokeColor: '#FF4F54',
		data: [{x: 277.59, y: 9.735}]
	},
	{
		label: 'North Beach',
		strokeColor: '#FF4F54',
		data: [{x: 322.16, y: 9.752}]
	},
	{
		label: 'Presidio',
		strokeColor: '#FF4F54',
		data: [{x: 663.8, y: 9.5}]
	},
	{
		label: 'Nob Hill',
		strokeColor: '#FF4F54',
		data: [{x: 239.01, y: 9.768}]
	},
	{
		label: 'Outer Sunset',
		strokeColor: '#FF4F54',
		data: [{x: 164.77, y: 9.445}]
	},
	{
		label: 'Western Addition',
		strokeColor: '#FF4F54',
		data: [{x: 278.36, y: 9.754}]
	},
	{
		label: 'Golden Gate Park',
		strokeColor: '#FF4F54',
		data: [{x: 249.57, y: 9.714}]
	},
	{
		label: 'Ocean View',
		strokeColor: '#FF4F54',
		data: [{x: 147.22, y: 9.089}]
	},
	{
		label: 'Seacliff',
		strokeColor: '#FF4F54',
		data: [{x: 286.43, y: 9.667}]
	},
	{
		label: 'Haight Ashbury',
		strokeColor: '#FF4F54',
		data: [{x: 235.15, y: 9.756}]
	},
	{
		label: 'Outer Mission',
		strokeColor: '#FF4F54',
		data: [{x: 182.58, y: 9.254}]
	},
	{
		label: 'Downtown/Civic Center',
		strokeColor: '#FF4F54',
		data: [{x: 210.35, y: 9.049}]
	},
	{
		label: 'Diamond Heights',
		strokeColor: '#FF4F54',
		data: [{x: 201.52, y: 9.812}]
	},
	{
		label: 'Lakeshore',
		strokeColor: '#FF4F54',
		data: [{x: 167.67, y: 9.364}]
	},
	{
		label: 'Russian Hill',
		strokeColor: '#FF4F54',
		data: [{x: 362.28, y: 9.834}]
	},
	{
		label: 'Noe Valley',
		strokeColor: '#FF4F54',
		data: [{x: 271.02, y: 9.843}]
	},
	{
		label: 'Inner Sunset',
		strokeColor: '#FF4F54',
		data: [{x: 255.08, y: 9.724}]
	},
	{
		label: 'Treasure Island/YBI',
		strokeColor: '#FF4F54',
		data: [{x: 93.12, y: 9.533}]
	},
	{
		label: 'Outer Richmond',
		strokeColor: '#FF4F54',
		data: [{x: 203.57, y:9.49}]
	},
	{
		label: 'Crocker Amazon',
		strokeColor: '#FF4F54',
		data: [{x: 115.52, y: 8.682}]
	},
	{
		label: 'Excelsior',
		strokeColor: '#FF4F54',
		data: [{x: 144.27, y: 8.805}]
	},
	{
		label: 'Parkside',
		strokeColor: '#FF4F54',
		data: [{x: 231.16, y: 9.421}]
	},
	{
		label: 'Financial District',
		strokeColor: '#FF4F54',
		data: [{x: 266.38, y: 9.776}]
	},
];

var ctx = document.getElementById("myChart").getContext("2d");
var myDateLineChart = new Chart(ctx).Scatter(data, {
	bezierCurve: true,
	showTooltips: true,
	scaleShowHorizontalLines: true,
	scaleShowLabels: true,
	scaleLabel: "<%=value%>",
	scaleArgLabel: "$<%=value%>",
	datasetStroke: false,
});
