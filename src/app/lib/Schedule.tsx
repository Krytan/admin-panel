export async function getSchedule() {
  const response = await fetch("https://localhost:7136/api/Schedule");

  if (!response.ok) {
    throw new Error("failed to fetch schedule");
  }

  return await response.json();
}

export async function createSchedule(schedule: any, token: any) {
  try {
    const response = await fetch("https://localhost:7136/api/Schedule", {
      method: "POST",
      body: JSON.stringify(schedule),
      headers: {
        "content-type": "application/json",
            Authorization: 'Bearer ' + token,
      },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to create schedule");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteSchedule(id: number) {
  try {
    const response = await fetch("https://localhost:7136/api/Schedule/" + id, {
      method: "DELETE",
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to delete schedule");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateSchedule(schedule: any, id: number) {
  try {
    const response = await fetch("https://localhost:7136/api/Schedule/" + id, {
      method: "PUT",
      body: JSON.stringify(schedule),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to update schedule");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getScheduleById(id: number) {
    try {
      const response = await fetch("https://localhost:7136/api/Schedule/" + id,);
      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to get schedulebyid");
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
