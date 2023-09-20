import React  from "react";
import styles from "./styles.module.scss";

function Modal({ title, isOpen, openModal, closeModal, children }) {
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
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
            <div>
              {" "}
              <button onClick={openModal}>Cancel</button>
              <button onClick={openModal}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
