import Tarefa from '../../Components/Tarefa'
import { Container } from '../ListaDeTarefas/styles'

const ListaDeTarefas = () => (
  <main>
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>

      <ul>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
      </ul>
    </Container>
  </main>
)
export default ListaDeTarefas
