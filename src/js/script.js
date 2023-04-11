function formatPercent(value) {
    value = value.toFixed() + '%'
    return value
}

function formatValue(value) {
    value = value.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    return value
}

function CalcularSalario() {
    var SalarioBruto = Number(document.getElementById('SalarioBruto').value)
    var SalarioBrutoInput = document.getElementById('SalarioBruto')
    var OutrosDescontos = Number(document.getElementById('OutrosDescontos').value)
    var OutrasReceitas = Number(document.getElementById('OutrasReceitas').value)
    // var ValeTransporte = Number(document.getElementById('valeTransporte').value)
    const AliquotaINSS = [0.075, 0.09, 0.12, 0.14]
    const ValorDeducaoINSS = [0.00, 19.53, 96.67, 173.81]
    var ValorDescontoINSS;
    var SalarioLiquido;
    var OutrosDescontos;
    var TotalDescontos;

    const faixa_01 = SalarioBruto <= 1302.00;
    const faixa_02 = SalarioBruto >= 1302.01 && SalarioBruto <= 2571.29;
    const faixa_03 = SalarioBruto >= 2571.30 && SalarioBruto <= 3856.94;
    const faixa_04 = SalarioBruto >= 3856.95 && SalarioBruto <= 7507.49;
    const faixa_05 = SalarioBruto > 7507.49;

    if (!OutrosDescontos) {
        OutrosDescontos = 0.00;
    }

    if (!OutrasReceitas) {
        OutrasReceitas = 0.00;
    }

    if (!SalarioBrutoInput.value) {
        $("#modal-1").modal("show");   
        return false 
    }

    if (SalarioBrutoInput.value < faixa_01) {
        $("#modal-2").modal("show");
        return false 
    }
    
    if (faixa_01) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[0] - ValorDeducaoINSS[0]
        document.getElementById('AliquotaINSS').innerText = formatPercent((AliquotaINSS[0] * 100))
        document.getElementById('DescontoINSS').innerText = formatValue(ValorDescontoINSS)

    } else if (faixa_02) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[1] - ValorDeducaoINSS[1] 
        document.getElementById('AliquotaINSS').innerText = formatPercent((AliquotaINSS[1] * 100))
        document.getElementById('DescontoINSS').innerText = formatValue(ValorDescontoINSS)

    } else if (faixa_03) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[2] - ValorDeducaoINSS[2] 
        document.getElementById('AliquotaINSS').innerText = formatPercent((AliquotaINSS[2] * 100))
        document.getElementById('DescontoINSS').innerText = formatValue(ValorDescontoINSS)

    } else if (faixa_04) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[3] - ValorDeducaoINSS[3] 
        document.getElementById('AliquotaINSS').innerText = formatPercent((AliquotaINSS[3] * 100))
        document.getElementById('DescontoINSS').innerText = formatValue(ValorDescontoINSS)

    } else if (faixa_05) {
        ValorDescontoINSS = SalarioBruto * AliquotaINSS[3] - ValorDeducaoINSS[3]
        
        if (ValorDescontoINSS >= 751.99) {
            ValorDescontoINSS = 751.99
        }

        document.getElementById('AliquotaINSS').innerText = formatPercent((AliquotaINSS[3] * 100))
        document.getElementById('DescontoINSS').innerText = formatValue(ValorDescontoINSS)
    }

    SalarioLiquido = SalarioBruto - ValorDescontoINSS 
    SalarioLiquido = SalarioLiquido - CalcularIRRF(SalarioLiquido) + OutrasReceitas - OutrosDescontos
    // ValeTransporte = (SalarioBruto * ValeTransporte) / 100
    TotalDescontos = ValorDescontoINSS + OutrosDescontos + ValorDescontoIRRF;

    window.document.getElementById('SalarioLiquido').innerHTML = formatValue(SalarioLiquido)
    window.document.getElementById('SalarioBrutoInput').innerHTML = formatValue(SalarioBruto)
    window.document.getElementById('OutrosDescontosInput').innerHTML = formatValue(OutrosDescontos)
    window.document.getElementById('TotalDescontos').innerHTML = formatValue(TotalDescontos)
    window.document.getElementById('OutrasReceitasInput').innerHTML = formatValue(OutrasReceitas)
    // window.document.getElementById('ValeTransporteInput').innerHTML = formatValue(ValeTransporte)
}

var ValorDescontoIRRF;

function CalcularIRRF(BaseDeCalculo) {
    const AliquotaIRRF = [0.00, 0.075, 0.15,0.225, 0.275];
    const ValorDeducaoIRRF = [0.00, 142.80, 354.80, 636.13, 869.36]

    const base_01 = BaseDeCalculo <= 1903.98
    const base_02 = BaseDeCalculo >= 1903.99 && BaseDeCalculo <= 2826.65
    const base_03 = BaseDeCalculo >= 2826.66 && BaseDeCalculo <= 3751.05
    const base_04 = BaseDeCalculo >= 3751.06 && BaseDeCalculo <= 4664.68
    const base_05 = BaseDeCalculo > 4664.68

    if (base_01) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[0] - ValorDeducaoIRRF[0]
        document.getElementById('AliquotaIRRF').innerText = formatPercent((AliquotaIRRF[0] * 100))
        document.getElementById('DescontoIRRF').innerText = formatValue(ValorDescontoIRRF)

    } else if (base_02) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[1] - ValorDeducaoIRRF[1]
        document.getElementById('AliquotaIRRF').innerText = formatPercent((AliquotaIRRF[1] * 100))
        document.getElementById('DescontoIRRF').innerText = formatValue(ValorDescontoIRRF)

    } else if (base_03) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[2] - ValorDeducaoIRRF[2]
        document.getElementById('AliquotaIRRF').innerText = formatPercent((AliquotaIRRF[2] * 100))
        document.getElementById('DescontoIRRF').innerText = formatValue(ValorDescontoIRRF)

    } else if (base_04) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[3] - ValorDeducaoIRRF[3]
        document.getElementById('AliquotaIRRF').innerText = formatPercent((AliquotaIRRF[3] * 100))
        document.getElementById('DescontoIRRF').innerText = formatValue(ValorDescontoIRRF)

    } else if (base_05) {
        ValorDescontoIRRF = BaseDeCalculo * AliquotaIRRF[4] - ValorDeducaoIRRF[4]
        document.getElementById('AliquotaIRRF').innerText = formatPercent((AliquotaIRRF[4] * 100))
        document.getElementById('DescontoIRRF').innerText = formatValue(ValorDescontoIRRF)

    }
    return ValorDescontoIRRF;
}

function Relatorio() {
    $("#modal-3").modal("show");
}

function LimparTabela() {
    window.location.reload();
}





