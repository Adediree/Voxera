export const AISummary = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: "6px",
        paddingBottom: "6px",
        paddingLeft: "14px",
        paddingRight: "20px",
        backgroundColor: "#F44A0E08",
        width: "fit-content",
        borderRadius: "32px",
        gap: "8px",
      }}
    >
      <img src="/VAI.svg" />
      <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "#4B5563" }}>
        AI Summary
      </p>
    </div>
  );
}