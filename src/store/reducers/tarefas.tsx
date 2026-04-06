import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'
import * as enums from '../../utils/enums/tarefa'

// 1. Tipagem do Estado
// Definimos que este pedaço do Redux terá um array chamado 'itens' contendo objetos do tipo 'Tarefa'.
type TarefasState = {
  itens: Tarefa[]
}

// 2. Estado Inicial (Mock Data)
// Aqui você pré-carregou algumas tarefas para não começar com a tela vazia.
const initialState: TarefasState = {
  itens: [
    {
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: 'REVER AULA',
      id: 1
    },
    {
      titulo: 'Estudar TypeScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDO,
      descricao: 'FAZER TAREFA',
      id: 2
    },
    {
      titulo: 'Estudar React',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDO,
      descricao: 'INSTALAR AS FERRAMENTAS',
      id: 3
    }
    // ... outras tarefas do seu código
  ]
}

// 3. O Slice de Tarefas
const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    // Ação de Remover:
    // Recebe o ID (number) e cria uma nova lista SEM a tarefa que tem esse ID.
    remover: (state, action: PayloadAction<number>) => {
      // O .filter() percorre o array e mantém apenas quem o ID é diferente do enviado no payload.
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },

    // Ação de Editar:
    // Recebe o objeto da tarefa completo e atualizado.
    editar: (state, action: PayloadAction<Tarefa>) => {
      // Primeiro, encontramos a posição (índice) da tarefa no nosso array global.
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      // Se o índice for encontrado (diferente de -1), substituímos a tarefa antiga pela nova.
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

// 4. Exportação das ações para usar nos botões de "Remover" e "Salvar" dos componentes.
export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
