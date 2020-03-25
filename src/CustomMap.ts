export class CustomMap {

    private googleMap: google.maps.Map;


    constructor(x:string) {
        this.googleMap = new google.maps.Map(document.getElementById(x), {

            zoom: 1,
            center: {
                lat: 0,lng: 0
            }
            
        });
        

    }




}
