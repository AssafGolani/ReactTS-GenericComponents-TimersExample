import { createContext, useContext, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};
type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  startTimer: () => void;
  stopTimer: () => void;
  addTimer: (timer: Timer) => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const ctx = useContext(TimersContext);
  if (!ctx) {
    throw new Error("useTimersContextis null");
  }
  return ctx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    startTimer() {},
    stopTimer() {},
    addTimer(timer: Timer) {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
