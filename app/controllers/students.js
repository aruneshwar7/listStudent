import Controller from '@ember/controller';

export default Controller.extend({
    queryParams:["pageNumber"],
   
actions:{
    three(){
        this.set("pageNumber",3);
        this.transitionToRoute("students");
        // console.log("three")
       
    } ,
    two(){
        this.set("pageNumber",2);
        this.transitionToRoute("students");
    

    },
    one(){
        this.set("pageNumber",1);  
        this.transitionToRoute("students");
    }
   
}


});
