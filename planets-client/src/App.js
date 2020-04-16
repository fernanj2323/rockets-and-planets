// ./react-redux-client/src/App.js

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

import {  __RouterContext } from "react-router-dom";
import React, {  useContext  }  from "react";


import './components/App.css';
import img from './assets/planets-card.jpg'
import { useTransition, animated } from "react-spring";
import  Navbah  from './components/Navbah.js'




//nos traemos el store en una constante 
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);



const  backgroundI =() => { 
  return{
    filter: 'blur(1px)',
    width: '100vw',
    height: '100%',
    // 'overflow-x': 'hidden',
    position: 'fixed',
    top:'0px',
    left:'0px',
    'zIndex':'-10'
  }
}


function App(){
    //animation 
    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
      from: { opacity: 0, transform: "translate(100%, 0)" },
      enter: { opacity: 1, transform: "translate(0%, 0)" },
      leave: { opacity: 0, transform: "translate(-50%, 0)" },
   
    });

    return (
      <>
      <Provider store={store}>
        <div>
        <Navbah />
              <main className="container-fluid">
                {transitions.map(({ item, props, key }) => (
                  <animated.div key={key} style={props}>
                      <Router history={history} routes={routes} />
                  </animated.div>
                ))}

                <img src={img} style={backgroundI()} alt="logo" />

            </main>
        </div>
      </Provider>
      

      </>
    );
  
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App;
