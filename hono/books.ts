import { Hono } from "hono";

export const book = new Hono();

book.get("/", (c) => c.json({ msg: "List Books" })); // GET /book
book.get("/:id", (c) => c.json({ msg: "Get Book: " + c.req.param("id") }));
book.post("/", (c) => c.json({ msg: "Create Book" })); // POST /book
