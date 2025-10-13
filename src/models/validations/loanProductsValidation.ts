import * as Yup from "yup";

export class LoanProductsValidation {
    static ipRegex = /^(?:\d{1,3}\.){3}\d{1,3}$/;

    static sharedSchema = {
        createdBy: Yup.string().required("Created By is required"),
        createdByIp: Yup.string()
            .matches(this.ipRegex, "Invalid IP format")
            .required("Created By IP is required"),
        modifiedBy: Yup.string().required("Modified By is required"),
        modifiedByIp: Yup.string()
            .matches(this.ipRegex, "Invalid IP format")
            .required("Modified By IP is required"),
        status: Yup.string().required("Status is required"),

        interestID: Yup.number().required("Interest ID is required").min(0),
        apr: Yup.number().min(0).required("APR is required"),
        useDefaultAPR: Yup.string().required(),

        loanCycle: Yup.number().min(0).required("Loan Cycle is required"),
        moratarium: Yup.number().min(0).required("Moratorium is required"),
        loanPenaltyID: Yup.number().min(0).required("Loan Penalty ID is required"),

        loanSizeRange: Yup.number().required(),
        loanRangeFrom: Yup.number().min(0).required("Loan Range From is required"),
        loanRangeTo: Yup.number()
            .min(Yup.ref("loanRangeFrom"), "Loan Range To must be greater than From")
            .required("Loan Range To is required"),

        flatAmount: Yup.number().min(0).required("Flat Amount is required"),

        principalRepaymentType: Yup.number().required(),
        principalPaymentFrequency: Yup.number().required(),
        interestRepaymentType: Yup.number().required(),
        interestPaymentFrequency: Yup.number().required(),
        interestAccrualMode: Yup.number().required(),

        applyPenalty: Yup.string().required(),
        penaltyPercentage: Yup.number().min(0).required("Penalty Percentage is required"),
        penaltyFlat: Yup.number().min(0).required("Penalty Flat is required"),
        penaltyGracePeriod: Yup.number().min(0).required("Penalty Grace Period is required"),

        applyLoanFees: Yup.string().required(),
        nonPerformingLoanInterestAccrual: Yup.number().required(),

        period: Yup.number().min(1).required("Period is required"),
        loanPercentage: Yup.number().min(0).max(100).required("Loan Percentage is required"),
        minSavingBalance: Yup.number().required(),

        principalOverdueAccountID: Yup.number().min(0).required(),
        feesOutstandingAccountID: Yup.number().min(0).required(),
        feesInSuspenseAccountID: Yup.number().min(0).required(),
        overdraftInterestReceivableAccountID: Yup.number().min(0).required(),
        overdraftInterestOverdueAccountID: Yup.number().min(0).required(),
        overdraftInterestInSuspenseAccountID: Yup.number().min(0).required(),
        feesIncomeAccountID: Yup.number().min(0).required(),
        penaltyIncomeAccountID: Yup.number().min(0).required(),
        penaltyOutstandingAccountID: Yup.number().min(0).required(),
        penaltyInSuspenseAccountID: Yup.number().min(0).required(),
        specificLoanAndLeaseLossProvis: Yup.number().min(0).required(),
        generalLoanAndLeaseLossProvis: Yup.number().min(0).required(),
        interestIncomeAccountID: Yup.number().min(0).required(),
        defaultingLoanInterest: Yup.number().min(0).required(),
    };

    static createLoanProductsForm = Yup.object().shape({
        ...this.sharedSchema,
        id: Yup.number().min(1).required("ID is required"),
        isDeleted: Yup.boolean().required(),
        version: Yup.number().min(1).required(),
        isThirdPartyLoanProduct: Yup.string().required(),
        holdFundForSecurityDeposit: Yup.string().required(),
        dateCreated: Yup.number().required("Date Created is required"),
        dateModified: Yup.number().required("Date Modified is required"),
    });

    static updateLoanProductsForm = Yup.object().shape({
        ...this.sharedSchema,
        id: Yup.number().min(1).required("ID is required"),
        isDeleted: Yup.boolean().required(),
        version: Yup.number().min(1).required(),
        isThirdPartyLoanProduct: Yup.string().required(),
        holdFundForSecurityDeposit: Yup.string().required(),
        dateCreated: Yup.number().required("Date Created is required"),
        dateModified: Yup.number().required("Date Modified is required"),
    });
}
