const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '563188936096-coaa2i7rvjpvrtqo9f5f7tlveluaeg3h.apps.googleusercontent.com';

export const verify = async (token) => {
  const client = new OAuth2Client(CLIENT_ID);
  const ticket = await client.verifyIdToken({
      idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImU5YjU2Y2ZjNjQwZDEyYmZmNDU0MDU1MzQwMmM3ZjE1N2Q0ODE4MDYifQ.eyJhenAiOiI1NjMxODg5MzYwOTYtY29hYTJpN3J2anB2cnRxbzlmNWY3dGx2ZWx1YWVnM2guYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NjMxODg5MzYwOTYtY29hYTJpN3J2anB2cnRxbzlmNWY3dGx2ZWx1YWVnM2guYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk1MDQxMjgyMzMzMDcyOTU0MjgiLCJlbWFpbCI6ImFyY2lsbGEuYnVtYmxlYmVlbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Ik5yVnVCcTdlZUZiLXZBVUx3Yk4xV2ciLCJleHAiOjE1MjI5MTM4MDksImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJqdGkiOiI3NGI0N2UxNDdjZTMwZjAxZWMzZDkzYTY5NjIzNjM3YTNkZDIzZTc3IiwiaWF0IjoxNTIyOTEwMjA5LCJuYW1lIjoiQXJjaWxsYSBNYXJ2aW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1nME1OckhqRF9jMC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFCdy9rc0xfWV9BRmVqZy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiQXJjaWxsYSIsImZhbWlseV9uYW1lIjoiTWFydmluIiwibG9jYWxlIjoiZW4ifQ.Sy1PoLyb0BbP7zaJNJx1X4NPe78igeDvDT4TF0FIwDEo8fnwyfopgeQvZ-UbTSMTot3QzZxS_MZdH2AGhVrXG4TpuKV1f_PrTM0mAj4fWYj6Madly665KOkdyommpV8IS2pR1_--m13Cu8-GbzTHqyAA6gNukhyfZcbxDYvlmlzOv2jkZTCwW_JG15X_x2yZFB8ZRVcihqdr__Os6dtn39zV3dmVs8mfU2SN6UDzxjjaungCzHquX4xv8oo77LEo_jqSlLDzq7mfNa7sL1uxFPwSc5mXWzhBuJHf43FTTZS1gLOVy0lD_Tp5ram9xe-7ergUKAVrkX4kUclx9FICzQ',
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
  return payload;
}
