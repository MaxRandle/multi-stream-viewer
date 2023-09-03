type Platform = "twitch" | "kick";
type Channel = string;

export type Stream = {
  platform: Platform;
  channel: Channel;
};

export const encodeStream = (streams: Stream[]): string => {
  return streams
    .map((stream) => {
      const { platform, channel } = stream;
      return `stream=${platform}:${channel}`;
    })
    .join("&");
};

export const decodeStreamArray = (streams: string[]): Stream[] => {
  return streams.map((stream) => {
    const [platform, channel] = stream.split(":");
    return { platform: platform as Platform, channel };
  });
};
