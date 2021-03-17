// import App from 'next/app'
// import '../global-styles/header.css'
import '../styles/style.css'

//redux imports
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import withRedux from "next-redux-wrapper";
import rootReducer from '../store/rootReducer'
import {SET_STATE} from '../store/variables'

const store = createStore(rootReducer)
console.log(store)
function MyApp({ Component, pageProps }) {
    return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    ) 
    
  }

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);