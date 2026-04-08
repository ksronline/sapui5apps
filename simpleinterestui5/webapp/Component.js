sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("com.demo.simpleinterest.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model with default values
            var oData = {
                principal: "",
                rate: "",
                time: "",
                simpleInterest: "",
                totalAmount: ""
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});
