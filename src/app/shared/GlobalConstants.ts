export class GlobalConstants{
   
    public static genericError:string = "Something went Wrong Pls try again";

    public static unauthorized:string = "You are not authorized person to access this page";
    public static firstNameRegex:string = "[a-zA-Z ]*";
    public static lastNameRegex:string = "[a-zA-Z ]*";
    
    public static emailRegex:string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    
    public static phoneNoRegex:string = "^[1-9][0-9]{9}$";
    public static accountNumberRegex:string = "^[1-9][0-9]{4,}$";
    
    public static error:string = "error";
}