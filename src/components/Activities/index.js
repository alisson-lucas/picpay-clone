import React from 'react';
import { Container, Header, Title, Card, CardHeader, Avatar, Description, Bold, CardBody, UserName, CardFooter, Details, Value, Divider, Date, Actions, Options, OptionLabel } from './styles';
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons"

import avatar from '../../../assets/images/avatar.png'


export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@JuliaVitoria</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Alisson Lucas</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 20,00</Value>

                        <Divider />

                        <Feather name='lock' color='#fff' size={14} />
                        <Date>há 3 meses</Date>
                    </Details>

                    <Actions>
                        <Options>
                            <MaterialCommunityIcons name='comment-outline' size={14} color='#fff' />
                            <OptionLabel>0</OptionLabel>
                        </Options>
                        <Options>
                            <MaterialCommunityIcons name='heart-outline' size={14} color='#fff' />
                            <OptionLabel>0</OptionLabel>
                        </Options>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
};