import React, { useState } from 'react';
import CocktailCard from './CocktailCard';
import Wrapper_cocktailList from '../assets/Wrapper_cocktailList';

const CocktailList = (props) => {
       const drinks = useState(props.cocktail_props);
       // console.log('drinks: ', drinks[0].res.data)
       return(
<Wrapper_cocktailList>
<div className='container'>
       { drinks[0].res.data.drinks.map((drink_item) => {
              // console.log('drink item: ', drink_item);
              return(
                     <CocktailCard key={drink_item.idDrink} drink_prop = {drink_item}/>

              )

       })}
</div>
</Wrapper_cocktailList>
       )
}; export default CocktailList;