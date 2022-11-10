export class auth{

    isloggedin=false;

    logged(){
        this.isloggedin=true;
    }
    logout(){
        this.isloggedin=false;
    }
    authenticate(){
        this.isloggedin=true;
    }
}