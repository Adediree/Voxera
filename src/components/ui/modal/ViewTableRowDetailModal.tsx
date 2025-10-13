import BaseModalLayout from "@/components/layouts/baseModalLayout";
import {
  BaseButton,
  BaseButtonProps,
  TrashIcon,
  useModal,
} from "qucoon-components";
import EditIcon from "@/components/icon/EditIcon";
import { ModalEnum } from "@/utilities/enums/modalEnum";
import DetailListCard from "@/components/ui/card/DetailListCard";
import styles from "./viewTableRowDetailModal.module.scss";

export type ViewTableRowDetailModalProps = {
  data: Record<string, string | number | boolean>;
  editBtnProps?: BaseButtonProps;
  deleteBtnProps?: BaseButtonProps;
};

const ViewTableRowDetailModal = ({
  data,
  editBtnProps,
  deleteBtnProps,
}: ViewTableRowDetailModalProps) => {
  const viewTableRowDetailModal = useModal(ModalEnum.ViewTableRowDetailModal);

  const dateFields = ["dateCreated"];
  const detailsList = Object.entries(data)?.map(([key, value]) => ({
    label: key,
    value: dateFields.includes(key) ? Number(value) : value,
  }));

  const closeModal = () => viewTableRowDetailModal.close();

  return (
    <BaseModalLayout
      modalTitle="Row Details"
      showCloseIcon
      onClose={closeModal}
      style={{ padding: "1.5rem", gap: "1rem" }}
      modalTitleStyle={{
        fontSize: "var(--font-size-lg)",
        fontWeight: "var(--font-weight-medium)",
      }}
      modalHeaderStyle={{
        alignItems: "center",
        padding: 0,
        border: 0,
        position: "relative",
      }}
    >
      <div className={styles.modalContentContainer}>
        <DetailListCard items={detailsList} title="General Information" />

        {(editBtnProps || deleteBtnProps) && (
          <div className={styles.actionButtons}>
            {deleteBtnProps && (
              <BaseButton
                text="Delete"
                size="medium"
                variant="secondary"
                startIcon={TrashIcon}
                {...deleteBtnProps}
                onClick={(e) => {
                  closeModal();
                  deleteBtnProps?.onClick?.(e);
                }}
              />
            )}
            {editBtnProps && (
              <BaseButton
                text="Edit"
                size="medium"
                variant="secondary"
                startIcon={EditIcon}
                {...editBtnProps}
                onClick={(e) => {
                  closeModal();
                  editBtnProps?.onClick?.(e);
                }}
              />
            )}
          </div>
        )}
      </div>
    </BaseModalLayout>
  );
};

export default ViewTableRowDetailModal;

// import BaseModalLayout from "@/components/layouts/BaseModalLayout";
// import {BaseButton, BaseButtonProps, TrashIcon, Typography, useModal} from "qucoon-components";
// import {StringUtil} from "@/utilities/stringUtil";
// import {TimeUtil} from "@/utilities/timeUtil";
// import EditIcon from "@/components/icon/EditIcon";
// import {ModalEnum} from "@/utilities/enums/modalEnum";
//
// type DetailItem = {
//     label: string;
//     value: string; // Explicitly define acceptable types
// };
// export type ViewTableRowDetailModalProps = {
//     data: Record<string, any>; // Accepts any string, number, or Date values
//     editBtnProps?: BaseButtonProps;
//     deleteBtnProps?: BaseButtonProps;
// }
// const ViewTableRowDetailModal = ({data, editBtnProps, deleteBtnProps}: ViewTableRowDetailModalProps) => {
//     const detailsList = Object.entries(data)?.map?.(([key, value]) => {
//         return {label: key, value}
//     }) as DetailItem[]
//     const viewTableRowDetailModal = useModal(ModalEnum.ViewTableRowDetailModal);
//     const closeModal = () => {
//         viewTableRowDetailModal.close()
//     }
//     return (
//         <BaseModalLayout modalTitle={"Row Details"} showCloseIcon={true} onClose={closeModal} style={{
//             padding: "1.5rem",
//             gap: "1rem",
//         }}
//                          modalTitleStyle={{fontSize: "var(--font-size-lg)", fontWeight: "var(--font-weight-medium)"}}
//                          modalHeaderStyle={{alignItems: "center", padding: 0, border: 0, position: "relative"}}
//         >
//             <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
//                 <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
//                     <Typography weight={"medium"} size={"md"}>General information</Typography>
//                     <div style={{
//                         padding: "1em",
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "1rem",
//                         border: ".5px solid gray",
//                         borderRadius: ".5rem",
//                         maxHeight: "600px",
//                         overflow: "auto"
//                     }}>
//                         {detailsList?.map?.((detail, index) => {
//                             return (
//                                 <div key={index} style={{
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     // alignItems: "center",
//                                     // justifyContent: "space-between",
//                                     gap: ".25rem",
//                                     width: "100%",
//                                     // borderBottom: "1px solid var(--gray--2)",
//                                     // padding: "1rem 0",
//                                 }}>
//                                     <Typography weight={"medium"}>
//                                         {StringUtil.convertToSentenceCase(detail.label)}
//                                     </Typography>
//                                     <Typography weight={"regular"} style={{color: "var(--color-gray-500)"}}>
//                                         {TimeUtil.isValidDate(detail.value) ? TimeUtil.getFormatDateTime(detail.value).fullFormattedDateTime : StringUtil.convertToSentenceCase(detail.value)}
//                                     </Typography>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//                 {(editBtnProps || deleteBtnProps) &&
//                     <div style={{display: "flex", alignItems: "center", gap: ".75rem", justifyContent: "flex-end"}}>
//                         {deleteBtnProps && <BaseButton text={"Delete"} size={"medium"} variant={"secondary"}
//                                                        startIcon={TrashIcon} {...deleteBtnProps} onClick={(e) => {
//                             closeModal();
//                             deleteBtnProps?.onClick?.(e)
//                         }}/>}
//                         {editBtnProps && <BaseButton text={"Edit"} size={"medium"} variant={"secondary"}
//                                                      startIcon={EditIcon} {...editBtnProps} onClick={(e) => {
//                             closeModal();
//                             editBtnProps?.onClick?.(e)
//                         }}/>}
//                     </div>}
//             </div>
//         </BaseModalLayout>
//     )
// }
//
// export default ViewTableRowDetailModal
