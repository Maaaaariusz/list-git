import React, { Component } from 'react';

// style
import { Container, UserLoginBox, UserInput, UserButton } from "./home.style";
import { Wrapper } from "../../utils/styles/global.style";
import { colors } from "../../utils/styles/color.style";

// components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

class Home extends Component {
    state = {
        users: [],
        userValue: '',
    };

    copmonentDidMount() {
        console.log('state component mount', this.state)
    };

    componentDidUpdate() {
        console.log('state component update', this.state)
    };

    addNewUser = () => {
        this.setState({
            users: [...this.state.users, this.state.userValue],
            userValue: '',
            });
        };

    userOnchange = (e) => {
        e.preventDefault()
        this.setState({userValue: e.target.value});
    };

    render() {
        return (
            <div>
                <Container>
                    <Header/>
                    <Wrapper>
                        <UserLoginBox>
                            <div>Please add GitHub user name to observable.</div>
                            <UserInput value={this.state.userValue} onChange={this.userOnchange}/>
                            <UserButton onClick={this.addNewUser}>
                                Add user
                            </UserButton>
                        </UserLoginBox>
                    </Wrapper>
                    <Footer/>
                </Container>
            </div>
        )
    }
}

export default Home;