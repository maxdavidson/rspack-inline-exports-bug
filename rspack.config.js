import path from "node:path";

export default /** @type {import('@rspack/cli').Configuration} */ ({
  mode: process.env.NODE_ENV,
  devtool: false,
  entry: {
    main: "./src/index.js",
  },
  output: {
    clean: true,
    filename: "[name].js",
  },
  optimization: {
    // Disable minification to make the output easier to read
    minimize: false,
    // True by default in production in Rspack 1.7, but being explicit for clarity
    inlineExports: true,
  }
});
