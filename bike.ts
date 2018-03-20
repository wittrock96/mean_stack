class bike {
    
    constructor(public max_speed: number, public price: number, public miles: number) {}
        displayinfo = () => {
            console.log(this.max_speed)
            console.log(this.miles)
            console.log(this.price)
    }
        
        ride = () => {
            var initmiles: number = 0;
            this.miles += 10;
            initmiles += 10;
            console.log('riding')
            return this.miles;
    }
        reverse = () => {
            this.miles -= 5;
            console.log('reversing')
            return this.miles;      
    }

}
const colorado = new bike(20, 100, 20)

console.log(colorado.ride())
console.log(colorado.reverse())
console.log(colorado.ride())
console.log(colorado.ride())
console.log(colorado.reverse())
