//your JS code here. If required.
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    const data = await response.json();
    console.log(data);
  }catch(err){
	  console.log(err);
  }
}
getUsers();