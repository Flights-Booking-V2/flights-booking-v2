// import React from 'react';
// import userLogin from '../userAuth/userLogin';
// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';



//     describe('Login component tests', ()=> {
//         const wrapper = shallow(<userLogin />);

//         it('should have a btn component', ()=> {

//             //There should be only one button
//             expect(wrapper.find('Button')).toHaveLength(1);

//             //Button should be of type button
//             expect(wrapper.find('Button')
//             .type().defaultProps.type)
//             .toEqual('button');

//             //Button should have matching text
//             expect(wrapper.find('Button').text()).toEqual('LOGIN');
//         });

//         it('should have input for email and password', ()=> {
//             //Email and password input field should be present
//             expect(wrapper.find('input#email')).toHaveLength(1);
//             expect(wrapper.find('input#password')).toHaveLength(1);
//         });

//     });
