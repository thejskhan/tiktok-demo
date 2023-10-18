import { Dialog } from "@headlessui/react";
import { useRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const modal = tv({
	slots: {
		container: "relative z-50",
		backdrop: "bg-black opacity-50 fixed inset-0",
		scrollable: "fixed inset-0 overflow-y-scroll transform-gpu z-50 p-4",
		wrapper: "flex min-h-full items-center justify-center w-full",
		content: "w-max bg-white p-8 rounded-2xl",
	},
});

type Slots = keyof ReturnType<typeof modal>;

export type ModalProps = VariantProps<typeof modal> & {
	open: boolean;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	children?: React.ReactNode;
	slots?: Partial<Record<Slots, string>>;
};

export default function Modal(props: ModalProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { children, open, setOpen, slots } = props;

	const { container, backdrop, scrollable, wrapper, content } = modal();

	const handleClose = () => {
		if (setOpen) setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			initialFocus={ref}
			className={container({
				className: slots?.container,
			})}
		>
			{/* FOCUS AT TOP */}
			<div ref={ref} />
			{/* BACKDROP */}
			<div
				className={backdrop({
					className: slots?.backdrop,
				})}
				aria-hidden="true"
			/>
			{/* SCROLLABLE */}
			<div
				className={scrollable({
					className: slots?.scrollable,
				})}
			>
				{/* HANDLE POSITIONS */}
				<div
					className={wrapper({
						className: slots?.wrapper,
					})}
				>
					<Dialog.Panel
						className={content({
							className: slots?.content,
						})}
					>
						{children}
					</Dialog.Panel>
				</div>
			</div>
		</Dialog>
	);
}
