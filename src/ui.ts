import { puntuacion, puntuacionMaxima } from './modelo';

export const muestraPuntuacion = () => {
  const muestraP = document.getElementById('puntuacion') as HTMLElement;
  muestraP.innerHTML = puntuacion.toString();
};

export const muestraCarta = (carta: number): void => {
  const imagenCarta = document.getElementById('carta') as HTMLImageElement;

  switch (carta) {
    case 1:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
      break;
    case 2:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
      break;
    case 3:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
      break;
    case 4:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
      break;
    case 5:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
      break;
    case 6:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
      break;
    case 7:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
      break;
    case 10:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
      break;
    case 11:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
      break;
    case 12:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
      break;

    default:
      imagenCarta.src =
        'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
      break;
  }
};

export const reiniciarCarta = () => {
  const imagenCarta = document.getElementById('carta') as HTMLImageElement;
  imagenCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
}

export const botonDameCarta = document.getElementById(
  'dame-carta'
) as HTMLButtonElement;

export const botonPlantarse = document.getElementById(
  'plantarse'
) as HTMLButtonElement;

export const botonNuevaPartida = document.getElementById(
  'nueva-partida'
) as HTMLButtonElement;

export const botonCurioso = document.getElementById(
  'curioso'
) as HTMLButtonElement;

const showNuevaPartidaButton = () => {
  const nuevaPartidaFadeIn = document.getElementById(
    'nueva-partida'
  ) as HTMLElement;
  nuevaPartidaFadeIn.classList.add('fadeIn');
};

export const hideNuevaPartidaButton = () => {
    const nuevaPartidaFadeIn = document.getElementById(
        'nueva-partida'
      ) as HTMLElement;
      nuevaPartidaFadeIn.classList.remove('fadeIn');
}

const showCuriosoButton = () => {
  const curiosoFadeIn = document.getElementById('curioso') as HTMLElement;
  curiosoFadeIn.classList.add('fadeIn');
};

export const hideCuriosoButton = () => {
    const curiosoFadeIn = document.getElementById('curioso') as HTMLElement;
  curiosoFadeIn.classList.remove('fadeIn');
}

export const mePlanto = () => {
  let mensaje = '';
  if (puntuacion <= 4) {
    mensaje = 'Has sido muy conservador';
  }
  if (puntuacion > 4) {
    mensaje = 'Te ha entrado el canguelo eh';
  }
  if (puntuacion >= 6) {
    mensaje = 'Casi casi...';
  }
  const getMePlanto = document.getElementById('mensaje') as HTMLElement;
  getMePlanto.innerHTML = mensaje;
  showNuevaPartidaButton();
  showCuriosoButton();
  botonDameCarta.disabled = true;
  botonPlantarse.disabled = true;
};

export const ganarJuego = () => {
  let mensaje = '';
  if (puntuacion == 7.5) {
    mensaje = '¡ Lo has clavado! ¡Enhorabuena!';
    const getGanador = document.getElementById('mensaje') as HTMLElement;
    getGanador.innerHTML = mensaje;
    showNuevaPartidaButton();
    botonDameCarta.disabled = true;
    botonPlantarse.disabled = true;
    botonCurioso.disabled = true;
  }
};

export const controlarGameOver = () => {
  const gameOver = 'GAME OVER';
  if (puntuacion > puntuacionMaxima) {
    const getGameOver = document.getElementById('mensaje') as HTMLElement;
    getGameOver.innerHTML = gameOver;
    showNuevaPartidaButton();
    botonDameCarta.disabled = true;
    botonPlantarse.disabled = true;
    botonCurioso.disabled = true;
  }
};

export const reiniciarGameOver = () => {
  const getGameOver = document.getElementById('mensaje') as HTMLElement;
    getGameOver.innerHTML = "";
}
