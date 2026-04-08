sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.demo.simpleinterest.controller.App", {

        onCalculate: function () {
            var oModel = this.getView().getModel();
            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var fPrincipal = parseFloat(oModel.getProperty("/principal"));
            var fRate = parseFloat(oModel.getProperty("/rate"));
            var fTime = parseFloat(oModel.getProperty("/time"));

            // Validate inputs
            if (isNaN(fPrincipal) || isNaN(fRate) || isNaN(fTime)) {
                MessageToast.show(oBundle.getText("validationError"));
                return;
            }

            if (fPrincipal <= 0 || fRate <= 0 || fTime <= 0) {
                MessageToast.show(oBundle.getText("positiveValueError"));
                return;
            }

            // Calculate Simple Interest: SI = (P x R x T) / 100
            var fSimpleInterest = (fPrincipal * fRate * fTime) / 100;
            var fTotalAmount = fPrincipal + fSimpleInterest;

            oModel.setProperty("/simpleInterest", fSimpleInterest.toFixed(2));
            oModel.setProperty("/totalAmount", fTotalAmount.toFixed(2));

            MessageToast.show(oBundle.getText("calculationSuccess"));
        },

        onClear: function () {
            var oModel = this.getView().getModel();

            oModel.setProperty("/principal", "");
            oModel.setProperty("/rate", "");
            oModel.setProperty("/time", "");
            oModel.setProperty("/simpleInterest", "");
            oModel.setProperty("/totalAmount", "");
        }
    });
});
