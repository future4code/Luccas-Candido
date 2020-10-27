enum AGE_ERA {
  DC = "DC",
  AC = "AC"
}

const historicAge = (ano: number, sigla?: AGE_ERA) => {
  if (sigla === undefined) {
    sigla = AGE_ERA.DC;
  }

  if (ano === undefined) {
    console.log("Insira um valor correto.");
  }

  switch (sigla) {
    case "AC":
      if (ano >= 100000 ) {
        console.log("Pré História");
      } else if (ano <= 4000) {
        console.log("Idade Antiga");
      }
      break

    case "DC":
      if (ano >= 476 && ano < 1453) {
        console.log("Idade Média");
      } else if (ano >= 1453 && ano < 1789) {
        console.log("Idade Moderna");
      } else if (ano >= 1789) {
        console.log("Idade Contemporânea");
      }
      break

    default:
      return false;
  }
};

console.log(historicAge(1300, AGE_ERA.AC))
