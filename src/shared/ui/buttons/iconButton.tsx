"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
interface IButtonProps {
  route: string;
  icon: string;
  name: string;
  size: number;
  variant:any
}
export const IconButton = ({ buttonProps }: { buttonProps: IButtonProps }) => {  
  const router = useRouter();  
  return (
    <motion.div className="flex items-center gap-2">
      <motion.div
        variants={buttonProps.variant.animation}
        whileHover="hover"
        whileTap="tap"
        initial="initial"
        exit="rest"
      >
        <Image
          src={buttonProps.icon}
          width={buttonProps.size}
          height={buttonProps.size}
          alt={buttonProps.name}
          className=" cursor-pointer"
          onClick={() => router.push(buttonProps.route)}
        />
      </motion.div>
    </motion.div>
  );
};
