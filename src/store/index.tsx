import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

// 1. Configuração da Store
// O 'configureStore' é uma função do Redux Toolkit que configura a loja
// automaticamente com boas práticas (como o Redux DevTools habilitado).
export const store = configureStore({
  reducer: {
    // 2. Combinando Reducers
    // Aqui definimos os nomes das "chaves" do nosso estado global.
    // O que estiver em 'tarefasReducer' será acessado via state.tarefas
    tarefas: tarefasReducer,
    // O que estiver em 'filtroReducer' será acessado via state.filtro
    filtro: filtroReducer
  }
})

// 3. Tipagem Global (O "Pulo do Gato" do TypeScript)
// 'ReturnType<typeof store.getState>' extrai automaticamente o tipo de TODO o nosso estado.
// Isso é o que permite que o seu 'useSelector' saiba exatamente quais dados existem
// sem você precisar escrever os tipos na mão toda vez.
export type RootReducer = ReturnType<typeof store.getState>
