/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { alpha } from "@/lib/alpha";
import { Theme } from "@/lib/theme";
import { ImageResponse, NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const inter = fetch(
  new URL(`../../assets/Inter-Regular.woff`, import.meta.url)
).then((res) => res.arrayBuffer());
const inter500 = fetch(
  new URL(`../../assets/Inter-Medium.woff`, import.meta.url)
).then((res) => res.arrayBuffer());
const inter600 = fetch(
  new URL(`../../assets/Inter-SemiBold.woff`, import.meta.url)
).then((res) => res.arrayBuffer());

const checkIcon = (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    x="80"
    y="80"
    alignmentBaseline="middle"
  >
    <path
      d="M10.25 5.75s-2.385 2.54-3 4.5l-1.5-1.5m8.5-.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export async function GET(request: NextRequest) {
  try {
    const interData = await inter;
    const inter500Data = await inter500;
    const inter600Data = await inter600;

    const { searchParams } = new URL(request.url);

    const theme = searchParams.has("theme")
      ? (JSON.parse(
          decodeURIComponent(searchParams.get("theme") as string)
        ) as Theme)
      : undefined;

    if (!theme) {
      return NextResponse.json({ error: "No theme provided" }, { status: 400 });
    }

    const isDarkTheme = theme.appearance === "dark";

    const tokens = {
      backgroundPrimary: `${theme?.colors.backgroundPrimary}`,
      backgroundPrimary600: `${theme?.colors.backgroundPrimary}${alpha["60"]}`,
      backgroundSecondary: `${theme?.colors.backgroundSecondary}`,
      backgroundSecondary600: `${theme?.colors.backgroundSecondary}${alpha["60"]}`,
      border100: `${theme?.colors.text}${alpha["10"]}`,
      border200: `${theme?.colors.text}${alpha["20"]}`,
      text: `${theme?.colors.text}`,
      text100: `${theme?.colors.text}${alpha["10"]}`,
      text400: `${theme?.colors.text}${alpha["40"]}`,
      text600: `${theme?.colors.text}${alpha["60"]}`,
      loader: `${theme?.colors.loader}`,
      selection: `${theme?.colors.selection}`,
      selection100: `${theme?.colors.selection}${alpha["10"]}`,
      green: `${theme?.colors.green}`,
      green100: `${theme?.colors.green}${alpha["15"]}`,
      yellow: `${theme?.colors.yellow}`,
      yellow100: `${theme?.colors.yellow}${alpha["15"]}`,
      red: `${theme?.colors.red}`,
      red100: `${theme?.colors.red}${alpha["15"]}`,
      orange: `${theme?.colors.orange}`,
      orange100: `${theme?.colors.orange}${alpha["15"]}`,
      blue: `${theme?.colors.blue}`,
      blue100: `${theme?.colors.blue}${alpha["15"]}`,
      purple: `${theme?.colors.purple}`,
      purple100: `${theme?.colors.purple}${alpha["15"]}`,
      pink: `${theme?.colors.pink}`,
      pink100: `${theme?.colors.pink}${alpha["15"]}`,
    };

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
            height: "100%",
            // justifyContent: "center",

            backgroundColor: tokens.backgroundPrimary,
            backgroundImage: `linear-gradient(${tokens.backgroundPrimary}, ${tokens.backgroundSecondary})`,
          }}
        >
          <span
            style={{
              textAlign: "center",
              margin: "0 auto",
              color: tokens.text,
              fontSize: 40,
              fontWeight: 600,
              marginTop: 50,
            }}
          >
            {theme.name}
          </span>
          <span
            style={{
              textAlign: "center",
              margin: "0 auto",
              color: tokens.text,
              fontSize: 24,
              marginBottom: 50,
            }}
          >
            by {theme.author}
          </span>

          <div
            style={{
              borderRadius: "12px",
              border: "1px solid",
              borderColor: tokens.border200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
              overflow: "hidden",
              flexShrink: 0,
              backgroundColor: tokens.backgroundPrimary600,
              margin: "0 auto",
              position: "absolute",
              top: "250px",
              left: "50%",
              transform: "translateX(-50%) scale(1.25)",

              width: 750,
              height: 475,

              boxShadow: isDarkTheme
                ? "0px 0px 29px 10px rgba(255,255,255,.06)"
                : "0px 0px 29px 10px rgba(0,0,0,.06)",
            }}
          >
            <header
              style={{
                height: "52px",
                paddingLeft: "16px",
                paddingRight: "16px",
                borderStyle: "solid",
                borderBottomWidth: "1px",
                borderBottomColor: tokens.border100,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  backgroundColor: tokens.text100,
                  color: tokens.text,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path
                    d="M6.25 4.75L2.75 8M2.75 8L6.25 11.25M2.75 8H13.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  width: "100%",
                  lineHeight: "1",
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "16px",
                  marginLeft: "10px",
                  color: tokens.text400,
                }}
              >
                Search for apps and commands...
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  width: "200px",
                  height: "1px",
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), ${tokens.loader}, rgba(255, 255, 255, 0))`,
                }}
              ></div>
            </header>

            <main
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1",
                overflow: "hidden",
                paddingTop: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "4px 8px",
                  color: tokens.text,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "8px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    letterSpacing: "0.1px",
                    color: tokens.text600,
                  }}
                >
                  List
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "40px",
                    padding: "8px",
                    borderRadius: "8px",
                    backgroundColor: tokens.selection100,
                  }}
                >
                  <div style={{ display: "flex", marginRight: "10px" }}>
                    {checkIcon}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      lineHeight: "1",
                      color: tokens.text,
                    }}
                  >
                    Primary Text
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "40px",
                    padding: "8px",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", marginRight: "10px" }}>
                    {checkIcon}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      lineHeight: "1",
                      color: tokens.text600,
                    }}
                  >
                    Secondary Text
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "Inter", data: interData, weight: 400, style: "normal" },
          { name: "Inter", data: inter500Data, weight: 500, style: "normal" },
          { name: "Inter", data: inter600Data, weight: 600, style: "normal" },
        ],
      }
    );
  } catch (e) {
    return NextResponse.json(e);
  }
}
