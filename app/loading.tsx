import React from "react";

export default function Loading(): JSX.Element {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: "100vh",
        display: "flex",
        gap: 12,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        padding: 24,
      }}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 50 50"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(25,25)">
          <circle
            cx="0"
            cy="0"
            r="20"
            stroke="#e6e7eb"
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M20 0 A20 20 0 0 1 6.18 18.18"
            stroke="#2563eb"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>

      <div style={{ textAlign: "center", color: "#374151" }}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>Loading…</div>
        <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6 }}>
          Please wait.
        </div>
      </div>
    </div>
  );
}