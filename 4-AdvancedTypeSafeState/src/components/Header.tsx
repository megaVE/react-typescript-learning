import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timers-context.tsx";

export default function Header() {
	const { startTimers, stopTimers, isRunning } = useTimersContext();

	function toggleTimers() {
		if (!isRunning) return startTimers();
		stopTimers();
	}

	return (
		<header>
			<h1>ReactTimer</h1>

			<Button onClick={toggleTimers}>
				{isRunning ? "Stop" : "Start"} Timers
			</Button>
		</header>
	);
}
