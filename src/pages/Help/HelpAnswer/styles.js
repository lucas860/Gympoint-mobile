import styled from 'styled-components/native';

export const AnswerContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const AnswerCard = styled.View`
  background: #fff;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Question = styled.View`
  margin-bottom: 10px;
`;

export const QuestionCardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Answer = styled.View`
  margin-top: 10px;
`;

export const AnswerSign = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 15px;
`;

export const AnswerCardText = styled.Text`
  align-self: stretch;
  text-align: justify;
  line-height: 25px;
  color: #666;
`;

export const AnswerText = styled.Text`
  align-self: stretch;
  text-align: justify;
  line-height: 25px;
  color: ${props => (props.answered ? '#666' : '#EE4E62')};
`;
