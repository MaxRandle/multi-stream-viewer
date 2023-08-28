type Platform = "twitch" | "kick";
type Channel = string;

type Stream = {
  platform: Platform;
  channel: Channel;
};

export const encodeStream = (streams: Stream[]): string[] => {
  return streams.map((stream) => {
    const { platform, channel } = stream;
    return `${platform}:${channel}`;
  });
};

export const decodeStreamArray = (streams: string[]): Stream[] => {
  return streams.map((stream) => {
    const [platform, channel] = stream.split(":");
    return { platform: platform as Platform, channel };
  });
};
