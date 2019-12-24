import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { reloadRequest, reloadSuccess } from '~/store/modules/helpList/actions';
import api from '~/services/api';

import Background from '~/components/Background';
import ContentContainer from '~/components/ContentContainer';
import Button from '~/components/Button';
import Header from '~/components/Header';

import { HelpRequestContainer, Form, Input } from './styles';

export default function HelpRequest({ navigation }) {
  const dispatch = useDispatch();
  const { student } = useSelector(state => state.student);

  const [question, setQuestion] = useState();

  async function handleSubmit() {
    await api.post(`/students/${student}/help-orders`, {
      question,
    });

    dispatch(reloadRequest());
    navigation.navigate('HelpList');
    dispatch(reloadSuccess());
  }

  return (
    <Background>
      <ContentContainer>
        <Form>
          <HelpRequestContainer>
            <Input
              value={question}
              onChangeText={setQuestion}
              placeholder="Inclua seu pedido de auxílio"
            />
          </HelpRequestContainer>
        </Form>

        <Button onPress={handleSubmit}>Enviar Pedido</Button>
      </ContentContainer>
    </Background>
  );
}

HelpRequest.navigationOptions = ({ navigation }) => ({
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
