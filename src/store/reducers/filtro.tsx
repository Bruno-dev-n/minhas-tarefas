import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tarefa'

// 1. Definição do Tipo do Estado
// Isso diz ao TypeScript exatamente o que o nosso filtro pode guardar.
type FiltroState = {
  termo?: string // O texto digitado na busca
  criterio: 'prioridade' | 'status' | 'todas' // A categoria do filtro
  valor?: enums.Prioridade | enums.Status // O valor específico (ex: 'urgente')
}

// 2. Estado Inicial
// Como o filtro deve estar assim que o app abre?
// Começamos com busca vazia e mostrando 'todas' as tarefas.
const initialState: FiltroState = {
  termo: '',
  criterio: 'todas',
  valor: undefined
}

// 3. Criação do Slice (A "Fatia" de Estado)
const filtroSlice = createSlice({
  name: 'filtro', // Nome identificador no Redux DevTools
  initialState,
  reducers: {
    // Ação para atualizar apenas o texto da busca
    alteraTermo: (state, action: PayloadAction<string>) => {
      // No RTK, podemos "mutar" o estado diretamente graças à biblioteca Immer
      state.termo = action.payload
    },

    // Ação para mudar o critério (ex: clicou no card "Urgente")
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
      // Dica: Aqui você também poderia resetar o 'termo' se quisesse
      // que a busca limpasse ao clicar em um filtro lateral.
    }
  }
})

// 4. Exportação das Ações e do Reducer
// 'actions' são usadas pelos componentes (dispatch)
export const { alteraTermo, alterarFiltro } = filtroSlice.actions

// 'reducer' vai para o arquivo da Store principal
export default filtroSlice.reducer
