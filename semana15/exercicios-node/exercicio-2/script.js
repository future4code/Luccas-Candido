const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

switch(operation) {
    case "add": 
        const addResult = Number((firstNumber + secondNumber))
        return console.log(`Resposta ${addResult}`)

    case "sub":
        const subResult = (firstNumber - secondNumber)
        return console.log(`Resposta ${subResult}`)

    case "mult":
        const multResult = (firstNumber * secondNumber)
        return console.log(`Resposta ${multResult}`)

    case "div":
        const divResult = (firstNumber / secondNumber)
        return console.log(`Resposta ${divResult}`)

}
