# Calculadora com Vitest

Projeto didático para a disciplina de **Teste de Software** em cursos de graduação em Computação. O objetivo é demonstrar, na prática, como escrever e executar testes unitários em JavaScript utilizando o framework [Vitest](https://vitest.dev/), além de configurar integração contínua (CI) com GitHub Actions.

---

## 📁 Estrutura do Projeto

```
.
├── .github/
│   └── workflows/
│       └── unit-tests.yml      # Pipeline de CI (GitHub Actions)
├── src/
│   ├── calculator.js           # Módulo calculadora (add, subtract, multiply, divide)
│   ├── calculator.test.js      # Testes unitários da calculadora (TDD demo)
│   └── sum/
│       ├── sum.js              # Código-fonte com as funções de soma
│       └── __sum__.spec.js     # Testes unitários das funções de soma
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧮 Funcionalidades

### Módulo `src/calculator.js` — Calculadora completa (TDD demo)

| Função | Descrição |
|---|---|
| `add(a, b)` | Retorna a soma de dois números. |
| `subtract(a, b)` | Retorna a diferença entre dois números. |
| `multiply(a, b)` | Retorna o produto de dois números. |
| `divide(a, b)` | Retorna o quociente; lança erro em divisão por zero. |

### Módulo `src/sum/sum.js` — Funções de soma

| Função | Descrição |
|---|---|
| `sum(a, b)` | Retorna a soma de dois números. |
| `sumList(numbers)` | Retorna a soma de todos os elementos de um array de números. |

---

## 🧪 Testes Unitários

### Calculadora (`src/calculator.test.js`) — 15 testes

Cobrem as quatro operações com entradas positivas, negativas e casos-limite (divisão por zero).

### Soma (`src/sum/__sum__.spec.js`)

| # | Cenário | Resultado Esperado |
|---|---|---|
| 1 | `sum(1, 2)` | `3` |
| 2 | `sum(10000, -2)` | `9998` |
| 3 | `sum(0, 0)` | `0` |
| 4 | Soma até o limite máximo de inteiro em JS (`Number.MAX_SAFE_INTEGER + 1`) | Valor correto |
| 5 | Soma até o limite mínimo de inteiro em JS (`-Number.MAX_SAFE_INTEGER - 1`) | Valor correto |
| 6 | `sumList([1, 2, 3, 4, 5])` | `15` |
| 7 | `sumList([1, 2, 3, 4, 5])` — teste negativo | Diferente de `10` |

Os testes são executados com o [Vitest](https://vitest.dev/) e incluem relatório de **cobertura de código** via `@vitest/coverage-v8`.

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 22 ou superior
- [npm](https://www.npmjs.com/) (incluso com o Node.js)

### Instalação

```bash
git clone https://github.com/rodrigo-rac2/calc_vitest.git
cd calc_vitest
npm install
```

### Executar os testes

```bash
npm test
```

O comando acima executa `vitest run --coverage`, que roda todos os testes e gera um relatório de cobertura de código.

Para executar os testes em modo watch:

```bash
npm run test:watch
```

---

## ⚙️ Integração Contínua (CI)

O projeto utiliza **GitHub Actions** para executar os testes automaticamente. O workflow está configurado em `.github/workflows/unit-tests.yml` e é acionado:

- A cada **push** na branch `main`
- A cada **pull request** para a branch `main`

### Etapas do pipeline

1. Checkout do código-fonte
2. Configuração do Node.js 22
3. Instalação das dependências (`npm install`)
4. Execução dos testes (`npm test`)

---

## 📚 Conceitos Abordados

Este projeto foi criado com fins educacionais e aborda os seguintes conceitos de teste de software:

- **Testes unitários**: validação isolada de funções individuais
- **Desenvolvimento orientado a testes (TDD)**: escrever testes antes do código
- **Casos de teste positivos e negativos**: verificação de resultados corretos e incorretos
- **Valores-limite (boundary values)**: testes com `0`, `Number.MAX_SAFE_INTEGER` e `-Number.MAX_SAFE_INTEGER`
- **Cobertura de código**: medição de quanto do código-fonte é exercitado pelos testes
- **Integração contínua (CI)**: automação da execução dos testes a cada alteração no repositório

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES Modules)**
- **[Vitest](https://vitest.dev/)** — framework de testes unitários
- **[@vitest/coverage-v8](https://vitest.dev/guide/coverage)** — cobertura de código
- **[GitHub Actions](https://docs.github.com/pt/actions)** — integração contínua

---

## 📄 Licença

Este projeto está licenciado sob a licença **ISC**.
