# Project Two: Holiday Wish List :gift:

[![GitHub issues](https://img.shields.io/github/issues/seahopki12/project_two?style=for-the-badge)](https://github.com/seahopki12/project_two/issues) &nbsp;
[![GitHub stars](https://img.shields.io/github/stars/seahopki12/project_two?style=for-the-badge)](https://github.com/seahopki12/project_two/stargazers) &nbsp;
![GitHub last commit](https://img.shields.io/github/last-commit/seahopki12/project_two?style=for-the-badge)  

![](public/images/wish_list.gif)
  
## Description
>Holiday shopping lists made easy!... This webpage allows the user and friends/family to add their personal holiday wish-list. Users can then look at the lists of the OTHER members and sign up to buy their wished-for items. The current user is NOT able to see who has bought gifts on their own list.  

> https://project-two-gwu.herokuapp.com/
> https://github.com/seahopki12/project_two 
  
## Table of Contents
>1. [Title](#Title)
>2. [Description](#Description)
>3. [Technologies](#Technologies)
>4. [Installation](#Installation)
>5. [Usage](#Usage)
>6. [License](#License)
>7. [Contributing](#Contributing)
>8. [Tests](#Tests)
>9. [Questions?](#Questions?)
  
## Installation
>This application is currently set up to show all registered users under the family member dropdown list. With that in mind, users will need to deploy their own version of this app to Heroku and connect that app to their own database in order to keep their lists privite to their own family/group (further devlelopment of this app will aim to use one version of this app deployment and allow users to create their own families/groups). The installation instructions are listed below:

>1. The first step will be to fork the GitHub repository to your own repository. This can be done by clicking the 'fork' button on the top righthand corner of the [repo](https://github.com/seahopki12/project_two).
>2. Now, in your forked repo, you will need to click the 'code' button and copy the code snippet below for the preffered connection type.
>3. Open up your Terminal app and navigate to wherever you would like to clone the GitHub repo to your local machine.
>4. Once there, perform the command: 
```
git clone 
```
>followed by the code snippet copied from GitHub.
>5. Once the the cloining has completed and you are in the root of your repository, perform the command:
```
npm i
```
>to install all of the modules and dependencies for this application to run properly.
>6. In the root of your directory run the command:
```
heroku create
```
>7. Once the app is created in your terminal, navigate to [heroku](https://heroku.com).
If you do not have a Heroku account, you will need to create one.
>8. Once you are logged in, select the application that matches the one created in your terminal.
>9. Navigate to the 'Resources' tab and search for 'JawsDB MySQL'.
>10. Once you click this add-on, select the 'free' option and submit the order form.
>11. In your terminal, run the command: 
```
git push heroku main
```
>Now your version of this application is deployed to Heroku. You will be able to view the login and sign-up page, but you will still be unable login or sign-up.
>12. In your preferred database software, create a new connection.
>13. Insert the connection parameters from you JawsDB settings page into the parameter fields in your DB software.
>14. Once you have entered all the parameters, establish a connection.
>15. Now your app is deployed and yor database should be synced to your application. Your application is now ready to use!

## Usage
>1. To use this application you will first need to create an account by entering an email address and password into the email/password fields on the Sign Up Form. Then, press the 'SIGN UP' button.
>2. Once you are signed in, you can click the 'logout' button at the top right corner to logout of your account and the Log In Form to log into your account.
>3. Once logged in, you will see two columns, one for your own list and one for your family members list.
>4. You will need to add items to your wish list by inputting the item name in the 'Enter item here...' field and then clicking the 'WISH FOR IT!' button.
>5. Once you have added items to your list, you will be able to view those items and delete any items by pressing the 'Delete item' button.
>6. If you click on the 'FAMILY/FIEND' dropdown button, you will be able to see and select any family member or friend who also has an account.
>7. When a email is selected, the wish list for that user will appear in the column.
>8. When you click on an item, the item will be crossed denoting that you will be buying that item for that particular user (NOTE: items cannot be uncrossed after they have been crossed off).

## Technologies
>This application was created with:  
> Node.js  
> Express 
> Handlebars  
> ORM  
> Heroku hosting  
  
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
>This application is covered under the [MIT License](https://opensource.org/licenses/MIT)
  
## Contributing
>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.<br/><br/>
>Please make sure to update tests as appropriate.  

## Tests
>Not applicable for this application. If it deployed to the Heroku hosting website, then it works!  

## Questions  
>Please direct all questions to:  
>  
>seahopki12@gmail.com  
>Check out my GitHub Profile @ https://github.com/seahopki12 
