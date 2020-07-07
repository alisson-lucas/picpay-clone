import React from 'react';
import {View} from 'react-native';

import { Wrapper, Header, HeaderTitle, HeaderButtonContainer, HeaderButtonText, AvatarContainer, Avatar, UserInfoContainer, UserInfo, UserName } from './styles'

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

                <AvatarContainer>
                    <Avatar source={avatar} />
                    <UserInfoContainer>
                        <UserInfo>@alisson.oliveira471</UserInfo>
                        <UserName>Alisson Oliveira</UserName>
                    </UserInfoContainer>
                </AvatarContainer>
            
        </Wrapper>
    );
};