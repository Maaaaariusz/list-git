import React, { Component } from 'react';
import { Container } from "./home.style";
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component'
import { Wrapper } from "../../utils/styles/global.style";
import { colors } from "../../utils/styles/color.style";

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header/>
                home
                    <Footer/>
                </Container>
            </div>
        )
    }
}

export default Home;