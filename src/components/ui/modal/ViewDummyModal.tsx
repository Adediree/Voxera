import useModal from "@/utilities/hooks/useModal";
import {ModalEnum} from "@/utilities/enums/modalEnum";
import BaseModal from "@/components/ui/modal/BaseModal";
import {StringUtil} from "@/utilities/stringUtil";
import {TimeUtil} from "@/utilities/timeUtil";

type DetailItem = {
    label: string;
    value: string; // Explicitly define acceptable types
};
const ViewDummyModal = () => {
    const viewDummyModal = useModal(ModalEnum.ViewDummyModal)
    const detailsList = Object.entries(viewDummyModal?.data)?.map(([key, value]) => {
        return {label: key, value}
    }) as DetailItem[]

    return (
        <BaseModal showCloseIcon={false}>
            <div style={{width: "100%"}}>
                <div style={{width: "100%"}}>
                    {detailsList.map((detail, index) => {
                        return (
                            <div key={index} style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "1rem",
                                width: "100%",
                                borderBottom: "1px solid var(--gray--2)",
                                padding: "1rem 0",
                            }}>
                                <p className={"label subtitle"}>{StringUtil.convertToSentenceCase(detail.label)}</p>
                                <p className={"subtitle"}
                                   style={{
                                       flex: 1,
                                       textAlign: "right",
                                       overflowWrap: "break-word",
                                       wordBreak: "break-all"
                                   }}>{TimeUtil.isValidDate(detail.value) ? TimeUtil.formatDateString(detail.value) : StringUtil.convertToSentenceCase(detail.value)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </BaseModal>
    )
}

export default ViewDummyModal
