import agent1 from './assets/agent1.jpg'
import agent2 from './assets/agent2.jpg'
import agent3 from './assets/agent3.jpg'
import glass1 from './assets/glass1.jpg'
import glass2 from './assets/glass2.jpg'
import glass3 from './assets/glass3.jpg'
import smart3 from './assets/smart3.jpg'
import smart2 from './assets/smart2.jpg'
import smart1 from './assets/smart1.jpg'
import apartment1 from './assets/apartment1.jpg'
import apartment2 from './assets/apartment2.jpg'
import apartment3 from './assets/apartment3.jpg'
import bungalow1 from './assets/bungalow1.jpg'
import bungalow2 from './assets/bungalow2.jpg'
import bungalow3 from './assets/bungalow3.jpg'
import office1 from './assets/office1.jpg'
import office2 from './assets/office2.jpg'
import office3 from './assets/office3.jpg'
import villa1 from './assets/villa1.jpg'
import villa2 from './assets/villa2.jpg'
import villa3 from './assets/villa3.jpg'


export const categoryItem = [
  {
      category_title: "Smart Home",
  },
  {
      category_title: "Apartment",
  },
  {
      category_title: "Villa",
  },
  {
      category_title: "Bungalow",
  },
  {
      category_title: "Office",
  },
  {
      category_title: "Glass House",
  },
]


export const agents = [
    {
      name: 'Oliver Jonah',
      role: 'Miami Realtor',
      img: agent1, 
    },
    {
      name: 'Angela Jonah',
      role: 'New York Realtor',
      img: agent2, 
    },
    {
      name: 'Samuel Clark',
      role: 'Realtor',
      img: agent3, 
    },
    {
      name: 'Oliver Jonah',
      role: 'Miami Realtor',
      img: agent1, 
    },
    {
      name: 'Angela Jonah',
      role: 'New York Realtor',
      img: agent2, 
    },
  ];


