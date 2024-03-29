import { skills } from '../profile'
import { Container, ContainerSkills, ImageSkill, NameSkill, SkillItem, SkillsList, Title } from './Styles'

const Skills = () => {
    return (
        <ContainerSkills name='skills'>
            <Title>Habilidades</Title>
            <Container>
                <SkillsList>
                    {
                        skills.map(({ skill, image }, i) => (
                            <SkillItem key={i}>
                                <ImageSkill src={image} alt='Skills' />
                                <NameSkill>{skill}</NameSkill>
                            </SkillItem>
                        ))
                    }
                </SkillsList>
            </Container>
        </ContainerSkills>
    )
}

export default Skills