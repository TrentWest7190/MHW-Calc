import React from 'react'

const SkillSelect = (props) => {
    return (
        <label>
            {props.skillData.name}:
            <select onChange={props.handleChange}>
              { props.skillData.data.map(skill => (<option data-value={JSON.stringify(skill)} key={skill.level}>Lv {skill.level}</option>)) }
            </select>
        </label>
        
    )
}

export default SkillSelect
