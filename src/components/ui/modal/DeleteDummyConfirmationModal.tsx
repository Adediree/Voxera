import {RootState} from "@/stores";
import {AppDispatch} from "@/configs/storeConfig";
import {useDispatch, useSelector} from "react-redux";
import useModal from "@/utilities/hooks/useModal";
import BaseToast from "@/components/ui/toast/BaseToast";
import {ModalEnum} from "@/utilities/enums/modalEnum";
import {dummyStore} from "@/stores/dummyStore";
import BaseModal from "@/components/ui/modal/BaseModal";
import {BaseEnum} from "@/utilities/enums/baseEnum";
import BaseModalLayout from "@/components/layouts/BaseModalLayout";

const DeleteDummyConfirmationModal = () => {
    const dispatch: AppDispatch = useDispatch();
    const dummyState = useSelector((state: RootState) => state.dummy);
    const deleteModal = useModal(ModalEnum.DELETE_DUMMY_CONFIRMATION_MODAL);
    const handleDeclineDelete = () => {
        deleteModal.close()
    }

    const handleDelete = async () => {
        const response = await (dispatch(dummyStore.action.deleteDummy({dummyId: deleteModal?.data?.dummyId}))).unwrap();
        if (response.responseCode == BaseEnum.RESPONSE_CODE_SUCCESS) {
            BaseToast({
                type: "success",
                message: response.responseMessage
            });
            dispatch(dummyStore.action.readDummy())
            deleteModal.close()
        }
    }
    return (
        <BaseModal showCloseIcon={false} styles={{modal: {maxWidth: "450px"}}}>
            <BaseModalLayout modalTitle={"Are you sure you want to delete this dummy?"}

                             startBtnProps={{
                                 text: "No",
                                 onClick: handleDeclineDelete
                             }}
                             endBtnProps={{
                                 text: "Yes",
                                 onClick: handleDelete,
                                 isLoading: dummyState?.loading
                             }}
            />
        </BaseModal>
    )
}
export default DeleteDummyConfirmationModal
