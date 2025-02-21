function likes(names) {
  let namesLength = names.length;
  let difference = names.length - 2;
  let message;
  console.log(namesLength);

  switch (namesLength) {
    case 1:
      message = `${names[0]} likes this`;
      break;

    case 2:
      message = `${names[0]} and ${names[1]} like this`;
      break;

    case 3:
      message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;

    case 0:
      message = "no one likes this";
      break;

    default:
      message = `${names[0]}, ${names[1]} and ${difference} like this`;
  }
  console.log(message);
  return message;
}
likes([]);
likes(["Nastia"]);
likes(["Jacob", "Alex"]);
likes(["Max", "John", "Mark"]);
likes(["Alex", "Jacob", "Mark", "Max", "Max", "Max", "Max"]);
