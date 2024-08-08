const config = {
  isProd: process.env.NODE_ENV === "production",
  html: "",
};

const getHtmlFile = async () => {
  if (!config.isProd) return;

  if (config.html) return config.html;

  config.html = await $fetch<string>("/");
  return config.html;
};

export default defineEventHandler(async (event) => {
  console.log(`hello from ${event.path}`);

  const prodTemplate = getHtmlFile();
  if (prodTemplate) return prodTemplate;

  const template: string = await useStorage().getItem("root:index.html");
  if (template) return template;

  console.log({ config, path: event.path, msg: "index template not found" });

  return `<h1>404 - Page Not Found</h1>`;
});
