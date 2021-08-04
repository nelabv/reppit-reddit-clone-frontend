import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";
import Navbar from "../components/Navbar";

configure({ adapter: new Adapter() });

describe("Renders correctly.", () => {
  it('Renders without crashing', () => {
    shallow(<Navbar />);
  });
});

