console.log("Let's get this party started!");

// async function signUp(username, password, name){
//     const res = await axios.post("", { user: {name, username, password } })
//     console.log(res);
// }
// async function login(username, password){
//     const res = await axios.post("", { user: {username, password } })
//     console.log(res);
//     return res.data.token;
// }

// async function createStory(){
//     const token = await login ();



const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function addGif(res){
    let numResults = res.data.length;
    if(numResults){
        let $newGif = $('<img>',{
            src: res.data[1].images.original.url
        });
        $gifArea.append($newGif);
    }
}

//event listener for submut
$("form").on("submit", async function(e){
    e.preventDefault();

    // value of search input assigned to searchTerm
    // then set searchInput to blank
    let searchTerm = $searchInput.val();
    $searchInput.val("");

    // get request to giphy api and add api key and search term to request using params
    // then pass response.data to addGif function
    try{
        const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                q: searchTerm,
                api_key: "ewHn20C4NU30pL9OqOwUMyKHZno8K8YV"
            }
        });
        addGif(response.data)
    } catch (error){
        console.log("Api call failed", error);
    }
});

$("#remove").on('click', function(e){
    e.preventDefault();
    $gifArea.empty();
})