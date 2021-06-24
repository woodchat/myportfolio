let resumeData = {
    "imagebaseurl":"https://techonoeticsclub.github.io/",
    "name": "Shubhendu Shishir",
    "role": "Software Engineer II @ Uber",
    "linkedinId":"Your LinkedIn Id",
    "roleDescription": "",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/shubhendu28/",
          "className":"fa fa-linkedin"
        }
      ],
    "aboutme":"A tech enthusiast with self-starter and collaborative  can-do attitude always looking for challenging problem statement."+
             "A  passionate learner who isn't afraid of new tools and technologies to build a great end-to-end customer experience."
             +"I like to read tech blogs and expand knowledge about designing scalable, fault toleratnt and reslilint distributed system.  "
             +"I am B.Tech graduate from computer science & engnieering. I have an experience of working in health & fintech industry and currently"+
             " working in logistic and riding domain in payment integration team. I have experience in quick delivery of end-to-end solutions to validate ideas and produce quality products",
    "address":"Hyderabad, India",
    "emailId":"shubhendushishir628@gmail.com",
    "education":[
      {
        "UniversityName":"NIT Jamshedpur",
        "specialization":"Computer Science & Engineering",
        "MonthOfPassing":"May",
        "YearOfPassing":"2017",
        "Achievements":"Rank 7th - ACM ICPC 2016 Kolkata Regionals"
      }
    ],
    "work":[
      {
        "CompanyName":"Arcesium",
        "specialization":"Senior Software Engineer",
        "MonthOfLeaving":"April 2020 - Current",
        "projects":[
          {
            "heading":"TDP",
            "description":"Design and implemented change log capturing mechanism for generating keys for triggering pnl runs automatically for any amendment in past accounting attributes asynchronously, processing "
                           +" 50000 changed attribute down to 30 mins from 2 hrs. "          
          },  
          {
            "heading":"Multi Book pnl Launcher",
            "description":"Implemented support to launch pnl for multiple books asynchronously thus reducing the overall response time down to 10 seconds from 15 minutes). "          
          }, 
          {
            "heading":"Accrued Interest RESTful Service",
            "description":"Implemented an API to be used by end user for calculating the AI for bonds (i.e profit accrued for bonds on any date). "
          
          },  
          {
            "heading":"Business Entry Report Service",
            "description":"Designed and implemented the report service for all the transactions posted to the accounting engine. This service generates report as a file or can be consumed as an array Table."
                         +" Response time of API on an average noted was 12 seconds for 1 million records. "
          
          },           
          {
            "heading":"Checkers for SLA/SLO",
            "description":"Setup checkers to be triggered as a cron job to send update on slack for each end of day accounting run to be aware that the 99.99% sla commitment don't get missed. "
          
          },
          {
            "heading":"Snowflake integration",
            "description":"Designed and implemented a poc to load the accounting data after processing to AWS s3 as an object which will periodically"
                         +"loaded using snowpipe. This will be further integrated with looker to generate reports by end user. Snowpipe loads 1GB of data in an around 15 sec for S size warehouse. "
          
          },
          {
            "heading":"SQL batch processing utility",
            "description":"Implemented a utility to avoid filling up database transaction log by pausing between each batch for the transaction log usage to fall below specified percentage. "
          }
        ]
      },
      {
        "CompanyName":"Optum | UHG",
        "specialization":"Software Engineer",
        "MonthOfLeaving":"July 2017 - April 2020",
        "projects":[
           {
             "heading": "Insert claim fields in flag messages: ",
             "description": "Developed the feature to allow end user to insertclaim fields in flag message to include claim" 
                            +"fields when showing the result of analysis which in turn fulfilled therequirement for 80% of the clients."+
                            "  Denormalized the tables to reduce the unnecessary database call whichenhanced the load time by 15%"
           },
           {
              "heading":"Login using Jetty form Authentication: ",
              "description":" Login using jetty form authenticate wrapped over 2 steps authentication using key cloak and SAML which will be used by all the clients in the new product release"
           },
           {
              "heading":"Sub-string calculation for rule: " ,
              "description":" Developed the feature to allow end user to getsub-string of the fields from the claim and compare with other field on the same claim or on two different lines of the same claim which in turn allow rule creation on minute level for all claim fields resulting in around 30% improvisation in claim analysis result display "
           },
           {
            "heading":"Drop Flags from the claim: " ,
            "description":" Developed a feature to allow dropping up of specified flag or flags from the claim result which in turn allowed clients to drop flags after certain criterion are met resulting in 80% increase in usability"
           },
           {
            "heading":" Ability to modify default flag of system rule: " ,
            "description":"Developed the feature to allow  end user to modify the default flag of system rule (rules that are not editable) to any other flag of the system rule based on different jurisdiction(state) which in turn enhanced the claim analysis result display by 60% "
           },
           {
            "heading":"Real Time Push Notification / Broadcasting: " ,
            "description":" Developed the feature to allow  real time broadcasting of common resource changes to all the users in the same tenant and apply the updated changes in them resulting in hot reload of changes which in turn saved 2 minutes  of reload time. Awarded 1st position in hackathon."
           },
           {
            "heading":"Centralized Logging - ELK stack: " ,
            "description":"Setting up the ELK components to enable the capability for centralized logging in clustered environment  using Logstash, Elastic search and Kibana which decreases the turnaround time for any developer or QA by 10 minutes to check the logs separately in 2 machines. "
           },
           {
            "heading":"DDR Load Time Enhancement: " ,
            "description":"Enhancement of the UI load time on application start-up using socket IO by sending the data  in chunks while the UI renders. Load time enhanced by 65%. Awarded 1st position in hackathon. "
           },
           {
            "heading":"Same Provider Configuration: " ,
            "description":"Developed the feature to allow  the claim analyzer to recognize whether separate references to provider are actually referring to same provider , thus detecting false claiming of money which in turn saved payer 1 million in a span of 2 months. "
           },
           {
            "heading":"Exceptions for Rule Analyzer: " ,
            "description":"Exceptions allows addition/suppression of specific rules for claim analyzer. As a part of this functionality end user can create, share and copy exceptions to various child enterprise levels within a ruleset (collection of rules) or at system enterprise level to be used by all the clients. "
           },
           {
            "heading":"Error Flag Customization: " ,
            "description":"Developed the feature to allow  the error flag customizable by the end user which will give them the control over the response file enhancing the user experience "
           },
           {
            "heading":"Mathematical Calculations for Rules: " ,
            "description":"Developed a POC to allow mathematical functions to be used in creating rules as. Real time validation of mathematical functions was provided as part of this feature which will be rolled out to all the clients in near future. "
           },
           {
            "heading":"Disabling ILOG rule: " ,
            "description":" Developed the feature to allow the end user to ignore selected rules from a ruleset (collection of rules) that is not required for the claim to be analyzed which in turn allowed end user to continue using the application thus accepted by 70 of the clients"
           },
           {
            "heading":"DDR Workbook Generator: " ,
            "description":"A report to the end user consisting of all the fields related to a particular flag generated after claim analysis "
           }
        ]
        
      }
    ],
    "skillsDescription":"Your skills here",
    "skills":[
      {
        "skillname": "Languages:  ",
        "skillContent": " Java, Javascript, C++, Perl, SQL, Html, CSS"
      },
      {
        "skillname": "Industry Knowledge: ",
        "skillContent":"Software Design, Distributed systems, Object-Oriented Programming, Design patterns, Web Services, Agile Methodologies"
      },
      {
        "skillname":"Tools & Technologies: ",
        "skillContent":" Spring, AWS S3, Mybatis, Jquery, Backbone.js, Socket.io, ELK, Maven, Gradle, JSP, Bootstrap"
      }
    ],
    "portfolio":[
      {
        "name":"project1",
        "description":"mobileapp",
        "imgurl":"images/portfolio/phone.jpg"
      },
      {
        "name":"project2",
        "description":"mobileapp",
        "imgurl":"images/portfolio/project.jpg"
      },
      {
        "name":"project3",
        "description":"mobileapp",
        "imgurl":"images/portfolio/project2.png"
      },
      {
        "name":"project4",
        "description":"mobileapp",
        "imgurl":"images/portfolio/phone.jpg"
      }
    ]
  }
  
  export default resumeData
