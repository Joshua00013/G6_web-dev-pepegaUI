document.getElementById("quizForm").addEventListener("submit",submitAnswer);
let questions=[
    {
        "category": "History of Computing",
        "question":"1. An English mathematician known for being the first computer programmer and also known for their work on the Analytical Engine.",
        "options":["Charles Babbage","Lady Ada Lovelace","Alan Turingr","Herman Hollerith"],
        "correct": 2
    },
    {
        "category": "History of Computing",
        "question":"2. The tabulating machine used punched cards to represent an individual's census data by entering or punching their data onto a blank card. This counting machine is used in the ____  US census.",
        "options":["1890","1980","1880","1898"],
        "correct": 1
    },
    {   
        "category": "History of Computing",
        "question":"3. An English mathematician, inventor, and mechanical engineer known for being the “Father of Computer”.",
        "options":["Alan Turing","Herman Hollerith","Charles Babbage","Konrad Zuse"],
        "correct": 3
    },
    {
        "category": "History of Computing",
        "question":"4. The first calculating machine was built by Blaise Pascal, a French mathematician and physicist, when he was 19 years old in 1642.",
        "options":["Abacus","Pascualine","Leibniz Calculator","Pascaline"],
        "correct": 4
    },
    {
        "category": "History of Computing",
        "question":"5. _________ is a branch of mathematics that was developed by George Boole that deals with logical operations over binary values. The variables are represented by binary numbers, 0 and 1.",
        "options":["Algebra","Boolean Algebra","Geometry","Calculus"],
        "correct": 2
    },
    {
        "category": "Cyber Attacks and Malwares",
        "question":"6.	A cyber attack that disguises themselves as a legitimate organization to gain the user's trust to easily deceive them. These attacks can be in the form of email, domain, website, IP address, or caller ID.",
        "options":["Phishing","Pharming","Spoofing","Sniffing"],
        "correct": 3
    },
    {
        "category": "Cyber Attacks and Malwares",
        "question":"7. This type of malware self-replicates and infects other computers without the user's knowledge. It typically spreads across the network through the user's internet or LAN connection.",
        "options":["Trojan Horse","Worm","Virus","Bots"],
        "correct": 2
    },
    {
        "category": "Cyber Attacks and Malwares",
        "question":"8. A type of malware that secretly installs itself on the user's device and shows unwanted advertisements and multiple pop-ups, commonly known as “spams.” This also can track the user's online behavior and display personalized ads.",
        "options":["Adware","Spyware","Ransomware","Fileless Malware"],
        "correct": 1
    },
    {
        "category": "Cyber Attacks and Malwares",
        "question":"9. It monitors the user's internet activities to gather confidential and sensitive data that is sent to third parties without their consent.",
        "options":["Ransomware","Bots","Phishing","Spyware"],
        "correct": 4
    },
    {
        "category": "Cyber Attacks and Malwares",
        "question":"10.	This type of attack causes the server to become unavailable for the users by flooding it with illegitimate requests, resulting in server crashing. This can disrupt services and cause significant damages to the server's admin.",
        "options":["SQL Injection Attacks","Denial-of-Service Attacks","Password Attacks","Brute Force Attacks"],
        "correct": 2
    },
    {
        "category": "Programming",
        "question":"11.	A word in a programming language that is not allowed to be used as names for identifiers, variables, and function names due to its predefined meaning. Some examples are: public, private, return, break, default, etc.",
        "options":["Reserved words","Normal words","Coding words","Programming words"],
        "correct": 1
    },
    {
        "category": "Programming",
        "question":"12. It considers a program to be a collection of objects made up of data and program elements, such as attributes and methods, that may be utilized both inside and outside of other programs.",
        "options":["Procedural Programming Language","Object-oriented Programming Language","Logic Programming Language","Functional Programming Language"],
        "correct": 2
    },
    {
        "category": "Programming",
        "question":"13. Front-end languages focus on the 'user' aspect of software. It creates the interfaces that users see on a website or application: texts, colors, buttons, images, and navigation. The following are front-end languages except for:",
        "options":["Python","HTML","CSS","React"],
        "correct": 1
    },
    {
        "category": "Programming",
        "question":"14.	An attribute in programming that describes the kind of value the data holds. Using the preferred format ensures the proper collection of data.",
        "options":["Function","Variables","Data Types","Identifier"],
        "correct": 3
    },
    {
        "category": "Programming",
        "question":"15.	A type of programming language that follows a sequence of statements in order to achieve a desired output. Some of the programming languages are: C, C++, Java, Pascal, and BASIC.",
        "options":["Object-oriented Programming Language","Scripting Language","Procedural Programming Language","Logic Programming Language"],
        "correct": 3
    },
    {
        "category": "Networking",
        "question":"16.	The Open Systems Interconnection (OSI) Reference Model is a conceptual framework that describes how the networking system works. This model is split into ____ layers.",
        "options":["9","5","7","10"],
        "correct": 3
    },
    {
        "category": "Networking",
        "question":"17.	Every device in this network topology is connected to a single hub, which is the central node.",
        "options":["Star Topology","Bus Topology","Ring Topology","Mesh Topology"],
        "correct": 1
    },
    {
        "category": "Networking",
        "question":"18.	An internet protocol used for secure remote login and network services. Using this protocol, it gives a secure and encrypted way of accessing and managing servers, network devices, and other computer systems.",
        "options":["IPv4","SSH (Secure Shell)","HTTPS (HyperText Transfer Protocol Secure)","FTP (File Transfer Protocol)"],
        "correct": 2
    },
    {
        "category": "Networking",
        "question":"19.	A network device that allows wireless devices to connect to a wired network; it creates a Wi-Fi network. This also extends the network range and provides connection to areas that do not have access to the internet.",
        "options":["Modems","Hub","Switch","Access Point"],
        "correct": 4
    },
    {
        "category": "Networking",
        "question":"20.	This layer of the OSI Reference Model is used by end-user software and provides protocols allowing the software to transmit and receive information and display relevant data to the users.",
        "options":["Presentation Layer","Network Layer","Application Layer","Physical Layer"],
        "correct": 3
    },

];

