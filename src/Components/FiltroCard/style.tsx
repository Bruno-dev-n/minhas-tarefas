import styled from 'styled-components'
import { props } from '.'
type SemLegendaEContador = Omit<props, 'contador' | 'legenda'> & {
  $ativo?: boolean
}
export const Card = styled.div<SemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.$ativo ? '#44ff1e' : '#a1a1a1')};
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.$ativo ? '#44ff1e' : ' #5e5e5e')};
  border-radius: 8px;
`
export const Contador = styled.span`
  font-weight: 700;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size; 14px;
`
