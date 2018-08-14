// GET THE REFERENCES
const container = document.querySelector('.container');
const tag = document.querySelector('.tagline h1');
const img = document.querySelector('.header-img')
const links = document.querySelectorAll('nav a');
let url = '../partials/articles.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL

const loadContent = (event) => {

    event.preventDefault();
    let t = event.target.textContent;



    if (t === "Portfolio") {
        let tagline = "Welcome to the portfilio.";
        let url = '../partials/portfolio.html';

        //Default load Articles
        fetch(url).then(function (response) {

                //Turn the response into text and pass to the data parameter
                return response.text();

            }).then(function (data) {

                container.innerHTML = data;
                tag.innerHTML = tagline;
                document.getElementById('bg').style.backgroundImage = "url('./img/mirre.jpg')";

            })
            // Error will hokd anything the goes wrong in the process
            .catch(function (error) {
                console.log(error.message);
            });

    } else if (t === "Home") {
        let tagline = "Hot Topics for your reading pleasure.";


        //Default load Articles
        fetch(url).then(function (response) {
                //Turn the response into text and pass to the data parameter
                return response.text();

            }).then(function (data) {

                container.innerHTML = data;
                tag.innerHTML = tagline;
                document.getElementById('bg').style.backgroundImage = "url('./img/papers.jpg')";

            })
            // Error will hokd anything the goes wrong in the process
            .catch(function (error) {
                console.log(error.message);
            });





    }

}

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
// GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
// CALL THE FUNCTION loadContent PROVIDING THE href
// VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
// OF loadContent FUNCTION.
// CLOSE YOUR FUNCTION selectContent HERE

const selectContent = () => {

    let tagline = "Hot Topics for your reading pleasure.";


    //Default load Articles
    fetch(url).then(function (response) {
            //Turn the response into text and pass to the data parameter
            return response.text();

        }).then(function (data) {

            container.innerHTML = data;
            tag.innerHTML = tagline;
            document.getElementById('bg').style.backgroundImage = "url('../img/papers.jpg')";

        })
        // Error will hokd anything the goes wrong in the process
        .catch(function (error) {
            console.log(error.message);
        });
}


for (let l of links) {
    l.addEventListener("click", loadContent);
}


selectContent();
