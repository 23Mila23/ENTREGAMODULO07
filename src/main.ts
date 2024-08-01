import { reiniciarPuntuacion} from './modelo';

import { calcularYGuardarPuntuacion,  gestionarCurioso, getRandomNumber, checkIfPlayerWins, checkIfPlayerLoses } from './motor';

import {
  muestraPuntuacion,
  muestraCarta,
  mePlanto,
  showGameOver,
  botonDameCarta,
  botonPlantarse,
  botonNuevaPartida,
  botonCurioso,
  showGanarJuego,
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

  if(checkIfPlayerWins()){
    showGanarJuego();
  }

  if(checkIfPlayerLoses()){
    showGameOver();
  }
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

botonNuevaPartida?.addEventListener('click', reiniciarPartida);

botonCurioso?.addEventListener('click', gestionarCurioso);
