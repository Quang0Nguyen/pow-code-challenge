import React from 'react'
import styled from 'styled-components';

import Spell from './spell-item';
import { ISpell } from "@/utils/type"
const SpellListContainer = styled.div`
  width: 95%;
  max-width: 800px;
  margin: auto;
  .spell-list-header {
    display: flex;
    margin-bottom: 20px;
    font-weight: 500;
    font-style: italic;
  }
  .header-name {
    width: 50%;
    padding-left: 30px;
  }
  .header-url {
    width: 40%;
  }
  .header-fav {
    width: 10%;
  }
`
interface SpellListProps {
  spellList: ISpell[];
  count: number;
}
export default function SpellList({ spellList, count}: SpellListProps) {
  return (
    <SpellListContainer>
      <div className="spell-list-header">
        <div className="header-name">Name</div>
        <div className="header-url">
          Url
        </div>
        <div className="header-fav">
          Favorite
        </div>
      </div>
      {spellList?.map((item, index) => <Spell key={index} spell={item}/>)}
    </SpellListContainer>
  )
}
