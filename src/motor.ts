import { setPuntuacion } from './modelo';

import { dameCarta } from './main';

import { botonCurioso } from './ui';

export const getRandomNumber = () => {
  let numero = Math.ceil(Math.random() * 10);

  if (numero > 7) {
    numero = numero + 2;
  }

  return numero;
} 

export const calcularYGuardarPuntuacion = (randomNumber: number) => {
  if (randomNumber >= 10) {
    setPuntuacion(0.5);
  } else {
    setPuntuacion(randomNumber);
  }
};

export const gestionarCurioso = () => {
  dameCarta();
  botonCurioso.disabled = true;
};
