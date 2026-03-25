import * as S from './styles'
import { useState } from 'react'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [Editar, setEditar] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag>{prioridade}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {Editar ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEditar(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditar(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
