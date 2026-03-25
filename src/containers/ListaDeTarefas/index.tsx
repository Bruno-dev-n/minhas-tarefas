import Tarefa from '../../Components/Tarefa'
import { Container } from '../ListaDeTarefas/styles'

const tarefas = [
  {
    titulo: 'estudar',
    descricao: 'aula sobre typescript',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'levar Produtos',
    descricao: 'perfumes de fulano',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'ver a genda',
    descricao: 'entrar em contato com clientes',
    prioridade: 'urgente',
    status: 'concluido'
  }
]
const ListaDeTarefas = () => (
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
export default ListaDeTarefas
