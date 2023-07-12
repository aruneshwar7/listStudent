import Controller from '@ember/controller';

export default Controller.extend({
    queryParams:["pageNumber"],
   
actions:{
   
    pageChange(requirePage){
        // console.log("change");
        this.set("pageNumber",requirePage);  
        this.transitionToRoute("students");
    }
   
}


});
