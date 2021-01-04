import React from 'react';
import {describe, it, jest, test} from "@jest/globals";
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from "enzyme";

import {Navbar} from '../src/app';
import {Body} from '../src/app';
import {Footer} from '../src/app';

import {Profile} from "../src/Profile";

Enzyme.configure({ adapter: new Adapter() });

describe('Tests on render of class', () => {
    it('Render function of Navbar must set h1 to "AMAZOFF"', () => {
        const component = renderer.create(
            <Navbar />
        );
        expect(component.root.findByType('h1').children).toEqual(['AMAZOFF']);
    });

    it('Render function of Body must set h5 to id set in constructor', () => {
        const component = renderer.create(
            <Body id={5} />
        );
        expect(component.root.findByType('h5').children).toEqual(['5']);
    });

    it('Render function of Footer must set 5 icon in social network', () => {
        const wrapper = mount(<Footer />);
        const socialNetworkWrapper = wrapper.find('.social-network').children();
        expect(socialNetworkWrapper.length).toBe(5);
    });

    it('Tests on flip', () => {
        const flip = Profile.prototype.flip = jest.fn();
        const profile = new Profile();

        profile.flip('back');

        expect(flip).toHaveBeenCalledWith('back');
        expect(flip).toHaveBeenCalledTimes(1);
    });

    it('Test some style in Profile', () => {
        const wrapper = mount(<Profile />);

        expect(wrapper.find('#frontp2').get(0).props.style.cursor).toBe('pointer');
        expect(wrapper.find('#backb1').get(0).props.style.display).toBe('none');
    });
});