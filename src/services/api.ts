import axios from "axios";
import { BASE_URL } from "../environments/config.json"

export const api = axios.create({
    baseURL: BASE_URL
})