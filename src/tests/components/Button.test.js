import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../components/Button';

describe('Test in <Button />', () => {

    const handleSelectButton = () => {};
    const value = '5';
    const styles = 'btn';

    const wrapper = shallow(<Button
        styles={styles}
        value={value}
        handleSelectButton={handleSelectButton}
    />);

    test('should Button the component correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });


    test('should have a button label', () => {
        
        const button = wrapper.find('button');

        expect(button.prop('onClick')).not.toBe(undefined);
    });
    

    test('should have a text in the button', () => {
        const button = wrapper.find('button');

        expect(button.text().trim()).toBe(value);
    });
});
