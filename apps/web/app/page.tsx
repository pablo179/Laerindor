"use client";
import { useEffect } from "react";
import { testingThis } from "@laerindor/sigils";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    testingThis({ title: "Laerindor App" });
  }, []);
  return (
    <div className={styles.page}>
      <h1>Laerindor App</h1>
    </div>
  );
}
