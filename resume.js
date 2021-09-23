var resume = {
    "basics": {
      "name": "Madhan s",
          "email": "srkmadhan@gmail.com",
      "phone": "9787376609",
      "degree": "BE mechanical engineering",
            "location": {
        "address": "B6 prabhu towers, velippalayam",
        "postalCode": "611001",
        "city": "Nagapattinam",
        "country": "India",
        "State": "Tamil nadu"
      },
      
    },
    "work": 
      {
        "Searching for a job" : "yes"
        
      },
    
    
    "education": 
      {
        "institution": "E.G.S pillay engineering college",
        "area": "mechanical engineering",
        "studyType": "full time",
        
        "cgpa": "6.9",
        
         
       
      },
  
    
   
    "skills": [
      {
        "name": "ms office , photoshop , R&ac mechanism",
        
      }
    ],
    "languages": [
      {
        "language": "Tamil, English",
        "fluency": "Tamil and english"
      }
    ],
    "interests": [
      {
        "name": "reading boks, watching movies, developing web app",

      }
    ]
  }
  
  for (const x in resume) {
    console.log(x,resume[x])
  }
