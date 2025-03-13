import {
	forwardRef,
	useImperativeHandle,
	useRef,
	type ComponentPropsWithoutRef,
	type FormEvent,
} from "react";

interface FormProps extends ComponentPropsWithoutRef<"form"> {
	onSave: (value: unknown) => void;
}

export type FormHandle = {
	clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
	{ children, onSave, ...props },
	ref,
) {
	const form = useRef<HTMLFormElement>(null);

	useImperativeHandle(ref, () => {
		return {
			clear() {
				console.log("Clear");
				form.current?.reset();
			},
		};
	});

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		onSave(data);
	}

	return (
		<form onSubmit={handleSubmit} ref={form} {...props}>
			{children}
		</form>
	);
});

export default Form;
