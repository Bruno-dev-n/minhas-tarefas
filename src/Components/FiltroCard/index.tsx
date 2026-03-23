import * as S from './style'
export type props = {
  ativo?: boolean
  contador: number
  legenda: string
}
const FiltroCard = ({ ativo, contador, legenda }: props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)
export default FiltroCard
