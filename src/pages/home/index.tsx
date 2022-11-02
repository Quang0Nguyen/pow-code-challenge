import React, { useState } from 'react'
import styled from "styled-components";
import useSpells from 'hooks/spell-list';
import SpellList from '../../components/spell-list-table';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

import { ISpell } from "@/utils/type";

const HomeContainer = styled.div`
  width: 92%;
  padding: 100px 50px;
  .home-title {
    font-size:30px;
    border-bottom: solid 3px #000;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    
    .btn-normal {
      background: #F0F0F0;
      color: #000;
    }
    .btn-active {
      background: green;
      color: #FFF;
    }
    button {
      width: 120px;
      height: 40px;
      margin-bottom: 5px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`
export default function Home() {
  const [isFav, setIsFav] = useState<boolean>(false)
  const changeIsFav = () => setIsFav(!isFav);
  const { listSpells } = useSpells();
  const listFavorite = useSelector((state: RootState) => state.spellsState.listFavorite);
  const listSpellsApply = isFav ? listSpells?.results?.filter((spell: ISpell) => listFavorite.indexOf(spell.index ) > -1) : listSpells?.results
  return (
    <HomeContainer>
      <div className="home-title">
        <div>Spells</div>
        <div>
          <button className={isFav ? "btn-active" : "btn-normal"} onClick={changeIsFav}>Favorite</button>
        </div>
      </div>
      <SpellList spellList={listSpellsApply?.slice(0,10)} count={listSpells?.count}/>
    </HomeContainer>
  )
}
