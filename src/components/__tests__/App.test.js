import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <Root>
      <App />
    </Root>
  );
});

it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(2);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
