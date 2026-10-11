import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type Props = {
  readonly title: string;
  readonly subtitle: string;
  readonly titleSize?: number;
  readonly subtitleSize?: number;
};

export const MyComponent: React.FC<Props> = ({ title, subtitle, titleSize = 200, subtitleSize = 80 }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const subtitleIn = spring({ frame: frame - 20, fps, config: { damping: 200 } });
  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const gradientAngle = interpolate(frame, [0, durationInFrames], [120, 200]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${gradientAngle}deg, #0f172a, #1d4ed8)`,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
        color: "white",
        opacity: fadeOut,
        padding: "100px 80px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: titleSize,
          fontWeight: 800,
          letterSpacing: -4,
          opacity: titleIn,
          transform: `translateY(${interpolate(titleIn, [0, 1], [60, 0])}px)`,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: subtitleSize,
          marginTop: 24,
          opacity: subtitleIn,
          transform: `translateY(${interpolate(subtitleIn, [0, 1], [40, 0])}px)`,
        }}
      >
        {subtitle}
      </div>
    </AbsoluteFill>
  );
};
