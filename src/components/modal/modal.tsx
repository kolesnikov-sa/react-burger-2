import styles from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ModalOverlay} from "./modal-overlay/modal-overlay";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

type ModalType = {
    isOpen: boolean,
    closeModal: () => void,
    title: string,
    children?: any
}

export const Modal = (props: ModalType) => {
    React.useEffect(() => {
        document.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
                props.closeModal();
            }
        });
        document.addEventListener("click", (e) => {
            if ((e.target as HTMLDivElement).id === "modal-overlay") {
                props.closeModal();
            }
        })
    }, [props]);

    if (props.isOpen) {
        document.body.classList.add('scroll-lock');
        return (
            ReactDOM.createPortal(
                <>
                    <ModalOverlay>
                        <div className={`${"pt-10 pr-10 pb-15 pl-10"} ${styles.modal}`}>
                            <div className={`${"text text_type_main-large"} ${styles.title}`}>{props.title}</div>
                            {props.children}
                            <div className={styles.close} onClick={props.closeModal}>
                                <CloseIcon type="primary"/>
                            </div>
                        </div>
                    </ModalOverlay>
                </>,
                document.getElementById("modal")!
            )
        );
    } else {
        document.body.classList.remove('scroll-lock');
        return (
            <></>
        );
    }
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any
};

