const output = document.querySelector('.output');
const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
document.querySelector('#btn1').addEventListener('click', () => {
  fetch('sample.txt')
    .then(response => {
      return response.text();
    })
    .then(data => {
      output.innerHTML = `
      <p class="text-center m-5"> ${data}</p>
    `;
    })
    .catch(err => {
      // const newItem = document.createElement("div");
      // const textnode = document.createTextNode(`${err}`);
      // newItem.classList('alert alert-danger');
      // newItem.appendChild(textnode);
      console.log(err);
    })
});

document.querySelector('#btn2').addEventListener('click', () => {
  fetch('posts.json')
    .then(response => {
      return response.json();
    })
    .then(posts => {
      let output= '';
      posts.forEach(post => {
        output += `<li class="text-center my-3">${post.title}</li>`;

      });

       document.querySelector('.output').innerHTML = output;

    })

  });

  document.querySelector('#btn3').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        let output= '';
        users.forEach(user => {
          output += `<li class="text-center my-3">${user.name}</li>`;

        });

         document.querySelector('.output').innerHTML = output;

      })

    });
