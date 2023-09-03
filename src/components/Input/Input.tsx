import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const InputVariants = cva(
  twMerge([
    "border appearance-none px-4 py-3 rounded-lg focus:ring-active w-full",

    // base classes
    "text-base-1100 bg-base-100 border-base-400",
    "dark:text-base-400 dark:bg-base-1600 dark:border-base-1200",

    // invalid classes
    "invalid:focus:ring-danger",
    "invalid:text-danger-1100 invalid:bg-danger-200 invalid:border-danger-500",
    "dark:invalid:text-danger-400 dark:invalid:bg-danger-1500 dark:invalid:border-danger-1000",

    // disabled classes
    "disabled:bg-base-300 disabled:dark:bg-base-1200 disabled:opacity-60",

    // group classes
    "group-[]/input-group:focus:relative",
    "group-[]/input-group:rounded-none",
    "group-[]/input-group:first:ml-0",
    "group-[]/input-group:-ml-[1px]",
    "group-[]/input-group:first:rounded-l-lg",
    "group-[]/input-group:last:rounded-r-lg",
  ]),
  { variants: {} }
);

export type InputProps = React.ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof InputVariants>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const classes = InputVariants({});

    return (
      <input className={twMerge(classes, className)} ref={ref} {...props} />
    );
  }
);

Input.displayName = "Input";
