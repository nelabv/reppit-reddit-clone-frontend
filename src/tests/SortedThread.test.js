import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import SortedThread from "../pages/SortedThread";

configure({ adapter: new Adapter() });

describe("Renders correctly.", () => {
  it('Renders without crashing', () => {
    const match = {
      params: {
        category: "nice" 
      }
    }
    shallow(
      <MemoryRouter>
          <Route  exact path="/categories/:category" 
                  render={props => <SortedThread userVotedPosts= "1" match={match} />}/>
      </MemoryRouter>
    );
  });
});

