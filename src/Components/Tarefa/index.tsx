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
  descricao: descricaoOriginal, // Renomeamos para evitar conflito com o estado local
  id
}: Props) => {
  const dispatch = useDispatch()

  // 1. Estados Locais
  // 'estaEditando' define se mostramos o botão "Salvar" ou "Editar"
  const [estaEditando, setEstaEditando] = useState(false)
  // 'descricao' guarda o texto que o usuário está digitando no momento
  const [descricao, setDescricao] = useState('')

  // 2. Sincronização com useEffect
  // Se a descrição que vem do Redux mudar, atualizamos o nosso campo de texto local.
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  // 3. Função para Cancelar
  // Volta o modo de edição para 'false' e restaura o texto original
  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>

      {/* 4. Tags de Status e Prioridade */}
      {/* Passamos o valor para o Styled Components mudar a cor da tag (ex: vermelho para urgente) */}
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>

      {/* 5. Área de Texto Dinâmica */}
      {/* 'disabled={!estaEditando}' bloqueia a escrita se não clicarmos em editar */}
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />

      <S.BarraAcoes>
        {/* 6. Renderização Condicional */}
        {/* Se estiver no modo de edição, mostra Salvar/Cancelar. Se não, Editar/Remover */}
        {estaEditando ? (
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
                setEstaEditando(false) // Sai do modo de edição após salvar
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
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
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
