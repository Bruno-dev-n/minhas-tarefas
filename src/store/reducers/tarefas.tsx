import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'REVER AULA',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDO,
      'FAZER TAREFA',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDO,
      'INSTALAR AS FERRAMENTAS',
      3
    ),
    new Tarefa(
      'Estudar Python',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      4
    ),
    new Tarefa(
      'Estudar ReduxToolkit',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDO,
      'CONFIGURAÇOES',
      5
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})
export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
