import React from "react";
import { ScrollView } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useLogin from "./useLogin";
import * as S from "./styles";

const Login = () => {
  const { email, setEmail, senha, setSenha, navigateToHomeScreen } = useLogin();

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <S.Container>
        <S.StatusBar />
        <S.BlueView />
        <S.ViewImage>
          <S.Image />
        </S.ViewImage>
        <S.ViewText>
          <S.Text>Let's Sign You In</S.Text>
          <S.TextTwo>Welcome back, you've been missed!</S.TextTwo>
        </S.ViewText>
        <S.ViewInputEmail>
          <Input
            placeholder="email"
            label="Username or E-Mail"
            type="email"
            value={email}
            setValue={setEmail}
          />
        </S.ViewInputEmail>
        <S.ViewInputSenha>
          <Input
            placeholder="email"
            label="Passaword"
            secure
            type="senha"
            value={senha}
            setValue={setSenha}
          />
        </S.ViewInputSenha>
        <S.ViewButton>
          <Button onPress={navigateToHomeScreen} />
        </S.ViewButton>
        <S.ViewSignUp>
          <S.TextQuestSignUp>Don't have an account?</S.TextQuestSignUp>
          <S.ButtonSignUp>
            <S.TextSignUp>Sign Up</S.TextSignUp>
          </S.ButtonSignUp>
        </S.ViewSignUp>
      </S.Container>
    </ScrollView>
  );
};

export default Login;
