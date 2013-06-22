define(function (require) {

	var Dashboard = require("js/dashboard"),
		Config = new olives.Store({
			name: "Olives"
		});

	new Dashboard(document.querySelector(".olives-kickstart"), Config);
});
