import React, { useState, useRef, useEffect } from "react";
import styles from "./Keywords-topics-chart.module.css";

interface KeywordData {
  x: number;
  y: number;
  fontSize: number;
  fontWeight: number;
  color: string;
  keyword: string;
  index: number;
}

interface Position {
  x: number;
  y: number;
}

interface Bounds {
  width: number;
  height: number;
}

const KeywordsTopicsCloud: React.FC<{
  keywords?: string[];
  className?: string;
}> = ({
  keywords = [
    "Support",
    "Ambience",
    "Food Quality",
    // "Price",
    "Delivery Speed",
    "Customer Service",
  ],
  className = "",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [keywordPositions, setKeywordPositions] = useState<KeywordData[]>([]);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 400,
    height: 300,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Monitor container size changes
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: width || 400, height: height || 300 });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Generate non-overlapping positions
  const generateKeywordPositions = (
    keywords: string[],
    containerWidth: number,
    containerHeight: number
  ): KeywordData[] => {
    const positions: KeywordData[] = [];
    const minDimension = Math.min(containerWidth, containerHeight);

    const fontScale = Math.max(0.5, Math.min(1.5, minDimension / 400));

    const predefinedStyles = [
      {
        fontSize: Math.round(40 * fontScale),
        fontWeight: 600,
        x: 45,
        y: 10,
        color: "#4B5563",
      },
      {
        fontSize: Math.round(32 * fontScale),
        fontWeight: 600,
        x: 15,
        y: 35,
        color: "#4B5563",
      },
      {
        fontSize: Math.round(48 * fontScale),
        fontWeight: 600,
        x: 50,
        y: 55,
        color: "#F44A0E",
      },
      {
        fontSize: Math.round(35 * fontScale),
        fontWeight: 600,
        x: 85,
        y: 35,
        color: "#4B5563",
      },
      {
        fontSize: Math.round(29 * fontScale),
        fontWeight: 600,
        x: 25,
        y: 80,
        color: "#4B5563",
      },
      {
        fontSize: Math.round(38 * fontScale),
        fontWeight: 600,
        x: 75,
        y: 80,
        color: "#4B5563",
      },
    ];

    const getTextBounds = (text: string, fontSize: number): Bounds => {
      const avgCharWidth = fontSize * 0.55;
      const width = text.length * avgCharWidth + fontSize * 0.2;
      const height = fontSize * 1.3;
      return { width, height };
    };

    const isOverlapping = (
      pos1: Position,
      bounds1: Bounds,
      pos2: KeywordData,
      bounds2: Bounds
    ): boolean => {
      const x1 = (pos1.x / 100) * containerWidth;
      const y1 = (pos1.y / 100) * containerHeight;
      const x2 = (pos2.x / 100) * containerWidth;
      const y2 = (pos2.y / 100) * containerHeight;

      const padding = 20;
      const left1 = x1 - bounds1.width / 2 - padding;
      const right1 = x1 + bounds1.width / 2 + padding;
      const top1 = y1 - bounds1.height / 2 - padding;
      const bottom1 = y1 + bounds1.height / 2 + padding;

      const left2 = x2 - bounds2.width / 2 - padding;
      const right2 = x2 + bounds2.width / 2 + padding;
      const top2 = y2 - bounds2.height / 2 - padding;
      const bottom2 = y2 + bounds2.height / 2 + padding;

      return !(
        left1 > right2 ||
        right1 < left2 ||
        top1 > bottom2 ||
        bottom1 < top2
      );
    };

    // Place keywords
    keywords.forEach((keyword, index) => {
      let position: Position;
      let fontSize: number;
      let fontWeight: number;
      let color: string;

      if (index < predefinedStyles.length) {
        const predefined = predefinedStyles[index];
        position = { x: predefined.x, y: predefined.y };
        fontSize = predefined.fontSize;
        fontWeight = predefined.fontWeight;
        color = predefined.color;
      } else {
        fontSize = Math.round(26 * fontScale);
        fontWeight = 400;
        color = "#374151";
        position = { x: 50, y: 50 };
      }

      positions.push({
        ...position,
        fontSize,
        fontWeight,
        color,
        keyword,
        index,
      });
    });

    return positions;
  };

  useEffect(() => {
    if (containerDimensions.width > 0 && containerDimensions.height > 0) {
      setKeywordPositions(
        generateKeywordPositions(
          keywords,
          containerDimensions.width,
          containerDimensions.height
        )
      );
    }
  }, [keywords, containerDimensions]);

  const getHoverTransform = (index: number): string => {
    if (hoveredIndex === null) return "translate(-50%, -50%) scale(1)";
    if (index === hoveredIndex) return "translate(-50%, -50%) scale(1.15)";
    return "translate(-50%, -50%) scale(0.95)";
  };

  return (
    <div className={`${styles.container} ${className}`} ref={containerRef}>
      {keywordPositions.map((keywordData) => {
        const isHovered = hoveredIndex === keywordData.index;

        return (
          <div
            key={`${keywordData.keyword}-${keywordData.index}`}
            className={`${styles.keyword} ${isHovered ? styles.hovered : ""}`}
            style={{
              fontSize: `${keywordData.fontSize}px`,
              fontWeight: keywordData.fontWeight,
              color: keywordData.color,
              top: `${keywordData.y}%`,
              left: `${keywordData.x}%`,
              transform: getHoverTransform(keywordData.index),
            }}
            onMouseEnter={() => setHoveredIndex(keywordData.index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className={styles.keywordText}>{keywordData.keyword}</span>
          </div>
        );
      })}
    </div>
  );
};

export default KeywordsTopicsCloud;
