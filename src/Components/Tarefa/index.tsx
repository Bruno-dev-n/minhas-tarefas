import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/tarefas'
import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import TarefaClass from '../../models/tarefa'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [Editar, setEditar] = useState(false)
  const [descricao, setDescricao] = useState('')
  useEffect(() => {
    if (descricaoOriginal.length > 0) setDescricao(descricaoOriginal)
  }, [descricaoOriginal])
  function cancelarEdicao() {
    setEditar(false)
    setDescricao(descricaoOriginal)
  }
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!Editar}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {Editar ? (
          <>
            <S.botaoSalvat
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao,
                    id
                  })
                )
                setEditar(false)
              }}
            >
              Salvar
            </S.botaoSalvat>
            <S.botaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.botaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditar(true)}>Editar</S.Botao>
            <S.botaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.botaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
