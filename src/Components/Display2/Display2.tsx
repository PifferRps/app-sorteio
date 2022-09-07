import styles from "./Display2.module.css";

export const Display2 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.display}>
        <h1>Números Sorteado</h1>
        <div className={styles.numero}>0</div>
      </div>
    </div>
  );
};
