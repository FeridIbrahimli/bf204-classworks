import { BASE_URL } from "./constant.js";

import { deleteDataById } from "./services.js";

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
        <td>  <button data-id="${element.id}" class="btn btn-danger delete-btn" href="">Delete</button></td>
        <td>  <a class="btn btn-success " href="">Edit</a></td> `;
    tBody.append(trElem);
  });

  //delete buttons
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteDataById(id);
          this.closest("tr").remove();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}
