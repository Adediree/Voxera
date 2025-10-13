// import React, {
//   useState,
//   useRef,
//   useEffect,
//   useCallback,
//   useMemo,
// } from "react";
// import styles from "./KeywordsCloud.module.css";

// interface KeywordData {
//   x: number;
//   y: number;
//   fontSize: number;
//   fontWeight: number;
//   color: string;
//   keyword: string;
//   index: number;
// }

// interface Position {
//   x: number;
//   y: number;
// }

// interface Bounds {
//   width: number;
//   height: number;
// }

// const DynamicKeywordsCloud: React.FC<{
//   keywords?: string[];
//   className?: string;
// }> = ({
//   keywords = [
//     "Support",
//     "Delivery",
//     "Quality",
//     "Price",
//     "Service",
//     "Attendance",
//   ],
//   className = "",
// }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [keywordPositions, setKeywordPositions] = useState<KeywordData[]>([]);
//   const [containerDimensions, setContainerDimensions] = useState({
//     width: 400,
//     height: 300,
//   });

//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const resizeObserverRef = useRef<ResizeObserver | null>(null);
//   const lastKeywordsRef = useRef<string>("");
//   const isGeneratingRef = useRef(false);

//   // Memoize keywords to prevent unnecessary changes
//   const stableKeywords = useMemo(() => {
//     const keywordString = JSON.stringify(keywords);
//     // Only return new array if keywords actually changed
//     if (keywordString !== lastKeywordsRef.current) {
//       lastKeywordsRef.current = keywordString;
//       return [...keywords];
//     }
//     return keywords;
//   }, [keywords]);

//   // Stabilized update function
//   const updateDimensions = useCallback(() => {
//     if (containerRef.current && !isGeneratingRef.current) {
//       const { width, height } = containerRef.current.getBoundingClientRect();
//       const newWidth = Math.round(width || 400);
//       const newHeight = Math.round(height || 300);

//       setContainerDimensions((prev) => {
//         const widthDiff = Math.abs(prev.width - newWidth);
//         const heightDiff = Math.abs(prev.height - newHeight);

//         // Only update if significant change
//         if (widthDiff > 10 || heightDiff > 10) {
//           return { width: newWidth, height: newHeight };
//         }
//         return prev;
//       });
//     }
//   }, []);

//   // Setup resize observer only once
//   useEffect(() => {
//     updateDimensions();

//     if (typeof ResizeObserver !== "undefined") {
//       resizeObserverRef.current = new ResizeObserver(() => {
//         // Debounce the update
//         setTimeout(updateDimensions, 100);
//       });

//       if (containerRef.current) {
//         resizeObserverRef.current.observe(containerRef.current);
//       }
//     }

//     const handleResize = () => {
//       setTimeout(updateDimensions, 100);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       if (resizeObserverRef.current) {
//         resizeObserverRef.current.disconnect();
//       }
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []); // No dependencies - only run once

//   // Generate positions function
//   const generatePositions = useCallback(
//     (
//       keywordsList: string[],
//       containerWidth: number,
//       containerHeight: number
//     ): KeywordData[] => {
//       if (isGeneratingRef.current) return [];
//       isGeneratingRef.current = true;

//       try {
//         const positions: KeywordData[] = [];
//         const minDimension = Math.min(containerWidth, containerHeight);
//         const fontScale = Math.max(0.5, Math.min(1.5, minDimension / 400));

//         // Predefined positions for first 6 keywords
//         const predefinedStyles = [
//           {
//             fontSize: Math.round(40 * fontScale),
//             fontWeight: 300,
//             x: 45,
//             y: 10,
//             color: "#6B7280",
//           },
//           {
//             fontSize: Math.round(32 * fontScale),
//             fontWeight: 400,
//             x: 15,
//             y: 35,
//             color: "#4B5563",
//           },
//           {
//             fontSize: Math.round(48 * fontScale),
//             fontWeight: 600,
//             x: 50,
//             y: 55,
//             color: "#374151",
//           },
//           {
//             fontSize: Math.round(35 * fontScale),
//             fontWeight: 300,
//             x: 85,
//             y: 35,
//             color: "#6B7280",
//           },
//           {
//             fontSize: Math.round(29 * fontScale),
//             fontWeight: 500,
//             x: 25,
//             y: 80,
//             color: "#4B5563",
//           },
//           {
//             fontSize: Math.round(38 * fontScale),
//             fontWeight: 400,
//             x: 75,
//             y: 80,
//             color: "#374151",
//           },
//         ];

