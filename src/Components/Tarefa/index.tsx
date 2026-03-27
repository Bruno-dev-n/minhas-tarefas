import * as S from './styles'
import { useState } from 'react'
import * as enums from '../../utils/enums/tarefa'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [Editar, setEditar] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
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
