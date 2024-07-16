import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "container" | "outline";
}

export const Button: FC<ButtonProps> = ({
  variant = "container",
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={clsx(
        "rounded-full py-4 px-7 font-semibold",
        {
          "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950":
            variant === "container",
          "outline outline-1 outline-zinc-950 dark:outline-white text-zinc-950 dark:text-white":
            variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
};
