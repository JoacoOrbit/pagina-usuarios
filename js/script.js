const editProfile = document.querySelector(".edit");

editProfile.addEventListener("click", function () {
    const profileName = this.closest(".user-content").querySelector("#profile-name");
    profileName.textContent = "Elga Tito";
});

let newConnections = document.querySelector(".newConnection-count");
let connections = document.querySelector(".connection-count");

const acceptBtn = document.querySelectorAll(".accept");

for (let i = 0; i < acceptBtn.length; i++) {
    acceptBtn[i].addEventListener("click", function(){
        this.closest("li").remove();

        let counter = newConnections.textContent;
        counter--;
        newConnections.textContent = counter;

        let connectionsNumber = connections.textContent;
        connectionsNumber++;
        connections.textContent = connectionsNumber;
    })
}

const denyBtn = document.querySelectorAll(".deny");

for (let i = 0; i < denyBtn.length; i++) {
    denyBtn[i].addEventListener("click", function(){
        this.closest("li").remove();
        
        let counter = newConnections.textContent;
        counter--;
        newConnections.textContent = counter;
    })
}