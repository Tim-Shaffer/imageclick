import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import images from "./images.json";

class App extends Component {

  // set default state values for scoring and messages
  state = {
    images: images,
    topScore: 0,
    gameScore: 0,
    message: "Click an Image"
  };

  // method to render the Cards onto the page
  renderCards = (array) => {
    return this.state.images.map(image => (
      <section className='col s4 m3 l3' key={image.id} id={image.id}>
        <Card
          clicked={this.clicked}
          id={image.id}
          key={image.id}
          image={image.image}
        />
      </section>
      )
    )
  }

  // Fisher-Yates Shuffle  from (https://javascript.info/task/shuffle)
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // method to handle the click actions of a particular card 
  clicked = id => {

    // create a local array to hold the current state of the images array
    const images = this.state.images;

    // create an array to be equal to the filter for the clicked match
    const clickedMatch = images.filter(image => image.id === id);

    // If the matched entry has an isClicked value already of true  
    if (clickedMatch[0].isClicked){

        // reset all the isClicked values in the images array to false
        for (let i = 0 ; i < images.length ; i++){
            images[i].isClicked = false;
        }

        // Shuffle the array to be rendered in a random order (https://javascript.info/task/shuffle)
        // images.sort(function(a, b){return 0.5 - Math.random()});
        this.shuffle(this.state.images);

        // set the state variables to continue
        this.setState({message: "You already clicked that one!"});
        this.setState({gameScore: 0});
        this.setState({images});

    // Otherwise, the matched entry has an isClicked value of false (Good Guess)
    // check the current game score to make sure there are still images to pick
    // check to be sure the gameScore is less than 11 since if it was already 11, this would be the last possible guess
    } else if (this.state.gameScore < 11) {

        // set the isClicked value to true
        clickedMatch[0].isClicked = true;

        // create a variable to check the score against the top score 
        let score = this.state.gameScore + 1

        // update the current game score to the new score
        this.setState({gameScore: score});

        // is the new score better than the top Score
        if (score > this.state.topScore){
            this.setState({topScore: score });
        }

        // Shuffle the array to be rendered in a random order (https://javascript.info/task/shuffle)
        // images.sort(function(a, b){return 0.5 - Math.random()});
        this.shuffle(this.state.images);

        // set the state variables to continue
        this.setState({images});
        this.setState({message: "Keep Going!"});

      // reaching this else means that the guess was the last possible image to click and the user got them all!
      } else {
        
        // reset all the isClicked values in the images array to false to get ready for the next round
        for (let i = 0 ; i < images.length ; i++){
          images[i].clicked = false;
        }

        // Shuffle the array to be rendered in a random order (https://javascript.info/task/shuffle)
        // images.sort(function(a, b){return 0.5 - Math.random()});
        this.shuffle(this.state.images);

        // set the state variables to continue for a new game!
        this.setState({images});
        this.setState({gameScore: 0});
        this.setState({message: "WINNER!!!"});
        this.setState({topScore: 12});

    }
};

  render() {
    return (
      <Wrapper>
        <Navbar gameScore={this.state.gameScore} topScore={this.state.topScore} message={this.state.message}/>
        <Jumbotron />
        <div className="container row" >
          {this.renderCards(this.state.images)}
        </div>
        <Footer />
      </Wrapper>
    );
    
  }

};

export default App;
