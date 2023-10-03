// import { Text } from "@fluentui/react";
// import { Box24Filled } from "@fluentui/react-icons";

// import styles from "./Feedback.module.css";

// interface Props {
//     className?: string;
//     onClick: () => void;
// }

// export const Feedback = ({ className, onClick }: Props) => {
//     return (
//         <div className={`${styles.container} ${className ?? ""}`} onClick={onClick}>
//             <Box24Filled />
//             <Text>{"Feedback"}</Text>
//         </div>
//     );
// };

// FeedbackModal.js (Your modal component)

// import React, { useContext } from "react";
// import Modal from "react-modal";

// // Define the type for your modal context
// interface FeedbackModalContextType {
//     isOpen: boolean;
//     closeModal: () => void;
// }

// // Create a context to manage the modal state
// const FeedbackModalContext = React.createContext<FeedbackModalContextType | undefined>(undefined);

// export const FeedbackModal: React.FC = () => {
//     const { isOpen, closeModal } = useContext(FeedbackModalContext) as FeedbackModalContextType;

//     return (
//         <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Feedback Modal">
//             {/* Modal content */}
//             <h2>Provide Feedback</h2>
//             <iframe width="640px" height="480px" src="https://forms.office.com/r/5EXRu3NFab?embed=true"></iframe>
//             <button onClick={closeModal}>Close</button>
//         </Modal>
//     );
// };

import React from "react";
import Modal from "react-modal";
import styles from "./feedback.module.css"; // Import the CSS module

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Feedback Modal"
            style={{
                content: {
                    width: "50%",
                    margin: "auto",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }
            }}
        >
            <h2>Provide Feedback</h2>
            <iframe
                width="800px"
                height="600px"
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=GKmlR-y0D0eGysZ-ghzkWwoTyjqflAtMiK7LrDN0mF5UQ1pYR1A3WFVBV0FYRlVCTTJRQUwyWlBZUi4u&embed=true"
            ></iframe>

            <button onClick={onClose} className={styles.closeButton}>
                Close
            </button>
        </Modal>
    );
};

export default FeedbackModal;
