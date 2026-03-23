import * as S from './style'
export type props = {
  ativo?: boolean
}
const FiltroCard = (props: props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>3</S.Contador>
    <S.Label>Pendentes</S.Label>
  </S.Card>
)
export default FiltroCard
