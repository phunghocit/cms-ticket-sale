export const ramdomcode = (x: number) => {
  let text = "";
  let char_list = "0123456789";
  for (let i = 0; i < x; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
};
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
