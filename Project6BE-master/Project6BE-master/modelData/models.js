/**
 * Model data for Project 5 - the photo sharing site.
 * This module returns an object called models with the following
 * functions:
 *
 * models.userListModel() - A function that returns the list of users on
 * the system. The list is returned as an array of objects containing:
 *   _id (string)         - The ID of the user.
 *   first_name (string)  - The first name of the user.
 *   last_name (string)   - The last name of the user.
 *   location (string)    - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string)  - The occupation of the user.
 *
 * models.userModel() - A function that returns the info of the specified
 * user. Called with an user ID (id), the function returns n object containing:
 *   _id (string)         - The ID of the user.
 *   first_name (string)  - The first name of the user.
 *   last_name (string)   - The last name of the user.
 *   location (string)    - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string)  - The occupation of the user.
 *
 * models.photoOfUserModel() - A function that returns the photos belong to
 * the specified user. Called with an user ID (id), the function returns an
 * object containing:
 *   _id (string)         - The ID of the photo
 *   date_time (date)     - The date and time the picture was taken in ISO
 *                          format.
 *   file_name (string)   - The file name in the image directory of the picture.
 *   user_id (string)     - The user id of the picture's owner.
 *   comments ([objects]) - An array of Comments with the properties:
 *       _id (string)       - The ID of the comment.
 *       date_time (date)   - The date the comment was made in ISO format.
 *       comment (string)   - The text of the comment.
 *       user: (object)     - The user who made the comment.
 *       photo_id: (string) - The ID of the photo the comment belongs to.
 *
 * models.schemaModel() - A function that returns the test info from the
 * fake schema. The function returns an object containing:
 *   _id (string)           - The ID of the schema.
 *   __v (number)           - The version number.
 *   load_date_time (date)  - The date the schema was made in ISO format.
 */

const schemaInfo = {
  load_date_time: "Fri Apr 29 2016 01:45:15 GMT-0700 (PDT)",
  __v: 0,
  _id: "57231f1b30e4351f4e9f4bf6",
};

// Create init users.

const im = {
  _id: "57231f1a30e4351f4e9f4bd7",
  first_name: "Ian",
  last_name: "Malcolm",
  location: "Austin, TX",
  description: "Should've stayed in the car.",
  occupation: "Mathematician",
  username: "user1",
  password: "12345"
};
const er = {
  _id: "57231f1a30e4351f4e9f4bd8",
  first_name: "Ellen",
  last_name: "Ripley",
  location: "Nostromo",
  description: "Lvl 6 rating. Pilot.",
  occupation: "Warrant Officer",
  username: "user2",
  password: "12345"
};
const pt = {
  _id: "57231f1a30e4351f4e9f4bd9",
  first_name: "Peregrin",
  last_name: "Took",
  location: "Gondor",
  description:
    "Home is behind, the world ahead... " +
    "And there are many paths to tread. Through shadow, to the edge of night, " +
    "until the stars are all alight... Mist and shadow, cloud and shade, " +
    "all shall fade... all... shall... fade... ",
  occupation: "Thain",
  username: "user3",
  password: "12345"
};
const rk = {
  _id: "57231f1a30e4351f4e9f4bda",
  first_name: "Rey",
  last_name: "Kenobi",
  location: "D'Qar",
  description: "Excited to be here!",
  occupation: "Rebel",
  username: "user4",
  password: "12345"
};
const al = {
  _id: "57231f1a30e4351f4e9f4bdb",
  first_name: "April",
  last_name: "Ludgate",
  location: "Pawnee, IN",
  description: "Witch",
  occupation: "Animal Control",
  username: "user5",
  password: "12345"
};
const jo = {
  _id: "57231f1a30e4351f4e9f4bdc",
  first_name: "John",
  last_name: "Ousterhout",
  location: "Stanford, CA",
  description: "<i>CS142!</i>",
  occupation: "Professor",
  username: "user6",
  password: "12345"
};

const users = [im, er, pt, rk, al, jo];

// Create initial photos.
const photo1 = {
  _id: "57231f1a30e4351f4e9f4bdd",
  date_time: "2012-08-30 10:44:23",
  file_name: "ouster.jpg",
  user_id: jo._id,
};
const photo2 = {
  _id: "57231f1a30e4351f4e9f4bde",
  date_time: "2009-09-13 20:00:00",
  file_name: "malcolm2.jpg",
  user_id: im._id,
};
const photo3 = {
  _id: "57231f1a30e4351f4e9f4bdf",
  date_time: "2009-09-13 20:05:03",
  file_name: "malcolm1.jpg",
  user_id: im._id,
};
const photo4 = {
  _id: "57231f1a30e4351f4e9f4be0",
  date_time: "2013-11-18 18:02:00",
  file_name: "ripley1.jpg",
  user_id: er._id,
};
const photo5 = {
  _id: "57231f1a30e4351f4e9f4be1",
  date_time: "2013-09-20 17:30:00",
  file_name: "ripley2.jpg",
  user_id: er._id,
};
const photo6 = {
  _id: "57231f1a30e4351f4e9f4be2",
  date_time: "2009-07-10 16:02:49",
  file_name: "kenobi1.jpg",
  user_id: rk._id,
};
const photo7 = {
  _id: "57231f1a30e4351f4e9f4be3",
  date_time: "2010-03-18 23:48:00",
  file_name: "kenobi2.jpg",
  user_id: rk._id,
};
const photo8 = {
  _id: "57231f1a30e4351f4e9f4be4",
  date_time: "2010-08-30 14:26:00",
  file_name: "kenobi3.jpg",
  user_id: rk._id,
};
const photo9 = {
  _id: "57231f1a30e4351f4e9f4be5",
  date_time: "2013-12-03 09:02:00",
  file_name: "took1.jpg",
  user_id: pt._id,
};
const photo10 = {
  _id: "57231f1a30e4351f4e9f4be6",
  date_time: "2013-12-03 09:03:00",
  file_name: "took2.jpg",
  user_id: pt._id,
};
const photo11 = {
  _id: "57231f1a30e4351f4e9f4be7",
  date_time: "2013-09-04 09:16:32",
  file_name: "ludgate1.jpg",
  user_id: al._id,
};
const photo12 = {
  _id: "57231f1a30e4351f4e9f4be8",
  date_time: "2008-10-16 17:12:28",
  file_name: "kenobi4.jpg",
  user_id: rk._id,
};

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
];

