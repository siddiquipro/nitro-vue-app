export default eventHandler((event) => {
  console.log(`catch all api route ${event.path}`);
  return createError({ status: 404, message: `Not found ${event.path}` });
});
