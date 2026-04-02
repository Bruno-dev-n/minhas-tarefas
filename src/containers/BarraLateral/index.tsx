import FiltroCard from '../../Components/FiltroCard'
import { alteraTermo } from '../../store/reducers/filtro'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Procurar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="Pendentes" contador={1} />
          <FiltroCard legenda="Urgente" contador={3} />
          <FiltroCard legenda="Importante" contador={4} />
          <FiltroCard legenda="Normal" contador={5} />
          <FiltroCard legenda="Concluidas" contador={2} />
          <FiltroCard ativo legenda="Total" contador={13} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default BarraLateral
