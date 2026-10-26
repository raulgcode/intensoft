import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("en", "routes/home-en.tsx"),
	route("es", "routes/home-es.tsx"),
	route("privacy", "routes/privacy-en.tsx"),
	route("es/privacy", "routes/privacy-es.tsx"),
] satisfies RouteConfig;
