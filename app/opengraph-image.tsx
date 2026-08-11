import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Mohamed Darrazi — Développeur · BTS SIO SLAM";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const spaceGroteskBold = await readFile(
  join(process.cwd(), "assets/SpaceGrotesk-Bold.ttf")
);
const spaceGroteskMedium = await readFile(
  join(process.cwd(), "assets/SpaceGrotesk-Medium.ttf")
);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0712",
          backgroundImage:
            "radial-gradient(40% 40% at 30% 25%, rgba(123, 107, 176, 0.28), transparent 70%), radial-gradient(45% 45% at 75% 70%, rgba(90, 70, 150, 0.22), transparent 70%)",
        }}
      >
        <div
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontSize: 96,
            color: "#ece9f5",
            letterSpacing: "-0.03em",
          }}
        >
          Mohamed Darrazi
        </div>
        <div
          style={{
            marginTop: 28,
            fontFamily: "Space Grotesk",
            fontWeight: 500,
            fontSize: 38,
            color: "#b9a6ff",
          }}
        >
          Développeur · BTS SIO SLAM
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGroteskBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Space Grotesk",
          data: spaceGroteskMedium,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
