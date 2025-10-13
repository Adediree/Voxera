import { BaseButtonProps, BaseInput } from "qucoon-components";
import { TransactionPartyValidation } from "@/models/validations/transactionPartyValidation";
import {
  CreateTransactionPartyRequest,
  createTransactionPartyRequestInit,
} from "@/models/requests/transactionParty/createTransactionPartyRequest";
import {
  UpdateTransactionPartyRequest,
  updateTransactionPartyRequestInit,
} from "@/models/requests/transactionParty/updateTransactionPartyRequest";
import BaseCreateOrUpdateForm, {
  BaseCreateOrUpdateFormProps,
} from "@/components/ui/form/BaseCreateOrUpdateForm";
import {
  useCreateTransactionPartyMutation,
  useUpdateTransactionPartyMutation,
} from "@/services/transactionPartyService";

export type TransactionPartyFormRequest =
  | CreateTransactionPartyRequest
  | UpdateTransactionPartyRequest;

export interface CreateOrUpdateTransactionPartyFormProps<
  T extends TransactionPartyFormRequest,
> {
  initialValues?: T;
  onSuccessfulSubmission?: () => void;
  submitBtnProps?: BaseButtonProps;
  isUpdate?: boolean;
}

const CreateOrUpdateTransactionPartyForm = <
  T extends TransactionPartyFormRequest,
>({
  initialValues,
  onSuccessfulSubmission,
  submitBtnProps,
  isUpdate = false,
}: CreateOrUpdateTransactionPartyFormProps<T>) => {
  const [createTransactionParty] = useCreateTransactionPartyMutation();
  const [updateTransactionParty] = useUpdateTransactionPartyMutation();

  const baseCreateOrUpdateFormConfig: BaseCreateOrUpdateFormProps<
    TransactionPartyFormRequest,
    CreateTransactionPartyRequest,
    UpdateTransactionPartyRequest
  > = {
    createAction: async (request) =>
      await createTransactionParty(request).unwrap(),
    updateAction: async (request) =>
      await updateTransactionParty(request).unwrap(),
    initialValues:
      initialValues ||
      (isUpdate
        ? updateTransactionPartyRequestInit
        : createTransactionPartyRequestInit),
    validationSchema: isUpdate
      ? TransactionPartyValidation.updateTransactionPartyForm
      : TransactionPartyValidation.createTransactionPartyForm,
  };

  const renderFields = (formik: any) => (
    <>
      <div className="form-input-flex-group">
        <BaseInput
          formik={formik}
          name="transactionPartyLiability"
          label="Liability"
        />
        <BaseInput formik={formik} name="transactionPartyName" label="Name" />
        <BaseInput
          formik={formik}
          name="locReference"
          label="Reference"
          inputProps={{ disabled: true }}
        />
        <BaseInput formik={formik} name="transactionPartyRole" label="Role" />
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

export default CreateOrUpdateTransactionPartyForm;
