import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const useLogin = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigateToHomeScreen = React.useCallback(() => {
    navigate("Home" as never);
  }, []);

  return {
    email,
    setEmail,
    senha,
    setSenha,
    navigateToHomeScreen,
  };
};

export default useLogin;
