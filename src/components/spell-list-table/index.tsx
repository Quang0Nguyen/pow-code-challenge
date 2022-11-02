import React from 'react'

import Spell from './spell-item';
import { ISpell } from "@/utils/type"
import { SpellListContainer } from "./style";

interface SpellListProps {
  spellList: ISpell[];
  count: number;
}
export default function SpellList({ spellList, count }: SpellListProps) {
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
      {spellList?.map((item, index) => <Spell key={index} spell={item} />)}
    </SpellListContainer>
  )
}
