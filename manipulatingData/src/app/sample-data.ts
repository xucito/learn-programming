export const sampleArray = [
    {
        name: 'nicole',
        age: 23
    },
    {
        name: 'tony',
        age: 23
    },
    {
        name: 'cindy',
        age: 21
    }
];

export const user = {
    email: 'test@email.com',
    username: 'Jimmy',
    password: 'P@ssw0rd123!',
    emergencyContacts: [
        {
            'name': 'mum',
            'phonenumber': 1231231
        },
        {
            'name': 'dad',
            'phonenumber': 5125
        }
    ]
};

export const users = [
    {
        email: 'test@email.com',
        username: 'Jimmy',
        password: 'P@ssw0rd123!',
        emergencyContacts: [
            {
                'name': 'mum',
                'phonenumber': 1231231
            },
            {
                'name': 'dad',
                'phonenumber': 5125
            }
        ]
    },
    {
        email: 'test2@email.com',
        username: 'Tony',
        password: 'P@ssw0rd123!',
        emergencyContacts: [
            {
                'name': 'nicole',
                'phonenumber': 111111
            }
        ]
    }
];

export class User {
    email: string;
    username: string;
    password: string;
    emergencyContacts: EmergencyContact[];
}

export class EmergencyContact {
    name: string;
    phoneNumber: Number;
}