let questionIndex = 0;
let score = 0;
const userAnswers = [];

const questionEl = document.querySelector(".question_label");
const quesCategory = document.querySelector(".category");
const listOptions = [
    document.getElementById("label1"),
    document.getElementById("label2"),
    document.getElementById("label3"),
    document.getElementById("label4"),
];

function loadQuestion(){
    //this function iterates through the questions array one by one.
    //use DOM to manipulate the quiz.html and iterate into the contents of the questions array.
    //compare the current index to the length of the questions array. Stop when done iterating through all questions and display scores.

    if(questionIndex >= questions.length){
        sessionStorage.setItem('quizScore', score);
        sessionStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        window.location.href="./result.html"
    }

    const question = questions[questionIndex];
    questionEl.innerText = question.question;
    quesCategory.innerText = question.category;

    question.options.forEach((option, index) => {
        listOptions[index].innerText = `${String.fromCharCode(65 + index)}. ${option}`;
        document.getElementById(`choice${index + 1}`).checked = false;
        }
    );
    //console.log("Page Loaded!");
};

function submitAnswer(event){
    event.preventDefault(); //prevents user from seeing the next question if no answer is selected 

    //listen for the submit button to be clicked
    //record the value of the choice into a variable
    //compare the values of the choice and the correct answer (access it using the correct: index value)
    //add a conditional that adds up the score when correct and increase the question index to let the program
    //know to move on to the next question.

    const yourAnswer = document.querySelector('input[name="quizRadio"]:checked');
    if (!yourAnswer) {
        alert("Error! Please select an answer before proceeding.");
        return;
    }

    const answer = parseInt(yourAnswer.value, 10);
    userAnswers.push(questions[questionIndex].options[answer - 1]);
    if (answer === questions[questionIndex].correct) {
        score++;
    }

    //console.log("Submitted!");
    questionIndex = ++questionIndex
    loadQuestion();
};

//load the first question on page load
loadQuestion();



// Optional: Ilagay sa json file yung contents ng question array. Access gamit yung code below :)
// Load the json file into the javacript. Fetching returns a response. We need to convert
// the response into a javascript object using .json() in order to use it. Await tells the code
// to wait until the fetch request is finished.

//Async functions allows us to use await.


// async function loadQuestions(){
//     const response = await fetch('questions.json');
//     const questions = await response.json();


// }

// questions = loadQuestions();
// console.log(questions);