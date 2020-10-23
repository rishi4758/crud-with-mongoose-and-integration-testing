if (process.env.NODE_ENV == "production") {
  module.exports = {
    mongoURI: process.env.MONGO_URI,
    redirectDomain: process.env.REDIRECT_DOMAIN,
  };
} else {
  module.exports = {
    mongoURI:
      "mongodb+srv://phoneData:11700946@LpU@cluster0.rjbtr.mongodb.net/mobiles?retryWrites=true&w=majority",
    redirectDomain: "http://localhost:3001",
  };
}
//   mongoURI:'mongodb+srv://phoneData:11700946@LpU@cluster0.rjbtr.mongodb.net/mobiles?retryWrites=true&w=majority',

// module.exports = {

//     mongoURI:'mongodb+srv://phoneData:11700946@LpU@cluster0.rjbtr.mongodb.net/mobiles?retryWrites=true&w=majority',

// }
