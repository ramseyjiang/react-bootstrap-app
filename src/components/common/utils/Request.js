export const get = async url => {
  try {
    //ES2017 rules
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

/*
  data should be JSON format, such as
    data = {
      name: name,
      email: email
    }
**/
export const post = async (url, data) => {
  //ES6
  fetch(url, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => console.log("result", result))
    .catch(err => console.log(err));
};

/*
  data should be JSON format, such as
    data = {
      name: name,
      email: email
    }
**/
export const put = async (url, data) => {
  try {
    //ES2017
    const response = await fetch(url, {
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

//cannot name delete because keywords crash
export const del = async url => {
  try {
    //ES2017
    const response = await fetch(url, {
      method: "delete"
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
