import React from 'react';
import {  Switch  } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from "@expo/vector-icons"

import { Wrapper, Header, HeaderContainer, Title, BalanceContainer, Value, Bold,
        EyeButton, Info, Actions, Action, ActionLabel, UseBalance, UseBalanceTitle, PaymentMethods, PaymentMethodsTitle,
        Card, CardBody, CardDetails, CardTitle, CardInfo, Img, AddButton, AddLabel } from './styles';

import creditCard from '../../../assets/images/credit-card.png'

export default function Wallet() {
    return (
        <Wrapper>
            <Header colors={['#52e78c', '#1ab563']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>0,00</Bold>
                        </Value>
                            <EyeButton>
                                <Feather name='eye' size={28} color="#fff" />
                            </EyeButton>
                    </BalanceContainer>
                        <Info>Seu saldo está usando 100% do CDI</Info> 

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name='cash' size={28} color='#fff'/>
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <FontAwesome name='bank' size={20} color='#fff'/>
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>

                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
                <Switch />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>
                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                        <CardInfo>
                            Cadastre seu cartão de crédito para poder fazer pagamentos
                            mesmo quando não tiver saldo no seu PicPay.
                        </CardInfo>
                        </CardDetails>
                        <Img source={creditCard} resizeMode='contain' />
                    </CardBody>

                    <AddButton>
                        <AntDesign name='pluscircleo' size={30} color='#0db060'/>
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButton>
                </Card>
            </PaymentMethods>


        </Wrapper>
    );
}
