import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import Game from "./Game";
import defaultData from "../Apprentice_TandemFor400_Data.json";


describe('The game', () => {
  
  it('renders correctly with props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Game triviaData={defaultData}/>)
    const result = renderer.getRenderOutput();
    expect(result.props.className).toEqual('game');
  })
})