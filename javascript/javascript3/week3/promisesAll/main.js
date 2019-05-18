let repositoriesUrls = [
  "https://api.github.com/search/repositories?q=user:Swapna-Sahu",
  "https://api.github.com/search/repositories?q=user:NayanaKamtekar",
  "https://api.github.com/search/repositories?q=user:ismailirahim"
];
console.log(repositoriesUrls);

let promises = repositoriesUrls.map(repository => fetch(repository));

Promise.all(promises)
  .then(responses => {
    let promisesJsons = responses.map(response => response.json());
    return Promise.all(promisesJsons);
  })
  .then(repositories => {
    console.log(repositories);
    repositories.forEach(repository => {
      console.log(repository);
      const uList = document.querySelector("ul");

      let liElement = document.createElement("li");
      liElement.innerHTML = repository.items[0].owner.login;
      repository.items.forEach(item => {
        const uListChild = document.createElement("ul");
        const liElementChild = document.createElement("li");
        liElementChild.innerHTML = item.full_name + " -- " + item.git_url;
        uListChild.appendChild(liElementChild);

        liElement.appendChild(uListChild);
        console.log(item.full_name);
        //console.log(item.git_url);
      });
      uList.appendChild(liElement);
    });
  });

/*-------------------Solution------------ */
// Getting into promises

/*const usernames = ["benna100", "andersravn", "gaearon"];

function renderRepos(repos) {
  let reposDiv = document.getElementById("repos");

  for (let [index, repo] of repos.entries()) {
    let div = document.createElement("div");
    let heading = document.createElement("h1");
    heading.innerHTML = usernames[index];
    div.appendChild(heading);
    let list = document.createElement("ul");

    for (let item of repo.items) {
      let name = item.name;
      let url = item.html_url;
      let listItem = document.createElement("li");
      let link = document.createElement("a");
      link.innerHTML = name;
      link.href = url;
      listItem.appendChild(link);
      list.appendChild(listItem);
    }

    div.appendChild(list);
    reposDiv.appendChild(div);
  }
}

Promise.all(
  usernames.map(username =>
    fetch(`https://api.github.com/search/repositories?q=user:${username}`)
  )
)
  .then(responses => {
    return Promise.all(responses.map(response => response.json()));
  })
  .then(myJson => {
    renderRepos(myJson);
  });*/
