import React, { useLayoutEffect } from "react";

import crypto from "crypto";

type params = {
  channel: string;
  width: number;
  height: number;
  autoplay?: boolean;
};

export const useTwitchEmbed = ({
  channel,
  width,
  height,
  autoplay = false,
}: params) => {
  const playerRef = React.useRef<HTMLDivElement>(null);
  const id = crypto.randomBytes(20).toString("hex");

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const Twitch = (window as typeof window & { Twitch: any }).Twitch;
    if (!Twitch) return;
    if (!playerRef.current) return;

    playerRef.current.id = id;

    const embed = new Twitch.Embed(id, {
      width,
      height,
      channel,
      layout: "video",
      autoplay,
      // Only needed if this page is going to be embedded on other websites
      // TODO: add domain
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
  }, [channel, id, width, height, autoplay]);

  return { playerRef };
};
