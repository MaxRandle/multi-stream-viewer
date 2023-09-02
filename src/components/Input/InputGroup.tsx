import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const InputGroupVariants = cva(["group/input-group flex"], { variants: {} });

export type InputGroupProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof InputGroupVariants>;

export const InputGroup: React.FC<InputGroupProps> = ({
  className,
  ...props
}) => {
  const classes = InputGroupVariants({});

  return <div className={twMerge(classes, className)} {...props} />;
};
