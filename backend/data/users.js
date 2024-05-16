import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin user',
        email:'admin@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'John Marston',
        email:'johnmasrton5@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
     {
        
           name:'Arthur Morgan',
            email:'arthurmorgan2.com',
            password:bcrypt.hashSync('123456',10),
            isAdmin:false,
    }
]


export default users;