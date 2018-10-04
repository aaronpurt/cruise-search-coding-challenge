# Front End Engineering Challenge

Building a navigation navbar and cruise tiles. Use AngularJS, CSS and HTML. Please see the sample image below for the tiles. The API will be the data used to populate the cruise tiles. You can start with the code in index.html or create your own project. 

## Requirements:

- Demonstrate use of web standards including HTML5.  
- Use a separate CSS file.   
- Make the navbar responsive with at least one breakpoint (your choice as to how it looks on a smaller screen width). 
- Using the API populate the data into the reusable component tiles.
- Follow the style guidelines listed below.  
- Make production ready 
- Clean code
- Reusable Components best practices 

## Bonuses

- Use SASS or LESS to pre-compile your CSS.   
- Add a CSS animation with transitions.  (Loading login component) 
- Use JavaScript to control whether the login or the logout button is shown; only one should be visible at a time.  
- Add the login component with
	- username / password 
	- labels
	- login button

## Styling Guidelines
 
- Use the following colors   
	- Navbar background: #2B386F   
	- Navbar font: #FFFFFF

	- Page background: #FFFFFF    
	- Default/normal font color: #20285b

## API with tile data. 
https://qabook.hollandamerica.com/api/cruiseSearch/v1/api/search/itineraries?country=US&limit=10&skip=0
- The API returns array of itineraries with 1..n voyages for each itinerary. You can assume you only need the 1st voyage in each itinerary.
- The API has page/skipping 


## Image tile sample
![alt text](https://image.ibb.co/enxBTe/Screen_Shot_2018_10_04_at_2_29_59_PM.png)
