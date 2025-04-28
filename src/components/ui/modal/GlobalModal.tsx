"use client"
import {useSelector} from "react-redux";
import {RootState} from "@/stores";
import {ModalEnum} from "@/utilities/enums/modalEnum";
import ViewDummyModal from "@/components/ui/modal/ViewDummyModal";
import UpdateDummyModal from "@/components/ui/modal/UpdateDummyModal";
import DeleteDummyConfirmationModal from "@/components/ui/modal/DeleteDummyConfirmationModal";

const GlobalModal = () => {
    const modalState = useSelector((state: RootState) => state.modal);
    if (modalState?.modalType == ModalEnum.UPDATE_DUMMY_MODAL) return <UpdateDummyModal/>
    if (modalState?.modalType == ModalEnum.DELETE_DUMMY_CONFIRMATION_MODAL) return <DeleteDummyConfirmationModal/>
    if (modalState?.modalType == ModalEnum.ViewDummyModal) return <ViewDummyModal/>
    return <></>
}
export default GlobalModal
