import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const config = {
  isProd: process.env.NODE_ENV === "production",
  html: "",
};

const getHtmlFile = () => {
  if (!config.isProd) return;

  if (config.html) return config.html;

  const currDir = dirname(fileURLToPath(import.meta.url));
  const indexFile = join(currDir, "..", "public", "index.html");

  config.html = readFileSync(indexFile, "utf8");
  return config.html;
};

export default defineEventHandler(async (event) => {
  const prodTemplate = getHtmlFile();
  if (prodTemplate) return prodTemplate;

  const template: string = await useStorage().getItem("root:index.html");
  if (template) return template;

  console.log({ config, path: event.path, msg: "index template not found" });

  return `<h1>404 - Page Not Found</h1>`;
});
