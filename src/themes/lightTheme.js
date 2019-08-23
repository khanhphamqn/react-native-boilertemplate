import Colors from './color';
import FontSize from './fontSize';

const Light = {
  backgroundColor: {
    backgroundColor: Colors.LightTheme.white.color
  },
  backgroundColorSlider: {
    backgroundColor: Colors.LightTheme.main.color
  },
  header: {
    ...FontSize.header,
    ...Colors.LightTheme.black
  },
  text: {
    ...FontSize.text,
    ...Colors.LightTheme.black
  },
  trackColor: {
    ...Colors.LightTheme.main
  },
  error: {
    ...FontSize.text,
    ...Colors.LightTheme.red
  },
  colors: {
    ...Colors.LightTheme
  }
};

export default Light;
