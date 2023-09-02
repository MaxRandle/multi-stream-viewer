import { twMerge } from "tailwind-merge";

type ButtonGroupProps = React.ComponentPropsWithoutRef<"div">;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "group/button-group inline-flex -space-x-px rounded-full shadow-sm",
        className
      )}
      {...props}
    />
  );
};
