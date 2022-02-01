import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { commanders } from './components/card-data/card.data';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      commanders: commanders,
      searchField: ''
    }

  }


  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { commanders, searchField } = this.state;
    const filteredCommander = commanders.filter(commander => commander.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <h1>Commander Rolodex</h1>
        <SearchBox 
        placeholder="Search for a Commander"
        handleChange={ this.handleChange }
        ></SearchBox>
        <CardList commanders={filteredCommander}></CardList>        
      </div>
    );
  }
}

export default App;
