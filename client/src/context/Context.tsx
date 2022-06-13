import * as React from 'react';
import {ContextProps } from '../types'





export const Context = React.createContext<ContextProps>({
    handleClick: () => { },
    color: "white",
    numberMails: 0,
  
    
});

/* interface ProviderProps {
    children: any
} */

/* const Provider: React.FC<ProviderProps> = ({children}) => {
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
        console.log(event.target)
    
    };
    
    let color = "white"




    return <Context.Provider value={{handleClick, color}}>{children}</Context.Provider>
}

export default Provider */

function Provider(props: React.PropsWithChildren<{}>) {
   

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
        console.log(event.target)

    };



    let color = "white"
    let numberMails = 5



    return <Context.Provider value={{ handleClick, color, numberMails}}>{props.children}</Context.Provider>
}

export default Provider

/* 
const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log(event.target)

};

let color = "white" */