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
