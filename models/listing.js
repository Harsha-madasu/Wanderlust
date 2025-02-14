const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title: {
        type:String,
        required:true,
    },
    description :String,
    image: {
        type:String,
    },
    price: Number,
    location:String,
    country:String,
    reviews: [
        {
            type:Schema.Types.ObjectId,
            ref:"review",
        },
    ],
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;