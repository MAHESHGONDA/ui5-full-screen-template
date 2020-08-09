sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.demo.fullscreen.controller.Home", {

		onInit: function() {

		},
		gotoOverviewPage: function(oEvent) {
			// this.getOwnerComponent().getRouter().navTo("route_name");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// If set to true, the hash is replaced, and there will be no entry in the browser history.
			// If set to false, the hash is set and the entry is stored in the browser histo   
			oRouter.navTo("overview", {
				empId: "123", //manditory
				empName: "mahesh" //optional
			}, null, true);

		}

	});
});