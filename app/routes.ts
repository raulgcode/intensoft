import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("en", "routes/home-en.tsx"),
	route("es", "routes/home-es.tsx"),
] satisfies RouteConfig;
