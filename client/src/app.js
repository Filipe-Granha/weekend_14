import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './containers/GameBoard.jsx'

window.onload = function(){
  ReactDOM.render(
    <GameBoard/>,
    document.getElementById('app')
  );
}
