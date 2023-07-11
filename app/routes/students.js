import Route from '@ember/routing/route';

export default Route.extend({
    pageNumber:1,
    queryParams:{
        pageNumber: {
            refreshModel: true
          }
    }, 
    
        async  model(params)
        {
    
            // console.log(params)
            
            const arrPromise=await fetch(`https://reqres.in/api/users?page=${params.pageNumber}&per_page=5`);
       
            return await arrPromise.json();
           
        },
        actions: {
         
                
            
            select(id,pageNumber)
            {
            //   console.log("::",pageNumber)

              
              this.transitionTo(`/students/${id}?pageNumber=${pageNumber}`)
            }
        }
    
        
});
