import React from 'react';
import { shallow } from 'enzyme';

import Display from '../../components/Display';

describe('Test in <Display />', () => {

    const initialValue = [5];
    const wrapper = shallow(<Display initialValue={initialValue} />);

    test('should Display the component correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should have a text in the h1', () => {
        const h1 = wrapper.find('h1');

        expect(h1.text().trim()).toBe(initialValue[0].toString());
    });

    test('should have a css class in the div', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('bg-display')).toBe(true);
    });
});
