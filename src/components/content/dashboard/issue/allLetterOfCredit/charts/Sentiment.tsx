const Sentiment: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "228px",
          height: "104px",
          paddingLeft: "23px",
          paddingTop: "10px",
          // border: "1px solid",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <h3
          className="sentiment-volume-title"
          style={{
            margin: 0,
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#4B5563",
          }}
        >
          72
        </h3>
        <p
          style={{
            maxWidth: "111px",
            fontSize: "0.8125rem",
            fontWeight: "399",
            color: "#4b5563",
          }}
        >
          Overall Sentiments
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "222px",
          height: "104px",
          paddingLeft: "23px",
          paddingTop: "10px",
          // border: "1px solid",
          backgroundColor: "white",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <h3 className="sentiment-volume-title" style={{ color: "#4B5563" }}>
          Google
        </h3>
      </div>
    </div>
  );
};

export default Sentiment;
