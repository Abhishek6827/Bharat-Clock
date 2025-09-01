// function Time_date () {
//     return (
//         <p className="text-center">This is current time: 26/10/2023 - 10:38:17 AM</p>
//     )
// }
let Time_date = () => {
  let time = new Date();
  return (
  <p className="bg-success lead" >This is current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
)
};

export default Time_date;
