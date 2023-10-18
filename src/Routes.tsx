import type { RouteObject } from "react-router-dom";
import App from "./App";
import Layout from "./layouts";

const Routes: RouteObject[] = [
	{
		element: <App />,
		children: [
			{
				element: <Layout />,
				children: [
					{
						path: "/",
						lazy: async () => {
							const { default: Component } = await import("pages/Home");
							return {
								Component,
							};
						},
					},
					{
						path: "/alternative",
						lazy: async () => {
							const { default: Component } = await import("pages/Alternative");
							return {
								Component,
							};
						},
					},
					{
						path: "/small",
						lazy: async () => {
							const { default: Component } = await import("pages/Small");
							return {
								Component,
							};
						},
					},
					{
						path: "/modal",
						lazy: async () => {
							const { default: Component } = await import("pages/Modal");
							return {
								Component,
							};
						},
					},
				],
			},
		],
	},
];

export default Routes;
