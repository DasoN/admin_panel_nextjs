// import App from 'next/app'
// import '../global-styles/header.css'
import '../styles/style.css'
import {SET_REGISTRATION, SET_LOGIN} from '../store/variables'

//redux imports
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import withRedux from "next-redux-wrapper";
import rootReducer from '../store/rootReducer'

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }) {
    return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    ) 
    
  }

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);