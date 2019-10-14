// // ===============================================================================
// // DATA
// // Below data will hold all of the reserved tables.
// // Initially we just set it equal to a "dummy" customer.
// // But you could have it be an empty array as well.
// // ===============================================================================

// var friends = [
//     {
//         name:"Ahmed",
//         photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//         scores:[
//             5,
//             1,
//             4,
//             4,
//             5,
//             1,
//             2,
//             5,
//             4,
//             1
//           ]
//       },
//   ];
  
//   // Note how we export the array. This makes it accessible to other files using require.
//   module.exports = friends;
  var friends = [
    {
        name: "Peter",
        age: "7",
        picture:"https://i.imgur.com/oyE7hBY.jpg",
        stats: [5,3,6,5,4,2,5,3,2,1,5,2,2,4]
    },{
        name: "Mountain",
        age: "51",
        picture:"https://upload.wikimedia.org/wikipedia/en/d/d8/Gregor_Clegane-The_Mountain-Haf%C3%BE%C3%B3r_J%C3%BAl%C3%ADus_Bj%C3%B6rnsson.jpg",
        stats: [5,3,4,2,5,5,1,2,3,4,5,2,3,5]
    },{
        name: "Joe",
        age: "40",
        picture:"https://m.media-amazon.com/images/M/MV5BMjEyMzEyNTY2MF5BMl5BanBnXkFtZTgwODcwNDk2NjE@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
        stats: [1,3,4,5,3,2,1,4,2,4,5,1,3,5]
    },{
        name: "Shaq",
        age: "50",
        picture:'https://qph.fs.quoracdn.net/main-qimg-38570d200bb13e1827f78c918d9db92d',
        stats: [5,1,5,1,1,5,5,1,5,5,1,1,1,5]
    },{
        name: "Woody",
        age: "34",
        picture:'data:image/jpeg;base64,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',
        stats: [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    },{
        name: "Will",
        age: "20",
        picture:'https://i.pinimg.com/originals/aa/19/4c/aa194ca56eee7fd834bca15ab57a1916.jpg',
        stats: [5,5,5,5,5,5,5,5,5,5,5,5,5,5]
    },{
        name: "Danny",
        age: "45",
        picture:'https://m.media-amazon.com/images/M/MV5BMTQwOTU0ODQ4NF5BMl5BanBnXkFtZTgwODA1NDEzMjE@._V1_UY268_CR87,0,182,268_AL_.jpg',
        stats: [3,2,4,5,1,3,5,1,2,4,2,5,1,2]
    },{
        name: "Sanders",
        age: "102",
        picture:'https://ewedit.files.wordpress.com/2018/01/gettyimages-72431338.jpg?w=768',
        stats: [3,3,3,3,3,3,3,3,3,3,3,3,3,3]
    },{
        name: "Mr.Ross",
        age: "34",
        picture:'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Bob_at_Easel.jpg/220px-Bob_at_Easel.jpg',
        stats: [2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    }
]

module.exports = friends