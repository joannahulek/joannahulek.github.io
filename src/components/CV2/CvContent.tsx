import { ReactElement } from "react";

export type CvElement = {
    label: string;
    company: string;
    time: string;
    description: ReactElement;
}

export function getWork(){
    return [ubs, johu, mercedes]
}

export function WorkMore(){
    return [mercedes]
}

export function getEducation(){
    return [im, iie]
}

export function EduMore(){
    return []
}

// CV Elements below:

const ubs: CvElement = {
    label: "Web Miner, Software engineer",
    company:"UBS Business Solutions Poland sp. z o.o.",
    time: "Dec 2018 - Present",
    description: (<>
    <p>
        Developing and providing full life cycle of web scraping robots with RPA tools and dedicated web scraping platforms based on Python (in 2018-2019) or Java Script (in 2024):
        <ul>
            <li>collecting requirements, creating, testing and implementing robots</li>
            <li>writing documentation</li>
            <li>regular monitoring and maintenance, adjusting, optimization, processes documentation</li>
            <li>decommission of unnecessary robots and projects</li>
        </ul>
    </p><p>
        Analizyng websites and web applications in terms of:
        <ul>
            <li>architecture, structure</li>
            <li>used technologies</li>
            <li>API</li>
        </ul>
    </p>
    <p>Basic analysis and quality control of data (with SQL) and cooperation with teams involved in further analysis and data processing.</p>
    <p>Developing and maintaining tools for web miners with using Python.</p>
    <p>Audit and improving processes of handling robots and data. Implementation and adjusting new solutions.</p>
    <p>PProviding trainings for coworkers, onboarding new joiners in team as a onboarding buddy.</p>
    <p>Implementation of agile solutions (Scrum-based) and project management in R&D projects.</p>
    </>)
}

const johu: CvElement = {
    label: "Founder, Software Developer",
    company:"JoHu Apps",
    time: "Apr 2018 - Nov 2018",
    description: (<>
    <p>
        Start-up within the Akademickie Inkubatory Przedsiębiorczości (AIP).<br></br>
        Brand created to implement ideas that emerged during my participation in the <a href="https://drive.google.com/file/d/13VpLExOIoHG8hxaV-c5ikUBzWsHxcuKZG5g8fJchkzntT2DtjcnzaXe5Ix8vnXT0XLCJyI2Yr9xpYCI-/view">Android Basics Nanodegree by Google</a>.
    </p><p>
      Creating, designing and implementation of mobile applications for Android (for versions Nougat, Oreo, Pie).
    </p>
    </>)
}

const mercedes: CvElement = {
    label: "Barista",
    company:"We Just Love Coffee",
    time: "May 2018 - Nov 2018",
    description: (<>
        <p>
            Part-time job as a barista at the <i>Salon i Serwis Mercedes-Benz Sobiesław Zasada Automotive</i>.
        </p>
    </>)
}

const im: CvElement = {
    label: "Management",
    company:"Cracow University of Economics",
    time: "2012-2015",
    description: (<p>
        Master's degree<br></br>
        specialty: International Marketing
        </p>)
}

const iie: CvElement = {
    label: "Information Technology and Econometrics",
    company:"Cracow University of Economics",
    time: "2007-2012",
    description: (<p>
        Bachelor's degree<br></br>
        specialty: Information economics
        </p>)
}