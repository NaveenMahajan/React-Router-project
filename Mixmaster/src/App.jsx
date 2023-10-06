import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {About, HomeLayout, Landing, Newsletter,Error,SinglePageError, Cocktail} from './pages'
import {loader as landingLoader} from './pages/Landing'
import {loader as SingleCocktailLoader} from './pages/Cocktail'
import {action as newsletterAction} from './pages/Newsletter'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'


const queryClient= new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60
    }
  }
})

const router = createBrowserRouter([

  {
    path:'/',element:<HomeLayout/>,
    errorElement: <Error/>   ,
     children:[
      {
        path:'about',element:<About/>
    },
    {
      index: true,
      element:<Landing/>,
      errorElement:<SinglePageError/>,
      loader: landingLoader(queryClient),
      
    },
    {
      path:'newsletter',
      action:newsletterAction,
      element:<Newsletter/>
    },
    {
      path:'cocktail/:id',
      errorElement:<SinglePageError/>,
      loader:SingleCocktailLoader(queryClient),
      element:<Cocktail/>
    }
    ]
},
  ])
const App = () => {
  
  return(
    <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}/>
   <ReactQueryDevtools initialIsOpen={false}/>
 </QueryClientProvider>
  )
};

export default App;
