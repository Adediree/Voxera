import { BaseButtonProps, BaseInput } from "qucoon-components";
import { ApplicantValidation } from "@/models/validations/applicantValidation";
import {
  CreateApplicantRequest,
  createApplicantRequestInit,
} from "@/models/requests/applicant/createApplicantRequest";
import {
  UpdateApplicantRequest,
  updateApplicantRequestInit,
} from "@/models/requests/applicant/updateApplicantRequest";
import BaseCreateOrUpdateForm, {
  BaseCreateOrUpdateFormProps,
} from "@/components/ui/form/BaseCreateOrUpdateForm";
import {
  useCreateApplicantMutation,
  useUpdateApplicantMutation,
} from "@/services/applicantService";

export type ApplicantFormRequest =
  | CreateApplicantRequest
  | UpdateApplicantRequest;

export interface CreateOrUpdateApplicantFormProps<
  T extends ApplicantFormRequest,
> {
  initialValues?: T;
  onSuccessfulSubmission?: () => void;
  submitBtnProps?: BaseButtonProps;
  isUpdate?: boolean;
}

const CreateOrUpdateApplicantForm = <T extends ApplicantFormRequest>({
  initialValues,
  onSuccessfulSubmission,
  submitBtnProps,
  isUpdate = false,
}: CreateOrUpdateApplicantFormProps<T>) => {
  const [createApplicant] = useCreateApplicantMutation();
  const [updateApplicant] = useUpdateApplicantMutation();

  const baseCreateOrUpdateFormConfig: BaseCreateOrUpdateFormProps<
    ApplicantFormRequest,
    CreateApplicantRequest,
    UpdateApplicantRequest
  > = {
    createAction: async (request) => await createApplicant(request).unwrap(),
    updateAction: async (request) => await updateApplicant(request).unwrap(),
    initialValues:
      initialValues ||
      (isUpdate ? updateApplicantRequestInit : createApplicantRequestInit),
    validationSchema: isUpdate
      ? ApplicantValidation.updateApplicantForm
      : ApplicantValidation.createApplicantForm,
  };

  const renderFields = (formik: any) => (
    <>
      <div className="form-input-flex-group">
        <BaseInput
          formik={formik}
          name="applicantAddress"
          label="Applicant Address"
        />
        <BaseInput
          formik={formik}
          name="applicantName"
          label="Applicant Name"
        />
      </div>
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

export default CreateOrUpdateApplicantForm;
