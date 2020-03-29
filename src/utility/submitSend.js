import Axios from 'axios'

export default function submitSend( zipcode, phone){
  if(zipcode && phone){
  console.log( zipcode, phone);
  const clientRequest ={zipcode: zipcode , phone: phone}
  Axios.post('', clientRequest)
    .then(alert('Thank you for subscribing'))
    .catch(e => console.log('AN ERROR WHILE POSTING TO DATABASE', e))
  }else{
    alert('Please fill out both your zipcode and your phone number.');
  };
};