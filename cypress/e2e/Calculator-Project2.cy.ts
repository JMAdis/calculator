describe('Calculator Project2', () => {
  
  beforeEach(() =>{
    cy.visit('http://localhost:5174/');
  })

  it('should have a heading', () => {
    const heading = cy.get('#heading');
    heading.should("contain", "Calculator")
  });

  it("should do addition", () =>{
    const numButton = cy.get('.calculator__buttons > :nth-child(6)');
    const addButton = cy.get('#addition');
    const numButton = cy.get('.calculator__buttons > :nth-child(8)');
    const equalsButton = cy.get('#equals');

    numButton.click();
    addButton.click();
    numButton.click();
    equalsButton.click();

    const screen = cy.get('.calculator__screen')
    screen.should("have.value","")
  });

});