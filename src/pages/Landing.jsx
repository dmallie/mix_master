import React from "react";
import SearchForm from '../components/SearchForm';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CocktailList from "../components/CocktailList";

const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
let globalFlag = false;

// create a loader to load data
export const loader = async({ request })=> {
       // get url from the request object
       const url = new URL(request.url);
       // extract the search parameter from the url string or return empty string
       const searchParam = url.searchParams.get('search') || '';

       // using the search term look for cocktails
       const res = await axios.get(cocktailURL+searchParam);
       // if res is empty then globalFlag is false otherwise globalFlag is true
       (res.data.drinks === null) ? globalFlag = false : globalFlag = true;
       // return the res object
       return { res }
};

const Landing = () => {
       // get data from useLoaderData
       const data = useLoaderData();
       return(
<div>
       <SearchForm />
       <CocktailList cocktail_props={data}/>
</div>
       )
}; export default Landing;