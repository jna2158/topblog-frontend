import { create } from "zustand";

interface ModalState {
  paymentsModal: {
    isOpen: boolean;
    data?: any;
  };
  setPaymentsModalOpen: (isOpen: boolean, data?: any) => void;
}

const useModalStore = create<ModalState>((set) => ({
  paymentsModal: { isOpen: false },

  // paymentsModal 열기, 닫기
  setPaymentsModalOpen: (isOpen, data) =>
    set(() => ({
      paymentsModal: { isOpen, data },
    })),
}));

export default useModalStore;
