

// import task schema
const Task = require('../models/task');

// var todoList =[{
//     description:"Annual Report submission deadline",
//     category:"WORK",
//     date:"Jun 1, 2019",
// },
// {
//     description:"Annual Report submission deadline",
//     category:"WORK",
//     date:"Jun 1, 2019",
// },
// {
//     description:"Annual Report submission deadline",
//     category:"WORK",
//     date:"Jun 1, 2019",
// },
// ]

module.exports.home = function (req, res) {

    Task.find({}, function(err, taskList){
        if(err) {
            console.log("Error in fetching contacts from db");
            return;
        }

        return res.render('home', {
            title: "To Do App",
            tasks: taskList
        });
    });
    
}

// module.exports.createTask = function(req, res){
//     console.log(req.body);
//     // todoList.push({
//     //     description:req.body.description,
//     //     category:req.body.category,
//     //     date:req.body.date
//     // })
//     Task.create(req.body,function(err,newTask){
//         console.log(req.body);
//         if(err){
//             console.log('Error in creating task');
//             return;
//         }
//         return res.redirect("/");
//     })

// }

// create task function
module.exports.createTask = function(req, res){
    console.log(req.body);
    Task.create(req.body, function(err, newTask){
        if(err){
            console.log('Error in creating task');
            return;
        }
        
        return res.redirect("/");
    });
}

module.exports.deleteTask =function(req,res){
    
}