export const properties = [
    {
      id: 1,
      name: 'Ocean Breeze Villa',
      price: '€900,000.00',
      location: '125 Ocean Street, Brighton',
      beds: 4,
      baths: 3,
      image: smart1,
      category : 'Smart Home' ,
      propertyDetails :{ 
          description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
          landsize : '500sqft',
          agentImage: agent1,
          agentName: 'Oliver Jonah',
          agentPhone:'+123-456-789',
          agentEmail: 'oliverjonah@gmail.com',
      }
    },
    {
      id: 2,
      name: 'Jackson glass',
      price: '€750,000.00',
      location: '97 Avenue Road, New York',
      beds: 5,
      baths: 4,
      image: apartment1, 
      category : 'Apartment' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent2,
        agentName: 'Angela Jonah',
        agentPhone:'+123-456-789',
        agentEmail: 'agenlajonah@gmail.com',
    }
    },
    {
      id: 3,
      name: 'Lakeside Cottage',
      price: '€540,000.00',
      location: '50 Lakeside Ave, Los Angeles',
      beds: 3,
      baths: 2,
      image: villa1, 
      category : 'Villa',
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent3,
        agentName: 'Samuel Clark',
        agentPhone:'+123-456-789',
        agentEmail: 'samuelclark.com',
    }
    },
    {
      id: 4,
      name: 'Ocean Breeze Villa',
      price: '€900,000.00',
      location: '125 Ocean Street, Brighton',
      beds: 4,
      baths: 3,
      image: bungalow1, 
      category : 'Bungalow',
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent1,
        agentName: 'Oliver Jonah',
        agentPhone:'+123-456-789',
        agentEmail: 'oliverjonah@gmail.com',
    }
    },
    {
      id: 5,
      name: 'Jackson glass',
      price: '€750,000.00',
      location: '97 Avenue Road, New York',
      beds: 5,
      baths: 4,
      image: office1,
      category : 'Office', 
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent2,
        agentName: 'Angela Jonah',
        agentPhone:'+123-456-789',
        agentEmail: 'agenlajonah@gmail.com',
    }
    },
    {
      id: 6,
      name: 'Lakeside Cottage',
      price: '€540,000.00',
      location: '50 Lakeside Ave, Los Angeles',
      beds: 3,
      baths: 2,
      image: glass1, 
      category : 'Glass House',
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent3,
        agentName: 'Samuel Clark',
        agentPhone:'+123-456-789',
        agentEmail: 'samuelclark.com',
    }
    },
    {
      id: 7,
      name: 'Ocean Breeze Home',
      price: '€900,000.00',
      location: '125 Ocean Street, Brighton',
      beds: 4,
      baths: 3,
      image: smart2,
      category : 'Smart Home' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent1,
        agentName: 'Oliver Jonah',
        agentPhone:'+123-456-789',
        agentEmail: 'oliverjonah@gmail.com',
    }
    },
    {
      id: 8,
      name: 'Jackson glass',
      price: '€750,000.00',
      location: '97 Avenue Road, New York',
      beds: 5,
      baths: 4,
      image: apartment2, 
      category : 'Apartment' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent2,
        agentName: 'Angela Jonah',
        agentPhone:'+123-456-789',
        agentEmail: 'agenlajonah@gmail.com',
    }
    },
    {
      id: 9,
      name: 'Lakeside Cottage',
      price: '€540,000.00',
      location: '50 Lakeside Ave, Los Angeles',
      beds: 3,
      baths: 2,
      image: villa2, 
      category : 'Villa' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent3,
        agentName: 'Samuel Clark',
        agentPhone:'+123-456-789',
        agentEmail: 'samuelclark.com',
    }
    },
    {
      id: 10,
      name: 'Ocean Breeze Villa',
      price: '€900,000.00',
      location: '125 Ocean Street, Brighton',
      beds: 4,
      baths: 3,
      image: bungalow2, 
      category : 'Bungalow' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent1,
        agentName: 'Oliver Jonah',
        agentPhone:'+123-456-789',
        agentEmail: 'oliverjonah@gmail.com',
    }
    },
    {
      id: 11,
      name: 'Jackson glass',
      price: '€750,000.00',
      location: '97 Avenue Road, New York',
      beds: 5,
      baths: 4,
      image: office2,
      category : 'Office' , 
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent2,
        agentName: 'Angela Jonah',
        agentPhone:'+123-456-789',
        agentEmail: 'agenlajonah@gmail.com',
    }
    },
    {
      id: 12,
      name: 'Lakeside Cottage',
      price: '€540,000.00',
      location: '50 Lakeside Ave, Los Angeles',
      beds: 3,
      baths: 2,
      image: glass2, 
      category : 'Glass House' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent3,
        agentName: 'Samuel Clark',
        agentPhone:'+123-456-789',
        agentEmail: 'samuelclark.com',
    }
    },
    {
      id: 13,
      name: 'Ocean Breeze Villa',
      price: '€900,000.00',
      location: '125 Ocean Street, Brighton',
      beds: 4,
      baths: 3,
      image: smart3,
      category : 'Smart Home' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent1,
        agentName: 'Oliver Jonah',
        agentPhone:'+123-456-789',
        agentEmail: 'oliverjonah@gmail.com',
    }
    },
    {
      id: 14,
      name: 'Jackson glass',
      price: '€750,000.00',
      location: '97 Avenue Road, New York',
      beds: 5,
      baths: 4,
      image: apartment3, 
      category : 'Apartment' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent2,
        agentName: 'Angela Jonah',
        agentPhone:'+123-456-789',
        agentEmail: 'agenlajonah@gmail.com',
    }
    },
    {
      id: 15,
      name: 'Lakeside Cottage',
      price: '€540,000.00',
      location: '50 Lakeside Ave, Los Angeles',
      beds: 3,
      baths: 2,
      image: villa3, 
      category : 'Villa' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent3,
        agentName: 'Samuel Clark',
        agentPhone:'+123-456-789',
        agentEmail: 'samuelclark.com',
    }
    },
    {
      id: 16,
      name: 'Ocean Breeze Villa',
      price: '€900,000.00',
      location: '125 Ocean Street, Brighton',
      beds: 4,
      baths: 3,
      image: bungalow3, 
      category : 'Bungalow' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent3,
        agentName: 'Samuel Clark',
        agentPhone:'+123-456-789',
        agentEmail: 'samuelclark.com',
    }
    },
    {
      id: 17,
      name: 'Jackson glass',
      price: '€750,000.00',
      location: '97 Avenue Road, New York',
      beds: 5,
      baths: 4,
      image: office3,
      category : 'Office' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent3,
        agentName: 'Samuel Clark',
        agentPhone:'+123-456-789',
        agentEmail: 'samuelclark.com',
    } 
    },
    {
      id: 18,
      name: 'Lakeside Cottage',
      price: '€540,000.00',
      location: '50 Lakeside Ave, Los Angeles',
      beds: 3,
      baths: 2,
      image: glass3, 
      category : 'Glass House' ,
      propertyDetails :{ 
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        landsize : '500sqft',
        agentImage: agent3,
        agentName: 'Samuel Clark',
        agentPhone:'+123-456-789',
        agentEmail: 'samuelclark.com',
    }
    },
  ];
  