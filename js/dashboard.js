define(function (require) {

	var OObject = require("OObject"),
		Bind = require("Bind.plugin"),
		Store = require("Store");

	return function DashboardConstructor(dom, config) {

		var dashboard = new OObject,
			bindConfig = new Bind(config);

		dashboard.plugins.add("config", bindConfig);

		dashboard.alive(dom);

		return dashboard;

	};

});
