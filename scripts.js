fetch("./content.json")
.then(response => {
   return response.json();
})
.then(data => {
  //#region SECTION 1
  document
    .getElementById('section1-h1')
    .textContent = data.section1.titulo;

  document
    .getElementById('botao-span1')
    .textContent = data.section1.botao.span1

  document
    .getElementById('botao-span2')
    .textContent = data.section1.botao.span2

  document
    .getElementById('desc1-section1')
    .textContent = data.section1.descricao.paragrafo1

    //#endregion

    //#region SECTION2
  document
    .getElementById('desc1-section2')
    .textContent = data.section1.descricao.paragrafo2

  document
    .getElementById('section2-p-title')
    .textContent = data.section2.titulo.span
  document
    .getElementById('section2-strong-title')
    .textContent = data.section2.titulo.strong

  document
    .getElementById('section2-subtitle-span1')
    .textContent = data.section2.subtitulo.texto1

  document
    .getElementById('section2-subtitle-strong')
    .textContent = data.section2.subtitulo.strong

  document
    .getElementById('section2-subtitle-span2')
    .textContent = data.section2.subtitulo.texto2

  document
    .getElementById('section2-card1-span1')
    .textContent = data.section2.cards.card1.span1

  document
    .getElementById('section2-card1-span2')
    .textContent = data.section2.cards.card1.span2

  document
    .getElementById('section2-card2-span1')
    .textContent = data.section2.cards.card2.span1

  document
    .getElementById('section2-card2-span2')
    .textContent = data.section2.cards.card2.span2

  document
    .getElementById('section2-card3-span1')
    .textContent = data.section2.cards.card3.span1

  document
    .getElementById('section2-card3-span2')
    .textContent = data.section2.cards.card3.span2

  document
    .getElementById('section2-card4-span1')
    .textContent = data.section2.cards.card4.span1

  document
    .getElementById('section2-card4-span2')
    .textContent = data.section2.cards.card4.span2

  document
    .getElementById('section2-card5-span1')
    .textContent = data.section2.cards.card5.span1

  document
    .getElementById('section2-card5-span2')
    .textContent = data.section2.cards.card5.span2

  document
    .getElementById('section2-card6-span1')
    .textContent = data.section2.cards.card6.span1

  document
    .getElementById('section2-card6-span2')
    .textContent = data.section2.cards.card6.span2

  document
    .getElementById('section2-bonus')
    .textContent = data.section2.bonus

  //#endregion

    //#region SECTION 3
    document
    .getElementById('section3-titulo1-span1')
    .textContent = data.section3.parte1.titulo.span1
    document
    .getElementById('section3-titulo1-span2')
    .textContent = data.section3.parte1.titulo.span2

    document
    .getElementById('section3-texto1-span1')
    .textContent = data.section3.parte1.texto.span1
    document
    .getElementById('section3-texto1-span2')
    .textContent = data.section3.parte1.texto.span2

    document
    .getElementById('section3-titulo2-span1')
    .textContent = data.section3.parte2.titulo.span1
    document
    .getElementById('section3-titulo2-span2')
    .textContent = data.section3.parte2.titulo.span2

    document
    .getElementById('section3-texto2-span1')
    .textContent = data.section3.parte2.texto.span1
    document
    .getElementById('section3-texto2-span2')
    .textContent = data.section3.parte2.texto.span2
    document
    .getElementById('section3-texto2-span3')
    .textContent = data.section3.parte2.texto.span3
    document
    .getElementById('section3-texto2-span4')
    .textContent = data.section3.parte2.texto.span4
    document
    .getElementById('section3-texto2-span5')
    .textContent = data.section3.parte2.texto.span5

    document
    .getElementById('section3-botao')
    .textContent = data.section3.botao
    //#endregion

    //#region Section4
    document
    .getElementById('section4-titulo')
    .textContent = data.section4.titulo

    document
    .getElementById('section4-botao')
    .textContent = data.section4.botao
    //#endregion

    //#region SECTION 5
    document
    .getElementById('section5-titulo-span1')
    .textContent = data.section5.titulo.span1
    document
    .getElementById('section5-titulo-span2')
    .textContent = data.section5.titulo.strong
    document
    .getElementById('section5-subtitulo')
    .textContent = data.section5.subtitulo
    document
    .getElementById('section5-texto-span1')
    .textContent = data.section5.texto.span1
    document
    .getElementById('section5-texto-span2')
    .textContent = data.section5.texto.span2
    document
    .getElementById('section5-botao')
    .textContent = data.section5.botao
    //#endregion
});
