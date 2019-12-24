import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  height: 45px;
  padding: 0 15px;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;
