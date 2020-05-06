// Define the URLs for our different routes
const baseURL = "http://localhost:3000"
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`
const depositURL = `${baseURL}/deposit`
const withdrawURL = `${baseURL}/withdraw`
const transferURL = `${baseURL}/transfer`
const signUpURL = `${baseURL}/sign-up`

// Make a post request to a given URL with a given data object as the body and return the Promise
const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(url, configurationObject)
}

const patch = (url, data) => {
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    return fetch(url, configurationObject)
  }

// Make a get request to a given URL and return the Promise. If a token has been provided, include it as a header called Authorization
const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url)
}

const deposit = (data) => {
    return patch(depositURL, data).then(res => res.json())
}

const withdraw = (data) => {
    return patch(withdrawURL, data).then(res => res.json())
}

const transfer = (data) => {
    return patch(transferURL, data).then(res => res.json())
}

// Use the get function to make a request to the validate route and parse the response into JSON
const validate = token => {
  return get(validateURL, token).then(response => response.json())
}

// Use the post function to make a request to the validate route and parse the response into JSON
const signIn = data => {
  return post(signInURL, data).then(response => response.json())
}

const signUp = data => {
    return post(signUpURL, data).then(res => res.json())
}

// Export the necessary functions as part of one object which we will import elsewhere
export default { signIn, validate, get, deposit, withdraw, transfer, signUp }