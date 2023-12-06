export const getCategories = (data: any) => {
  const categoryCounts: any = {};

  for (const item of data) {
    const { category } = item;
    if (category) {
      if (category in categoryCounts) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    }
  }

  const result = Object.entries(categoryCounts).map(([category, count]) => ({
    title: category,
    openings: count,
  }));
  return result;
};
