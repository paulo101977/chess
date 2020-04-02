module.exports = {
  include: ["assembly/__tests__/**/*.performance.ts"],
  flags: {
    "--runtime": ["full"],
    "--use": ["IS_WASI=0"],
    "--optimizeLevel": "3",
    "--shrinkLevel": "0",
  },

  disclude: [/node_modules/],
  outputBinary: false,
};