import { useSearchParams, usePathname } from "next/navigation";
interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ onClose, children }: IModalProps) => {
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");
  const pathname = usePathname();
  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      {modal && (
        <dialog
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur"
          onClick={handleCloseClick}
        >
          <div className="m-auto bg-white p-8 rounded-xl">
            <div className="flex flex-col items-center">
              <div>{children}</div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};
