define(function (require) {

	var Dashboard = require("js/Dashboard"),
		Store = require("Store"),
		Config = new Store({
			name: "Olives"
		});

	new Dashboard(document.querySelector(".olives-kickstart"), Config);
});
