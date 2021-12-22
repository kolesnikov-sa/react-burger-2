import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";
import {ReactNode} from "react";

type ModalOverlayType = {
    children: ReactNode;
}

export const ModalOverlay = (props: ModalOverlayType) => {
    return (
        <div className={styles.overlay} id="modal-overlay">
            {props.children}
        </div>
    );
};

ModalOverlay.propTypes = {
    children: PropTypes.element.isRequired
};