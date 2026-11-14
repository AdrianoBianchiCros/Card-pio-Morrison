# Cardápio Digital — Morrison Bar & Rock'n'Roll

Cardápio digital (HTML + CSS + JS puro, sem dependências) para ser acessado via QR Code.

**Endereço (após ativar o GitHub Pages):** https://adrianobianchicros.github.io/Card-pio-Morrison/

## Estrutura

| Arquivo | Para quê |
|---|---|
| `index.html` | Página do cardápio |
| `css/style.css` | Visual (tema escuro, estilo jornal de rock) |
| `js/menu-data.js` | **Todos os itens e preços — edite aqui** |
| `js/app.js` | Renderização, busca, abas de categoria |
| `qrcode.html` | Folha imprimível com o QR Code (4 cartões por página) |
| `assets/qrcode.png` / `.svg` | QR Code apontando para o endereço acima |

## Atualizar preços

Abra `js/menu-data.js` e altere o valor de `price` (use ponto: `16.5` = R$ 16,50).
Para remover um item, apague a linha dele. Ao salvar e publicar, o QR Code continua o mesmo.

## Publicar (GitHub Pages)

1. No GitHub: **Settings → Pages**.
2. Em *Source*, escolha **Deploy from a branch**, selecione a branch (ex.: `main`) e a pasta `/ (root)`.
3. Aguarde ~1 minuto; o site ficará em `https://adrianobianchicros.github.io/Card-pio-Morrison/`.

> Se usar outro domínio (ex.: `cardapio.morrisonbar.com.br`), gere um novo QR Code com:
> `pip install qrcode && python3 -c "import qrcode; qrcode.make('SUA_URL').save('assets/qrcode.png')"`

## Recursos

- Mobile first, abas fixas por categoria com destaque automático ao rolar
- Busca instantânea (ignora acentos) com destaque do termo
- Acessível: navegação por teclado, link "pular para o conteúdo", leitores de tela, contraste alto, respeita "reduzir movimento"
- Etiquetas: *Da casa*, *Em chamas*, *Promoção*, *Zero*