//         const getTextBounds = (text: string, fontSize: number): Bounds => {
//           const avgCharWidth = fontSize * 0.55;
//           const width = text.length * avgCharWidth + fontSize * 0.3;
//           const height = fontSize * 1.4;
//           return { width, height };
//         };

//         const isOverlapping = (
//           pos1: Position,
//           bounds1: Bounds,
//           pos2: KeywordData,
//           bounds2: Bounds
//         ): boolean => {
//           const x1 = (pos1.x / 100) * containerWidth;
//           const y1 = (pos1.y / 100) * containerHeight;
//           const x2 = (pos2.x / 100) * containerWidth;
//           const y2 = (pos2.y / 100) * containerHeight;

//           const padding = Math.max(20, minDimension * 0.06);
//           const left1 = x1 - bounds1.width / 2 - padding;
//           const right1 = x1 + bounds1.width / 2 + padding;
//           const top1 = y1 - bounds1.height / 2 - padding;
//           const bottom1 = y1 + bounds1.height / 2 + padding;

//           const left2 = x2 - bounds2.width / 2 - padding;
//           const right2 = x2 + bounds2.width / 2 + padding;
//           const top2 = y2 - bounds2.height / 2 - padding;
//           const bottom2 = y2 + bounds2.height / 2 + padding;

//           return !(
//             left1 > right2 ||
//             right1 < left2 ||
//             top1 > bottom2 ||
//             bottom1 < top2
//           );
//         };

//         // Smart grid generation for extra keywords
//         const generateSmartPosition = (
//           index: number,
//           totalExtra: number
//         ): Position => {
//           const extraIndex = index - predefinedStyles.length;
//           const aspectRatio = containerWidth / containerHeight;

//           // Calculate grid dimensions based on aspect ratio
//           let cols, rows;
//           if (aspectRatio > 1.5) {
//             cols = Math.ceil(Math.sqrt(totalExtra * 1.5));
//             rows = Math.ceil(totalExtra / cols);
//           } else if (aspectRatio < 0.7) {
//             rows = Math.ceil(Math.sqrt(totalExtra * 1.5));
//             cols = Math.ceil(totalExtra / rows);
//           } else {
//             cols = Math.ceil(Math.sqrt(totalExtra * 1.2));
//             rows = Math.ceil(totalExtra / cols);
//           }

//           const col = extraIndex % cols;
//           const row = Math.floor(extraIndex / cols);

//           // Define safe zones (avoiding predefined positions)
//           const safeZones = [
//             { x: [20, 40], y: [15, 35] }, // Left zone
//             { x: [60, 80], y: [15, 35] }, // Right zone
//             { x: [35, 65], y: [70, 90] }, // Bottom center
//             { x: [15, 35], y: [50, 70] }, // Left middle
//             { x: [65, 85], y: [50, 70] }, // Right middle
//           ];

//           const zone = safeZones[extraIndex % safeZones.length];
//           const zoneWidth = zone.x[1] - zone.x[0];
//           const zoneHeight = zone.y[1] - zone.y[0];

//           const localCol = col % Math.ceil(Math.sqrt(safeZones.length));
//           const localRow = Math.floor(
//             col / Math.ceil(Math.sqrt(safeZones.length))
//           );

//           const x =
//             zone.x[0] +
//             (localCol /
//               Math.max(1, Math.ceil(Math.sqrt(safeZones.length)) - 1)) *
//               zoneWidth;
//           const y =
//             zone.y[0] +
//             (localRow /
//               Math.max(
//                 1,
//                 Math.ceil(
//                   safeZones.length / Math.ceil(Math.sqrt(safeZones.length))
//                 ) - 1
//               )) *
//               zoneHeight;

//           // Add slight randomness
//           const randomX = (Math.random() - 0.5) * 8;
//           const randomY = (Math.random() - 0.5) * 8;

//           return {
//             x: Math.max(10, Math.min(90, x + randomX)),
//             y: Math.max(10, Math.min(90, y + randomY)),
//           };
//         };

//         // Find valid position with multiple strategies
//         const findValidPosition = (
//           keyword: string,
//           fontSize: number,
//           existingPositions: KeywordData[],
//           index: number
//         ): Position => {
//           const bounds = getTextBounds(keyword, fontSize);
//           const totalExtra = keywordsList.length - predefinedStyles.length;

