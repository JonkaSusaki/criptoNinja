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


});
