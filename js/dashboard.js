define(function (require) {

	var OObject = require("olives").OObject,
		Bind = require("olives")["Bind.plugin"];

	return function DashboardConstructor(dom, config) {

		var dashboard = new OObject,
			bindConfig = new Bind(config);

		dashboard.plugins.add("config", bindConfig);

		dashboard.alive(dom);

		return dashboard;

	};

});
