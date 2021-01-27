import { StyleSheet } from 'react-native';
import { styles } from '../../styles';
import { R } from '../../assets';

const homeStyle = StyleSheet.create({
  classifyTitle: {
    color: R.colors.textColor.color1,
    fontSize: 18,
    ...styles.spacing.ml10,
    ...R.font.boldMontserrat,
  },
  classifyTextContainer: {
    ...styles.align.row,
    ...styles.align.justifyContent,
    ...styles.spacing.mr10,
  },
  mainContainer: {
    backgroundColor: R.colors.primary.color2,
    flex: 1,
    justifyContent: 'center',
  },
});

export { homeStyle };
