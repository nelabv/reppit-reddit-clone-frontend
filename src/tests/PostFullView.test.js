import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import PostFullView from "../pages/PostFullView";

configure({ adapter: new Adapter() });

describe("Renders correctly.", () => {
  it('Renders without crashing', () => {
    const match = {
      params: {
        id: "60e3c79bb8c1fb3a084b5e76" 
      }
    }
    shallow(
      <MemoryRouter>
          <Route  exact path="/posts/:id" 
                  render={props => <PostFullView userVotedPosts="1" match={match} />}/>
      </MemoryRouter>
    );
  });
});

