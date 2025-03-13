import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Timer = {
	name: string;
	duration: number;
};

interface TimersState {
	isRunning: boolean;
	timers: Timer[];
}

const initialTimersState: TimersState = {
	isRunning: false,
	timers: [],
};

interface TimersContextValue extends TimersState {
	addTimer: (newTimer: Timer) => void;
	startTimers: () => void;
	stopTimers: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
	const timersCtx = useContext(TimersContext);

	if (!timersCtx) throw new Error("TimersContext is null");

	return timersCtx;
}

interface TimersContextProviderProps {
	children: ReactNode;
}

type AddTimerAction = {
	type: "ADD_TIMER";

	payload: Timer;
};

type StartTimersAction = {
	type: "START_TIMERS";
};

type StopTimersAction = {
	type: "STOP_TIMERS";
};

type TimerAction = AddTimerAction | StartTimersAction | StopTimersAction;

function timersReducer(state: TimersState, action: TimerAction): TimersState {
	if (action.type === "START_TIMERS") {
		return {
			...state,
			isRunning: true,
		};
	}
	if (action.type === "STOP_TIMERS") {
		return {
			...state,
			isRunning: false,
		};
	}
	if (action.type === "ADD_TIMER") {
		return {
			...state,
			timers: [...state.timers, action.payload],
		};
	}
	return state;
}

export function TimersContextProvider({
	children,
}: TimersContextProviderProps) {
	const [timersState, dispatch] = useReducer(timersReducer, initialTimersState);

	const ctx: TimersContextValue = {
		...timersState,
		addTimer(newTimer) {
			dispatch({ type: "ADD_TIMER", payload: newTimer });
		},
		startTimers() {
			dispatch({ type: "START_TIMERS" });
		},
		stopTimers() {
			dispatch({ type: "STOP_TIMERS" });
		},
	};

	return (
		<TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
	);
}
