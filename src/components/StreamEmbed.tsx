import { useTwitchEmbed } from "@hooks/useTwitchEmbed";
import { twMerge } from "tailwind-merge";

export type EmbedControls = {
  channel: string;
  width: number;
  height: number;
  autoplay?: boolean;
};

type TwitchEmbedProps = React.ComponentPropsWithoutRef<"div"> & EmbedControls;

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({
  className,
  channel,
  width,
  height,
  autoplay,
  ...props
}) => {
  const { playerRef } = useTwitchEmbed({ channel, width, height, autoplay });

  return (
    <div
      className={twMerge("w-full h-full", className)}
      {...props}
      ref={playerRef}
    />
  );
};

type KickEmbedProps = React.ComponentPropsWithoutRef<"iframe"> & EmbedControls;

const KickEmbed: React.FC<KickEmbedProps> = ({
  className,
  channel,
  width,
  height,
  autoplay,
  ...props
}) => {
  const queryParams = [
    `allowfullscreen=true`,
    autoplay ? `autoplay=true` : undefined,
  ]
    .filter(Boolean)
    .join("&");

  const classes = ["h-full aspect-video"];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe
        // width={width}
        // height={height}
        className={twMerge(classes, className)}
        src={`https://player.kick.com/${channel}?${queryParams}}`}
        frameBorder="0"
        scrolling="no"
        {...props}
      />
    </div>
  );
};

export { TwitchEmbed, KickEmbed };
