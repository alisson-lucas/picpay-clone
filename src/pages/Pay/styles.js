import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
`;

export const Search = styled.TextInput`
    background: #fff;
    width: 280px;
    height: 35px;
    margin: 18px
    border-radius: 15px;
    border-color: #a9a9a9;
    border: 1px;
    padding-left: 10px;
`;

export const SearchTitle = styled.Text`
    color: #a9a9a9;
    font-size: 16px;
    
`;

export const SuggestionsContainer = styled.View`
    background: #1e222b;
`;

export const SuggestionsLabel = styled.Text`
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    margin-left: 16px;
    margin-top: 8px;
`;

export const ServicesLabel = styled.Text`
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    margin-left: 16px;
    margin-top: 8px;
`;