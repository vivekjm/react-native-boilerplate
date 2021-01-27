import {StyleSheet} from 'react-native';

const align = StyleSheet.create({
  horizondalMiddle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  verticalMiddle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  flex1: {
    display: 'flex',
    flex: 1,
  },
  justifyContent: {
    justifyContent: 'space-between',
  },
});

export default align;
