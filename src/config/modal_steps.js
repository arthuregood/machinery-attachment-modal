const modal_steps = [
    {  
        step: 0,
        title: 'What type of machine this attachment will be installed on?',
        answers: ['Excavator', 'Skid Steer'],
        values: ['Excavator', 'Skid Steer'],
        descriptions: [],
        action: 'next',
    },
    {
        step: 1,
        title1: 'What is the weight category of the Excavator?',
        title2: 'What is the weight category of the Skid Steer?',
        answers: ['Mini - Standon', 'Medium', 'Large'],
        values: ['Mini', 'Medium', 'Large'],
        descriptions: ['less than x lbs', 'between x lbs and y lbs', 'between x lbs and y lbs'],
        action: 'next',
    },
    {
        step: 2,
        title1: 'What is the Hydraulic Flow of your Excavator in GPM (Gallons per Minute)?',
        title2: 'What is the Hydraulic Flow of your Skid Steer in GPM (Gallons per Minute)?',
        answers: ['Standard Flow', 'High Flow'],
        values: ['Standard', 'High'],
        descriptions: ['17-25 GPM', '30-45 GPM'],
        action: 'next',
    },
    {
        step: 3,
        title: 'What is the length of the material you want to split?',
        answers: ['Short', 'Medium', 'Long'],
        values: ['Short', 'Medium', 'Long'],
        descriptions: ['ex: small trunks...', 'ex: small trees', 'ex: large trees'],
        action: 'finish',
    },
];

export default modal_steps;