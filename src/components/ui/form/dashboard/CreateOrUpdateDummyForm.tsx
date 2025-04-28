"use client"

import {CreateDummyRequest} from "@/models/requests/dummy/createDummyRequest";
import {UpdateDummyRequest} from "@/models/requests/dummy/updateDummyRequest";
import BaseButton, {BaseButtonProps} from "@/components/ui/button/BaseButton";
import {AppDispatch} from "@/configs/storeConfig";
import {useDispatch, useSelector} from "react-redux";
import {dummyStore} from "@/stores/dummyStore";
import {RootState} from "@/stores";
import BaseToast from "@/components/ui/toast/BaseToast";
import {useFormik} from "formik";
import {DummyValidation} from "@/models/validations/dummyValidation";
import {BaseEnum} from "@/utilities/enums/baseEnum";
import BaseInput from "@/components/ui/input/BaseInput";
import BaseFormLayout from "@/components/layouts/BaseFormLayout";
import BasePhoneNumberInput from "@/components/ui/input/BasePhoneNumberInput";
import {BaseSelect, BaseSelectOption} from "@/components/ui/select/BaseSelect";
import BaseRadioGroup from "@/components/ui/radio/BaseRadioGroup";
import BaseRadio from "@/components/ui/radio/BaseRadio";

type DummyFormRequest = CreateDummyRequest | UpdateDummyRequest;

export interface CreateOrUpdateDummyFormProps<T extends DummyFormRequest> {
    initialValues: T;
    onSuccessfulSubmission?: () => void;
    submitBtnProps?: BaseButtonProps;
    /** Determines if we're updating (requires ID) */
    isUpdate?: boolean;
}

const CreateOrUpdateDummyForm = <T extends DummyFormRequest>({
                                                                 initialValues,
                                                                 onSuccessfulSubmission,
                                                                 submitBtnProps,
                                                                 isUpdate = false
                                                             }: CreateOrUpdateDummyFormProps<T>) => {
    const dispatch: AppDispatch = useDispatch();
    const dummyState = useSelector((state: RootState) => state.dummy);

    // Type-safe form submission handler
    const handleSubmitDummy = async (values: T) => {
        try {
            let response;

            if (isUpdate) {
                const updateRequest = values as UpdateDummyRequest;
                response = await dispatch(dummyStore.action.updateDummy(updateRequest)).unwrap();
            } else {
                const createRequest = values as CreateDummyRequest;
                response = await dispatch(dummyStore.action.createDummy(createRequest)).unwrap();
            }

            if (response.responseCode === BaseEnum.RESPONSE_CODE_SUCCESS) {
                BaseToast({type: "success", message: response.responseMessage});
                dispatch(dummyStore.action.readDummy());
                onSuccessfulSubmission?.();
            }
        } catch {
            BaseToast({type: "error", message: "Operation failed"});
        }
    };

    // Generic formik configuration
    const formik = useFormik<T>({
        initialValues,
        onSubmit: handleSubmitDummy,
        validationSchema: isUpdate ? DummyValidation.updateDummyForm : DummyValidation.createDummyForm,
        enableReinitialize: true
    });

    // Dynamic button text
    const buttonText = isUpdate ? "Update Dummy" : "Create Dummy";
    const ratingSelectOptions: BaseSelectOption[] = [
        {
            label: "One",
            value: 1
        },
        {
            label: "Two",
            value: 2
        },
        {
            label: "Three",
            value: 3
        },
        {
            label: "Four",
            value: 4
        },
        {
            label: "Five",
            value: 5
        },
    ]

    return (
        <BaseFormLayout
            style={{display: "flex", flexDirection: "column", gap: '1.5rem', maxWidth: "500px"}}
            onSubmit={formik.handleSubmit}
        >
            <div className={"form-input-flex-group"}>
                <BaseInput formik={formik} name={"dummyName"} label={"Dummy Name"}/>
                <BaseInput formik={formik} name={"dummyEmail"} label={"Dummy Email"} inputProps={{type: "email"}}/>
            </div>

            <div className={"form-input-flex-group"}>
                <BaseInput formik={formik} name={"dummyCode"} label={"Dummy Code"}/>
                <BaseInput formik={formik} name={"dummyAge"} label={"Dummy Age"} formatNumberWithCommas={true}/>
            </div>

            <div className={"form-input-flex-group"}>
                <BaseInput formik={formik} name={"dummyCreatedBy"} label={"Dummy Created By"}/>
                <BaseInput formik={formik} name={"dummyDateMoved"} label={"Dummy Date Moved"}
                           inputProps={{type: "date"}}/>
            </div>
            <BaseInput formik={formik} name={"dummyAddress"} label={"Dummy Address"} multiline={true}/>
            <BasePhoneNumberInput formik={formik} customFullPhoneNumberInputName={"dummyPhone"}
                                  label={"Dummy Phone"}/>
            <BaseSelect name={"dummyRating"} label={"Dummy Rating"} formik={formik}
                        selectOptions={ratingSelectOptions}/>
            <BaseRadioGroup name={"dummyGender"} label={"Select a gender"}>
                <BaseRadio formik={formik} name={"dummyGender"}
                           radioOptions={{id: "male", value: "Male"}}
                           label={"Male"}/>
                <BaseRadio formik={formik} name={"dummyGender"}
                           radioOptions={{id: "female", value: "Female"}}
                           label={"Female"}/>

            </BaseRadioGroup>
            {/*{formInputMapper()}*/}
            <BaseButton
                text={buttonText}
                isLoading={dummyState?.loading}
                {...submitBtnProps}
            />
        </BaseFormLayout>
    );
};

export default CreateOrUpdateDummyForm;
