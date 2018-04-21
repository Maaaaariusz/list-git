import styled from 'styled-components';
import { colors } from "../../utils/styles/color.style";

export const Container = styled.div`
    text-align: center;
    color: ${colors.light};
    font-size: 15px;
    
    &> div {
        border-top: 1px solid ${colors.light};
        padding: 5px 0;
    }
`;
