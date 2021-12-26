INSTRUCTIONS TO RUN :
1) clone the repository using
git clone https://github.com/Shreyansh-Rai/interviewme.git
2) change directory into interviewme/commsModule
run: npm install
run: npx nodemon server.js
3) change directory into .interviewme/interview
run: npm install	 

 change directory into interviewme/interview/backend
run: npx nodemon server.js
4) change directory to interviewme/interview/src
run: npm start
5) In case of errors shown in step 4 ( ie. a browser with the webpage does not open)
run: export NODE_OPTIONS=—openssl-legacy-provider
 followed by
run: npm start
List of recommended browsers :
Although the npm start command will open a window in the browser that is set default on
your machines the following is a list of browsers that we recommend you to open the
localhost at :
1) Brave
2) Firefox
3) Safari
Although chrome works as well sometimes there is a cors issue while communicating
between inter port processes as we have and so we do not advise using it to test the
application.
