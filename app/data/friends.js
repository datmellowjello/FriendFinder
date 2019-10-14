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
        name: "Snoop",
        age: "40",
        picture:"https://i.pinimg.com/originals/d8/6a/5d/d86a5d727f64dc53f829724ac8c6dca4.jpg",
        stats: [1,3,4,5,3,2,1,4,2,4,5,1,3,5]
    },{
        name: "Michael",
        age: "40",
        picture:'http://cdn3.whatculture.com/images/2018/11/e46c3d8de0c01966-600x338.jpg',
        stats: [5,1,5,1,1,5,5,1,5,5,1,1,1,5]
    },{
        name: "Dwight",
        age: "34",
        picture:'https://i.imgur.com/5wnc1T9.jpg',
        stats: [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    },{
        name: "Dwigt",
        age: "<a href='https://www.youtube.com/watch?v=-FoKU54ITuI'>Video</a>",
        picture:'https://i.redd.it/wylt103jueh11.jpg',
        stats: [5,5,5,5,5,5,5,5,5,5,5,5,5,5]
    },{
        name: "Stanley",
        age: "45",
        picture:'https://wsbt.com/resources/media/a635a1b6-4cc4-425b-b686-67fa860f9ed8-large16x9_stanleyhudsonNBC.PNG?1550090897080',
        stats: [3,2,4,5,1,3,5,1,2,4,2,5,1,2]
    },{
        name: "Pam",
        age: "34",
        picture:'https://imgix.bustle.com/uploads/image/2019/5/28/44774e68-1522-49ec-87c8-6c966a499b8c-pamtheoffice.png?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70',
        stats: [3,3,3,3,3,3,3,3,3,3,3,3,3,3]
    },{
        name: "Jim",
        age: "34",
        picture:'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/tomclancy-jimryan-mashup-700x362.jpg',
        stats: [2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    },{ 
    name: 'Jared',
    age: '23',
    picture:'https://miro.medium.com/fit/c/256/256/1*fz8ugIyrp4UB-ZRr0QqmpQ@2x.jpeg',
    stats: [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    }
]

module.exports = friends