### rodar projeto 
- npm start (olhar package json)

## criar o projeto

- para criar o app: yarn create react-app (nome do projeto) --template typescript
- deixar no public só o index.html
- deixar no src só o app, index e react-app-env
- tirar os @types e typescript das dependencias de produção, e colocar em um "devDependencies"

## estilizar

- instalar e utilizar styled-components (é bom que fica próximo e em cada componente, o que não deixa confuso)
- criar arquivo global do styled-components, e mudar para porcentagem do font-size de acordo com a screen, pois quando utiliza REM depois, fica responsivo (acessibilidade)

## Backend

- utilizar miragejs para simular uma API
- isso é bom pra deixar o front end semi pronto, quando o back atrasa

## Modal

- para fazer o modal, vamos utilizar uma biblioteca do proprio react, chamada react-modal
- mudar o modal para o App.tsx, porém deixar o botão no Header, e passando a função de abrir via props (desestruturando e com typescript)