"use client";

import { KickEmbed, TwitchEmbed } from "@/components/StreamEmbed";
import { useViewportSize } from "@/hooks/useViewportDimension";

export default function Home() {
  const viewportSize = useViewportSize();
  const width = (viewportSize?.width ?? 0) / 2;
  const height = (viewportSize?.height ?? 0) / 2;

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="grid grid-cols-2">
        <TwitchEmbed width={width} height={height} channel="b0aty" />
        <TwitchEmbed width={width} height={height} channel="dino_xx" />
        <TwitchEmbed width={width} height={height} channel="mmorpg" />
        <TwitchEmbed width={width} height={height} channel="purespam" />
        <KickEmbed width={width} height={height} channel="iceposeidon" />
      </div>
    </main>
  );
}
