"use client";

import { KickEmbed, TwitchEmbed } from "@/components/StreamEmbed";
import { useViewportSize } from "@/hooks/useViewportDimension";
import { decodeStreamArray } from "@utils/url";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const viewportSize = useViewportSize();
  const width = Math.floor((viewportSize?.width ?? 0) / 2);
  const height = Math.floor((viewportSize?.height ?? 0) / 3);

  const { getAll } = useSearchParams();

  const streams = decodeStreamArray(getAll("stream") ?? []);

  console.log(streams);

  /*
  stream=twitch:b0aty&stream=twitch:dino_xx&stream=kick:iceposeidon&stream=twitch:mmorpg&stream=twitch:purespam
  */

  return (
    <main className="min-h-screen overflow-hidden grid grid-cols-2 auto-rows-fr items-center justify-center">
      {streams.map(({ channel, platform }, idx) =>
        platform === "twitch" ? (
          <TwitchEmbed
            key={`${idx}-${channel}`}
            width={width}
            height={height}
            channel={channel}
          />
        ) : (
          <KickEmbed
            key={`${idx}-${channel}`}
            width={width}
            height={height}
            channel={channel}
          />
        )
      )}
    </main>
  );
}
