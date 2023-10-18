import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 4000,
	},
	resolve: {
		alias: {
			// FOR EASY IMPORTS
			layouts: resolve(__dirname, "./src/layouts"),
			components: resolve(__dirname, "./src/components"),
			pages: resolve(__dirname, "./src/pages"),
			shared: resolve(__dirname, "./src/shared"),
			lib: resolve(__dirname, "./src/lib"),
			src: resolve(__dirname, "./src"),
			assets: resolve(__dirname, "./src/assets"),
		},
	},
});
