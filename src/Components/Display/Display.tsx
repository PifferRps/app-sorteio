import styles from "./Display.module.css";

type Props = {
  numeroSorteado: number;
};
export const Display = ({ numeroSorteado }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.display}>
        <h1>Ultimo Número Sorteado</h1>
        <div className={styles.numero}>{numeroSorteado}</div>
      </div>
    </div>
  );
};
