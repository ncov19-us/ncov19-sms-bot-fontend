import Axios from "axios";
import zips from "zips";

export default function submitSend(zipcode, phone) {
  // first check if zipcode is valid at all
  if (zips.getByZipCode(zipcode) != null) {
    // now we send the data to the back end
    if (zipcode && phone) {
      const clientRequest = { zipcode: zipcode, phone: phone };
      Axios.post("", clientRequest)
        .then(alert("Thank you for subscribing"))
        .catch(e => console.log("AN ERROR WHILE POSTING TO DATABASE", e));
    } else {
      alert("Please fill out both your zipcode and your phone number.");
    }
  } else {
    alert("Please provide a correct zipcode.");
  }
}
