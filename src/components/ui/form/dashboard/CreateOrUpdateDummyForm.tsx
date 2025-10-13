"use client";

import { CreateDummyRequest } from "@/models/requests/dummy/createDummyRequest";
import { UpdateDummyRequest } from "@/models/requests/dummy/updateDummyRequest";
import { useFormik } from "formik";
import { DummyValidation } from "@/models/validations/dummyValidation";
import BaseFormLayout from "@/components/layouts/baseFormLayout";
import {
  BaseButton,
  BaseButtonProps,
  BaseDatePicker,
  BaseInput,
  BasePhoneNumberInput,
  BaseRadio,
  BaseRadioGroup,
  ModernSelect,
  ModernSelectOption,
} from "qucoon-components";

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
  // onSuccessfulSubmission,
  submitBtnProps,
  isUpdate = false,
}: CreateOrUpdateDummyFormProps<T>) => {
  // const dispatch: AppDispatch = useDispatch();
  // const dummyState = useSelector((state: RootState) => state.dummy);

  // Type-safe form submission handler
  // const handleSubmitDummy = async (values: T) => {
  //     try {
  //         let response;
  //
  //         if (isUpdate) {
  //             const updateRequest = values as UpdateDummyRequest;
  //             response = await dispatch(dummyStore.action.updateDummy(updateRequest)).unwrap();
  //         } else {
  //             const createRequest = values as CreateDummyRequest;
  //             response = await dispatch(dummyStore.action.createDummy(createRequest)).unwrap();
  //         }
  //
  //         if (BaseUtil.isApiResponseSuccessful(response)) {
  //             BaseToast({type: "success", message: response?.message});
  //             dispatch(dummyStore.action.readDummy());
  //             onSuccessfulSubmission?.();
  //         }
  //     } catch {
  //         BaseToast({type: "error", message: "Operation failed"});
  //     }
  // };

  // Generic formik configuration
  const formik = useFormik<T>({
    initialValues,
    onSubmit: () => {},
    validationSchema: isUpdate
      ? DummyValidation.updateDummyForm
      : DummyValidation.createDummyForm,
    enableReinitialize: true,
  });

  // Dynamic button text
  const buttonText = isUpdate ? "Update Dummy" : "Create Dummy";
  const ratingSelectOptions: ModernSelectOption[] = [
    {
      label: "One",
      value: "1",
    },
    {
      label: "Two",
      value: "2",
    },
    {
      label: "Three",
      value: "3",
    },
    {
      label: "Four",
      value: "4",
    },
    {
      label: "Five",
      value: "5",
    },
  ];

  return (
    <BaseFormLayout
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "500px",
      }}
      // onSubmit={formik.handleSubmit}
    >
      <div className={"form-input-flex-group"}>
        <BaseInput formik={formik} name={"dummyName"} label={"Dummy Name"} />
        <BaseInput
          formik={formik}
          name={"dummyEmail"}
          label={"Dummy Email"}
          inputProps={{ type: "email" }}
        />
      </div>

      <div className={"form-input-flex-group"}>
        <BaseInput formik={formik} name={"dummyCode"} label={"Dummy Code"} />
        <BaseInput
          formik={formik}
          name={"dummyAge"}
          label={"Dummy Age"}
          formatNumberWithCommas={true}
        />
      </div>

      <div className={"form-input-flex-group"}>
        <BaseInput
          formik={formik}
          name={"dummyCreatedBy"}
          label={"Dummy Created By"}
        />
      </div>
      <BaseDatePicker
        formik={formik}
        name={"dummyDateMoved"}
        label={"Dummy Date Moved"}
      />
      <BaseInput
        formik={formik}
        name={"dummyAddress"}
        label={"Dummy Address"}
        multiline={true}
      />
      <BasePhoneNumberInput
        formik={formik}
        customFullPhoneNumberInputName={"dummyPhone"}
        label={"Dummy Phone"}
      />
      <ModernSelect
        label={"Dummy Rating"}
        selectOptions={ratingSelectOptions}
      />

      <ModernSelect
        label={"Pick yo"}
        error={"Nigga"}
        selectOptions={[
          { label: "player1", value: "1" },
          { label: "player2", value: "2" },
          { label: "player3", value: "3" },
          { label: "player4", value: "4" },
        ]}
      />
      <BaseRadioGroup name={"dummyGender"} label={"Select a gender"}>
        <BaseRadio value={"male"} label={"Male"} />
        <BaseRadio value={"female"} label={"Female"} />
      </BaseRadioGroup>
      {/*{formInputMapper()}*/}
      <BaseButton
        text={buttonText}
        // isLoading={dummyState?.loading}
        onClick={() => formik.handleSubmit()}
        {...submitBtnProps}
        type={"submit"}
      />
    </BaseFormLayout>
  );
};

export default CreateOrUpdateDummyForm;
