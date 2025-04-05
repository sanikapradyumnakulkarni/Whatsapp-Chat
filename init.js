const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main().then(()=>{
    console.log("Connection successful");
})
.catch(err => console.log(err));
async function main()
{
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allchats=[
    {
        from:"Nitu",
        to:"Rahul",
        msg:"Please send me your cs notes",
        created_at: new Date(),
    },
    {
        from:"Pradnya",
        to:"Pratik",
        msg:"Please send me your CN notes",
        created_at: new Date(),
    },
    {
        from:"Pratiksha",
        to:"Sanika",
        msg:"Congratulations,for your first placement",
        created_at: new Date(),
    },
]
Chat.insertMany(allchats);
