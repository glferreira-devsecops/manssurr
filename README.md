# 🏥 Dr Mansur Biópsias - Landing Page Profissional

![Project Status](https://img.shields.io/badge/status-production_ready-success?style=for-the-badge)
![React](https://img.shields.io/badge/react-18.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

> Uma solução web de alta performance para clínica de pequenas cirurgias, focada em conversão, acessibilidade e autoridade médica.

---

## 📋 Visão Geral do Projeto

Este projeto é uma **Landing Page Médica** desenvolvida sob medida para o **Dr. Mansur**, especialista com mais de 40 anos de experiência. O objetivo principal da aplicação é converter visitantes em pacientes através de uma interface limpa, rápida e confiável, facilitando o agendamento via WhatsApp.

A aplicação foi construída utilizando práticas modernas de desenvolvimento web (SPA), garantindo **SEO otimizado**, **carregamento instantâneo** e **experiência mobile-first**.

### 🌟 Principais Funcionalidades

*   **Conversão Otimizada**: CTAs (Call to Action) estrategicamente posicionados que direcionam para o WhatsApp com mensagens pré-configuradas.
*   **Galeria de Casos Reais**: Integração com assets hospedados em CDN (GitHub Raw) para alta disponibilidade.
*   **Design Responsivo & Fluido**: Layout adaptável para qualquer dispositivo (Mobile, Tablet, Desktop).
*   **Navegação Intuitiva**: Menu mobile com animações suaves e backdrop blur.
*   **Micro-interações**: Feedbacks visuais sutis (hovers, transições) que elevam a percepção de qualidade.
*   **Performance**: Pontuação alta no Lighthouse/Core Web Vitals.

---

## 🛠️ Stack Tecnológico

A arquitetura foi escolhida visando **manutenibilidade**, **segurança de tipos** e **velocidade de desenvolvimento**.

| Tecnologia | Função | Justificativa |
|------------|--------|---------------|
| **React 18** | UI Library | Componentização e gerenciamento eficiente de estado (DOM Virtual). |
| **Vite** | Build Tool | Bundling ultra-rápido e HMR (Hot Module Replacement) para desenvolvimento ágil. |
| **TypeScript** | Linguagem | Tipagem estática para prevenir erros em tempo de execução e melhorar o intellisense. |
| **Tailwind CSS** | Estilização | Design System utilitário para consistência visual e baixo peso de CSS no bundle final. |
| **Lucide React** | Ícones | Biblioteca de ícones vetoriais (SVG) leve e customizável. |

---

## 📂 Arquitetura de Pastas

O projeto segue uma estrutura modular e escalável:

```bash
src/
├── components/        # Componentes isolados da UI
│   ├── Header.tsx     # Navegação e Menu Mobile
│   ├── Hero.tsx       # Seção principal (Dobra acima)
│   ├── Services.tsx   # Lista de procedimentos
│   ├── Gallery.tsx    # Grid de imagens de casos
│   ├── ContactForm.tsx# Formulário interativo
│   └── Footer.tsx     # Rodapé e Assinatura
├── constants.ts       # Fonte única da verdade (Dados do Médico, Textos)
├── types.ts           # Definições de Interfaces TypeScript
├── App.tsx            # Orquestrador da aplicação
└── main.tsx           # Ponto de entrada (Entry Point)
```

---

## 🚀 Guia de Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos
*   Node.js (versão 16 ou superior)
*   NPM ou Yarn

### Passos

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/seu-usuario/dr-mansur-landing.git
    cd dr-mansur-landing
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Execute em ambiente de desenvolvimento**
    ```bash
    npm run dev
    ```
    O projeto estará disponível em `http://localhost:5173`.

4.  **Gere o build de produção**
    ```bash
    npm run build
    ```

---

## ⚙️ Configuração e Customização

Toda a informação sensível ou mutável (Nome, CRM, Telefone, Endereço) está centralizada no arquivo `src/constants.ts`.

Para alterar o número do WhatsApp ou endereço, basta editar o objeto `DOCTOR_INFO`:

```typescript
// src/constants.ts
export const DOCTOR_INFO: DoctorInfo = {
  name: "Dr Mansur",
  phone: "21 99999-9999", // Alterar aqui reflete em todo o site
  // ...
};
```

---

## 🎨 Design System & UI/UX

*   **Tipografia**: Combinação de `Inter` (Sans-serif para legibilidade) e `Merriweather` (Serif para títulos, transmitindo seriedade médica).
*   **Paleta de Cores**: Tons de `Medical Blue` (confiança, saúde) e `Slate` (neutralidade, profissionalismo), com acentos em `Green` para ações de conversão (WhatsApp).

---

## 👨‍💻 Autoria e Créditos

Este projeto foi desenvolvido com foco na excelência técnica e visual.

<div align="center">
  <p>Desenvolvido por <strong>Gabriel Ferreira</strong></p>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devferreirag)
</div>
