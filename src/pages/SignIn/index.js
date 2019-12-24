import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, Input, SubmitButton } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const [student, setStudent] = useState('');

  function handleSignIn() {
    dispatch(signInRequest(student));
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <Input
          value={student}
          onChangeText={setStudent}
          placeholder="Informe seu ID de cadastro"
        />
        <SubmitButton onPress={handleSignIn}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
