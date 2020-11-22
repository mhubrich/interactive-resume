var config = {
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    documentTitle: 'Resume - Maryam Mirzakhani',
    title: 'From being a Math Olympiad to winning the Fields Medal',
    subtitle: 'The amazing journey of Maryam Mirzakhani',
    // byline: 'Maryam Mirzakhani',
    footer: "Citation: <a href='https://en.wikipedia.org/wiki/Maryam_Mirzakhani'>Wikipedia</a>",
    chapters: [
        {
            id: 'chapter-1',
            title: '1999: Bachelor of Science in Mathematics',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Ibn_Sina_Tower.JPG',
            description: 'At the Sharif University of Technology in Tehran, Iran.',
            width: 'small',
            location: {
                center: [51.35143440063058, 35.70359669133393],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            title: '2004: PhD at Harvard University',
            description: '<p>Thesis: <i>Simple geodesics on hyperbolic surfaces and the volume of the moduli space of curves</i>.</p><p>She earned a PhD in 2004 from Harvard University, where she worked under the supervision of the Fields Medalist Curtis T. McMullen. At Harvard she is said to have been "distinguished by ... determination and relentless questioning".</p>',
            width: 'medium',
            location: {
              center: [-71.11811, 42.37376],
              zoom: 16.00,
              pitch: 45.00,
              bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            title: '2014: Fields Medal',
            image: [{path: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/FieldsMedalFront.jpg', desc: 'The obverse of the Fields Medal'}, {path: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Four_Fields_medallists_plus_epsilon.jpg', desc: 'Four Fields medallists at the ICM 2014 in Seoul'}],
            description: 'Mirzakhani was awarded the Fields Medal in 2014 for "her outstanding contributions to the dynamics and geometry of Riemann surfaces and their moduli spaces".',
            width: 'large',
            location: {
              center: [126.97570, 37.56505],
              zoom: 10.0,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
