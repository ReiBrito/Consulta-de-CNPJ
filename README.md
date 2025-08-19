# 📊 Consulta de CNPJ — BrasilAPI

Este projeto é uma aplicação web simples e responsiva para consultar informações de empresas brasileiras utilizando a [BrasilAPI](https://brasilapi.com.br).  
Com ele, é possível pesquisar CNPJs e visualizar dados da empresa como **razão social, nome fantasia, endereço, contatos e atividades econômicas (CNAEs)**.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** → Estrutura da página  
- **CSS3** → Estilização moderna e responsiva  
- **JavaScript (ES6)** → Consumo da API e manipulação dinâmica do DOM  
- **[BrasilAPI - CNPJ](https://brasilapi.com.br/docs#tag/CNPJ)** → Fonte de dados oficial  
- **Font Awesome** → Ícones para interface

---

## 🎯 Funcionalidades

✅ Pesquisa de CNPJ em tempo real  
✅ Validação básica de CNPJs (14 dígitos numéricos)  
✅ Exibição formatada dos resultados:  
   - Razão Social  
   - Nome Fantasia  
   - Situação Cadastral  
   - Natureza Jurídica  
   - Endereço completo  
   - Telefones e e-mail  
   - CNAE principal e secundários  
✅ Botão de **Limpar** para resetar a consulta  
✅ Indicador de **carregamento** e exibição de **erros**  
✅ Layout **responsivo** para desktop e mobile  

---

## 📂 Estrutura do Projeto

```
├── index.html      # Estrutura da aplicação
├── style.css       # Estilos e responsividade
└── script.js       # Lógica da consulta e integração com a API
```

---

## ⚡ Como Usar Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/ReiBrito/Consulta-de-CNPJ.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Consulta-de-CNPJ
   ```

3. Abra o arquivo `index.html` no navegador:
   ```bash
   start index.html   # Windows
   open index.html    # Mac
   xdg-open index.html # Linux
   ```

4. Digite um **CNPJ válido (apenas números, 14 dígitos)** e clique em **Consultar**.

---

## 🌐 Deploy no GitHub Pages

1. Suba seu repositório para o GitHub.  
2. Vá em **Configurações > Pages**.  
3. Em **Source**, selecione a branch `main` (ou `master`) e a pasta **/root**.  
4. O GitHub Pages vai gerar um link no formato:

👉 https://ReiBrito.github.io/Consulta-de-CNPJ/

---

## 🖼️ Demonstração

(Adicione aqui um print ou GIF da aplicação funcionando)

---

## 📌 Melhorias Futuras

- 🔍 Implementar autocomplete de CNPJs recentes  
- 💾 Salvar histórico de consultas no LocalStorage  
- 🌐 Publicar a aplicação no **GitHub Pages** ou **Vercel**  

---

## 👨‍💻 Autor

Desenvolvido por **[Reinaldo Brito](https://github.com/ReiBrito)** 💙  
Sinta-se livre para contribuir ou adaptar ao seu uso!
