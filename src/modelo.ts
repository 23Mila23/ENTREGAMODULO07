export let puntuacion = 0;
export const puntuacionMaxima = 7.5;
export const setPuntuacion = (nuevaPuntuacion : number) =>
  (puntuacion += nuevaPuntuacion);
export const reiniciarPuntuacion = () =>
  (puntuacion = 0);
