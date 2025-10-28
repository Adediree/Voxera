"use client";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Feedback.module.css";

export default function Feedback() {
  const platforms = [
    {
      id: "gmb",
      name: "Google My Business",
      logo: "/google-my-business-logo-1 1.svg",
    },
    { id: "trustpilot", name: "Trustpilot", logo: "/trustpilot 1.svg" },
    { id: "facebook", name: "Facebook", logo: "/Facebook.svg" },
    { id: "yelp", name: "Yelp", logo: "/yelp-1 1.svg" },
  ];

  const router = useRouter();
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Customize your dashboard</h1>
        <p className={styles.subtitle}>
          Just a few details to tailor Voxera to your business.
        </p>
      </div>

      <div className={styles.platformList}>
        {platforms.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              router.push(RouteConstant.auth.completeFeedback.path);
              setActivePlatform(p.id);
            }}
            className={`${styles.platformButton} ${
              activePlatform === p.id ? styles.active : ""
            }`}
          >
            <img src={p.logo} alt={p.name} className={styles.platformLogo} />
            <p
              className={`${styles.platformName} ${
                activePlatform === p.id ? styles.activeText : ""
              }`}
            >
              {p.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
