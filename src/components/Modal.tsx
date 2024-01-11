const Modal = ({
  modal,
  setCloseModal,
  children,
}: {
  modal: boolean;
  setCloseModal: (value: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="fixed inset-0 z-10 text-base overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black cursor-pointer opacity-80"
        onClick={() => setCloseModal(!modal)}
      ></div>
      <div className="flex items-center min-h-screen p-8">
        <div className="relative w-fit max-w-6xl p-4 mx-auto my-auto bg-white rounded-xl shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
