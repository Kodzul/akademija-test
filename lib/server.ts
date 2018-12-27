import app from './app';


const port : number = 3000;

app.listen(port, () => {
    console.log(__dirname);
    
    console.log(`Server is listening at port ${port}`);

})
