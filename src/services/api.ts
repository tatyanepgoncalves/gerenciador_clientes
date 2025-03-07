import axios from "axios"

export const api = axios.create({
  baseURL: "https://gerenciador-clientes-back.vercel.app/"
})