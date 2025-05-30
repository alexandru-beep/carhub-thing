"use client";

import { CustomButtonProps } from "@/types/types";
import Image from "next/image";

const CustomButton = ({
  containerStyles,
  title,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => (
  <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="right icon"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default CustomButton;
