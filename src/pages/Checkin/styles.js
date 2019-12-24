import styled from 'styled-components/native';

import Button from '~/components/Button';

export const CheckinButton = styled(Button)`
  margin-top: 20px;
`;

export const CheckinList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const CheckinItem = styled.View`
  background: #fff;
  height: 45px;
  padding: 0px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CheckinStrongText = styled.Text`
  color: #444444;
  font-weight: bold;
`;

export const CheckinText = styled.Text`
  color: #666666;
`;
