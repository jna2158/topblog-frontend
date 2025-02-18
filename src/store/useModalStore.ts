import { create } from "zustand";

interface ModalState {
  creditModal: {
    isOpen: boolean;
    data?: any;
  };
  proModal: {
    isOpen: boolean;
    data?: any;
  };
  setCreditModalOpen: (isOpen: boolean, data?: any) => void;
  setProModalOpen: (isOpen: boolean, data?: any) => void;
}

const useModalStore = create<ModalState>((set) => ({
  creditModal: { isOpen: false },
  proModal: { isOpen: false },

  // paymentsModal 열기, 닫기
  setCreditModalOpen: (isOpen, data) =>
    set(() => ({
      creditModal: { isOpen, data },
    })),
  setProModalOpen: (isOpen, data) =>
    set(() => ({
      proModal: { isOpen, data },
    })),
}));

export default useModalStore;
