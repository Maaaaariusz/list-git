import React, { Component } from 'react';

// style
import { Container } from "./footer.style";
import { Wrapper } from "../../utils/styles/global.style";
import { colors } from "../../utils/styles/color.style";

class Footer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Wrapper>
                    Copyright 2018 - Mariusz Matula
                    </Wrapper>
                </Container>
            </div>
        )
    }
}

export default Footer;