//           // Strategy 1: Smart positioning
//           let position = generateSmartPosition(index, totalExtra);
//           let overlaps = existingPositions.some((pos) => {
//             const posBounds = getTextBounds(pos.keyword, pos.fontSize);
//             return isOverlapping(position, bounds, pos, posBounds);
//           });

//           if (!overlaps) return position;

//           // Strategy 2: Spiral with multiple attempts
//           for (let attempt = 0; attempt < 80; attempt++) {
//             const angle = attempt * 23 + index * 47; // Varied angles
//             const radius = 12 + attempt * 1.8;

//             let x = 50 + radius * Math.cos((angle * Math.PI) / 180);
//             let y = 50 + radius * Math.sin((angle * Math.PI) / 180);

//             x = Math.max(12, Math.min(88, x));
//             y = Math.max(12, Math.min(88, y));

//             position = { x, y };
//             overlaps = existingPositions.some((pos) => {
//               const posBounds = getTextBounds(pos.keyword, pos.fontSize);
//               return isOverlapping(position, bounds, pos, posBounds);
//             });

//             if (!overlaps) return position;
//           }

//           // Strategy 3: Force placement in corners/edges
//           const fallbackPositions = [
//             { x: 15, y: 15 },
//             { x: 85, y: 15 },
//             { x: 15, y: 85 },
//             { x: 85, y: 85 },
//             { x: 50, y: 15 },
//             { x: 50, y: 85 },
//             { x: 15, y: 50 },
//             { x: 85, y: 50 },
//             { x: 30, y: 30 },
//             { x: 70, y: 30 },
//             { x: 30, y: 70 },
//             { x: 70, y: 70 },
//           ];

//           for (const fallback of fallbackPositions) {
//             overlaps = existingPositions.some((pos) => {
//               const posBounds = getTextBounds(pos.keyword, pos.fontSize);
//               return isOverlapping(fallback, bounds, pos, posBounds);
//             });

//             if (!overlaps) return fallback;
//           }

//           // Final fallback
//           const extraIndex = index - predefinedStyles.length;
//           return {
//             x: 20 + (extraIndex % 4) * 20,
//             y: 20 + Math.floor(extraIndex / 4) * 20,
//           };
//         };

//         // Generate all positions
//         keywordsList.forEach((keyword, index) => {
//           let position: Position;
//           let fontSize: number;
//           let fontWeight: number;
//           let color: string;

//           if (index < predefinedStyles.length) {
//             const predefined = predefinedStyles[index];
//             position = { x: predefined.x, y: predefined.y };
//             fontSize = predefined.fontSize;
//             fontWeight = predefined.fontWeight;
//             color = predefined.color;
//           } else {
//             const baseSizes = [26, 29, 32, 35, 38];
//             const scaledSizes = baseSizes.map((size) =>
//               Math.round(size * fontScale)
//             );
//             const weightVariations = [300, 400, 500, 600];
//             const colorVariations = ["#6B7280", "#4B5563", "#374151"];

//             fontSize = scaledSizes[index % scaledSizes.length];
//             fontWeight = weightVariations[index % weightVariations.length];
//             color = colorVariations[index % colorVariations.length];

//             position = findValidPosition(keyword, fontSize, positions, index);
//           }

//           positions.push({
//             ...position,
//             fontSize,
//             fontWeight,
//             color,
//             keyword,
//             index,
//           });
//         });

//         return positions;
//       } finally {
//         isGeneratingRef.current = false;
//       }
//     },
//     []
//   );

//   // Separate effect for keywords change
//   useEffect(() => {
//     const keywordString = JSON.stringify(stableKeywords);
//     if (containerDimensions.width > 0 && containerDimensions.height > 0) {
//       const positions = generatePositions(
//         stableKeywords,
//         containerDimensions.width,
//         containerDimensions.height
//       );
//       setKeywordPositions(positions);
//     }
//   }, [stableKeywords, generatePositions]); // Use stable keywords

//   // Separate effect for dimension changes
//   useEffect(() => {
//     if (
//       containerDimensions.width > 0 &&
//       containerDimensions.height > 0 &&
//       stableKeywords.length > 0
//     ) {
//       const positions = generatePositions(
//         stableKeywords,
//         containerDimensions.width,
//         containerDimensions.height
//       );
//       setKeywordPositions(positions);
//     }
//   }, [containerDimensions, generatePositions, stableKeywords]);

