import React from 'react'
import Wrapper from '../assets/wrappers/CocktailList'
import { CocktailCard } from './CocktailCard'
export const CocktailList = ({drinks}) => {

    if(!drinks){
        return(
            <h1 style={{textAlign:'center'}}>NO matching cocktail found...</h1>
        )
    }
const drinksItem= drinks.map((item)=>{
   const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item
   return{
    id:idDrink,
    name:strDrink,
    image:strDrinkThumb,
    info:strAlcoholic,
    glass:strGlass,
   }
})
  return (
  <Wrapper >
    {drinksItem.map((item)=>{
    return(
    <CocktailCard key={item.id} {...item}/>
    )
 
    })}

  </Wrapper>

  )

}

