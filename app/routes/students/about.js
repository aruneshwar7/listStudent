import Route from '@ember/routing/route';

export default Route.extend({

    async  model(params)
    {

        
        let arrPromise=await fetch(`https://reqres.in/api/users/${params.id}`);
    //    console.log("kkk")
        return await arrPromise.json();
       
    },
  
});
