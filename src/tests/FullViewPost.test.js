import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";
import FullViewPost from "../components/FullViewPost";

configure({ adapter: new Adapter() });

describe("Renders correctly.", () => {
  it('Renders data correctly.', () => {
    const samplePostData = {
      _id: "sample_1",
      category: "nice",
      author: "test",
      title: "Test post",
      body: "Lorem ipsum",
      votes: {
        totalVoteCount: 3,
        upvotes: 1,
        downvotes: 2
      },
      comments: []
    }
    const wrapper = shallow(<FullViewPost post={samplePostData} userVotedPosts="1" />);

    expect(wrapper.find('h3').text()).toEqual('Test post');
  });
});

