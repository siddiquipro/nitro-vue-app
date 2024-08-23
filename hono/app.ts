import { Hono } from "hono";
const app = new Hono();

const isProd = process.env.NODE_ENV === "production";

app.get("/api", (c) => {
  return c.json({ msg: "Hello API!", path: c.req.path, time: Date.now() });
});

app.get("*", async (c) => {
  const indexPath = isProd ? "assets:templates:index.html" : "root:index.html";
  console.log("indexPath:: ", indexPath);
  const template = (await useStorage().getItem(indexPath)) as string;
  return c.html(template);
});

export default app;
