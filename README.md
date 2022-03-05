# Tabor-College-App
### Setting up the development environment
1. On your git bash window or terminal on Mac, run `git clone https://github.com/Falzaro/Tabor-College-App.git` to clone the Tabor-College-App repository from Github.
2. Then run `cd tabor-college-app` to go to the project directory.
3. To view the app using expo, execute `npm start`.

### Opening the app on your phone

1. Once you run `npm start`, a new tab opens up in your browser. 
2. On the left panel, change the connection from "LAN" to “Tunnel”. This is where you can view, test, and debug the mobile app. To see the app, make sure that you have "Expo Go" installed on your phone.
3. On your iPhone, scan the QR code with your default camera. You can now view the UI of the app. If you are using an android phone, press "Scan QR Code" on the "Projects" tab of the Expo Go app and scan the QR code you see in the terminal or in Expo Dev Tools.

### Backend Documentation
The backend team is using a package from Python that consists of BeautifulSoup. BeautifulSoup </br>
is a Python library that extracts data from HTML and XML files. The requirements for BeautifulSoup </br>
are Python and PIP (package installer for python). </br>

Installing Python: </br>
1. Install Python via https://www.python.org/downloads/.
2. Verify Python is installed by running the following command in the terminal: $ python --version

Installing Pip </br>
1. Once Python is installed, download script from https://bootstrap.pypa.io/get-pip.py and store in </br>
the same directory where Python was installed earlier.
2. In the terminal, run the following command: python get-pip.py
3. Once the installation process is completed, Pip is now installed in the system.

Installing BeautifulSoup </br>
1. Once Pip is installed, run the following command: pip install beautifulsoup4
2. Once the installation process is completed, BeautifulSoup is now installed in the system.

The following tools are used for the backend development: </br>
- Firestore Firebase
- Cloud functions / API
- Python, Pip, BeautifulSoup
- ReactNative
