
 
const locations = [
    
    {date: Date.now(), id: 0, name: 'Hotel Indigo' ,    category: 'Hotel',        coords:{lat:32.0872919, lng:34.8027026}, address: 'Aholiav Street No 5, Ramat Gan' , description: 'Colorful rooms & suites in a hip, art deco inspired hotel with a trendy restaurant & a rooftop pool'},
    {date: Date.now(), id: 1, name: 'Shenkar College' , category: 'Education',    coords:{lat:32.0900006, lng:34.8030459}, address: 'Anne Frank St 12, Ramat Gan' ,    description: 'Shenkar College of Engineering, Design and Art is a public college in Ramat Gan, Israel. Shenkar serves the Israeli industry by providing academic qualification and R&D services for modern industries'},
    {date: Date.now(), id: 3, name: 'MisterBit' ,       category: 'Education',    coords:{lat:32.0878464, lng:34.803121},  address: 'Habonim 4, Ramat Gan',            description: 'MisterBit specializes in tech training, development, and consulting, using advanced web technologies'},
    {date: Date.now(), id: 4, name: 'Arcaffe' ,         category: 'Food',         coords:{lat:32.0840643, lng:34.803148},  address: 'Abba Hillel Silver Rd 3',         description: 'Arcaffe is a chain of cafes in Israel with 29 outlets across the country. The chain was established in 1995 with the aim of bringing Italian espresso bars to Israel'},
   
]

function fetchLocations(){
return locations;

}


export default {
    fetchLocations
}
