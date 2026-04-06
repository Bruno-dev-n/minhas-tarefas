import styled, { createGlobalStyle } from 'styled-components'

// 1. Estilo Global (Reset CSS)
// O 'createGlobalStyle' aplica regras que valem para TODO o site,
// limpando os estilos padrão que os navegadores (Chrome, Edge) já trazem.
const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; // Garante que padding e border não aumentem o tamanho dos elementos
    font-family: Roboto, sans-serif;
    list-style: none; // Remove as "bolinhas" padrão de todas as listas (ul/li)
  }
`

// 2. Container de Layout (Grid Principal)
// Este é o componente que segura a 'BarraLateral' e a 'ListaDeTarefas'.
export const Container = styled.div`
  display: grid;

  /* Definimos duas colunas:
    - A primeira tem exatos 224px (tamanho fixo para a barra lateral).
     - A segunda é 'auto', ou seja, ocupa todo o resto do espaço da tela. */
  grid-template-columns: 224px auto;
`

export default EstiloGlobal
