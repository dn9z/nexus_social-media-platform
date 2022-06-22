import * as React from "react";

type Action = {type: 'increment'} | {type: 'decrement'}
type Dispatch = (action: Action) => void
type State = {count: number}
type CountProviderProps = {children: React.ReactNode}

const CountStateContext = React.createContext<
  {messageNumberState: State; messageNumberDispatch: Dispatch; notificationNumberState: State; notificationNumberDispatch: Dispatch;} | undefined
>(undefined)



function messageCountReducer(messageNumberState: State, action: Action) {
    switch (action.type) {
      case 'increment': {
        return {count: messageNumberState.count + 1}
      }
      case 'decrement': {
        return {count: messageNumberState.count - 1}
      }
      default: {
        throw new Error(`Unhandled action type: ${action}`)
      }
    }
  }

  function notificationCountReducer(notificationNumberState: State, action: Action) {
    switch (action.type) {
      case 'increment': {
        return {count: notificationNumberState.count + 1}
      }
      case 'decrement': {
        return {count: notificationNumberState.count - 1}
      }
      default: {
        throw new Error(`Unhandled action type: ${action}`)
      }
    }
  }

  function CountProvider({children}: CountProviderProps) {
    const [messageNumberState, messageNumberDispatch] = React.useReducer(messageCountReducer, {count: 0})
    const [notificationNumberState, notificationNumberDispatch] = React.useReducer(notificationCountReducer, {count: 0})
    
    const value = {messageNumberState, messageNumberDispatch, notificationNumberState, notificationNumberDispatch}
    return (
      <CountStateContext.Provider value={value}>
        {children}
      </CountStateContext.Provider>
    )
  }

  function useCount() {
    const context = React.useContext(CountStateContext)
    if (context === undefined) {
      throw new Error('useCount must be used within a CountProvider')
    }
    return context
  }

  export {CountProvider, useCount}