import React from "react";
import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import App from "./App";

describe('My App', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it('renders correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});