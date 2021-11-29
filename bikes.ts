class Bike{
    price:number;
    max_speed:string;
    miles:number;

    constructor(price:number,max_speed:string){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    
    }

    displayInfo(): void{
        console.log("This bike's price is: " + this.price + ", the maximum speed is: " + this.max_speed + " and the total miles are: " + this.miles);
    }

    ride(): any{
        console.log("Riding");
        this.miles = this.miles + 10;
        return this; 
    }

    reverse(): any{
        console.log("Reversing");
        if(this.miles <= 0){
            return this;
        }
        else{
            this.miles = this.miles - 5;
            return this;
        }
    }


}

let bike1 = new Bike(200, "25mph");
//bike1.displayInfo();
bike1.ride().ride().ride().reverse().displayInfo();

let bike2 = new Bike(50, "25mph");
//bike2.displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();

let bike3 = new Bike(600, "25mph");
//bike3.displayInfo();
bike3.reverse().reverse().reverse().displayInfo();