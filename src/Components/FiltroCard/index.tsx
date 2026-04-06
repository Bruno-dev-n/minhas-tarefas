// 1. Importações de Estilo e Tipos
import * as S from './style' // Importa os componentes estilizados (Styled Components) como 'S'
import * as enums from '../../utils/enums/tarefa' // Importa as opções fixas (ex: Pendente, Urgente)
import { useDispatch, useSelector } from 'react-redux' // Hook para "disparar" ações para o Redux
import { alterarFiltro } from '../../store/reducers/filtro' // A ação específica que queremos executar
import { RootReducer } from '../../store'

// 2. Definição das Props (Tipagem com TypeScript)
export type props = {
  legenda: string // O texto que aparece no card (ex: "pendentes", "urgentes")
  criterio: 'prioridade' | 'status' | 'todas' // Define por qual "coluna" vamos filtrar
  valor?: enums.Prioridade | enums.Status // O valor específico do filtro (ex: 'urgente' ou 'concluída')
}

const FiltroCard = ({ legenda, criterio, valor }: props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  // 4. Verificação de Estado Ativo
  // Compara se o critério e o valor deste card são os mesmos que estão no estado global do Redux.
  const verificarEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }
  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length

    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    // Aqui enviamos para o Redux o critério e o valor que este card representa.
    dispatch(alterarFiltro({ criterio, valor }))
  }
  const contador = contarTarefas()
  const ativo = verificarEstaAtivo()

  return (
    /* 5. Renderização e Estilização
      - $ativo: Usamos o sinal de '$' no Styled Components para indicar que é uma prop de estilo
      - onClick: Quando clicado, executa a função filtrar() definida acima.
    */
    <S.Card $ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
