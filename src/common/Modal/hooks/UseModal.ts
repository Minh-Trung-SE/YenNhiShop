import {useContext} from "react";
import ModalContext from "@src/common/Modal/context/ModalContext";

const useModal = () => {
    return useContext(ModalContext)
}

export default useModal;