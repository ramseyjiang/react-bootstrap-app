import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import TaskPage from "../views/TaskPage";
import { initState } from "../services/TaskReducer";

test("show task search component", () => {
  const { getByPlaceholderText } = render(<TaskPage />);
  expect(getByPlaceholderText(/Input search content/i)).toBeInTheDocument();
});

test("show task list component", () => {
  const { getByText } = render(<TaskPage />);
  expect(getByText(/Total tasks is/i)).toBeInTheDocument();
});

test("show task form component", () => {
  const { getByPlaceholderText } = render(<TaskPage />);
  expect(getByPlaceholderText(/Please input title/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/Please input creator/i)).toBeInTheDocument();
});

test("snapshot renders correctly", () => {
  const tree = renderer.create(<TaskPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

//todo test click search button, click refresh button, edit button, delete button, add task button
