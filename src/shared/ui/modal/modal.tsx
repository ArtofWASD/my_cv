import { useSearchParams, usePathname } from "next/navigation";
import { IconButton } from "../buttons/iconButton";
import { animations } from "../buttons/animations/animations";
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
        <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
          <div className="m-auto rounded-xl bg-white p-4">
            <div className="flex justify-end">
              <IconButton
                buttonProps={{
                  icon: "/icons/clear.png",
                  size: 20,
                  route: "/",
                  name: "Закрыть",
                  variant: {animation: animations.bounce},
                }}
              />
            </div>
            {children}
          </div>
        </dialog>
      )}
    </>
  );
};
