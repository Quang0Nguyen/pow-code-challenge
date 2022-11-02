import React from 'react'
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import { mutateFavorites } from 'store/spells/spellsSlice';

import useSpellDetail from 'hooks/spell-detail';
const SpellDetailContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  margin-top: 50px;

  .spell-name {
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    border-bottom: solid 2px #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    button {
      width: 120px;
      height: 40px;
      margin-bottom: 5px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
    .btn-normal {
      background: #F0F0F0;
      color: #000;
      &:hover {
        background: green;
        color: #FFF;
      }
    }
    .btn-active {
      background: green;
      color: #FFF;
      &:hover {
        background: #F0F0F0;
        color: #000;
      }
    }
  }
  .spell-image-detail-figure {
    height: 300px;
    padding: 50px 0;
    text-align: center;
    img {
      height: 250px;
      border-radius: 10px;
    }
  }
  .spell-attributes {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 50px 20px;
    border-bottom: solid 2px #000;
    .atribute-name {
      font-size: 20px;
      font-weight: bold;
      padding-top: 20px;
    }
  }
  .spell-description {
    padding: 50px
  }
  .spell-atribute-item {
    width: 25%;
    padding-right: 20px;
  }
  .desc-header {
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 30px;
  }
`

export default function SpellDetail() {
  const params = useParams();
  const listFavorite = useSelector((state: RootState) => state.spellsState.listFavorite);
  const dispatch = useDispatch();

  const { spellDetail } = useSpellDetail({ api: params?.spell + "" })
  const isFav = React.useMemo(() =>
    listFavorite?.indexOf(spellDetail?.index) > -1
    , [listFavorite.length, spellDetail?.index]);
  const changeFavorite = () => {
    dispatch(mutateFavorites(spellDetail?.index));
  }
  return (
    <SpellDetailContainer>
      <div>
        <a href="/">Back to home</a>
      </div>
      <div className="spell-name">
        <div>{spellDetail?.name}</div>
        {spellDetail?.index && <div>
          <button className={isFav ? "btn-active" : "btn-normal"} onClick={changeFavorite}>{isFav ? "Remove Favorite" : "Add Favorite"}</button>
        </div>}
      </div>
      <div className="spell-image-detail-figure">
        <img src="https://cdn.vox-cdn.com/thumbor/f-Ko6DD9-nxzolnQkak5JYXKBoM=/37x0:823x442/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50984871/pottermore-patronus-test.0.jpg" />
      </div>
      <div className="spell-attributes">
        <div className="spell-atribute-item">
          <div>
            <div className="atribute-name">Level</div>
            <div className="atribute-value">{spellDetail?.level}</div>
          </div>
          <div>
            <div className="atribute-name">Material</div>
            <div className="atribute-value">{spellDetail?.material}</div>
          </div>
        </div>
        <div className="spell-atribute-item">
          <div>
            <div className="atribute-name">School</div>
            <div className="atribute-value">{spellDetail?.school?.name}</div>
          </div>
          <div>
            <div className="atribute-name">Class</div>
            <div className="atribute-value">{spellDetail?.classes[0]?.name}</div>
          </div>
        </div>
        <div className="spell-atribute-item">
          <div>
            <div className="atribute-name">Attack type</div>
            <div className="atribute-value">{spellDetail?.attack_type}</div>
          </div>
          <div>
            <div className="atribute-name">Casting time</div>
            <div className="atribute-value">{spellDetail?.casting_time}</div>
          </div>
        </div>
        <div className="spell-atribute-item">
          <div>
            <div className="atribute-name">Damage Type</div>
            <div className="atribute-value">{spellDetail?.damage?.damage_type?.name}</div>
          </div>
          <div>
            <div className="atribute-name">Duration</div>
            <div className="atribute-value">{spellDetail?.duration}</div>
          </div>
        </div>

      </div>
      <div className="spell-description">
        <div className="desc-header">
          Description
        </div>
        {spellDetail?.desc?.map((e: string, index:number) => <div key={index}>{e}</div>)}
      </div>
    </SpellDetailContainer>
  )
}
