sap.ui.define([
	"nl/newitera/markdevlieger/contactlist/controller/BaseController"
], function(BaseController){
	"use strict";
	return BaseController.extend("nl.newitera.markdevlieger.contactlist.controller.Master",{
		onListItemPressed: function(oEvent){
			var oItem = oEvent.getSource();
			var oCtx  = oItem.getBindingContext();
			var aPath = oCtx.sPath.split("/");
			this.getRouter().navTo( "contactdetail",{
				contactId : aPath.pop()
			});
		}
	});
});