import { Stream } from "@/utils/url";
import React from "react";
import { twMerge } from "tailwind-merge";
import { KickEmbed, TwitchEmbed } from "./StreamEmbed";
import { useViewportSize } from "@/hooks/useViewportSize";
import { divideScreen } from "@/utils/screen";

export type StreamDisplayGridProps = React.ComponentPropsWithoutRef<"ul"> & {
  streams: Stream[];
};

export const StreamDisplayGrid: React.FC<StreamDisplayGridProps> = ({
  streams,
  className,
  ...props
}) => {
  const { numberOfColumns, numberOfRows } = divideScreen(streams.length);
  const viewportSize = useViewportSize();

  if (!viewportSize) {
    return null;
  }

  const width = Math.floor(viewportSize.width / numberOfColumns);
  const height = Math.floor(viewportSize.height / numberOfRows);

  const gridClasses = [
    "min-h-screen w-full grid auto-rows-fr auto-cols-fr",
    `grid-cols-${numberOfColumns}`,
  ];

  console.log("viewport dimensions");
  console.log(viewportSize);
  console.log("stream dimensions");
  console.log({ width, height });

  return (
    <ul className={twMerge(gridClasses, className)} {...props}>
      {streams.map(({ channel, platform }, idx) => (
        <li key={`${idx}-${channel}`} className="grow w-full h-full">
          {platform === "twitch" ? (
            <TwitchEmbed width={width} height={height} channel={channel} />
          ) : (
            <KickEmbed width={width} height={height} channel={channel} />
          )}
        </li>
      ))}
    </ul>
  );
};
