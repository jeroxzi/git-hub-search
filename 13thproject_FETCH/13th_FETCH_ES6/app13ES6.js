const getText = () => {
  fetch("test.txt")
    .then(res => res.text())
    .then(data => (document.getElementById("output").innerHTML = data))
    .catch(err => console.log(err));
};

const getJson = () => {
  fetch("posts.json")
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      let output = "";
      data.forEach(post => {
        output += `<li>${post.title} ${post.body}</li>`;
      });

      document.getElementById("output").innerHTML = output;
    })

    .catch(err => console.log(err));
}

/// Get from external API

const getExternal = () => {
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      let output = "";
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
        // output += `<img src='${user.avatar_url}'></img>`;
      });

      document.getElementById("output").innerHTML = output;
    })

    .catch(err => console.log(err));
}

document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);
