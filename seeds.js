var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://cdn.pixabay.com/photo/2017/08/04/20/04/camping-2581242__340.jpg",
        description: "Lorem ipsum dolor amet pop-up tattooed flannel drinking vinegar, fam godard ethical tousled roof party. Hexagon ugh four loko fashion axe chartreuse, quinoa mlkshk. Next level blue bottle venmo salvia activated charcoal vape biodiesel tumeric, unicorn four loko tilde. Chicharrones hexagon 90's pickled pug, helvetica direct trade VHS small batch. 3 wolf moon retro venmo vape wayfarers, activated charcoal kickstarter meggings hella paleo church-key slow-carb. Squid kickstarter brooklyn tumeric heirloom sartorial." 
    },    
    {
        name: "Desert Mesa", 
        image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg",
        description: "Lorem ipsum dolor amet pop-up tattooed flannel drinking vinegar, fam godard ethical tousled roof party. Hexagon ugh four loko fashion axe chartreuse, quinoa mlkshk. Next level blue bottle venmo salvia activated charcoal vape biodiesel tumeric, unicorn four loko tilde. Chicharrones hexagon 90's pickled pug, helvetica direct trade VHS small batch. 3 wolf moon retro venmo vape wayfarers, activated charcoal kickstarter meggings hella paleo church-key slow-carb. Squid kickstarter brooklyn tumeric heirloom sartorial." 
    },    
    {
        name: "Canyon Floor", 
        image: "https://cdn.pixabay.com/photo/2015/11/07/11/39/camping-1031360__340.jpg",
        description: "Lorem ipsum dolor amet pop-up tattooed flannel drinking vinegar, fam godard ethical tousled roof party. Hexagon ugh four loko fashion axe chartreuse, quinoa mlkshk. Next level blue bottle venmo salvia activated charcoal vape biodiesel tumeric, unicorn four loko tilde. Chicharrones hexagon 90's pickled pug, helvetica direct trade VHS small batch. 3 wolf moon retro venmo vape wayfarers, activated charcoal kickstarter meggings hella paleo church-key slow-carb. Squid kickstarter brooklyn tumeric heirloom sartorial." 
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                }
                else {
                    console.log("added a campground!");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err)
                            }
                            else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment!");
                            }
                        });
                }
            });
        });
    });
    
    //add a few comments
}

module.exports = seedDB;