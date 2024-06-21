function solution(string) {
    return string.split("").map((x) => x === x.toUpperCase() ? " " + x : x).join("");
  }
    console.log(solution("camelCasing"));
