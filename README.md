# **All about Marvel superheroes**

## **Goal for this project** 

We all love comics and/or superheores. Marvel universe is huge including uncountable superheroes. This website is intended to help you finding your favourite characters and getting information about them using the official Marvel database.

---

<a></a>
## Table of contents 
* [UX](#ux)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
        * [Requirements](#requirements)
        * [Expectations](#expectations)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Colors](#colors)
        * [Structure](#structure)
* [Wireframes](#wireframes)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Features to be implemented](#features-to-be-implemented)
* [Technologies used](#technologies-used)
    * [Languages](#languages)
    * [Libraries and Frameworks](#libraries-and-frameworks)
    * [Tools](#tools)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)


<a name="ux"></a>
## **UX**
<a></a>
### **User Goals**

* A website providing official and responsible information
* Easy usage
* The search working correctly
* Website should be easy to use on desktop, tablet & mobile
* Appealing visual elements
* Fitting design to the topic

[Back to Top](#table-of-contents)

<a></a>
### **User Stories**

* As a user, I want to find easily what I am looking for.
* As a user, I want to read official information.
* As a user, I want to use a simple navigation on the site.
* As a user, I want to see a nice and simple design.
* As a user, I want to get information about my searching as related movies etc.
* As a user, I want to be able to use the site on different devices.

[Back to Top](#table-of-contents)

<a></a>
### **Site owners Goals**

* Provide official information about Marvel's superheroes via the official Marvel API.
* Help to search the information needed.

[Back to Top](#table-of-contents)

<a></a>
### **User Requirements and Expectations**
<a></a>
#### Requirements

* Easy to find the data needed
* Getting relevant information related also
* Reliable information
* Search works correctly

[Back to Top](#table-of-contents)

<a></a>
#### Expectations

* When I click on the search button, I expect to see the correct result.
* I expect to not duplicating my searches when I do another one.
* Easily readable information as a result.

[Back to Top](#table-of-contents)

<a></a>
### **Design Choices**

Marvel is an existing brand having its own design so for this page I was about to use fitting colors and design in general.

[Back to Top](#table-of-contents)

<a></a>
#### Fonts

In order to find the exact fonts for my website, I visited [Google Fonts](https://fonts.google.com/ "Google Fonts") to explore the options.
For the overall content I have decided to use the [Spartan](https://fonts.google.com/specimen/Spartan?query=spartan#standard-styles "Google fonts: Spartan") font. In my opinion this font is easy to read and visually appealing.
For my headings I decided to go with a different font in order to make them stand out from the main content. The font I choosed for this, is the [Julius Sans One](https://fonts.google.com/specimen/Julius+Sans+One?query=ju#standard-styles "Google Fonts: Julius Sans One") font.
This is a bit rounded uppercase font what matches with the overall font.

[Back to Top](#table-of-contents)

<a></a>
#### Colors

As Marvel has its own design including colors, I was trying to use matching colors with it. It includes the tipical Marvel red e.g.


[Back to Top](#table-of-contents)

<a></a>
#### Structure

I have chosen to use [Bootstrap](https://getbootstrap.com/) to create an overall structure for my website. 
Bootstrap provides various elements of CSS and Javascript which is very helpful to keep a good structure on your page. 
As Bootstrap is designed for mobile first, I will be certain that my website functions well on mobile.

[Back to Top](#table-of-contents)

--- 

<a></a>
## **Wireframes**

I have decided to use [Balsamic](https://balsamiq.com/wireframes/) to create wireframes for my website. 
First I created a basic wireframe for desktop and later on for tablet and mobile. 
For my website I have decided to use a scroll page as it's focused on searching objects in a big amount of data.

You can find my wireframes below:

### [Desktop Wireframe](wireframes/desktop-wireframe.pdf)

### [Tablet Wireframe](wireframes/tablet-wireframe.pdf)

### [Mobile Wireframe](wireframes/mobile-wireframe.pdf)

[Back to Top](#table-of-contents)

<a></a>
## **Features**

<a></a>
### **Existing Features**

#### Search

For the searching I implemented a search input what uses the Marvel's API to get information about its characters.
There are two options to search. An exact character can be searched by typing its name in the searching input and clicking on the search button.
Clicking on showing all characters button shows the first 100 characters in alphabetic order. Unfortunately the Marvel's API doesn't allow us to use bigger limit than 100.

#### Results

As result you can get one single character or 100 character in a scrolling page than ypu can click on the preferred character to see the description.
The first idea was getting all the characters from Marvel and showing then using pagination but as the Marvel's API doesn't allow to use bigger limit than 100 I decided to not implementing pagination.

[Back to Top](#table-of-contents)

<a></a>
### **Features to be implemented**

* Searching for different things as movies, comics etc.
* Showing every related information of the choosen character as clickable links to get more information.

[Back to Top](#table-of-contents)

<a></a>
## **Technologies used**
<a></a>
### **Languages**

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

<a></a>
### **Libraries and Frameworks**

* [Marvel Developer Portal](https://developer.marvel.com/)
* [jQuery](https://jquery.com/)
* [Font Awesome](https://fontawesome.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Google Fonts](https://fonts.google.com/)

<a></a>
### **Tools**
* [Git](https://git-scm.com/)
* [GitPod](https://www.gitpod.io/)
* [Balsamic](https://balsamiq.com/wireframes/)
* [W3C HTML Validation Service](https://validator.w3.org/)
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

[Back to Top](#table-of-contents)

<a></a>
## **Testing**

### Search

* **Plan**    
I wanted to create a website where people can search information about their favorite Marvel's character. Beside the single character searching my plan was to implement a function also to show all the Marvel's superheroes with pagination.

* **Implementation**   
To make the website responsive I used Bootstrap to create an overall structure and I overwrote the default styles with CSS. For getting the needed information I used the Marvel's API that 3000 calls/day can be made with.

* **Test**    
To test the searching function I tried to search for several Marvel character from different devices. I also tried listing them all from all kind of devices.

* **Result**    
Unfortunately the Marvel's API doesn't allow to list more than 100 characters at the time so we can show only the first 100 superheroes clicking the "Show all superheroes!" button. If we would like to search for example Hulk, we can type it in the search input and it works fine.

* **Verdict**    
The test has passed all the technical criteria and it works the best way that is possible.

### Stage messages

* **Plan**    
I wanted to give feedback to the user about the searching stage and if something went wrong so I decided to implement warning messages and a spinner while waiting for the results.

* **Implementation**   
To make the spinner I decided to use a combination of Bootstrap's spinner and modal. In case the searching couldn't find anything I decided to use a simple message to warn the user about it.

* **Test**    
To test the spinner and the warning message I tried to search different superheroes included from DC universe too.

* **Result**    
I could see the spinner while waiting for the result. The warning message showed up when the searchong was incorrect.

* **Verdict**    
The test has passed all criteria and it works fine.


[Back to Top](#table-of-contents)

### Bugs



[Back to Top](#table-of-contents)

<a></a>
## **Deployment**

This project was deployed via GitHub by executing the following steps.
After writing the code, committing and pushing it to GitHub:

1. Navigate to the repository on github and click **Settings**.
1. On the left hand menu choose **Pages** and find Source section.
1. Select **main branch** on the dropdown menu, and click save.
1. Now the website is live on **https://antalmelinda1116.github.io/all-about-marvel/**
1. Any time commits and pushes are sent to Github, the Github Pages site should update shortly after.

To run the project locally:

1. Click the **green Clone or Download button** on the Github Repository
1. Using the **Clone with HTTPS option**, copy the link displayed.
1. Open your IDE, and ensure the Git Terminal is open.
1. Change the working directory to the location where the cloned directory is to go.
1. Use the **"git clone" command** and paste the url copied in the second step.

[Back to Top](#table-of-contents)

<a></a>
## **Credits**

### Content - Media - Inspiration

I have used the following websites to gather ideas and information for the overall content of my website: 

* [Marvel](https://www.marvel.com/)
* [HDQ Walls](https://hdqwalls.com/)


[Back to Top](#table-of-contents)