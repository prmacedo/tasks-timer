import React, { createContext, useContext, useState, ReactNode } from "react";

interface StopwatchContextProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

interface StopwatchContextProviderProps {
  children: ReactNode;
}

export const StopwatchContext = createContext<StopwatchContextProps>({
  time: 0,
  setTime: () => {}
});

export function StopwatchContextProvider({ children }: StopwatchContextProviderProps) {
  const [ time, setTime ] = useState(0);

  return (
    <StopwatchContext.Provider
      value={{
        time,
        setTime
      }}
    >
      { children }
    </StopwatchContext.Provider>
  )
}

export function useStopwatch() {
  const context = useContext(StopwatchContext);
  const { time, setTime } = context;
  return { time, setTime }
}