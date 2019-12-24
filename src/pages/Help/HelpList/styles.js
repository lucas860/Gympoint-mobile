import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Button from '~/components/Button';

export const HelpButton = styled(Button)`
  margin-top: 20px;
`;

export const HelpQuestionsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const HelpCardBorder = styled.View`
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const HelpCard = styled(RectButton)`
  background: #fff;
  height: 150px;
  padding: 20px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 4px;
`;

export const HelpCardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HelpSign = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.answered === true ? '#42CB59' : '#999999')};
`;

export const HelpTime = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const HelpCardText = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
  line-height: 20px;
`;
