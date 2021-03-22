## Introduction
This programme is designed to simulate an airport from which planes can take off and land. Seperate classes have been written for the airport, plane and weather conditions and they all work together to ensure that planes can land and take off successfully. I have also written my own test-framework which can be seen in 'test-framework.js', which ensures that the programme is running smoothly. 

## Usage
In order to run the tests on this programme, first clone the repository and then input 'node spec/specRunner.js' into your terminal.

The weather is controlled by the Weather class which has a random number generator as its input in the constructor. If the random number generator generates a number between 10 and 25, the weather will be stormy, which means planes are not able to take off or land, otherwise it is sunny. In the  Airport class, `landPlane()` and `takeOff()` methods take weather as one of their inputs. In order to override this for the test cases, when creating an new insance of weather input a number larger than 25 to enforce sunny weather and ensure that planes can take off and land. For example:
```js
let weather = new Weather(27);
```
The airport capacity has also been set to 3 as a default input in the constructor of the Airport class. In order to change the capacity of an airport, input a desired capacity when creating a new instance of the Airport class. For example:
```js
let airport = new Airport('Heathrow', 20);
```


## User Stories to Domain Models
Here I have included the domain models which I have created from the user stories and which I then turned into tests for my programme. 
### Acceptance Criteria
#### 1.
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

|Objects      | Properties | Messages      | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     | Method(string)|landPlane(plane)|Is the plane at the airport?     |  Array.length = 1    |
| Plane  |      Class   |   plane = New Plane   | Add this plane to airport |             |

#### 2.
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

|Objects      | Properties | Messages      | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     | Constructor(int)| get capacity()| Standard capacity = 3|  int  |
| | | | Has the capacity been changed? | int|


#### 3.
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

|Objects      | Properties | Messages      | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     |  isFull = Boolean| landPlane(plane) |Check if airport is full before landing plane |  String |


#### 4.
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

|Objects      | Properties | Messages    | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     |  Airport array| takeOff(plane) | Check that plane is no longer in airport|  Array |
| Plane  |  Boolean  |   isFlying() |   |   True/false  |

#### 5.
```
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

|Objects      | Properties | Messages    | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport     |  | takeOff(plane) | Check if plane is in the airport | String  |
| | | land(plane) | Check if plane has already landed| String|


### Extended Criteria

#### 1. 
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
|Objects      | Properties | Messages    | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Weather|  |  weather()|  |  String|
| Airport |  | takeOff(plane) | if weather stormy, cant take off |  String|


#### 2.
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
|Objects      | Properties | Messages    | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Weather |  |  weather()|  |  string|
| Airport|  String| landPlane(plane) | if weather stormy, cant land |  String|


#### 3.
```
As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```
|Objects      | Properties | Messages    | Context     | Output      |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Airport | Hangar - Array | landPlane(plane) |  |  Array|
| Plane |  Boolean|  isFlying() |  |  False |