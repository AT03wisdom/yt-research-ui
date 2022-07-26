import { React, createContext, useState } from 'react';
import styled from 'styled-components';

const sortOptions = ['総再生回数順', '登録者数順'];
const DropDown = styled.select`
  border-width: 1.5px;
  border-radius: 0.5em;
  width: 120px;
  height: 20px;
`;

export default function SortOptionDropDown({handleSort}) {
  return (
    <DropDown onChange={(e) => handleSort(e.target.value)}>
      {sortOptions.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </DropDown>
  );
}
