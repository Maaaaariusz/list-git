import React, { Component } from 'react';

// styles
import { Container, Head } from "./header.style";
import { Wrapper } from "../../utils/styles/global.style";
import { colors } from "../../utils/styles/color.style";

class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Wrapper>
                        <a href ='/'>GitHub Users Example App</a>
                    </Wrapper>
                </Container>
            </div>
        )
    }
}

export default Header;