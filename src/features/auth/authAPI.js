export function createUser(userData) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users',{
      method: 'POST',
      body: JSON.stringify(userData),
      headers:{'content-type': 'application/json'}
    })
    const data = await response.json()
    //TODO: on sever it will only return some info of user (not password)
    resolve({data})
  }
  );
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve,reject) =>{
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch('http://localhost:8080/users?email='+email);
    const data = await response.json();
    if(data.length){
      if(password === data[0].password){
        resolve({data: data[0]});
    }
    else{
      reject({message:'wrong credentials'});
    }
  }
  else{
    reject({ message:'user not found '});
  }
    //TODO: on sever it will only return some info of user (not password)
  }
  );
}

export function signOut(userId) {
  return new Promise(async (resolve) =>{
    
    //TODO: on sever we will remve user session info
    resolve({data: 'success'})
  }
  );
}