import styles from "./Display2.module.css";

type Props = {
  numeroSorteado: number[];
};
export const Display2 = ({ numeroSorteado }: Props) => {
  const exibiNumeros = [...numeroSorteado]
    .reverse()
    .map((numeros, key, numeroSorteado) => (
      <h1 key={key} className={styles.cardNumber}>
        {numeros}
      </h1>
    ));
  return (
    <div className={styles.main}>
      <div className={styles.display}>
        <h1>Números Sorteados</h1>
        <div className={styles.numero}>{exibiNumeros}</div>
      </div>
    </div>
  );
};
