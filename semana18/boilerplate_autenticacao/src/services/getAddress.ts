import axios from "axios"
import { address } from "../types/address"

const URL = "https://viacep.com.br/ws"



export const getAddress = async(cep:number):Promise<address> => {
    const result = await axios.get(`${URL}/${cep}/json`)

    console.log(result.data)

    return {
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf
    }
}