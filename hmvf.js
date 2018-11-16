var house = { areas:[{ livingRoom: {items: ['tv','sofa']}, 
                        bedroomOne: {items: ['bed','washing machine'], windows: 3},
                        bedroomTwo:{items: ['bed','bed','desk'], windows: 4},
                        kitchen:{items: ['fridge','broken chair']}
                    }],

                garden: [true, 'Red Rose'],
                garage: {car: {
                                color: 'red',
                                wheels: 4,
                                honk: ()=>{alert("Beep")}
                                }
                                              }
            };
       

// Find total number of areas in the house  
            var newArray = Object.keys(house.areas[0]);
            console.log(newArray.length);
            

// ***Add a dining table to the living room
            house.areas[0].livingRoom.items.push('dining table');
            console.log(house.areas[0].livingRoom.items);

// Add a stove to the kitchen

            house.areas[0].kitchen.items.push('a stove');
            console.log(house.areas[0].kitchen.items);
            

// Remove the washing machine from bedroomOne
            house.areas[0].bedroomOne.items.pop();
            console.log(house.areas[0].bedroomOne.items);

// Find the total number of beds in all rooms
            let rooms = Object.keys(house.areas[0]);
            let beds = 0;

            for (let i = 0; i<rooms.length; i++) {
                let roomItems = house.areas[0][rooms[i]]["items"];
                for (let j = 0; j<roomItems.length; j++) {
                    if(roomItems[j] == "bed") {
                        beds++
                    }
                }     
            };

            console.log(beds);


// ***Change the color of the car to blue 
            newColor=house.garage.car.color.replace('red','blue');
            console.log('The new color of the car is' + " " + newColor);


// ***Add a another car to the garage with a honk function
            house.garage.newCar= {
                color: 'green',
                wheels: 4,
                honk: ()=>{alert("Beep")},
            };
                
            console.log(house.garage);


// Make the new car honk
            house.garage.newCar.honk();


// Change the 'broken chair' in the kitchen to 'new chair'
            house.areas[0].kitchen.items.splice(1, 1,'new chair');
            console.log(house.areas[0].kitchen.items);


// If the house has a garden, console.log the name of the flower
            if (house.garden[0] == true) {
                console.log ('there is' + " " + 'Red Rose');
            }
