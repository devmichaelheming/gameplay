import React from 'react';
import {
  View, Text, Image, StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './style';
import { illustrationImg } from '../../assets/illustration.png';

export function SignIn(){
  return(
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
        <Image
          source={illustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize{`\n`}
            suas jogatinas{`\n`}
            facilmente{`\n`}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos{`\n`}
          </Text>

          <ButtonIcon />
        </View>
    </View>
  );
}