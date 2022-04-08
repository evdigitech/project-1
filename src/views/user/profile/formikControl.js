import React from 'react'
import DatePicker from '../../../components/formikComponents/datePicker'
import ReactSelect from '../../../components/formikComponents/reactSelect'
import Arraybody from '../homePage/modalsection/goals/arraybody'
import Education from './education'
import Experience from './experience'
import Language from './language'
import PersonalInfo from './personalInfo'
import ProfileCard from './profileCard'
import Skill from './skill'

function FormikControl(props) {
    const {control, ...rest } = props
    switch(control){
        case 'skills': return <Skill {...rest}/>
        case 'profileCard': return <ProfileCard {...rest}/>
        case 'education' : return <Education {...rest} /> 
        case 'experience' : return <Experience {...rest}/>
        case 'language' : return <Language {...rest}/>
        case 'personalInfo' : return <PersonalInfo {...rest} />
        case 'date' : return <DatePicker {...rest} />
        case 'reactSelect' : return <ReactSelect {...rest} />
        case 'array' : return <Arraybody {...rest} />
        default: return null
    
        
    }
  
}

export default FormikControl