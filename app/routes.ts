import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("insight", "routes/insight.tsx"),
  route("about", "routes/about.tsx"),
  route("connect", "routes/connect.tsx"),
] satisfies RouteConfig;
