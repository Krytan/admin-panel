export default async function updateUserSubmission(userSubmissions: any, id: number) {
    try {
    const response = await fetch("https://localhost:7136/api/UserSubmission/" + id, {
      method: 'PUT',
      body: JSON.stringify(userSubmissions),
      headers: {
        'content-type': 'application/json'
      }

    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to updater Submission");
    }
    return await response.json();

}catch (error){
    console.log(error)

}
  
  }
