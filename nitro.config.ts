import { createServer } from "vite";
import { defineLazyEventHandler, fromNodeMiddleware } from "h3";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  serveStatic: true,
  publicAssets: [
    {
      baseURL: "/assets",
      dir: ".nitro/client/assets",
      maxAge: 60 * 60 * 24 * 365,
    },
  ],

  serverAssets: [
    {
      baseName: "templates",
      dir: ".nitro/templates",
    },
  ],

  handlers: [
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
