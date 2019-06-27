import React from "react";
import { shallow } from "enzyme";
import Icon from "../UI/Icons/Icon/Icon";

it("renders Homepage", () => {
  const wrapped = shallow(<Icon />);
  expect(wrapped.find("i").length).toEqual(1);
});
