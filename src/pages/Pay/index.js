import React from 'react';
import {  Text  } from 'react-native';

import { Wrapper, Container, Header, Search, SearchTitle, SuggestionsContainer, SuggestionsLabel, ServicesLabel } from './styles'

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import Suggestions from '../../components/Suggestions'

export default function Pay() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name = 'qrcode-scan' size = {30} color = '#10c86e' />
                    <Search>
                        <AntDesign name = 'search1' size = {20} color = '#a9a9a9' />
                        <SearchTitle>Quem você deseja pagar?</SearchTitle>
                    </Search>
                </Header>
                <SuggestionsContainer>
                    <SuggestionsLabel>SUGESTÕES PARA VOCÊ</SuggestionsLabel>
                </SuggestionsContainer>
                <Suggestions/>
                    <ServicesLabel>SERVIÇOS</ServicesLabel>
            </Container>
        </Wrapper>
    );
}
