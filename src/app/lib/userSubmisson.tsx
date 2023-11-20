export async function getSubmissions(token: any) {
    try {
      const response = await fetch("https://localhost:7136/api/UserSubmission", {
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + token,
        },
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }


  export async function deleteSubmission(id: number) {
    try {
      const response = await fetch("https://localhost:7136/api/UserSubmission/" + id, {
        method: "DELETE",
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  