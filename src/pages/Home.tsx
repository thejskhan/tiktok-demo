import { Link } from "react-router-dom";
import Tiktok from "../components/tiktok";
import data from "assets/data.json";

export default function Home() {
	return (
		<div className="w-full min-h-screen flex flex-col items-center">
			<div className="bg-dark-n w-full flex flex-col items-center">
				<h1 className="text-xl text-white uppercase text-center flex flex-col py-4">
					Tik Tok embed
					<span className="text-3xl normal-case font-medium">
						Variant - Original
					</span>
				</h1>
				<nav className="w-full py-4 bg-soft-n flex items-center justify-center">
					<ul className="flex gap-2">
						<li>
							<Link
								to="/"
								className="px-4 py-2 rounded-2xl bg-soft2-n border border-line1-n"
							>
								Original
							</Link>
						</li>
						<li>
							<Link
								to="/alternative"
								className="px-4 py-2 border-line-n border rounded-2xl"
							>
								Alternative
							</Link>
						</li>
						<li>
							<Link
								to="/small"
								className="px-4 py-2 border-line-n border rounded-2xl"
							>
								Small
							</Link>
						</li>
						<li>
							<Link
								to="/modal"
								className="px-4 py-2 border-line-n border rounded-2xl"
							>
								Modal
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="flex flex-wrap gap-4 w-full justify-center py-8">
				{data.map((item) => {
					return <Tiktok key={item.share_url} item={item} />;
				})}
			</div>
		</div>
	);
}
