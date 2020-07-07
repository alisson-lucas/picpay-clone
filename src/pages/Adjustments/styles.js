import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

export const Header = styled.View`
    height: 50px;
    margin-top: 16px;
    padding: 0 16px;
    flex-direction: row;
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
    margin-left: 140px;
`;

export const HeaderButtonContainer = styled.TouchableOpacity``;

export const HeaderButtonText = styled.Text`
    color: #0db060;
    font-size: 18px;
    
`;

export const AvatarContainer = styled.View`
    height: 250px;
    margin: 10px 0;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 90px;
    height: 90px;
`;

export const UserInfoContainer = styled.View`
    margin: 15px 0;
    align-items: center;
`;

export const UserInfo = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const UserName = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-top: 8px;
`;