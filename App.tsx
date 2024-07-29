import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import MainContainer from './src/MainContainer'

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  )
}

export default App
