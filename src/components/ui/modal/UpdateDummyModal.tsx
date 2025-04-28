"use client"
import BaseModal from "@/components/ui/modal/BaseModal";
import useModal from "@/utilities/hooks/useModal";
import CreateOrUpdateDummyForm from "@/components/ui/form/dashboard/CreateOrUpdateDummyForm";
import {ModalEnum} from "@/utilities/enums/modalEnum";

const UpdateDummyModal = () => {
    const updateDummyModal = useModal(ModalEnum.UPDATE_DUMMY_MODAL);

    return (
        <BaseModal styles={{modal: {width: "600px"}}}>
            <CreateOrUpdateDummyForm initialValues={updateDummyModal?.data} submitBtnProps={{text: "Update Dummy"}}
                                     isUpdate={true}
                                     onSuccessfulSubmission={() => updateDummyModal?.close()}/>
        </BaseModal>
    )
}

export default UpdateDummyModal
