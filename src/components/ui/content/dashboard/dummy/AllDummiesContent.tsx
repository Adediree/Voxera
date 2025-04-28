import useModal from "@/utilities/hooks/useModal";
import {ModalEnum} from "@/utilities/enums/modalEnum";
import {AppDispatch} from "@/configs/storeConfig";
import {useDispatch, useSelector} from "react-redux";
import BaseTable, {BaseTableType} from "@/components/ui/table/BaseTable";
import {dummyStore} from "@/stores/dummyStore";
import {ReadDummyResponse} from "@/models/responses/dummy/readDummyResponse";
import {BaseTableIdEnum} from "@/utilities/enums/baseTableIdEnum";
import {RootState} from "@/stores";

const AllDummiesContent = () => {
    const updateModal = useModal(ModalEnum.UPDATE_DUMMY_MODAL);
    const viewModal = useModal(ModalEnum.ViewDummyModal);
    const deleteModal = useModal(ModalEnum.DELETE_DUMMY_CONFIRMATION_MODAL);
    const dispatch: AppDispatch = useDispatch();
    const dummyState = useSelector((state: RootState) => state.dummy);
    const handleRefresh: BaseTableType["refreshPage"] = async () => {
        return await (dispatch(dummyStore.action.readDummy())).unwrap();
    }

    const dummyRowOptions: BaseTableType["rowOptions"] = [
        {
            optionName: "View",
            onClick: (data: ReadDummyResponse["data"][0]) => {
                viewModal.open({...data})
            }
        },
        {
            optionName: "Update",
            onClick: (data: ReadDummyResponse["data"][0]) => {
                updateModal.open({...data})
            }
        },
        {
            optionName: "Delete",
            onClick: (data: ReadDummyResponse["data"][0]) => {
                deleteModal.open({...data})
            }
        },
    ]


    return (
        <BaseTable title={"All Dummies"} tableId={BaseTableIdEnum.DASHBOARD_DUMMY_TABLE}
                   rowOptions={dummyRowOptions} items={dummyState?.readDummyResponse?.data ?? []}
                   itemIdKey={"dummyId"}
                   refreshPage={handleRefresh} showAllFields={true}
        />
    )
}

export default AllDummiesContent
