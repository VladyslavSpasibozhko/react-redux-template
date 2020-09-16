import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../store/store'
import Header from './Header/index'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Body />
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}

export default App
