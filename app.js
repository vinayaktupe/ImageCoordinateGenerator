const form = document.querySelector("#form");
const imgFile = document.querySelector("#imgFile");
const imgSource = document.querySelector("#imgSource");
const uploadedImgDiv = document.querySelector("#uploadedImgDiv");
const xValue = document.querySelector("#xValue");
const yValue = document.querySelector("#yValue");
let img = null;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(e);
});

imgFile.onchange = (e) => {
	const markup = `
    <img
    src="${URL.createObjectURL(e.target.files[0])}"
    alt="image "
    class="img"
    style="width: 100%; height: auto"
    id="img"
    />`;
	uploadedImgDiv.innerHTML = "";
	uploadedImgDiv.insertAdjacentHTML("afterbegin", markup);
	img = document.querySelector("#img");

	img.onclick = (e) => {
		window.e = e;
		xValue.textContent = e.clientX;
		yValue.textContent = e.clientY;
	};
};

imgSource.oninput = (e) => {
	if (e.target.value) {
		const markup = `
            <img
                src="${e.target.value}"
                alt="image "
                class="img"
                style="width: 100%; height: auto"
                id="img"
            />`;

		uploadedImgDiv.innerHTML = "";
		uploadedImgDiv.insertAdjacentHTML("afterbegin", markup);
		img = document.querySelector("#img");

		img.onclick = (e) => {
			window.e = e;
			xValue.textContent = e.clientX;
			yValue.textContent = e.clientY;
		};
	}
};
