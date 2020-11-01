import React from "react";
import { shallow } from "enzyme";
import Result from "./Result";

describe('The results', () => {
  const score = 5;
  const highScore = 9;

  const result = shallow(<Result score={score} highScore={highScore} />);

  it('renders correctly with props', () => {
    expect(result.is('.result')).toBe(true);
  })

  it('shows 2 scores ', () => {
    expect(result.find('.score')).toHaveLength(2);
  })
})