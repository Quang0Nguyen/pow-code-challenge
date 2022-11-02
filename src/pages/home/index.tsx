import React from 'react'
import SpellList from '../../components/spell-list-table';
import styled from "styled-components";

import useSpells from 'hooks/spell-list';

const HomeContainer = styled.div`
  width: 92%;
  padding: 100px 50px;
  .home-title {
    font-size:30px;
    border-bottom: solid 3px #000;
    margin-bottom: 30px;
  }
`
export default function Home() {
  const { listSpells, isLoading, isError, error } = useSpells();

  return (
    <HomeContainer>
      <div className="home-title">
        Spells
      </div>
      <SpellList spellList={listSpells?.results.slice(0,5)} count={listSpells?.count}/>
    </HomeContainer>
  )
}
