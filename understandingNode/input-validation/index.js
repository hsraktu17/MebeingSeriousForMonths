const z = require('zod')

function inputValidation(obj){
  const schema = z.object({
    email : z.string().email(),
    password : z.string().min(8)
  })


  const response = schema.safeParse(obj);

  if(response.success){
    console.log(response.data)
  }else{
    console.error(response.error.errors)
  }
}


inputValidation({
  email : "utbkjgamil.com",
  password : "sbbj"
})
