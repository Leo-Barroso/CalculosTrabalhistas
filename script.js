

function CalcularSalario() {
    var SalarioBruto = Number(document.getElementById('SalarioBruto').value)
    var SalarioBrutoInput = document.getElementById('SalarioBruto')
    var OutrosDescontos = Number(document.getElementById('OutrosDescontos').value)
    var OutrasReceitas = Number(document.getElementById('OutrasReceitas').value)
    const AliquotaINSS = [0.075, 0.09, 0.12, 0.14]
    const ValorDeducaoINSS = [0.00, 16.50, 82.60, 148.71] 
    var ValorDescontoINSS;
    var SalarioLiquido;
    var OutrosDescontos;
    var TotalDescontos;

    if (!OutrosDescontos) {
        OutrosDescontos = 0.00;
    }

    if (!OutrasReceitas) {
        OutrasReceitas = 0.00;
    }

    if (!SalarioBrutoInput.value) {
        $("#modal-1").modal("show");    
    }
    


    if (SalarioBruto <= 1100.00) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[0] - ValorDeducaoINSS[0]
        document.getElementById('AliquotaINSS').innerText = (AliquotaINSS[0] * 100) + '%'
        document.getElementById('DescontoINSS').innerText = ValorDescontoINSS.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    } else if (SalarioBruto >= 1100.01 && SalarioBruto <= 2203.48) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[1] - ValorDeducaoINSS[1] 
        document.getElementById('AliquotaINSS').innerText = (AliquotaINSS[1] * 100).toFixed() + '%'
        document.getElementById('DescontoINSS').innerText = ValorDescontoINSS.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    } else if (SalarioBruto >= 2203.49 && SalarioBruto <= 3305.22) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[2] - ValorDeducaoINSS[2] 
        document.getElementById('AliquotaINSS').innerText = (AliquotaINSS[2] * 100).toFixed() + '%'
        document.getElementById('DescontoINSS').innerText = ValorDescontoINSS.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    } else if (SalarioBruto >= 3305.23 && SalarioBruto <= 6433.57) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[3] - ValorDeducaoINSS[3] 
        document.getElementById('AliquotaINSS').innerText = (AliquotaINSS[3] * 100).toFixed() + '%'
        document.getElementById('DescontoINSS').innerText = ValorDescontoINSS.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    } else if (SalarioBruto > 6433.58) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[3] - ValorDeducaoINSS[3]
        
        if (ValorDescontoINSS >= 751.99) {
            ValorDescontoINSS = 751.99
        }

        document.getElementById('AliquotaINSS').innerText = (AliquotaINSS[3] * 100).toFixed() + '%'
        document.getElementById('DescontoINSS').innerText = ValorDescontoINSS.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    }

    SalarioLiquido = SalarioBruto - ValorDescontoINSS 
    SalarioLiquido = SalarioLiquido - CalcularIRRF(SalarioLiquido) + OutrasReceitas - OutrosDescontos
    TotalDescontos = ValorDescontoINSS + OutrosDescontos + ValorDescontoIRRF;
    window.document.getElementById('SalarioLiquido').innerHTML = SalarioLiquido.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    window.document.getElementById('SalarioBrutoInput').innerHTML = SalarioBruto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    window.document.getElementById('OutrosDescontosInput').innerHTML = OutrosDescontos.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    window.document.getElementById('TotalDescontos').innerHTML = TotalDescontos.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    window.document.getElementById('OutrasReceitasInput').innerHTML = OutrasReceitas.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
}



 
var ValorDescontoIRRF;

function CalcularIRRF(BaseDeCalculo) {
    const AliquotaIRRF = [0.00, 0.075, 0.15,0.225, 0.275];
    const ValorDeducaoIRRF = [0.00, 142.80, 354.80, 636.13, 869.36]

    if (BaseDeCalculo <= 1903.98) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[0] - ValorDeducaoIRRF[0]
        document.getElementById('AliquotaIRRF').innerText = (AliquotaIRRF[0] * 100) + '%'
        document.getElementById('DescontoIRRF').innerText = ValorDescontoIRRF.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    } else if (BaseDeCalculo >= 1903.99 && BaseDeCalculo <= 2826.65) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[1] - ValorDeducaoIRRF[1]
        document.getElementById('AliquotaIRRF').innerText = (AliquotaIRRF[1] * 100) + '%'
        document.getElementById('DescontoIRRF').innerText = ValorDescontoIRRF.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    } else if (BaseDeCalculo >= 2826.66 && BaseDeCalculo <= 3751.05) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[2] - ValorDeducaoIRRF[2]
        document.getElementById('AliquotaIRRF').innerText = (AliquotaIRRF[2] * 100) + '%'
        document.getElementById('DescontoIRRF').innerText = ValorDescontoIRRF.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    } else if (BaseDeCalculo >= 3751.06 && BaseDeCalculo <= 4664.68) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[3] - ValorDeducaoIRRF[3]
        document.getElementById('AliquotaIRRF').innerText = (AliquotaIRRF[3] * 100) + '%'
        document.getElementById('DescontoIRRF').innerText = ValorDescontoIRRF.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    } else if (BaseDeCalculo > 4664.68) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[4] - ValorDeducaoIRRF[4]
        document.getElementById('AliquotaIRRF').innerText = (AliquotaIRRF[4] * 100).toFixed(1) + '%'
        document.getElementById('DescontoIRRF').innerText = ValorDescontoIRRF.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    }
    return ValorDescontoIRRF;
}

function Relatorio() {
    $("#modal-2").modal("show");
}

function LimparTabela() {
    window.location.reload();
}

