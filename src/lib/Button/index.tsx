import { VariantProps, tv } from "tailwind-variants";
import type { PolymorphicComponentProp } from "../helpers/types";

export const button = tv({
	base: "w-full rounded leading-none flex border items-center justify-center gap-2 appearance-none cursor-pointer disabled:opacity-30 disabled:pointer-events-none",
	variants: {
		variant: {
			fill: "",
			outline: "bg-tranparent",
			text: "border-none",
		},

		color: {
			primary:
				"text-dark bg-soft hover:bg-soft1 active:bg-soft2 border-line hover:border-line1",
			neutral:
				"text-dark-n bg-soft-n hover:bg-soft1-n active:bg-soft2-n border-line-n hover:border-line1-n",
		},

		size: {
			sm: "p-2",
			base: "px-4 py-3",
			md: "px-6 py-4",
		},

		fullwidth: {
			true: "max-w-full",
			false: "max-w-max",
		},
	},

	compoundVariants: [
		{
			color: "primary",
			variant: "fill",
			className:
				"bg-hard text-light border-transparent hover:border-transparent hover:bg-hard1 active:bg-default",
		},
		{
			color: "neutral",
			variant: "fill",
			className:
				"bg-dark-n text-light-n border-transparent hover:border-transparent hover:bg-dark-n active:bg-dark-n",
		},
	],

	defaultVariants: {
		variant: "fill",
		color: "primary",
		size: "base",
		fullwidth: false,
	},
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = ButtonVariants & {
	children?: React.ReactNode;
};

const Button = <C extends React.ElementType = "button">(
	props: PolymorphicComponentProp<C, ButtonProps>,
) => {
	const {
		as: Component = "button",
		className,
		children,
		variant,
		color,
		size,
		fullwidth,
		type = "button",
		...rest
	} = props;
	return (
		<Component
			className={button({ variant, color, size, fullwidth, className })}
			type={type}
			{...rest}
		>
			{children}
		</Component>
	);
};

export default Button;
