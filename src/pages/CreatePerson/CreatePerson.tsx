import {useEffect, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {getPeople, savePerson} from "../../services/People";
import * as S from "./CreatePersonStyles";
import {Label} from "./CreatePersonStyles";

export type People = {
    uuid: string,
    cpf: string,
    name: string,
    age: number,
    email: string,
    profession: string,
    createdAt: string,
    updatedAt: string
}

export type Inputs = Omit<People, "uuid"|"createdAt"|"updatedAt">;

const CreatePerson = () => {
    const { register, handleSubmit, reset } = useForm<Inputs>();


    const [people, setPeople] = useState<People[]>([])

    async function getAllPeople() {
        const response = await getPeople()

        setPeople(response)
    }

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response = await savePerson(data)

        setPeople(prevState => [...prevState, response])
        reset()
    }

    useEffect(() => {
        getAllPeople()
    })

    return (
       <S.Container>
           <S.ListPeople>
               {
                   people.map(person => {
                       return (
                           <S.Person key={person.cpf}>
                                <S.PersonDetails>
                                    <S.TextHeader>{person.name}</S.TextHeader>
                                    <S.TextHeader>{person.cpf}</S.TextHeader>
                                </S.PersonDetails>

                               <S.PersonInformation>
                                   <S.TextBody>E-mail: {person.email}</S.TextBody>
                                   <S.TextBody>Idade: {person.age}</S.TextBody>
                                   <S.TextBody>Trabalho: {person.profession}</S.TextBody>
                               </S.PersonInformation>
                           </S.Person>
                       )
                   })
               }
           </S.ListPeople>

           <S.FormCreatePeople onSubmit={handleSubmit(onSubmit)}>
               <S.Label>
                   CPF:
                   <S.Input type="text" {...register("cpf")} />
               </S.Label>

               <S.Label>
                   Nome:
                   <S.Input type="text" {...register("name")} />
               </S.Label>

               <S.Label>
                   E-mail:
                   <S.Input type="email" {...register("email")} />
               </S.Label>

               <S.Label>
                   Idade:
                   <S.Input type="number" {...register("age")} />
               </S.Label>

               <S.Label>
                   Trabalho:
                   <S.Input type="text" {...register("profession")} />
               </S.Label>

               <S.Button type="submit">Send</S.Button>
           </S.FormCreatePeople>
       </S.Container>
    )
}

export default CreatePerson;