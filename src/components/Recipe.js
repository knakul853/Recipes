import React from "react"

import { Link } from "react-router-dom"


const API_KEY = "2eb9e17ce9d6b9470a803359b0ec8350";


class Recipe extends React.Component
{
    state = {
        activeRecipe:[]
    }

    componentDidMount = async() => {
        const title = this.props.location.state.recipe;
 const req=await fetch
 (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

 const res = await req.json();
 this.setState({ activeRecipe:res.recipes[0] });

    }

    render(){
        const recipe = this.state.activeRecipe;
        {console.log(recipe)}
        return(
            <div className="container">
            {
                    this.state.activeRecipe.length !==0 && 
                <div className="active-recipe">
                    <img className="active-recipe__img"
                    src = {recipe.image_url}
                    alt = {recipe.title}
                    />
                    <h3 className="active-recipe__title"> { recipe.title } </h3>
                    <h4 className="active-recipe__publisher">
                        Publisher: <sapn>{ recipe.publisher }</sapn>
                    </h4>
                        <p className="active-recipe__website">Website:<span>
                        <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                        </span>
                        </p>
                        <button className="active-recipe__button">
                       <Link to="/">Go Home</Link>
                        </button>
            </div>
            }
            
            </div>
            
        )
    }
}
export default Recipe