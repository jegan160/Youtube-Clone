export const API_KEY = 'AIzaSyC0X6LWWYeWJ32RrCY0pT_3TcLRGcWT-j4'


export const value_converter= (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
}