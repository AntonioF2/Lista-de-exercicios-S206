/// <reference = cypress>

//Lista 1

describe("Testes site Pokedle", ()=>{
  it("Testes de acesso ao botão de jogo classico", ()=>{
    cy.visit('https://pokedle.net/')
    cy.get(':nth-child(1) > .button-description').click()
    
  })



 
  it("Testes de jogo classico", ()=>{
    cy.visit('https://pokedle.net/')
    cy.get(':nth-child(1) > .button-description').click()
    cy.get('.IZ-select__input > input').type('Pikachu')
    cy.get('.guess-button > img').click()
  
  })


  it("Teste modo daltônico", ()=>{
    cy.visit('https://pokedle.net/')
    cy.get(':nth-child(1) > .button-description').click()
    cy.get('.IZ-select__input > input').type('Pikachu')
    cy.get('.guess-button > img').click()
    cy.get('.img').click()
    cy.get(':nth-child(2) > :nth-child(2) > .vue-js-switch > .v-switch-core').click()
    cy.get('.modal-close').click()
   
  })

  it("Teste patch notes", ()=>{
    cy.visit('https://pokedle.net/')
    cy.get(':nth-child(1) > .button-description').click()
    cy.get('.notes-button > .top-button-img').click()

  })

 

  it("Teste com pokemon acima da primeira geração, deve dar erro", ()=>{
    cy.visit('https://pokedle.net/')
    cy.get(':nth-child(1) > .button-description').click()
    cy.get('.IZ-select__input > input').type('Lucario')
    cy.get('.guess-button > img').click()
    cy.get('[style="display: flex;"] > img').click()

  })

  it("Testes até ganhar o jogo classico", ()=>{
    cy.visit('https://pokedle.net/')
    cy.get(':nth-child(1) > .button-description').click()

    while((cy.get('.background-end > :nth-child(2)').should('contain_text', "Você acertou:")) != true){ 
    cy.get('.IZ-select__input > input').type('Bulbasaur')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Ivysaur')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Venusaur')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Charmander')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Charmeleon')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Charizard')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Squirtle')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Wartortle')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Blastoise')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Caterpie')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Metapod')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Butterfree')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Weedle')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Kakuna')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Beedrill')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Pidgey')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Pidgeotto')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Pidgeot')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Rattata')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Raticate')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Spearow')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Fearow')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Ekans')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Arbok')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Pikachu')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Raichu')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Sandshrew')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Sandslash')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Nidoran♀')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Nidorina')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Nidoqueen')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Nidoran♂')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Nidorino')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Nidoking')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Clefairy')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Clefable')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Vulpix')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Ninetales')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Jigglypuff')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Wigglytuff')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Zubat')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Golbat')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Oddish')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Gloom')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Vileplume')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Paras')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Parasect')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Venonat')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Venomoth')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Diglett')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Dugtrio')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Meowth')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Persian')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Psyduck')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Golduck')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Mankey')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Primeape')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Growlithe')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Arcanine')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Poliwag')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Poliwhirl')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Poliwrath')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Abra')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Kadabra')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Alakazam')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Machop')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Machoke')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Machamp')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Bellsprout')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Weepinbell')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Victreebel')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Tentacool')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Tentacruel')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Geodude')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Graveler')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Golem')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Ponyta')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Rapidash')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Slowpoke')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Slowbro')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Magnemite')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Magneton')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Farfetch\'d')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Doduo')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Dodrio')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Seel')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Dewgong')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Grimer')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Muk')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Shellder')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Cloyster')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Gastly')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Haunter')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Gengar')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Onix')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Drowzee')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Hypno')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Krabby')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Kingler')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Voltorb')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Electrode')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Exeggcute')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Exeggutor')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Cubone')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Marowak')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Hitmonlee')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Hitmonchan')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Lickitung')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Koffing')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Weezing')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Rhyhorn')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Rhydon')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Chansey')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Tangela')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Kangaskhan')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Horsea')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Seadra')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Goldeen')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Seaking')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Staryu')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Starmie')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Mr. Mime')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Scyther')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Jynx')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Electabuzz')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Magmar')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Pinsir')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Tauros')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Magikarp')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Gyarados')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Lapras')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Ditto')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Eevee')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Vaporeon')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Jolteon')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Flareon')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Porygon')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Omanyte')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Omastar')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Kabuto')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Kabutops')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Aerodactyl')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Snorlax')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Articuno')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Zapdos')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Moltres')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Dratini')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Dragonair')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Dragonite')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Mewtwo')
    cy.get('.guess-button > img').click()
    cy.get('.IZ-select__input > input').type('Mew')
    cy.get('.guess-button > img').click()
  }
  })

})

