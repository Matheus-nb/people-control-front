import { api } from "./api";
import {Inputs, People} from "pages/CreatePerson/CreatePerson";

export const getPeople = async () => {
    const response = await api.get<People[]>("/people")

    return response.data
}

export const savePerson = async (data: Inputs) => {
    const response = await api.post<People>("/people", data)

    return response.data
}