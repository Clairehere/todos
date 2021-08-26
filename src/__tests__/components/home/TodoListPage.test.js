import TodoListPage from "../../../components/home/TodoListPage"
import React from "react"
import {shallow, configure} from "enzyme"

const mockStore = configureMockStore()
const store = mockStore({})
import {Provider} from "react-redux"
import configureMockStore from "redux-mock-store"
import Adapter from 'enzyme-adapter-react-16'
import {checkProps} from "../../functions"
import {array, func, object, lists} from "../../fixtures"


configure({adapter: new Adapter()});

describe(">>> TodoListPage --- Snapshot", () => {
  it("+++capturing Snapshot of TodoListPage - with list", () => {
    expect(
      shallow(
        <Provider store={store}>
          <TodoListPage
            t={t => t}
            lists={[]}
            classes={{}}
            selectedList={lists[0]}
            editList={() => null}/>
        </Provider>
      )).toMatchSnapshot()
  })
  it("+++capturing Snapshot of TodoListPage - no list", () => {
    expect(
      shallow(
        <Provider store={store}>
          <TodoListPage
            t={t => t}
            lists={[]}
            classes={{}}
            selectedList={{}}
            editList={() => null}/>
        </Provider>
      )).toMatchSnapshot()
  })

})


describe('>>> M O R E   A C T I O N   I T E M --- Shallow render component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <TodoListPage
          t={t => t}
          lists={[]}
          classes={{}}
          selectedList={lists[0]}
          editList={() => null}/>
      </Provider>)
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  })
})


describe('>>> TodoListPage --- checking PropTypes', () => {
  it('+++ should not throw warning', () => {
    const expectedProps = {
      t: func,
      lists: array,
      classes: object,
      selectedList: object,
      editList: func,
    }

    const propsErr = checkProps(TodoListPage, expectedProps)
    expect(propsErr).toEqual(undefined)
  })
})

