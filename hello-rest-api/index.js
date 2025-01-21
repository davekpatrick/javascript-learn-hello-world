import fetch from 'node-fetch'


( async () => {
  try {
  const username = 'davekpatrick'
  var userData = await getUserData(username)
  //console.log(userData)
  var userRepos = await getUserRepos(userData.repos_url)

  for (var i = 0; i < userRepos.length; i++) {
    console.log("repo[" + userRepos[i].name + "]")
  }

  } catch (error) {
    console.error(error)
  }
})()

// fuctions
async function getUserData(username) {
  try { 
    const urlProtocal = 'https'
    const urlHost = 'api.github.com'
    var respose = await fetch(
        urlProtocal + '://' + urlHost + '/users/' + username,
        {
          method: 'GET',
        }
      )
    var data = await respose.json();
    console.log("user[" + data.login + "]");
 
  }
  catch (error) {
    console.error(error)
  }
  return data;
}

async function getUserRepos(reposUrl) {
  try {
    var response = await fetch(
      reposUrl,
      {
        method: 'GET',
      }
    )
    var data = await response.json()
    console.log("numRepos[" + data.length + "]")
  }
  catch (error) {
    console.error(error)
  }
  return data
}