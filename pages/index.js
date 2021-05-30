import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { DEFAULT_MESSAGE, MESSAGES } from "./api/data";

export default function Home() {
  const [secret, setSecret] = useState("");

  const inputChange = (e) => {
    setSecret(e.target.value);
  };

  const formatedSecret = secret.toLowerCase().replace(" ", "").trim();

  console.log(formatedSecret);

  return (
    <div className={styles.container}>
      <h1>{formatedSecret in MESSAGES ? "Lo lograste!" : DEFAULT_MESSAGE}</h1>
      <input
        className={styles.input}
        type="text"
        placeholder="
      Coloca tu clave aqui"
        onChange={inputChange}
      />
      <p>{MESSAGES[formatedSecret] || MESSAGES["default"]}</p>
    </div>
  );
}
