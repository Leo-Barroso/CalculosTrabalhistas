/// <reference types="Cypress" />

describe('Suíte de testes da aplicação Cálculos Trabalhistas', () => {
    beforeEach(() => cy.visit('./src/CalculoSalario.html'))
    
    it('Verifica título da aplicação', () => {
        cy.title().should('eql', 'Cálculos Trabalhistas')
    })

    it('Calcular salário sem informar os dados obrigatórios', () => {
        cy.get('.btn-primary').click()
        cy.get('.show').should('be.visible')
    })

    it('Calcular salário com informações obrigatórias', () => {
        cy.get('#SalarioBruto').type(1302).should('have.value', '1302')
        cy.get('.btn-primary').click()
        cy.get('#SalarioBrutoInput').invoke('text').then(($value1) => {
            cy.get('#SalarioBrutoInput').invoke('text').then(($value2) =>{
                expect($value1).to.equal($value2)
            })
        })
    })
})