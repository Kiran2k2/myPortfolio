import React from 'react'
import { VerticalTimeline ,VerticalTimelineElement} from 'react-vertical-timeline-component'
import "../Routes/Education.css"
import { timelineElement } from '../Data/Timeline'

function Education() {
  return (
    <div>
        <h1>Education</h1>
        <VerticalTimeline>
            {
                timelineElement.map(element=>{
                    return(
                        <VerticalTimelineElement key={element.id}
                        date={element.date}
                        dateClassName='date'>

                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    </div>
  )
}

export default Education
