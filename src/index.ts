import { CustomMap} from './CustomMap';
import { Company } from './Company';
import { User } from './User';






const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

console.log(user);
console.log(company)

customMap.addMarker(user);
customMap.addMarker(company);





// new google.maps.Map(document.getElementById('map'), {

//     zoom: 1,
//     center: {
//         lat: 0,lng: 0
//     }
    
// });