//   const getHoverTransform = (index: number): string => {
//     if (hoveredIndex === null) return "translate(-50%, -50%) scale(1)";
//     if (index === hoveredIndex) return "translate(-50%, -50%) scale(1.15)";

//     const distance = Math.abs(index - hoveredIndex);
//     const direction = index < hoveredIndex ? -1 : 1;
//     const moveAmount = Math.max(0, (3 - distance) * 3 * direction);
//     return `translate(calc(-50% + ${moveAmount}px), -50%) scale(0.95)`;
//   };

//   return (
//     <div className={`${styles.container} ${className}`} ref={containerRef}>
//       {keywordPositions.map((keywordData) => {
//         const isHovered = hoveredIndex === keywordData.index;

//         return (
//           <div
//             key={`${keywordData.keyword}-${keywordData.index}`}
//             className={`${styles.keyword} ${isHovered ? styles.hovered : ""}`}
//             style={{
//               fontSize: `${keywordData.fontSize}px`,
//               fontWeight: keywordData.fontWeight,
//               color: keywordData.color,
//               top: `${keywordData.y}%`,
//               left: `${keywordData.x}%`,
//               transform: getHoverTransform(keywordData.index),
//               filter:
//                 hoveredIndex !== null && hoveredIndex !== keywordData.index
//                   ? "blur(1px) opacity(0.7)"
//                   : "none",
//             }}
//             onMouseEnter={() => setHoveredIndex(keywordData.index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <span className={styles.keywordText}>{keywordData.keyword}</span>

//             {isHovered && (
//               <div
//                 className={styles.glow}
//                 style={{
//                   background: `radial-gradient(circle, ${keywordData.color}40 0%, transparent 70%)`,
//                 }}
//               />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default DynamicKeywordsCloud;

// import React, { useState, useRef, useEffect } from "react";
// import styles from "./KeywordsCloud.module.css";

// interface KeywordData {
//   x: number;
//   y: number;
//   fontSize: number;
//   fontWeight: number;
//   color: string;
//   keyword: string;
//   index: number;
// }

// interface Position {
//   x: number;
//   y: number;
// }

// interface Bounds {
//   width: number;
//   height: number;
// }

// const DynamicKeywordsCloud: React.FC<{
//   keywords?: string[];
//   className?: string;
// }> = ({
//   // keywords: x = [
//   //   "Support",
//   //   "Delivery",
//   //   "Quality",
//   //   "Price",
//   //   "Service",
//   //   "Attendance",
//   // ],
//   className = "",
// }) => {
//   const [keywords] = useState([
//     "Support",
//     "Delivery",
//     "Quality",
//     "Price",
//     "Service",
//     "Attendance",
//   ]);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [keywordPositions, setKeywordPositions] = useState<KeywordData[]>([]);
//   const [containerDimensions, setContainerDimensions] = useState({
//     width: 400,
//     height: 300,
//   });
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   // Monitor container size changes
//   useEffect(() => {
//     const updateDimensions = () => {
//       if (containerRef.current) {
//         const { width, height } = containerRef.current.getBoundingClientRect();
//         setContainerDimensions({ width: width || 400, height: height || 300 });
//       }
//     };

//     updateDimensions();

//     const resizeObserver = new ResizeObserver(updateDimensions);
//     if (containerRef.current) {
//       resizeObserver.observe(containerRef.current);
//     }

//     window.addEventListener("resize", updateDimensions);

//     return () => {
//       resizeObserver.disconnect();
//       window.removeEventListener("resize", updateDimensions);
//     };
//   }, []);

//   // Generate non-overlapping positions
//   const generateKeywordPositions = (
//     keywords: string[],
//     containerWidth: number,
//     containerHeight: number
//   ): KeywordData[] => {
//     const positions: KeywordData[] = [];
//     const minDimension = Math.min(containerWidth, containerHeight);

//     const fontScale = Math.max(0.5, Math.min(1.5, minDimension / 400));

