import * as Yup from "yup";

export class TransactionPartyValidation {

    static sharedSchema = {
        locReference: Yup.string().required("locReference is required"),
        transactionPartyLiability: Yup.string()
            .required("Transaction Party Liability is required"),
        transactionPartyName: Yup.string()
            .required("Transaction Party Name is required"),
        transactionPartyReference: Yup.string()
            .required("Transaction Party Reference is required"),
        transactionPartyRole: Yup.string()
            .required("Transaction Party Role is required"),
    };

    static createTransactionPartyForm = Yup.object().shape({
        ...this.sharedSchema
    });

    static updateTransactionPartyForm = Yup.object().shape({
        ...this.sharedSchema,
        transactionPartyCreatedAt: Yup.string()
            .required("Transaction Party Created At is required"),
        transactionPartyId: Yup.number()
            .min(1, "Transaction Party ID must be a positive number")
            .required("Transaction Party ID is required"),
        transactionPartyStatus: Yup.string()
            .required("Transaction Party Status is required"),
        transactionPartyUpdatedAt: Yup.string()
            .required("Transaction Party Updated At is required"),
    });
}
