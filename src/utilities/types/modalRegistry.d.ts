import type { ModalEnum } from "@/utilities/enums/modalEnum";
import { ViewTableRowDetailModalProps } from "@/components/ui/modal/ViewTableRowDetailModal";
import { ConfirmationModalProps } from "@/components/ui/modal/ConfirmationModal";
import { CreateOrUpdateTransactionPartyModalProps } from "@/components/content/dashboard/issue/importLetterOfCredit/modals/createOrUpdateTransactionPartyModal";
import { SearchablePrepopulateDataModalProps } from "@/components/ui/modal/searchablePrepopulateDataModal";
import { CreateOrUpdateApplicantModalProps } from "@/components/content/dashboard/issue/importLetterOfCredit/modals/createOrUpdateApplicantModal";
import { CreateOrUpdateLetterOfCreditModalProps } from "@/components/content/dashboard/issue/allLetterOfCredit/modals/createOrUpdateLetterOfCreditModal";
import { AppErrorModalProps } from "@/components/ui/modal/AppErrorModal";

declare module "qucoon-components" {
  interface ModalRegistry {
    [ModalEnum.ConfirmationModal]: {
      data: ConfirmationModalProps;
      result: boolean;
    };
    [ModalEnum.AppErrorModal]: {
      data: AppErrorModalProps;
      result: boolean;
    };
    [ModalEnum.FormErrorModal]: {
      data: FormErrorModalData;
      result: boolean;
    };
    [ModalEnum.ViewTableRowDetailModal]: {
      data: ViewTableRowDetailModalProps;
      result: boolean;
    };
    [ModalEnum.SearchablePrepopulateDataModal]: {
      data: SearchablePrepopulateDataModalProps;
      result: boolean;
    };
    [ModalEnum.CreateOrUpdateTransactionPartyModal]: {
      data: CreateOrUpdateTransactionPartyModalProps;
      result: boolean;
    };
    [ModalEnum.CreateOrUpdateApplicantModal]: {
      data: CreateOrUpdateApplicantModalProps;
      result: boolean;
    };
    [ModalEnum.CreateOrUpdateLetterOfCreditModal]: {
      data: CreateOrUpdateLetterOfCreditModalProps;
      result: boolean;
    };
  }
}
