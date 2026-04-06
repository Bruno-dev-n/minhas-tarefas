import styled from 'styled-components'

// 1. Estilização da Barra Lateral (Aside)
export const Aside = styled.aside`
  padding: 16px;
  height: 100vh; /* Corrigido: era 'heigth'. Define a altura como 100% da tela visível */
  background-color: #eee;
`

// 2. Grid de Filtros
// Aqui você usou uma técnica excelente: o CSS Grid!
// '1fr 1fr' divide o espaço em duas colunas de tamanhos iguais.
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px; /* Espaçamento entre os cards de filtro */
  margin-top: 16px;
`

// 3. Estilização do Campo de Busca (Input)
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: 700; /* Corrigido: era 'font-weigth'. Deixa o texto em negrito */
  color: #666666;
  width: 100%; /* Garante que o input ocupe toda a largura disponível no Aside */
  border: 1px solid #ccc; /* Dica: adicionei uma bordinha leve para melhor visibilidade */
`
