(function() {

    'use strict';

    angular.module('bh.services')
        .factory('PatronService', [function() {

            var patronTypes = [
                    {
                        img: 'images/platpatron.png',
                        packageList: [
                            "Our Platinum Patron package will pay for the training and accommodation for an entire cohort of veterans",
                            "Use of Building Heroes’ Platinum Patron badge on marketing",
                            "Listed on Website as a Platinum Patron",
                            "Table of ten at the Building Heroes Christmas Ball",
                            "Recipient of E-Communications"
                        ],    
                        price: '30,000'
                    },
                    {
                        img: 'images/patron.png',
                        packageList: [
                            "Our Patron package will pay for the training and accommodation of two veterans",
                            "Use of Building Heroes’ Patron badge on marketing",
                            "Listed on Website as a Patron",
                            "Table of ten at the Building Heroes Christmas Ball",
                            "Recipient of E-Communications"
                        ],
                        price: '7,500'
                    },
                    {
                        img: 'images/goldamb.png',
                        packageList: [
                            "Our Gold Ambassador package will pay for the training and accommodation of one veteran",
                            "Use of Building Heroes’ Gold Ambassador badge on marketing ",
                            "Listed on Website as a Gold Ambassador",
                            "Recipient of E-Communications"
                        ], 
                        price: '3,750'
                    },
                    {
                        img: 'images/silveramb.png',
                        packageList: [
                            "Our Silver Ambassador package will pay for the training of one veteran",
                            "Use of Building Heroes’ Silver Ambassador badge on marketing ",
                            "Listed on Website as a Silver Ambassador",
                            "Recipient of E-Communications"
                        ],    
                        price: '2,500'
                    },
                    {
                        img: 'images/bronzeamb.png',
                        packageList: [
                            "Our Bronze Ambassador package will pay for the accommodation of one veteran",
                            "Use of Building Heroes’ Bronze Ambassador badge on marketing ",
                            "Listed on Website as a Bronze Ambassador",
                            "Recipient of E-Communications"
                        ],    
                        price: '1,250'
                    }
                ];

            return {
                patronTypes: patronTypes
            };
        }
    ]);
})();