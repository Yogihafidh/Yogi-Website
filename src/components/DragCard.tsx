"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

type DragCardProps = {
  hobby: { title: string; top: string; left: string }[];
};
export const DragCard = ({ hobby }: DragCardProps) => {
  const constraintRef = useRef(null);
  return (
    <div className="relative flex-1" ref={constraintRef}>
      {hobby.map((item) => (
        <motion.div
          drag
          dragConstraints={constraintRef}
          key={item.title}
          className=" inline-flex gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full font-medium absolute"
          style={{
            left: item.left,
            top: item.top,
          }}
        >
          {item.title}
        </motion.div>
      ))}
    </div>
  );
};
