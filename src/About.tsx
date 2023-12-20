import { FormWrapper } from "./FormWrapper"

const About = () => {
    return (
        <>
            <FormWrapper title={`About User`}>
                <label htmlFor="about">Bio</label>
                <textarea
                    name="about"
                    id="about"
                    placeholder="Bio..."
                    className="input">
                </textarea>
            </FormWrapper>
        </>
    )
}

export default About