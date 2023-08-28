import { useTwitchEmbed } from "@hooks/useTwitchEmbed";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export type EmbedControls = {
  channel: string;
  width: number;
  height: number;
};

const TwitchEmbedVariants = cva([""], { variants: {} });

type TwitchEmbedProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof TwitchEmbedVariants> &
  EmbedControls;

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({
  className,
  channel,
  width,
  height,
  ...props
}) => {
  const classes = TwitchEmbedVariants({});

  const { playerRef } = useTwitchEmbed(channel, width, height);

  return (
    <div className={twMerge(classes, className)} {...props} ref={playerRef} />
  );
};

const KickEmbedVariants = cva([""], { variants: {} });

type KickEmbedProps = React.ComponentPropsWithoutRef<"iframe"> &
  VariantProps<typeof KickEmbedVariants> &
  EmbedControls;

const KickEmbed: React.FC<KickEmbedProps> = ({
  className,
  channel,
  width,
  height,
  ...props
}) => {
  const classes = KickEmbedVariants({});

  return (
    <iframe
      className={twMerge(classes, className)}
      src={`https://player.kick.com/${channel}?allowfullscreen=false`}
      height={height}
      width={width}
      {...props}
    />
  );
};

export { TwitchEmbed, KickEmbed };
