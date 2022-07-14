//creating new item with post request
let createBtn = document.getElementById('createBtn');
createBtn.addEventListener('click', createButtonClickHandler)

function createButtonClickHandler() {
    console.log('You have clicked the Create button');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
     xhr.open('POST', 'https://reqres.in/api/users', true);

    // USE THIS FOR POST REQUEST
    xhr.getResponseHeader('Content-type', 'application/json');

    // send the request
    params = `{"name": "morpheus","job": "leader"}`;
    xhr.send();

    // What to do when response is ready
        xhr.onload = function () {
            //if(this.status === 200){
                let obj = JSON.parse(this.responseText);
                console.log(obj);
                let list = document.getElementById('list');
                str = "";

                    str += `<li>${obj.id} </li>`;

                list.innerHTML = str;
                let hclist = document.getElementById('hclist');
                                str1 = "";

                                    str1 += `<option value=${obj.id}> ${obj.id} </option>`;

                                hclist.innerHTML = str1;

           // }
            //else{
            //    console.log("Some error occurred")
           // }
        }

    console.log("We are done!");

}

//fetching item by Id
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fetchBtnClickHandler)

function fetchBtnClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
     xhr.open('GET', 'https://gorest.co.in/public/v2/users', true);

    // USE THIS FOR POST REQUEST
    //xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do when response is ready
    xhr.onload = function () {
            console.log(this.responseText)
            if(this.status === 200){
                        let obj = JSON.parse(this.responseText);
                        console.log(obj);
                        let hclist = document.getElementById('hclist');
                        str = "";

                        for (key in obj)
                        {
                            str += `<option value=${obj[key].email}> ${obj[key].id} </option>`;

                        }
                        hclist.innerHTML = str;
                    }
                    else{
                        console.log("Some error occurred")
                    }
hclist.addEventListener("input", () => document.getElementById("optionData").innerHTML = hclist.value);


    }

    // send the request
   // params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send();

    console.log("We are done!");

}

function changeVal()
{
 const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://gorest.co.in/public/v2/users', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload = function () {
            console.log(this.responseText)
            if(this.status === 200){
                        let obj1 = JSON.parse(this.responseText);
                        let userTable = document.getElementById('userTable');
                        str = "";

                        for (key in obj1)
                        {
                            str += `<tr>  <td> ${obj1[key].email}</td>
                                          <td> ${obj1[key].status}</td>  </tr>`;

                        }
                        userTable.innerHTML = str;
                    }
                    else{
                        console.log("Some error occurred")
                    }


    }

    // send the request
   // params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send();


}

//fetch all items
let fetchAllBtn = document.getElementById('fetchAllBtn');
fetchAllBtn.addEventListener('click', fetchAllBtnClickHandler);

function fetchAllBtnClickHandler() {
    console.log('You have clicked the Fetch All button');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    //xhr.open('GET', 'https://gorest.co.in/public/v2/users', true);
    xhr.open('GET', 'http://localhost:8080/app/employees/orderedList', true);

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";

            for (key in obj)
            {
                str += `<li>${obj[key].empId}  <button type="button" id="updateBtn" class="btn btn-secondary">Update Record</button></li>`;

            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occurred")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching all records!");

}

