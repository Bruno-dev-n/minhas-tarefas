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
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {Editar ? (
          <>
            <S.botaoSalvat>Salvar</S.botaoSalvat>
            <S.botaoCancelarRemover onClick={() => setEditar(false)}>
              Cancelar
            </S.botaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditar(true)}>Editar</S.Botao>
            <S.botaoCancelarRemover>Remover</S.botaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
