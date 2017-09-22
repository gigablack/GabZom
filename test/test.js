const expect = require("chai").expect
const gabzom = require("..").default

describe("#gabzom",function(){
    it("si la palabra termina con 'ar', se le quitan esas dos letras.",function(){
        const translation = gabzom("Programar")
        expect(translation).to.equal("Program")
    })

    it("si la palabra inicia con Z, se le añade 'pe'  al final.",function(){
        const translation = gabzom("Zorro")
        const translation2 = gabzom("Zarpar")
        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })

    it("si la palabra traducida tiene 10 o mas letras se debe partir en dos y unir con un guion medio.",function(){
        const translation = gabzom("Abecedario")
        expect(translation).to.equal("Abece-dario")
    })

    it("por ultimo, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas.",function(){
        const translation = gabzom("Sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})
