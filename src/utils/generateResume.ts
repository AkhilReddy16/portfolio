import pdfMake from 'pdfmake/build/pdfmake';
import type { TDocumentDefinitions, Style } from 'pdfmake/interfaces';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import type { CareerGroup, PersonalInfo, SkillEntry } from '../modal';

pdfMake.vfs = pdfFonts.vfs;

/*
const MAIL_ICON_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABRxJREFUeF7tmlmoVlUUx382WRKVSqUUTVAYSpAvakLZQANUVNBAoJVDJlaYGfogahPNRNFAE82hDw6gDxmWD1LZgxGSaYOkQmoqajRP5P7DOnI6nPPtc/b5zr3nft/ZcB8uZ6/9rfXfa6/1X2vvfnT56Nfl9tMA0HhAlyPQHIEud4AmCDZHoDkC2QgMAS4FhvZhkP4FNgMrgd/S7Mg6ArOAB4EjE0L/ACuAv2sKyonA+Sm67QAmAKuS39IAuN3t+kstDFwL3ARsrRkIlwBvA/LctPE7MBpYH/+YBOBw4AfgeI9x+4BJwNIagHAYcD8wBzjEo88y4NpWAIwE1hUw6jlAx+XPAjLtnHoK8B4wNueiPwPHtALgIuDDnItF0z63I/FtQbmy068BXgMGFVzoiHgMSx6Bi9MCRY4fELJ32G7kmF5qSn/gSWC6c/0QHlMJAJFFCkLTgF9LmZgtfBawEDi3xPqVAiC9NgE3JqNtCYUjUaWx593uH11yrcoBkH5/WFR+pqSyEj/K8ZFHgbvbsJaW6BEAIl0XA5OB/YHKDzeXHxEonybWowBIgS2WJT4raIRc/kVgQEE53/QeB0AKiSfMdinrWeA/j4bHGhNVHKlilAJAZ1rpTqkoZCwxBpl1JM6zVHpqyOIWgL8Brm4hXwqA080lle7EGkPGNuBm4OOYsPK5gtwTgOh40SGvegWYacF3bpUA6EyLf99rFWOIwqoqH3bc/QFgMPAWcHlRq22+AL3NVYEf2f+qYisD4Azg+5iiY4A3gTMDlRftVoRXGRsyBJw856eYcKUA6AjIA+JDeXq+Y3/35ajGQoxMk9ltsUgxJTkqBSDpAfEfv8yKk5PaZWXGOstdyT7FUe4fM75XCkCaB8T1UAp7HFBTpd1DBZdK75c9C/cqAJFu1xuJUYBrx/jUWlrf5VisFgBITwU2paarciidNUU1xQIrf9XgzDNqA0CkbGgV96Xr6I4HvshjdWxO7QCQboodb2R0bJP2aafV8JgH/FXQeE2vJQBSTA3Lu1x5+1gLKi2OcQuwJsDwSKS2AEQKiviIwMS7OhGVFbv8pYTxtfaAyK4TgFetk3uc5fOBRqTU8fFViz58fB6gQu7g0SraFPXxAJ9yygjKDJ8AU62mEKu7AHjdtdI2AhPtbsK3Vtb3SgE4LfBGKGpr3Wo7nUZmIhKlPsCdwDuBCPgAKFUOhwAwyq6s9uQkMxGJUnWn3sPegkDUBoCoZFahJHosxfKSGd3vKU6c44oveU1U6ubBohYAnG27LtcXmdHtUdGh+KSi5ynrEt2TdcWdWLhXAQhVuhU4wwxMNUfzgNlrAMhtdVenPC+3XV10y1vML3KcegWAsoErL1YKqCJRCozyhrTqsEcBiFLXDZa63s1rSYl5vpRaCoALPRE3ngb1IkPkZYORl+0ljAoRvdIyhXoFasCIUJWmwgo4YmNZQwDscsXMI3blpcuOF9pAX0MAkIxesohUqTmrKzi9X2rlAbqPEO0+ONLu178ClMbSxnWOvj5k1986g1+Hat5mOdHnp53ei0y3GRnrvw9c4QNgHPBBxgWFXodp94Wyevt1GqpTFCD1XCZtY1UA6QVM/EIm84WFnprJtXU7Gx96a7ezTlYndDnUxaXktZraamKS2jS9cPvf8D0x0YXHyU5YC/eloZJa511/es6X6a0+APqS0UG6NgAEwdZBQo0HdNBmBpnSeEAQbB0k1HhAB21mkCmNBwTB1kFCXe8BBwDuqS9QxLM/yQAAAABJRU5ErkJggg=='; // Example: Small mail icon
const GITHUB_ICON_BASE64 = 'data:image/png;base64,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'; // Example: Small GitHub icon
const LINKEDIN_ICON_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA6lJREFUeF7tm1nIDlEYx3+ffd9uFCWS5IqQCxKKQi4oJUWiXBFl35IL+x6l3CJLciFlKYQicYMLIbtEiWxZC+ef+b7GmDnnfb2jmTnfnJvve5tzmuf5zXOeeZYzdTTyUdfI9acEUFpAIyeQtAVaAjOB0UDHAjP6CTwFDgHn4vSIA9AGuAgMLrDicaJvBpZGL8QB2AnM90z5enXGAmfCukUB6Pc7oL2nAPYBM2wApPh7T5WXWmeBMTYAHQIL8JWBHKEce8OIboESQGkBv52gryPVLaAg4zbwHFDsMDD4m2d4qQGQN50D3Atp2xZYCKwGmuaUQioALgWe9HuCkgtMHLHNZwDDgCsWBZsBj4HuOYRQswV8A1obM//hUO4wMMVHAF8CAC7dFHJOd03K4HrNFiCZ+wO3HMLfMSlo3wwUdN0yFQDHgMmWO00FDrokyeh6KgAk+15gsXntfQgp0iQw+z05jgdSAyC93wZVFgVCncz/w4FeGT3ZSm+bKoBKb5qneSWANNLhT8BXy2OVL4gWUvX6/GxZo7Rc2yg8rgHngftBkaZzEFyNBIYCCriqHalYgOqFuyx37hPJETR1PbDSsiZciboMzAVuWOZ3A1aZRGx2lSByD+CAKWPPMrCS8owoE5W3jlZRus8MwAZghcMC9gOTAKXZ1QxtCWWnlWSgmQHYaPzGcotWasQonX5TjeahuescgOun5hbAP+rdsEy1THWAXF2szABsApbVqqVj/e7AedqmZQYgti0VI6lS7UXm1TcN6A28Bo4Eb5Bw2B2n5ATghANSZgC2AEscwrUCTpq+5KiYeRJcHt/mILuYMt0rQHFI0sgMwNYgebIxUJyw1jJhPHDKAfEl0LWoAJ4APSzCa4/PcwBQlbpfHgGoSKq9nTRaOMJrrTtuosOJDgCKIhUm524LbA9K5kmCVdKUvW58xBAHgAvACF8B3AQGFBXADpPRqV9QiwUUGkAaW6DQAFxOsBIfUGgArjigBFDB0ZxCW4ArFPbeAlzJkPcAXOmw9wBcFSHvAVRSE3SdTyy0E6ymLJ4ULZYA8pIL3AWeWeJ6nRiLpqSPTOf4gWWNStpxlaDwko/AVUcyNAhQB+m/psMOGXJ9OZWSWK41dAhXAkijO+y1Bagur/a3r+M0MC6sXNwnM/LYPT0l8FdhJg6AujLq1Po29BrVEb+HLgvQ9TVBt7W5JxReBO02nTj5Y9g+ndVZX5WY2xUcgk6xSfHYIzrlt8MFf7o1i/8L4o41UOJL39YAAAAASUVORK5CYII='; // Example: Small LinkedIn icon
*/

