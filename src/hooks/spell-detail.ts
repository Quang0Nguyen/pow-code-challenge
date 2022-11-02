import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { getSpellDetail } from "services/spells";

interface IuseSpellDetail {
  api: string;
}
export default function useSpellDetail({api}: IuseSpellDetail) {
  // const [spellList, setSpellList] = useState<any>([]);
  const { isLoading, isError, data, error } = useQuery('get-spell-detail', () => getSpellDetail(api));
  return {
    spellDetail: data, 
    isLoading,
    isError,
    error
  }
}
