require.config({
	paths: {
		emily: './components/emily/build/Emily',
		olives: './components/olives/build/Olives'
	},
	shim: {
		olives: {
			exports: 'olives'
		},
		emily: {
			exports: 'emily'
		}
	}
});

define(function (require) {

	var Dashboard = require("js/dashboard"),
		Store = require("emily").Store,
		config = new Store({
			name: "Olives"
		});

	new Dashboard(document.querySelector(".olives-kickstart"), config);
});

