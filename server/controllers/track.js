const { AfterShip } = require('aftership');

const aftership = new AfterShip(process.env.AFTERSHIP_API_KEY);



exports.trackId = (req, res) => {



    //console.log(req.body);


    //Destructuring req.body

    const { trackingNumber } = req.body;


    aftership.tracking
        .getTracking({

            id: trackingNumber,

        })

        .then(

            (result) => {

                console.log(result);

                return (res.json({

                    success: true,                    // to handle the success message in the react client side. 

                    description: result

                }));

            })



        .catch(

            (e) => {
                
                
                console.log(e);


                return (res.json({

                    success: false                  // to handle any error 

                }));


             }
             
             
             );








};


