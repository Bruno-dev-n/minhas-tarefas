import { useSelector } from 'react-redux'
import Tarefa from '../../Components/Tarefa'
import { Container, Resultado } from '../ListaDeTarefas/styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  // 1. Pegando dados do Redux
  // 'itens' são todas as tarefas. 'termo, criterio, valor' são as definições do filtro atual.
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  // 2. Função de Filtragem (A lógica do "Cérebro" da lista)
  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    // Filtro por Nome/Termo:
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }

    // Filtro por Categoria (Prioridade ou Status):
    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      )
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      )
    }

    return tarefasFiltradas
  }

  const exibeResultado = (quantidade: number) => {
    let mensagem = ''
    const complemetacao =
      termo !== undefined && termo.length > 0 ? ` com: "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) ${complemetacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${criterio}: ${valor}${complemetacao}"`
    }
    return mensagem
  }

  // 3. Execução da filtragem antes de renderizar
  const tarefas = filtraTarefas()
  const mensagem = exibeResultado(tarefas.length)

  return (
    <main>
      <Container>
        {/* 4. Feedback Visual
            É importante dizer ao usuário quantas tarefas foram encontradas
            para ele saber que o filtro funcionou. */}
        <Resultado>{mensagem}</Resultado>

        <ul>
          {/* 5. Mapeamento (Render List)
              O .map() transforma cada objeto de tarefa em um componente visual <Tarefa />.
              A 'key' deve ser sempre o ID único para o React não se perder ao reordenar a lista. */}
          {tarefas.map((t) => (
            <li key={t.id}>
              <Tarefa
                id={t.id}
                descricao={t.descricao}
                titulo={t.titulo}
                prioridade={t.prioridade}
                status={t.status}
              />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  )
}

export default ListaDeTarefas
