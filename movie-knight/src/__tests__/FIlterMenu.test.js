import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterMenu from "../components/movieDashboard/FilterMenu.js";

// test('FilterMenu renders correctly',() =>{
//     expect(render(<FilterMenu/>)).toMatchSnapshot();
//    });

test('FilterMenu displays', () => {
    const wrapper = render(<FilterMenu />);
    const text1 = wrapper.getByText(/sort by/i)
    const text2 = wrapper.getByText(/most recent/i)
    const text3 = wrapper.getByText(/oldest/i)
    const text4 = wrapper.getByText(/a-z/i)
    const text5 = wrapper.getByText(/z-a/i)
    const text6 = wrapper.getByText('R')
    const text7 = wrapper.getByText(/pg-13/i)
    const text8 = wrapper.getByText('PG')
    const text9 = wrapper.getByText('G')
    const text10 = wrapper.getByText(/see results/i)

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(text4).toBeInTheDocument();
    expect(text5).toBeInTheDocument();
    expect(text6).toBeInTheDocument();
    expect(text7).toBeInTheDocument();
    expect(text8).toBeInTheDocument();
    expect(text9).toBeInTheDocument();
    expect(text10).toBeInTheDocument();
});
