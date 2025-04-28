import {createDummyRequestInit} from "@/models/requests/dummy/createDummyRequest";
import CreateOrUpdateDummyForm from "@/components/ui/form/dashboard/CreateOrUpdateDummyForm";

const CreateDummyContent = () => {
    return (
        <CreateOrUpdateDummyForm initialValues={createDummyRequestInit} submitBtnProps={{text: "Create Dummy"}}/>
    )
}

export default CreateDummyContent
