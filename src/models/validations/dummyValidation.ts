import * as Yup from "yup";

export class DummyValidation {
    static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // static specialCharactersRegex = /^[a-zA-Z0-9 ]+$/;
    static specialCharactersRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/;
    // Custom validation for IP address or CIDR
    static ipOrCidrRegex = /^(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,2})?$/;
    static createDummyForm = Yup.object().shape({
        dummyName: Yup.string()
            .required("Dummy Name Is Required."),
        // .matches(this.specialCharactersRegex, "Special characters are not allowed"),
        dummyEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
        dummyAge: Yup.string().required("Age Is Required."),
        dummyCode: Yup.string().required("Code Is Required."),
        dummyAddress: Yup.string().required("Address Is Required."),
        dummyRating: Yup.string().required("Rating Is Required."),
        dummyCreatedBy: Yup.string().required("Created By Is Required."),
        // dummyEmail: Yup.string().required("Industry Type Is Required."),
        dummyGender: Yup.string().required("Gender Is Required."),
        dummyDateMoved: Yup.string().required("Date moved Is Required."),
    });
    static updateDummyForm = Yup.object().shape({
        dummyName: Yup.string()
            .required("Dummy Name Is Required."),
        // .matches(this.specialCharactersRegex, "Special characters are not allowed"),
        dummyEmail: Yup.string().matches(this.emailRegex, "Invalid email address").required("Email Is Required."),
        dummyAge: Yup.string().required("Age Is Required."),
        dummyCode: Yup.string().required("Code Is Required."),
        dummyAddress: Yup.string().required("Address Is Required."),
        dummyRating: Yup.string().required("Rating Is Required."),
        dummyCreatedBy: Yup.string().required("Created By Is Required."),
        // dummyEmail: Yup.string().required("Industry Type Is Required."),
        dummyGender: Yup.string().required("Gender Is Required."),
        dummyDateMoved: Yup.string().required("Date moved Is Required."),
    });

}
