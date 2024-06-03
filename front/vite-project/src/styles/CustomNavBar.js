import styled from "styled-components";

const CustomNavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #0C356A;
    color: #fafafa;
    padding: 8px;
    
    &:hover {
        transition: background-color 0.3s ease;
    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;
        justify-content: center;
    li {
        margin: 0 10vh;
        cursor: pointer;
        align-items: center;
        font-size: 2.5vh;
        
    }
    li:hover {
        transform: scale(1.1);
    }
    `

    export default CustomNavBar