import data from "assets/data.json";
import { useState } from "react";
import Modal from "lib/Modal";

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
		setOpen(true);
	};

	return (
		item && (
			<div
				className="overflow-hidden rounded-2xl flex items-center justify-center"
				onClick={handleClick}
			>
				<div className="pointer-events-none">
					<iframe
						key={item.share_url}
						height={height ?? 720}
						width={width ?? 320}
						src={`https://www.tiktok.com/embed/v2/${item.aweme_id}`}
						title="iframe"
					/>
				</div>
				<Modal open={open} setOpen={setOpen}>
					<iframe
						key={item.share_url}
						height={720}
						width={320}
						src={`https://www.tiktok.com/embed/v2/${item.aweme_id}`}
						title="iframe"
					/>
				</Modal>
			</div>
		)
	);
}
