import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import ContentContainer from '~/components/ContentContainer';
import Header from '~/components/Header';

import {
  CheckinButton,
  CheckinList,
  CheckinItem,
  CheckinStrongText,
  CheckinText,
} from './styles';

export default function Checkin() {
  const { student } = useSelector(state => state.student);

  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`/students/${student}/checkins`);

      const listCheckin = response.data.map(r => ({
        id: r._id,
        date: formatRelative(parseISO(r.createdAt), new Date(), {
          locale: pt,
        }),
      }));

      setCheckins(listCheckin);
    }

    loadCheckins();
  }, [student]);

  async function handleAddCheckin() {
    const response = await api.post('/students/3/checkins');

    const c = {
      id: response.data._id,
      date: formatRelative(parseISO(response.data.createdAt), new Date(), {
        locale: pt,
      }),
    };

    setCheckins(oldList => [...oldList, c]);
  }

  return (
    <Background>
      <Header />

      <ContentContainer>
        <CheckinButton onPress={handleAddCheckin}>Novo check-in</CheckinButton>

        <CheckinList
          data={checkins}
          keyExtractor={c => c.id}
          renderItem={({ item: c }) => (
            <CheckinItem>
              <CheckinStrongText>
                Check-in #
                {checkins
                  .reverse()
                  .map(checkin => checkin.id)
                  .indexOf(c.id) + 1}
              </CheckinStrongText>
              <CheckinText>{c.date}</CheckinText>
            </CheckinItem>
          )}
        />
      </ContentContainer>
    </Background>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Checkins',
  tabBarIcon: ({ tintColor }) => (
    <Icon size={20} color={tintColor}>
      bookmark_border
    </Icon>
  ),
};
