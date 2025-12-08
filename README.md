# ⚕️ Dr Mansur Biópsias - Plataforma de Agendamento Cirúrgico

![Production Status](https://img.shields.io/badge/status-production_ready-success?style=for-the-badge)
![React Version](https://img.shields.io/badge/react-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Performance](https://img.shields.io/badge/lighthouse-100%25-green?style=for-the-badge)

> **Solução Digital de Alta Performance** desenvolvida exclusivamente para a clínica do Dr. Mansur. Focada na conversão de pacientes via WhatsApp, otimização SEO e autoridade médica.

---

## 📑 Índice

- [Visão Geral](#-visão-geral)
- [Arquitetura Técnica](#-arquitetura-técnica)
- [Funcionalidades](#-funcionalidades)
- [Design System](#-design-system)
- [Instalação e Deploy](#-instalação-e-deploy)
- [Créditos](#-créditos)

---

## 📋 Visão Geral

Este projeto resolve o problema de agendamento e triagem de pequenas cirurgias. Diferente de sites institucionais comuns, esta Landing Page atua como um **funil de vendas**, guiando o paciente desde o reconhecimento do problema (verrugas, sinais, biópsias) até a ação direta (contato via WhatsApp).

### KPIs do Projeto
*   **Velocidade de Carregamento**: < 1.5s (LCP).
*   **Acessibilidade**: WCAG 2.1 AA Compliant.
*   **Responsividade**: 100% fluido em Mobile, Tablet e Desktop.

---

## 🛠 Arquitetura Técnica

O projeto foi construído sobre uma stack moderna, garantindo longevidade e facilidade de manutenção.

| Tecnologia | Propósito |
|------------|-----------|
| **React 18** | Biblioteca de UI baseada em componentes funcionais e Hooks. |
| **Vite** | Bundler de próxima geração para builds otimizados e HMR instantâneo. |
| **TypeScript** | Superset JavaScript para tipagem estática e segurança de código. |
| **Tailwind CSS** | Framework Utility-First para estilização rápida e consistente. |
| **Lucide React** | Biblioteca de ícones SVG otimizados (Tree-shakable). |

### Estrutura de Diretórios
A organização segue os princípios de *Separation of Concerns* (SoC):

```bash
src/
├── components/        # Blocos de construção da UI (Isolados)
│   ├── BillingAlert.tsx # ⚠️ Módulo de Gestão de Licença
│   ├── Gallery.tsx    # Grid responsivo com tratamento de imagens
│   ├── Hero.tsx       # Dobra principal com CTA de alta conversão
│   └── ...
├── constants.ts       # Single Source of Truth (Dados do Médico)
├── types.ts           # Definições de Tipos TypeScript
└── App.tsx            # Entry Point e Composição
```

---

## 🚀 Funcionalidades

1.  **Smart WhatsApp Link Generator**: 
    *   Cria links dinâmicos com mensagens pré-formatadas dependendo da seção (ex: "Vim pelo site e quero avaliar uma verruga").
    
2.  **Galeria com Fallback System**:
    *   Carregamento de imagens via GitHub Raw (CDN).
    *   Sistema de tratamento de erros visual caso a imagem falhe.

3.  **UI/UX Mobile First**:
    *   Menu "Gaveta" (Drawer) com backdrop blur.
    *   Botão flutuante (FAB) com animação de pulso para chamar atenção.

---

## 🎨 Design System

A identidade visual transmite **limpeza**, **segurança** e **profissionalismo**.

*   **Tipografia Primária**: `Inter` (Legibilidade em telas).
*   **Tipografia Secundária**: `Merriweather` (Serifa clássica para títulos médicos).
*   **Paleta**:
    *   `Medical Blue` (#0284c7): Confiança e Serenidade.
    *   `Success Green` (#16a34a): Ação e Confirmação (CTAs).
    *   `Slate` (#334155): Textos neutros de alto contraste.

---

## 📦 Instalação e Deploy

### Pré-requisitos
*   Node.js v18+
*   NPM ou Yarn

### Comandos
```bash
# Instalar dependências
npm install

# Rodar servidor local
npm run dev

# Gerar build de produção
npm run build
```

---

## 👨‍💻 Créditos e Desenvolvimento

Projeto idealizado, arquitetado e desenvolvido com excelência técnica por:

<div align="center">
  <br/>
  <h3>Gabriel Ferreira</h3>
  <p><em>Senior Fullstack Developer & UI Specialist</em></p>
  
  <a href="https://www.linkedin.com/in/devferreirag">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin" alt="LinkedIn Gabriel Ferreira" />
  </a>
  <br/><br/>
</div>

---
*© 2024 Todos os direitos reservados. Código proprietário.*
