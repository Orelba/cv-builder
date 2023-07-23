import { v4 as uuidv4 } from 'uuid'

export const cvExample = {
  name: 'Michael Andrews',
  role: 'Creative Director',
  avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  profileDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero consequatur fugit optio veniam alias excepturi quidem eaque quia reiciendis? Inventore quibusdam repellendus, ab repudiandae fugit optio maxime voluptate quidem explicabo.',
  workExperience: [
    {
      id: uuidv4(),
      role: 'Senior Manager',
      timePeriod: 'JAN 2016 - DEC 2019',
      companyName: 'LEO Company',
      companyLocation: 'Paris - France',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vitae natus non ducimus rem laudantium fuga architecto, modi ad provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, totam?'
    },
    {
      id: uuidv4(),
      role: 'Senior Manager',
      timePeriod: 'JAN 2016 - DEC 2019',
      companyName: 'LEO Company',
      companyLocation: 'Paris - France',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vitae natus non ducimus rem laudantium fuga architecto, modi ad provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, totam?'
    },
    {
      id: uuidv4(),
      role: 'Senior Manager',
      timePeriod: 'JAN 2016 - DEC 2019',
      companyName: 'LEO Company',
      companyLocation: 'Paris - France',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vitae natus non ducimus rem laudantium fuga architecto, modi ad provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, totam?'
    },
  ],
  skills: [
    { id: uuidv4(), value: 'Project Management' },
    { id: uuidv4(), value: 'Executive Presentation' },
    { id: uuidv4(), value: 'Attention to Detail' },
    { id: uuidv4(), value: 'Collaboration' },
    { id: uuidv4(), value: 'Problem Solving' },
    { id: uuidv4(), value: 'Negotiation' },
  ],
  contact: {
    addressFirstLine: '#247 Dream Valley',
    addressSecondLine: '7th Avenue, NY - 10025',
    phoneNumber: '+1 124 568 982',
    email: 'info@yourmail.com'
  },
  education: [
    {
      id: uuidv4(),
      title: "Master's in MBA",
      timePeriod: 'JAN 2015 - DEC 2018',
      institution: 'University of New York',
      country: 'USA',
    },
    {
      id: uuidv4(),
      title: "Bachelor's in BBA",
      timePeriod: 'JAN 2015 - DEC 2018',
      institution: 'University of Washington',
      country: 'USA',
    },
  ],
  references: [
    {
      id: uuidv4(),
      name: 'Mr. James Collenwie',
      role: 'Chief Enginner',
      company: 'MIN Technologies',
      email: 'somename@mail.com',
      phoneNumber: '+123 4567 8901'
    },
  ]
}

export const cvEmpty = {
  name: '',
  role: '',
  avatarUrl: '',
  profileDescription: '',
  workExperience: [],
  skills: [],
  contact: {
    addressFirstLine: '',
    addressSecondLine: '',
    phoneNumber: '',
    email: ''
  },
  education: [],
  references: []
}
