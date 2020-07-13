import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { ListContainer, Title, Item, Divider } from './styles';

export default function CountList() {
    return (
      <ListContainer>
        <Title>Minha conta</Title>
        <Divider/>
        <FlatList scrollEnabled= 'false'
          data={[
            {key: 'Meu PicPay'},
            {key: 'Meu Numero'},
            {key: 'Meu e-mail'},
            {key: 'Dados pessoais'},
            {key: 'Conta bancária'},
            {key: 'Taxas e limites'},
            {key: 'Meus endereços'},
            {key: 'Meus favoritos'},
            {key: 'Validar identidade'},
            
          ]}
          renderItem={({item}) => 
          <>
          <Item >{item.key}</Item>
          <Divider/>
          </>
        }
        />
      </ListContainer>
    );
}

