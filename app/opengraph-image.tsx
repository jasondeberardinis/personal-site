import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jason DeBerardinis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #1e293b 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#22d3ee",
            }}
          />
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            jasondeberardinis.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "108px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Jason DeBerardinis
          </div>
          <div
            style={{
              fontSize: "34px",
              color: "#cbd5e1",
              lineHeight: 1.35,
              maxWidth: "950px",
            }}
          >
            Co-founder of GRRO and SHEATH. Growing tech companies at Riviera
            Partners.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
            fontSize: "22px",
            color: "#94a3b8",
          }}
        >
          <span>GRRO — Get recommended by AI</span>
          <span style={{ color: "#475569" }}>·</span>
          <span>SHEATH — Premium knife rolls for chefs</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
