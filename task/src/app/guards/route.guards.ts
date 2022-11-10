export class auth{
    islogged:boolean=false;
    logged(){
        this.islogged=true;
    }
    logout(){
        this.islogged=false;
    }
    
}