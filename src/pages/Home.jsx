
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import {HeroSection} from "../components/HeroSection"
import { AboutSection } from "../components/AboutMe"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ExperienceSection } from "../components/ExperienceSection"
import { EducationSection } from "../components/EducationSection"
import { AchievementsSection } from "../components/AchievementsSection"
import {Contact} from "../components/Contact"
export const Home=()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       
        {/*Background Effects*/}
        <StarBackground/>
        {/*Navbar*/}
        <Navbar/>
        {/*Main Content */}
        <main>
            <HeroSection/>
            <AboutSection/>
              <EducationSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ExperienceSection/>
          
            <AchievementsSection/>
            <Contact/>
        </main>

        {/*Footer*/}
    </div>
}