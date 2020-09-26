import React from 'react';
import { shallow } from 'enzyme';

import Calculator from '../../Calculator';

describe('Test in <Calculator />', () => {

    const wrapper = shallow(<Calculator />);

    test('should Calculator the component correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });


    test('should have a css class in the div', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('calculator')).toBe(true);
    });

});
