import Container from "./UI/Container.tsx";

import type { Timer as TimerType } from "../store/timers-context.tsx";

interface TimerProps extends TimerType {}

export default function Timer({ name, duration }: TimerProps) {
	return (
		<Container as="article">
			<h2>{name}</h2>
			<p>{duration}</p>
		</Container>
	);
}
