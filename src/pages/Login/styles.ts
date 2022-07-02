import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #fff;
`;

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: "#0274bc",
})``;

export const BlueView = styled.View`
  position: absolute;
  width: ${Dimensions.get("screen").height * 0.5}px;
  height: ${Dimensions.get("screen").height * 0.5}px;
  background-color: #0274bc;
  border-radius: ${Dimensions.get("screen").height * 0.25}px;
  top: -${Dimensions.get("screen").height * 0.25}px;
  align-self: center;
`;

export const ViewImage = styled.View`
  width: ${Dimensions.get("screen").height * 0.1}px;
  height: ${Dimensions.get("screen").height * 0.1}px;
  border-radius: ${Dimensions.get("screen").height * 0.05}px;
  margin-top: ${Dimensions.get("screen").height * (0.25 - 0.0768)}px;
  background-color: white;
  align-items: center;
  justify-content: center;
  align-self: center;
  elevation: 4;
`;

export const Image = styled.Image.attrs({
  source: require("../../../assets/sacola.jpeg"),
  resizeMode: "contain",
})`
  width: ${Dimensions.get("screen").height * 0.078}px;
  height: ${Dimensions.get("screen").height * 0.078}px;
  border-radius: ${Dimensions.get("screen").height * 0.02}px;
`;

export const ViewText = styled.View`
  margin-top: 40px;
  align-items: center;
`;

export const ViewInputEmail = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
  align-items: center;
`;

export const ViewInputSenha = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #0274bc;
`;

export const TextTwo = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  color: #3c3c3c;
`;

export const ViewButton = styled.View`
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
  align-items: flex-end;
`;

export const ViewSignUp = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextQuestSignUp = styled.Text`
  align-self: center;
  font-size: 18px;
`;

export const ButtonSignUp = styled.TouchableOpacity``;

export const TextSignUp = styled.Text`
  align-self: center;
  font-weight: bold;
  color: #0274bc;
  margin-left: 5px;
  font-size: 18px;
`;
