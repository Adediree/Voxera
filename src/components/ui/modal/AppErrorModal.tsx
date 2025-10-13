import Lottie from "lottie-react";
import { BaseButton, Typography, useModal } from "qucoon-components";
import styles from "./appErrorModal.module.scss";
import ErrorAnimation from "@/assets/data/error.json";
import { ModalEnum } from "@/utilities/enums/modalEnum";

export type AppErrorModalProps = {
  type?: string;
  message?: string;
  title?: string;
  animationSize?: "small" | "medium" | "large";
};
const AppErrorModal = (props: AppErrorModalProps) => {
  const appErrorModal = useModal(ModalEnum.AppErrorModal);

  const animationSizeMap = {
    small: { width: 60, height: 60 },
    medium: { width: 80, height: 80 },
    large: { width: 100, height: 100 },
  };
  const animationSize = props?.animationSize || "medium";

  const onClose = () => {
    appErrorModal?.close();
  };
  return (
    <div className={styles.modalContent}>
      <div className={styles.animationContainer}>
        <Lottie
          animationData={ErrorAnimation}
          loop={true}
          style={animationSizeMap[animationSize]}
          aria-hidden="true"
        />
      </div>

      <div className={styles.textContainer}>
        {props?.title && (
          <Typography
            id="error-modal-title"
            className={styles.title}
            weight="bold"
          >
            {props?.title}
          </Typography>
        )}

        {props?.message && (
          <Typography
            id="error-modal-description"
            variant="text"
            className={styles.message}
          >
            {props?.message}
          </Typography>
        )}
      </div>

      <div className={styles.actionsContainer}>
        <BaseButton
          variant="secondary"
          text="Dismiss"
          onClick={onClose}
          // className={styles.button}
          aria-label="Close error message"
        />
      </div>
    </div>
  );
};

export default AppErrorModal;
