import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";
import Home from "../pages/Home";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import PostPreview from "../components/PostPreview";

configure({ adapter: new Adapter() });

describe("<Home /> without a logged in user.", () => {
  const wrapper = shallow(<Home />);

  it('Renders without crashing.', () => {
    shallow(<Home />);
  });
  
  it('Renders the sidebar and the post thread.', () => {
    expect(wrapper.contains(<Sidebar /> && <PostPreview/>)).toEqual(true);
  });

  it('Contains the banner.', () => {
    expect(wrapper.contains(<Banner />)).toEqual(true);
  })
})
