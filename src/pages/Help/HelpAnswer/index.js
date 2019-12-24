import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
  AnswerContainer,
  AnswerCard,
  Question,
  QuestionCardHeader,
  Answer,
  AnswerSign,
  AnswerCardText,
  AnswerText,
} from './styles';

export default function HelpAnswer({ navigation }) {
  const helpData = navigation.getParam('req');

  return (
    <Background>
      <AnswerContainer>
        <AnswerCard>
          <Question>
            <QuestionCardHeader>
              <AnswerSign>PERGUNTA</AnswerSign>
              <AnswerCardText>{helpData.dateFormatted}</AnswerCardText>
            </QuestionCardHeader>

            <AnswerCardText>{helpData.question}</AnswerCardText>
          </Question>

          <Answer>
            <AnswerSign>RESPOSTA</AnswerSign>

            <AnswerText answered={helpData.answered}>
              {helpData.answer
                ? helpData.answer
                : 'Esta requisição será respondida em breve...'}
            </AnswerText>
          </Answer>
        </AnswerCard>
      </AnswerContainer>
    </Background>
  );
}

HelpAnswer.navigationOptions = ({ navigation }) => ({
  headerBackground: () => <Header />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={30} color="#EE4E62" />
    </TouchableOpacity>
  ),
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
  headerStyle: {
    height: 50,
    backgroundColor: '#fff',
    elevation: 0,
  },
});
