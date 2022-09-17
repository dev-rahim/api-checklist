const toogleSpinner = (displayStyle) => {
    document.getElementById('spinner').style.display = displayStyle;
}
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => getData(data));
}
loadData();

const getData = (data) => {
    const allPotosContainer = document.getElementById('allPotos');
    data.forEach(element => {
        // console.log(element.title);
        const div = document.createElement('div');
        div.classList.add('col-4');
        div.classList.add('w-25');
        div.innerHTML = `
        <a class="nav-link" href="#details">
        <div onclick="getDetails(${element.id})" class="card p-2">
            <img class="card-img-top"
                src="${element.thumbnailUrl}"
                alt="" srcset="">
        </div>
        </a>
             `;
        allPotosContainer.appendChild(div);
        toogleSpinner('none');
    });
}
const getDetails = (id) => {
    const detailsContainer = document.getElementById('details');
    detailsContainer.textContent = '';
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => {
            detailsContainer.innerHTML = `
            <div class="card p-2">
                <img class="card-img-top"
                    src="${data.thumbnailUrl}"
                    alt="" srcset="">
                <div class="card-body">
                    <h3 class="card-title">${data.title}</h3>
                </div>
            </div>
            `;
        });

}

// const spinner = () => {
//     document.getElementById('spinner').style.display = 'none';
// }

