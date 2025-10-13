// "use client"
import BaseCreateOrUpdateForm, {
  BaseCreateOrUpdateFormProps,
} from "@/components/ui/form/BaseCreateOrUpdateForm";
import {
  CreateLocRequest,
  createLocRequestInit,
} from "@/models/requests/loc/createLocRequest";
import {
  UpdateLocRequest,
  updateLocRequestInit,
} from "@/models/requests/loc/updateLocRequest";
import { BaseInput } from "qucoon-components";
import { useCreateLocMutation } from "@/services/locService";
import { LocValidation } from "@/models/validations/locValidation";
import { CreateLocResponse } from "@/models/responses/loc/createLocResponse";

export type LocFormRequest = CreateLocRequest | UpdateLocRequest;

export type CreateOrUpdateLocFormProps = Pick<
  BaseCreateOrUpdateFormProps<
    LocFormRequest,
    CreateLocRequest,
    UpdateLocRequest,
    CreateLocResponse,
    CreateLocResponse
  >,
  "onSuccessfulSubmission" | "isUpdate" | "submitBtnProps"
> & { initialValues?: LocFormRequest };

const CreateOrUpdateLocForm = ({
  initialValues,
  onSuccessfulSubmission,
  submitBtnProps,
  isUpdate = false,
}: CreateOrUpdateLocFormProps) => {
  const [createLoc] = useCreateLocMutation();
  // const [updateLoc] = useUpdateLocMutation();

  const baseCreateOrUpdateFormConfig: BaseCreateOrUpdateFormProps<
    LocFormRequest,
    CreateLocRequest,
    UpdateLocRequest,
    CreateLocResponse,
    CreateLocResponse
  > = {
    createAction: async (request) => await createLoc(request).unwrap(),
    updateAction: async (request) => await createLoc(request).unwrap(), // change to update when endpoint is available
    initialValues:
      initialValues || (isUpdate ? updateLocRequestInit : createLocRequestInit),
    validationSchema: isUpdate
      ? LocValidation.updateLocForm
      : LocValidation.createLocForm,
  };
  const renderFields = (formik: any) => (
    <>
      <BaseInput
        formik={formik}
        name={"locReference"}
        placeholder={"Enter Reference"}
      />
      <BaseInput
        formik={formik}
        name={"locCreatedBy"}
        placeholder={"Enter CreatedBy"}
      />
    </>
  );

  return (
    <BaseCreateOrUpdateForm
      onSuccessfulSubmission={onSuccessfulSubmission}
      submitBtnProps={submitBtnProps}
      isUpdate={isUpdate}
      {...baseCreateOrUpdateFormConfig}
      renderFields={renderFields}
    />
  );
};

export default CreateOrUpdateLocForm;
