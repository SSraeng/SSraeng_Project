import React from "react"
import { IntroWrapper, IntroBox, ImageBox, StopImage,
        MotionImage, Content, ContentHeader, Name,
        Position, SSRank, Email, ContentText}
        from '../styled_components/IntroduceStyle';

export function Introduce(props){
    const stopImg = `images/${props.name}.png`
    const motionImg = `images/${props.name}_motion.gif`
    return(
      <IntroWrapper id={props.id}>
        <IntroBox>
            <ImageBox>
                <StopImage
                    alt={`${props.name} AR이미지`}
                    src={stopImg}/>
                <MotionImage
                    alt={`${props.name} AR 모션이미지`}
                    src={motionImg}/>
            </ImageBox>
            <Content>
                <ContentHeader>
                    <Name>{props.name}</Name>
                    <Position>{props.position}</Position>
                </ContentHeader>
                <SSRank>쓰랭 {props.ssRank}</SSRank>
                <Email>{props.email}</Email>
                <ContentText>{props.content}</ContentText>
            </Content>
        </IntroBox>
      </IntroWrapper>
    )
}