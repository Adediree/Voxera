import { ModalEnum } from "@/utilities/enums/modalEnum";
import { createTransactionPartyRequestInit } from "@/models/requests/transactionParty/createTransactionPartyRequest";
import BaseModalLayout from "@/components/layouts/baseModalLayout";
import { BaseButtonProps, useModal } from "qucoon-components";
import CreateOrUpdateTransactionPartyForm, {
  TransactionPartyFormRequest,
} from "@/components/content/dashboard/issue/importLetterOfCredit/forms/createOrUpdateTransactionPartyForm";
import { updateTransactionPartyRequestInit } from "@/models/requests/transactionParty/updateTransactionPartyRequest";

export type CreateOrUpdateTransactionPartyModalProps = {
  isUpdate?: boolean;
  data?: TransactionPartyFormRequest;
};

const CreateOrUpdateTransactionPartyModal = ({
  isUpdate,
  data = {} as TransactionPartyFormRequest,
}: CreateOrUpdateTransactionPartyModalProps) => {
  const modal = useModal(ModalEnum.CreateOrUpdateTransactionPartyModal);

  const transactionPartyModalConfig = {
    isUpdate: isUpdate || false,
    submitBtnProps: {
      text: isUpdate ? "Update" : "Create Transaction Party",
    } as BaseButtonProps,
    onSuccessfulSubmission: () => {
      modal?.close();
    },
    initialValues: isUpdate
      ? { ...updateTransactionPartyRequestInit, ...data }
      : { ...createTransactionPartyRequestInit, ...data },
  };
  const modalTitle = isUpdate
    ? "Update Transaction Party"
    : "Create Transaction Party";

  return (
    <BaseModalLayout
      modalTitle={modalTitle}
      childrenContainerStyle={{ padding: "1em", maxHeight: "500px" }}
    >
      <CreateOrUpdateTransactionPartyForm
        {...transactionPartyModalConfig}
        onSuccessfulSubmission={
          transactionPartyModalConfig.onSuccessfulSubmission
        }
      />
    </BaseModalLayout>
  );
};

export default CreateOrUpdateTransactionPartyModal;
