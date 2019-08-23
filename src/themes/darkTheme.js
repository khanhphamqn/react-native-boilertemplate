import Colors from './color';
import FontSize from './fontSize';

const Dark = {
  backgroundColor: {
    backgroundColor: Colors.DarkTheme.black.color
  },
  backgroundColorSlider: {
    backgroundColor: Colors.DarkTheme.main.color
  },
  header: {
    ...FontSize.header,
    ...Colors.DarkTheme.white
  },
  text: {
    ...FontSize.text,
    ...Colors.DarkTheme.white
  },
  trackColor: {
    ...Colors.DarkTheme.main
  },
  error: {
    ...FontSize.text,
    ...Colors.DarkTheme.red
  },
  colors: {
    ...Colors.DarkTheme
  }
};

export default Dark;