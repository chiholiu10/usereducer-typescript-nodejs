import { FC, useEffect, useReducer } from 'react';
import { Input } from './component/Input/Input';
import { ProductList } from './component/ProductList/ProductList';
import { Context, initialState, reducer } from './context/context';

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const contextValues = {
    state,
    dispatch
  }

  const fetchData = async() => {
    try {
      const data = await fetch("http://localhost:5000/products");
      const currentData = await data.json();
      dispatch({type: "get_data", data: currentData, loaded: true});
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <Context.Provider value={contextValues}>
      <Input />
      <ProductList/>
    </Context.Provider>
  )
};

export default App;
