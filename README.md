Airport Control System - JavaScript
======================

Synopsis
-----

The task set was to build an air traffic controller using JavaScript. The purpose of this controller is to let the planes know whether to land /take off or not. Some conditions had to be met such as:

- Plane can not take off when airport is empty
- Plane can not land when the airport is full

The maximum capacity of this airport was set to 3 planes.


Approach towards solving the challenge
--------------------------------------

Having already completed this challenge to a greater degres in Ruby, it made it easier to complete this challenge. As my previous Ruby attempt at the challenge, I used two classes. However I have not included the weather selection array as of yet.

I used Jasmine to write tests for the code in order to ensure I followed the route of TDD. This allowed me to avoid any bugs that could have potentially occured.

The airport control system is not fully funtioning as it is missing the weather feature which I will add at a later date. Other than that everything is functioning and if you feel I could improve this code please do let me know.


Tests passing using Jasmine
---------------------------------
```
12 specs, 0 failures

Plane
should be flying to start with
should not be flying when landed
should be flying after take off
should not be landed after take off
should raise error if trying to take off whilst flying
should raise error if trying to land whilst landed

Airport
should be empty to start off with
can instruct a plane to take off
can instruct a plane to land
can not land plane when full
can not relsease plane when empty
should reduce plane in array when plane takes off
```
