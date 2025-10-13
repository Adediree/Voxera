"use client";
import { ModalEnum } from "@/utilities/enums/modalEnum";
import ViewTableRowDetailModal from "@/components/ui/modal/ViewTableRowDetailModal";
// import ConfirmationModal from "@/components/ui/modal/ConfirmationModal";
// import FormErrorModal from "@/components/ui/modal/FormErrorModal";
import { useModalRegistrations } from "qucoon-components";
import "./globalModal.css";
// import SearchablePrepopulateDataModal from "@/components/ui/modal/searchablePrepopulateDataModal";
import AppErrorModal from "@/components/ui/modal/AppErrorModal";

const GlobalModal = () => {
  useModalRegistrations([
    // {
    //     key: ModalEnum.ConfirmationModal,
    //     component: ConfirmationModal,
    //     defaultConfig: {backdrop: 'blur', position: 'center'}
    // },
    {
      key: ModalEnum.AppErrorModal,
      component: AppErrorModal,
      defaultConfig: { backdrop: "blur", position: "center" },
    },
    {
      key: ModalEnum.ViewTableRowDetailModal,
      component: ViewTableRowDetailModal,
      defaultConfig: {
        position: "top-right",
        containerClassName: "viewTableRowDetailModal",
      },
    },
    // {
    // key: ModalEnum.SearchablePrepopulateDataModal,
    // component: SearchablePrepopulateDataModal,
    // defaultConfig: {
    //     containerClassName: "searchablePrepopulateDataModal",
    // }
    // },
    // {
    //     key: ModalEnum.CreateOrUpdateLetterOfCreditModal,
    //     component: CreateOrUpdateLetterOfCreditModal,
    //     defaultConfig: {
    //         containerClassName: "createOrUpdateLetterOfCreditModal",
    //     }
    //
    // },
    // {
    //     key: ModalEnum.FormErrorModal,
    //     component: FormErrorModal,
    //     defaultConfig: {backdrop: 'blur', position: 'center'}
    // },
  ]);
  return <></>;
};
export default GlobalModal;
