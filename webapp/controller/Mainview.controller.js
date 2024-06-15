sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
/**
 * 
 * @param {Typeof sap.ui.core.mvc.controller} Controller 
  */
function (Controller) {
    "use strict";

    return Controller.extend("logaligroup.invoices.controller.Mainview", {
        onInit : function () {
            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView =this.getView();
            oJSONModel.loadData("../model/SelectionScreenMenu.json");
            oView.setModel(oJSONModel, "SelectionScreen");
        },

        onFilter : function (oEvent) {

        },
        onClearFilters : function () {

            const oModelSelectionScreen =this.getView().getModel("SelectionScreen");
            oModelSelectionScreen.setProperty("/ShipName", "");
            oModelSelectionScreen.setProperty("/CountryKey", "");
        }
    });
});
