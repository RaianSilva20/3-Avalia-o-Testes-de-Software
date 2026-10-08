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

Abrir a interface interativa do Cypress:

```bash
npm run cy:open
```

## Questoes

- Questao 1: envio do formulario de login com usuario e senha vazios; verifica o texto da mensagem e a classe CSS `error` no elemento `#flash`.

O workflow do GitHub Actions executa os testes automaticamente em novos pushes e pull requests.