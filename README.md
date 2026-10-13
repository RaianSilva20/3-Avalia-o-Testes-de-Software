# Avaliacao de Testes de Software

Testes end-to-end feitos com Cypress para as questoes da atividade.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalacao

```bash
npm ci
```

## Executar os testes

Executar todas as questoes em modo headless:

```bash
npm run cy:run
```

Executar somente a Questao 1:

```bash
npm run cy:run:questao-1
```

Executar somente a Questao 2:

```bash
npm run cy:run:questao-2
```

Executar somente a Questao 3:

```bash
npm run cy:run:questao-3
```

Abrir a interface interativa do Cypress:

```bash
npm run cy:open
```

## Questoes

- Questao 1: acessa a SauceDemo, faz login e imprime os produtos com preco abaixo de $20.00.
- Questao 2: extrai titulo e preco dos 20 livros das duas primeiras paginas da Books to Scrape e imprime os 40 resultados e o total.
- Questao 3: percorre a Table 1 do site The Internet e imprime primeiro nome, ultimo nome e site dos clientes com divida superior a $50.00.

## Linux

Em ambientes Linux sem servidor grafico, o Cypress em modo headless precisa do Xvfb. No Ubuntu, instale-o com:

```bash
sudo apt-get update
sudo apt-get install -y xvfb
```

O workflow do GitHub Actions executa os testes automaticamente em novos pushes e pull requests.