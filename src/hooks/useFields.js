import {useState} from 'react';

const useFields =(initState)=>{

const [state,setState] = useState(initState);

const handleChange =(event)=>{
  const {name,value}=event.target;
  setState((state)=>({...state,[name]: value}));
}

const resetState =()=>{
  setState(initState);
}

return [state,handleChange,resetState];
}
export default useFields;
