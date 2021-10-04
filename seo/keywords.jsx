export const add = (keywords) => {
    const list = [
        "Google Cloud Ready",
        "GCP",
        "Qwiklabs",
        "GoogleCloudReady",
        "30DaysOfGoogleCloud",
        "Cloud",
        "Qwiklab",
        "Qwiklabs Google Cloud",
        "web",
        "google cloud",
        "Google Cloud Platform",
        "Google Events",
        "Free Google Swag",
        "Google Cloud ready facilitator program",
        "Google Cloud Ready Program",
        "30 days of google cloud",
        "Google Cloud Ready Program Prizes",
        "Challenge Lab Qwiklabs",
        "Learn to Earn Cloud Challenge"
    ]
    return [...keywords.split(",").map(word => word.trim()), ...list].join(",")
}