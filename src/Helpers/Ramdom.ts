export const numeroAleatorio = (numMax: number, numMin: number) => {
  return Math.floor(numMin + Math.random() * (numMax - numMin));
};
