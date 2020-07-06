import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderContainer = styled.View`
    margin-top: 16px;
`;

export const HeaderTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-left: 120px
`;

export const HeaderButtonContainer = styled.TouchableOpacity``;

export const HeaderButtonText = styled.Text`
    color: #0db060;
    font-size: 18px;
`;

export const BodyContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const BodyContent = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    font-size: 20px;
`;
