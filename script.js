/*const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");



const updateImageCard = (imageDataArray) => {
    imageDataArray.forEach((imgObject, index) => {
        const imgCard = imageGallery.querySelectorAll(".img-card")[index];
        const imgElement = imgCard.querySelector("img");

        const aiGeneratedImg = `data:image/jpeg;base64,${imgObject.b64_json}`;
        imgElement.src = aiGeneratedImg;

        imgElement.onload = () => {
            imgCard.classList.remove("loading");
        };
    });
};

const generateAiImages = async (userPrompt, userImageQuantity) => {
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: userPrompt,
                n: parseInt(userImageQuantity),
                size: "512x512",
                response_format: "b64_json"
            })
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(`Error: ${response.status} - ${errorDetails.error.message}`);
        }

        const { data } = await response.json();
        updateImageCard([...data]);
    } catch (error) {
        console.error("Error generating images:", error);
        alert(error.message);
    }
};

const handleFormSub = (e) => {
    e.preventDefault();
    const userPrompt = e.srcElement[0].value;
    const userImageQuantity = e.srcElement[1].value;

    const imgCardMarkup = Array.from({ length: userImageQuantity }, () =>
        `<div class="img-card loading">
            <img src="images/loader.svg" alt="image">
            <a href="#" class="download-btn">
                <img src="images/download.svg" alt="download icon">
            </a>
        </div>`
    ).join("");

    imageGallery.innerHTML = imgCardMarkup;
    generateAiImages(userPrompt, userImageQuantity);
};

generateForm.addEventListener("submit", handleFormSub);*/