import React from "react";
import { shallow } from "enzyme";
import Question from "./Question";

describe('A question', () => {
  const currentQuestion = {
    "question": "What was Tandem previous name?",
    "incorrect": ["Tandem", "Burger Shack", "Extraordinary Humans"],
    "correct": "Devmynd"
  };

  const choices = ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"];
  const question = shallow(<Question currentQuestion={currentQuestion} choices={choices}/>)

  it('should have four choices', () => {
    expect(question.find('.question-choice')).toHaveLength(4);
  })

  it('should have a next button', () => {
    expect(question.find('.question-next')).toHaveLength(1);
  })
  
})