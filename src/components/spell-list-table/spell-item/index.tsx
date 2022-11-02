import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import { mutateFavorites } from 'store/spells/spellsSlice';

import { ISpell } from 'utils/type';
import { SellContainer } from "../style";

interface SpellProps {
  spell: ISpell
}
export default function Spell({ spell }: SpellProps) {
  const listFavorite = useSelector((state: RootState) => state.spellsState.listFavorite);
  const dispatch = useDispatch();

  const isFav = React.useMemo(() => {
    return listFavorite?.indexOf(spell.index) > -1
  }, [listFavorite, spell.index]);
  const changeFavorite = () => {
    dispatch(mutateFavorites(spell.index));
  }
  return (
    <SellContainer>
      <div className={`spell-name ${isFav ? "favorite" : ""}`}>{spell.name}</div>
      <div className="spell-url">
        <p>{spell.url}</p>
      </div>
      <div className="spell-action">
        <Link to={`/spells/${spell.index}`}>View detail</Link>
      </div>
      <div className="spell-fav">
        <svg onClick={changeFavorite} className='add-fav-icon' width="34" height="34" viewBox="0 0 24 24" fill={isFav ? "green" : "none"} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke="#212529" stroke-width="1.5" />
          <path d="M9 12H15M12 9V15" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </SellContainer>
  )
}
