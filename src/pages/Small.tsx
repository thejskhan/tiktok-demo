import Button from "lib/Button";
import Tiktok from "../components/tiktok";
import data from "assets/data.json";

export default function Small() {
	return (
		<div className="w-full min-h-screen flex flex-col items-center">
			<h1 className="text-6xl bg-black uppercase font-bold text-white w-full py-8 text-center">
				Tik Tok embed
			</h1>
			<div className="flex flex-wrap gap-4 w-full justify-center py-8">
				{data.map((item) => {
					return (
						<Tiktok key={item.share_url} item={item} height={320} width={240} />
					);
				})}
			</div>
		</div>
	);
}
