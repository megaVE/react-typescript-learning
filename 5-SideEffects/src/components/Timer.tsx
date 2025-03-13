import Container from "./UI/Container.tsx";
import {
	useTimersContext,
	type Timer as TimerProps,
} from "../store/timers-context.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
	const [remainingTime, setRemainingTime] = useState(duration * 1000);
	const timerRef = useRef<number | null>(null);

	const { isRunning } = useTimersContext();

	const formatedRemainingTime = (remainingTime / 1000).toFixed(2);

	useEffect(() => {
		if (!isRunning && timerRef.current) {
			return clearInterval(timerRef.current);
		}
		const timerInterval = setInterval(
			() => setRemainingTime((state) => (state >= 50 ? state - 50 : state)),
			50,
		);
		timerRef.current = timerInterval;

		return () => clearInterval(timerInterval);
	}, [isRunning]);

	if (remainingTime <= 0 && timerRef.current) {
		clearInterval(timerRef.current);
	}

	return (
		<Container as="article">
			<h2>{name}</h2>
			<p>
				<progress max={duration * 1000} value={remainingTime} />
			</p>
			<p>{formatedRemainingTime}</p>
		</Container>
	);
}
