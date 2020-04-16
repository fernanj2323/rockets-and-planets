const rocketCTR  = {};
const Rocket = require('../models/rocket');


rocketCTR.getRockets = async (req, res, next) => {
 console.log('11*********')
}


rocketCTR.putRocket = async (req, res, next) => {
    console.log('1**********')
   const rocket = await Rocket.findByIdAndUpdate(req.body.id, {$set: req.body}, {new: true})
    res.json({status: 'updated',    rocket: rocket})


};



rocketCTR.postRocket = async (req, res, next) => {
    console.log('1**********')
    const rocketInfo = new Rocket
  //  const list = await Rocket.find();
    Rocket.find().exec((err,rockets) => {
        if(err){
        return res.json({'success':false,'message':'Some Error'});
        }
    
        return res.json({'success':true,'message':'Todos fetched successfully',rockets});
      });
cket (req.body)
    await rocketInfo.save((err, result) => {
        if (err) {
            res.status(500).send({status: 'Something wrong'});
        } else {
            if (!result) {
                res.status(404).send({msg: 'Error 404', status: 404});
            } else {
                res.status(200).send({msg: 'Rocket created', status: 200});
    }}})


}


module.exports = rocketCTR;