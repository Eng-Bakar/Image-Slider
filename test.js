let slider = document.querySelector("#slider")
let NextButtom = document.querySelector("#nextBtn")
let previousButton = document.querySelector("#prevBtn")
let end = document.querySelector("#end")

let images = [
    "https://img.freepik.com/free-photo/view-black-panther-with-cub-nature_23-2150460926.jpg?t=st=1721128801~exp=1721132401~hmac=56379c36796ffcc364bc4d772147b90ae084ba7f675a221a9407428d52a00c90&w=900",
    "https://img.freepik.com/free-photo/view-lion-cubs-wild_23-2150374952.jpg?t=st=1721128815~exp=1721132415~hmac=776ee1e27ad6e9f3482ab7d795fd0d123bfda124931489b9b629f1c87d15c0f6&w=900",
    "https://img.freepik.com/free-photo/view-lioness-wild_23-2150374936.jpg?t=st=1721128848~exp=1721132448~hmac=d1730b8e61abb2756b1cb8d50954edccca8959720f6caf88655e3d6b90bf813a&w=900",
    "https://img.freepik.com/free-photo/view-tiger-nature_23-2150460831.jpg?t=st=1721128779~exp=1721132379~hmac=79c4d3aae93e42ceba89641906f714d5eb4e8bc66542511983b00aa15fa0fc3a&w=1060",
    "https://img.freepik.com/free-photo/view-lion-cub-wild_23-2150374813.jpg?t=st=1721131533~exp=1721135133~hmac=60e92368f777b35385cdfcf2f067f07f7c3733ef20412ea5d780f7648dc6f86b&w=1060",
    "https://img.freepik.com/free-photo/view-lion-wild_23-2150374815.jpg?t=st=1721131547~exp=1721135147~hmac=a63989c0530938522f80c5e71b93c41a07645f0ee7556e18ba84f30e09ed9317&w=900",
    "https://img.freepik.com/free-photo/view-lioness-lion-wild_23-2150374826.jpg?t=st=1721131556~exp=1721135156~hmac=cd54690ca93956402012fdff9f27af182f1a90291ac8eefe2d484e52cbcae0b3&w=900",
    "https://img.freepik.com/free-photo/lion-dry-forest-landscape_23-2151661767.jpg?t=st=1721131590~exp=1721135190~hmac=ea7a293efbc0afa07d813c651340518329cd7f42e56bda5dfa7c203ea15f0dce&w=900",
    "https://img.freepik.com/free-photo/lion-pride-dry-forest_23-2151661813.jpg?t=st=1721131715~exp=1721135315~hmac=88da4effff4dc52c258cb91ce16b65bd8b15059a4ab4c6a96c5980204862cbfd&w=1060",
    "https://img.freepik.com/free-photo/lion-pride-dry-forest_23-2151661695.jpg?t=st=1721131732~exp=1721135332~hmac=e6affe2850935bae0cbc787ae5e2ad2423c7759da9db55a6578950ba0f34134d&w=900"
] 
let indexNumber = 0

slider.src = images[indexNumber]
NextButtom.addEventListener("click",function(){
    if (indexNumber < images.length -1){
        indexNumber++
        slider.src = images[indexNumber]
    }
    if( indexNumber == images.length -1){
        end.innerHTML = "Dhamaadka ayaa la gaaray"
        end.style.backgroundColor = "red"
        end.style.color = "white"
        
    }
})
previousButton.addEventListener("click",function(){
    if ( indexNumber >0){
        indexNumber--
        slider.src = images[indexNumber]
    }
})