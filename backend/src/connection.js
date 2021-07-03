const mysql = require('mysql')

const connection = mysql.createConnection( {
    host:'localhost',
    user:'root',
    password: '',
    database: 'muebleria'
  })

connection.connect( (err)=>{
  if(err){
    console.log('Error al conectarse a la BD')
  }else{
    console.log('Conectado a la BD exitosamente')
  }
})


module.exports = connection;
