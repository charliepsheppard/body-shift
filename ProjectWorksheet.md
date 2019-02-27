# BodyShift(Project 4)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Worksheet | Incomplete
|Day 1| Wireframes / Priority Matrix / ERD / Component Hierarchy | Incomplete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 2| Pseudocode / actual code | Incomplete
|Day 3| Initial Clickable Model  | Incomplete
|Day 3| Auth | Incomplete
|Day 4| Routing Complete | Incomplete
|Day 5| MVP | Incomplete
|Day 6| PostMVP | Incomplete
|Day 7| Present | Incomplete


## Project Description

This is an application that is focused on being productive when it comes to your health. The entire purpose is to be able to have all of your meal prep and workouts in one place so you can more consistantly follow through with your health goals. Users participate in "Sprints", where they add information about their meals and workouts for the duration of the sprint. Users are also able to create a blog in order to record their experience during their sprint. This allows them to reflect on what they accomplished or what they could work on in the future. 

## Wireframes

[Wireframe 1](https://res.cloudinary.com/chucksheppard/image/upload/v1551207184/BodyShift/BodyShift%20Wireframe%201.jpg)<br />
[Wireframe 2](https://res.cloudinary.com/chucksheppard/image/upload/v1551207314/BodyShift/Wireframe%202.jpg)<br />
[Wireframe 3](https://res.cloudinary.com/chucksheppard/image/upload/v1551207364/BodyShift/Wireframe%203.jpg)

## Priority Matrix

[Priority Matrix](https://res.cloudinary.com/chucksheppard/image/upload/v1551207395/BodyShift/Priority%20Matrix.jpg)

### MVP/PostMVP - 5min

#### MVP
- Create a fully functional database
- CRUD functionality
- User Authentication (Sessions)
- Ability to create a profile page
- Ability to CRUD meals
- Ability to CRUD Workouts

#### PostMVP
- Personal blog functionality
- Add photos to meal and workout entries
- Adding workouts to a personal calendar based on time specified in entry

## Architectural Design

[Component Hierarchy](https://res.cloudinary.com/chucksheppard/image/upload/v1551207416/BodyShift/Component%20Hierarchy.jpg)

#### [SAMPLE FROM A MAP BASED PROJECT](https://res.cloudinary.com/dvjtpejbw/image/upload/v1540221204/20181022_111216.jpg)

## ERD

[ERD](https://res.cloudinary.com/chucksheppard/image/upload/v1551207541/BodyShift/ERD.png)

## UI Components

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Sign Up | Allow the user to sign up |
| Sign In | Allow the user to sign in |
| Profile | Allow the user to see their meals and workouts |
| Meal | Allow the user to see and add meals they have made |
| Workout | Allow the user to see and add workouts |
| Blog | Allow the user to see and add blog posts |

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Database | H | 3hrs|  |
| CRUD | H | 11hrs|  |
| Auth | H | 11hrs|  |
| Profile page | H | 2hrs|  |
| Meals | H | 4hrs|  |
| Workouts | H | 4hrs|  |
| Blog | H | 4hrs|  |
| Add photos | H | 3hrs|  |
| Total | H | 39hrs|  | 

## Helper Functions

| Function | Description | 
| --- | :---: |  
| handleChange | This will update state as a user adds an input to a form | 
| handleSubmit | Submits form and redirects user to see their post | 


## Code Snippet


## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
