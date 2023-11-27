import { styled } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';


export const Button = styled.button`
background-color: rgb(255, 0, 129);
padding: 5px;
border: 1px solid black;
color: rgb(255, 255, 255);
&:hover {
    background-color: rgba(255, 0, 130, 0.5) 0px 2px 25px;
    color: black;
    border: 1px solid rgb(255, 255, 255);
}
`;

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 8px;
width: 320px;
`;

export const StyledField = styled(Field)`
padding: 4px;
font-size: inherit;
`;

export const StyledLabel = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
`;

export const ErrorMsg = styled(ErrorMessage)`
font-size: 12px;
color: red;
`;