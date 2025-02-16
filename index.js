const demoCampaignCtx = document.getElementById("demo-campaign-ctx");
const veryfiLensCtx = document.getElementById("veryfi-lens-ctx");
const croppedImage = document.getElementById("veryfi-lens-cropped-image");
const preview = document.getElementById("veryfi-preview");

veryfiLensCtx.style.display = "none";

GET_SESSION_URL = "http://localhost:5001/session";

const init = async () => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    };

    const session = await fetch(GET_SESSION_URL, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            return data.session;
        })
        .catch((error) => {
            return error;
        });
    VeryfiLens.setLensSessionKey(session);
    VeryfiLens.init();
};

init();

const capture = () => {
    const image = VeryfiLens.capture();
    croppedImage.src = `data:image/png;base64,${image}`;
    preview.style.display = "block";
    veryfiLensCtx.style.display = "none";
    demoCampaignCtx.style.display = "block";
};

const startCamera = () => {
    VeryfiLens.startCamera();
    veryfiLensCtx.style.display = "block";
    demoCampaignCtx.style.display = "none";
};

const stopCamera = () => {
    VeryfiLens.stopCamera();
    veryfiLensCtx.style.display = "none";
    demoCampaignCtx.style.display = "block";
};
