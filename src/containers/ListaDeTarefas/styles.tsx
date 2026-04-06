import styled from 'styled-components'

// 1. O Container Principal (Main)
// Ele é o "palco" onde a lista de tarefas é exibida.
export const Container = styled.main`
  padding: 0 40px; /* 0 em cima/baixo e 40px nas laterais para respirar */

  /* 2. Altura da Viewport
     '100vh' garante que o container ocupe toda a altura da tela disponível. */
  height: 100vh;

  /* 3. Controle de Rolagem (Scroll)
    'overflow-y: scroll;' força a barra de rolagem vertical a aparecer.
    Isso é útil para que, mesmo com poucas tarefas, o layout não "pule"
     quando a lista crescer e a barra surgir. */
  overflow-y: scroll;
`
export const Resultado = styled.p`
  display: block;
  margin-top: 48px;
  margin-bottom: 48px;
  font-size: 18px;
  font-weight: 700;
`