const personalInfo: PersonalInfo = {
    name: "Akhil Reddy K",
    email: "kommareddyakhilreddy@gmail.com",
    phone: "+1 (859) 979-7249",
    linkedin: "https://www.linkedin.com/in/akhil-reddy-kommareddy-418315132/",
    github: "https://github.com/AkhilReddy16"
};

const skills: SkillEntry[] = [
    { icon: 'devicon-java-plain-wordmark colored', label: 'Java' },
    { icon: 'devicon-python-plain colored', label: 'Python' },
    { icon: 'devicon-cplusplus-plain colored', label: 'C++' },
    { icon: 'devicon-r-plain colored', label: 'R' },
    { icon: 'devicon-html5-plain-wordmark colored', label: 'HTML5' },
    { icon: 'devicon-css3-plain colored', label: 'CSS' },
    { icon: 'devicon-javascript-plain colored', label: 'JavaScript' },
    { icon: 'devicon-typescript-plain colored', label: 'TypeScript' },
    { icon: 'devicon-angularjs-plain colored', label: 'Angular' },
    { icon: 'devicon-react-original colored', label: 'React' },
    { icon: 'devicon-oracle-original colored', label: 'Oracle' },
    { icon: 'devicon-mysql-original colored', label: 'MySQL' },
    { icon: 'devicon-postgresql-plain colored', label: 'PostgreSQL' },
    { icon: 'devicon-mongodb-plain colored', label: 'MongoDB' },
    { icon: 'devicon-redis-plain colored', label: 'Redis' },
    { icon: 'devicon-apachespark-plain-wordmark colored', label: 'Spark' },
    { icon: 'devicon-hadoop-plain colored', label: 'Hadoop' },
    { icon: 'devicon-apachekafka-original colored', label: 'Kafka' },
    { icon: 'devicon-spring-original colored', label: 'Spring' },
    { icon: 'devicon-maven-plain colored', label: 'Maven' },
    { icon: 'devicon-amazonwebservices-plain-wordmark colored', label: 'AWS' },
    { icon: 'devicon-anaconda-original colored', label: 'Anaconda' },
    { icon: 'devicon-jenkins-line colored', label: 'Jenkins' },
    { icon: 'devicon-docker-plain colored', label: 'Docker' },
];

