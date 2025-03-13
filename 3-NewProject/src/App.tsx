import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import type { FormHandle } from "./components/Form";
import { useRef } from "react";

function App() {
	const customForm = useRef<FormHandle>(null);

	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
		customForm.current?.clear();
	}

	return (
		<main>
			<Form onSave={handleSave}>
				<Input type="text" label="Name" id="name" />
				<Input type="number" label="Age" id="age" />
				<p>
					<Button el="button">Save</Button>
				</p>
			</Form>
		</main>
	);
}

export default App;
