import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const InputButtonVariants = cva(
  [
    "border rounded-lg px-4 py-3",
    "font-semibold tracking-wider shadow-sm",
    "inline-flex items-center justify-center gap-4",
    "transition-colors",

    "focus:ring-active",
    "text-base-1200 dark:text-base-400",
    "bg-base-100 hover:bg-base-200 dark:bg-base-1600 dark:hover:bg-base-1400",
    "border-base-400 hover:border-base-600 dark:border-base-1200 dark:hover:border-base-1000",

    // group classes
    "group-[]/input-group:rounded-none",
    "group-[]/input-group:first:ml-0",
    "group-[]/input-group:-ml-[1px]",
    "group-[]/input-group:first:rounded-l-lg",
    "group-[]/input-group:last:rounded-r-lg",
  ],
  { variants: {} }
);

export type InputButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof InputButtonVariants>;

export const InputButton: React.FC<InputButtonProps> = ({
  className,
  ...props
}) => {
  const classes = InputButtonVariants({});

  return <button className={twMerge(classes, className)} {...props} />;
};
