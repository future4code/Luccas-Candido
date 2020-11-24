import { validateCharacter } from "../src/business/validateCharacter"

describe("Exercício 2", () => {

    test("Deve retornar falso pro nome vazio", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500
        })

        expect(result).toBe(false)
    })

    test("Vida igual a zero, deve retornar false", () => {
        const result = validateCharacter({
            name: "João",
            life: 0,
            strength: 300,
            defense: 500
        })

        expect(result).toBe(false)
    })

    test("Força igual a zero, deve retornar false", () => {
        const result = validateCharacter({
            name: "João",
            life: 150,
            strength: 0,
            defense: 500
        })

        expect(result).toBe(false)
    })

    test("Defesa igual a zero, deve retornar false", () => {
        const result = validateCharacter({
            name: "João",
            life: 150,
            strength: 0,
            defense: 500
        })

        expect(result).toBe(false)
    })

    test("Vida, força ou defesa negativa, deve retornar false", () => {
        const result = validateCharacter({
            name: "João",
            life: -1,
            strength: 0,
            defense: 500
        })

        expect(result).toBe(false)
    })

    test("Dados corretos, deve retornar true", () => {
        const result = validateCharacter({
            name: "João",
            life: 150,
            strength: 300,
            defense: 500
        })

        expect(result).toBe(true)
    })

})