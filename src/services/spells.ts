import axios from "axios"
const baseUrl = "https://www.dnd5eapi.co/api"

export const getListSpell = async () => {
  let res = await axios.get(`${baseUrl}/spells`);
  return res.data;
} 

export const getSpellDetail = async (api: string) => {
  let res = await axios.get(`${baseUrl}/spells/${api}`);
  return res.data;
} 