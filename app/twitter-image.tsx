import { ImageResponse } from "next/og";

export const alt = "Makai O'Neill, designer and developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f3f5f6",
          color: "#111820",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "68px 74px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 999,
            right: -145,
            top: -220,
            background: "rgba(22, 137, 141, 0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 330,
            height: 330,
            borderRadius: 999,
            right: 70,
            top: -150,
            background: "rgba(56, 132, 255, 0.08)",
          }}
        />

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffffff",
                border: "1px solid rgba(17,24,32,.12)",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              MO
            </div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>Makai O&apos;Neill</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                color: "#16898d",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Designer + Developer
            </div>
            <div
              style={{
                maxWidth: 930,
                fontSize: 76,
                lineHeight: 0.98,
                letterSpacing: -4.6,
                fontWeight: 700,
              }}
            >
              I build thoughtful digital products.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              color: "#596671",
            }}
          >
            <div>Apps · Websites · Tools</div>
            <div>makai.codearc.studio</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
