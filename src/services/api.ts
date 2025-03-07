import axios from "axios"

export const api = axios.create({
  baseURL: "mongodb+srv://tatyanegoncalves023:esse_ano_vai_ser_incrivel@clients.klksc.mongodb.net/clients?retryWrites=true&w=majority&appName=Clients"
})