import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const InputAdornmentVariants = cva(
  [
    "border rounded-lg px-4 py-3",
    "text-base-1100 bg-base-100 border-base-400",
    "dark:text-base-400 dark:bg-base-1600 dark:border-base-1200",

    // group classes
    "group-[]/input-group:rounded-none",
    "group-[]/input-group:first:ml-0",
    "group-[]/input-group:-ml-[1px]",
    "group-[]/input-group:first:rounded-l-lg",
    "group-[]/input-group:last:rounded-r-lg",
  ],
  { variants: {} }
);

export type InputAdornmentProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof InputAdornmentVariants>;

export const InputAdornment: React.FC<InputAdornmentProps> = ({
  className,
  ...props
}) => {
  const classes = InputAdornmentVariants({});

  return <div className={twMerge(classes, className)} {...props} />;
};
