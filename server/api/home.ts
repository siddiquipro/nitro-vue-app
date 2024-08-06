export default eventHandler((event) => {
  return { path: event.path, status: 200, message: `Hello ${event.path}`, date: new Date() };
});
