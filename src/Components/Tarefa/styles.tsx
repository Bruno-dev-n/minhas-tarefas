import styled from 'styled-components'
import variaves from '../../styles/variaves'
import * as enums from '../../utils/enums/tarefa'

// 1. Tipagem das Tags
// Definimos o que a Tag precisa receber para decidir qual cor exibir.
type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

// 2. Função de Lógica de Cores (Helper)
// Separar a lógica em uma função fora do componente deixa o código mais limpo.
function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return variaves.amarelo // Corrigido: era 'marelo'
    if (props.status === enums.Status.CONCLUIDO) return variaves.verde
  } else {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaves.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaves.amarelo2
  }
  return '#ccc' // Cor padrão caso não caia em nenhuma condição
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  /* Chamamos a função passando as props para definir o background dinâmico */
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b; /* Corrigido: faltava o '#' */
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1); /* Corrigido: pontuação e sintaxe */
  padding-top: 16px;
`

// 3. Herança de Estilos
// Criamos um botão base com os estilos comuns.
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

// Aqui usamos o styled(Botao) para "copiar" o estilo e apenas mudar a cor de fundo.
// Isso evita repetição de código (DRY - Don't Repeat Yourself).
export const botaoSalvat = styled(Botao)`
  background-color: ${variaves.verde};
`

export const botaoCancelarRemover = styled(Botao)`
  background-color: ${variaves.vermelho};
`
