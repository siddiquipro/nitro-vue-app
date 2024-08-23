import app from "../hono/app.js";

export default defineEventHandler(async (event) => {
  const webReq = toWebRequest(event);
  return app.fetch(webReq);
});

// import { createApp } from "h3";

// const app = createApp();
// const router = createRouter();
// app.use(router);

// router.get(
//   "/",
//   defineEventHandler(async (e) => {
//     console.log(`request from ${e.path}`);
//     return { body: "Hello World!" };
//   })
// );

// router.get(
//   "/api",
//   defineEventHandler(async (e) => {
//     console.log(`request from ${e.path}`);
//     return { body: "Hello API!" };
//   })
// );

// router.get(
//   "/**",
//   defineEventHandler(async (e) => {
//     console.log(`request from ${e.path}`);
//     return { body: "Hello Dynamic!", path: e.path };
//   })
// );

// // router.get("/api", (e) => {
// //   return { body: "Hello API!" };
// // });

// // router.get("/*", (e) => {
// //   return { body: "Hello Dynamic!", path: e.path };
// // });

// export default app.handler;
