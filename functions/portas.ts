import PortaModel from "../model/porta";

export function criarPortas (qtde: number, selecionada: number): PortaModel[] {
    return Array.from({length: qtde}, (_,i) => {
            const numero = i + 1
            const temPresente = numero === selecionada
            return new PortaModel(numero, temPresente)
        })
}

export function atualizarPortas(portas: PortaModel[], modificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === modificada.numero

        if(igualModificada) {
            return modificada
        }else {
            return modificada.aberta ? portaAtual : portaAtual.desmarcar()
        }
    })
}