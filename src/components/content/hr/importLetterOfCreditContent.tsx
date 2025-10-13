"use client"
import {useFormik} from "formik";
import {createLetterOfCreditRequestInit} from "@/models/requests/letterOfCredit/createLetterOfCreditRequest";
import {createLocRequestInit} from "@/models/requests/loc/createLocRequest";
import CreateOrUpdateLetterOfCreditForm from "@/components/content/hr/forms/createOrUpdateLetterOfCreditForm";
import CreateOrUpdateLocForm from "@/components/content/hr/forms/createOrUpdateLocForm";

export default function ImportLetterOfCreditContent() {

    const handleSubmit = async () => {
        // const request = {...formik.values};
        // const response = await createLetterOfCredit(request).unwrap();
        // if (BaseUtil.isApiResponseSuccessful(response)) {
        //     BaseToast({type: "success", message: response?.responseMessage});
        //     formik.resetForm();
        // }
    }

    const formik = useFormik({
        initialValues: {...createLocRequestInit, ...createLetterOfCreditRequestInit},
        onSubmit: handleSubmit,
        enableReinitialize: true
    });

    return (
        <div style={{display: 'flex', flexDirection: "column", gap: "2rem"}}>
            {!formik.values.locReference &&
                <CreateOrUpdateLocForm
                    onSuccessfulSubmission={(response) => formik.setFieldValue("locReference", response?.data?.locReference)}/>}
            {formik.values.locReference &&
                <CreateOrUpdateLetterOfCreditForm initialValues={formik.values}/>}
        </div>
    )

}
