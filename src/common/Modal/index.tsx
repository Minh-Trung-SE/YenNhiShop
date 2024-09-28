import Root from "@src/common/Modal/components/Root";
import Overlay from "@src/common/Modal/components/Overlay";
import Content from "@src/common/Modal/components/Content";
import ModalContext from "@src/common/Modal/context/ModalContext";
import useModal from "@src/common/Modal/hooks/UseModal";
import Trigger from "@src/common/Modal/components/Trigger";

const Modal = {
    Root,
    Consumer: ModalContext.Consumer,
    Trigger,
    Overlay,
    Content,
    useModal
}

export default Modal;