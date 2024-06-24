import { createContext, useContext, useReducer, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};
type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
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

type TimersAction = {
  type: "START_TIMER" | "STOP_TIMER" | "ADD_TIMER";
};

function timersReducer(state: TimersState, action: TimersAction): TimersState {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        isRunning: true,
      };
    case "STOP_TIMER":
      return {
        ...state,
        isRunning: false,
      };
    case "ADD_TIMER":
      return {
        ...state,
        timers: state.timers.concat(),
      };
    default:
      return state;
  }
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    startTimer() {
      dispatch({ type: "START_TIMER" });
    },
    stopTimer() {
      dispatch({ type: "STOP_TIMER" });
    },
    addTimer(timer: Timer) {
      dispatch({ type: "ADD_TIMER" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
