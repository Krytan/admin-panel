/*************************************START CREATE***********************/
export async function createUserSubmission(submission: any) {
    try {
        const response = await fetch("https://localhost:7136/api/UserSubmission", {
            method: 'POST',
            body: JSON.stringify(submission),
            headers: {
                'content-type': 'application/json'
            },
        });
        console.log(response);
        if (!response.ok) {
            throw new Error("Failed to create user submissions");
        }
        return await response.json();
    } catch (error) {
        console.log(error);

    };
}
/****************************************END CREATE***********************/
/***********************************START GET BY ID***********************/

export async function getSubmissionById(id: number) {
      try {
        const response = await fetch("https://localhost:7136/api/UserSubmission/" + id,);
        console.log(response);
        
        if (!response.ok) {
          throw new Error("Failed to get UserSubmission");
        }
        return await response.json();
      } catch (error) {
        console.log(error);
      }
};
/***********************************END GET BY ID***********************/
/***********************************START UPDATE************************/
export async function updateUserSubmission(userSubmissions: any, id: number) {
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
/***********************************END UPDATE************************/
