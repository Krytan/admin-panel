export default async function getUserSubmissions() {
    const response = await fetch("https://localhost:7136/api/UserSubmission")

    if (!response.ok){
        throw new Error("failed to fetch userSubmissions")

    }

    return await response.json()

}
