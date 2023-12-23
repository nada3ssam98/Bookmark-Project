var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var siteNamealertMessage = document.getElementById("alertNameMessage");
var siteUrlalertMessage = document.getElementById("alertUrlMessage");
var arrayList=[]
if(localStorage.getItem("Bookmark") != null){
    
   arrayList= JSON.parse(localStorage.getItem("Bookmark"));
    displayData();
}


//addProduct function
function addBookmark(){

    if( validationName()==true && validationUrl()==true ){

        bookmark = {
            name : siteNameInput.value,
            url : siteUrlInput.value,
        }
        arrayList.push(bookmark);

        localStorage.setItem("Bookmark" , JSON.stringify(arrayList));

        displayData();

        clearForm();

        siteNameInput.classList.remove("is-valid");
        siteUrlInput.classList.remove("is-valid");
    }
}


//displayData function()
function displayData(){
    var cartoona = "";
    for (var i = 0; i < arrayList.length; i++) {
        cartoona += `<tr>
        <td> ${i}</td>
        <td> ${arrayList[i].name}</td>
        <td> <button class="btn btn-info" onclick="visit(${i})" style=" background-color:#8A9E23;border:none;color:white"><a id="visitBtn"><i class="fa-solid fa-eye pe-1"></i>Visit</a></button></td>
        <td> <button class="btn btn-danger" onclick="deleteButton(${i})" style="background-color:#D30820"><i class="fa-solid fa-trash pe-1"></i>Delete</button></td>
    </tr>
        `
        }
        document.getElementById("tableBody").innerHTML = cartoona;

}


//visit function
function visit(index){
    document.getElementById("visitBtn").href = arrayList[index].url;
    displayData()
}


//delete function
function deleteButton(index){
    arrayList.splice(index , 1);
    localStorage.setItem("Bookmark" , JSON.stringify(arrayList))
    displayData()
}

function clearForm(){
    siteNameInput.value="";
    siteUrlInput.value="";
}

function validationName(){

    var regex = siteNameInput.value;
    var regexForName = /^[a-zA-Z]{3,}[0-9]?$/;
    //case true
    if( regexForName.test( regex )  ){

        siteNameInput.classList.add( "is-valid" );

        siteNameInput.classList.remove( "is-invalid" );

        siteNamealertMessage.classList.add("d-none")

        return true
    }

    else{ //not valid
        siteNameInput.classList.add( "is-invalid" );

        siteNameInput.classList.remove( "is-valid" );

        siteNamealertMessage.classList.remove("d-none");

        return false

    }
}

function validationUrl(){

    var regex = siteUrlInput.value;
    var regexForUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;
    //case valid
    if( regexForUrl.test( regex ) ){

        siteUrlInput.classList.add( "is-valid" );

        siteUrlInput.classList.remove( "is-invalid" );

        siteUrlalertMessage.classList.add("d-none")

        return true
    }

    else{ //not valid
        siteUrlInput.classList.add( "is-invalid" );

        siteUrlInput.classList.remove( "is-valid" );

        siteUrlalertMessage.classList.remove("d-none");

        return false

    }
}