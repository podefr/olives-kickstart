define(function (require) {

	var OObject = olives.OObject,
		Bind = olives["Bind.plugin"],
		Store = olives.Store;

	return function DashboardConstructor(dom, config) {

		var dashboard = new OObject,
			bindConfig = new Bind(config);

		dashboard.plugins.add("config", bindConfig);

		dashboard.alive(dom);

		return dashboard;

	};

});
