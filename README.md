# _Digital Trainer._

#### _School course in creating a web app in React/Re-dux, C#, Entity Frame Work, mySQL._

#### By _**Ryan Leslie**_

## Project Description

* _Application that helps guide a user on what exercises to do what exercises there for specific regions of there body. This applications front end is all React with redux, the back end is C# that renders my mySQL data while using Entity Frame Work. When each button is clicked an API call is made from my react component that calls my server to retrieve the information. The data from the database includes information and images on specific one week workout plans and workouts for specific muscle groups. This application also includes a history component that records all your completed workouts and uploads them to the database._

## Name of Student: Ryan Leslie
## Name of Project: Digital Trainer
## Project’s Purpose or Goal: (Give users a quick and easy guide to learning how to workout without having to hire a personal trainer)
## List the absolute minimum features the project requires to meet this purpose or goal:
_successfully call and receive work-out images from api_
_upload previous workouts to database_
_Have a functional user-orientated UI_
## What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.
* _wrk-manager API_
* _firebase data-base or mySQL depending on if C# is implemented_
* _React, Redux_
## _If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific._
* _Host website on AWS cloud_
* _Adding a goals feature with BMI calculator to help guide them to their goal of gains or losses_
* _I'm not sure what else to add because the goal of this app was to keep it minimal and simple and clean and after MVP is done will really focus user-orientation._
## _What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?_
* _AWS_

## Component Tree
![image](https://user-images.githubusercontent.com/43968782/54402804-b0f83b00-468a-11e9-924d-10735f2292b1.png)


## Setup/Installation Requirements

* _Clone the applications from git hub by going to the terminal window command line and typing:_

$ git clone https://github.com/ryanleslie33/Digital-Trainer.git

* _After all the files have been copied, navigate to the project working directory.  Type the following:_

$ npm install

* _Node Package Manager (npm) should automatically start downloading all required dependencies.  After all files have been downloaded, type the following:_

$ npm run start

* _The terminal window will run the server._

* _You must now go to your web browser to localhost:8080_

* _To stop the application, return to the terminal window and enter the command CTRL+C.  If prompted for (Y/N), pick "Y".  Then close the user interface tab in your web browser._

* _Remember both applications have to be running for this application to run please see instructions below for C# setup next, after both are running refresh the page and the applicatin will be functional._

## C# setup

* _Open up visual studios because this part of the application uses FrameWork which must us vs._

* _Double click the Exercise.App.snl file and press the ISP Express button on the toolbar to start the server_

* _After you run the application it will restore and build all the files and it should take you to localhost:53950_

## Working Features

* _Home page will be a simple display page with the header and start button that will take you to the main page._

![image](https://user-images.githubusercontent.com/43968782/54403676-2b768a00-468e-11e9-9cad-0ebc9fcf4f1d.png)

* _User can click on list of different types of work-outs on side-bar to receive a list of work outs with images, name of workouts, muscle group, amount of sets, and amount of reps that are recommended for this work out._

![image](https://user-images.githubusercontent.com/43968782/54403762-72fd1600-468e-11e9-9fa5-68db48054f37.png)

* _If a user clicks the Completed checkbox it will send that workout into database with a time stamp attached and will be displayed on the history page._
* _If a user clicks on the History button they will receive a list of all the workouts that they completed in order of descending._

![image](https://user-images.githubusercontent.com/43968782/54403707-4943ef00-468e-11e9-9d10-035f5b55a0e4.png)


## Known Bugs

* _There is no clear history function at the time so the history has to be manually deleted in the SQL  database._

## Support and contact details

* _Please contact ryanleslie33@aol.com.com_

## Technologies Used

* _React,  HTML, CSS, Bootstrap, Atom, NPM._

### License

*This application is Licensed under the MIT software License agreement. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

Copyright (c) 2019 **_Ryan Leslie, Epicodus_**
