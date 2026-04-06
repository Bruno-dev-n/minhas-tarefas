import { Provider } from 'react-redux' // 1. O "Garçom" do Redux: Ele entrega os dados para todos os componentes abaixo dele.
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles' // 2. Nossos estilos que definem o Reset CSS e o Grid de duas colunas.
import { store } from './store/index' // 3. A loja central que configuramos com os reducers de tarefas e filtros.

function App() {
  return (
    /* 4. O Provider:
      Ele deve envolver toda a aplicação. O atributo 'store={store}' é o que
       conecta o seu código de lógica com a interface visual. */
    <Provider store={store}>
      {/* 5. Estilo Global:
          Colocamos aqui para garantir que o 'Reset CSS' seja aplicado antes de qualquer componente. */}
      <EstiloGlobal />

      {/* 6. O Layout Principal:
          O <Container> (que configuramos com display: grid) organiza a
          BarraLateral (224px) e a ListaDeTarefas (auto) lado a lado. */}
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
