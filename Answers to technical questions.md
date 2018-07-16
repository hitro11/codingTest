1. About 6 hours. If I had more time I would improve the styling and add more tests.


2. One of the new features of ES8 is the Object.values(); method,
     which return an array of an object's own property values. An example is:

     const car = {brand: "Porsche", model: "2019 911 GT3 RS", color: "Lava Orange"};
     Object.values(car);  // returns ["Porsche", "2019 911 GT3 RS", "Lava Orange"]


3. Once I find out what part of the application is experiencing the issue, I would look at the    code responsible for that part and independently test each part. For example, if the issue is   a slow transaction, I would look at the database queries and the business logic of the
  transaction seperately, to find out if one or both are responsible for the long transcation 
  times.

4. In the current version of the API, you can only return at most 100 results, which means if you request all the restaurants in a particular city and the city has more than 100 restaurants, only the first 100 will display.One improvement would be to allow all the results of an API request to be displayed.


5. {"name": "rohit",
    "sex": "male", 
    "hobbies": ["soccer", "cars", "video games"],
    "favourite-team":"Dortmund",
    "favourite-tv-show":"Suits",
    "": ""
     }