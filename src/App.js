import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonChange = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="square" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonChange={this.onButtonChange}
        />
          {/*<FaceRecognition />*/}
      </div>
    )
  }

}

export default App;
