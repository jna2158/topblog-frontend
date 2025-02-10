import { create } from "zustand";

interface ModalState {
  creditModal: {
    isOpen: boolean;
    data?: any;
  };
  proModal: {
    isOpen: boolean;
  };
  setCreditModalOpen: (isOpen: boolean, data?: any) => void;
  setProModalOpen: (isOpen: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  creditModal: { isOpen: false },
  proModal: { isOpen: false },

  // paymentsModal 열기, 닫기
  setCreditModalOpen: (isOpen, data) =>
    set(() => ({
      creditModal: { isOpen, data },
    })),
  setProModalOpen: (isOpen) =>
    set(() => ({
      proModal: { isOpen },
    })),
}));

export default useModalStore;
