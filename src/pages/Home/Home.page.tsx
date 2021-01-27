import React from 'react';
import {View, FlatList, Text, Button} from 'react-native';
import {styles} from '../../styles';

import {ScrollView} from 'react-native-gesture-handler';
import {homeStyle} from './Home.style';
import {R} from '../../assets';
import {useLinkProps, useNavigation} from '@react-navigation/native';
import {BottomNavigation} from 'react-native-paper';
import {Auth} from 'aws-amplify';
import {navigationStyle} from '../../routes/navigation.style';
const {size, align} = styles;

const renderItem = ({item, index}) => <Product />;

const Slider = ({data, title}: {data: Array<any>; title: string}) => {
  return (
    <>
      <View style={homeStyle.classifyTextContainer}>
        <Text style={homeStyle.classifyTitle}>{title}</Text>
        <Text>{R.strings.SEE_ALL}</Text>
      </View>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(index) => String(index)}
      />
    </>
  );
};

const HomePage = () => {
  try {
    const [index, setIndex] = React.useState(0);
    const navigation = useNavigation();
    return (
      <View style={homeStyle.mainContainer}>
        <Text> Home Screen </Text>
        <Button
          onPress={() => navigation.navigate('LoginPage')}
          title="Sign out"
        />
      </View>
    );
  } catch (err) {
    return null;
  }
};

export {HomePage};
