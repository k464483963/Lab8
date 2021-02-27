

describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  it('Slider changes when volume input changes', () => {
    //expect(true).to.equal(true);
    cy.get('#volume-number').clear().type('75');

    cy.get('#volume-slider').then($el =>{
      expect($el).to.have.value(75);
    })
  });
  it('volume changes when slider input changes', () => {
    //expect(true).to.equal(true);
    cy.get('#volume-slider').invoke('val',33).trigger('input')

    cy.get('#volume-number').then($el =>{
      expect($el).to.have.value(33);
    })
  });
  it('volume changes when slider input changes', () => {
  
    cy.get('#volume-slider').invoke('val',33).trigger('input')

    cy.get('#horn-sound').then($el =>{
      expect($el).to.have.prop('volume',0.33);
    })
  });
  it('change the radio button', () => {
    
    //cy.get('#honk-btn').trigger('mousedown');

    cy.get('#radio-party-horn').trigger('change')
    
    cy.get('#horn-sound').then($el =>{
      expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3');
    })
    cy.get('#sound-image').then($el =>{
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg');
    })
  });
  it('change the volume image 3', () => {

    cy.get('#volume-number').invoke('val',67).trigger('input')
    
    cy.get('#volume-image').then($el =>{
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg');
    })
    
  });
  it('change the volume image 2', () => {

    cy.get('#volume-number').invoke('val',50).trigger('input')
    
    cy.get('#volume-image').then($el =>{
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg');
    })
    
  });
  it('change the volume image 1', () => {

    cy.get('#volume-number').invoke('val',33).trigger('input')
    
    cy.get('#volume-image').then($el =>{
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg');
    })
    
  });
  it('change the volume image 0', () => {

    cy.get('#volume-number').invoke('val',0).trigger('input')
    
    cy.get('#volume-image').then($el =>{
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-0.svg');
    })
    
  });
  it('change the text box is 0, button disable', () => {

    cy.get('#volume-number').invoke('val',0).trigger('input')
    
    cy.get('#honk-btn').then($el =>{
      expect($el).to.have.prop('disabled',true);
    })
    
  });
  it('change the text box is empty, button disable', () => {

    cy.get('#volume-number').invoke('val','').trigger('input')
    
    cy.get('#honk-btn').then($el =>{
      expect($el).to.have.prop('disabled',true);
    })
    
  });
  it('enter the number out of range', () => {

    cy.get('#volume-number').invoke('val',111).trigger('input').invalid
    
    // cy.get('#honk-btn').then($el =>{
    //   expect($el).to.have.attr(invalid);
    // })
    
  });

});
