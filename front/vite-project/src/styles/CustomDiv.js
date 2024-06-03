import styled from "styled-components";
const CustomDiv= styled.div`
display: grid;
align-items: center;
padding: 9vh 7vh;
height: 25vh;
width: 10vw;
border-radius: 45px;
border: 1px solid black;
margin: 1vh;
margin-top: 5vh;
margin-bottom: 5vh;
background-color: rgb(65, 105, 225);
font-size: medium;
pointer: cursor;

&:hover {
    transform: scale(1.1);
    box-shadow: 10px 4px 8px 10px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    cursor: pointer;
}

span {
    // background-color: #fafafa;
    border-radius: 15px;
    // border: 1px solid black;
    padding: 4px;
}
`

export default CustomDiv