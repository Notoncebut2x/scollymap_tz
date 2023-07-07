var config = {
    style: 'mapbox://styles/rorypnealon/cljn5bmtw00ly01p18e2jfw03',
    accessToken: 'pk.eyJ1Ijoicm9yeXBuZWFsb24iLCJhIjoiY2xqbXd1b20wMTFmZjNxbXVpNDBycHZheCJ9.HXMynbhf1yv4AAEmbkWohQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Ground Truthing Crop Types in Tanzania',
    subtitle: 'Working with YouthMappers and USDA/FAS to Train YouthMappers and Build Algorithms',
    byline: 'By: Me, Rory!',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            // title: 'YouthMappers',
            image: './images/ym_banner.png',
            description: 'Global Network of university based open mapping club whose mission is to cultivate a generation of young leaders to create resilient communities and  to define their world by mapping it.  The program has chapters in 370+ institutions in 70+ countries that have contributed 20 + million features to OpenStreetMap, an open and free geospatial database. ',
            location: {
                center: [19.37686, -.25],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            title: 'Background',
            image: './images/group_shot.jpg',
            description: 'The U.S. Department of Agriculture/Foreign Agricultural Service and the U.S. Agency for International Development funded a pilot activity with YouthMappers to: <ol> <li>Build capacity among youth to collect and manage agricultural data.</li> <li> Develop an approach with YouthMappers to collect crowd-sourced, scalable, standardized, and distributed ground-truth data on crops...for AI models.</li>  <li> Connect youth with professionals in geospatial analysis and agriculture to support their career development.</li> </ol>',
            location: {
                center: [19.37686, -.25],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            title: 'Background',
            description: 'The USDA/FAS links U.S. agriculture to the world to enhance export opportunities and global food security. They do this by focusing on the following: <ul><li>Trade Policy <img src="./images/check.gif" alt="check" style="width:42px;height:42px;"></li><li>Market Development and Export Assistance<img src="./images/check.gif" alt="check" style="width:42px;height:42px;"></img></li><li>Food Security<img src="./images/check.gif" alt="check" style="width:42px;height:42px;"></img></li></ul>',
            location: {
                center: [19.37686, -.25],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            title: 'Why Pilot with YouthMappers?',
            image: './images/landcruiser.jpeg',
            description: '<ul><li>Ag. extension agents are the gold standard but want to see if YouthMappers could extend the extension agents</li><li>YouthMappers is a prebuilt network of montivated tech. adept students with local knowledge</li><li>This concept could be easily scaled to other regions with YouthMappers chapters</li><li>Would produce open data that could be easily leveraged by government, NGOs and academic institutions</li></ul>',
            location: {
                center: [19.37686, -.25],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            title: 'Why Visit Small Remote Muddy Farms?',
            image: './images/muddy_fields.png',
            description: '<ul><li>~ 30% of the world is employed in agriculture</li><li>800 Million + People affected by hunger in 2021</li><li>3.1 billion people could not afford a healthy diet in 2020</li><li>In the USA, AI models for estimating yields of crops like corn and soybeans are > 90% accurate</li><li>This is much lower in Africa where 60% of the population are small shareholder farmers</li><li>Why so low?</li><ul><li><i>High-quality ground truth data gaps persist across applications and use cases…</i>- agrilinks.org -</li></ul></ul>',
            location: {
                center: [19.37686, -.25],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            title: 'Project Steps',
            image: './images/map_Prez.jpeg',
            description: '<ol><li>Landscape analysis and concept development</li><li>Remote training of Tanzanian YouthMappers</li><li>A "Train the Trainers" workshop and guided fieldwork</li><li>YouthMappers trainers train their chapters</li><li>Regional fieldwork</li><li>Data Cleanup, analysis and report writing</li></ol>',

            location: {
                center: [19.37686, -.25],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },          
        {
            id: 'NMIST-1',
            alignment: 'left',
            hidden: false,
            title: 'Training the Trainers',
            image: './images/tot.jpeg',
            description: '',
            location: {
                center: [36.79127, -3.40164],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nmist',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'nmist',
                    opacity: 1
                }
            ]
        },
        {
            id: 'NMIST-2',
            alignment: 'left',
            hidden: false,
            title: 'Training the Trainers: Ag and Crop Basics',
            image: './images/corn_stages.jpeg',
            description: '',
            location: {
                center: [36.79127, -3.40164],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nmist',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'nmist',
                    opacity: 1
                }
            ]
        },
        {
            id: 'NMIST-3',
            alignment: 'left',
            hidden: false,
            title: 'Training the Trainers: Survey Tools',
            image: './images/survey_tool.jpeg',
            description: '',
            location: {
                center: [36.79127, -3.40164],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nmist',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'nmist',
                    opacity: 1
                }
            ]
        },
        {
            id: 'NMIST-4',
            alignment: 'left',
            hidden: false,
            title: 'Training the Trainers: Community Mapping and Engagement',
            image: './images/community_mapping.jpeg',
            description: '',
            location: {
                center: [36.79127, -3.40164],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nmist',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'nmist',
                    opacity: 1
                }
            ]
        },
        {
            id: 'NMIST-5',
            alignment: 'left',
            hidden: false,
            title: 'Training the Trainers: Career Panel',
            image: './images/pro_pannel.jpeg',
            description: '<table><tr><td>Alfred Kondowe  </td><td>  Wiblert Mdete  </td><td>  Somya Banwari  </td><td>  Monica Timbuka  </td><td>  Johanes Petro  </td></tr><tr><td>(TMA)</td><td>(AgroMovil)</td><td>(FAS)</td><td>(IRDP)</td><td>(OMDTZ)</td></tr></table>',
            location: {
                center: [36.79127, -3.40164],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nmist',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'nmist',
                    opacity: 0
                }
            ]
        },
        {
            id: 'survey-regions',
            alignment: 'left',
            hidden: false,
            title: 'Target Regions',
            description: 'The team chose three regions based on USDA crop priorities, geographic variation and YouthMappers chapter locations.  The three regions selected were Muanza, Dadoma and Arusha.',
            location: {
                center:[31.00, -6.5],
                zoom: 5.65,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'survey-regions-tz',
                    opacity: .35
                }
            ],
            onChapterExit: [
                {
                    layer: 'survey-regions-tz',
                    opacity: 0
                }
            ]
        },
        {
            id: 'survey-wards',
            alignment: 'left',
            hidden: false,
            title: 'Survey Wards',
            description: 'Approvals were needed at the Ward level for surveying and here are the ones we targeted.',
            location: {
                center:[31.00, -6.5],
                zoom: 5.65,
                pitch: 0,
                bearing: 0,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'survey-wards-tz',
                    opacity: .35
                }
            ],
            onChapterExit: [
                {
                    layer: 'survey-wards-tz',
                    opacity: 0
                }
            ]
        },
        {
            id: 'survey-wards-arusha',
            alignment: 'left',
            hidden: false,
            title: 'Arusha Survey Wards',
            description: 'Twelve wards were surveyed in Arusha.',
            location: {
                center:[36, -3],
                zoom: 7.8,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'survey-wards-tz-arusha',
                    opacity: .35
                }
            ],
            onChapterExit: [
                {
                    layer: 'survey-wards-tz-arusha',
                    opacity: 0
                }
            ]
        },
        {
            id: 'survey-routes-arusha',
            alignment: 'left',
            hidden: false,
            title: 'Survey Routes: Arusha',
            description: 'Routes that the teams took to find fields for surveying',
            location: {
                center:[36, -3],
                zoom: 8.25,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'arusha-routes',
                    opacity: .85
                }
            ],
            onChapterExit: [
                {
                    layer: 'arusha-routes',
                    opacity: 0
                }
            ]
        },
        {
            id: 'crops-Arusha',
            alignment: 'left',
            hidden: false,
            title: 'Arusha Crops',
            description: '353 fields surveyed in Arusha<br><table><tr><td><img src="./images/mapbox-marker-icon-red.svg" alt="check" style="width:42px;height:42px;"></td><td>Corn</td><td><img src="./images/mapbox-marker-icon-green.svg" alt="check" style="width:42px;height:42px;"></td><td>Rice</td><td><img src="./images/mapbox-marker-icon-orange.svg" alt="check" style="width:42px;height:42px;"></td><td>Cotton</td></tr><tr><td><img src="./images/mapbox-marker-icon-pink.svg" alt="check" style="width:42px;height:42px;"></td><td>Peanuts</td><td><img src="./images/mapbox-marker-icon-purple.svg" alt="check" style="width:42px;height:42px;"></td><td>Sorghum</td><td><img src="./images/mapbox-marker-icon-gray.svg" alt="check" style="width:42px;height:42px;"></td><td>Other</td></tr></table>',
            location: {
                center:[35.8, -3.4],
                zoom: 9,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'field-survey-points',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'field-survey-points',
                    opacity: 0
                }
            ]
        },
        {
            id: 'crops-Arusha-corn',
            alignment: 'left',
            hidden: false,
            title: 'Arusha Crops: Corn',
            description: 'About 70% of the fields we survey were growing Maize/Corn.',
            location: {
                center:[35.8, -3.4],
                zoom: 9,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'field-survey-arusha-maize',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'field-survey-arusha-maize',
                    opacity: 0
                }
            ]
        },
        {
            id: 'survey-wards-dodoma',
            alignment: 'left',
            hidden: false,
            title: 'Dodoma Survey Wards',
            description: 'Forty-Eight wards were surveyed in Dodoma.',
            location: {
                center:[35.5, -6],
                zoom: 7.8,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'survey-wards-tz-dodoma',
                    opacity: .35
                }
            ],
            onChapterExit: [
                {
                    layer: 'survey-wards-tz-dodoma',
                    opacity: 0
                }
            ]
        },
        {
            id: 'crops-Dodoma',
            alignment: 'left',
            hidden: false,
            title: 'Dodoma Crops',
            description: '1680 Fields Surveyed in Dodoma<br><table><tr><td><img src="./images/mapbox-marker-icon-red.svg" alt="check" style="width:42px;height:42px;"></td><td>Corn</td><td><img src="./images/mapbox-marker-icon-green.svg" alt="check" style="width:42px;height:42px;"></td><td>Rice</td><td><img src="./images/mapbox-marker-icon-orange.svg" alt="check" style="width:42px;height:42px;"></td><td>Cotton</td></tr><tr><td><img src="./images/mapbox-marker-icon-pink.svg" alt="check" style="width:42px;height:42px;"></td><td>Peanuts</td><td><img src="./images/mapbox-marker-icon-purple.svg" alt="check" style="width:42px;height:42px;"></td><td>Sorghum</td><td><img src="./images/mapbox-marker-icon-gray.svg" alt="check" style="width:42px;height:42px;"></td><td>Other</td></tr></table>',
            location: {
                center:[35.5, -6],
                zoom: 8.25,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'field-survey-points',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'field-survey-points',
                    opacity: 0
                }
            ]
        },
        {
            id: 'crops-Dodoma-sorghum',
            alignment: 'left',
            hidden: false,
            title: 'Dodoma Crops: Sorghum',
            description: 'Dodoma saw the largest share of Sorghum with 137 fields',
            location: {
                center:[35.5, -6],
                zoom: 8.25,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'field-survey-dodoma-sorghum',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'field-survey-dodoma-sorghum',
                    opacity: 0
                }
            ]
        },
        {
            id: 'crops-Dodoma-rice',
            alignment: 'left',
            hidden: false,
            title: 'Dodoma Crops: Rice',
            description: 'As well as significant concentrations of Rice in the west neare lake Sulunga',
            location: {
                center:[35.25, -6.15],
                zoom: 9.2,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'field-survey-dodoma-rice',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'field-survey-dodoma-rice',
                    opacity: 0
                }
            ]
        },
        {
            id: 'survey-wards-Mwanza',
            alignment: 'left',
            hidden: false,
            title: 'Mwanza Survey Wards',
            description: 'Twenty-seven wards were surveyd in Mwanza.',
            location: {
                center:[33, -3],
                zoom: 7.8,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'survey-wards-tz-mwanza',
                    opacity: .35
                }
            ],
            onChapterExit: [
                {
                    layer: 'survey-wards-tz-mwanza',
                    opacity: 0
                }
            ]
        },
        {
            id: 'crops-Mwanza',
            alignment: 'left',
            hidden: false,
            title: 'Mwanza Crops',
            //image: './path/to/image/source.png',
            description: '612 Fields Surveyed in Mwanza<br><table><tr><td><img src="./images/mapbox-marker-icon-red.svg" alt="check" style="width:42px;height:42px;"></td><td>Corn</td><td><img src="./images/mapbox-marker-icon-green.svg" alt="check" style="width:42px;height:42px;"></td><td>Rice</td><td><img src="./images/mapbox-marker-icon-orange.svg" alt="check" style="width:42px;height:42px;"></td><td>Cotton</td></tr><tr><td><img src="./images/mapbox-marker-icon-pink.svg" alt="check" style="width:42px;height:42px;"></td><td>Peanuts</td><td><img src="./images/mapbox-marker-icon-purple.svg" alt="check" style="width:42px;height:42px;"></td><td>Sorghum</td><td><img src="./images/mapbox-marker-icon-gray.svg" alt="check" style="width:42px;height:42px;"></td><td>Other</td></tr></table>',
            location: {
                center:[33, -2.75],
                zoom: 9.25,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'field-survey-points',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'field-survey-points',
                    opacity: 0
                }
            ]
        },
        {
            id: 'crops-Mwanza-Rice',
            alignment: 'left',
            hidden: false,
            title: 'Mwanza Crops: Rice',
            //image: './path/to/image/source.png',
            description: '225 rice fields in Mwanza',
            location: {
                center:[33, -2.75],
                zoom: 9.25,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'field-survey-mwanza-rice',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'field-survey-mwanza-rice',
                    opacity: 0
                }
            ]
        },
        {
            id: 'crops-Mwanza-cotton',
            alignment: 'left',
            hidden: false,
            title: 'Mwanza Crops: Cotton',
            description: '...and high concentrations of Cotton in the west.',
            location: {
                center:[33.95, -2.48],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'field-survey-mwanza-cotton',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'field-survey-mwanza-cotton',
                    opacity: 0
                }
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            title: 'Next Steps',
            description: '<ul><li>Clean and analyze the data</li><li>Host final remote training</li><li>Write final report and field guide</li></ul>',
            location: {
                center: [19.37686, -.25],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [            ],
            onChapterExit: []

        }
            ]
};
