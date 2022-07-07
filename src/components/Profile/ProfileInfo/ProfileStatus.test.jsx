import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    let component;
      act(() => {
          component = create(<ProfileStatus status="status" />);
      });

    const instance = component.root.props;
    expect(instance.status).toBe("status");
  });

  test("after creation <p> should be displayed", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="status" />);
    });

    let root = component.root;
    // eslint-disable-next-line testing-library/await-async-query
    let testInstance = root.findByType('div');
    expect(testInstance).not.toBeNull();
  });

  test("after creation <input> shouldn't be displayed", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="status" />);
    });

    let root = component.root;
    expect(() => {
      // eslint-disable-next-line testing-library/await-async-query
      let div = root.findByType("div");
    }).toThrow();
  });

  test("after creation <div> should be status", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="status" />);
    })

    const root = component.root;
    // eslint-disable-next-line testing-library/await-async-query
    const testInstance = root.findByType('div');
    expect(testInstance.children[1]).toBe("status");
  });

  test("input should be displayed in editMode instead of p", () => {
    let component;
      act(() => {
        component = create(<ProfileStatus status="status" />);
      });

      const root = component.root;
      // eslint-disable-next-line testing-library/await-async-query
      const testInstance = root.findByType('p');
      act (() => {
        testInstance.props.onDoubleClick();
      })
      // eslint-disable-next-line testing-library/await-async-query
      let input = root.findByType("input");
      expect(input.props.value).toBe("status");
  })

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="status" updateStatus={mockCallback} />);
    const instance =component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  })

})