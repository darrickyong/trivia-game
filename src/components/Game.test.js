import React from "react";
import { shallow } from "enzyme";
import Game from "./Game";
import Question from "./Question";
import defaultData from "../Apprentice_TandemFor400_Data.json";


describe('The game', () => {
  const game = shallow(<Game triviaData={defaultData} />);
  const initialQuestion = game.find(Question);
  
  it('renders correctly with props', () => {
    expect(game.is('.game')).toBe(true);
  })

  it('renders a question', () => {
    expect(initialQuestion).toHaveLength(1);
  })
})