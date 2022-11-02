import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import { mutateFavorites } from 'store/spells/spellsSlice';
import { ISpell } from 'utils/type';

const SellContainer = styled.div`
  height: 50px;
  max-width: 800px;
  margin: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='18' ry='18' stroke='black' stroke-width='5' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='43' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 18px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    opacity: 0.8;
  }
  .spell-name {
    width: 30%;
    padding-left: 30px;
  }
  .spell-url {
    width: 35%;
  }
  .spell-action {
    width: 25%;
  }
  .spell-fav {
    width: 10%;
    button {
      cursor: pointer;
    }
    img {
      width: 40px;
      color: green;
    }
  }
  .favorite {
    color: green;
  }
  .add-fav-icon {
    cursor: pointer;
    &:hover {
      fill: green;
    }
  }

`
interface SpellProps {
  spell: ISpell
}
export default function Spell({ spell }: SpellProps) {
  const listFavorite = useSelector((state: RootState) => state.spellsState.listFavorite);
  const dispatch = useDispatch();
  
  const isFav = React.useMemo(() => {
    return listFavorite?.indexOf(spell.index) > -1
  }, [listFavorite.length]);
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
