import data from "assets/data.json";
import { useState } from "react";
import Modal from "lib/Modal";
import Button from "lib/Button";

type TiktokProps = {
	item: typeof data[number];
	height?: number;
	width?: number;
	isModal?: boolean;
};

export default function Tiktok(props: TiktokProps) {
	const [open, setOpen] = useState(false);
	const { item, height, width, isModal } = props;

	const handleClick = () => {
		if (!isModal) return;
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		item && (
			<div
				className="relative overflow-hidden rounded-2xl flex items-center justify-center shadow-lg"
				onMouseDown={handleClick}
			>
				{isModal && (
					<div className="absolute inset-0 z-10 cursor-pointer hover:bg-black/60 flex flex-col justify-end" />
				)}
				<div className={isModal ? "pointer-events-none" : ""}>
					<iframe
						key={item.share_url}
						height={height ?? 720}
						width={width ?? 320}
						src={`https://www.tiktok.com/embed/v2/${item.aweme_id}`}
						title="iframe"
					/>
				</div>
				{isModal && (
					<Modal open={open} setOpen={setOpen}>
						<iframe
							key={item.share_url}
							height={720}
							width={320}
							src={`https://www.tiktok.com/embed/v2/${item.aweme_id}`}
							title="iframe"
						/>
						<Button color="neutral" fullwidth onClick={handleClose}>
							Exit
						</Button>
					</Modal>
				)}
			</div>
		)
	);
}
