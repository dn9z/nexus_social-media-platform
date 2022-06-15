import * as React from 'react';
import { ContextProps } from '../types'


export const Context = React.createContext<ContextProps>({
    handleClick: () => { },
    handlePostClick: () => { },
    showPostModal: false,
    color: "white",
    numberMails: 0,
    numberIconDisplayState: true,
    numberIconNums: {mails: 0, notifications: 0}
  
    
});


function Provider(props: React.PropsWithChildren<{}>) {
    const [showPostModal, setShowPostModal] = React.useState(false)
    const [numberIconDisplayState, setNumberIconDisplayState] = React.useState(true)
    const [numberIconNums, setNumberIconNums] = React.useState({mails: 0, notifications: 0})

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
        console.log(event.target)

    };



    let color = "white"
    let numberMails = 5
    

    const handlePostClick = (event: React.MouseEvent) => {
        event.preventDefault()
        setShowPostModal(!showPostModal)
        
    }


    return <Context.Provider value={{ handleClick, color, numberMails, handlePostClick, showPostModal, numberIconDisplayState, numberIconNums}}>{props.children}</Context.Provider>
}

export default Provider