export const generateResume = (
    careerData: CareerGroup[]
) => {
    // --- MODIFIED personalInfoDoc START ---
    const personalInfoDoc: any[] = [
        { text: personalInfo.name, style: 'header' },
        { text: `${personalInfo.phone} | ${personalInfo.email} | Jersey City, NJ 07306`, style: 'contactInfo', alignment: 'center', margin: [0, 2, 0, 2] as [number, number, number, number] }, // Phone doesn't typically have an icon in resumes
        /*{
            columns: [
                {
                    image: LINKEDIN_ICON_BASE64,
                    height: 12,
                    width: 12,
                    margin: [0, 2, 5, 2]
                },
                { text: personalInfo.linkedin, style: 'contactInfo', link: personalInfo.linkedin }
            ],
            alignment: 'center',
            margin: [0, 2, 0, 2] as [number, number, number, number]
        },
        {
            columns: [
                {
                    image: GITHUB_ICON_BASE64,
                    height: 12,
                    width: 12,
                    margin: [0, 2, 5, 2]
                },
                { text: personalInfo.github, style: 'contactInfo', link: personalInfo.github }
            ],
            alignment: 'center',
            margin: [0, 2, 0, 20] as [number, number, number, number] // Bottom margin for separation
        }*/
    ];

    const personalSummaryDoc: any[] = [
        { text: 'PROFESSIONAL SUMMARY', style: 'sectionHeader', margin: [0, 10, 0, 5] as [number, number, number, number] },
        {
            text: `As a software engineer, I specialize in the development and optimization of APIs with an emphasis on response speed. My competence includes knowledge of Java, Python, R, C++, RDBMS (Oracle DB, PostgreSQL), MongoDB, Redis Cache, Spring Boot, Maven, REST SOAP APIs, AWS, and CI/CD. With a solid background in performance tuning and profiling, I am skilled at detecting and addressing bottlenecks, resulting in better user experience and faster response times.
        I am an open-minded person who believes that having ambition is admirable. I believe in thinking positively and am always ready to face challenges, which helps me build character strength. I am focused and productive whether working alone or with a group. I consider myself to be someone who embraces diversity of thought and aspires to be the best.`,
            style: 'summaryText', // Apply a new style
            margin: [0, 0, 0, 10] as [number, number, number, number] // Margin below the summary
        }
    ];

    const skillsContent: any[] = [
        { text: 'SKILLS', style: 'sectionHeader', margin: [0, 10, 0, 5] as [number, number, number, number] },
        {
            columns: [
                // Column 1
                {
                    width: '20%', // Each column takes 25% width
                    ul: skills.slice(0, Math.ceil(skills.length / 5)).map(s => ({ text: s.label, style: 'skillItem' }))
                },
                // Column 2
                {
                    width: '20%',
                    ul: skills.slice(Math.ceil(skills.length / 5), Math.ceil(skills.length / 5) * 2).map(s => ({ text: s.label, style: 'skillItem' }))
                },
                // Column 3
                {
                    width: '20%',
                    ul: skills.slice(Math.ceil(skills.length / 5) * 2, Math.ceil(skills.length / 5) * 3).map(s => ({ text: s.label, style: 'skillItem' }))
                },
                // Column 4
                {
                    width: '20%',
                    ul: skills.slice(Math.ceil(skills.length / 5) * 3, Math.ceil(skills.length / 5) * 4).map(s => ({ text: s.label, style: 'skillItem' }))
                },
                // Column 4
                {
                    width: '20%',
                    ul: skills.slice(Math.ceil(skills.length / 5) * 4).map(s => ({ text: s.label, style: 'skillItem' }))
                }
            ],
            margin: [0, 0, 0, 10] as [number, number, number, number]
        }
    ];


    const experienceContent: any[] = [];
    careerData.forEach(group => {
        if (group.data.length > 0) {
            experienceContent.push({ text: group.name.toUpperCase(), style: 'sectionHeader', margin: [0, 10, 0, 5] as [number, number, number, number] });
            group.data.forEach(entry => {
                // --- MODIFIED Job Entry START ---
                experienceContent.push({
                    columns: [
                        { text: `${entry.title}`, style: 'jobTitle', width: '*' }, // Title takes remaining width
                        { text: `${entry.from} – ${entry.to}`, style: 'jobDates', alignment: 'right', width: 'auto' } // Dates right-aligned, takes only needed width
                    ],
                    margin: [0, 5, 0, 0] as [number, number, number, number] // Margin for the entire line (title + dates)
                });
                experienceContent.push({
                    text: entry.company,
                    style: 'jobCompany',
                    margin: [5, 0, 0, 2] as [number, number, number, number] // Indented company name
                });
                // --- MODIFIED Job Entry END ---

                if (entry.description && entry.description.length > 0) {
                    experienceContent.push({
                        ul: entry.description,
                        margin: [10, 0, 0, 10] as [number, number, number, number],
                        fontSize: 10,
                        alignment: 'justify',
                        color: '#333333'
                    });
                }
            });
        }
    });

    const customStyles: { [key: string]: Style } = {
        header: {
            fontSize: 22,
            bold: true,
            alignment: 'center',
            color: '#2f497d',
            margin: [0, 0, 0, 5] as [number, number, number, number]
        },
        contactInfo: { // New style for contact info lines
            fontSize: 11,
            color: '#666666',
        },
        subheader: { // Re-purposed/adjusted subheader for phone
            fontSize: 12,
            alignment: 'center',
            color: '#666666',
            margin: [0, 2, 0, 2] as [number, number, number, number]
        },
        summaryText: {
            fontSize: 10,
            alignment: 'justify', // Justify the text for a cleaner block
            lineHeight: 1.2, // Adjust line height for readability
            color: '#333333',
        },
        link: { // This style might be overridden by contactInfo's color for links
            fontSize: 11,
            alignment: 'center',
            color: 'blue', // This is the default link color, can be adjusted
            margin: [0, 2, 0, 2] as [number, number, number, number]
        },
        mainSectionHeader: {
            fontSize: 16,
            bold: true,
            decoration: 'underline',
            color: '#333333',
        },
        sectionHeader: {
            fontSize: 14,
            bold: true,
            color: '#2f497d',
        },
        jobTitle: {
            fontSize: 11,
            bold: true,
            color: '#000000',
        },
        jobCompany: { // New style for company name
            fontSize: 11,
            italics: true,
            color: '#000000',
        },
        jobDates: {
            fontSize: 10,
            italics: true,
            color: '#000000',
        }
    };

    const docDefinition: TDocumentDefinitions = {
        content: [
            ...personalInfoDoc,
            ...personalSummaryDoc,
            ...skillsContent,
            ...experienceContent,
        ],
        styles: customStyles,
        pageMargins: [40, 40, 40, 40] as [number, number, number, number]
    };

    pdfMake.createPdf(docDefinition).open(); // Or .download() if you prefer direct download
};