// import React, { useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Divider from '@mui/material/Divider';

// export default function AddressForm() {
//   // Define state variables to store form data
//   const [formData, setFormData] = useState({
//     cardName: '',
//     cardNumber: '',
//     expDate: '',
//     cvv: '',
//     saveCard: false,
//     firstName: '',
//     lastName: '',
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: '',
//     saveAddress: false,
//   });

//   // Handle form input changes
//   const handleInputChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === 'checkbox' ? checked : value;
//     setFormData({
//       ...formData,
//       [name]: newValue,
//     });
//   };

//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Payment method
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cardName"
//             name="cardName"
//             label="Name on card"
//             fullWidth
//             autoComplete="cc-name"
//             variant="standard"
//             value={formData.cardName}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         {/* More TextField components for other fields */}
//       </Grid>

//       <Divider variant="middle" />

//       <Typography variant="h6" gutterBottom>
//         Shipping address
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="firstName"
//             name="firstName"
//             label="First name"
//             fullWidth
//             autoComplete="given-name"
//             variant="standard"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         {/* More TextField components for other fields */}
//       </Grid>

//       {/* Checkbox and additional fields */}
//     </React.Fragment>
//   );
// }
