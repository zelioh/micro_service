import React from 'react';
import {test} from "@jest/globals";
import renderer from 'react-test-renderer';
import {Head} from '../src/js/app';

test('Render function of Head must be "Amazon like !"', () => {
    const component = renderer.create(
        <Head />
    );
    expect(component.root.findByType('div').children).toEqual(['Amazon like !']);
});