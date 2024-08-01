import { setPuntuacion, puntuacion, puntuacionMaxima } from './modelo';

import { dameCarta } from './main';

import { disableCuriosoButton } from './ui';

export const getRandomNumber = () : number => {
  let numero : number = Math.ceil(Math.random() * 10);
  
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

export const checkIfPlayerWins = () : boolean => {
  return puntuacion === 7.5 ? true : false
 }

 export const checkIfPlayerLoses = () : boolean => {
  
  return puntuacion > puntuacionMaxima ? true : false
 }
export const gestionarCurioso = () => {
  dameCarta();
  disableCuriosoButton()
};


