var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var arrayList=[]
if(localStorage.getItem("Bookmark") != null){
    
   arrayList= JSON.parse(localStorage.getItem("Bookmark"));
    displayData();
}


//addProduct function
function addBookmark(){
    bookmark = {
        name : siteNameInput.value,
        url : siteUrlInput.value,
    }
    arrayList.push(bookmark);
    localStorage.setItem("Bookmark" , JSON.stringify(arrayList));
    displayData();
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