const url = "https://api.github.com/search/users?q=";

$("#searchb").click(()=> {
    let query = $("#search").val();
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url + query);
    xhr.onload = () => {
        if (xhr.status > 300){
            console.log("Error! Error status: " + xhr.status);
        }
        let result = JSON.parse(xhr.response);
        $("#result").html("");
   //     console.log(result);
        result.items.forEach((item) => {
        //    console.log(item);
            $("#result").append(`
                <p>${item.login}</p>
                <img src=${item.avatar_url} width="200px"></img>
            `);          
        });     
    }
    xhr.onerror = (error) => {
        console.log("Error: " + error);
    }
    xhr.send();
});