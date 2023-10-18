import React from "react";
import { tv } from "tailwind-variants";

export const textfield = tv({
	slots: {
		container: "group w-full",
		input:
			"w-full block bg-root autofill:bg-soft read-only:bg-soft read-only:group-focus-within:bg-soft rounded text-sm p-3 border border-line group-focus-within:bg-light placeholder:text-default group-focus-within:placeholder:text-light disabled:text-dark disabled:bg-soft max-sm:text-base",
		label:
			"w-max leading-none select-none cursor-pointer font-medium mb-2 pl-2 group-focus-within:text-hard flex items-center gap-1",
		error:
			"text-fgW text-xs rounded-full bg-soft border border-line py-1 px-2 w-max leading-none",
		helper: "pl-1 text-xs text-default-n",
	},
	variants: {
		error: {
			true: {
				label: "text-default",
				input: "border-line focus:ring-line",
				helper: "text-default",
			},
		},
		multiline: {
			true: {
				input: "resize-y whitespace-pre-wrap max-w-max",
			},
		},
	},
});

type BaseProps = {
	label?: string;
	error?: string;
	helper?: string;
};

type InputProps = BaseProps & {
	ref?: React.LegacyRef<HTMLInputElement> | null;
	multiline?: false;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

type TextAreaProps = BaseProps & {
	ref?: React.LegacyRef<HTMLTextAreaElement> | null;
	multiline: true;
	inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

const TextField = (props: InputProps | TextAreaProps) => {
	const { container, label, input, error, helper } = textfield({
		error: !!props.error,
		multiline: props.multiline,
	});

	return (
		<div className={container()}>
			{props.label && (
				<label htmlFor={props.inputProps?.id} className={label()}>
					{props.label}
					{props.error && <div className={error()}>{props.error}</div>}
				</label>
			)}
			{props.multiline ? (
				<textarea ref={props.ref} className={input()} {...props.inputProps} />
			) : (
				<input ref={props.ref} className={input()} {...props.inputProps} />
			)}
			{props.helper && <span className={helper()}>{props.helper}</span>}
		</div>
	);
};

export default TextField;
