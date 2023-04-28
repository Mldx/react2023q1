import {
  renderToPipeableStream,
  RenderToPipeableStreamOptions,
} from "react-dom/server";
import App from "./App";

export function render(url: string, options: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(<App />, options);
}
