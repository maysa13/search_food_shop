import {httpConnect} from '../helper/httpConnect';


class GoogleApi {
    constructor() {
    }
    async getAddress(address) {
        return httpConnect.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+address+'&key='+process.env.NEXT_PUBLIC_GOOGLE_KEY)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                this.handleError(error);
            });
    }
    handleResponseError(response) {
        console.log("handleResponseError ==> response : ",response);
    }
    handleError(error) {
        console.log("handleErrorr ==> error.message : ", error.message);
    }
}

export default GoogleApi;