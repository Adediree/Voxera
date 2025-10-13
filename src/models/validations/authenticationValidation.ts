import * as Yup from "yup";

export class AuthenticationValidation {

    static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    // Password: Min 8, at least 1 uppercase, 1 lowercase, 1 digit, 1 special character
    static strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    static passwordErrorMessage =
        "Password must be at least 8 characters long, include an uppercase letter, lowercase letter, number, and special character.";

    static specialCharactersRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/;
    static validPrefixes = ["BN", "IT", "RC", "bn", "it", ""];

    static initiateEnrollment = Yup.object().shape({
        userEmail: Yup.string()
            .matches(this.emailRegex, "Invalid email address")
            .required("Email Is Required."),
        userPassword: Yup.string()
            .required("Password Is Required.")
            .matches(this.strongPasswordRegex, this.passwordErrorMessage),
        userLastname: Yup.string()
            .required("Last Name Is Required.")
            .matches(this.specialCharactersRegex, "Special characters are not allowed"),
        userFirstname: Yup.string()
            .required("First Name Is Required.")
            .matches(this.specialCharactersRegex, "Special characters are not allowed"),
    });

    static login = Yup.object().shape({
        userEmail: Yup.string()
            .matches(this.emailRegex, "Invalid email address")
            .required("Email Is Required."),

        userPassword: Yup.string()
            .required("Password Is Required."),
    });

    static completeEnrollment = Yup.object().shape({
        userEmail: Yup.string()
            .matches(this.emailRegex, "Invalid email address")
            .required("Email Is Required."),

        otp: Yup.string().required("Otp Is Required."),
    });

    static initiatePasswordReset = Yup.object().shape({
        userEmail: Yup.string()
            .matches(this.emailRegex, "Invalid email address")
            .required("Email Is Required."),
    });

    static completePasswordReset = Yup.object().shape({
        otp: Yup.string().required("Otp Is Required."),

        userPassword: Yup.string()
            .required("Password Is Required.")
            .matches(this.strongPasswordRegex, this.passwordErrorMessage),

        userEmail: Yup.string()
            .matches(this.emailRegex, "Invalid email address")
            .required("Email Is Required."),
    });

    static changePassword = Yup.object().shape({
        oldPassword: Yup.string()
            .required("Old Password Is Required."),

        userEmail: Yup.string()
            .matches(this.emailRegex, "Invalid email address")
            .required("Email Is Required."),

        userPassword: Yup.string()
            .required("New Password Is Required.")
            .matches(this.strongPasswordRegex, this.passwordErrorMessage),
    });

    // static confirmPassword = (passwordField: string = "userPassword") =>
    //     Yup.string()
    //         .oneOf([Yup.ref(passwordField), null], "Passwords do not match")
    //         .required("Confirm Password Is Required.");
}


// import * as Yup from "yup";
//
// export class AuthenticationValidation {
//     static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     // static specialCharactersRegex = /^[a-zA-Z0-9 ]+$/;
//     static specialCharactersRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/;
//     static validPrefixes = ["BN", "IT", "RC", "bn", "it", ""];
//
//     static initiateEnrollment = Yup.object().shape({
//         // userFirstName: Yup.string()
//         //     .required("First Name Is Required.")
//         //     .matches(this.specialCharactersRegex, "Special characters are not allowed"),
//         userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
//         userPassword: Yup.string().required("Password Is Required."),
//         // userCountryCode: Yup.string().required("Country Code Is Required."),
//         // userPassword: Yup.string().required("Password Is Required."),
//         // businessName: Yup.string()
//         //     .required("Business Name is required.")
//         //     .matches(/^\w+(\s+\w+)+$/, "Business Name must contain at least two words separated by spaces."),
//         // businessTypeId: Yup.string().required("Business Type Is Required."),
//         // industryTypeId: Yup.string().required("Industry Type Is Required."),
//         // businessRegistrationNumber: Yup.string()
//         //     .test(
//         //         "prefix",
//         //         "Registration Number must start with BN, IT, or RC.",
//         //         (value) => {
//         //             if (!value) return false; // Ensure a boolean is returned
//         //             return this.validPrefixes.includes(value.slice(0, 2));
//         //         }
//         //     )
//         //     .matches(/^[A-Za-z]{2}\d+$/, "Business Registration Number must have 2 alphabets followed by digits.")
//         //     .required("Business Registration Number Is Required."),
//         // Yup.string().required("Business Registration Number Is Required."),
//         // userConfirmPassword: Yup.string()
//         //     .equals([Yup.ref("userPassword"), null], "Password Does Not Match")
//         //     .required("Confirm Password Is Required."),
//         // userLastName: Yup.string()
//         //     .required("Last Name Is Required.")
//         //     .matches(this.specialCharactersRegex, "Special characters are not allowed"),
//         // userPhone: Yup.string()
//         //     .required("Phone Number Is Required.")
//         //     .min(10, "Invalid Phone Number")
//         //     .max(11, "Invalid Phone Number"),
//     });
//
//     static login = Yup.object().shape({
//         userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
//         userPassword: Yup.string().required("Password Is Required."),
//     });
//     static completeEnrollment = Yup.object().shape({
//         userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
//         otp: Yup.string().required("Otp Is Required."),
//     });
//     static initiatePasswordReset = Yup.object().shape({
//         userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
//     });
//     static completePasswordReset = Yup.object().shape({
//         otp: Yup.string().required("Otp Is Required."),
//         userPassword: Yup.string().required("Password Is Required."),
//         // userPasswordConfirmation: Yup.string()
//         //     .equals([Yup.ref("userPassword"), null], "Password Does Not Match")
//         //     .required("Confirm Password Is Required."),
//         userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
//     });
//     static changePassword = Yup.object().shape({
//         oldPassword: Yup.string()
//             .min(4, "Password Must Not Be Less Than 4")
//             .max(4, "Password Must Not Be Less Than 4")
//             .required("Old Password Is Required."),
//         userEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
//         userPassword: Yup.string()
//             .min(4, "Password Must Not Be Less Than 4")
//             .max(4, "Password Must Not Be Less Than 4")
//             .required("New Password Is Required."),
//     });
//
//
//     // static changePassword = Yup.object().shape({
//     //     customerPassword: Yup.string()
//     //         .min(4, "Password Must Not Be Less Than 4")
//     //         .max(4, "Password Must Not Be Less Than 4")
//     //         .required("Password Is Required."),
//     //     customerPasswordConfirmation: Yup.string()
//     //         .equals([Yup.ref("customerPassword"), null], "Password Does Not Match")
//     //         .required("Confirm Password Is Required."),
//     // });
// }
