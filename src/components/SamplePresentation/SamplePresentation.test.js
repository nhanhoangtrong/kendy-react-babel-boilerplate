import React from 'react';
import renderer from 'react-test-renderer';
import SamplePresentation from './index';

test('Test SamplePresentation', () => {
    const component = renderer.create(<SamplePresentation isShownText onClickToggleText={() => {}}/>);
    expect(component.toJSON().type).toBe('div');
});