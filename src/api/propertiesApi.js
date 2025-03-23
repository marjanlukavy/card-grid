export const fetchProperties = async (page = 0, size = 30) => {
  try {
    const url =
      "https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects";
    const params = new URLSearchParams({
      accessKey: "A7gjfjj0WdBynt8d",
      secretKey: "tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn",
      isPagination: "true",
      size: size.toString(),
      page: page.toString(),
    });

    const response = await fetch(`${url}?${params.toString()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const isFullPage = data.projects && data.projects.length >= size;
    const estimatedTotalCount =
      data.totalCount || (isFullPage ? (page + 2) * size : (page + 1) * size);

    return {
      projects: data.projects || [],
      totalCount: estimatedTotalCount,
      hasMore: isFullPage,
    };
  } catch (error) {
    throw error;
  }
};
