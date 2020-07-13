import React from 'react';
import {View} from 'react-native';

import { Wrapper, Container, Header, HeaderTitle, HeaderButtonContainer, HeaderButtonText, AvatarContainer,
     Avatar, UserInfoContainer, UserInfo, UserName,UserProfileButton, UserProfile } from './styles'

import CountList from '../../components/CountList'

import avatar from '../../../assets/images/avatar.png'

export default function Adjustments() {
    return (
        <Wrapper>
                <Header>
                    <HeaderTitle>Ajustes</HeaderTitle>
                    <HeaderButtonContainer>
                        <HeaderButtonText>Ajuda</HeaderButtonText>
                    </HeaderButtonContainer>
                </Header>   
            <Container>
                <AvatarContainer>
                    <Avatar source={avatar} />
                    <UserInfoContainer>
                        <UserInfo>@alisson.oliveira471</UserInfo>
                        <UserName>Alisson Oliveira</UserName>
                        <UserProfileButton>
                            <UserProfile>Ver meu perfil</UserProfile>
                        </UserProfileButton>
                    </UserInfoContainer>
                </AvatarContainer>
                <CountList />
            </Container>
        </Wrapper>
    );
};