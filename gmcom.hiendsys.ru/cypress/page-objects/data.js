export let data = {
    firstName: 'test' + chance.first(),
    lastName: 'test' + chance.last(),
    email: 'test' + chance.email({domain: "example.com"}),
    phone: chance.phone({ formatted: false }),
    company: 'test' + chance.company(),
    companySize: 'Enterprise',
    country: 'Belarus',
    jobTitle: 'test' + chance.profession(),
    message: chance.paragraph()
}

export let testingData = [{
    description: "Max values",
    fieldData: {
        firstName: chance.first() + chance.string({ length: 255 }),
        lastName: chance.last() + chance.string({ length: 255 }),
        email: chance.email({ length: 255 }),
        phone: chance.natural({ min: 1000000000000, max: 9999999999999 }),
        company: chance.company() + chance.string({ length: 255 }),
        companySize: 'Enterprise',
        jobTitle: chance.profession() + chance.string({ length: 255 }),
        message: chance.paragraph({ sentences: 5 })
    }
},
{
    description: "Min values",
    fieldData: {
        firstName: chance.string({
            length: 1
        }),
        lastName: chance.string({
            length: 1
        }),
        email: '1@1.1',
        phone: chance.natural({
            min: 1,
            max: 9
        }),
        company: chance.string({
            length: 1
        }),
        companySize: 'Enterprise',
        jobTitle: chance.string({
            length: 1
        }),
        message: chance.string({
            length: 1
        })
    }
},
{
    description: "Real values",
    fieldData: {
        firstName: chance.first(),
        lastName: chance.last(),
        email: chance.email(),
        phone: chance.phone({
            formatted: false
        }),
        company: chance.company(),
        companySize: 'Enterprise',
        jobTitle: chance.profession(),
        message: chance.paragraph()
    }
}
];
