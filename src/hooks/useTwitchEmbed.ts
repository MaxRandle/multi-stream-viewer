import Twitch from "@utils/twitchEmbedV1";
import React, { useLayoutEffect, useId } from "react";

export const useTwitchEmbed = (
  channel: string,
  width: number,
  height: number
) => {
  const playerRef = React.useRef<HTMLDivElement>(null);
  const id = useId();

  useLayoutEffect(() => {
    if (!playerRef.current) return;

    playerRef.current.id = id;

    const embed = new Twitch.Embed(id, {
      width,
      height,
      channel,
      layout: "video",
      autoplay: false,
      // Only needed if this page is going to be embedded on other websites
      parent: ["embed.example.com", "othersite.example.com", "localhost"],
    });

    const play = () => {
      const player = embed.getPlayer();
      player.play();
    };

    embed.addEventListener(Twitch.Embed.VIDEO_READY, play);

    return () => {
      embed.removeEventListener(Twitch.Embed.VIDEO_READY, play);
    };
  }, [channel, id, width, height]);

  return { playerRef };
};
