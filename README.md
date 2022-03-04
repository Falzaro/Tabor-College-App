# Tabor-College-App
### Setting up the development environment
1. On your git bash window or terminal on Mac, run `git clone https://github.com/Falzaro/Tabor-College-App.git` to clone the Tabor-College-App repository from Github.
2. Then run `cd tabor-college-app` to go to the project directory.
3. To view the app using expo, execute `npm start`.

### Opening the app on your phone

1. Once you run `npm start`, a new tab opens up in your browser. 
2. On the left panel, change the connection from "LAN" to “Tunnel”. This is where you can view, test, and debug the mobile app. To see the app, make sure that you have "Expo Go" installed on your phone.
3. On your iPhone, scan the QR code with your default camera. You can now view the UI of the app. If you are using an android phone, press "Scan QR Code" on the "Projects" tab of the Expo Go app and scan the QR code you see in the terminal or in Expo Dev Tools.

### Install Icons Component
- React Native Elements Icons Documentation [click here](https://reactnativeelements.com/docs/icon)
1. Run : `npm install react-native-vector-icons`
### Available Icon Sets
- [antdesign](https://ant.design/components/icon/)
- [entypo](http://www.entypo.com/)
- [evilicon](http://evil-icons.io/)
- [feather](https://feathericons.com/)
- [font-awesome](https://fontawesome.com/v4.7.0/)
- [font-awesome-5](https://fontawesome.com/)
- [fontisto](https://www.fontisto.com/icons)
- [foundation](http://zurb.com/playground/foundation-icon-fonts-3)
- [ionicon](http://ionicons.com/)
- [material](https://material.io/tools/icons)
- [material-community](https://materialdesignicons.com/)
- [octicon](https://octicons.github.com/)
- [simple-line-icon](https://simplelineicons.github.io/)
- [zocial](http://weloveiconfonts.com/)

- To Check out all the supported icons, visit [react-native-vector-icons directory](https://oblador.github.io/react-native-vector-icons/)

### Example to import an Icon 
- How to import Icon once it is installed. 
- Type: `import name_it_your_choice from 'react-native-vector-icons/which_Available_Icons_it_is_from';
Here is an example from fontAwesome: 
- `import ShoppingCart from 'react-native-vector-icons/FontAwesome';