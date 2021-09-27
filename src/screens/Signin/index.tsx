import React from 'react';
import {
  View, Text, Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './style';

export function SignIn(){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
        <Image
          source={illustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos{`\n`}
          </Text>

          <ButtonIcon
            title="Entrar com Discord"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
    </View>
  );
}