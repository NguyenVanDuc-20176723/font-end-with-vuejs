const contact_info = {
    birth : "18/04/1999",
    gender : "Nam",
    phone : "0965974599",
    mail : "nguyenduc180499@gmail.com",
    address : "Số nhà 16 - ngõ 506, Bạch Mai,Trương Định, Hai Bà Trưng, Hà Nội",
    web : "https://fb.com/duc.nv176723"
};

const contact = {
    avatar: "img/avatar.jpg",
    name : "Nguyễn Văn Đức",
    profession : "Web Developer",
    informations: [
        {
            icon: "far fa-calendar-alt",
            text: contact_info.birth
        },
        {
            icon: "fas fa-user",
            text: contact_info.gender
        },
        {
            icon: "fas fa-phone-square-alt",
            text: contact_info.phone
        },
        {
            icon: "fas fa-envelope-square",
            text: contact_info.mail
        },
        {
            icon: "fas fa-map-marker-alt",
            text: contact_info.address
        },
        {
            icon: "fas fa-link",
            text: contact_info.web
        } 
    ]
    
};

const education = {
    year : "2017 - Present",
    school : "Hanoi University of Science and Technolog",
    category : "Information Technology Specialist"
};

const languages = [
    {name: "English", percent: "90%", style: "width: 90%;"},
    {name: "Japan", percent: "65%", style: "width: 65%;"}
];

const experiences = [
    {
        year: "2019 - 2020",
        company_name: "Company Name",
        assume: "Senior Ux Designer",
        description: `A developer is also known as a software developer, 
        computer programmer, programmer, software coder or software engineer.`
    },
    {
        year: "2020 - 2021",
        company_name: "Company Name",
        assume: "Senior Ux Designer",
        description: `A developer is also known as a software developer, 
        computer programmer, programmer, software coder or software engineer.`
    },
    {
        year: "2021 - Present",
        company_name: "Company Name",
        assume: "Senior Ux Designer",
        description: `A developer is also known as a software developer, 
        computer programmer, programmer, software coder or software engineer.`
    }
];

const skills = [
    {name: "Html", percent: "90%", style: "width: 90%;"},
    {name: "CSS", percent: "65%", style: "width: 65%;"},
    {name: "Javascript", percent: "75%", style: "width: 75%;"}
]

const interests = [
    {icon: "fas fa-gamepad", name: "Gaming"},
    {icon: "fas fa-microphone-alt", name: "Singing"},
    {icon: "fas fa-book", name: "Reading"},
    {icon: "fas fa-utensils", name: "Cooking"}
]

var app = new Vue({
    el: "#app",
    data: {
        contact: contact,
        education: education,
        languages: languages,
        experiences: experiences,
        skills: skills,
        interests: interests
    }
});