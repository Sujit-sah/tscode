let score: number | string = 33
score = 44
score = "55"


type User = {
	name : string;
	id: number  
}
type Admin = {
	username : string;
	id: number  
}

let sujit: User | Admin = {name: "sujit", id : 333}

sujit = { username: "hc", id: 333}

// function getDbId(id: number | string){
// 	making some API Calls
// 	console.log(`DB id is: ${id`});
// }
getDbId(3)
getDbId("3")


function getDbId(id: number | string){
	//making some API Calls
	if (typeof id === "string") {
		id.toLowerCase()
	}
	// console.log(`DB id is: ${id}`);
}

//arrey

const data: number [] = [1 , 2, 3]
const data2: string [] = ["1" , "2", "3"]
const data3: (string | number | boolean) [] = [1 , "2", 3, true] 

// let pi: 3.14


let seatAllotment = "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew"