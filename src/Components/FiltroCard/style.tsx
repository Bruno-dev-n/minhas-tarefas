import styled from 'styled-components'

// 1. Tipagem para o Styled Component
// Usamos o '$' antes do nome da prop (transient props) para que o React saiba
// que essa variável é APENAS para o CSS e não deve aparecer no HTML final.
type props = {
  $ativo: boolean
}

// 2. Componente de Container (Card)
// Aqui usamos uma função para verificar se o card está ativo.
// Se estiver ativo (true), ele ganha cores de destaque; se não, cores neutras.
export const Card = styled.div<props>`
  padding: 8px;

  /* Lógica condicional: se props.$ativo for verdadeiro, borda verde, senão, cinza */
  border: 1px solid ${(props) => (props.$ativo ? '#44ff1e' : '#a1a1a1')};

  /* Lógica condicional: fundo branco se ativo, cinza muito claro se inativo */
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};

  /* Lógica condicional: texto verde se ativo, cinza escuro se inativo */
  color: ${(props) => (props.$ativo ? '#44ff1e' : ' #5e5e5e')};

  border-radius: 8px;
  cursor: pointer; /* Dica: adicionei isso para mostrar a "mãozinha" ao passar o mouse */
`

// 3. Estilo do Número (Contador)
export const Contador = styled.span`
  font-weight: 700;
  font-size: 24px;
  display: block; /* Ocupa a linha toda, jogando a legenda para baixo */
`

// 4. Estilo do Texto (Label)
export const Label = styled.span`
  font-size: 14px; /* Corrigido: antes estava com ';' por engano */
`
