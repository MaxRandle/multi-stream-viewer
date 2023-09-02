import React from "react";

type KickLogoProps = React.ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const KickLogo = React.forwardRef<
  React.ElementRef<"svg">,
  KickLogoProps
>(({ size, ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 80 90"
      ref={ref}
      width={size}
      height={size}
      fill="currentcolor"
      {...props}
    >
      <path d="M30.1 20H40V10h10V0h30v30H70v10H60v10h10v10h10v30H50V80H40V70H30v20H0V0h30.1v20Z" />
    </svg>
  );
});

KickLogo.displayName = "KickLogo";
