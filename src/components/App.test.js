import React from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import App from "./App";

describe('The app', () => {

  it('renders correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});