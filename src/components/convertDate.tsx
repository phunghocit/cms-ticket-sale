export const CONVERT = (date: string) => {
  const today = new Date(date);
  return today.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
// export const DATE_CONVERT = (date:string)=>{
//     const today = new Date(date)
//     return today.toLocaleDateString('se-SE', {
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit',
//       });
// }
