import { Mappable } from './CustomMap';
import faker from 'faker';



export class User implements Mappable{

    name: string;
    location: {
        lat: number;
        lng: number;
    };
    //color:string;

    color: string = 'red';

    constructor() {
        this.name = faker.name.firstName();
        //this.
        //console.log(this.location);

        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
    
    

    markerContent(): string {
        return `User Name: ${this.name}`;
    }

}