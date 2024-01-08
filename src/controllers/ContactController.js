const Contact = require("../models/ContactModel");



// Create
exports.createContact = (req, res) => {
    const reqBody = req.body;
    console.log(reqBody);
    Contact.create(reqBody)
        .then((data) => {
            res.send({
                success: true,
                data,
            });
        })
        .catch((err) => {
            res.send({
                success: false,
                message: err.message,
            });
            console.error(err);
        });
};


//Read
exports.readContact=(req,res)=>{
    Contact.find({})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
// exports.readContact = (req, res) => {
//     const query = {};
//     Contact.find(query)
//         .then((data) => {
//             res.send({
//                 success: true,
//                 data,
//             });
//         })
//         .catch((err) => {
//             res.send({
//                 success: false,
//                 message: err.message,
//             });
//             console.error(err);
//         });
// };

// Contacts Read by ID

exports.readContactById=(req,res)=>{
    const id = req.params.id
    Contact.find({_id:id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// exports.readContactById = async(req,res)=>{
//     try {
//         const id = req.params.id;
//         const contact = await Contact.find({_id:id})
//         if(!contact){
//             res.status(404).json({
//                 success:false,
//                 message:'Contact Not Found!'
//             })
//         }
//         res.status(200).json({
//             success:true,
//             contact
//         })
//     } catch (error) {
//         res.status(500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }



//Update contacts

exports.updateContact=(req,res)=>{
    const id = req.params.id
    Contact.findByIdAndUpdate({_id:id},{
        ContactName: req.body.ContactName,
        ContactEmail: req.body.ContactEmail,
        Phone: req.body.Phone,
        Address: req.body.Address,
        Pic: req.body.Pic
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
}


// exports.updateContact = (req,res)=>{
//     const reqBody = req.body;
//     const id = req.params.id
//     const query = {_id:id}
//     Contact.updateOne(query,reqBody)
//         .then((data) => {
//             res.send({
//                 success: true,
//                 data,
//             });
//         })
//         .catch((err) => {
//             res.send({
//                 success: false,
//                 message: err.message,
//             });
//             console.error(err);
//         });
// };



//Delete
exports.deleteContact = (req,res)=>{
    const id = req.params.id
    const query = {_id:id}
    Contact.deleteOne(query)
        .then((data) => {
            res.send({
                success: true,
                data,
            });
        })
        .catch((err) => {
            res.send({
                success: false,
                message: err.message,
            });
            console.error(err);
        });
};


