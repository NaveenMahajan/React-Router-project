import { useEffect } from "react"
import { useLoaderData } from "react-router-dom";
import axios from 'axios'
import { SearchForm } from "../Components/SearchForm";
import { CocktailList } from "../Components/CocktailList";
const cockTailurl='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

import {useQuery} from '@tanstack/react-query'

const searchCocktailsQuery=(searchTerm)=>{
  return{
    queryKey:['search',searchTerm  || 'all' ],
   queryFn:async()=>{
    const response = await axios.get (`${ cockTailurl}${searchTerm}`)
    return response.data.drinks;
   }

  }
}


export const loader = (queryClient) => async ({request})=>{
  const url=new URL(request.url)

  const searchTerm = url.searchParams.get('search') || '';
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
return {searchTerm}
}
 const Landing = () => {
  const {searchTerm} =useLoaderData();
 const {data:drinks}=useQuery(searchCocktailsQuery(searchTerm)
 
 )

  return (
    <>
    <SearchForm/>
    <CocktailList drinks={drinks}/>
    </>
  )
}
export default Landing