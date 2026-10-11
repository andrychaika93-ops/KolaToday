import { Composition } from "remotion";
import { MyComponent } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Intro"
        component={MyComponent}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ title: "KolaToday", subtitle: "Первое видео на Remotion" }}
      />
      <Composition
        id="IntroReels"
        component={MyComponent}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "KolaToday",
          subtitle: "Первое видео на Remotion",
          titleSize: 150,
          subtitleSize: 72,
        }}
      />
    </>
  );
};
