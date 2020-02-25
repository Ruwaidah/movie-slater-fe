import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterMenu from "./FilterMenu.js";

// test('FilterMenu renders correctly',() =>{
//     expect(render(<FilterMenu/>)).toMatchSnapshot();
//    });

test('FilterMenu displays', () => {
    const wrapper = render(<FilterMenu/>);
    wrapper.getByText(/sort by/i)
    wrapper.getByText(/most recent/i)
    wrapper.getByText(/oldest/i)
    wrapper.getByText(/a-z/i)
    wrapper.getByText(/z-a/i)
    wrapper.getByText('R')
    wrapper.getByText(/pg-13/i)
    wrapper.getByText('PG')
    wrapper.getByText('G')
    wrapper.getByText(/see results/i)
});
