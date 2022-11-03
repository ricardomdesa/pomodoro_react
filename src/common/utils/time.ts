export function tempoParaSegundos(tempo: string) {
    const [horas = '0', min = '0', sec = '0'] = tempo.split(":")

    const horasEmSec = Number(horas) * 3600
    const minInSec = Number(min) * 60
    return horasEmSec + minInSec + Number(sec)
}