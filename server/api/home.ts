export default eventHandler((event) => {
  return { path: event.path, status: 200, message: `Hello Home`, date: new Date() };
});
