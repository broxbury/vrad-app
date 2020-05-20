import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AreaCard from './AreaCard';
import { BrowserRouter } from 'react-router-dom';

describe('AreaCard', () => {
  let mockArea;

  beforeEach(() => {
    mockArea = {
      'id': 590,
      'name': 'River North',
      'nickname': 'RiNo',
      'location': 'North of Downtown Denver',
      'about': 'RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!',
      'region_code': 6356834,
      'quick_search': 'o5kod9f5cqo0',
      'listings': [
          '/api/v1/listings/3',
          '/api/v1/listings/44',
          '/api/v1/listings/221',
          '/api/v1/listings/744',
          '/api/v1/listings/90',
          '/api/v1/listings/310'
        ]
      }
  });

  it('Displays the chossen areas information', () => {
    const { getByText } = render(
      <BrowserRouter>
        <AreaCard
          areaInfo={mockArea}
          />
      </BrowserRouter>
    );

     expect(getByText('River North')).toBeInTheDocument();
     expect(getByText('RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!')).toBeInTheDocument();
     expect(getByText('(RiNo)')).toBeInTheDocument();
     expect(getByText('LISTINGS')).toBeInTheDocument();
  });

})
