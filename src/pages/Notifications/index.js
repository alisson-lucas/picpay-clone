import React from 'react';
import {View} from 'react-native';

import { Wrapper, Header, HeaderTitle, BodyContainer, BodyContent, HeaderButtonContainer, HeaderButtonText } from './styles'

export default function Notification() {
    return (
        <Wrapper>
            <Header>
                <HeaderTitle>Notificações</HeaderTitle>
                <HeaderButtonContainer>
                    <HeaderButtonText>Configurar</HeaderButtonText>
                </HeaderButtonContainer>
            </Header>
            <BodyContainer>
                <BodyContent>Nenhuma notificação ainda</BodyContent>
            </BodyContainer>
        </Wrapper>
    );
};