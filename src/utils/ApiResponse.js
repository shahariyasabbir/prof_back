class ApiResponse {
    constructor(statucode, message = "Request successful", data = null) {
        this.statusCode = statucode;
        this.message = message;//override default message if provided
        this.data = data;
        this.success = statucode >= 200 && statucode < 300  ;
    }
}

export default ApiResponse;
// ApiResponse is a class that standardizes the structure of API responses. It includes a status code, a message, and any relevant data. The success property is set to true by default, indicating that the request was successful.