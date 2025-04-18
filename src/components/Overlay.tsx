type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Overlay = ({ setIsOpen }: ModalProps) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 w-full h-full z-[80] transition-all duration-500 backdrop-blur bg-white/10"
    ></div>
  );
};
