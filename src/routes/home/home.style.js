import styled from 'styled-components';
import {colors} from "../../utils/styles/color.style";

export const Container = styled.div`
`;

export const UserLoginBox = styled.div`
    border: 1px solid ${colors.dark};
    border-radius: 3px;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    width: 500px;        
`;

export const UserInput = styled.input`
    border: 1px solid ${colors.light};
    padding: 5px;
    margin-top: 15px;
            
`;

export const UserButton = styled.button`
    padding: 6px;
    border: 0;
    color: ${colors.white};
    background: ${colors.dark};
    margin-top: 15px;  
    
    &:hover {
        background: ${colors.medium}
    }  
`;