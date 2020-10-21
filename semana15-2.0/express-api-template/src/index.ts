import express, { Express, request, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app: Express = express()

app.use(express.json())
app.use(cors())

// Todos os países
app.get("/countries/all", (req: Request, res: Response) => {
    res.status(200).send(countries)
})

// Países por id.
// app.get("/countries/:id", (req:Request, res:Response) => {
//     const result: country | undefined = countries.find(
//         country => country.id === Number(req.params.id)
//     )

//     if(result) {
//         res.status(200).send(result)
//     } else {
//         res.status(404).send("Not found!")
//     }
// })

// Procurar por query parameters.
app.get("/countries/search", (req: Request, res:Response) => {
    let result:country[] = countries



    if(req.query.name) {
        result = result.filter((country) => country.name.includes(req.query.name as string))
    }

    if(req.query.capital) {
        result = result.filter(country => country.capital.includes(req.query.capital as string))
    }

    if(req.query.continent) {
        result = result.filter(country => country.continent.includes(req.query.continent as string))
    }

    if(result.length) {
        res.status(200).send(result)

    } else {
        res.status(404).send("Not found")
    }
})



app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
 })