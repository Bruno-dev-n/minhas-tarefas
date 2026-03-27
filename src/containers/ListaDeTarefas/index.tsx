import Tarefa from '../../Components/Tarefa'
import { Container } from '../ListaDeTarefas/styles'
import * as enums from '../../utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'estudar',
    descricao: 'aula sobre typescript',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'levar Produtos',
    descricao: 'perfumes de fulano',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDO
  },
  {
    titulo: 'ver a genda',
    descricao: 'entrar em contato com clientes',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDO
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
