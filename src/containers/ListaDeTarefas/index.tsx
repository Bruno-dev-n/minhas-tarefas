import { useSelector } from 'react-redux'
import Tarefa from '../../Components/Tarefa'
import { Container } from '../ListaDeTarefas/styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const filtroTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) !== -1
    )
  }
  return (
    <main>
      <Container>
        <p>
          2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
        </p>

        <ul>
          {filtroTarefas().map((t) => (
            <li key={t.titulo}>
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
