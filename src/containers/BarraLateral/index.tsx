import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'
const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Procurar" />
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
export default BarraLateral
