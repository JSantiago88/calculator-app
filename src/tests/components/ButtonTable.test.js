import React from 'react';
import { shallow } from 'enzyme';

import ButtonTable from '../../components/ButtonTable';

describe('Test in <ButtonTable />', () => {

   
    const handleSelectButton = () => { };

    const wrapper = shallow(<ButtonTable handleSelectButton={handleSelectButton} />);

    test('should ButtonTable the component correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });


    test('should have a css class in the div', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('button-table')).toBe(true);
    });

});
