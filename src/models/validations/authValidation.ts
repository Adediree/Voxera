import * as Yup from "yup";
import {defaultValidator} from "@/models/validations/index";

export class AuthValidation {
    static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // static specialCharactersRegex = /^[a-zA-Z0-9 ]+$/;
    static specialCharactersRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/;
    static validPrefixes = ["BN", "IT", "RC", "bn", "it", ""];

    static newSignupForm = Yup.object().shape({
        userFirstName: Yup.string()
            .required("First Name Is Required.")
            .matches(this.specialCharactersRegex, "Special characters are not allowed"),
        userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
        // userCountryCode: Yup.string().required("Country Code Is Required."),
        // userPassword: Yup.string().required("Password Is Required."),
        userPassword: defaultValidator("Password"),
        businessName: Yup.string()
            .required("Business Name is required.")
            .matches(/^\w+(\s+\w+)+$/, "Business Name must contain at least two words separated by spaces."),
        businessTypeId: Yup.string().required("Business Type Is Required."),
        industryTypeId: Yup.string().required("Industry Type Is Required."),
        businessRegistrationNumber: Yup.string()
            .test(
                "prefix",
                "Registration Number must start with BN, IT, or RC.",
                (value) => {
                    if (!value) return false; // Ensure a boolean is returned
                    return this.validPrefixes.includes(value.slice(0, 2));
                }
            )
            .matches(/^[A-Za-z]{2}\d+$/, "Business Registration Number must have 2 alphabets followed by digits.")
            .required("Business Registration Number Is Required."),
        // Yup.string().required("Business Registration Number Is Required."),
        // userConfirmPassword: Yup.string()
        //     .equals([Yup.ref("userPassword"), null], "Passcode Does Not Match")
        //     .required("Confirm Password Is Required."),
        userLastName: Yup.string()
            .required("Last Name Is Required.")
            .matches(this.specialCharactersRegex, "Special characters are not allowed"),
        userPhone: Yup.string()
            .required("Phone Number Is Required.")
            .min(10, "Invalid Phone Number")
            .max(11, "Invalid Phone Number"),
    });

    static signupWithRubiesAddBusiness = Yup.object().shape({
        businessName: Yup.string()
            .required("Business Name is required.")
            .matches(/^\w+(\s+\w+)+$/, "Business Name must contain at least two words separated by spaces."),
        businessTypeId: Yup.string().required("Business Type Is Required."),
        industryTypeId: Yup.string().required("Industry Type Is Required."),
        businessRegistrationNumber: Yup.string().required("Business Registration Number Is Required."),
    });
    static login = Yup.object().shape({
        userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
        userPassword: Yup.string().required("Password Is Required."),
    });
    static signupWithRubies = Yup.object().shape({
        userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
        userPassword: Yup.string().required("Password Is Required."),
    });
    static resetPasswordRequest = Yup.object().shape({
        userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
    });
    static changeTransferPinRequest = Yup.object().shape({
        transactionPin: Yup.string().required("Pin Is Required."),
    });
    static resetTransferPinRequest = Yup.object().shape({
        transactionPin: Yup.string().required("Pin Is Required."),
    });
    static resetPassword = Yup.object().shape({
        userPassword: Yup.string().required("Password Is Required."),
        userConfirmPassword: Yup.string()
            .equals([Yup.ref("userPassword"), null], "Passcode Does Not Match")
            .required("Confirm Password Is Required."),
    });
    static changePasscode = Yup.object().shape({
        customerOldPassword: Yup.string()
            .min(4, "Passcode Must Not Be Less Than 4")
            .max(4, "Passcode Must Not Be Less Than 4")
            .required("Old Passcode Is Required."),
        customerPassword: Yup.string()
            .min(4, "Passcode Must Not Be Less Than 4")
            .max(4, "Passcode Must Not Be Less Than 4")
            .required("New Passcode Is Required."),
        customerPasswordConfirmation: Yup.string()
            .equals([Yup.ref("customerPassword"), null], "Passcode Does Not Match")
            .required("Confirm Passcode Is Required."),
    });
    static changePassword = Yup.object().shape({
        customerPassword: Yup.string()
            .min(4, "Passcode Must Not Be Less Than 4")
            .max(4, "Passcode Must Not Be Less Than 4")
            .required("Passcode Is Required."),
        customerPasswordConfirmation: Yup.string()
            .equals([Yup.ref("customerPassword"), null], "Passcode Does Not Match")
            .required("Confirm Passcode Is Required."),
    });
}
