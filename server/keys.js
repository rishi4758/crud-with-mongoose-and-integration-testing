if (process.env.NODE_ENV == "production") {
  module.exports = {
    mongoURI: process.env.MONGO_URI,
  };
} else {
  module.exports = {
    mongoURI:
      "mongodb+srv://phoneData:11700946@LpU@cluster0.rjbtr.mongodb.net/mobiles?retryWrites=true&w=majority",
  };
}
//   mongoURI:'mongodb+srv://phoneData:11700946@LpU@cluster0.rjbtr.mongodb.net/mobiles?retryWrites=true&w=majority',

// module.exports = {

//     mongoURI:'mongodb+srv://phoneData:11700946@LpU@cluster0.rjbtr.mongodb.net/mobiles?retryWrites=true&w=majority',

// }
