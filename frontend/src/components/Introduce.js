import React from "react"

export function Introduce(props){
    const stopImg = `images/${props.name}.png`
    const motionImg = `images/${props.name}_motion.gif`
    return(
      <div className="about_people_wrap" id={props.id}>
        <div className="about_people_wrap_box">
            <div className='about_people_wrap_box_image'>
                <img className='about_people_wrap_box_image_item_stop'
                    alt={`${props.name} AR이미지`}
                    src={stopImg}/>
                <img className='about_people_wrap_box_image_item_motion'
                    alt={`${props.name} AR 모션이미지`}
                    src={motionImg}/>

            </div>
            <div className='about_people_wrap_box_content'>
                <p className='about_people_wrap_box_content_header'>
                    <span className='about_people_wrap_box_content_header_name'>{props.name}</span>
                    <span className='about_people_wrap_box_content_position'>{props.position}</span>
                </p>
                <p className='about_people_wrap_box_content_ssrank_wrap'>
                    <span className='about_people_wrap_box_content_ssrank'>쓰랭</span>
                    <span className='about_people_wrap_box_content_ssrank_number'>{props.ssRank}</span>
                </p>
                <p className='about_people_wrap_box_content_email'>{props.email}</p>
                <p className='about_people_wrap_box_content_description'>{props.content}</p>
            </div>
        </div>
      </div>
    )
}