import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Wrapper_cocktailCard from '../assets/Wrapper_cocktailCard';

const CocktailCard = (props) => {
       const drinkDetail = useState(props.drink_prop);
       
       return(
<Wrapper_cocktailCard>
       <div className="card">
              <img src={drinkDetail[0].strDrinkThumb} alt={drinkDetail[0].strDrink}/>
              <div className="card_info">
                     <h3 className='title'>{drinkDetail[0].strDrink }</h3>
                     <h3 className='glass'>{drinkDetail[0].strGlass}</h3>
                     <h3 className="alcohol">{drinkDetail[0].strAlcoholic}</h3>
              </div>
              <Link to={`/${drinkDetail[0].idDrink}`} className="btn">details</Link>
       </div>
</Wrapper_cocktailCard>
       )
}; export default CocktailCard;