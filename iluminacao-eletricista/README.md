# Iluminação – Página de Serviços de Eletricista

Página de apresentação e pedido de orçamento de um eletricista profissional (BSB/GO), feita com HTML, CSS e JavaScript puros, sem frameworks.

## Versão do projeto

**v0.2.0**

## Por que v0.2.0 (Versionamento Semântico)

O projeto segue o [SemVer 2.0.0](https://semver.org/lang/pt-BR/), no formato `MAJOR.MINOR.PATCH`.

- **Regra do MINOR (item 7 do SemVer):** o MINOR deve ser incrementado quando se adiciona funcionalidade nova que continua compatível com o que já existia, e o PATCH volta a zero. Esta versão trouxe funcionalidades novas (menu para celular, validação do formulário com envio ao WhatsApp, logo e foto), sem quebrar nada do protótipo. Por isso a versão passou de `0.1.0` para `0.2.0`.
- **Por que não é PATCH (item 6):** o PATCH é só para correção de erros, e aqui houve funcionalidades novas.
- **Por que não é MAJOR (item 8):** o MAJOR é para mudanças incompatíveis, e nada do que existia deixou de funcionar.
- **Por que continua em 0.x (item 4):** a versão `0.y.z` indica desenvolvimento inicial, em que a API não é considerada estável. O site ainda tem textos provisórios entre colchetes (WhatsApp, e-mail, depoimentos), então a `1.0.0` fica para quando ele estiver completo e publicado.

## Alterações desta versão (v0.2.0)

As mesmas do [CHANGELOG.md](CHANGELOG.md):

### Adicionado
- Logo RC (monograma com cabo elétrico, sem tomada) com o nome "Iluminação", em SVG no topo do site e em PNG com fundo transparente (versões escura e clara).
- Foto da fachada com iluminação em LED no banner principal.
- Menu recolhível (botão hambúrguer) para telas pequenas.
- Validação do formulário de orçamento, com máscara de telefone e envio para o WhatsApp.
- Ano do rodapé atualizado automaticamente.
- Arquivos `README.md` e `CHANGELOG.md`.

### Alterado
- Projeto separado em `index.html`, `css/style.css` e `js/script.js` (antes era uma página única, com estilos embutidos).
- Paleta definida como variáveis CSS: grafite `#14181F`, amarelo `#FFC400`, off-white `#F6F5F0` e cinza `#4A5362`.
- Layout 100% responsivo: fontes e espaçamentos fluidos, grades que se adaptam e botões em largura total no celular.
- Rótulo do topo alterado para "Eletricista profissional · BSB/GO" e nome da marca para "Iluminação".

## Tecnologias

HTML5, CSS3 (variáveis, flexbox e grid) e JavaScript (ES6+). Fontes Barlow e Barlow Condensed, do Google Fonts.

## Estrutura

```
iluminacao-eletricista/
├── index.html
├── css/style.css
├── js/script.js
├── img/            (foto da fachada, favicon e logos PNG)
├── README.md
└── CHANGELOG.md
```

## Como executar

Abra o `index.html` no navegador. Não precisa instalar nada.

## Configuração do WhatsApp

Em `js/script.js`, preencha a constante `WHATSAPP_NUMBER` com DDI, DDD e número, só dígitos (exemplo: `"5561999999999"`). Com isso, os botões "Chamar no WhatsApp" e "Atendimento de urgência" e o formulário passam a abrir a conversa. Sem o número, o formulário avisa que o WhatsApp não foi configurado.

## Pendências

Trocar os textos entre colchetes no `index.html`: horário de urgência, depoimentos, WhatsApp, e-mail, região atendida e registro profissional.

## Autor

Alonso Santos – [github.com/Alonso-Santos](https://github.com/Alonso-Santos)