//     const predefinedStyles = [
//       {
//         fontSize: Math.round(40 * fontScale),
//         fontWeight: 300,
//         x: 45,
//         y: 10,
//         color: "#6B7280",
//       },
//       {
//         fontSize: Math.round(32 * fontScale),
//         fontWeight: 400,
//         x: 15,
//         y: 35,
//         color: "#4B5563",
//       },
//       {
//         fontSize: Math.round(48 * fontScale),
//         fontWeight: 600,
//         x: 50,
//         y: 55,
//         color: "#374151",
//       },
//       {
//         fontSize: Math.round(35 * fontScale),
//         fontWeight: 300,
//         x: 85,
//         y: 35,
//         color: "#6B7280",
//       },
//       {
//         fontSize: Math.round(29 * fontScale),
//         fontWeight: 500,
//         x: 25,
//         y: 80,
//         color: "#4B5563",
//       },
//       {
//         fontSize: Math.round(38 * fontScale),
//         fontWeight: 400,
//         x: 75,
//         y: 80,
//         color: "#374151",
//       },
//     ];

//     const getTextBounds = (text: string, fontSize: number): Bounds => {
//       const avgCharWidth = fontSize * 0.55;
//       const width = text.length * avgCharWidth + fontSize * 0.2;
//       const height = fontSize * 1.3;
//       return { width, height };
//     };

//     const isOverlapping = (
//       pos1: Position,
//       bounds1: Bounds,
//       pos2: KeywordData,
//       bounds2: Bounds
//     ): boolean => {
//       const x1 = (pos1.x / 100) * containerWidth;
//       const y1 = (pos1.y / 100) * containerHeight;
//       const x2 = (pos2.x / 100) * containerWidth;
//       const y2 = (pos2.y / 100) * containerHeight;

//       const padding = 20;
//       const left1 = x1 - bounds1.width / 2 - padding;
//       const right1 = x1 + bounds1.width / 2 + padding;
//       const top1 = y1 - bounds1.height / 2 - padding;
//       const bottom1 = y1 + bounds1.height / 2 + padding;

//       const left2 = x2 - bounds2.width / 2 - padding;
//       const right2 = x2 + bounds2.width / 2 + padding;
//       const top2 = y2 - bounds2.height / 2 - padding;
//       const bottom2 = y2 + bounds2.height / 2 + padding;

//       return !(
//         left1 > right2 ||
//         right1 < left2 ||
//         top1 > bottom2 ||
//         bottom1 < top2
//       );
//     };

//     // Place keywords:x
//     keywords.forEach((keyword, index) => {
//       let position: Position;
//       let fontSize: number;
//       let fontWeight: number;
//       let color: string;

//       if (index < predefinedStyles.length) {
//         const predefined = predefinedStyles[index];
//         position = { x: predefined.x, y: predefined.y };
//         fontSize = predefined.fontSize;
//         fontWeight = predefined.fontWeight;
//         color = predefined.color;
//       } else {
//         fontSize = Math.round(26 * fontScale);
//         fontWeight = 400;
//         color = "#374151";
//         position = { x: 50, y: 50 };
//       }

//       positions.push({
//         ...position,
//         fontSize,
//         fontWeight,
//         color,
//         keyword,
//         index,
//       });
//     });

//     return positions;
//   };
//   useEffect(() => {
//     if (containerDimensions.width > 0 && containerDimensions.height > 0) {
//       const newPositions = generateKeywordPositions(
//         keywords,
//         containerDimensions.width,
//         containerDimensions.height
//       );

//       // Only update if positions really changed
//       // if (JSON.stringify(newPositions) !== JSON.stringify(keywordPositions)) {
//       setKeywordPositions(newPositions);
//       // }
//     }
//   }, [keywords, containerDimensions]);

//   // useEffect(() => {
//   //   if (containerDimensions.width > 0 && containerDimensions.height > 0) {
//   //     setKeywordPositions(
//   //       generateKeywordPositions(
//   //         keywords,
//   //         containerDimensions.width,
//   //         containerDimensions.height
//   //       )
//   //     );
//   //   }
//   // }, [containerDimensions]);
//   // }, [keywords, containerDimensions]);

//   const getHoverTransform = (index: number): string => {
//     if (hoveredIndex === null) return "translate(-50%, -50%) scale(1)";
//     if (index === hoveredIndex) return "translate(-50%, -50%) scale(1.15)";
//     return "translate(-50%, -50%) scale(0.95)";
//   };

//   return (
//     <div className={`${styles.container} ${className}`} ref={containerRef}>
//       {/* <p>Top Keywords</p> */}
//       <div>
//         {keywordPositions.map((keywordData) => {
//           const isHovered = hoveredIndex === keywordData.index;

