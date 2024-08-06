import { defineNitroConfig } from "nitropack/config";
import { createServer } from "vite";
import { defineLazyEventHandler, fromNodeMiddleware } from "h3";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  serveStatic: true,
  publicAssets: [
    {
      baseURL: "./",
      dir: "../dist",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    },
  ],
  handlers: [
    {
      route: "/api/**",
      handler: "./server/api/[...name].ts",
    },
    {
      route: "/**",
      handler: "./server/app.ts",
    },
  ],
  devHandlers: [
    {
      route: "/",
      handler: defineLazyEventHandler(async () => {
        const server = await createServer({
          base: "/",
          appType: "custom",
          server: { middlewareMode: true },
        });
        return fromNodeMiddleware(server.middlewares);
      }),
    },
  ],
});
