import { useSearchParams, usePathname } from "next/navigation";
interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export const Modal = ({ onClose, children, title }: IModalProps) => {
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");
  const pathname = usePathname();
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
          <div className="m-auto bg-white p-8">
            <div className="flex flex-col items-center">
              <h3>{title}</h3>
              <div>{children}</div>
              <button
                type="button"
                className="bg-red-500 p-2 text-white "
                onClick={handleCloseClick}
              >
                Close Modal
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};
