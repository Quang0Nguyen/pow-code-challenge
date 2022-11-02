import { ISpell } from "@/utils/type";
import axios from "axios"
// const baseUrl = "https://www.dnd5eapi.co/api"
const baseUrl = process.env.API_HOST;

export const getListSpell = async () => {
  let res = await axios.get(`${baseUrl}/spells`);
  return res.data;
} 

export const getSpellDetail = async (api: string) => {
  let res = await axios.get(`${baseUrl}/spells/${api}`);
  return res.data;
} 