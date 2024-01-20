import React from "react";
import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";
import WrapperDetailsPage from "../assets/wrapperDetailsPage";

const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async({ params }) => {
       // extract the id from the params object
       const { id } = params;
       // fetch details of the cocktail from 
       console.log('url: ', cocktailURL+id)
       const res = await axios.get(cocktailURL + id);
       // extract only the necessary data from the response
       const cocktailDetail = res.data.drinks[0];
       // return the id + cocktailDetail
       return { id, cocktailDetail };
};

const DetailsPage = () => {
       // fetch the cocktail details from the loader module
       const data = useLoaderData();
       const ingredients = [];
       const str = 'strIngredient';
       for(let i = 1; i <= 15; i++){
              let key = str + i.toString();
              if ( data.cocktailDetail[key] != null){
                     ingredients.push(data.cocktailDetail[key] );
                     ingredients.push(', ');
              }
       }
       // console.log('data: ', data.cocktailDetail);
       ingredients.pop(); // removes the last , from the string

       // deconstruct the data to pieces which we can render on the page
       const {strDrink,  strAlcoholic, strCategory, strGlass, strDrinkThumb, strInstructions } = data.cocktailDetail;
       console.log('strDrink: ', strDrink);
       // time to render the page
       return(
<WrapperDetailsPage>
<div className="container">
       <div className="grid_1"></div>
       <img src={strDrinkThumb} alt={strCategory} className="grid_2"></img>
       <div className="grid_3">
              <Link to='/' className="link">back home</Link>
              <h3>{ strDrink }</h3>
       </div>
       <div className="grid_4">
              <div className="info">
                     <h3 className="info_title">name:</h3>
                     <p>{ strDrink }</p>
              </div>
              <div className="info">
                     <h3 className="info_title">category:</h3>
                     <p>{ strCategory }</p>
              </div>
              <div className="info">
                     <h3 className="info_title">info:</h3>
                     <p>{ strAlcoholic }</p>
              </div>
              <div className="info">
                     <h3 className="info_title">glass:</h3>
                     <p>{ strGlass }</p>
              </div>
              <div className="info">
                     <h3 className="info_title">ingredients:</h3>
                     <p>{ ingredients }</p>
              </div>
       </div>
</div>
</WrapperDetailsPage>
       )
}; export default DetailsPage;