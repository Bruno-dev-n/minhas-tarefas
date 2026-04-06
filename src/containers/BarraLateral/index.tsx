import FiltroCard from '../../Components/FiltroCard'
import { alteraTermo } from '../../store/reducers/filtro'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()

  // 1. Selecionando o Termo de Busca
  // Pegamos o 'termo' diretamente do estado global para que o input mostre o que está no Redux.
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {/* 2. Campo de Busca (Input Controlado)
            Cada vez que você digita, o onChange dispara um dispatch que atualiza
            o estado global. Isso faz com que a lista de tarefas reaja em tempo real. */}
        <S.Campo
          type="text"
          placeholder="Procurar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />

        {/* 3. Grade de Filtros
            Aqui você reutiliza o componente FiltroCard várias vezes, apenas mudando as 'props'.
            Isso é a essência do React: Componentização e Reutilização. */}
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="Pendentes"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="Urgente"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="Importante"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="Normal"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDO}
            criterio="status"
            legenda="Concluídas"
          />
          {/* Este card específico não tem 'valor' pois o critério é 'todas' */}
          <FiltroCard legenda="Total" criterio="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
