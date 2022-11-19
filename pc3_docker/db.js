conn = new Mongo();
db = conn.getDB("dockerdb");
db.alumnos.insert(
  [
   {codigo: '2018', nombre:  'Gustavo',  email:  'gan@abc.com', 
facultad:'Ingenieria', created_at: new Date('01/23/2020')}
 ]);