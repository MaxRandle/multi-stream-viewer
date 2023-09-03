import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

const buttonClasses = cva(
  [
    "font-semibold tracking-wider border rounded-full shadow-sm inline-flex items-center justify-center gap-4 transition-colors",

    "group-[]/button-group:px-4",
    "group-[]/button-group:rounded-none",
    "group-[]/button-group:shadow-none",
    "group-[]/button-group:first:rounded-l-full",
    "group-[]/button-group:last:rounded-r-full",
    "group-[]/button-group:first:pl-5",
    "group-[]/button-group:last:pr-5",
    "group-[]/button-group:hover:relative",
    "group-[]/button-group:focus-visible:relative",
  ],
  {
    variants: {
      /**
       * @summary specifies the background and text colors
       */
      intent: {
        primary: [
          "focus:ring-base",
          "text-white",
          "bg-primary-1000 hover:bg-primary-900",
          "border-primary-1000 hover:border-primary-900",
        ],
        secondary: [
          "focus:ring-active hover:focus:ring-active",
          "text-base-1200 dark:text-base-400",
          "bg-base-100 hover:bg-base-200 dark:bg-base-1600 dark:hover:bg-base-1400",
          "border-base-400 hover:border-base-600 dark:border-base-1200 dark:hover:border-base-1000",
        ],
        destructive: [
          "focus:ring-base",
          "text-white",
          "bg-danger-1000 hover:bg-danger-900",
          "border-danger-1000 hover:border-danger-900",
        ],
      },
      /**
       * @summary specifies size of the button
       */
      size: {
        md: "h-10 px-5 text-md",
        lg: "h-14 px-8 text-lg",
      },
      disabled: {
        true: [
          "opacity-60 pointer-events-none",
          "text-base-900 dark:text-base-400",
          "bg-base-300 dark:bg-base-1000 hover:bg-base-300 dark:hover:bg-base-1000",
          "border-base-300 dark:border-base-1000 hover:border-base-300 dark:hover:border-base-1000",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonClasses>;

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  disabled,
  ...props
}) => {
  const classes = buttonClasses({ intent, size, disabled });

  return (
    <button
      className={twMerge(classes, className)}
      disabled={disabled}
      {...props}
    />
  );
};

export type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof buttonClasses>;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  intent,
  size,
  disabled,
  ...props
}) => {
  const classes = buttonClasses({ intent, size, disabled });

  return <NextLink className={twMerge(classes, className)} {...props} />;
};
