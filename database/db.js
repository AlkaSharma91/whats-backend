import  mongoose  from "mongoose";

const connection = async() => {
    const URI='mongodb://localhost:27017/whatsappdatabase';
    try {
       await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            

        })
        console.log('database successfully connected');
        
    } catch (error) {
        console.log('error while coonecting to mongodb',error)
        
    }
   

}
export default connection;