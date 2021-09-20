
const contact = {
    avatar: "img/avatar.jpg",
    name : "Nguyễn Văn Đức",
    profession : "Web Developer",
    birth : "18/04/1999",
    gender : "Nam",
    phone : "0965974599",
    mail : "nguyenduc180499@gmail.com",
    address : "Số nhà 16 - ngõ 506, Bạch Mai,Trương Định, Hai Bà Trưng, Hà Nội",
    web : "https://fb.com/duc.nv176723"
};

const education = {
    year : "2017 - Present",
    school : "Hanoi University of Science and Technolog",
    category : "Information Technology Specialist"
};

const languages = [
    {name: "English", percent: "90%"},
    {name: "Japan", percent: "65%"}
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
    {name: "Html", percent: "90%"},
    {name: "CSS", percent: "65%"},
    {name: "Javascript", persent: "75%"}
]

var app = new Vue({
    el: "#app",
    data: {
        contact: contact,
        education: education,
        languages: languages,
        experiences: experiences,
        skills: skills
    }
});