import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount } from "enzyme";
import Game from "./Game";
import Question from "./Question";
import defaultData from "../Apprentice_TandemFor400_Data.json";


describe('The game', () => {
  
  it('renders correctly with props', () => {
    let game = shallow(<Game triviaData={defaultData} />);
    expect(game.is('.game')).toBe(true);
  })

  it('renders a question', () => {
    let game = shallow(<Game triviaData={defaultData} />);
    expect(game.find(Question).exists()).toBe(true);
  })
})