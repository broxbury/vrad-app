import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AreaContainer from './AreaContainer';
import { MemoryRouter } from 'react-router-dom';
import { getAreaData } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('AreaContainer', () => {
  it('when a user logs in, we should see area cards', () => {
   
    const user = {
      username: 'Michelle',
      email: 'michelle@gmail.com',
      accountType: 'Other'
    }

    const areas = ({ 
      areas: [
          {
            nickname: 'RiNo',
            "id": 590,
            "name": "River North",
            "location": "North of Downtown Denver",
            "about": "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
            "region_code": 6356834,
            "quick_search": "o5kod9f5cqo0",
            "listings": [
                "/api/v1/listings/3",
                "/api/v1/listings/44",
                "/api/v1/listings/221",
                "/api/v1/listings/744",
                "/api/v1/listings/90",
                "/api/v1/listings/310"
            ]   
          },
          {
            "id": 751,
            "name": "Park Hill",
            "location": "East of Downtown Denver",
            "about": "Park Hill features one of the best views of the downtown area and surrounding mountains. With easy access to City Park and the major highways, Park Hill also includes many unique styles of homes.",
            "region_code": 6648386,
            "quick_search": "g1m0tsxzl0o0",
            "listings": [
                "/api/v1/listings/3921",
                "/api/v1/listings/56",
                "/api/v1/listings/21"
            ]
        }
    ]})

   const { getByText } = render(
    <MemoryRouter>
      <AreaContainer areas={areas.areas} userInfo={user} />
   </MemoryRouter>)

   expect(getByText('Where To, Michelle?')).toBeInTheDocument();
   expect(getByText('River North')).toBeInTheDocument();
   expect(getByText('Park Hill')).toBeInTheDocument()
  })
})