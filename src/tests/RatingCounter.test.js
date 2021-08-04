import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from "enzyme";
import RatingCounter from "../components/RatingCounter";

configure({ adapter: new Adapter() });

describe("Renders correctly.", () => {
  it('Renders without crashing', () => {
    shallow(
      <RatingCounter 
        total= {3}
        down= {2}
        id= {12345}
        userVotedPosts={1} />
    );
  });
});
