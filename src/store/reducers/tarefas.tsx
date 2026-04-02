import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefasState = {
  itens: Tarefa[]
}
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
    },
    {
      titulo: 'Estudar Python',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: '',
      id: 4
    },
    {
      titulo: 'Estudar ReduxToolkit',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDO,
      descricao: 'CONFIGURAÇOES',
      id: 5
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa !== -1) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})
export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