//           return (
//             <div
//               key={`${keywordData.keyword}-${keywordData.index}`}
//               className={`${styles.keyword} ${isHovered ? styles.hovered : ""}`}
//               style={{
//                 fontSize: `${keywordData.fontSize}px`,
//                 fontWeight: keywordData.fontWeight,
//                 color: keywordData.color,
//                 top: `${keywordData.y}%`,
//                 left: `${keywordData.x}%`,
//                 transform: getHoverTransform(keywordData.index),
//               }}
//               onMouseEnter={() => setHoveredIndex(keywordData.index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <span className={styles.keywordText}>{keywordData.keyword}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default DynamicKeywordsCloud;

import React, { useState, useRef, useEffect } from "react";
import styles from "./KeywordsCloud.module.css";

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

const DynamicKeywordsCloud: React.FC<{
  keywords?: string[];
  className?: string;
}> = ({
  keywords = [
    "Support",
    "Delivery",
    "Quality",
    "Price",
    "Service",
    "Attendance",
  ],
  className = "",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [keywordPositions, setKeywordPositions] = useState<KeywordData[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const keywordsStringRef = useRef<string>("");
  const dimensionsRef = useRef({ width: 0, height: 0 });

  // Single effect that handles everything
  useEffect(() => {
    const generateAndSetPositions = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerWidth = rect.width || 400;
      const containerHeight = rect.height || 300;

      // Check if we need to regenerate
      const currentKeywordsString = JSON.stringify(keywords);
      const dimensionsChanged =
        Math.abs(dimensionsRef.current.width - containerWidth) > 10 ||
        Math.abs(dimensionsRef.current.height - containerHeight) > 10;
      const keywordsChanged =
        keywordsStringRef.current !== currentKeywordsString;

      if (
        !dimensionsChanged &&
        !keywordsChanged &&
        keywordPositions.length > 0
      ) {
        return; // No need to regenerate
      }

      // Update refs
      keywordsStringRef.current = currentKeywordsString;
      dimensionsRef.current = {
        width: containerWidth,
        height: containerHeight,
      };

      // Generate positions
      const positions: KeywordData[] = [];
      const minDimension = Math.min(containerWidth, containerHeight);
      const fontScale = Math.max(0.5, Math.min(1.5, minDimension / 400));

      // Predefined positions for first 6 keywords
      const predefinedStyles = [
        {
          fontSize: Math.round(40 * fontScale),
          fontWeight: 300,
          x: 45,
          y: 10,
          color: "#6B7280",
        },
        {
          fontSize: Math.round(32 * fontScale),
          fontWeight: 400,
          x: 15,
          y: 35,
          color: "#4B5563",
        },
        {
          fontSize: Math.round(48 * fontScale),
          fontWeight: 600,
          x: 50,
          y: 55,
          color: "#374151",
        },
        {
          fontSize: Math.round(35 * fontScale),
          fontWeight: 300,
          x: 85,
          y: 35,
          color: "#6B7280",
        },
        {
          fontSize: Math.round(29 * fontScale),
          fontWeight: 500,
          x: 25,
          y: 80,
          color: "#4B5563",
        },
        {
          fontSize: Math.round(38 * fontScale),
          fontWeight: 400,
          x: 75,
          y: 80,
          color: "#374151",
        },
      ];

      const getTextBounds = (text: string, fontSize: number): Bounds => {
        const avgCharWidth = fontSize * 0.55;
        const width = text.length * avgCharWidth + fontSize * 0.3;
        const height = fontSize * 1.4;
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

        const padding = Math.max(20, minDimension * 0.06);
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

      // Find valid position for extra keywords
      const findValidPosition = (
        keyword: string,
        fontSize: number,
        existingPositions: KeywordData[],
        index: number
      ): Position => {
        const bounds = getTextBounds(keyword, fontSize);

        // Strategy 1: Try predefined safe positions first
        const safePositions = [
          { x: 20, y: 60 },
          { x: 80, y: 60 },
          { x: 35, y: 25 },
          { x: 65, y: 25 },
          { x: 15, y: 15 },
          { x: 85, y: 15 },
          { x: 15, y: 85 },
          { x: 85, y: 85 },
          { x: 50, y: 25 },
          { x: 25, y: 50 },
          { x: 75, y: 50 },
          { x: 50, y: 75 },
          { x: 30, y: 30 },
          { x: 70, y: 30 },
          { x: 30, y: 70 },
          { x: 70, y: 70 },
        ];

        for (const pos of safePositions) {
          const overlaps = existingPositions.some((existing) => {
            const existingBounds = getTextBounds(
              existing.keyword,
              existing.fontSize
            );
            return isOverlapping(pos, bounds, existing, existingBounds);
          });

          if (!overlaps) return pos;
        }

        // Strategy 2: Spiral pattern
        for (let attempt = 0; attempt < 60; attempt++) {
          const angle = attempt * 25 + index * 45;
          const radius = 15 + attempt * 2;

          let x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          let y = 50 + radius * Math.sin((angle * Math.PI) / 180);

          x = Math.max(12, Math.min(88, x));
          y = Math.max(12, Math.min(88, y));

          const newPos = { x, y };
          const overlaps = existingPositions.some((existing) => {
            const existingBounds = getTextBounds(
              existing.keyword,
              existing.fontSize
            );
            return isOverlapping(newPos, bounds, existing, existingBounds);
          });

          if (!overlaps) return newPos;
        }

        // Strategy 3: Grid fallback
        const extraIndex = index - predefinedStyles.length;
        const gridCols = Math.ceil(
          Math.sqrt(keywords.length - predefinedStyles.length)
        );
        const col = extraIndex % gridCols;
        const row = Math.floor(extraIndex / gridCols);

        return {
          x: 15 + (col / Math.max(1, gridCols - 1)) * 70,
          y:
            15 +
            (row /
              Math.max(
                1,
                Math.ceil(
                  (keywords.length - predefinedStyles.length) / gridCols
                ) - 1
              )) *
              70,
        };
      };

      // Generate all positions
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
          const baseSizes = [26, 29, 32, 35, 38];
          const scaledSizes = baseSizes.map((size) =>
            Math.round(size * fontScale)
          );
          const weightVariations = [300, 400, 500, 600];
          const colorVariations = ["#6B7280", "#4B5563", "#374151"];

          fontSize = scaledSizes[index % scaledSizes.length];
          fontWeight = weightVariations[index % weightVariations.length];
          color = colorVariations[index % colorVariations.length];

          position = findValidPosition(keyword, fontSize, positions, index);
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

      setKeywordPositions(positions);
    };

    // Initial generation
    generateAndSetPositions();

    // Set up resize observer
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        // Debounce the resize
        setTimeout(generateAndSetPositions, 150);
      });
      resizeObserver.observe(containerRef.current);
    }

    // Fallback resize listener
    const handleResize = () => {
      setTimeout(generateAndSetPositions, 150);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []); // NO DEPENDENCIES - this is the key!

  // Separate effect only for keywords change (external trigger)
  useEffect(() => {
    const currentKeywordsString = JSON.stringify(keywords);
    if (
      keywordsStringRef.current !== currentKeywordsString &&
      containerRef.current
    ) {
      keywordsStringRef.current = currentKeywordsString;

      // Trigger regeneration after a short delay to ensure container is ready
      setTimeout(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            // Force regeneration by clearing the positions first
            setKeywordPositions([]);
            setTimeout(() => {
              // Trigger the main effect's generation function
              const event = new Event("resize");
              window.dispatchEvent(event);
            }, 50);
          }
        }
      }, 100);
    }
  }, [keywords]);

  const getHoverTransform = (index: number): string => {
    if (hoveredIndex === null) return "translate(-50%, -50%) scale(1)";
    if (index === hoveredIndex) return "translate(-50%, -50%) scale(1.15)";

    const distance = Math.abs(index - hoveredIndex);
    const direction = index < hoveredIndex ? -1 : 1;
    const moveAmount = Math.max(0, (3 - distance) * 3 * direction);
    return `translate(calc(-50% + ${moveAmount}px), -50%) scale(0.95)`;
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
              filter:
                hoveredIndex !== null && hoveredIndex !== keywordData.index
                  ? "blur(1px) opacity(0.7)"
                  : "none",
            }}
            onMouseEnter={() => setHoveredIndex(keywordData.index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className={styles.keywordText}>{keywordData.keyword}</span>

            {isHovered && (
              <div
                className={styles.glow}
                style={{
                  background: `radial-gradient(circle, ${keywordData.color}40 0%, transparent 70%)`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DynamicKeywordsCloud;
