export class ApiResponse{
     constructor (
         statusCode , 
         data  = null,
         message = "success" , 

     ){
        this.statusCode = statusCode ; 
        this.data = data ;
        this.message = message ; 
        this.success = statusCode < 400
     }
}
/*
Agar statusCode 200–399 (success range) hoga to success = true hona chahiye.
Agar statusCode >= 400 hoga to success = false hona chahiye.
*/