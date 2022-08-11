import {styled} from "../../ui/stitches.config";

export const Container = styled('div', {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
    marginLeft: 8
})

export const ListPeople = styled('div', {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18
})

export const FormCreatePeople = styled('form', {
    margin: 4,
    marginY: 16,
    display: "flex",
    flexDirection: "column"
})

export const Button = styled('button', {
    marginY: 16,
    width: "30%",
    padding: "6px",
    border: "1px solid #3333",
    borderRadius: 4,
    cursor: "pointer",


    '&:hover': {
        backgroundColor: 'lightgray',
    },
})

export const Label = styled('label', {
    marginY: 8
})

export const Input = styled('input', {
    marginLeft: 8,
    width: "50%",
    padding: "6px",
    border: "1px solid #3333",
    borderRadius: 4,
    outline: "none",
})

export const Person = styled('div', {
    marginY: 16
})

export const PersonInformation = styled('div', {
    marginTop: 8,
})

export const PersonDetails = styled('div', {
    display: "flex",
    justifyContent: "space-between"
})

export const TextHeader = styled('h1', {
    fontSize: "$25",
    lineHeight: "2rem"
})

export const TextBody = styled('p', {
    fontSize: "$10",
    lineHeight: "1.5rem"
})