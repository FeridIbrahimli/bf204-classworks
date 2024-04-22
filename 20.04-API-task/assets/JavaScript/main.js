import { getAll, deleteOne } from "./API/requests/index.js";
import { endpoints } from "./API/constants.js";

const moviesWrapper = document.querySelector(".movies-wrapper");
const trailerBtn = document.querySelector(".trailer");
const infoBtn = document.querySelector(".info-btn");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");


window.addEventListener('load', () => {
    getAll(endpoints.movies).then((res) => {
        renderCards(res.data);

    })
})

function renderCards(arr) {
    moviesWrapper.innerHTML = "";
    arr.forEach((movies) => {
        moviesWrapper.innerHTML += `
    <div class="col-lg-3 col-md-6 col-sm-12 mb-5" data-id="${movies.id}">
                <div class="card">
                    <div class="card-image">
                        <img src="${movies.poster}" class="card-img-top" alt="${movies.title}">
                    </div>
                    <div class="card-body">
                     <marquee class="card-title" direction="left" behavior="scroll" scrollamount="5" > <h3 class="card-title">${movies.title}</h3></marquee>
                      <hr>
                     <div class=" d-flex justify-content-between align-items-center mb-3 ">
                        <button class="btn btn-outline-secondary trailer">Click for trailer</button> <br>
                        <span class="age">${movies.ageRestriction}+</span>
                     </div>
                     <div class="btns d-flex justify-content-between">
                         <button class="btn btn-outline-info info-btn">
                           <i class="fa-solid fa-circle-info"></i>
                         </button>
                         <button class="btn btn-outline-primary edit-btn">
                           <i class="fa-solid fa-pen-to-square"></i>
                         </button>
                         <button class="btn btn-outline-danger delete-btn">
                           <i class="fa-solid fa-trash"></i>
                         </button>

                     </div>

                    </div>
                  </div>
            </div> 
     `;
        //delete buttons
        const deleteBtns = document.querySelectorAll(".delete-btn");
        deleteBtns.forEach((btn) => {

            btn.addEventListener("click", async function () {
                // console.log("delete response: ", movies);

                // console.log(this.closest(".col-lg-3").getAttribute("data-id"));
                const id = this.closest(".col-lg-3").getAttribute("data-id");
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        console.log(endpoints.movies);
                        // console.log("delete response: ", res);
                        deleteOne(endpoints.movies, id);
                        this.closest(".col-lg-3").remove();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            });
        });


    })
}