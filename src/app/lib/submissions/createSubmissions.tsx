export default async function createUserSubmissions(submission: any) {
    try {
    const response = await fetch("https://localhost:7136/api/UserSubmission", {
      method: 'POST',
      body: JSON.stringify(submission),
      headers: {
        'content-type': 'application/json'
      }

    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to create user submissions");
    }
    return await response.json();

}catch (error){
    console.log(error)

}
  
  }
