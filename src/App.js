import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"
import Recipe from "./components/Recipes"
import 'bootstrap/dist/css/bootstrap.min.css'

const API_KEY = "2eb9e17ce9d6b9470a803359b0ec8350";

class App extends Component {

  state={
         recipe:[]

  }

getRecipe = async (e) => {

  const recipeName = e.target.elements.recipeName.value;
  e.preventDefault();
 const api_call=await fetch
 (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);

 const data = await api_call.json();
 this.setState({ recipe:data.recipes });

}

componentDidMount = () => {
  const json = localStorage.getItem("recipes");
  const recipe =JSON.parse(json);
  this.setState({ recipes:recipe });

}

  componentDidUpdate = () =>{

    const recipe = JSON.stringify(this.state.recipe);
    localStorage.setItem("recipes",recipe)


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2 className="App-title">Recipe Search</h2><br/> 
        </header>
        <Form getRecipe={this.getRecipe} />
       < Recipe recipes={this.state.recipe}/>
  
      </div>
    );
  }
}

export default App;
