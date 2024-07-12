"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
interface IButtonProps {
  route: string;
  animation: {};
  icon: string;
  name: string;
  size: number;
  variant: {};
}
export const IconButton = ({ buttonProps }: { buttonProps: IButtonProps }) => {
  const router = useRouter();
  const rotate = {
    initial: { rotate: 0 },
    hover: {rotate: 360, transition: { repeat: Infinity, repeatDelay: 0, stiffness: 1000, duration:5 }, ease: [0.17, 0.67, 0.83, 0.67] },
    rest:{rotate:0}
  };
  return (
    <motion.div variants={rotate} whileHover='hover' initial='initial' exit='rest'>
      <Image
        src={buttonProps.icon}
        width={buttonProps.size}
        height={buttonProps.size}
        alt={buttonProps.name}
        className="cursor-pointer"
        onClick={() => router.push(buttonProps.route)}
      />
    </motion.div>
  );
};
