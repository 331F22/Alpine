import { useState } from "react";

export const useModal = () => {
  let [modal, setModal] = useState(false);
  let [modalContent, setModalContent] = useState("Chances are if you're seeing this text, you didn't specify a modal body! :(");

  let handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};

export default useModal;