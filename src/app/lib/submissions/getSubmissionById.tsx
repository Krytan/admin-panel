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
    }