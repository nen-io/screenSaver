//global p5 intellisence
import "p5/global";

declare global {
  interface Window {
    draw: () => void;
    setup: () => void;
  }
}
