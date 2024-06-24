import { createContext } from "react";

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
