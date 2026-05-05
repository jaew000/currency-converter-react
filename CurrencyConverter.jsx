import { useState } from "react";

const EXCHANGE_RATE = 1300;

function CurrencyInput({ label, value, onChange, symbol, color }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}>
      <label style={{
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: color,
        fontFamily: "'DM Mono', monospace",
      }}>
        {label}
      </label>
      <div style={{
        display: "flex",
        alignItems: "center",
        background: "rgba(255,255,255,0.04)",
        border: `1.5px solid ${color}33`,
        borderRadius: "12px",
        padding: "0 18px",
        transition: "border-color 0.2s",
      }}
        onFocus={(e) => e.currentTarget.style.borderColor = color}
        onBlur={(e) => e.currentTarget.style.borderColor = `${color}33`}
      >
        <span style={{
          fontSize: "22px",
          color: color,
          fontFamily: "'DM Mono', monospace",
          marginRight: "10px",
          opacity: 0.7,
        }}>{symbol}</span>
        <input
          type="number"
          value={value}
          onChange={onChange}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#f0ede8",
            fontSize: "26px",
            fontFamily: "'DM Mono', monospace",
            fontWeight: "400",
            width: "100%",
            padding: "18px 0",
            letterSpacing: "0.02em",
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [krw, setKrw] = useState(1300);
  const [usd, setUsd] = useState(1);

  const handleKrwChange = (e) => {
    const val = e.target.value;
    setKrw(val);
    setUsd(val === "" ? "" : (parseFloat(val) / EXCHANGE_RATE).toFixed(2));
  };

  const handleUsdChange = (e) => {
    const val = e.target.value;
    setUsd(val);
    setKrw(val === "" ? "" : Math.round(parseFloat(val) * EXCHANGE_RATE));
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0e0c0a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Mono', monospace",
      padding: "24px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800&display=swap');
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
      `}</style>

      <div style={{
        width: "100%",
        maxWidth: "440px",
      }}>
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#c9a96e",
            textTransform: "uppercase",
            marginBottom: "10px",
            fontFamily: "'DM Mono', monospace",
          }}>
            실시간 환율 변환기
          </div>
          <h1 style={{
            fontSize: "42px",
            fontFamily: "'Syne', sans-serif",
            fontWeight: "800",
            color: "#f0ede8",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}>
            KRW<span style={{ color: "#c9a96e" }}>/</span>USD
          </h1>
        </div>

        {/* Card */}
        <div style={{
          background: "linear-gradient(145deg, #1a1714 0%, #141210 100%)",
          border: "1px solid #2a2520",
          borderRadius: "20px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}>
          <CurrencyInput
            label="Korean Won"
            value={krw}
            onChange={handleKrwChange}
            symbol="₩"
            color="#c9a96e"
          />

          {/* Divider with arrow */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <div style={{ flex: 1, height: "1px", background: "#2a2520" }} />
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1.5px solid #2a2520",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9a96e",
              fontSize: "16px",
            }}>⇅</div>
            <div style={{ flex: 1, height: "1px", background: "#2a2520" }} />
          </div>

          <CurrencyInput
            label="US Dollar"
            value={usd}
            onChange={handleUsdChange}
            symbol="$"
            color="#7eb8c9"
          />
        </div>

        {/* Rate info */}
        <div style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "12px",
          color: "#3d3830",
          fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.08em",
        }}>
          1 USD = {EXCHANGE_RATE.toLocaleString()} KRW
        </div>
      </div>
    </div>
  );
}
