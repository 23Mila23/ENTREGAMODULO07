import { vi } from 'vitest';
import { getRandomNumber, calcularYGuardarPuntuacion, checkIfPlayerWins, checkIfPlayerLoses } from './motor';
import { reiniciarPuntuacion, puntuacion, setPuntuacion } from './modelo';

describe("Obtener numero aleatorio", () => {
    it("Cuando el numero aleatorio es 8, el numero generado es 10", () => {
        //Arrange
        vi.spyOn(global.Math, "random").mockReturnValue(0.8)

        //Act
        const randomNumber = getRandomNumber();

        //Assert
        expect(randomNumber).toBe(10);

    })

    it("Cuando el numero aleatorio es 9, el numero generado es 11", () => {
        //Arrange
        vi.spyOn(global.Math, "random").mockReturnValue(0.9)

        //Act
        const randomNumber = getRandomNumber();

        //Assert
        expect(randomNumber).toBe(11);

    })

    it("Cuando el numero aleatorio es 10, el numero generado es 12", () => {
        //Arrange
        vi.spyOn(global.Math, "random").mockReturnValue(1)

        //Act
        const randomNumber = getRandomNumber();

        //Assert
        expect(randomNumber).toBe(12);

    })

})

describe("Calcular y guardar puntuación", () => {
    beforeEach (() => {
        reiniciarPuntuacion();
    })
    it("Si el numero es mayor o igual a 10, se suma a la puntación 0.5", () => {
    
        // Act
        calcularYGuardarPuntuacion(10)
        //Assert
        expect(puntuacion).toBe(0.5)

    })

    it("Si el numero es menor a 10, se suma a la puntación el valor del numero", () => {
    
        // Act
        calcularYGuardarPuntuacion(5)
        //Assert
        expect(puntuacion).toBe(5)

    })



    
})

describe("Lógica de ganar o perder", () => {
    beforeEach (() => {
        reiniciarPuntuacion();
    })

    it("Si la puntuación es 7.5, el jugador ha ganado", () => {
        //Arrange
        setPuntuacion(7.5)

        //Assert
        expect(checkIfPlayerWins()).toBe(true)
    })

    it("Si el jugador supera la puntuación máxima, ha perdido", () => {
        //Arrange
        setPuntuacion(10)

        //Assert
        expect(checkIfPlayerLoses()).toBe(true)
    })

    it("Si el jugador tiene una puntuación menor a la máxima, ni ha ganado ni ha perdido", () => {
        //Arrange
        setPuntuacion(5)

        //Assert
        expect(checkIfPlayerLoses()).toBe(false)
        expect(checkIfPlayerWins()).toBe(false)
    })
    })
