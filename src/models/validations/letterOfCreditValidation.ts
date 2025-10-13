import * as Yup from "yup";

export class LetterOfCreditValidation {

    static sharedSchema = {
        letterOfCreditAdditionalConditions: Yup.string().required(),
        letterOfCreditAdviseDirect: Yup.string().required(),
        letterOfCreditApplicableRules: Yup.string().required(),
        letterOfCreditApplicant: Yup.string().required(),
        letterOfCreditApplicantNameandaddress: Yup.string().required(),
        letterOfCreditApplicantReference: Yup.string().required(),
        letterOfCreditApplicationDate: Yup.string().required(),
        letterOfCreditAutomaticallyCreateFollowOnEvent: Yup.string().required(),
        letterOfCreditAvailableWith: Yup.string().required(),
        letterOfCreditBidDate: Yup.string().required(),
        letterOfCreditBidNumber: Yup.string().required(),
        letterOfCreditConfirmation: Yup.string().required(),
        letterOfCreditCreatedAt: Yup.string().required(),
        letterOfCreditDocumentsRequired: Yup.string().required(),
        letterOfCreditDocumentsToBeSentBy: Yup.string().required(),
        letterOfCreditDomesticExpiry: Yup.string().required(),
        letterOfCreditExpiryDate: Yup.string().required(),
        letterOfCreditExpiryPlace: Yup.string().required(),
        letterOfCreditFinalWording: Yup.string().required(),
        letterOfCreditForPercentageOfInvoice: Yup.string().required(),
        letterOfCreditFreight: Yup.string().required(),
        letterOfCreditFrom: Yup.string().required(),
        letterOfCreditGoodsCode: Yup.string().required(),
        letterOfCreditGoodsDescription: Yup.string().required(),
        letterOfCreditIncoterms: Yup.string().required(),
        letterOfCreditInsuranceForBuyer: Yup.string().required(),
        letterOfCreditIrrevocable: Yup.string().required(),
        letterOfCreditIssueBy: Yup.string().required(),
        letterOfCreditIssueDate: Yup.string().required(),
        letterOfCreditNoOfPackagesDeliveryItems: Yup.string().required(),
        letterOfCreditOperative: Yup.string().required(),
        letterOfCreditPartialShipments: Yup.string().required(),
        letterOfCreditPlaceOfDischargeDestination: Yup.string().required(),
        letterOfCreditPlaceOfLoadingDeparture: Yup.string().required(),
        letterOfCreditPreadviceDate: Yup.string().required(),
        letterOfCreditPresentationPeriodNarrative: Yup.string().required(),
        letterOfCreditPresentationPeriodNoOfDays: Yup.string().required(),
        letterOfCreditProductType: Yup.string().required(),
        letterOfCreditProvisional: Yup.string().required(),
        letterOfCreditRevolving: Yup.string().required(),
        letterOfCreditSectorialPurpose: Yup.string().required(),
        letterOfCreditShipmentDate: Yup.string().required(),
        letterOfCreditShipmentPeriod: Yup.string().required(),
        letterOfCreditSpecialPaymentConditionsForBeneficiary: Yup.string().required(),
        letterOfCreditSpecialPaymentConditionsForReceivingBank: Yup.string().required(),
        letterOfCreditStatus: Yup.string().required(),
        letterOfCreditTo: Yup.string().required(),
        letterOfCreditTransferable: Yup.string().required(),
        letterOfCreditTranshipments: Yup.string().required(),
        letterOfCreditUpdatedAt: Yup.string().required(),
        locReference: Yup.string().required(),
    };

    static createLetterOfCreditForm = Yup.object().shape({
        ...this.sharedSchema
    });

    static updateLetterOfCreditForm = Yup.object().shape({
        ...this.sharedSchema,
        letterOfCreditId: Yup.string(),
    });
}
