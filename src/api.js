const getInitialResults =  (startDate, endDate, adults, city, prop) => {
    const months =  ["Jan", "Feb", "March", 
                    "April", "May", "June", 
                    "Jul", "Aug", "Sept",
                    "Oct", "Nov", "Dec" ,    
                    ];

    // let date = new Date("2017-01-26");
    // console.log(date)

    const startMonth = months[new Date(startDate).getMonth()];
    const startDay = new Date(startDate).getDate();
    const start = startDay + "-" + startMonth;


    const endMonth = months[new Date(endDate).getMonth()];
    const endDay = new Date(endDate).getDate();
    const end = endDay + "-" + endMonth;

   return  fetch("http://localhost:3000/hotel")
            .then(response => response.json())
            .then(json => {
                return json.filter(hotel => {
                        return  hotel.checkIn === start &&
                                hotel.checkOut === end &&
                                hotel.area === city &&
                                (hotel.title.toLowerCase().includes(prop?.toLowerCase()) || !prop)
                }) .map(hotel =>{
                        hotel.price = hotel.price * adults;
                        return hotel
                    })
            })
}









export {getInitialResults}