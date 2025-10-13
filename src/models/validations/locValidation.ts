import * as Yup from "yup";

export class LocValidation {

    static sharedSchema = {
        locReference: Yup.string(),
        locCreatedBy: Yup.string(),
    };

    static createLocForm = Yup.object().shape({
        ...this.sharedSchema
    });

    static updateLocForm = Yup.object().shape({
        ...this.sharedSchema,
    });
}
