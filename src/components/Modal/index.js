import React from "react";
import styles from "./styles.module.scss";

function Modal({ title, isOpen, openModal, closeModal, children,showButtons }) {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalWrapper}>
            <div className={styles.title}>
              {title}
              <span className={styles.close} onClick={closeModal}>
                &times;
              </span>
            </div>

            <div className={styles.modalContent}>{children}</div>
            { 
            showButtons &&
              <div className={styles.buttonWrapper}>
                <button className={styles.cancel} onClick={closeModal}>
                  Cancel
                </button>
                <button className={styles.submit} onClick={openModal}>
                  Submit
                </button>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
