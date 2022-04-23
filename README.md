# Tabor-College-App
## Introduction
With school being back in person and events happening on campus, it is important that the announcements of school events reach out to students. Our goal is to create a one-stop app that allows Tabor College students, faculty, and even ulumni to seeminglessly find school related information through their phones. Instead of searching through multiple sites to look for certain info, we have collected the resources that students frequently visit. Such resources are student life, Jayshop, maps, news, helpful hours, and more. We believe that having a curated mobile app can help students feel better connected to campus and informed of the ongoing activities at Tabor College. 

### Frontend Documentation
Since the mobile app needs to support both IOS and Android devices, the frontend team is using React Native, an open-source UI software framework that enables developers to create cross-platform applications. This tool is written in JavaScript, so a strong understanding of the JavaScript language is required. For example, ES6 (ECMAScript 6). React Native is a light-weight library, and it does not enforce a strict, opinionated way of coding. However, several React Native developers like to follow the Airbnb React/JSX Style Guide due to its prevalent convention. Using the same style guides can facilicate new developers learn React and become comfortable with a code base.


### Setting up the development environment
1. On your git bash window or terminal on Mac, run `git clone https://github.com/Falzaro/Tabor-College-App.git` to clone the Tabor-College-App repository from Github.
2. Then run `cd tabor-college-app` to go to the project directory.
3. To view the app using expo, execute `npm start`.

### Opening the app on your phone

1. Once you run `npm start`, a new tab opens up in your browser. 
2. On the left panel, change the connection from "LAN" to “Tunnel”. This is where you can view, test, and debug the mobile app. To see the app, make sure that you have "Expo Go" installed on your phone.
3. On your iPhone, scan the QR code with your default camera. You can now view the UI of the app. If you are using an android phone, press "Scan QR Code" on the "Projects" tab of the Expo Go app and scan the QR code you see in the terminal or in Expo Dev Tools.

## @expo/vector-icons
- React Native Elements Icons Documentation [click here](https://docs.expo.dev/guides/icons/#expovector-icons)

###### Available Icon Sets
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

###### Example to import an Icon 
- Type: `import {font-awesome} from '@expo/vector-icons';`
- Then checkout the supported icons to see which icons sets are available
* * Here is another example: 
- `import {Ionicons} from '@expo/vector-icons';`
How to call? 
- ` <Ionicons name="arrow-redo-sharp" size={14} color="#444444"  /> `
- Please see the supported icons for available names to each icons

### Backend Documentation
The backend team is using a package from Python that consists of BeautifulSoup. BeautifulSoup </br>
is a Python library that extracts data from HTML and XML files. The requirements for BeautifulSoup </br>
are Python and PIP (package installer for python). </br>

Installing Python: </br>
1. Install Python via https://www.python.org/downloads/.
2. Verify Python is installed by running the following command in the terminal: $ python --version

Installing Pip: </br>
1. Once Python is installed, download script from https://bootstrap.pypa.io/get-pip.py and store in </br>
the same directory where Python was installed earlier.
2. In the terminal, run the following command: python get-pip.py
3. Once the installation process is completed, Pip is now installed in the system.

Installing BeautifulSoup: </br>
1. Once Pip is installed, run the following command: pip install beautifulsoup4
2. Once the installation process is completed, BeautifulSoup is now installed in the system.

The following tools are used for the backend development: </br>
- Firestore Firebase
- Cloud functions / API
- Python, Pip, BeautifulSoup
- ReactNative
