import * as Yup from "yup";

export class ApplicantValidation {

    static sharedSchema = {
        applicantAddress: Yup.string()
            .required("Applicant Address is required"),
        applicantName: Yup.string()
            .required("Applicant Name is required"),
    };

    static createApplicantForm = Yup.object().shape({
        ...this.sharedSchema
    });

    static updateApplicantForm = Yup.object().shape({
        ...this.sharedSchema,
        applicantCreatedAt: Yup.string()
            .required("Applicant Created At is required"),
        applicantId: Yup.number()
            .min(1, "Applicant ID must be a positive number")
            .required("Applicant ID is required"),
        applicantStatus: Yup.string()
            .required("Applicant Status is required"),
        applicantUpdatedAt: Yup.string()
            .required("Applicant Updated At is required"),
    });
}
