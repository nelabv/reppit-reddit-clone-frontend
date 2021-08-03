import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount,render } from "enzyme";
import Login from "../pages/Login";

configure({ adapter: new Adapter() });

const wrapper = shallow(<Login />);

describe("Renders correctly.", () => {
  it('Renders without crashing', () => {
    shallow(<Login />);
  });
});

