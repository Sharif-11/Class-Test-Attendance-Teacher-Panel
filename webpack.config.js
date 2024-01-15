import { resolve as _resolve } from "path";

export const mode = "development";
export const devtool = "inline-source-map";
export const entry = {
  main: "./src/index.ts",
};
export const output = {
  path: _resolve(__dirname, "./dist"),
  filename: "app-bundle.js", // <--- Will be compiled to this single file
};
export const resolve = {
  extensions: [".ts", ".tsx", ".js"],
};
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: "ts-loader",
    },
  ],
};
