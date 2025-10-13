import { ModalEnum } from "@/utilities/enums/modalEnum";
import { createApplicantRequestInit } from "@/models/requests/applicant/createApplicantRequest";
import BaseModalLayout from "@/components/layouts/baseModalLayout";
import { BaseButtonProps, useModal } from "qucoon-components";
import CreateOrUpdateApplicantForm, {
  ApplicantFormRequest,
} from "@/components/content/dashboard/issue/importLetterOfCredit/forms/createOrUpdateApplicantForm";
import { updateApplicantRequestInit } from "@/models/requests/applicant/updateApplicantRequest";

export type CreateOrUpdateApplicantModalProps = {
  isUpdate?: boolean;
  data?: ApplicantFormRequest;
};

const CreateOrUpdateApplicantModal = ({
  isUpdate,
  data = {} as ApplicantFormRequest,
}: CreateOrUpdateApplicantModalProps) => {
  const modal = useModal(ModalEnum.CreateOrUpdateApplicantModal);

  const applicantModalConfig = {
    isUpdate: isUpdate || false,
    submitBtnProps: {
      text: isUpdate ? "Update" : "Create Transaction Party",
    } as BaseButtonProps,
    onSuccessfulSubmission: () => {
      modal?.close();
    },
    initialValues: isUpdate
      ? { ...updateApplicantRequestInit, ...data }
      : { ...createApplicantRequestInit, ...data },
  };
  const modalTitle = isUpdate
    ? "Update Transaction Party"
    : "Create Transaction Party";

  return (
    <BaseModalLayout
      modalTitle={modalTitle}
      childrenContainerStyle={{ padding: "1em", maxHeight: "500px" }}
    >
      <CreateOrUpdateApplicantForm
        {...applicantModalConfig}
        onSuccessfulSubmission={applicantModalConfig.onSuccessfulSubmission}
      />
    </BaseModalLayout>
  );
};

export default CreateOrUpdateApplicantModal;