// Create initial comments.
const comment1 = {
  _id: "57231f1a30e4351f4e9f4be9",
  date_time: "2012-09-02 14:01:00",
  comment:
    "Learning new programming languages is hard... " +
    "it's so easy to forget a </div>!",
  user: jo,
  photo_id: photo1._id,
};

const comment2 = {
  _id: "57231f1a30e4351f4e9f4bea",
  date_time: "2013-09-06 14:02:00",
  comment:
    "This is another comment, with a bit more text; " +
    "if the text gets long enough, does it wrap properly " +
    "from line to line?",
  user: jo,
  photo_id: photo1._id,
};

const comment3 = {
  _id: "57231f1a30e4351f4e9f4beb",
  date_time: "2013-09-08 14:06:00",
  comment:
    "If you see this text in <b>boldface</b> " +
    "then HTML escaping isn't working properly.",
  user: jo,
  photo_id: photo1._id,
};

const comment4 = {
  _id: "57231f1a30e4351f4e9f4bec",
  date_time: "2009-09-14 18:07:00",
  comment:
    "If there is one thing the history of evolution has" +
    " taught us it's that life will not be contained. Life breaks " +
    "free, it expands to new territories and crashes through " +
    "barriers, painfully, maybe even dangerously, but, uh... well, " +
    "there it is. Life finds a way.",
  user: im,
  photo_id: photo2._id,
};

const comment5 = {
  _id: "57231f1a30e4351f4e9f4bed",
  date_time: "2013-11-28 17:45:13",
  comment:
    "Back from my trip. Did IQs just... drop sharply while I was " + "away?",
  user: er,
  photo_id: photo5._id,
};

const comment6 = {
  _id: "57231f1a30e4351f4e9f4bee",
  date_time: "2013-11-02 14:07:00",
  comment:
    "Hey Rey, great form. Love what " +
    "you do with the scavenged tech, got any tips?",
  user: er,
  photo_id: photo7._id,
};

const comment7 = {
  _id: "57231f1a30e4351f4e9f4bef",
  date_time: "2013-11-02 14:09:15",
  comment:
    "Definitely! I love your work! I'm away on a trip at " +
    "the moment, but let's meet up when I get back! :)",
  user: rk,
  photo_id: photo7._id,
};

const comment8 = {
  _id: "57231f1a30e4351f4e9f4bf0",
  date_time: "2010-09-06 13:59:33",
  comment: "Made a new friend today! Well, they followed me " + "home, anyway.",
  user: rk,
  photo_id: photo8._id,
};

const comment9 = {
  _id: "57231f1a30e4351f4e9f4bf1",
  date_time: "2008-10-16 18:04:55",
  comment:
    "Wouldn't get anywhere without this beauty! " +
    "Completely built from scraps by hand, but she goes at top " +
    "speeds that'll rival any First Order piece of junk.",
  user: rk,
  photo_id: photo12._id,
};

const comment10 = {
  _id: "57231f1a30e4351f4e9f4bf2",
  date_time: "2013-12-04 13:12:00",
  comment: "What do you mean you haven't heard of second " + "breakfast?",
  user: pt,
  photo_id: photo10._id,
};

const comment11 = {
  _id: "57231f1a30e4351f4e9f4bf3",
  date_time: "2013-09-04 10:14:32",
  comment:
    "Beautiful yet cold and aloof. Loner. Does not obey, " +
    "occasionally chooses to cooperate. ",
  user: al,
  photo_id: photo11._id,
};

const comment12 = {
  _id: "57231f1a30e4351f4e9f4bf4",
  date_time: "2016-01-04 2:00:01",
  comment: "Which one are you?",
  user: al,
  photo_id: photo9._id,
};

const comment13 = {
  _id: "57231f1a30e4351f4e9f4bf5",
  date_time: "2016-01-04 2:04:01",
  comment: "The tall one.",
  user: pt,
  photo_id: photo9._id,
};

const comments = [
  comment1,
  comment2,
  comment3,
  comment4,
  comment5,
  comment6,
  comment7,
  comment8,
  comment9,
  comment10,
  comment11,
  comment12,
  comment13,
];

comments.forEach(function (comment) {
  const photo = photos.filter(function (photo) {
    return photo._id === comment.photo_id;
  })[0]; // Only one match. Return the content of the match inside the array

  if (!photo.comments) {
    photo.comments = [];
  }
  photo.comments.push(comment);
});

const userListModel = function () {
  return users;
};

const userModel = function (userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === userId) {
      return users[i];
    }
  }
  return null;
};

const photoOfUserModel = function (userId) {
  return photos.filter(function (photo) {
    return photo.user_id === userId;
  });
};

const schemaModel = function () {
  return schemaInfo;
};

const models = {
  userListModel: userListModel,
  userModel: userModel,
  photoOfUserModel: photoOfUserModel,
  schemaInfo: schemaModel,
};

module.exports = models;