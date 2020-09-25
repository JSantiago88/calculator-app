import React from 'react';
import { shallow } from 'enzyme';

import ButtonRow from '../../components/ButtonRow';

describe('Test in <ButtonRow />', () => {

    const buttons = [];
    const handleSelectButton = () => { };

    const wrapper = shallow(<ButtonRow
        buttons={buttons}
        handleSelectButton={handleSelectButton}
    />);

    test('should ButtonRow the component correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });


    test('should have a css class in the div', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('button-row')).toBe(true);
    });

});
