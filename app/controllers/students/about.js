import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    email:null,
    fname:null,
    lname:null,
    playload:computed('email',"fname" ,"lname",function() {

        return{"data":{"id":2,"email":this.email,"first_name":this.fname,"last_name":this.lname,"avatar":"https://reqres.in/img/faces/2-image.jpg"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
        
    }),
    
    actions: {
        
        save(event){
           // this.set("isShowEdit",false)
           event.preventDefault();

           let userId=this.get("model.data.id");

        //    let newob={"data":{"id":userId,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
            if(this.fname)
           this.set("model.data.first_name",this.fname);
           else
           this.set("fname",this.get("model.data.first_name"))
           

           if(this.lname)
           this.set("model.data.last_name",this.lname);
           else
           this.set("lname",this.get("model.data.last_name"))
         

           if(this.email)
           this.set("model.data.email",this.email);
           else{
           this.set("email",this.get("model.data.email"))
           }
           
           let options={
            method:"PUT",
            body:JSON.stringify(this.playload)
           }

       let url=`https://reqres.in/api/users/${userId}`;
          

        //    console.log(this.get("model.data.first_name"));
        // console .log(userId);
    //    console.log(this.playload);
    console.log(this.playload)

    fetch(url,options).then((res)=>console.log(res.status))

this.set("email",null);
this.set("lname",null);
this.set("fname",null);    

}

       

    
    }
});
