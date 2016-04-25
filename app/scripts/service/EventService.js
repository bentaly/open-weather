(function() {

    'use strict';

    angular.module('bh.services')
        .factory('EventService', [function() {

            var events = [
                    {
                        title: "Churchill War Rooms Fundraiser",
                        descPara: [
                        	"<b>Join us beneath Westminster, in London's most secret and historic setting for a night of fine wine, sumptuous food and fundraising – to help Build Heroes. The Churchill War Rooms is where Winston Churchill and his War Cabinet led Britain and her allies to victory during the World War II.</b>",
							"Our guests will enjoy a champagne reception, within the very corridors that Churchill walked, whilst peering into the War Cabinet Room left as it was when he last met there, and marvel at the complex Map Rooms, abandoned in 1945 and left frozen in time.",
							"Dinner is to be hosted in the iconic Harmsworth Room,  incorporating the 1940’s electric generator wall featuring L.E.D’s, switches and dials, used to cut London’s electricity supply in the Blitz.",
							"Deep thanks to our special guests, Sir Nicholas Soames, Winston Churchill’s Grandson who has kindly agreed to be our after dinner speaker.",
							"Against a backdrop of historical material, this once secret underground war time headquarters is an ideal place for our charity <b><a href=\'/patrons\'>to launch our Patron and Ambassador programme</a></b>."
                        ],
                        date: "21st July 2016",
                        time: "18.45 - Midnight",
                        location: "Churchill War Rooms, Clive Steps, King Charles St, London SW1A 2AQ",
                        furtherInfo: "To enquire about the event or purchase a table, please email us.",
                        contact: "info@buildingheroes.org.uk",
                        img: "/images/warrooms.jpg"
                    }//,
                    // {
                    //     title: "Fundraiser Two",
                    //     descPara: [
                    //         "Otatur re cus sin pre quame venissim rehent. Dita dio inciass inverum eum doluptur, acidit hit, expe am ento voluptatet eati incius audicab orporepta doluptas quam, quo mo que es maximinciet et aut dollaut volorer atquate ctotati nverumendam etur sed et unt volupta ectorio con peditatqui volupta volut liat ra con resequam, consequo velit quibus acerum nime eaquamus veles dolore omni archillut el maio estiasperum volupta quidunt porum ex et facerrum et aut utem aute liquisquam quisit, utem ium earument, suntior itatioris evelit aperunt.",
                    //         "Aquasinum recus alicium harum aperaep elenis ullam fugia volesci llaute simus derspienim aut acepeli genimil liquis si con con parum re vendae seribus tiorehe nduntur mi, omnia ius, offictis doloresequid evenit ipsanduntur, id quiderit placestotam quae is alit ut officaborit fugit faccuptiunt a qui dusame con endae dicienis magnate debiscilla et untio quat quo blamet, sunt vendi doluptatem asperib usameni."
                    //     ],
                    //     date: "6th January 2017",
                    //     time: "18.00 - 23.00",
                    //     location: "Cinnamon Club",
                    //     furtherInfo: "Dress Code: Black Tie",
                    //     contact: "info@buildingheroes.org.uk",
                    //     img: "http://placekitten.com/300/200"
                    // },
                    // {
                    //     title: "Fundraiser Three",
                    //     descPara: [
                    //         "Otatur re cus sin pre quame venissim rehent. Dita dio inciass inverum eum doluptur, acidit hit, expe am ento voluptatet eati incius audicab orporepta doluptas quam, quo mo que es maximinciet et aut dollaut volorer atquate ctotati nverumendam etur sed et unt volupta ectorio con peditatqui volupta volut liat ra con resequam, consequo velit quibus acerum nime eaquamus veles dolore omni archillut el maio estiasperum volupta quidunt porum ex et facerrum et aut utem aute liquisquam quisit, utem ium earument, suntior itatioris evelit aperunt.",
                    //         "Aquasinum recus alicium harum aperaep elenis ullam fugia volesci llaute simus derspienim aut acepeli genimil liquis si con con parum re vendae seribus tiorehe nduntur mi, omnia ius, offictis doloresequid evenit ipsanduntur, id quiderit placestotam quae is alit ut officaborit fugit faccuptiunt a qui dusame con endae dicienis magnate debiscilla et untio quat quo blamet, sunt vendi doluptatem asperib usameni."
                    //     ],
                    //     date: "6th January 2017",
                    //     time: "18.00 - 23.00",
                    //     location: "Cinnamon Club",
                    //     furtherInfo: "Dress Code: Black Tie",
                    //     contact: "info@buildingheroes.org.uk",
                    //     img: "http://placekitten.com/300/200"
                    // }
                ];

            return {
                events: events
            };
        }
    ]);
})();