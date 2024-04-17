// const eggs = [{ id: 1 }];

// function g() {
//   return new Promise(function (res, rej) {
//     if (eggs.length == 0) {
//       return rej({
//         data: eggs,
//         message: "failed",
//       });
//     } else {
//       return res({
//         data: eggs,
//         message: "succes",
//       });
//     }
//   });
// }

// function gPromise(cfn) {
//   cfn()
//     .then((rej) => {
//       console.log(rej);
//     })
//     .catch((res) => {
//       console.log(res);
//     });
// }
// async function gAsync(callbackFn) {
//   const res = await callbackFn();
//   console.log(`result from ASYNC`, res);
// }
// gAsync(g);
// gPromise(g);

// const lists = document.querySelector(".lists");

// console.log(getData("suppliers"));

// function drawLists(array) {
//   lists.innerHTML = "";
//   array.forEach((element) => {
//     const listElem = document.createElement("li");
//     listElem.textContent = element.companyName;
//     lists.append(listElem);
//   });
// }

import { BASE_URL } from "./constant.js";

const spin = document.querySelector(".spinner");
const tBody = document.querySelector(".tbody");

async function getData(endpoint) {
  try {
    spin.classList.remove("d-none");
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    drawTable(data);
  } catch (error) {
  } finally {
    spin.classList.add("d-none");
  }
}

getData("suppliers");

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");

    trElem.innerHTML = `
        <td> ${element.id} </td>
        <td> ${element.companyName} </td>
        <td> ${element.address?.street} </td>
        <td> ${element.address?.phone} </td>
        <td> ${element.address.city},${element.address.country} </td>
        <td> <a class="btn btn-primary details-btn" href="./details.html">Details</a></td>
        <td>  <button class="btn btn-danger delete-btn" href="">Delete</button></td>
        <td>  <a class="btn btn-success " href="">Edit</a></td> `;
    tBody.append(trElem);
  });
}
