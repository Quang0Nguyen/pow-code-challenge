import { useQuery } from 'react-query'
import { getListSpell } from "services/spells";

export default function useSpells() {
  // const [spellList, setSpellList] = useState<any>([]);
  const { isLoading, isError, data, error } = useQuery('get-list-spells', getListSpell);
  return {
    listSpells: data, 
    isLoading,
    isError,
    error
  }
}
