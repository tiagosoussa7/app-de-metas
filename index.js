const { select, input } = require("@inquirer/prompts");

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})

    if(meta.length == 0) { 
        console.log('A meta não pode estar vazia');
        return
    }

    metas.push(
        { value: meta, checked: false }
    )
}
const start = async () => {
  while (true) {
    const option = await select({
      message: "Menu >",
      choices: [
          {
            name: "Cadastrar meta",
            value: "cadastrar",
          },
          {
            name: "Listar metas",
            value: "cadastrar",
          },
          {
          name: "Sair",
          value: "sair",
        },
      ],
    });

    switch (option) {
      case "cadastrar":
        await cadastrarMeta()

        break;
      case "listar":
        console.log("vamos listar");

        break;
      case "sair":
        console.log("até a próxima");

        break;
    }
  }
};

start()