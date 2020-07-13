import styled from 'styled-components/native';

export const ListContainer = styled.View`
   flex: 1;
   margin-bottom: 25px; 
`;

export const Title = styled.Text`
    color: rgba(255,255,255, 0.6);
    font-size: 16px;
    padding: 10px;
`;

export const Item = styled.Text`
    padding: 10px;
    font-size: 18px;
    height: 44px;
    color: #fff;
`; 

export const Divider = styled.View`
    width: 350px;
    height: 1px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0 10px;
`;