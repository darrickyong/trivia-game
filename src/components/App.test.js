import render from "react-test-renderer";
import App from "./App";
import Game from "./Game";

test('Testing', () => {
  const test = render.create(<App />)
  
  expect(true).toEqual(true);
})
