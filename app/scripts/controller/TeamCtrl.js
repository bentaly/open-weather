(function () {
    'use strict';
    angular.module('bh.controllers')
        .controller('TeamCtrl', ['$scope',
            function ($scope) {

            	$scope.greenContent = {
            		img: "/images/staff-photo.jpg",
            		copy: {
	            		title: "Team",
	            		text: "Our Building Heroes team is responsible for the day-to-day running of the Charity and is proud to help support our veterans."
					}
            	};
            
                $scope.team = [
                    {
                        name: "Brendan Williams",
                        title: "Chief Executive",
                        about: "After 25 years working at leading Global Investment Banks working in Operations and Technology and ending up as a Chief Operating Officer it was time to give something else a go. Born into a long line of specialist master bricklayers the opportunity to help start Building Heroes was too difficult to pass up. Being Chief Executive draws on all my cross disciplinary experience and brings more rewards than banking ever could. You only have to be told once that you have changed someone’s life for the better to know all the hard work is worthwhile.",
                        img: "/images/brendan.jpg"
                    },
                    {
                        name: "Alison Sleat",
                        title: "Head of Learning",
                        about: "Alison joined Building Heroes in January 2015 and initially delivered employability skills to our youth trainees, then in May took on the role of Head of Learning. Alison previously worked for a large public sector organisation as a trainer, training supervisor and quality assurance manager in Learning and Development.",
                        img: "/images/alison.jpg"
                    },
                    {
                        name: "Anna Williams",
                        title: "Office Manager",
                        about: "Anna Williams is a former local government officer who worked in the Social Services department of Westminster City Council. After bringing up her family Anna has returned to the workplace to help support the good work of Building Heroes.",
                        img: "/images/anna.jpg"
                    },
                    {
                        name: "Abbie Porter",
                        title: "Digital Marketing Assistant",
                        about: "Abbie joined the Building Heroes team in 2015, as a Digital Marketing and IT Apprentice. Having completed her apprenticeship, she has gained a City & Guilds Level 3 Diploma in Digital Marketing. Abbie’s finds her role at Building Heroes very rewarding, being able to see first-hand the help and guidance that Building Heroes offers its veterans is very inspirational.",
                        img: "/images/abbie.jpg"
                    },
                    {
                        name: "Debbie Porter",
                        title: "Building Heroes Trustee",
                        about: "Debbie Porter was a troop leader at Bristol Officer Training Corps whilst at University and from there joined the Army as a Movement Control Officer in the Royal Corps of Transport. During her Army career she served in UK, Germany, Falklands and Cyprus. Since leaving she has worked with Nissan and then PricewaterhouseCoopers for 22 years. This year she decided to take early retirement.",
                        img: "/images/debbie.jpg"
                    },
                    {
                        name: "Pete Bradbury",
                        title: "Building Heroes Trustees Chairman",
                        about: "The District Councillor for Cuckfield and County Councillor for Cuckfield and Lucastes having first been elected in 2007. Pete is current Chairman of the Central Mid Sussex County Local Committee, a Governor at Warden Park School and a Trustee of Sussex Learning Trust. Pete is also the former Chairman of Ansty & Staplefield Parish Council and is the Chairman of Staplefield Cricket Club having lived in Sussex since 1977. Pete previously lead a successful business career having worked for several major corporations including Toshiba, GE and Ericsson.",
                        img: "/images/pete.jpg"
                    },
                    {
                        name: "Sean Reynolds CBE",
                        title: "Building Heroes Trustee",
                        about: "A former special forces helicopter pilot, Sean is now on secondment to Marshall Aerospace and Defence Group leading its business aviation services operation. Before this Sean lead a significant part of the Royal Air Force working as a director at board level.",                         
                        img: "/images/sean.jpg"
                    },
                    {
                        name: "Lin Stockwell",
                        title: "Building Heroes Ambassador",
                        about: "Lin is a Councillor in Mid Sussex District Council representing High Weald Ward. She is currently a member of the scrutiny committees for Audit, Leader & Service Delivery and Planning & Economic Development. She also represents the District Council as Champion for the Armed Forces Covenant. Additionally, she has recently become a Governor at Handcross Primary School. Before retiring in 2012 Lin worked for Lloyds banking Group, initially as a Customer Service Manager, then in Credit Risk Finance as an analyst and business support manager.",
                        img: "/images/lin.png"
                    },
                ];
            }]);
})();
