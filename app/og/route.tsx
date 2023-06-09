/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

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

const bgLight = fetch(
  new URL("../../public/bg-light.jpeg", import.meta.url)
).then((res) => res.arrayBuffer());

const bgDark = fetch(
  new URL("../../public/bg-dark.jpeg", import.meta.url)
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
    const bgLightData: any = await bgLight;
    const bgDarkData: any = await bgDark;

    const { searchParams } = new URL(request.url);

    const theme = searchParams.has("theme")
      ? (JSON.parse(
          decodeURIComponent(searchParams.get("theme") as string)
        ) as Theme)
      : undefined;

    if (!theme) {
      return NextResponse.json({ error: "No theme provided" }, { status: 400 });
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={theme.appearance === "dark" ? bgDarkData : bgLightData}
            style={{
              position: "absolute",
              bottom: 0,
              left: "-30%",
              width: "150%",
              height: "150%",
              objectFit: "cover",
              objectPosition: "bottom center",
            }}
            alt=""
          />
          <svg
            viewBox="0 0 750 475"
            height="475"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "flex",
              border: "none",
              position: "absolute",
              transform: "scale(2.5)",
              left: "700px",
              top: "500px",
            }}
          >
            <foreignObject width="750" height="475" x="0" y="0">
              <div
                style={{
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor: `rgba(${theme.colors.text}, 0.2)`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: `rgba(${theme.colors.backgroundPrimary}, 0.90)`,
                }}
              >
                <header
                  style={{
                    height: "52px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    borderStyle: "solid",
                    borderBottomWidth: "1px",
                    borderBottomColor: `rgba(${theme.colors.text}, 0.1)`,
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
                      backgroundColor: `rgba(${theme.colors.text}, 0.1)`,
                      color: `rgba(${theme.colors.text}, 1)`,
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
                      color: `rgba(${theme.colors.text}, 0.4)`,
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
                      backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), rgba(${theme.colors.loader}, 1), rgba(255, 255, 255, 0))`,
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
                      color: `rgba(${theme.colors.text}, 1)`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        padding: "8px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        letterSpacing: "0.1px",
                        color: `rgba(${theme.colors.text}, 0.6)`,
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
                        backgroundColor: `rgba(${theme.colors.selection}, 0.1)`,
                      }}
                    >
                      <div style={{ display: "flex", marginRight: "10px" }}>
                        {checkIcon}
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          lineHeight: "1",
                          color: `rgba(${theme.colors.text}, 1)`,
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
                          color: `rgba(${theme.colors.text}, 0.6)`,
                        }}
                      >
                        Secondary Text
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </foreignObject>
          </svg>
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
