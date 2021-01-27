import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {styles} from '../../styles';
import {R} from '../../assets';
import {authSlice} from '../../redux/slices/auth.slice';
import {useNavigation} from '@react-navigation/native';
// import Amplify, {Auth, Hub} from 'aws-amplify';

// import config from '../../../aws-exports';
// import {withAuthenticator} from 'aws-amplify-react-native';
const {align, size, spacing} = styles;

// Amplify.configure(config);

export const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(props);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLoginPress = () => {
    dispatch(authSlice.actions.login({email, password}));
  };

  return (
    <Card style={[size.full]}>
      <Card.Content style={[align.verticalMiddle, size.full]}>
        <Title>{R.strings.LOGIN}</Title>
        <Paragraph>{R.strings.WELCOME_LOGIN}</Paragraph>
        <Button
          style={spacing.mt10}
          mode="contained"
          onPress={() => navigation.navigate('HomePage')}>
          {R.strings.LOGIN}
        </Button>
      </Card.Content>
    </Card>
  );
};
