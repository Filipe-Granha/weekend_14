import React from 'react';
import Console from '../components/Console';
import PictureList from '../components/PictureList';
import Picture from '../components/Picture';


const pictures = [
  {id: 1, smile: "yes", img: "../pictures/man_smile_1.jpg", gender: "male", glasses: "no"},
  {id: 2, smile: "yes", img: "../pictures/man_smile_2.jpg", gender: "male", glasses: "yes"},
  {id: 3, smile: "yes", img: "../pictures/woman_smile_1.jpg", gender: "female", glasses: "yes"},
  {id: 4, smile: "yes", img: "../pictures/woman_smile_2.jpg", gender: "female", glasses: "no"},
  {id: 5, smile: "no", img: "../pictures/man_no_smile_1.jpg", gender: "male", glasses: "no"},
  {id: 6, smile: "no", img: "../pictures/woman_no_smile_1.jpg", gender: "female", glasses: "no"}
];



class GameBoard extends React.Component {
  
  constructor(props) {
    super(props)
    
  };


render() {
  return (
    <div>
      <h2 className="title-h2">Who is - Game</h2>
      
    </div>
  )
}



}

export default GameBoard;