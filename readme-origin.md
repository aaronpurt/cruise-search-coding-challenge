# Cruise Search Coding Challenge

Building a navigation navbar and cruise tiles. Use AngularJS, CSS and HTML. Please see the sample image below for the tiles. (Feel free make your own tile or follow design below). The API will be the data used to populate the cruise tiles. You can start with the code in index.html or create your own project.

## Requirements:

- Cruise tile sample: Feel free to make your own or follow design sample below. 
- Demonstrate use of web standards including HTML5.  
- Use a separate CSS file.   
- Make the navbar responsive with at least one breakpoint (your choice as to how it looks on a smaller screen width). 
- Using the API populate the data into the reusable component tiles.
- Follow the style guidelines listed below.  
- Make production ready 
- Clean code
- Reusable components best practices 

## Bonuses

- Use SASS or LESS to pre-compile your CSS.   
- Add a CSS animation with transitions.  (Loading component) 
- Use JavaScript to trigger active state room in tile.   
- Image a separate component
- (Book now / View Itinerary) buttons open new route path in AngularJS. 
- Taxes and fees links open in a modal. 

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

## Default Image: 
![alt text](https://qa.hollandamerica.com/images/itineraryMaps/thumb/no_map.jpg)

## Cruise tile sample design


![alt text](https://image.ibb.co/enxBTe/Screen_Shot_2018_10_04_at_2_29_59_PM.png)
