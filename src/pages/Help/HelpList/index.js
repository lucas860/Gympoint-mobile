import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';
import ContentContainer from '~/components/ContentContainer';
import Header from '~/components/Header';

import api from '~/services/api';

import {
  HelpButton,
  HelpQuestionsList,
  HelpCardBorder,
  HelpCard,
  HelpCardHeader,
  HelpSign,
  HelpTime,
  HelpCardText,
} from './styles';

function HelpList({ navigation, isFocused }) {
  const { student } = useSelector(state => state.student);

  const [questions, setQuestions] = useState([]);

  async function loadQuestions() {
    const response = await api.get(`/students/${student}/help-orders`);

    const questionList = response.data.map(q => ({
      ...q,
      answered: !!q.answer,
      dateFormatted: formatRelative(parseISO(q.createdAt), new Date(), {
        locale: pt,
      }),
    }));

    setQuestions(questionList);
  }

  useEffect(() => {
    if (isFocused) {
      loadQuestions();
    }
  }, [isFocused]);

  return (
    <Background>
      <ContentContainer>
        <HelpButton onPress={() => navigation.navigate('HelpRequest')}>
          Novo Pedido de Auxílio
        </HelpButton>

        <HelpQuestionsList
          data={questions}
          keyExtractor={req => String(req.id)}
          renderItem={({ item: req }) => (
            <HelpCardBorder>
              <HelpCard
                onPress={() => navigation.navigate('HelpAnswer', { req })}
              >
                <HelpCardHeader>
                  <HelpSign answered={req.answered}>
                    {req.answered ? 'Respondido' : 'Sem resposta'}
                  </HelpSign>
                  <HelpTime>{req.dateFormatted}</HelpTime>
                </HelpCardHeader>

                <HelpCardText numberOfLines={4}>{req.question}</HelpCardText>
              </HelpCard>
            </HelpCardBorder>
          )}
        />
      </ContentContainer>
    </Background>
  );
}

HelpList.navigationOptions = {
  headerBackground: () => <Header />,
  headerStyle: {
    height: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    elevation: 0,
  },
};

export default withNavigationFocus(HelpList);
