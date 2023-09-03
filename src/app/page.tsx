"use client";

import { Section } from "@/components/Section";
import { KickEmbed, TwitchEmbed } from "@/components/StreamEmbed";
import { StreamsForm, StreamsFormFields } from "@/forms/StreamsForm";
import { useViewportSize } from "@/hooks/useViewportSize";
import { decodeStreamArray, encodeStream } from "@utils/url";
import { useSearchParams, useRouter } from "next/navigation";

export default function Home() {
  const viewportSize = useViewportSize();
  const width = Math.floor((viewportSize?.width ?? 0) / 2);
  const height = Math.floor((viewportSize?.height ?? 0) / 3);

  console.log({ width, height });

  const { getAll } = useSearchParams();
  const router = useRouter();

  const streams = decodeStreamArray(getAll("stream") ?? []);

  const handleFormSubmit = (formData: StreamsFormFields) => {
    const queryString = encodeStream(formData.streams);
    router.push(`/?${queryString}`);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <Section>
        <div className="container">
          <StreamsForm
            initialValues={{ streams }}
            onSubmit={handleFormSubmit}
          />
        </div>
      </Section>
      <div className="min-h-screen grid auto-rows-fr items-center justify-center">
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
      </div>
    </main>
  );
}
