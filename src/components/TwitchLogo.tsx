import React from "react";

type TwitchLogoProps = React.ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const TwitchLogo = React.forwardRef<
  React.ElementRef<"svg">,
  TwitchLogoProps
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
      viewBox="0 0 12 12"
      ref={ref}
      width={size}
      height={size}
      fill="currentcolor"
      {...props}
    >
      <path d="M.8 0 0 2.06v8.42h2.87V12h1.6L6 10.48h2.33l3.13-3.14V0H.81Zm9.59 6.8-1.8 1.8H5.74l-1.52 1.52V8.6H1.79V1.08h8.6V6.8Zm-1.8-3.67v3.13H7.53V3.13H8.6Zm-2.86 0v3.13H4.66V3.13h1.07Z" />
    </svg>
  );
});

TwitchLogo.displayName = "TwitchLogo";
