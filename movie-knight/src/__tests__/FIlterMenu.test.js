import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import FilterMenu from "../components/movieDashboard/FilterMenu.js";
import { renderWithRedux } from "../StoreFactory";

// test('FilterMenu renders correctly',() =>{
//     expect(render(<FilterMenu/>)).toMatchSnapshot();
//    });

afterEach(cleanup);

describe("FilterMenu", () => {
    
  test("Menu renders ", () => {
    const { getByTestId } = renderWithRedux(<FilterMenu />);
    const line1= getByTestId("line1 bl");
    const line2 = getByTestId("line1 wh");
    const line3 = getByTestId("line2 bl");
    const line4 = getByTestId("line2 wh");
    const line5 = getByTestId("line3 bl");
    const line6 = getByTestId("line1 wh");
   
    expect(line1).toBeInTheDocument();
    expect(line2).toBeInTheDocument();
    expect(line3).toBeInTheDocument();
    expect(line4).toBeInTheDocument();
    expect(line5).toBeInTheDocument();
    expect(line6).toBeInTheDocument();
    
  });

    test('FilterMenu displays texts', () => {
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

    test("Forms renders correctly", () => {
      const { getByTestId } = renderWithRedux(<FilterMenu />);
      const recent = getByTestId("recentform");
      const old = getByTestId("oldform");
      const az = getByTestId("azform");
      const za = getByTestId("zaform");
      const rform = getByTestId("rform");
      const pg13form = getByTestId("13form");
      const pgform = getByTestId("pgform");
      const gform = getByTestId("gform");
      const form1 = getByTestId("1form");
      const form2 = getByTestId("2form");
      const form3 = getByTestId("3form");
      const form4 = getByTestId("4form");
      const form5 = getByTestId("5form");

      expect(recent).toBeInTheDocument();
      expect(old).toBeInTheDocument();
      expect(az).toBeInTheDocument();
      expect(za).toBeInTheDocument();
      expect(rform).toBeInTheDocument();
      expect(pg13form).toBeInTheDocument();
      expect(pgform).toBeInTheDocument();
      expect(gform).toBeInTheDocument();
      expect(form1).toBeInTheDocument();
      expect(form2).toBeInTheDocument();
      expect(form3).toBeInTheDocument();
      expect(form4).toBeInTheDocument();
      expect(form5).toBeInTheDocument();
    });
    
    test('Recent form', () => {
        
        const { getByTestId } = renderWithRedux(<FilterMenu />);
        const input = getByTestId("recentform");
        input.value = "recent";
        fireEvent.change(input);
        expect(input.value).toBe("recent");

        const input2 = getByTestId("oldform");
        input2.value = "old";
        fireEvent.change(input);
        expect(input2.value).toBe("old");

        const input3 = getByTestId("azform");
        input3.value = "az";
        fireEvent.change(input);
        expect(input3.value).toBe("az");
        
        const input4 = getByTestId("zaform");
        input4.value = "za";
        fireEvent.change(input);
        expect(input4.value).toBe("za");
      
        const input5 = getByTestId("rform");
        input5.value = "R";
        fireEvent.change(input);
        expect(input5.value).toBe("R");
      
        const input6 = getByTestId("13form");
        input6.value = "PG-13";
        fireEvent.change(input);
        expect(input6.value).toBe("PG-13");
      
        const input7 = getByTestId("pgform");
        input7.value = "PG";
        fireEvent.change(input);
        expect(input7.value).toBe("PG");
      
        const input8 = getByTestId("gform");
        input8.value = "G";
        fireEvent.change(input);
        expect(input8.value).toBe("G");
        
        const input9 = getByTestId("1form");
        input9.value = "1";
        fireEvent.change(input);
        expect(input9.value).toBe("1");
      
        const input10 = getByTestId("2form");
        input10.value = "2";
        fireEvent.change(input);
        expect(input10.value).toBe("2");
      
        const input11 = getByTestId("3form");
        input11.value = "3";
        fireEvent.change(input);
        expect(input11.value).toBe("3");
      
        const input12 = getByTestId("4form");
        input12.value = "4";
        fireEvent.change(input);
        expect(input12.value).toBe("4");
      
        const input13 = getByTestId("5form");
        input13.value = "5";
        fireEvent.change(input);
        expect(input13.value).toBe("5");
      
      });

      test ("results button", async () => {
        const setFilter = jest.fn();
        const wrapper = renderWithRedux(<FilterMenu setFilter={setFilter}/>);
        const button = wrapper.getByTestId("filter-btn");
        fireEvent.click(button);
        expect(button).toBeTruthy(); 
      })  
    });  


  