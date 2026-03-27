import { useSelector } from 'react-redux'
import Tarefa from '../../Components/Tarefa'
import { Container } from '../ListaDeTarefas/styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <main>
      <Container>
        <p>
          2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
        </p>

        <ul>
          {tarefas.map((t) => (
            <li key={t.titulo}>
              <Tarefa
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
