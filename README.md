# Responsive-template React + TypeScript + Vite
<a href="https://marnand.github.io/responsive-template-react/">Demo</a>

## 📋 Descrição do projeto
Este template serve de base para iniciar uma landing page responsiva. 
Utilizando o tailwind css a necessidade de criar scripts de estilização diminui bastante, 
a depender da customização que se quer utilizar nem será necessário criar um script de estilos para isso.

## 💻 Tecnologias utilizadas
- Vite JS
- React JS
- Tailwind CSS

## 🚀 Publicando projeto via github pages

- adicione o pacote gh-pages executando o segunte comando no terminal: <br>
  `npm install gh-pages --save-dev`
- no arquivo `package.json` após a linha `"build": "vite build"` adicionar: <br>
  `"predeploy": "npm run build",` <br>
  `"deploy": "gh-pages -d dist",`
- no arquivo `vite.config.js` após a linha `plugins: [react()],` adicionar: <br>
  `base: "/NOME_SEU_REPOSITORIO",`
- depois basta executar no terminal o comando:
  `npm run deploy`

Após o comando `npm run deploy` uma nova branch será criada no seu repositório, ela deve ser escolhida como a branch para de publicação do github pages


