import React from 'react'

const Header = (props) => {
    return (
        <>
        <h2>{props.course}</h2>
        </>
    )
}
const Part = (props) => {
    return (
        <>
        <p>
            {props.part.name} {props.part.exercises}
        </p>
        </>
    )
}
const Content = ({parts}) => {
    return (
        <>
        {parts.map((part, i) => 
            <Part part={part} key={i} />
        )}
        </>
    )
}
const Total = (props) => {
    return (
        <>
        <b>total of {props.amount} exercises</b>
        </>
    )
}

const Course = ({course}) => {
    return (
        <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total amount={course.parts.reduce((sum, cur) => sum + cur.exercises, 0)} />
        </div>
    )
}

export default Course;