const {connection} = require('./index.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  return await bcrypt.hash(password,10);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
 }
async function getPassword(userName) {
  var pass =  await connection.query(`select pass from registration where username = "${userName}"`);
  return pass;
}

const addVolunteer = async (req, callBack) => {
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let email = req.body.email
  let username = req.body.username
  let pass = req.body.password
  const hashedPass = await hashPassword(pass);
  // const accessToken = jwt.sign({ userId: 18928 }, process.env.JWT_SECRET, {
  //   expiresIn: "1d"
  //  });
  let emergencyContactName = req.body.emergencyContactName
  let emergencyContactNumber = req.body.emergencyContactNumber
  let position = 'volunteer'
  connection.query(`insert into registration (firstName,lastName,email,username,pass,emergencyContactName,emergencyContactNumber,position) values("${firstName}","${lastName}","${email}","${username}","${hashedPass}","${emergencyContactName}", "${emergencyContactNumber}","${position}")`, (err, data) => {
    if(err) {
      console.log('error in models.js file when posting to database the volunteer')
      console.log(err);
      callBack(err)
    } else {
      callBack(null, data);
    }
  });
}

const getUserRole = (data, callBack) => {
  var userName = data.params.userName;
  connection.query(`select position from registration where username = "${userName}"`, (err, data) => {
    if(err) {
      console.log('error in model.js file when getting user role'),
      callBack(err);
    } else {
      callBack(null, data);
    }
  })
}

const signIn = async (req, callBack) => {
  console.log(req.body);
  try {
    const {userName, password} = req.body
    connection.query(`select pass from registration where username = "${userName}"`, async(err, data) => {
      if(err) {
        console.log('error', err);
        callBack(err, null);
      } else {
        console.log(data);
        console.log(password);
        const validPassword = await validatePassword(password, data[0].pass);
        if(!validPassword) {
          console.log('INVALID PASS');
          callBack("password is wrong", null);
        } else {
          callBack(null, data);
        }
      }
    });
  } catch(error) {
    callBack(error,null);
  }
}

// const JWT_SECRET={{'3439he'}}

module.exports = {
  addVolunteer,
  getUserRole,
  signIn
}