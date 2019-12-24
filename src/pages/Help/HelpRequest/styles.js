import styled from 'styled-components/native';

export const HelpRequestContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 20px 0;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const Input = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: 'top',
})`
  height: 300px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  font-size: 16px;
  text-align: justify;
`;
