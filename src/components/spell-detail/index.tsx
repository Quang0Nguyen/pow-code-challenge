import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import { mutateFavorites } from 'store/spells/spellsSlice';

import useSpellDetail from 'hooks/spell-detail';
import illustrationImage from "images/illustration.png";
import { SpellDetailContainer } from "./style";

export default function SpellDetail() {
  const params = useParams();
  const listFavorite = useSelector((state: RootState) => state.spellsState.listFavorite);
  const dispatch = useDispatch();

  const { spellDetail } = useSpellDetail({ api: params?.spell + "" })
  const isFav = React.useMemo(() =>
    listFavorite?.indexOf(spellDetail?.index) > -1
    , [spellDetail?.index, listFavorite]);
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
        <img alt="" src={illustrationImage} />
      </div>
      <div className="spell-attributes">
        <div className="spell-atribute-item">
          <div>
            <div className="atribute-name">Level</div>
            <div className="atribute-value">{spellDetail?.level}</div>
          </div>
          <div>
            <div className="atribute-name">Material</div>
            <div className="atribute-value">{spellDetail?.material || "Unknown"}</div>
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
            <div className="atribute-value">{spellDetail?.attack_type || "Unknown"}</div>
          </div>
          <div>
            <div className="atribute-name">Casting time</div>
            <div className="atribute-value">{spellDetail?.casting_time}</div>
          </div>
        </div>
        <div className="spell-atribute-item">
          <div>
            <div className="atribute-name">Damage Type</div>
            <div className="atribute-value">{spellDetail?.damage?.damage_type?.name || "Unknown"}</div>
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
        {spellDetail?.desc?.map((e: string, index: number) => <div key={index}>{e}<br /><br /></div>)}
      </div>
    </SpellDetailContainer>
  )
}
