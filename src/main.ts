import { reiniciarPuntuacion} from './modelo';

import { calcularYGuardarPuntuacion,  gestionarCurioso, getRandomNumber } from './motor';

import {
  muestraPuntuacion,
  muestraCarta,
  mePlanto,
  controlarGameOver,
  botonDameCarta,
  botonPlantarse,
  botonNuevaPartida,
  botonCurioso,
  ganarJuego,
  reiniciarCarta,
  reiniciarGameOver,
  hideNuevaPartidaButton,
  hideCuriosoButton
} from './ui';

document.addEventListener('DOMContentLoaded', muestraPuntuacion);


export const dameCarta = () => {
  const randomNumber = getRandomNumber()
  calcularYGuardarPuntuacion(randomNumber);

  muestraCarta(randomNumber);

  muestraPuntuacion();

  ganarJuego();

  controlarGameOver();
};

const reiniciarPartida = () => {
  reiniciarPuntuacion();
  reiniciarCarta();
  muestraPuntuacion();
  reiniciarGameOver();
  hideCuriosoButton();
  hideNuevaPartidaButton();
  botonDameCarta.disabled = false;
  botonPlantarse.disabled = false;
  botonCurioso.disabled = false;
}

botonDameCarta?.addEventListener('click', dameCarta);

botonPlantarse?.addEventListener('click', mePlanto);

botonNuevaPartida.addEventListener('click', reiniciarPartida);

botonCurioso?.addEventListener('click', gestionarCurioso);
