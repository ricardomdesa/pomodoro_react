export function tempoParaSegundos(tempo: string) {
    const [horas = '0', min = '0', sec = '0'] = tempo.split(":")

    const horasEmSec = Number(horas) * 3600
    const minInSec = Number(min) * 60
    return horasEmSec + minInSec + Number(sec)
}

export const prepare_min_sec = (tempo: number) => {
    const min = Math.floor(tempo / 60)

    const sec = tempo % 60
    let minDezena = "0"
    let minUnidade = "0"
    let secDezena = "0"
    let secUnidade = "0"
    secDezena = (Math.floor(sec / 10)).toString()
    secUnidade = (sec % 10).toString()
    minDezena = (Math.floor(min / 10)).toString()
    minUnidade = (min % 10).toString()
    return { secDezena, secUnidade, minDezena, minUnidade }
}