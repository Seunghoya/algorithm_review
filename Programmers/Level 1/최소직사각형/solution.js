function solution(sizes) {
  let width = 0;
  let height = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      if (width < sizes[i][0]) width = sizes[i][0];
      if (height < sizes[i][1]) height = sizes[i][1];
    } else {
      if (width < sizes[i][1]) width = sizes[i][1];
      if (height < sizes[i][0]) height = sizes[i][0];
    }
  }

  return width * height;
}